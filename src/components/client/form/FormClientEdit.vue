<template>
    <div class="form">
        <p :class="`inputLabel ${this.error ? 'invalid': ''}`">Name</p>
        <input type="text" :class="`${this.error ? 'invalid': ''}`" v-model="newClient.name" style="margin-bottom: 24px;">
        <p :class="`inputLabel ${this.error ? 'invalid': ''}`">Job</p>
        <input type="text" :class="`${this.error ? 'invalid': ''}`" v-model="newClient.job">
        <p v-if="error" id="errorLabel">{{ this.error }}</p>
        <div id="buttonWrapper">
            <p id="saveButton" @click="this.$emit('save', this.newClient)">Save</p>
            <p id="cancelButton" @click="this.$emit('cancel')">Cancel</p>
        </div>
    </div>
</template>
<script>
export default{
    props: ['client', 'error'],
    data(){
        return {
            newClient: {
                ...this.client,
            },
        }
    }
}
</script>
<style>
.inputLabel {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  align-self: flex-start;
}
input {
  height: 48px;
  border: 1px solid black;
  padding-left: 4px;
  font-size: 16px;
}

.invalid {
    border-color: red;
    color: red;
}

input:focus.invalid {
    outline: 1px solid red;
}

input:focus {
  outline: 1px solid black;
  border-radius: 0px;
}
.form{
  display: inline-flex;
  width: 320px;
  flex-direction: column;
  padding: 24px;
  border: 2px solid black;
}
#saveButton {
  cursor: pointer;
  margin-top: 24px;
  color: blue;
}
#cancelButton {
    cursor: pointer;
    margin-top: 24px;
    color: red;
}
#buttonWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#errorLabel {
    align-self: flex-start;
    color: red;
    margin-top: 8px;
}
</style>