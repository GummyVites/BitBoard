<template>
<div id="Portfolio">
  <!-- Header -->
  <h1>Portfolio</h1>

  <!-- wrapper -->
  <div class="search-wrapper">
    <!-- container -->
    <div class="container_m">
      <nav class="nav-center" role="navigation">
        <div class="nav-wrapper container">
          <!-- list of links -->
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
            <li>
              <a v-on:click="logout"> Sign out</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <!-- end of nav bar -->

  <!-- display as cards -->
  <li v-for="coin in portfolio" class="card card-1">
    <div><h4>{{coin.buyOrSell}}</h4></div>

    <div><h5>{{coin.coinName}}</h5></div>

    <div> {{coin.coinSymbol}}</div>

    <div>Price Bought At :{{coin.buyingPrice}}</div>

    <div>Amount bought: {{coin.coinAmount}}</div>

    <!-- calls calculate -->
    <div>Margins: {{calculateProfit()}}</div>

  </li>

  <!-- home button -->
  <div class="home">
    <router-link to="/" class="btn-floating btn-large red">
      <i class="fa fa-home" aria-hidden="true"></i>
    </router-link>
  </div>

  <!-- add button -->
  <div class="fixed-action-btn">
    <router-link to="/add" class="btn-floating btn-large red">
      <i class="fa fa-plus"></i>
    </router-link>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
import firebase from 'firebase'
export default {
  name: 'Portfolio',
  data() {
    return {
      portfolio: [],
      crypto:[]
    }
  },
  // api getter
  created() {
    this.$http.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(function(response) {
        this.crypto = response.data;
      })
    //calls firebase to get database
    db.collection('coinAdded').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        const data = {
          'coinName': doc.data().coinName,
          'buyingPrice': doc.data().buyingPrice,
          'coinAmount': doc.data().coinAmount,
          'buyOrSell': doc.data().buyOrSell,
          'coinSymbol': doc.data().coinSymbol
        }
        this.portfolio.push(data);
      })
    })
  },
  // calculates Profit not finished
  methods: {
    calculateProfit(){
      console.log(this.portfolio.coinAmount);
      console.log(this.portfolio.buyingPrice);
      console.log(crypto.price_usd);
      ((this.portfolio.coinAmount)*(this.portfolio.buyingPrice)) - ((crypto.price_usd) * (this.portfolio.coinAmount));
    },
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
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

.home {
  position: absolute;
  bottom: 2.5%;
  left: 1%;
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

</style>
