function makeGrid(squares) {
    let item = document.getElementsByClassName('container')[0];
    // console.log(item)
 
    let row;
    let box;

    for (let i = 0; i < squares; i++) {
        row = document.createElement('div');
        row.className = 'row';
        item.appendChild(row);


        for (let n = 0; n < squares; n++) {
            box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
            box.style.height = (1000/squares) + 'px';
            console.log(box.style.height);
            box.style.width = (1000/squares) + 'px';
        } 
    }
    // console.log(1000/)
}

function changeColor(e) {
    console.log(e)
    // e.target.className = 'blackbox'; bottom line doesn't require css
    e.target.style.backgroundColor = 'black';
}



let squares = prompt("Enter # of squares per side");
while (isNaN(squares) || 0 > squares || squares > 99 || squares == '') {
    squares = prompt("Enter # of squares per side");
}





makeGrid(squares);

let boxes = document.getElementsByClassName('box');
boxes = Array.from(boxes);
// console.log(boxes)

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', changeColor);
}