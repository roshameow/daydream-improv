<template>
  <div class="home">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    </header>
    <div class="logo">
      <div class="pic-block">
        <img
          alt="空想即兴"
          class="logo_ch"
          src="@/assets/logo_ch.svg"
          width="225"
          height="225"
        />
        <img
          alt="DayDream Improv"
          class="logo_en"
          src="@/assets/logo_en_shape.svg"
          width="225"
          height="225"
        />
      </div>
    </div>
    <nav>
        <RouterLink to="/agenda">活动日历</RouterLink>
        <RouterLink to="/activitycard">活动记录</RouterLink>
        <RouterLink to="/about">联系方式</RouterLink>
      </nav>
    <!-- <h1>空想即兴</h1> -->
  </div>
</template>

<style>
.home {
}

.logo {
  display: flex;
  height: 35.3vh;
  align-items: center;
  justify-content: space-around;
}
.logo .logo_ch {
  height: 100%;
}
.logo .logo_en {
  height: 50%;
  position: absolute;
  bottom: -4%;
  left: 10%;
  animation: slideUpDown 1s ease-in-out alternate;
}

@keyframes slideUpDown {
  from {
    transform: rotateX(180deg);
  }
  to {
    transform: rotateX(0deg);
  }
}

.pic-block {
  position: relative;
  height: 100%;
  margin: 0 auto;
}

header {
  line-height: 1.5;
  max-height: 100vh;
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

/* nav a:first-of-type {
  border: 0;
} */

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
