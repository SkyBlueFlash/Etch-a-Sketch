var color = 'white';

function createDivs(num= 16) {
    let container = document.getElementById("container");
    for (let i = 0; i < num; ++i) {
        let div = document.createElement('div');
        div.classList.add("divParent");
        for (let j = 0; j < num; ++j) {
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
    Event.currentTarget.style.backgroundColor = color; 
}

function reset() {
    let container = document.getElementById("container");
    while (container.hasChildNodes()) {
        clear(container.firstChild);
    }
    let num = prompt("Enter the number of grids you want: ");
    createDivs(num);
}

function clear(node) {
    while (node.hasChildNodes()) {
      clear(node.firstChild);
    }
    node.parentNode.removeChild(node);
}

function changeColors(col) {
    color = col;  
}
