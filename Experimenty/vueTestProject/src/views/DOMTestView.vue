<template>
  <div id="app">
    <div id="button-area">
      <button @click="addItem">Přidat prvek</button>
    </div>
    <div id="list-area">
      <div v-for="(item, index) in items" :key="index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    addItem() {
      this.items.push(`Item ${this.items.length + 1}`);
    }
  }
};
</script>

<style scoped>
#button-area {
  position: fixed;
  top: 0;
  width: 100%;
  background: #fff;
}

#list-area {
  padding-top: 50px;  /* adjust this value as needed */
}
</style>
