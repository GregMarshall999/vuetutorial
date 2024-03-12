<template>
  <h1>{{ title }}</h1>
  <p>Welcome...</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up Now</a>
        <a href="#">More info</a>
      </template>
      <h1>Sign up for the Givaway!</h1>
      <p>Come around quick for half prices!</p>
    </Modal>
  </div>
  <button @click="toggleModal">Open Modal</button>

  <br>

  <div v-if="showOtherModal">
    <Modal @close="toggleOtherModal">
      <h1>Sign up for the newsletter!</h1>
      <p>For Updates and promo codes!</p>
    </Modal>
  </div>
  <button @click="toggleOtherModal">Open Other Modal</button>
</template>

<script>
/**
 * Challenge
 *  -Create an extra button to open a different modal
 *  -Use the same modal component but pass in a different template (slot)
 *  -Use a different method (e.g. toggleModalTwo) and data (e.g. showmodalTwo)
 */

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
      showModal: false, 
      showOtherModal: false
    }
  }, 
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    }, 
    toggleOtherModal() {
      this.showOtherModal = !this.showOtherModal
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
