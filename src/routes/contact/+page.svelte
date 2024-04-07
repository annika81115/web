<script>
    import Navbar from "$lib/components/Navbar.svelte"  
    import Footer from "$lib/components/footer.svelte"

</script>

<Navbar />

<div class="container">
    <h1>Schreib doch eine Mail!</h1>

    <div class="formular">
        <form action="mailto:recipient@example.com" method="get" enctype="text/plain">
            Subject:<br>
            <input type="text" name="subject" placeholder="Your Name"><br>
            Message:<br>
            <textarea name="body" rows="5" cols="30" placeholder="Your Message"></textarea><br>
            <input type="submit" value="Send">
            <p>Achtung: du wirst in dein eigenes Mailprogramm weitergeleitet.</p>
        </form>
    </div>

    <img src="contact.jpg">
</div>

<Footer />

<style>
    .container {
        position: absolute;
        top: 5vw;
        margin-left: auto; /* Zentriert das Formular horizontal */
        margin-right: auto; /* Zentriert das Formular horizontal */
        text-align: center;
    }

    .formular {
        position: relative;
        width: 35vw;
        padding: 5px;
        margin-left: auto; /* Zentriert das Formular horizontal */
        margin-right: auto; /* Zentriert das Formular horizontal */
        text-align: center;
    }

    img {
        width: 40vw;
        height: 35vh;
        display: block;
        border-radius: 50px;
        overflow: hidden;
        object-fit: cover;
        border: 2px solid #B8E89C;
    }
</style>