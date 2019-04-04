<template>
    <div class="user">
        <h3>The User</h3>
        <p>My username is {{ username }}</p>
    </div>
</template>

<script>
    // The exported object is just a Vue component, so you may
    // use all the instance properties like data, props, methods, etc.
    export default {
        data() {
            return {
                username: 'Franco!!!'
            }
        }
    }
</script>

<style>
    p {
        font-style: italic;
    }
</style>

