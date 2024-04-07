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
        z-index: 1000;
        margin-left: 1vw;
	}

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
		text-decoration: none;
		padding: 1vh 1vw; 
	}

	a:hover{
		cursor: pointer;
		background: #2424;
	}

	.leftContainer img {
		width: 250px;
		height: auto;
	}

	.rightContainer img {
		width: 3vw;
		height: auto;
	}

	.backdrop {
		position: fixed;
  		top: 0;
  		width: 65vw;
  		height: 100vh; /* Höhe der gesamten Seite */
  		background-color: rgba(210, 210, 210, 0.5); /* Hintergrundfarbe mit Transparenz */		  
  		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Schatten für Box-Effekt */
  		z-index: -50;
	}
</style>