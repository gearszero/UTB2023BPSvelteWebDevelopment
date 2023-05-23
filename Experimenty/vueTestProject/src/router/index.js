import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonView from "@/views/PokemonView.vue";
import DOMTestView from "@/views/DOMTestView.vue";
import StateChangeView from "@/views/StateChangeView.vue";
import LargeDataChange from "@/views/LargeDataChange.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pokemonview',
      component: PokemonView
    },
    {
      path: '/domtest',
      name: 'domtest',
      component: DOMTestView
    },
    {
      path: '/statechange',
      name: 'statechange',
      component: StateChangeView
    },
    {
      path: '/largedatachange',
      name: 'datachange',
      component: LargeDataChange
    }
  ]
})

export default router
