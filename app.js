const app = Vue.createApp({
    data() {
        return {
            url: 'https://en-recherche-active.com',
            showBooks: true,
            books: [
                { title: 'Name of the wind',        author: 'patrick rothfuss', img: 'assets/babushka.jpg' },
                { title: 'The way of the kings',    author: 'brandon sanderson', img: 'assets/eggman.jpg' },
                { title: 'The final empire',        author: 'brandon sanderson', img: 'assets/stonks.jpg' }
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