const app = Vue.createApp({
    data() {

        return {
            show: true,
            hide: true,
            template: ' I am the temp',
            author: 'a nobody',
            age: 35,
        }
    },
    methods: {
        changeTitle(tem) {
            this.template = tem
        },
        showBox() {
            if (this.show = true){
                return ()=> this.show
            }
            else {
                return
            }
        }
    }
})

app.mount('#app')