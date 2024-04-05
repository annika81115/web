<div class="nav">
		<a href="/ "> 
			<img src="/home.png">
		</a>
		<a href="/sektSpätWhat">Sekt Spät What?</a>
		<a href="/korkenknallen">Korkenknaller</a>
		<a href="/aboutJune">About June</a>
		<a href="/lyrics">Lyrics</a>
</div>

<div class="backdrop" />


<style>
	.nav{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 1vw;
		width: 100vw;
		position: fixed;
        top: 00;
        right: 5;
		padding: 10px;
		background: #d13caa;
		z-index: 1000;
		margin-left: 1vw;
	}

	a{
		color: #FFF;
		text-decoration: none;
		padding: 1vh 1vw; 
        border-radius: 5px; 
	}

	a:hover{
		cursor: pointer;
		background: #2424;
	}

	img {
		width: 250px;
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