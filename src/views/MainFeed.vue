<template>
  <div class="container">
    <PostInput ref="getAll" />
    <EventsList :posts="posts" />
  </div>
</template>
  
<script>
import axios from 'axios'
import EventsList from '../components/EventsList';
import PostInput from '../components/PostInput';
export default {
  name: 'mainfeed',
  data() {
    return {
      posts: [],
      loader: false
    }
  },
  
  methods: {
    getAll() {
      this.loader = true
      axios
        .get('https://62f38b87a84d8c9681261221.mockapi.io/pokemon-data/getCard')
        .then((response) => {
          console.log("res", response.data);
          this.posts = response.data
          this.loader = false
        })
        .catch((err) => {
          console.log("err", err)
          this.loader = false
        })
    }
  },
  mounted() {
    this.getAll()
  },
  components: {
    EventsList,
    PostInput
  },
};
</script>
  
<style lang="scss" scoped>

</style>