<template>
  <div class="card flex flex-col">
    <div class="p-5 mt-5 shadow-sm">
      <div class="is-flex is-align-items-center">
        <figure class="image is-48x48">
          <img class="is-rounded icon" :src="image" width="40" height="40" />
        </figure>
        <div class="ml-5 font-family-nunito">
          <p class="font-medium">{{ name }}</p>
          <p v-if="timestamp" class="font-8 has-text-grey">
            {{new Date(timestamp).toLocaleString()}}
          </p>
          <p v-else class="has-text-grey font-8">Loading</p>
        </div>
      </div>

      <p class="pt-4">{{ message }}</p>
    </div>
    <div v-if="postImage" class="is-flex  is-justify-content-center is-align-items-center">
      <img :src="postImage" class="image main-img" loading="lazy" />
    </div>

    <!-- Post Footer -->
    <div class="is-flex is-justify-content-space-evenly is-align-items-center">
      <div class="is-flex inputIcon p-3">
        <HandThumbUpIcon class="icon has-text-grey" />
        <p class="font-16 has-text-grey">Like</p>
      </div>

      <div class="is-flex inputIcon p-3">
        <ChatBubbleLeftIcon class="icon has-text-grey" />
        <p class="font-16 has-text-grey">Comment</p>
      </div>

      <div class="is-flex inputIcon p-3">
        <ShareIcon class="icon has-text-grey" />
        <p class="font-16 has-text-grey">Share</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ChatBubbleLeftIcon, ShareIcon, HandThumbUpIcon } from "@heroicons/vue/24/outline";
export default {
  props: ["name", "message", "email", "timestamp", "image", "postImage"],
  setup() {
    return {};
  },
  components: { ChatBubbleLeftIcon, ShareIcon, HandThumbUpIcon },
};
</script>

<style scoped>
.card {
  width: 550px;
  height: auto;
  border-radius: 20px;
  display: grid;
  margin: auto;
  margin-top: 20px;
}

@media screen and (max-width: 600px) {
  .card {
    width: 350px;
    height: auto;
    border-radius: 20px;
    display: grid;
    margin: auto;
    margin-top: 20px;
  }
}

.main-img {
  width: 100%;
  max-height: 450px;
}
</style>