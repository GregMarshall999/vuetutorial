<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
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
    fetch('http://localhost:3000/jobs?id=' + this.id)
      .then(response => response.json())
      .then(data => this.job = data[0])
      .catch(err => console.log(err.message));
  }
}
</script>

<style>

</style>