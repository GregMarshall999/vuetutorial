<template>
  <div class="home">
    <!--Home

    <p>My name is {{ name }} and my age is {{ age }}</p>

    <button @click="handleClick">Click Me</button>
    <button @click="age++">Age +1</button>

    <input type="text" v-model="name"/>-->
      <!--<h1>Home</h1>
      <h2>Refs</h2>
      <p>{{ playerOne.name }} - {{ playerOne.age }}</p>
      <button @click="updatePlayerOne">Update Player One</button>

      <h2>Reactive</h2>
      <p>{{ playerTwo.name }} - {{ playerTwo.age }}</p>
      <button @click="updatePlayerTwo">Update Player Two</button>-->
  
        <h1>Home</h1>
        <input type="text" v-model="search"/>
        <p>Search term - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">{{ name }}</div>
        <button @click="handleClick">Stop watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
    name: "Intro", 
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

      /*
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
      */
    
      //---------------------------------------

      const search = ref('')
      const names = ref(['Mario', 'Luigi', 'Yoshi', 'Toad', 'Bowser', 'Koopa', 'Peach']);

      const matchingNames = computed(() => {
        return names.value.filter(name => name.includes(search.value))
      })

      const stopWatch = watch(search, () => {
        console.log('Watch Ran')
      })

      const stopEffect = watchEffect(() => {
        console.log('WatchEffect Ran', search.value)
      })

      const handleClick = () => {
        stopWatch()
        stopEffect()
      }

      return {
        search,
        matchingNames,
        handleClick
      }
    }
}
</script>

<style>

</style>