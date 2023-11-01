<template>
  <div id="web_adapt">
    <header>
      <div class="sidebar">
        <!-- Sidebar content -->
        <Calendar />
      </div>
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
/* Add styles for the sidebar if needed */
.sidebar {
  /* Add styles for the sidebar container */
}
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
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
  body {
    display: flex;
    place-items: center;
  }

  #web_adapt {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 0.5rem;
  }
}
</style>
