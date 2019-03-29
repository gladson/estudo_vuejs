new Vue({
    el: '#desafio',
    data: {
        nome: 'Gladson',
        idade: 32,
        foto: 'https://avatars1.githubusercontent.com/u/1013698?s=400&v=4'
    },
    methods: {
        trocar_nome: function() {
            return this.nome = 'Simplicio'
        }
    },
    computed: {
        idade_multiplicar_3: function () {
            return this.idade * 3
        },
        numero_randomico_0_1: function () {
            return Math.floor((Math.round(Math.random()) * 1) + 0);
        }
    }
})