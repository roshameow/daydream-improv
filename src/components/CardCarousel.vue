<template>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
  </head>
  <div class="container" ref="cardContainer">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
      @click="toggleCard(index, card)"
      :class="{ active: !card.frontface }"
    >
      <div class="front" v-if="card.frontface">
        <img
          :src="card.frontImage"
          alt="Front Image"
          loading="lazy"
          class="movie-ticket-border"
        />
      </div>
      <div class="back" v-else>
        <h3>Card {{ index + 1 }} Back Content</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import show_2013_07_04 from '@/assets/covers/show_2013_07_04.png' // => or relative path
import acitivity_1 from '@/assets/covers/acitivity_1.jpg' // => or relative path

</script>

<script>
export default {
  data() {
    return {
      cards: [
        {
          frontImage: show_2013_07_04,
          backImage: "src/assets/covers/acitivity_1.jpg",
          frontface: true,
        },
        {
          frontImage: acitivity_1,
          backImage: "src/assets/covers/show_2013_07_04.png",
          frontface: true,
        },
        // Add more cards with different image paths as needed
      ],
      activeCard: null,
    };
  },
  methods: {
    toggleCard(index, card) {
      this.activeCard = this.activeCard === index ? null : index;
      //   this.activeCard = index;
      card.frontface = !card.frontface;
      //   this.$set(card, 'frontface', !card.frontface);
      // console.log(
      //   "index",
      //   index,
      //   "card.frontface",
      //   card.frontface,
      //   "this.activeCard",
      //   this.activeCard
      // );

      //   this.cards[this.activeCard].frontface = !this.cards[this.activeCard].frontface;
    },
    CardFace(card) {
      return card.frontface === true ? card.frontImage : card.backImage;
    },
  },
};
</script>

<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: #16384c; */
}

.card {
  width: 200px;
  height: 300px;
  perspective: 1000px;
  margin: 0 10px;
  cursor: pointer;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  /* animation: slideUpDown 1s ease-in-out alternate; */
}

@keyframes slideUpDown {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.card .front,
.card .back {
  position: absolute;
  width: 100%;
  height: 100%;
  /* backface-visibility: hidden; */
}

.card .front {
  /* background-color: #f0f0f0; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: rotateY(180deg); */
}

.card .back {
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
}

.card.active {
  transform: rotateY(180deg);
}

/* .card .front:hover {
  transform: rotateY(180deg);
} */

.card .front img,
.card .back img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.movie-ticket-border {
  border-radius: 10px; /* 边框圆角 */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* 只有右下方向的阴影 */
}
</style>
