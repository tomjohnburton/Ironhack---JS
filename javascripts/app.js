var board = [ 
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
]




var rover = new Object();
rover.direction = "N";
rover.x = 0;
rover.y = 0;
rover.cmds = [];
rover.travelLog = [[rover.x,rover.y]];

board[rover.x][rover.y] = 'R';

function turnLeft(rover){
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
  }
    console.log("turnLeft was called!");

}

function turnRight(rover){
    switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
  console.log("turnRight was called!");

}

function moveForward(rover){
  switch (rover.direction){
    case "N":
    rover.y += 1;
    break;
    case "S":
    rover.y -= 1;
    break;
    case "E":
    rover.x += 1;
    break;
    case "W":
    rover.x -= 1;
    break;   
  }
  console.log("moveForward was called");
}

function moveBack(rover){
  switch (rover.direction){
    case "N":
    rover.y -= 1;
    break;
    case "S":
    rover.y += 1;
    break;
    case "E":
    rover.x -= 1;
    break;
    case "W":
    rover.x += 1;
    break;   
  }
  console.log("moveBack was called");
}


function moveFailure(){
  console.log(rover.travelLog);
  // console.log("The rovers current position is " + rover.x + ", " + rover.y);
  // console.log("The rover is facing " +rover.direction);
  return console.log("Cannot move here");
}
 

function controller(cmds){
  board[rover.x][rover.y] = ' ';

  for (var i = 0; i < cmds.length ; i++){
 
    switch (cmds[i]){
      case 'f':
      moveForward(rover);
      break;
      case 'l':
      turnLeft(rover);
      break;
      case 'r':
      turnRight(rover);
      break;
      case 'b':
      moveBack(rover);
      break;
    }
    
    if (rover.x < 0){
      rover.x = 0;
      moveFailure();
    } 
    if (rover.y < 0){
      rover.y = 0;
      moveFailure();
    } 
    if (rover.x > 10 ){
      rover.x = 10 ;
      moveFailure();
    } 
    if (rover.y > 10){
      rover.y = 10;
      moveFailure();
    }   
    
    
    /*if (rover.x || rover.y > 10){
      return console.log("Cannot move here");}*/
    }
    console.log("The rovers current position is " + rover.x + ", " + rover.y);
    console.log("The rover is facing " +rover.direction);
    board[rover.x][rover.y] = 'R';
    console.log(board.join('\n') + '\n\n');
}


