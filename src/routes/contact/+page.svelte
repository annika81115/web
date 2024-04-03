<script>
    import Navbar from "$lib/components/Navbar.svelte"
</script>

<Navbar />
<form action="mailto:recipient@example.com" method="get" enctype="text/plain">
    Subject:<br>
    <input type="text" name="subject" placeholder="Your Name"><br>
    Email:<br>
    <input type="email" name="email" placeholder="Your Email"><br>
    Message:<br>
    <textarea name="body" rows="5" cols="30" placeholder="Your Message"></textarea><br>
    <input type="submit" value="Send">
</form>