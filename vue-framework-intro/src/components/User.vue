<template>
    <div class="user">
        <h3>The User</h3>
        <p>My username is {{ username }}</p>
        <app-info></app-info>
    </div>
</template>

<script>
    import Info from "./Info.vue";
    // The exported object is just a Vue component, so you may
    // use all the instance properties like data, props, methods, etc.
    export default {
        data() {
            return {
                username: 'Franco!!!'
            }
        },
        components: {
            'app-info': Info
        }
    }
</script>

<style scoped>
    /* The following styles may be applied to all html components, however we
    can scoped it adding scoped to the style tag. 
    With that change, the styles scope will be reduced to the component
    and its related child ones.
    */
    p {
        font-style: italic;
    }
</style>

