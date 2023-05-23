<script>
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const pokemon = ref([])
    const isLoading = ref(true)

    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=700')
        const data = await response.json()
        const pokemonData = await Promise.all(data.results.map(async p => {
          const res = await fetch(p.url)
          return await res.json()
        }))
        pokemon.value = pokemonData
      } catch (error) {
        console.error(error)
      } finally {
        isLoading.value = false
      }
    }

    onMounted(fetchData)

    return {
      pokemon,
      isLoading
    }
  }
}
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <table v-else>
    <tbody>
    <tr v-for="(p, index) in pokemon" :key="index">
      <td><img :src="p.sprites.front_default" :alt="p.name" /></td>
      <td>{{ p.name }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* your styles here */
</style>
