const app = Vue.createApp({
    data() {
        return {
            url: 'https://en-recherche-active.com',
            showBooks: true,
            books: [
                {   title: 'Gun Granny', 
                    author: 'patrick rothfuss', 
                    img: 'assets/babushka.jpg', 
                    isFav: true
                },
                {   title: 'Egg-sama',    
                    author: 'brandon sanderson', 
                    img: 'assets/eggman.jpg', 
                    isFav: false
                },
                {   title: 'The final Stonk',        
                    author: 'brandon sanderson', 
                    img: 'assets/stonks.jpg', 
                    isFav: true
                }
            ]
        }
    }, 
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
});

app.mount('#app');