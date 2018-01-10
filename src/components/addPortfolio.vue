<template>
<div id="new-employee">
  <!-- Header -->
  <h3>New Coin</h3>

  <div class="row">
    <form @submit.prevent="addCoin" class="col s12">
      <!-- Selector buy or sell -->
      <label>Buy Or Sell:</label>
      <br />
      <br />
      <select class="browser-default" v-model="buyOrSell" required>
           <option value="" disabled selected>Choose your option</option>
           <option value="Buy">Buy</option>
           <option value="Sell">Sell</option>
         </select>
      <br />
      <br />

      <!-- coin Selecter -->
      <label>Choose Coin Symbol:</label>
      <br />
      <br />
      <select class="browser-default" v-model="coinSymbol" required>
        <option value="" disabled selected>Choose your Coin</option>
           <option v-for="coin in coins">
             {{ coin.symbol }}
           </option>
          </select>
      <br />
      <br />

      <!-- coin Name input -->
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="coinName" required>
          <label>coinName</label>
        </div>
      </div>

      <!-- amount sold or bought -->
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="coinAmount" required>
          <label>coinAmount</label>
        </div>
      </div>

      <!-- price bought or sold at -->
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="buyingPrice" required>
          <label>buyingPrice</label>
        </div>
      </div>

      <!-- submit button -->
      <button type="submit" class="btn">Submit</button>
      <router-link to="/hi" class="btn grey">Cancel</router-link>

    </form>
  </div>
</div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'addPortfolio',
  data() {
    return {
      selected: '',
      coins: [],
      coinSymbol: '',
      coinName: null,
      coinAmount: null,
      buyingPrice: null,
      buyOrSell: ''
    }
  },
  // APi JSON Getter
  created: function() {
    this.$http.get('https://api.coinmarketcap.com/v1/ticker/')
      .then(function(response) {
        this.coins = response.data;
        console.log(this.coins);
      })
  },
  // send form to firebase sever
  methods: {
    addCoin() {
      db.collection('coinAdded').add({
          coinSymbol: this.coinSymbol,
          coinName: this.coinName,
          coinAmount: this.coinAmount,
          buyingPrice: this.buyingPrice,
          buyOrSell: this.buyOrSell
        })
        .then(docRef => {
          console.log('Client added: ', docRef.id)
          this.$router.push('/hi')
        })
        .catch(error => {
          console.error('Error adding employee: ', error)
        })
    }
  },
  //mount select forms
  mounted: function() {
    $(document).ready(function() {
      $('select').material_select();
    });
  }
}
</script>

<style lang="css">
</style>
