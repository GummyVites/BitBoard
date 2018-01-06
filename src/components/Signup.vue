<template lang="html">
  <div class="Signup">
    <nav class="nav-center">
        <ul>
          <li>
            <a <router-link to="/">Home</router-link></a>
          </li>
          <li>
            <a<router-link to="/hi"><span class="icon-drawer"></span>&nbsp; Portfolio</router-link>
              </a>
          </li>
          <li>
            <a href=""><span class="icon-bubbles"></span>&nbsp; News</a>
          </li>
          <li>
            <a href="#"><span class="icon-dice"></span>&nbsp;Data Visulization</a>
          </li>
          <li>
            <a<router-link to="/Login">Login</router-link></a>
          </li>
        </ul>
    </nav>

    <body class="align">
      <h1>Sign Up</h1>
    <div class="grid">
      <div class="form login">
        <div class="form__field">
          <input v-model="firstName" type="text" name="first Name" class="form__input" placeholder="First Name" required>
        </div>

        <div class="form__field">
          <input v-model="lastName" type="text" name="last Name" class="form__input" placeholder="Last Name" required>
        </div>

        <div class="form__field">
          <input v-model="email" type="text" name="email" class="form__input" placeholder="Email" required>
        </div>

        <div class="form__field">
          <input v-model="username" type="text" name="username" class="form__input" placeholder="Username" required>
        </div>

        <div class="form__field">
          <input v-model="password" type="text" name="password" class="form__input" placeholder="Password" required>
        </div>

        <div class="form__field">
          <input v-on:click="onsignUp" type="submit" value="Sign Up">
        </div>

        <div class="form__field">
          <input<router-link to="/Login"> <input type="submit" value="Cancel"> </router-link>
        </div>
    </div>
          </div>
    </body>
  </div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
  name: 'Signup',
  data() {
    return {
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      username:''
    }
  },
  methods:{
    onsignUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function(user){
          alert('Your account has been created')
        },
        function(err){
          alert('There was an error' +err.message)
        }
      );
    }
  }
}
</script>


<style scoped>
body{
background-color: #2c3338;
}

.align {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

/* helpers/grid.css */

.grid {
  margin-left: auto;
  margin-right: auto;
  max-width: 320px;
  max-width: 20rem;
  width: 90%;
}

/* helpers/hidden.css */

.hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

/* helpers/icon.css */

.icons {
  display: none;
}

.icon {
  display: inline-block;
  fill: #606468;
  font-size: 16px;
  font-size: 1rem;
  height: 3em;
  vertical-align: middle;
  width: 1em;
}

/* layout/base.css */

* {
  -webkit-box-sizing: inherit;
          box-sizing: inherit;
}

html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  font-size: 100%;
  height: 100%;
}

body {
  background-color: #2c3338;
  color: #606468;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-size: 0.875rem;
  font-weight: 400;
  height: 100%;
  line-height: 1.5;
  margin: 0;
  min-height: 100vh;
}

/* modules/anchor.css */

a {
  color: #eee;
  outline: 0;
  text-decoration: none;
}

a:focus,
a:hover {
  text-decoration: underline;
}

/* modules/form.css */

input {
  background-image: none;
  border: 0;
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  -webkit-transition: background-color 0.3s;
  transition: background-color 0.3s;
}

input[type='submit'] {
  cursor: pointer;
}

input[type='submit'] {
  cursor: pointer;
}

.form {
  margin: -14px;
  margin: -0.875rem;
}

.form input[type='password'],
.form input[type='text'],
.form input[type='submit'] {
  width: 100%;
}

.form__field {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: 14px;
  margin: 0.875rem;
}

.form__input {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

/* modules/login.css */

.login {
  color: #eee;
}

.login label,
.login input[type='text'],
.login input[type='password'],
.login input[type='submit'] {
  border-radius: 0.25rem;
  padding: 16px;
  padding: 1rem;
}

.login label {
  background-color: #363b41;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 20px;
  padding-left: 1.25rem;
  padding-right: 20px;
  padding-right: 1.25rem;
}

.login input[type='password'],
.login input[type='text'] {
  background-color: #3b4148;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.login input[type='password']:focus,
.login input[type='password']:hover,
.login input[type='text']:focus,
.login input[type='text']:hover {
  background-color: #434a52;
}

.login input[type='submit'] {
  background-color: #ea4c88;
  color: #eee;
  font-weight: 700;
  text-transform: uppercase;
}

.login input[type='submit']:focus,
.login input[type='submit']:hover {
  background-color: #d44179;
}

/* modules/text.css */

p {
  margin-bottom: 24px;
  margin-bottom: 1.5rem;
  margin-top: 24px;
  margin-top: 1.5rem;
}

.text--center {
  text-align: center;
}

label{
  height: 9.3vh;
}

nav.nav-center ul li {
  display: inline;
  float: none;
}

nav.nav-center ul li a {
  display: inline-block;
}

h1{

  color: white;
}
</style>
