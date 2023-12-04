class Shape{
    static total = 100;
    constructor(a) {
        this.a = a;
    }

    static fill(){
        Shape.total = 100;
        alert('Фарбу поповнено');
    }
    draw(){
        if (Shape.total <= 0){
            alert('Фарба закінчилась');
        }
        const canvas = document.querySelector('#canvas');
        const shape = document.createElement('div');
        shape.classList.add('shape');
        const color = 255 - Shape.total * 2.2;
        shape.style.backgroundColor = `rgb(255, ${color}, ${color})`;

        canvas.append(shape);
        Shape.total -= 10;
    }
}

function draw(){
    const square = new Shape();
    square.draw();
}

function fill(){
    Shape.fill();
}

