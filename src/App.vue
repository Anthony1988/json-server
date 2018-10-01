<template>
  <div id="app">
    <div class="col-xs-12">
      <img src="./assets/logo.png">
    </div>
    <div class="col-xs-12">
      <button class="btn btn-primary" @click="getData">{{get}}</button>
    </div>
    <div class="col-xs-12">
      <form>
        <label for="name">Your name</label>
        <input name="name" type="text" placeholder="type your name" v-model="data.name" required />
        <label for="email">Your email</label>
        <input name="email" type="email" placeholder="type your email" v-model="data.email" required />
        <input type="submit" class="btn btn-secondary" @click.prevent="postData"> Send info </button>
      </form>
    </div>
  </div>
</template>

<script>
const defaultData = {
  name: undefined,
  email: undefined,
}
export default {
  name: 'app',
  data () {
    return {
      get: 'get All Data',
      post: 'post Data',
      data: defaultData,
    };
  },
  methods: {
    getData() {
      this.$axios
        .get('https://jsonplaceholder.typicode.com/todos/', {
          params: {
            title: 'delectus aut autem',
          }
        })
        .then(r => console.log(r.data[0]))
        .then(data => console.log(data))
    },
    postData() {
      const url = '/creds';
      this.$axios
        .post(url, this.data)
        .then(() => this.data = defaultData)
    },
    sendIt() {
      console.log(this.data);
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
