<template>
  <div class="home">
    <nav>
      <a class="navbar-item" @click="scrollTo('mythos')">
        <div>
          מיתוס
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('immerse')">
        <div>
          חוויות אימרסיביות
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('team')">
        <div>
          הצוות
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('plot')">
        <div>
          עלילה
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('media')">
        <div>
          גלריה
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('show')">
        <div>
          מיקום ההופעה
        </div>
      </a>
      <a class="navbar-item" @click="scrollTo('contact')">
        <div>
          צרו קשר
        </div>
      </a>
    </nav>
  <section class="mythos" ref="mythos">
    <div>
      <span>אודות מיתוס</span>
      מיתוס, מבית 'ערפילית', הינו מופע תיאטרון אימרסיבי, 
      אשר מאתגר ומבטל את ההפרדה הקלאסית בין רחבת הבמה לקהל, 
      והופך את החלל כולו לזירת ההתרחשות . 
      באופן זה, מיתוס מאפשרת לצופים להפוך למשתתפים פעילים ואינדיבידואליים, 
      אשר חופשיים להסתובב ולחקור את כל חללי המופע, 
      לחוות אינטראקציות ישירות עם הדמויות ולהשפיע על העלילה.
      <br/>
      מיתוס היא חוויה ייחודית ורב תחומית. 
      מציגים בה כ-25 שחקנים, רקדנים, נגנים ולוליינים, 
      המייצרים שילוב ייחודי בין הצגת תיאטרון, מופע אינטראקטיבי 
      ותערוכת אמנות ביזארית, עם מיצבים במדיומים שונים.
      <br/>
      זוהי חוויה תיאטרלית אינטראקטיבית, 
      המוצגת כקונספט אומנותי חדש ומרהיב בארץ. 
      <br/>
      מיתוס משתמשת בפלטפורמת החוויה האימרסיבית כדי לארוג 
      ביחד סיפורים מז'אנרים שונים - החל מטרגדיה יוונית ועד 
      קומדיה, רומנטיקה ופעולה; ובעזרתם יוצרת עולם 
      שמתקיים כולו במרחבים אינטראקטיביים, 
      המכילים חללים סודיים, מופעי אקרובטיקה 
      וריקוד, לצד עושר רב של סיפורים המתרחשים במקביל.  
      <br/><br/>
      <img class="logo" src="../assets/arpilit-logo.png" alt="" />
      <span>אודות ערפילית</span>
      בית ליצירת חוויות אימרסיביות, 
      המשלבות אלמנטים מעולמות התיאטרון, הסרטים, המחול 
      והקרקס - ליצירת חוויה מרהיבה, ייחודית וסוחפת.
    </div>
    <!-- <img class="head" src="../assets/head.jpg" alt="" /> -->
  </section>
  <section class="immerse" ref="immerse">
    <div>
    <span>מה זו חוויה אימרסיבית? </span>
      ז'אנר מיוחד בתיאטרון, שבו מתבטלת ההפרדה הקלאסית בין הצופים 
      לבמה - המשתתפים חווים את הסיפור יחד עם השחקנים, באותה הרחבה. 
      חוויה אימרסיבית מטשטשת את הגבולות בין דמיון למציאות והופכת את 
      הקהל מצופים פסיביים לחווים אקטיביים. החלל, שהופך למציאות מדומה של הקהל, גורם למשתתפים לחוש שהם בתוך עולם אחר ובלתי נפרד ממנו.
      <br/>
      מיתוס הינה חוויה תיאטרלית אינטראקטיבית שיוצרת
      אימרסיה מלאה בין הצופים להופעה. 
      החלל כולו הופך לעולם מיתי בו המשתתפים
        נטמעים פיזית ורגשית בתוך הסיפור. החוויה האימרסיבית מעודדת את המשתתפים לחקור את עולם 
      הפנטזיה בו הם נמצאים. דרך הגילוי, 
      שהינו דינמי, מרתק ומהנה - מעניק לקהל חוויה 
      מעוררת השראה ובלתי נשכחת.
    </div>
  </section>
  <section class="team" ref="team">
    <div class="person">
      <div>
        <h4>סמדר קרמפף</h4>
        <span>מייסדת הערפילית ויוצרת "מיתוס".</span>
        <p>Experience designer</br> אשת תוכן וחווית משתמש. יוצרת חוויות אימרסיביות בארץ ובעולם</p>
      </div>
      <div class="image">
        <img src="../assets/team/smadar.jpg" alt="" />
      </div>
    </div>
    <div class="person">
      <div>
        <h4>גלית אשכנזי</h4>
        <span>מעצבת מוצר ופנים</span>
        <p>מרצה במסלול לעיצוב פנים בשנקר</p>
      </div>
      <div class="image">
        <img src="../assets/team/galit.jpg" alt="" />
      </div>
    </div>
    <div class="person">
      <div>
        <h4>אורגד אדרי</h4>
        <span>תלבושות ותחפושות</span>
        <p>אמן תלבושות, תחפושות ואפקטים מיוחדים</p>
      </div>
      <div class="image">
        <img src="../assets/team/orgad.png" alt="" />
      </div>
    </div>
    <div class="person">
      <div>
        <h4>ערן פוליטי</h4>
        <span>ארט</span>
        <p>מאייר, צייר גרפיטי, מעצב גרפיקה וארט להפקות ופרסומות</p>
      </div>
      <div class="image">
        <img src="../assets/team/eran.jpg" alt="" />
      </div>
    </div>
    <div class="person">
      <div>
        <h4>אסף מעוז</h4>
        <span>מוסיקה</span>
        <p>כנר עם ניסיון הופעות בארץ ובעולם. מנגן בתזמורת הפילהרמונית הישראלית.</p>
      </div>
      <div class="image">
        <img src="../assets/team/assaf.jpg" alt="" />
      </div>
    </div>
  </section>
  <section class="plot" ref="plot">
    <h4>עלילה</h4>
    <p>לאחר שכלא את אימו בכיסא המלכות שלה עצמה; 
      הפייסטוס, אל הנפחים ובנו של זאוס, מתכונן לעמוד למשפט בפני כל אלי האולימפוס ואורחיהם.  
      בצעד נואש מחליט הפייסטוס לחמוק מתא המעצר, ולצאת למסע כפרה ברחבי ממלכת האלים. 
      מזמין את מי שיבחר לעקוב אחריו למפגש עם אלים שמיימים, 
      בני תמותה ויצורי השאול. הצופים מוזמנים לקחת חלק בערב לא שגרתי ומלא בשדים, 
      מוות, נשמות תועות, פחדים כמוסים, סודות אפלים וסוף לא ידוע מראש  - 
      מאחר והצופים עצמם ייקבעו אותו… </p>
  </section>
  <section class="media" ref="media">
    <h4>תמונות מהמופע</h4>
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
    <img src="https://via.placeholder.com/150" alt="" />
  </section>
  <section class="show" ref="show">
    <h4>מיקום ההופעה</h4>
    <a href="https://bascula.co.il" target="_blank">בסקולה - מרכז לאמנות ותרבות הקרקס האורבני </a>
    <p>הרכבת 72, תל אביב</p>
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe width="350" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=%D7%91%D7%A1%D7%A7%D7%95%D7%9C%D7%94&t=&z=16&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>
    </div>
  </section>
  <section class="contact" ref="contact">
    <div class="sm-icons">
      <a href="mailto:myth@arpilit.com‏" target="_blank">
        <img src="../assets/icons/envelope.svg" alt="" />
      </a>
      <a href="http://facebook.com" target="_blank">
        <img src="../assets/icons/facebook.svg" alt="" />
      </a>
      <a href="http://instagram.com" target="_blank">
        <img src="../assets/icons/instagram.svg" alt="" />
      </a>
    </div>
    <span>ובטלפון 052-4615211</span>
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

    @media only screen and (max-width: 970px) {
      width: 80%;
    }


    a {
      margin: auto 5px;
      padding: 10px 10px ;
      cursor: pointer;
      transition: 200ms;
      &:hover {
        background-color: #444444;
      }
      @media only screen and (max-width: 1100px) {
        padding: 10px 10px;
      }
      @media only screen and (max-width: 480px) {
        padding: 10px 5px;
      }
    }
  } 

  section {
    min-height: 100vh;
    padding: 3em 10px;
    font-family: 'Bellefair', serif;
    font-size: 23px;

    &.mythos {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: end;
      background-color: #51344D;
      padding-top: 5em;
      font-size: 21px;
      div {
        span {
          font-weight: bold;
        }
        display: flex;
        flex-direction: column;
        color: white;
        width: 80%;
        direction: rtl;
        text-align: justify;
        .logo {
          max-width: 100px;
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
    &.immerse {
      background-color: #6F5060;
      color: white;
      div {
        margin: 0 auto;
        padding-top: 3em;
        display: flex;
        flex-direction: column;
        width: 70%;
        direction: rtl;
        text-align: justify;
        font-size: 21px;
        span {
          font-weight: bold;
        }
      }
    }
    &.team {
      background-color: #897D99;
      color: white;
      // padding: 4.5em 5em 1em 5em;
      // width: 100vh;
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
        margin: 20px;
        display: flex;
        flex-direction: row-reverse;
        max-width: 660px;
        h4 {
          margin: 5px;
        }
        span {
          unicode-bidi: bidi-override !important;
          direction: rtl;
        }
        p {
          direction: rtl;
          margin: 5px;
        }
        .image {
          width: 200px;
          height: 200px;
          margin: 0 30px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
            transition: 300ms;
            &:hover {
              transform: scale(1.05);
            }
          }
        }
      }
    }
    &.plot {
      h4 {
        font-size: 38px;
      }
      p {
        width: 70%;
        margin: 0 auto;
        direction: rtl;
        font-size: 34px;
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
    &.show {
      .mapouter {
        position:relative;
        text-align:right;
        height:350px;
        width:350px;
        margin: 0 auto;
        .gmap_canvas {
          overflow:hidden;
          background:none!important;
          height:350px;
          width:350px;
        }
      }

    }
    &.contact {
      background-color: #51344D;
      color: white;
      padding: 4.5em;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      .sm-icons  {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        img {
          height: 92px;
          cursor: pointer;
        }
      }
      span {
        font-size: 22px;
      }
    }
  }

}
</style>
