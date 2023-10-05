<template>
<nav class="navbar navbar-expand-lg " style="background-color: #B0D9B1;">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link"><router-link to="/">Home</router-link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link "><router-link to="/about">About</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link "><router-link to="/service">Services</router-link></a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" aria-current="page"><router-link to="/contact">Contact</router-link></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<H1>Contact</H1>
</template>
<script>
export default {
    name:'Nav4'
}
</script>