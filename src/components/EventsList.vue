<template>
  <div>
    <EventsCard v-for="post in posts" :key="post.id" :name="post.name" :message="post.message" :email="post.email"
      :timestamp="post.timestamp" :image="post.avatar" :postImage="post.postImage" />
  </div>
</template>

<script>
import EventsCard from "./EventsCard.vue";
export default {
  props:["posts"],
  components: { EventsCard },
};
</script>

<style scoped>

</style>
