<script lang='ts'>
    import { onMount } from "svelte";

    import * as RAPIER from '@dimforge/rapier3d-compat'
    import * as THREE from 'three'

    import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
    
    import Viewport from "./Viewport.svelte";
    import Session from './Session'
    import Token   from "./Token"

    let _3js_viewport : Viewport
    let _3js_camera : THREE.PerspectiveCamera
    let _3js_orbit : OrbitControls

    let _r3d_world: RAPIER.World

    let _session

    onMount(async () => {
        
        // setup rapier3d
        await RAPIER.init();
        _r3d_world = new RAPIER.World({x: 0.0, y: -9.81, z: 0.0});

        // setup threejs
        _3js_camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        _3js_orbit = new OrbitControls(_3js_camera, _3js_viewport.canvas());
        _3js_camera.position.y =  16
        _3js_camera.position.z = -16

        // create and add light in THREE
        const _3js_light = new THREE.DirectionalLight();
        _3js_light.castShadow = true;
        _3js_viewport.add(false, _3js_light)

        // create and add grid helper in THREE
        const _3js_grid_helper = new THREE.GridHelper(32, 32)
        _3js_viewport.add(false, _3js_grid_helper)
        _3js_grid_helper.position.y = .50125

        // create and add surface in THREE
        const _3js_surface_geometry = new THREE.BoxGeometry(32, 1, 32)
        const _3js_surface_material = new THREE.MeshBasicMaterial({color: 0x2f2f2f })
        const _3js_surface_mesh = new THREE.Mesh(
            _3js_surface_geometry,
            _3js_surface_material
        )
        _3js_viewport.add(false, _3js_surface_mesh)

        // create and add surface in RAPIER
        const _r3d_surface_rigidbody_desc = RAPIER.RigidBodyDesc.fixed()
        const _r3d_surface_collider_desc  = RAPIER.ColliderDesc.convexHull(
            new Float32Array(_3js_surface_geometry.getAttribute('position').array)
            // new Uint32Array(_3js_surface_geometry.index.array)
        )
        const _r3d_surface_rigidbody = _r3d_world.createRigidBody(_r3d_surface_rigidbody_desc                        )
        const _r3d_surface_collider  = _r3d_world.createCollider (_r3d_surface_collider_desc , _r3d_surface_rigidbody)

        update()
    })

    function update() {
        

        if(_dragging) {
            _dragging._r3d_rigidbody.applyImpulse(
                new RAPIER.Vector3(0, 1, 0),
                true
            )
        }

        _r3d_world.step()

        Object.values(_tokens).forEach(token => {
            token.update()
        })

        _3js_orbit.update()
        _3js_viewport.render(_3js_camera)

        requestAnimationFrame(update)
    }

    let _dragging : Token

    function onMouseDown(event: MouseEvent) {
        const pickable = _3js_viewport.pick({
            x: event.clientX,
            y: event.clientY
        }, _3js_camera)
        // JANK
        if(pickable) Object.values(_tokens).forEach((token : Token) => {
            if(token._3js_mesh === pickable._viewable) {
                if(!token._owner) {
                    if()
                        onRequestOwnership({ tokenId: token._uuid }, TRYSTERO.selfId)
                    if(_is_client)
                        requestOwnership({ tokenId: token._uuid })
                }
            }
        })
    }

    function onMouseUp(event: MouseEvent) {
        if(_dragging) {
            // notify server of ownership
            // _dragging._r3d_rigidbody.setBodyType(RAPIER.RigidBodyType.Fixed  )
        }
        _dragging = undefined
    }

    
    let _tokens : object = { }

    function spawn() {
        // spawn tokens
        for(let i = 0; i < 8; i ++)
        for(let j = 0; j < 8; j ++) {
            const uuid = `${i}${j}`
            const token = new Token(uuid)
            token._r3d_rigidbody_desc.setTranslation(
                2 * i - 8, 1, 2 * j - 8
            )
            _tokens[uuid] = token

            token.spawn(_3js_viewport, _r3d_world)
        }
    }

    let _room_id : string = 'hello'
    let _peers   : object = { }

    let requestOwnership
    let receiveOwnership
    let releaseOwnership

    function onHost() {
        _session = Session.host(_room_id)
        // spawn tokens
        spawn()
    }

    let _server_peerId : string

    function onJoin() {
        _session = Session.join(_room_id)

        // we need to wait until we receive the state of the map
        _session.on('spawn', () => {
            spawn()
        })
    }

    function onRequestOwnership(request, peerId) {
        if(_is_server && !_tokens[request.tokenId]._owner) {
            _tokens[request.tokenId]._owner = peerId
            receiveOwnership({ peerId: peerId, tokenId: request.tokenId })
        }
    }

    function onReceiveOwnership(receive, peerId) {
        if(_is_client && peerId == _server_peerId) {
            _tokens[receive.tokenId]._owner = receive.peerId
        }
    }

    function onReleaseOwnership(release, peerId) {
        if(_is_server && _tokens[release.tokenId]._owner === peerId) {
            _tokens[release.tokenId]._owner = undefined
            receiveOwnership({ peerId: undefined, tokenId: release.tokenId })
        }
    }

    // https://en.wikipedia.org/wiki/Platonic_solid#Cartesian_coordinates
</script>

<div class='container'>
    <Viewport bind:this={_3js_viewport} on:mousedown={onMouseDown} on:mouseup={onMouseUp}/>

    {#if !_is_client && !_is_server}
    <div class='ui'>
        <input type='button' value='Host' on:click={onHost}/>
    
        <input type='text'  bind:value={_room_id}/>
        <input type='button' value='Join' on:click={onJoin}/>
    </div>
    {:else}
    <div class='ui'>
        <ul>
            {#each Object.values(_peers) as _peer}
            <li>{`${_peer}`}</li>
            {/each}
        </ul>
    </div>
    {/if}    

</div>




<style>
    .container {
        display:flex
    }

    .ui {
        position:absolute;
        top: 0px;
        left: 0px;
        z-index: 1;
    }

    input {
        font-size: 32px;
    }
</style>
