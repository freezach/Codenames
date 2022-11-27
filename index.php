<!DOCTYPE html>
<html>
<link rel="stylesheet" href="codenameStyles.css" />
<script src="dictionary.json"></script>
<script src="randomNounGen.js"></script>
<script src="GeneratePattern.js"></script>
<head>
  <meta charset="utf-8">
</head>

<body onload="change_table_val();GeneratePattern()">

    <h1>Codenames</h1>

  <div class="gameboard">
    <div class="output">
      <button onclick="change_table_val()">Generate New Words</button>
      <button onclick="GeneratePattern()">Create new pattern</button>
    </div>
    <div id="test"></div>
        <p id="demo"></p>

  </div>
  <div>
      <form>
          <label>Choose your role: </label>
          <select id="role" onchange="GeneratePattern()">
              <option value="Codemaster">Codemaster</option>
              <option value="Spy">Spy</option>
          </select>
      </form>
  <table id="table">
      <thead>
          <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>

          </tr>
      </thead>
      <tr>
          <td>word 1</td>
          <td>word 2</td>
          <td>word 3</td>
          <td>word 4</td>
          <td>word 5</td>
      </tr>
      <tr>
          <td>word 6</td>
          <td>word 7</td>
          <td>word 8</td>
          <td>word 9</td>
          <td>word 10</td>
      </tr>
      <tr>
          <td>word 11</td>
          <td>word 12</td>
          <td>word 13</td>
          <td>word 14</td>
          <td>word 15</td>
      </tr>
      <tr>
          <td>word 16</td>
          <td>word 17</td>
          <td>word 18</td>
          <td>word 19</td>
          <td>word 20</td>
      </tr>
      <tr>
          <td>word 21</td>
          <td>word 22</td>
          <td>word 23</td>
          <td>word 24</td>
          <td>word 25</td>
      </tr>
  </table>

  </div>
  <form>
      <label for="clue">Deploy Clue: </label>
      <input type="text" id="clue" name="clue"><br>
      <label for="number">Guesses Allowed</label>
      <input type="number" min="1" max="5"><br>
      <input type="submit"><br>

  </form>
  <button onclick="guess()">Guess</button>



</body>

</html>
