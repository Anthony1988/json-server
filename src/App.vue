<template>
  <div id="app">
    <div class="col-12">
      <h1>Local Json Server with a json file as database</h1>
      <h3>Made with VueJS</h3>
      <img src="./assets/logo.png">
    </div>
    <div class="col-12">
      <form @submit.prevent="evaluateData">
        <label for="name">Your name</label>
        <input name="name" type="text" placeholder="type your name" value="data.name" v-model="data.name" required />

        <label for="email">Your email</label>
        <input name="email" type="email" placeholder="type your email" value="data.name" v-model="data.email" required />

        <input type="submit" class="btn btn-secondary" v-model="submit">
        <div id="already-submitted" v-if="alreadySubmitted">{{submitMsg}}</div>
      </form>
    </div>
    <div v-if="entries.length > 0" class="row" style="padding-top: 40px;">
      <div class="col-4"></div>
      <div class="col-4">
        <table class="table" style="margin: auto">
          <thead class="bg-warning">
            <th scope="col">#</th>
            <th scope="col">Name:</th>
            <th scope="col">Email:</th>
          </thead>
          <tbody>
            <tr v-for="(entry, index) in entries" v-bind:key="entry.email" class="bg-light">
              <th scope="row">{{index}}</th>
              <td>{{entry.name}}</td>
              <td>
                <span>{{entry.email}}</span>
                <span style="float:right">
                  <a href="" @click.prevent="deleteEntry(index)">&#10006; delete </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      submit: 'submit the data',
      alreadySubmitted: false,
      submitMsg: "The provided e-mail address is already used. Use a different e-mail address.", 
      data: {},
      entries: [],
    };
  },
  methods: {
    getData() {
      this.$axios
        .get('/creds')
        .then(r => this.setData(r.data))
    },
    setData(entries) {
      this.entries = entries;
    },
    evaluateData() {
      this.alreadySubmitted = this.entries.some(entry => entry.email === this.data.email);
      if (!this.alreadySubmitted) {
        this.postData();
      }
    },
    postData() {
      const url = '/creds';
      this.$axios
        .post(url, this.data)
        .then(() => this.data = {})
        .then(() => this.getData())
    },
    deleteEntry(index) {
      const data = this.entries[index];
      const id = data.id;
      const url = `/creds/${id}`;
      this.$axios
        .delete(url, data)
        .then(() => this.getData());
    },
  },
  created() {
    this.getData()
  }
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

#already-submitted {
  padding-top: 10px;
  color: red;
  font-weight: bold;
}
</style>
