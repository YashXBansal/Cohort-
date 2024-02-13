type KeyInput = "up" | "down" | "left" | "right";

enum Direction {
    Up = 12, 
    Down = "hi",  
    Left = 12123, 
    Right = "asdfa"
}

function doSomething( keyPressed: Direction) {   
}
// doSomething("up")
// doSomething("down")
// doSomething("dowadn")
doSomething(Direction.Up );
console.log(Direction.Up );
doSomething(Direction.Down);
console.log(Direction.Down);
