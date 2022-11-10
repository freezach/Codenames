 function ValidWord(){
    var dict = JSON.parse(dictionary);
    //var jsonprinttest = document.getElementById("test");
    var dict_length= dict[0].words.length;


    //loop iterates through all the words in the JSON file and adds them to the "test" element
    //for (var i = 0; i < 25/*dict[0].words.length*/; i++) {
        var word = dict[0].words[Math.round(Math.random()*dict_length)];
        word;
        //jsonprinttest.innerHTML += "\n";
        //console.log(Math.round(Math.random()*5));
    //}
    return word.toUpperCase();

}

function change_table_val(){
    var table = document.getElementById('table');
    setClickHandlers();
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            try{
                table.rows[j+1].cells[i].innerHTML = ValidWord();
            }
            catch(err){

            }

        }

    }

}

function generateValidWords() {
  //Randomly selects an word from the dictionary sheet
  //adds that word to an array (to help with checking later)
  //Checks that the word hasn't already been used
  //Returns that word
  //var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dictionary")
  var row = puzzleArray[indexI];
  var col = TransposeArray(puzzleArray, indexJ);
  var unique = true;
  //do {
  var wordOfTheDay = dict[Math.round(Math.random()*dict.length)];
  //check if unique in row
  for(var i = 0; i < 5; i++){
      if(row[i] == wordOfTheDay){
        unique = false;
      }

  }

  //check if unique in column
  for(var j = 0; j < 5; j++){
      if(col[j] == wordOfTheDay){
        unique = false;
      }

  }
  if(unique){
    return wordOfTheDay;
  }
  //Logger.log(dictionary);
  //}
  //while (!unique)


}

// function TransposeArray(array, colNum){
//   //takes an array and desired column number
//   //turns that column into a 1xn array
//   //var array = [[1, 2, 3], [1, 2, 3], [1, 2]];
//   //colNum = 2;
//   var newArray = [];
//   /*for(var i = 0; i < array.length; i++){
//         newArray.push([])
//   }*/
//   //Logger.log(newArray)

//   for(var i = 0; i < array.length; i++){
//       newArray.push(array[i][colNum])
//   }

//   //Logger.log(newArray);
//   return newArray;
// }

function guess(){
    alert("good guess!");
    //Check if there are guesses left
        //if there are, continue
        //if not, display a message to user that there are no more guesses allowed

    //Check if the selected square matches the team selecting
    //
}

function setClickHandlers() {
    // Click handlers that change the content of switches to 'On' or 'Off'.
    var cells = document.querySelectorAll('#table td');

    Array.prototype.forEach.call(cells, function (td) {
        td.addEventListener('click', changeCell);
    });
}

function changeCell() {
    var color = "purple"
    if (this.style.backgroundColor == color)
    {
        this.style.backgroundColor = null;
    }
    else
    {
        this.style.backgroundColor = color;
    }
}
