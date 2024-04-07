<!-- YourComponent.svelte -->
<div class="container">
  <div class="imageContainer">
    <img class="big" src="/pic_home.JPG" alt="Beispielbild">
    <div class="overlay">
      <img src="/schrift.png">
    </div>
  </div>
  <div class="boxContainer">
    <div class="boxPurple" id="box1">
      <a href="/sektSpätWhat">
        <h2>Sekt Spät What?</h2>
      </a>
    </div>
    <a href="https://youtu.be/f-LucaMpEw8?si=FodWluTfKacIo3C1" class="boxGreen" id="box2" />
    <div class="boxPink" id="box3">
      <a href="/aboutJune">
        <h2>About June</h2>
      </a>
    </div>
    <div class="boxPurple" id="box4">
      <a href="/lyrics">
        <h2>Texte, die so schön prikeln auf der Zunge</h2>
      </a>
    </div>
    <div class="boxPurple" id="box5">
      <a href="/impressum">
        <h2>Impressum</h2>
      </a>
    </div>
    <div class="boxPink" id="box6">
      <a href="/contact">
        <h2>Kontakt</h2>
      </a>
    </div>
  </div>
</div>

<style>
  /* CSS-Stil für den Container */
  .container {
    display: flex;
    flex-direction: row; /* Horizontale Anordnung der Elemente */
    height: 90vh; /* Höhe des gesamten Fensters */
    padding: 20px; /* Abstand um den Container herum */
  }

  .imageContainer {
    width: 50%; /* Bildcontainer nimmt die Hälfte der Breite ein */
    position: relative;
  }

  .big {
    width: 100%;
    height: 90vh;
    display: block;
    border-radius: 50px;
    overflow: hidden;
    object-fit: cover; /* Bild wird in den Container eingepasst */
  }

  .overlay {
    position: absolute; /* Absolute Positionierung relativ zum Bildcontainer */
    bottom: 0; /* Unten ausrichten */
    left: 0; /* Links ausrichten */
    width: 100%; /* Vollständige Breite */
    background-color: rgba(184, 232, 156, 1); /* Halbtransparenter Hintergrund */
    color: white; /* Textfarbe */
    padding: 20px; /* Innenabstand */
    box-sizing: border-box; /* Berücksichtigt den Padding im Bereich */
    text-align: center; /* Zentriert den Text horizontal */
    transform: translateY(-50%); /* Zentriert den Text vertikal */
  }

  .overlay img{
    width: 90%;
    height: auto; 
  }

  .boxContainer {
    width: 50%; /* Boxencontainer nimmt die Hälfte der Breite ein */
    height: 90vh;
    display: flex;
    flex-wrap: wrap; /* Zeilenumbruch bei Bedarf */
    justify-content: center; /* Zentriert die Boxen horizontal */
    gap: 20px; /* Abstand zwischen den Boxen */
  }

  .boxGreen,
  .boxPink,
  .boxPurple {
    flex: 0 1 calc(33.33% - 20px); /* Setzt die Breite der Boxen auf ein Drittel der Breite des Containers */
    text-align: center;
    padding: 20px;
    border-radius: 20px;
    color: #333;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .boxGreen {
    background-color: #B8E89C;
    border: 2px solid #B8E89C;
    font-size: 25px;
    font-size: 30px;
    font-weight: bold;
    color: #333;
    font-family: 'Montserrat';
  }

  .boxPink {
    background-color: #d13caa;
    border: 2px solid #d13caa;
  }

  .boxPurple {
    background-color: #b77beb;
    border: 2px solid #b77beb;
  }

  .boxGreen:hover {
    background-color: #8bda5e;
  }

  .boxGreen:after {
    content: "Hörst du die Korken?";
  }

  .boxGreen:hover:after {
    content: "Sie knallen im Chor!";
  }

  .boxPink:hover {
    background-color: #c52e9e;
    border: 2px solid #B8E89C;
  }

  .boxPurple:hover {
    background-color: #ab65e8;
    border: 2px solid #B8E89C;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Media Query für kleinere Bildschirme */
  @media screen and (max-width: 910px) {
    .container {
      flex-direction: column; /* Vertikale Anordnung der Elemente */
      align-items: center; /* Horizontale Zentrierung */
    }

    .imageContainer,
    .boxContainer {
      width: 100%; /* Vollständige Breite für kleinere Bildschirme */
      margin-bottom: 20px; /* Abstand zwischen den Containern */
    }
  }
</style>
