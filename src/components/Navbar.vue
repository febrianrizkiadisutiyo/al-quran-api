<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Al-Qur'an</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">
            <a class="nav-link" href="#">Home</a>
          </router-link>
          <router-link class="nav-link" to="/audio">
            <a class="nav-link" href="#">Audio</a>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar.vue",
}
</script>

<style scoped>
.navbar-nav{
  margin-left: 980px;
}
.navbar {
  height: 80px;
  width: 1520px;
  position: fixed;
  z-index: 1;
}
.navbar-brand {
  font-weight: bold;
  font-size: 35px;
}
.nav-link{
  font-weight: bold;
  font-size: 18px;
}
@media screen and (max-width: 700px) {
  .navbar {
    width: 600px;
  }
  .navbar-nav{
    margin-left: 200px;
  }
}



</style>