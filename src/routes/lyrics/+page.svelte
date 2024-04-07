<!-- YourComponent.svelte -->
<script>
  export let data;
  import Navbar from "$lib/components/Navbar.svelte"
  import Footer from "$lib/components/Footer.svelte"
</script>

<Navbar />

<div class="content">
  <h1>Lyrics</h1>

  <div class="postContainer">
    {#each data.posts as post}
      <div class="postBox">
        <h2>
          <a href={post.path}>
            {post.meta.title}
          </a>
        </h2>
      </div>
    {/each}
	</div>
	<div class="imageContainer">
	  	<img src="/lyrics.jpg">
	  	<img src="/lyrics2.jpg">
	  	<img src="/lyrics3.jpg">

	</div>
</div>

<Footer />

<style>
  .content {
    text-align: center;
    position: absolute;
    top: 5vw;
    width: 65vw;
  }

  .postContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2vw;
    width: 75%;
    margin-bottom: 20px;
    margin-left: auto; /* Zentriert das Formular horizontal */
    margin-right: auto; /* Zentriert das Formular horizontal */
    text-align: center;
  }

  .postBox {
    width: 20%; /* Breite der Boxen anpassen */
    margin-bottom: 10px; /* Abstand zwischen den Boxen */
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    background-color: #d13caa;
    border: 2px solid #d13caa;
    font-size: 1vw; /* Anpassen der Schriftgröße */
  }

  a:hover {
    color: #B8E89C;
  }

  .postBox:hover {
  	border: 2px solid #B8E89C;
  }

.imageContainer {
	display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2vw;
    width: 75%;
    margin-left: auto; /* Zentriert das Formular horizontal */
    margin-right: auto; /* Zentriert das Formular horizontal */
    text-align: center;
}

img {
	width: 23%;
    margin-bottom: 10px; /* Abstand zwischen den Boxen */
    display: block;
    border-radius: 5px;
    overflow: hidden;
    object-fit: cover;
    border: 2px solid #B8E89C;
}

 @media screen and (max-width: 900px) {
    .postContainer {
      	width: 100%; /* Vollständige Breite für kleinere Bildschirme */
    }

    .postBox {
      width: 50%; /* Breite der Boxen für kleinere Bildschirme anpassen */
      font-size: 15px;
      margin-left: auto;
      margin-right: auto;
    }

    .imageContainer {
      width: 100%; /* Vollständige Breite für kleinere Bildschirme */
    }

    img {
      width: 100%; /* Breite der Bilder für kleinere Bildschirme auf 100% setzen */
    }
  }
</style>
