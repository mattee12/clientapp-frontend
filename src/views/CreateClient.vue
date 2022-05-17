<template style="display: flex;">
  <app-bar title="Add client"></app-bar>
  <form-client-edit
    class="form"
    :client="client" :error="formError"
    @save="updateClient"
    @cancel="redirectBack"></form-client-edit>
</template>

<script lang="js">
import axios from 'axios';
import AppBar from '@/components/appbar/AppBar.vue';
import FormClientEdit from '@/components/client/form/FormClientEdit.vue';

export default{
  data(){
      return {
          client: {},
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
      this.api.post('', newClient)
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
