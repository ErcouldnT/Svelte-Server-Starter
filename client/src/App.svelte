<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Greeter from './lib/Greeter.svelte'
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  
  <div>
    <Greeter />
  </div>
  <Counter />

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>

  <p>
    You can also check files of <a href="https://github.com/ErcouldnT/Svelte-Server-Starter">this project</a> at my
    Github.
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  p a {
    text-decoration: none;
    color: #ff3e00;
  }

  @media (min-width: 480px) {
    p {
      max-width: none;
    }
  }
</style>
