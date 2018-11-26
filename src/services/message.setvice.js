import Vue from 'vue';
export default {
  getMessage() {
    Vue.http.get('messages').then(
        (response) => {
          succes(response.data)
        },
        (response) => {
          error(response)
        }
    )
  }
};