/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
    Wall: "tile-wall",
    Space: "tile-space",
    Goal: "tile-goal",
  };
  
  /*   Enum of CSS Classes for the moving elements   */
  var Entities = {
    Character: "entity-player",
    Block: "entity-block",
    BlockDone: "entity-block-goal",
  };
  
  /*  Legend
      W = Wall
      B = Movable block
      P = Player starting position
      G = Goal area for the blocks
  */
  var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["B"],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        ["B"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        ["B"],
        [" "],
        ["B"],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        ["W"],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
      ],
      [
        ["W"],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        ["G"],
        ["G"],
        ["W"],
      ],
      [
        ["W"],
        [" "],
        ["B"],
        [" "],
        [" "],
        ["B"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        ["G"],
        ["G"],
        ["W"],
      ],
      [
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        ["W"],
        ["P"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        ["G"],
        ["G"],
        ["W"],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        ["W"],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
      [
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
        [" "],
      ],
    ],
  };


////Map Maker

window.onload = (event) => {
  MapMaker(tileMap01);
}

function MapMaker(tileMap) {

for (let iY = 0; iY < tileMap.height; iY++) {
    for(let iX = 0; iX < tileMap.width; iX++){

      var div = document.createElement('div');
      div.id = iX+'x'+iY+'y';
     // div.innerHTML = tileMap01.mapGrid[iY][iX];
      div.dataset.X = iX;
      div.dataset.Y = iY;


      if(tileMap.mapGrid[iY][iX] == "W"){
        div.className = Tiles.Wall;

      }
      else if(tileMap.mapGrid[iY][iX] == "P"){
        div.className = Entities.Character;

      }
      else if(tileMap.mapGrid[iY][iX] == "B"){
        div.className = Entities.Block;
    }
    else if(tileMap.mapGrid[iY][iX] == "G"){
        div.className = Tiles.Goal;
    }
    else if(tileMap.mapGrid[iY][iX] == "D"){ //D för done?
        div.className = Entities.BlockDone;
    }
    
    else{
        div.className = Tiles.Space;
    }


      document.getElementById("myItemList").appendChild(div);
    }

    //var GS = document.getElementById("GS");

    //GS.insertRule(".grid > div{text-align: center;width: 100%/"+tileMap01.width+";height: 100%/"+tileMap01.height +";}",0);


  }



};
  