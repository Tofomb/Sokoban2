
document.addEventListener("keydown", myMovement);


//reads player input to move player character
function myMovement(e){
    let p = document.getElementsByClassName("entity-player")[0];
    e.preventDefault();
    
    if(e.code == "KeyW" || e.code == "ArrowUp"){
        px = p.dataset.X;
        py = p.dataset.Y - 1;
        let np = document.getElementById(px + "x" + py + "y");
        ax = px;
        ay = py-1;      
        let ap = document.getElementById(ax + "x" + ay + "y")
        blockMover(np, ap);
        reMovement(p, np);
    }

    else if(e.code == "KeyA" || e.code == "ArrowLeft"){
        px = p.dataset.X - 1;
        py = p.dataset.Y;
        let np = document.getElementById(px + "x" + py + "y");
        ax = px-1;
        ay = py;      
        let ap = document.getElementById(ax + "x" + ay + "y")
        blockMover(np, ap);
        reMovement(p, np);

    }
    else if(e.code == "KeyS" || e.code == "ArrowDown"){
        px = p.dataset.X;
        py = +p.dataset.Y+1;
        let np = document.getElementById(px + "x" + py + "y");
        ax = px;
        ay = py+1;      
        let ap = document.getElementById(ax + "x" + ay + "y")
        blockMover(np, ap);
        reMovement(p, np);
    }
    else if(e.code == "KeyD" || e.code == "ArrowRight"){
        px = +p.dataset.X+1;
        py = p.dataset.Y;
        let np = document.getElementById(px + "x" + py + "y");
        ax = px+1;
        ay = py;
        let ap = document.getElementById(ax + "x" + ay + "y")
        blockMover(np, ap);
        reMovement(p, np);
    }
    tileGoalChecker();

}

  //checks stuff related to tile-goal
  function tileGoalChecker(){
      var goalBlocks = document.getElementsByClassName("tile-goal entity-block");
      
      //Checks if there are any unmarked goal-tiles that have block
      for (let ii = 0; ii < goalBlocks.length; ii++) {
        if(!goalBlocks[ii].classList.contains("entity-block-goal")){
            goalBlocks[ii].classList.add("entity-block-goal");
        }
      }
      //checks if any marked goal-tile no longer have a block
      var maybeNotGoalBlock = document.getElementsByClassName("entity-block-goal");
      for (let ii = 0; ii < maybeNotGoalBlock.length; ii++) {
          if(!maybeNotGoalBlock[ii].classList.contains("entity-block")){
              maybeNotGoalBlock[ii].classList.remove("entity-block-goal");
          }
      }
      //checks if all goal-tiles have blocks
      var allGoalBlock = document.getElementsByClassName("tile-goal"); 
      var allClear = true;
      for (let ii = 0; ii < allGoalBlock.length; ii++) {      
          
          if(!allGoalBlock[ii].classList.contains("entity-block-goal")){
              allClear = false;
          }
      }
      if(allClear){
        alert("Victory");
      }
  }

  //moves legal block
  function blockMover(tileAhead, afterTile){
      if(tileAhead.classList.contains("entity-block")){
          //checks if there are two blocks ahead or a block and a wall
          if(!afterTile.classList.contains("entity-block") && !afterTile.classList.contains("tile-wall")){
              afterTile.classList.add("entity-block");
              tileAhead.classList.remove("entity-block");
          }
      }
  }

  //moves player character to viable tile
  function reMovement(oldTile, newTile) {
        //collider
        if(!newTile.classList.contains("entity-block")){  
        if(!newTile.classList.contains("tile-wall")){

        //Ny version med multibla klasser
        // oldTile.innerHTML = " ";
        oldTile.classList.remove("entity-player");
        // newTile.innerHTML = "P"
        newTile.classList.add("entity-player");

        }
    }
  }


