<!-- definiert die Navigationsleiste mit den links zu den Seiten und den Icons die zu Social Media Plattformen führen -->

<div class="nav">
	<div class="leftContainer">
		<a href="/ "> 
			<img src="/home.png">
		</a>
		<a href="/sektSpätWhat">Sekt Spät What?</a>
		<a href="/aboutJune">About June</a>
		<a href="/lyrics">Lyrics</a>
	</div>
	<div class="rightContainer">
		<a href="https://www.youtube.com/@sektspatstuck6908"> 
			<img src="/icons/yt.png">
		</a>
		<a href="https://open.spotify.com/artist/5DeKxh1EpLz9xYQXwvRSJr"> 
			<img src="/icons/spotify.png">
		</a>
		<a href="https://soundcloud.com/sktsptst"> 
			<img src="/icons/soundcloud.png">
		</a>
		<a href="https://www.instagram.com/sektspaetstueck/"> 
			<img src="/icons/instagram.png">
		</a>
		<a href="https://www.tiktok.com/@sektspaetstueck"> 
			<img src="/icons/tiktok.png">
		</a>
	</div>
</div>

<!-- setzt außerdem den backdrop, welcher mit der Navbar zusammen aufgrufen wird-->
<div class="backdrop" />


<style>
	.nav{
		display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 1vw;
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        padding: 10px;
        background: #d13caa;
        z-index: 1000; /*sorgt dafür, dass die Navbar immer das oberste Element ist*/
        margin-left: 1vw;
	}

	/* teilt die navbar in links (für Text) und rechts (für die Icons)*/
	.leftContainer {
        display: flex;
        flex-direction: row;
        gap: 1vw;
        align-items: center;
    }

    .rightContainer {
    	display: flex;
        flex-direction: row;
        align-items: center;
    }

	a{
		color: #FFF;
		padding: 1vh 1vw; 
		border-radius: 5px;
		border: 2px solid #d13caa;
	}

	a:hover{
		cursor: pointer;
		background: #2424;
		border: 2px solid #B8E89C;
	}

	/*passt das Bild des Logos links an*/
	.leftContainer img {
		width: 20vw;
		height: auto;
		margin-left: 1vw;
	}

	/*passt die Icon-Größe an */
	.rightContainer img {
		width: 3vw;
		height: auto;
	}

	/* definiert den Hintergrund für den Content mit einer leichten Transparenz*/
	.backdrop {
		position: fixed;
  		top: 0;
  		width: 65vw;
  		height: 100vh;
  		background-color: rgba(210, 210, 210, 0.5); /* Hintergrundfarbe mit Transparenz */		  
  		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Schatten für Box-Effekt */
  		z-index: -50;
	}
</style>