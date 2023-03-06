const app = Vue.createApp({
    data() {

        return {
            show: true,
            template: ' I am the temp',
            author: 'a nobody',
            age: 35,
        }
    },
    methods: {
        changeTitle(tem) {
            this.template = tem
        },
        true_false() {
            this.show = !this.show
        }
    }
})

app.mount('#app')