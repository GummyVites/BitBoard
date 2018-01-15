<template lang="html">
  <div class="navBar">
  <!-- nav Bar -->
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
          <a<router-link to="/News">News</router-link></a>
        </li>
        <li>
          <a href="#"><span class="icon-dice"></span>&nbsp;Data Visulization</a>
        </li>
        <li>
          <a<router-link to="/Login">Login</router-link></a>
        </li>
      </ul>
  </nav>
  <!-- end of nav bar -->
    </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style scoped>
nav.nav-center ul li {
  display: inline;
  float: none;
}

nav.nav-center ul li a {
  display: inline-block;
}
</style>
