<script>
    import Navbar from "$lib/components/Navbar.svelte"
</script>

<Navbar />

<div class="formular">
<form action="mailto:recipient@example.com" method="get" enctype="text/plain">
    Subject:<br>
    <input type="text" name="subject" placeholder="Your Name"><br>
    Message:<br>
    <textarea name="body" rows="5" cols="30" placeholder="Your Message"></textarea><br>
    <input type="submit" value="Send">
</form>
</div>

<style>
    .formular {
        position: absolute;
        top: 5vw;
        width: 35vw;
        padding: 10px;
    }
</style>