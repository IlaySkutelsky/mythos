<template>
  <div class="home">
    <nav>
      <a class="navbar-item" @click="scrollTo('main')">
        <div>
          בית
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('mythos')">
        <div>
          מיתוס
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('team')">
        <div>
          הצוות
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('media')">
        <div>
          גלריה
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('contact')">
        <div>
          צרו קשר
        </div>
      </a>
    </nav>
  <section class="main" ref="main">
    <div>
      <img class="logo" src="../assets/arpilit-logo.png" alt="" />
      פרטים כלליים על הפרוייקט
    </div>
    <img class="head" src="../assets/head.jpg" alt="" />
  </section>
  <section class="mythos" ref="mythos">
    <p>על חוויות אימרסיביות</p>
    <p>על מיתוס</p>
  </section>
  <section class="team" ref="team">
    <div class="person">
      <div>
        <h4>סמדר קרמפף</h4>
        <p>כתיבה</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="" />
    </div>
    <div class="person">
      <div>
        <h4>רוקי מתוקי</h4>
        <p>הפקה</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="" />
    </div>
    <div class="person">
      <div>
        <h4>מיקי מצחיקי</h4>
        <p>עיצוב</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="" />
    </div>
    <div class="person">
      <div>
        <h4>בילי דבילי</h4>
        <p>הנהגה</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="" />
    </div>
    <div class="person">
      <div>
        <h4>רוני טיפשוני</h4>
        <p>שיווק</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="" />
    </div>
    <div class="person">
      <div>
        <h4>דני מוחצני</h4>
        <p>ניצחון</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="" />
    </div>
    <div class="person">
      <div>
        <h4>חפציבה</h4>
        <p>ארטילריה</p>
      </div>
      <img src="https://via.placeholder.com/100" alt="" />
    </div>
  </section>
  <section class="media" ref="media">
    <h4>תמונות מהמופע</h4>
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
  </section>
  <section class="contact" ref="contact">
    <a href="mailto:smadar.krampf@gmail.com‏" target="_blank">
      <img src="../assets/icons/envelope.svg" alt="" />
    </a>
    <a href="http://facebook.com" target="_blank">
      <img src="../assets/icons/facebook.svg" alt="" />
    </a>
    <a href="http://instagram.com" target="_blank">
      <img src="../assets/icons/instagram.svg" alt="" />
    </a>
  </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    scrollTo: function(id) {
      var el = this.$refs[id]
      el.scrollIntoView({behavior: "smooth"})
    }
  }
}
</script>

<style lang="scss" scoped>

.home {
  nav {
    position: fixed;
    left: 50%;
    top: 1em;
    z-index: 2;
    transform: translateX(-50%);
    width: 70%;
    max-width: 860px;
    padding: 0 20px;
    border-radius: 1em;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    background-color: #989788;
    color: white;
    font-family: 'Bellefair', serif;
    font-size: 23px;
    transition: 200ms;

    @media only screen and (max-width: 870px) {
      width: 80%;
    }


    a {
      margin: auto 5px;
      padding: 10px 2em ;
      cursor: pointer;
      transition: 200ms;
      &:hover {
        background-color: #444444;
      }
      @media only screen and (max-width: 870px) {
        padding: 10px 10px;
      }
      @media only screen and (max-width: 410px) {
        padding: 10px 5px;
      }
    }
  } 

  section {
    height: 100vh;
    padding-top: 4.5em;
    font-family: 'Bellefair', serif;
    font-size: 23px;

    &.main {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: end;
      background-color: #51344D;
      padding-top: 7em;
      div {
        display: flex;
        flex-direction: column;
        color: white;
        .logo {
          max-width: 140px;
          width: 100%;
          height: auto;
          margin: 0 auto;
          filter: drop-shadow(1px 1px 0 #FFFFFF50)  
                  drop-shadow(-1px -1px 0 #FFFFFF50);
        }
      }
      img.head {
        transform: scaleX(-1);
        max-width: 450px;
        width: 40%;
        height: auto;
        // margin: auto 0;
        transition: 500ms;
        &:hover {
          filter: blur(1px) contrast(200%);
        }
      }
    }
    &.mythos {
      background-color: #6F5060;
      color: white;
    }
    &.team {
      background-color: #897D99;
      color: white;
      padding: 4.5em 5em 1em 5em;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap-reverse;
      align-items: center;
      justify-content: space-between;
      transition: 300px;
      @media only screen and (max-width: 650px) {
        flex-wrap: nowrap;
        height: fit-content;
      }
      .person {
        margin: 10px;
        display: flex;
        flex-direction: row-reverse;
        img {
          width: 100px;
          height: auto;
          margin: 0 30px;
        }
      }
    }
    &.media {
      background-color: #BBA9BC;
      color: white;
      @media only screen and (max-width: 530px) {
        height: fit-content;
      }
      img {
        margin: 10px;
      }
    }
    &.contact {
      background-color: #51344D;
      color: white;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 4.5em;
      img {
        height: 92px;
        cursor: pointer;
      }
    }
  }

}
</style>
