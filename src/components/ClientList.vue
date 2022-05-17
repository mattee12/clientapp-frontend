<template>
    <div class="list">
        <div class="clientItem" v-for="client in clients" v-bind:key="client">
            <div class="clientName">
                <h3>{{ client.name }}</h3>
            </div>
            <div class="clientJob">
                <p>{{ client.job }}</p>
            </div>
            <div class="buttonWrapper">
                <router-link class="editButton" :to="{name: 'edit', params: {client: JSON.stringify(client)}}">Edit</router-link>
                <p class="deleteButton" @click="deleteClient(client.id)">Delete</p>
            </div>
        </div>
    </div>
</template>
<script lang="js">
export default{
    props: ['clients'],
    methods: {
        deleteClient(id){
            this.$emit("client-delete", id);
        }
    },
}
</script>
<style>
.list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    width: 640px;
}
.clientItem {
    height: 64px;
    padding: 12px 0px;
    display: flex;
    align-self: stretch;
    flex-direction: row;
    border-bottom: 1px solid black;
}
.clientName {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 8px;
    justify-content: flex-start;
    flex: 1;
    border-right: 1px solid black;
}
.clientJob {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
    border-right: 1px solid black;
}
.buttonWrapper{
    display: flex;
    flex-direction: row;
    flex: 1;
    align-self: center;
    justify-content: space-evenly;
}
.buttonWrapper p{
    cursor: pointer;
}
.editButton{
    color: blue;
    text-decoration: none;
}
.deleteButton{
    color: red;
}
.list .clientItem:last-of-type{
    border-bottom: none;
}
</style>