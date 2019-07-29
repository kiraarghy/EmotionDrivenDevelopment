<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  .body {
    display: grid;
    grid-template-columns: 0.66fr 1.98fr 0.33fr;
    grid-template-rows: calc(5vh + 120px) 8fr;
    height: 100vh;
  }
  main {
    grid-area: 2/2;
    z-index: 1;
  }
  .logo {
    position: absolute;
    left: 5vh;
    top: 5vh;
    justify-self: center;
  }
  .triangle {
    position: absolute;
    top: 0%;
    right: 0%;
  }
</style>

<div class="body">
  <svg
    class="logo"
    width="120"
    height="120"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <path
        d="M22.088 54.95V12h8.672v19.072L48.28 12h11.66L43.767 28.729l17.05
        26.22h-11.22L37.79 34.793l-7.031 7.178v12.978h-8.672zm76.387
        0H89.04l-3.75-9.757H68.123l-3.545 9.756h-9.2L72.109 12h9.17l17.197
        42.95zM82.508 37.956L76.59 22.02l-5.8 15.937h11.718zM22
        108.949V66h18.252c4.59 0 7.925.386 10.005 1.157 2.08.772 3.745 2.144
        4.995 4.116 1.25 1.973 1.875 4.229 1.875 6.768 0 3.223-.947 5.884-2.842
        7.983-1.894 2.1-4.726 3.423-8.496 3.97 1.875 1.094 3.423 2.295 4.644
        3.604 1.22 1.308 2.866 3.632 4.936 6.972l5.244
        8.38h-10.37l-6.27-9.346c-2.227-3.34-3.75-5.445-4.57-6.314-.821-.87-1.69-1.465-2.608-1.787-.918-.322-2.373-.483-4.365-.483h-1.758v17.93H22zm8.672-24.785h6.416c4.16
        0 6.758-.176 7.793-.527 1.035-.352 1.846-.957
        2.431-1.817.586-.86.88-1.933.88-3.222
        0-1.446-.386-2.613-1.158-3.501-.771-.889-1.86-1.45-3.266-1.685-.704-.098-2.813-.146-6.329-.146h-6.767v10.898zm67.803
        24.785H89.04l-3.75-9.756H68.123l-3.545 9.756h-9.2L72.109 66h9.17l17.197
        42.95zM82.508 91.957L76.59 76.02l-5.8 15.937h11.718z"
        id="a" />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <path fill="#F5B495" d="M0 0h120v120H0z" />
      <g fill-rule="nonzero" fill="#000">
        <use xlink:href="#a" />
        <use xlink:href="#a" />
      </g>
    </g>
  </svg>
  <main>
    <slot />
  </main>
  <svg
    class="triangle"
    width="834"
    height="1024"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0l834 1024V0z" fill="#D7EAE1" fill-rule="evenodd" />
  </svg>
</div>
