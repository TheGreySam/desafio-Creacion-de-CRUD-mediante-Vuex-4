<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
  <a class="navbar-brand p-4" href="#">CRUD</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link active" to="/">Home</router-link> 
      <router-link class="nav-item nav-link active" to="/about">About</router-link> 
      <router-link class="nav-item nav-link active" to="/login">Login</router-link>
    </div>
  </div>
</nav>
   
</template>