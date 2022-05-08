<template>
    <div class="container">
      <router-link class="nav-link" to="/"><button type="button" class="btn-close" aria-label="Close"></button></router-link>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(audios,index) in audio">
          <div class="card">
            <div class="card-body">
              <p> Audio surat ke {{index +1}}</p>
              <audio controls>
                <source :src=audios.audio_url type="audio/mpeg">
              </audio>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Audio",
  data() {
    return {
      audio: []
    }
  },
  mounted() {
    this.getaudio()
    console.log(this.$route.params)
  },
  methods: {
    async getaudio(){
      let audioId = this.$route.params.id
      let res = await axios.get('https://api.quran.com/api/v4/chapter_recitations/1?language=id' + audioId)
      console.log(res)
      this.audio = res.data.audio_files
    }
  }
}
</script>

<style scoped>
.nav-link{
  margin-bottom: 80px;
}
</style>