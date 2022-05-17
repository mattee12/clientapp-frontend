<template style="display: flex;">
  <app-bar title="Edit client"></app-bar>
  <form-client-edit
    class="form" v-if="Object.keys(client).length > 0"
    :client="client" :error="formError"
    @save="updateClient"
    @cancel="redirectBack"></form-client-edit>
  <h2 v-else style="margin-top: 64px;">No client selected.</h2>
</template>

<script lang="js">
import axios from 'axios';
import AppBar from '@/components/appbar/AppBar.vue';
import FormClientEdit from '@/components/client/form/FormClientEdit.vue';

export default{
  data(){
      return {
          client: JSON.parse(this.$route.params?.client || "{}"),
          api: axios.create({
              baseURL: 'http://localhost:8080/clients',
          }),
          formError: null,
      }
  },
  methods: {
    redirectBack(toast = null){
        this.$router.push({
            name: 'home',
            params: {
              toast: toast? JSON.stringify(toast): null,
            }
        });
    },
    updateClient(newClient){
      this.api.put(`${this.client.id}`, newClient)
      .then((response) => {
        this.redirectBack({
          type: 'success',
          message: response?.data.message,
          shown: true,
        });
      })
      .catch(error => {
        this.formError = error?.response?.data.message;
      });
    }
  },
  components: {
    AppBar,
    FormClientEdit,
  },
}
</script>
<style>
.form {
  margin-top: 64px;
}
</style>
