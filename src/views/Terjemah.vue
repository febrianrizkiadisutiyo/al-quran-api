<template>

<h1>terjemahan</h1>
  <li class="list-group1" v-for="translations in translation">
    {{translations.text}}
  </li>

</template>

<script>
import axios from "axios";
export default {
  name: "Terjemah",
  data (){
    return {
      translation :[]
    }
  },
  mounted() {
    this.getTranslation()
  },
  methods: {
    async getTranslation(){
        let res = await axios.get('https://api.quran.com/api/v4/quran/translations/33?chapter_number')
        console.log(res)
        this.translation = res.data.translations
      },
  }
}
</script>

<style scoped>
.list-group1 {
  margin-bottom: 20px;
  margin-left: 15px;
  margin-right: 10px;
}
</style>