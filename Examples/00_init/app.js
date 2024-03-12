const app = Vue.createApp({
    // data, functions
    //template: '<h2>I am the template</h2>'

    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45, 
            x: 0, 
            y: 0
        }
    }, 
    methods: {
        changeTitle(title) {
            //this.title = 'Words of Radiance'
            this.title = title;
        }, 
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }, 
        handleEvent(event, data) {
            console.log(event, event.type);

            if(data) {
                console.log(data);
            }
        }, 
        handleMousemove(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
});

app.mount('#app');