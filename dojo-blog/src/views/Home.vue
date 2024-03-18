<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">Delete post</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import PostList from '../components/PostList.vue'

export default {
    name: 'Home',
    components: {
      PostList
    },
    setup() {
        const posts = ref([
            { 
              title: 'Welcome to the blog', 
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
              id: 1 
            },
            { 
              title: 'Top 5 CSS tips', 
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam volutpat commodo sed egestas egestas. Gravida quis blandit turpis cursus in. Urna et pharetra pharetra massa massa ultricies mi quis. Eget dolor morbi non arcu risus. At imperdiet dui accumsan sit amet. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Magna ac placerat vestibulum lectus mauris ultrices. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Bibendum est ultricies integer quis. Pellentesque habitant morbi tristique senectus et netus et. Sodales neque sodales ut etiam sit amet nisl purus. Vel facilisis volutpat est velit egestas dui.', 
              id: 1 
            }
        ])

        const showPosts = ref(true)

        return {
            posts, showPosts
        }
    }
}
</script>

<style>

</style>