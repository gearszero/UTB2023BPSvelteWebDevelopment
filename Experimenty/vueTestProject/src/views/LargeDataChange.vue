<template>
  <div class="App">
    <button @click="renamePokemon">Rename Pokemon</button>
    <button @click="addPokemon">Add 1000 Pokemon</button>
    <button @click="removePokemon">Remove 1000 Pokemon</button>
    <table>
      <tbody>
      <tr v-for="(p, index) in pokemon" :key="index">
        <td>{{ p.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemon: [],
    };
  },
  methods: {
    async fetchPokemon() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
        const pokemonData = await Promise.all(response.data.results.map(async p => {
          const res = await axios.get(p.url);
          return res.data;
        }));
        this.pokemon = pokemonData;
      } catch (error) {
        console.error(error);
      }
    },
    renamePokemon() {
      const start = performance.now();
      this.pokemon = this.pokemon.map(p => ({ ...p, name: 'Pokemon' }));
      const end = performance.now();
      console.log('Operation time: ' + (end - start) + ' ms');
    },
    addPokemon() {
      const start = performance.now();
      this.pokemon = [...this.pokemon, ...this.pokemon.slice(0, 1000)];
      const end = performance.now();
      console.log('Operation time: ' + (end - start) + ' ms');
    },
    removePokemon() {
      const start = performance.now();
      this.pokemon = this.pokemon.slice(0, this.pokemon.length - 1000);
      const end = performance.now();
      console.log('Operation time: ' + (end - start) + ' ms');
    },
  },
  mounted() {
    this.fetchPokemon();
  },
};
</script>
