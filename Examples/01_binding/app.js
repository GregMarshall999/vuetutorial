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
        }, 
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    }, 
    computed: {
        filteredBooks() {
            return this.books.filter(b => b.isFav);
        }
    }
});

app.mount('#app');

//Challenge -Add to Favs
//  - attach a click event to each li tag (for each book)
//  - when a user clicks an li, toggle the 'isFav' property of that book