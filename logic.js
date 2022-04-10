function createDivs() {
    let container = document.getElementById("container");
    for (let i = 0; i < 16; ++i) {
        let div = document.createElement('div');
        div.classList.add("divParent");
        for (let j = 0; j < 16; ++j) {
            let divChild = document.createElement('div');
            let p = document.createElement('p');
            p.addEventListener('mouseover', changeColor(Event));
            divChild.classList.add("divChild");
            div.appendChild(divChild);
            divChild.appendChild(p);
        }
        container.appendChild(div);
        
    }
}

function changeColor(e) {
    alert(e);
}