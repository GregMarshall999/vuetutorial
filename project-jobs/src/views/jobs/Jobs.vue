<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return  {
            jobs: [
                { title: 'UX Designer', id: 1, details: 'Lorem' },
                { title: 'Web Designer', id: 2, details: 'Lorem' },
                { title: 'Vue Designer', id: 3, details: 'Lorem' },
            ]
        }
    }
}
</script>

<style>

</style>