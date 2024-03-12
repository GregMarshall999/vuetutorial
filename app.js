const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'Name of the wind',        author: 'patrick rothfuss' },
                { title: 'The way of the kings',    author: 'brandon sanderson' },
                { title: 'The final empire',        author: 'brandon sanderson' }
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