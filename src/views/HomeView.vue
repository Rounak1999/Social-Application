<template>
  <div class="is-flex">
    <SideBar />
    <MainFeed />
    <SearchWidget />
  </div>
</template>

<script>
import SideBar from './SideBar.vue';
import MainFeed from './MainFeed.vue';
import SearchWidget from './SearchWidget.vue';
export default {
  name: 'home',
  components: {
    SideBar,
    MainFeed,
    SearchWidget
  },
};
</script>

<style lang="scss" scoped>

</style>