<!-- Definieren der Home bzw. der '/ ' Seite  als Landingpage -->

<div class="container">
  <div class="imageContainer">
    <img class="bigImage" src="/pic_home.JPG" alt="June">
    <!-- setzt das Logo als Schriftzug über das Bild --> 
    <div class="overlay">
      <img src="/schrift.png" alt="SekptSpätStück">
    </div>
  </div>
  <div class="boxContainer">
    <div class="boxPurple" id="box1">
      <a href="/sektSpätWhat">
        <h2>Sekt Spät What?</h2>
      </a>
    </div>
    <a href="https://youtu.be/f-LucaMpEw8?si=FodWluTfKacIo3C1" class="boxGreen" id="box2"> </a>
    <div class="boxPink" id="box3">
      <a href="/aboutJune">
        <h2>About June</h2>
      </a>
    </div>
    <div class="boxPurple" id="box4">
      <a href="/lyrics">
        <h2>Lyrics</h2>
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
  .container {
    display: flex;
    flex-direction: row;
    height: 90vh;
    padding: 20px;
  }

  .imageContainer {
    width: 50%;
    position: relative;
  }

  .bigImage {
    width: 100%;
    height: 90vh;
    display: block;
    border-radius: 50px;
    overflow: hidden;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    bottom: 0; 
    left: 0;
    width: 100%;
    background-color: rgba(184, 232, 156, 1);
    color: white;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    transform: translateY(-50%);
  }

  .overlay img{
    width: 90%;
    height: auto; 
  }

  .boxContainer {
    width: 50%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  /* setzt für alle Boxen zur weiteren Navigation die Grundeigenschaften */
  .boxGreen,
  .boxPink,
  .boxPurple {
    flex: 0 1 calc(33.33% - 20px);
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

  /* setzten den Inhalt der Box, damit er diesen beim Hovern verändern kann */
  .boxGreen:after {
    content: "Hörst du die Korken?";
  }

  /* setzte den Text, welcher beim rüber Hovern angezeigt werden soll */
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

  /* bei einer Fensterbreite unter 910px werden die Elemnte später untereinander angeordnet */
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
