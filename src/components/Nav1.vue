<template>
    <div>
        <nav class="navbar navbar-expand-lg" style="background-color: #B0D9B1;">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page"><router-link to="/">Home</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/about">About</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to="/service">Services</router-link></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link"><router-link to="/contact">Contact</router-link></a>
                  </li>
                </ul>
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
      <div class="container mt-4">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input type="text" class="form-control" id="age" placeholder="Enter your age">
          </div>
          <div class="mb-3">
            <label for="gender" class="form-label">Gender</label>
            <input type="text" class="form-control" id="gender" placeholder="Enter your gender">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Nav1'
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 700px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  .form-label {
    font-weight: bold;
    color: #333;
  }
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
  }
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  