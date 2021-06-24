<script>
  let name = ""
</script>

<h1>{!name ? "Merhaba!" : `Welcome ${name}!`}</h1>
<input bind:value={name} placeholder="Type your name">

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    margin-bottom: 1rem;
  }

  input:focus {
    border: 2px solid #ff3e00;
  }

  input:active {
    background-color: rgba(255, 62, 0, 0.2);
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>