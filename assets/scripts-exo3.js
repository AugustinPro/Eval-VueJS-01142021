var app = new Vue({
    el: '#app',
    data: {
        fnameQuery: '',
        name: '',
        age: '',
        count: ''
    },
    methods: {
    getAgifyInfos() {
        console.log('test')
        let url = `https://api.agify.io?name=${this.fnameQuery}&country_id=FR`
        axios
        .get(url)
        .then(response => {
            this.name = response.data.name
            this.age = response.data.age
            this.count = response.data.count
            })
        }
    },
    mounted() {
        this.getAgifyInfos();
    }
})