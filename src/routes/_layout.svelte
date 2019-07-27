<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  :global(body) {
    font-family: "Open Sans", sans-serif;
  }
  :global(h1) {
    font-family: "Proza Libre", sans-serif;
  }
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
