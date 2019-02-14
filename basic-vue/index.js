new Vue({
    el: '#app',
    data: {
        name: 'Franco',
        elements: []
    },
    methods: {
        changeName: function() {
            this.name = 'Franco Arratia';
        },
        addElement: function() {
            this.elements.push(this.elements.length + 1);
        },
        getColor: function(number) {
            return number % 2 == 0 ? 'green' : 'red';
        }
    }
});