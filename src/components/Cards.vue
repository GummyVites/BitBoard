<template>
<div class="Cards">
  <h1>BitBoard</h1>
  <div class="container_m">
    <nav class="nav-center" role="navigation">
      <div class="nav-wrapper container">
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
      </div>
    </nav>
  </div>

  <div id="searchInput"> <input type="text" v-model="search" placeholder="Search Coin Symbol" /></div>

  <div v-for="item in filteredName" icon="search" class="card card-1">
    <div>
      <h5>{{item.name}}</h5></div>
    <div>
      <h6>{{item.symbol}}</h6></div>
    <div>Coin Price in USD: ${{item.price_usd}}</div>
    <div>Bitcoin Price: {{item.price_btc}}</div>
    <!-- <div>Market Cap: {{item.market_cap_usd}}</div> -->

    <div v-if="item.percent_change_1h < 0" v-bind:style="{color: negative}">One Hour Change: {{item.percent_change_1h}}</div>
    <div v-else-if="item.percent_change_1h > 0" v-bind:style="{color: positive}">One Hour Change: +{{item.percent_change_1h}}</div>
    <div v-else>One Hour Change: {{item.percent_change_1h}}</div>

    <div v-if="item.percent_change_7d < 0" v-bind:style="{color: negative}">One Day Change: {{item.percent_change_7d}}</div>
    <div v-else-if="item.percent_change_7d > 0" v-bind:style="{color: positive}">One Day Change: +{{item.percent_change_7d}}</div>
    <div v-else>One Day Change: {{item.percent_change_7d}}</div>

    <div v-if="item.percent_change_24h < 0" v-bind:style="{color: negative}">One Week Change: {{item.percent_change_24h}}</div>
    <div v-else-if="item.percent_change_24h > 0" v-bind:style="{color: positive}">One Week Change: +{{item.percent_change_24h}}</div>
    <div v-else>One Week Change: {{item.percent_change_24h}}</div>

  </div>

</div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      negative: 'red',
      positive: 'green',
      coins: [],
      search: ''
    }
  },
  created: function() {
    $watch: {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(function(response) {
        var datas = response.data;
        this.coins = response.data;
      })
    }
  },
  computed: {
    filteredName: function() {
      return this.coins.filter((item) => {
        return item.symbol.toUpperCase().includes(this.search.toUpperCase());
      });
      // }
    }
  },
  methods: {
    updatedCoins: function() {
      this.$http.get('https://api.coinmarketcap.com/v1/ticker/')
        .then(function(response) {
          var datas = response.data;
          this.coins = response.data;
        })
    }
  }
}
</script>

<style>
.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin: 1rem;
  position: relative;
  width: 300px;
  margin-bottom: 10px;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.container_m:before,
.container_m:after {
  content: '';
  display: table;
}

.container_m:after {
  clear: both;
}

nav.nav-center ul {
  text-align: center;
}

nav.nav-center ul li {
  display: inline;
  float: none;
}

nav.nav-center ul li a {
  display: inline-block;
}

input {
  text-align: center;
}

#searchInput {
  width: 50%;
  text-align: center;
  float: none;
  margin-left: 25%;
  margin-top: 2%;
}

.name {
  font-size: 40px;
}
</style>
