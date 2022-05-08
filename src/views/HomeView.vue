
<template>
  <div class="home" >
    <a href='#surat'><button type="button" class="btn btn-dark">&ensp;&ensp; Ayo Mulai &ensp;&ensp;</button></a>
  </div>
  <section id="surat">
    <div class="container">
      <h1 align="center">_____________________________</h1>
      <h1 align="center">Surat</h1>
      <router-link class="nav-link" align="center" to="/terjemah">
        <a class="arti">---Terjemahan---</a>
      </router-link>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(chapter,index) in chapters" >
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4 text-center">
                <router-link :to="{ name:'chapter', params:{id: chapter.id} }">
                  <img src="../assets/logo.jpeg" class="img-fluid rounded-start" alt="...">
                </router-link>
                <h6>{{index + 1}}</h6>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="card-title">{{chapter.name_arabic}}</h3>
                  <p class="card-text"><small class="text-muted">{{chapter.name_complex}}</small></p>
                  <p class="card-text"><small class="text-muted">{{chapter.translated_name.name}}</small></p>
                  <!--                <router-link :to="{ name:'audio', params:{id: chapter.id} }">-->
                  <!--                  <img src="../assets/sound.png" class="img-fluid rounded-end">-->
                  <!--                </router-link>-->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--      <div class="audio" v-for="audios in audio" :key="audios.chapter_id">-->
        <!--        <router-link :to="{ name: 'audio', params: { chapter_id: audios.chapter_id } }"><h1>audio surah ke {{ audios.chapter_id }}</h1>-->
        <!--        </router-link>-->
        <!--      </div>-->
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      chapters:[],
    }
  },
  mounted() {
    this.getSurah()
  },
  methods : {
    async getSurah (){
      let res = await axios.get('https://api.quran.com/api/v4/chapters?language=id');
      console.log(res)
      this.chapters = res.data.chapters
    }
  },
}
</script>

<style>
.home {
  background-image: url("../assets/bg1.png");
  height: 720px;
  width: 1520px;
  text-align: center;
  background-color: black;
}
@media screen and (max-width: 700px) {
  .home{
    width: 600px;
    background-image: url("../assets/bg.webp");
  }
  .home button {
    margin-left: 50px;
    width: 200px;
  }

}
.home button {
  margin-top: 370px;
  margin-right: 580px;
}
.card-title h5{
  color: black;
}
.container h1{
  margin-top: 50px;
}
.arti {
  color: black;
  text-decoration: black;
}
.row{
  margin-top: 50px;
}

</style>