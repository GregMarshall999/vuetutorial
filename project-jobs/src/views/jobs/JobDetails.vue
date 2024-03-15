<template>
  <h1>{{ job.title }}</h1>
  <p>The job id is {{ id }}</p>
  <p>{{ job.details }}</p>
</template>

<script>
export default {
  data() {
    return {
      job: null
    }
  },
  props: ['id'], 
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(response => response.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message));
  }
}
</script>

<style>

</style>