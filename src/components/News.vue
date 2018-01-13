<template lang="html">
  <div class="News">
  <h1>News</h1>

  <div class="subreddits container">
    <h3>r/CryptoCurrency</h3>
    <ul class="item-list">
      <li v-for= "post in subreddits">
        <Subreddit :item="post"></Subreddit>
      </li>
    </ul>
  </div>

  <!-- home button -->
  <div class="fixed-action-btn">
    <router-link to="/" class="btn-floating btn-large red">
      <i class="fa fa-home" aria-hidden="true"></i>
    </router-link>
  </div>

  </div>
</template>

<script>
import Subreddit from './Subreddit'
export default {
  name: 'News',
  data(){
    return{
      subreddits:[]
    }
  },
  components:{
    Subreddit
  },
  created: function() {
    this.$http.get('https://www.reddit.com/r/CryptoCurrency/top.json?limit=5')
      .then((response) => {
        this.subreddits = response.data.data.children;
      })
  }
}
</script>

<style scoped>
  .container{
    max-width: 600px;
    margin: 30px auto;
    background: #ffffff;
    box-shadow:  0 0 3px #cccccc;
  }

  .subreddits{
    min-width: 400px;
    padding: 25px 45px;
  }

  .item-list{
    border-top: 1px solid #cccccc;
    padding-top: 20px;
    list-style: none;
  }


</style>
