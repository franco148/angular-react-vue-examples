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
        }
    }
});