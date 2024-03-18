<template>
  <div class="home">
    Home

    <p>My name is {{ name }} and my age is {{ age }}</p>

    <button @click="handleClick">Click Me</button>
    <button @click="age++">Age +1</button>

    <input type="text" v-model="name"/>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "Home", 
    setup() {
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
    }
}
</script>

<style>

</style>