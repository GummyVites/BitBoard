<template lang="html">
  <div class="Subreddit">
    <a :href="makeUrl(item.data.permalink)" :style="makeImage(item.data.thumbnail)" target="_blank" class="thumbnail"></a>
    <div class="details">
      <a :href="makeUrl(item.data.permalink)" :title="item.data.title" target="_blank" class="title">
        {{item.data.title | truncate}}
      </a>
      <br>
      <div class="stats">
        <i class="material-icons">thumbs_up_down</i>
        {{item.data.score}}
        <i class="material-icons">forum</i>
        {{item.data.num_comments}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Subreddit',
  props: ['item'],
  methods:{
    makeImage: function(img) {
      return 'background-image: url('+img+')';
    },
    makeUrl: function (permalink) {
      return 'http://reddit.com/'+permalink;
    }
  },
  filters: {
    truncate: function(value){
      var length = 50;
      if (value.length <= length) {
        return value;
      }else {
        return value.substring(0, length) + '...';
      }
    }
  }
}
</script>

<style scoped>

  .Subreddit{
    display: flex;
    margin-top: 15px;
    text-align: left;
  }

  .thumbnail{
    display: block;
    flex: 0 0 65px;
    height: 65px;
    width: 65px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 12px;
    border-radius: 5px;
  }

  .details .title{
    font-size: 15px;
    margin-bottom: 5px;
    color: steelblue;
  }

  .stats{
    font-size: 12px;
    margin-right: 4px;
    margin-top: 7px;
    display: inline-block;
    color: #666666;
  }

  .stats i{
    font-size: 10px;
    margin-right: 2px;
  }

</style>
