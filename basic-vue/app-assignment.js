new Vue({
    el: '#app',
    data: {
        hobbies: ['Sports', 'Cooking'],
        userHobby: '',
        hobbyWasDeleted: false
    },
    methods: {
        addHobby: function() {
            this.hobbies.push(this.userHobby);
        },
        removeHobby: function(hobby) {
            var position = this.hobbies.indexOf(hobby);
            this.hobbies.splice(position, 1);
            this.hobbyWasDeleted = true;
        }
    }
});