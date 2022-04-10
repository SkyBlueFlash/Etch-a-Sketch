function createDivs() {
    let container = document.getElementById("container");
    for (let i = 0; i < 16; ++i) {
        let div = document.createElement('div');
        div.classList.add("divParent");
        for (let j = 0; j < 16; ++j) {
            let divChild = document.createElement('div');
            let p = document.createElement('p');
            divChild.addEventListener('mouseenter', changeColor);
            divChild.classList.add("divChild");
            div.appendChild(divChild);
            divChild.appendChild(p);
        }
        container.appendChild(div);
        
    }
}

function changeColor(Event) {
    Event.currentTarget.style.backgroundColor = "red";
}

function reset() {

}