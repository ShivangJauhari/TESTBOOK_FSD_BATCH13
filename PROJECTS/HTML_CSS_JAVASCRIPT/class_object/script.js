const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
        },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle2 = new Circle(1);

