<template>
  <div id="Portfolio">
    <h3>Portfolio</h3>
  </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'Portfolio',
  data(){
    return{
      portfolio: []
    }
  },
    created () {
      db.collection('coinAdded').get().then(querySnapshot =>{
        querySnapshot.forEach(doc =>{
          console.log(doc.data);
          const data ={

          }
        })
      })
    }
}
</script>

<style>
</style>
