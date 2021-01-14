Vue.component('bs-buttonlink',{
    template: '<a class="btn" :class="type" :href="link">Plus d\'infos</a>',
    data() {
        return {
            type: 'btn-primary',
            link: 'https://www.starwars.com/databank/tatooine'
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        tatooineInfos: {
            name: 'Tatooine',
            type: 'désertique',
            localisation : 'Bordure extérieure',
            satellites : 3,
            capital: 'Mos Eisley',
            natives: ['Tusken', 'Jawa'],
            characters: ['Anakin Skywalker', 'Luke Skywalker', 'Obiwan kenobi', 'C3-PO', 'R2-D2']
        }
    }
})

