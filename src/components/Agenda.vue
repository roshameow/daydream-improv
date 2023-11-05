<template>
  <div id="web_adapt">
    <header>
      <Calendar />
    </header>
    <div class="activity">
      <!-- Activity content -->
      <RouterView />
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";

export default {
  components: {
    Calendar,
  },
};
</script>

<style scoped>
header {
  line-height: 1.2;
  max-height: 100vh;
}

@media (min-width: 1024px) {
  header {
    /* display: flex; */
    place-items: center;
    position:sticky; /* 不随scroll滚动 */
    top:0em; /*看你要設定黏在螢幕上離頂端多少距離的位置*/
  }

  #web_adapt {
    display: flex;
  }
}
</style>
