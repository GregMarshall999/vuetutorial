<template>
  <div class="home">
    <!--Home

    <p>My name is {{ name }} and my age is {{ age }}</p>

    <button @click="handleClick">Click Me</button>
    <button @click="age++">Age +1</button>

    <input type="text" v-model="name"/>-->
      <h1>Home</h1>
      <h2>Refs</h2>
      <p>{{ playerOne.name }} - {{ playerOne.age }}</p>
      <button @click="updatePlayerOne">Update Player One</button>

      <h2>Reactive</h2>
      <p>{{ playerTwo.name }} - {{ playerTwo.age }}</p>
      <button @click="updatePlayerTwo">Update Player Two</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
    name: "Home", 
    setup() {
      /*
      //const p = ref(null)
      
      const name = ref('mario')
      const age = ref(35)
      
      const handleClick = () => {
          //console.log(p, p.value)
          //p.value.classList.add('test')
          //p.value.textContent = 'Hello'
      
          name.value = 'luigi'
          age.value = 30
      }
      
      return {
        //p,  
        name: name,
        age, 
        handleClick
      }
      */

      //---------------------------------------

      const playerOne = ref({ name: 'Mario', age: 25 })
      const playerTwo = reactive({ name: 'Luigi', age: 24 })

      const updatePlayerOne = () => {
        playerOne.value.age = 40
      }

      const updatePlayerTwo = () => {
        playerTwo.age = 39
      }

      return {
        playerOne, 
        playerTwo, 
        updatePlayerOne, 
        updatePlayerTwo
      }
    }
}
</script>

<style>

</style>