<template>
  <app-bar title="Clients"></app-bar>
  <div class="listWrapper">
    <div v-if="clients.length > 0" style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <button-client-create></button-client-create>
      <client-list :clients="clients" @client-delete="handleDeleteClient"></client-list>
    </div>
    <div v-else>
      <h2 style="margin-bottom: 12px;">No clients found...</h2>
      <button-client-create></button-client-create>
    </div>
  </div>
  <toast-alert
    :type="toast.type"
    :shown="toast.shown"
    :message="toast.message"
    @state-change="(newState)=>{this.toast.shown = newState;}"></toast-alert>
</template>

<script lang="js">
import axios from 'axios';
import ClientList from '@/components/ClientList.vue';
import AppBar from '@/components/appbar/AppBar.vue';
import ButtonClientCreate from '@/components/client/button/ButtonClientCreate.vue';
import ToastAlert from '@/components/general/notification/ToastAlert.vue';

export default{
  created() {
    this.fetchClients();
  },
  data() {
    return {
      clients: [],
      toast: JSON.parse(this.$route.params?.toast || `{"shown": false}`),
    };
  },
  methods: {
    async fetchClients() {
      await axios.get('http://localhost:8080/clients').then(response => {
        this.clients = response.data;
      });
    },
    async handleDeleteClient(id){
      axios.delete(`http://localhost:8080/clients/${id}`).then(() => {
          this.toast = {
            type: 'success',
            message: 'Client deleted successfully.',
            shown: true,
          };
          this.fetchClients();
      });
    }
  },
  components: {
    ClientList,
    AppBar,
    ButtonClientCreate,
    ToastAlert,
  },
}
</script>
<style>
.listWrapper {
  margin-top: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
