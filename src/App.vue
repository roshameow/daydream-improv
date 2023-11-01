<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
// import Sidebar from "./components/Sidebar.vue";
import Card from "./components/CardCarousel.vue";
</script>

<template>
    <!-- <div id="app"> -->
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <nav>
        <RouterLink to="/agenda">活动日历</RouterLink>
        <RouterLink to="/activitycard">活动记录</RouterLink>
        <RouterLink to="/about">联系方式</RouterLink>
      </nav>
  </header> 
  <!-- <Card /> -->

  <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->


    <!-- </div>  -->
    <RouterView />

<!-- </div>  -->

</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    /* margin-left: -1rem; */
    font-size: 1rem;

    /* padding: 1rem 0; */
    margin-top: 1rem;
  }
}
</style>
