<script>
    import {onMount} from 'svelte';

    let pokemon = [];

    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const data = await response.json();
            const pokemonData = await Promise.all(data.results.map(p => fetch(p.url).then(res => res.json())));
            pokemon = pokemonData;
        } catch (error) {
            console.error(error);
        }
    };

    onMount(fetchPokemon);

    const renamePokemon = () => {
        const start = performance.now();
        pokemon = pokemon.map(p => ({...p, name: 'Pokemon'}));
        const end = performance.now();
        console.log('Operation time: ' + (end - start) + ' ms');
    };

    const addPokemon = () => {
        const start = performance.now();
        pokemon = [...pokemon, ...pokemon.slice(0, 1000)];
        const end = performance.now();
        console.log('Operation time: ' + (end - start) + ' ms');
    };

    const removePokemon = () => {
        const start = performance.now();
        pokemon = pokemon.slice(0, pokemon.length - 1000);
        const end = performance.now();
        console.log('Operation time: ' + (end - start) + ' ms');
    };
</script>

<div>
    <button on:click={renamePokemon}>Rename Pokemon</button>
    <button on:click={addPokemon}>Add 1000 Pokemon</button>
    <button on:click={removePokemon}>Remove 1000 Pokemon</button>
    <table>
        <tbody>
        {#each pokemon as p, index}
            <tr>
                <td>{p.name}</td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>
