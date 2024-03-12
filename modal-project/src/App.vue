<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal"/>
  </div>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My First Vue App', 
      header: "Sign up for the Givaway!", 
      text: "Come around quick for half prices!", 
      showModal: false
    }
  }, 
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style>
h1 {
  border-bottom: 1px, solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
