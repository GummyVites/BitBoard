<template>
<div class="Cards">
  <div class="search-wrapper">
    <section id="masthead" class="shadow">
      <div class="container_m">
        <nav>
          <ul>
            <li>
              <router-link to="/hi"><a><span class="icon-drawer"></span>&nbsp;  Portfolio</a></router-link>
            </li>
            <li>
              <a href=""><span class="icon-bubbles"></span>&nbsp; News</a>
            </li>
            <li>
              <a href="#"><span class="icon-dice"></span>&nbsp;Data Visulization</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <input type="text" v-model="search" placeholder="Search Coin Symbol" />
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </div>

  <div v-for="item in filteredName" icon="search" class="card card-1">
    <div>{{item.name}}</div>
    <div>{{item.symbol}}</div>
    <div>Coin Price in USD: ${{item.price_usd}}</div>
    <div>Bitcoin Price: {{item.price_btc}}</div>
    <div>Market Cap: {{item.market_cap_usd}}</div>
    <div>One Hour Change: {{item.percent_change_1h}}</div>
    <div>One Day Change: {{item.percent_change_7d}}</div>
    <div>One Week Change: {{item.percent_change_24h}}</div>
  </div>

</div>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
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

<style scoped>
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

.search-wrapper {
  margin: 10px 0;
}

input {
  width: 140%;
  height: 20px;
  margin-top: 4.5px;
  margin-left: 5px;
}

a {
  text-decoration: none;
  color: #6c73cc;
}

li {
  list-style: none;
}

.container_m {
  width: 1160px;
  margin: 0 auto;
  z-index: 100;
}

.shadow {
  position: relative;
}

.shadow:after {
  display: block;
  content: "";
  position: absolute;
  z-index: -1;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0);
  bottom: 1px;
  left: 18%;
  right: 10%;

  width: 60%;
  height: 50%;
  -moz-border-radius: 100%;
  border-radius: 100%;
  -webkit-transition: box-shadow .8s ease;
}

.shadow:hover.shadow:after {
  display: block;
  content: "";
  position: absolute;
  z-index: -1;

  box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
  bottom: 1px;
  left: 18%;
  right: 10%;

  width: 60%;
  height: 50%;
  -moz-border-radius: 100%;
  border-radius: 100%;

}

.container_m nav {
  margin-left: 130px;
}

.container_m nav ul li {
  float: left;
  margin-top: 10px;
  margin-bottom: 4px;
}

.container_m nav ul li a {
  background: white;

  border-radius: 2px;

  display: inline-block;
  font-size: .8em;
  font-family: 'Open Sans', arial;
  color: rgba(0, 0, 0, .6);

  margin-right: 1px;
  padding: 11px 17px;

}

.container_m nav ul li a:hover {
  background: rgba(0, 0, 0, .1);
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, .2) inset;
  color: black;

}

.container_m nav ul li:first-child a:hover span {
  color: red;
}

.container_m:before,
.container_m:after {
  content: '';
  display: table;
}

.container_m:after {
  clear: both;
}

#masthead {
  width: 100%;
  background: white;
  margin-bottom: 15px;
}
</style>
