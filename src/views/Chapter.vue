<template>
  <div class="container">
    <div class="row">
      <h1> بِسْمِ اللّهِ الرَّحْمَنِ الرَّحِيْ</h1>
      <div class="col-12">
        <ul class="list-group list-group-flush">
<!--          <li class="list-group" v-for="audios in audio">-->
<!--            <audio controls>-->
<!--              <source :src=audios.audio_url type="audio/mpeg">-->
<!--            </audio>-->
<!--          </li>-->
          <li class="list-group" v-for="verses in chapter">
            {{verses.text_uthmani}} &nbsp; &nbsp; {{verses.verse_key}}
          </li>
<!--          <li class="list-group" v-for="translations in translation">-->
<!--            {{translations.text}}-->
<!--          </li>-->
        </ul>
      </div>

    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Chapter",
  data() {
    return{
      // audio: [],
      chapter: [],
      // translation : []
    }

  },
  mounted() {
    // this.getAudio()
    this.getChapter()
    //this.gettranslations()
    console.log(this.$route.params)
  },
  methods : {
    // async getAudio (){
    //   let chapterId = this.$route.params.id;
    //   let res = await axios.get(  'https://api.quran.com/api/v4/chapter_recitations/1?language=id'+chapterId);
    //   console.log(res)
    //   this.audio = res.data.audio_files
    // },
    async getChapter (){
      let chapterId = this.$route.params.id;
      let res = await axios.get('https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number='+chapterId);
      console.log(res)
      this.chapter = res.data.verses
    },
      // async gettranslations(){
      //   let res = await axios.get('https://api.quran.com/api/v4/quran/translations/33?chapter_number')
      //   console.log(res)
      //   this.translation = res.data.translations
      // },
  },
}
</script>

<style scoped>
.row h1 {
  text-align: center;
  margin-top: 100px;
  margin-bottom: 50px;
}
.list-group{
  font-weight: bold;
  font-size: 25px;
  text-align: end;
  margin-bottom: 25px;
}

</style>