const app = Vue.createApp({
    data() {

        return {
            showBooks: true,
            template: ' I am the temp',
            author: 'a nobody',
            age: 35,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        }
    }
})

app.mount('#app')