<body>
  <div class="container">
     <div class="imageContainer" id="image">
    <a href="page2.html">
      <h2>Hallo</h2>
    </a>
  </div>
  <div class="boxContainer">
    <div class="box" id="box1">
      <a href="page1.html">
        <h2>Page 1</h2>
        <p>Description of Page 1</p>
      </a>
    </div>
    <div class="box" id="box2">
      <a href="page2.html">
        <h2>Page 2</h2>
        <p>Description of Page 2</p>
      </a>
    </div>
    <div class="box" id="box3">
      <a href="page2.html">
        <h2>Page 2</h2>
        <p>Description of Page 2</p>
      </a>
    </div>
     <div class="box" id="box4">
      <a href="page1.html">
        <h2>Page 1</h2>
        <p>Description of Page 1</p>
      </a>
    </div>
    <div class="box" id="box5">
      <a href="page2.html">
        <h2>Page 2</h2>
        <p>Description of Page 2</p>
      </a>
    </div>
    <div class="box" id="box6">
      <a href="page2.html">
        <h2>Page 2</h2>
        <p>Description of Page 2</p>
      </a>
    </div>
  </div>
  </div>
</body>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: row;
    height: 90vh;
  }

  .container > div {
  width: 50%; /* Jeder Container nimmt die Hälfte der Breite des Elterncontainers ein */
  box-sizing: border-box; /* Berücksichtigt die Polsterung und den Rand in der Breite */
}

  .boxContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    float: right;
  }

  .box {
    width: 200px;
    height: 150px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    margin: 20px;
    text-align: center;
    padding: 20px;
  }

  .box:hover {
    background-color: #e0e0e0;
  }

  .box a {
    text-decoration: none;
    color: #333;
  }

  .imageContainer {
    background-color: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    float: left;
    width: 80vh;
    min-width: 500px;
  }
</style>