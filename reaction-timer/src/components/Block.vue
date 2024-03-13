<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    Click Me
  </div>
</template>

<script>
export default {
    data() {
        return {
            showBlock: false, 
            timer: null,
            reactionTime: 0
        }
    },
    props: ['delay'], 
    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },
        stopTimer() {
            clearInterval(this.timer)
            console.log(this.reactionTime)
        }
    },
    mounted() {
        //console.log('Block Mounted')
        setTimeout(() => {
            this.showBlock = true;
            this.startTimer()
        }, this.delay)
    }, 
    updated() {
        //console.log('Block Updated')
    }, 
    unmounted() {
        //console.log('Block Unmounted')
    }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>