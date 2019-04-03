// Creating a VUE component

// Why app-username and not just username? Because your selectors
// should be unique so that you don't ovewrite normal html elements.
Vue.component('app-username', {
    // Here we do not need to set up el:
    // Here data is not an object, but insteand a function

    data: function() {
        return {
            username: 'Franco Fral, from my first component'
        }
    },
    template: '<p>{{ username }}</p>'
});

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

// Has multiple VUE instances has one potencial downside though.
// What if you want to really use your view instance.

new Vue({
    el: '#app2',
    data: {
        message: 'Hello there'
    }
});


// Even if we have more than one use of this vue instance in the HTML,
// we will see only one html element there. 
// It will only select and control the first occurrence of this selector
// it finds. The second one is simply ignored. A view instance can only
// control one part of your code, not multiple ones but there is a solution
// which actually allows us to achieve what we want. It is using COMPONENTS.

// new Vue({
//     el: '.username',
//     data: {
//         username: 'Franco'
//     }
// });