const setMove = e => {

    const camera = document.querySelector("#camera");
    const position = camera.getAttribute("position");
    const step = 0.1;

    console.log(position);
    
    if(e.key == 'w') {
        position.x -= step;
    } 

    camera.setAttribute('position', position);

    if(e.code === 'Space') {
        setJump(camera, 8);
        setTimeout(() => setJump(camera, -5), 440);

    }
}

document.onkeydown = setMove;

function setJump(entity, y) {
    let camX = camera.getAttribute("position").x;
    let camZ = camera.getAttribute("position").z;

    entity.setAttribute('animation__click', `property: position; to: ${camX} ${y} ${camZ}; dur: 450`);
}
