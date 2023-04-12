const { createApp } = Vue

  createApp({
    data() {
      return {
        emailsArray:[]
      }
    },
    mounted() {
      for(let i=0; i< 10; i++) {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp)=> {
          const curEmail = resp.data.response;
          this.emailsArray.push(curEmail);
        })
      }
    }
  }).mount('#app')

