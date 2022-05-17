<template>
    <p id="addClientButton" @click="redirectToClientCreate">Add client</p>
</template>
<script>
export default {
    methods: {
        redirectToClientCreate() {
            this.$router.push('/create');
        },
    },
}
</script>
<style>
#addClientButton {
  cursor: pointer;
  margin-bottom: 8px;
  align-self: flex-start;
  color: blue;
  font-size: 18px;
}
</style>