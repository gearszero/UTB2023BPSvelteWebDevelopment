<script>
    import { onMount } from 'svelte';

    let pokemon = [];

    onMount(async () => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=700');
        const data = await response.json();
        pokemon = data.results;
    });
</script>

<style>
    .pokemon-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .pokemon-card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div class="pokemon-grid">
    {#each pokemon as p (p.name)}
        <div class="pokemon-card">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.url.split('/')[6]}.png`} alt={p.name} />
            <h2>{p.name}</h2>
        </div>
    {/each}
</div>
