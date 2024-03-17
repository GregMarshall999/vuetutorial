<template>
  <div class="home">
    Home

    <p>My name is {{ name }} and my age is {{ age }}</p>

    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script>
export default {
    name: "Home", 
    setup() {
        let name = 'mario'
        let age = 30

        const handleClick = () => {
            console.log('You clicked me')
        }

        return {
            name: name,
            age, 
            handleClick
        }
    }
}
</script>

<style>

</style>