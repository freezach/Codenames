function GeneratePattern(){
    //generates a color pattern for the Spymasters
    //Create a list of 9 blues, 8 reds, 5 civilians, and 1 assassin
    //Shuffle this list
    //Apply top item to respective <td> element and remove it from the list
    
    //Prevent from showing the pattern if the player is a spy
    
    
    var class_list = [];
    for (var i = 0; i < 9; i++) {
        class_list.push("teamBlue");
    }
    for (i = 0; i < 8; i++) {
        class_list.push("teamRed");
    }
    for (i = 0; i < 7; i++) {
        class_list.push("civilian");
    }
    class_list.push("assassin");
    shuffleArray(class_list);
    //console.log(class_list);
    var table = document.getElementById('table');
    var player_type = document.getElementById('role').value;
    //console.log(player_type);
    
    
        for (i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            try{
                var thisCell = table.rows[j+1].cells[i];
                //get class name
                //thisCell.classList
                //remove that class name from the cell
                thisCell.removeAttribute("backgroundColor");
                thisCell.classList.remove("assassin");
                thisCell.classList.remove("teamBlue");
                thisCell.classList.remove("teamRed");
                thisCell.classList.remove("civilian");
                if(player_type == "Codemaster"){
                    thisCell.classList.add(class_list.shift());
                }
            }
            catch(err){
                
            }
            
        }
        
    }
        
    
    
    

    
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
//see https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function submitClue(){
    
}