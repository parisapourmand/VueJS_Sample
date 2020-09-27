
// const app = new Vue().$mount('#app')
const app = new Vue({
    el: '#app',
    data: {
        something: "the vue message",
        count: 0,
        email: '',
        yummies: ['lasagna', 'spagetti', 'frenchfries', 'salad'],
        fruits: [
            { name: "strawberry" },
            { name: "blackberry" },
            { name: "blueberry" },
            { name: "coconut" }
        ],
        newfruit: "",
        
        filter: {
            field: '',
            query: '',
            userState: '',
            },
        selected: '',

        message: "wow check this out!\n You loaded this page at " + new Date().toLocaleString(),
    },
    methods: {
        addfruit: function() {
            // n = newfruit.length
            if( 1 > 0){
                this.fruits.push({name:this.newfruit})
                this.newfruit = ""
            }
        },
        reverseMessage: function () {
            this.something = this.something.split('').reverse().join('')
        }
    },
    filters: { //by ref
        capitalize: function(value) {
            return value.toUpperCase()
        },
    },
    computed: {
    }
})