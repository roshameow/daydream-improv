<template>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
  </head>
  <div class="container">
    <div v-for="(card, index) in cards" :key="index" class="card">
      <div class="imgBx">
        <img :src="card.cover" alt="Cover Image" loading="lazy" />
      </div>
      <div class="content">
        <h2>{{ card.name }} </h2>
        <p>
          {{ card.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae, voluptatibus magnam reprehenderit a numquam. Temporibus esse sit provident quaerat quae.",
          cover: "src/assets/covers/show_2013_07_04.png",
          name: "Person 1",
        },
        {
          id: 2,
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente recusandae, voluptatibus magnam reprehenderit a numquam. Temporibus esse sit provident quaerat quae.",

          cover: "src/assets/covers/show_2013_07_04.png",
          name: "Person 2",
        },
        {
          id: 3,
          content: "Card 3 Content",
          cover: "src/assets/covers/show_2013_07_04.png",
          name: "Person 3",
        },
        {
          id: 4,
          content: "Card 3 Content",
          cover: "src/assets/covers/show_2013_07_04.png",
          name: "Person 3",
        },
        {
          id: 5,
          content: "Card 3 Content",
          cover: "src/assets/covers/show_2013_07_04.png",
          name: "Person 3",
        },
        {
          id: 6,
          content: "Card 3 Content",
          cover: "src/assets/covers/show_2013_07_04.png",
          name: "Person 3",
        },
        {
          id: 7,
          content: "Card 3 Content",
          cover: "src/assets/covers/show_2013_07_04.png",
          name: "Person 3",
        },
        // ... Add more card data as needed
      ],
      selectedCard: null,
    };
  },
  methods: {
    selectRandomCard() {
      const randomIndex = Math.floor(Math.random() * this.cards.length);
      this.selectedCard = this.cards[randomIndex];
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
  /* height: 600px; */
  width: 100%;
  /* height: 100vh; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* padding: 30px; */
  background: #16384c;
}

@media (max-width: 1024px) {
  .container {
    display: flex;
    place-items: center;
  }

}

.container .card {
  /* margin-top: 100px; */
  position: relative;
  max-width: 300px;
  height: 280px;
  background: #fff;
  margin: 30px 10px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 202px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  z-index: 0;
}

.container .card:hover {
  height: 420px;
}

.container .card .imgBx {
  position: relative;
  /* width: 260px;
  height: 260px;
  top: -60px;
  left: 20px; */
  width: 100%;
  /* height: 100%; */
  top: -30px;
  /* left: 20px; */
  padding-top: 100%; /* 设置高度为容器宽度的75%（4:3的比例） */
  overflow: hidden; /* 隐藏溢出的部分 */
  z-index: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.container .card .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Make the image cover the entire container width */
  height: 100%; /* Make the image cover the entire container height */
  object-fit: cover; /* Crop the image to maintain the aspect ratio */
  z-index: 1;
  /* border-radius: 4px; */
}

.container .card .content {
  position: relative;
  margin-top: -140px;
  width: 100%;

  /* padding: 10px 15px; */
  text-align: center;
  color: #111;
  visibility: hidden;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.container .card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  /* transition-delay: 0.3s; */
  overflow: hidden; /* 隐藏溢出的部分 */

  object-fit: cover; /* Crop the image to maintain the aspect ratio */
  z-index: 0;
}


</style>
