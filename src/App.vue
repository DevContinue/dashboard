<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

   <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
          <div class="card-group">
            <div class="card" >
              <div class="card-header text-center" >
                <strong>Daten</strong>
              </div>
              <div class="card-body">
                  <div id="data-event">
                    <div class="alert text-center">
                      <div>
                        <strong>{{ data.name }}</strong>
                      </div>

                      <div>
                        <a href="https://example.com">example.com</a>
                      </div>

                      <div>
                        <i class="fas fa-edit me-2" role="button"></i>
                        <i class="far fa-trash-alt" role="button"></i>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <div id="data-entry">
          <div class="card">
            <div class="card-header text-center">
              <h5>Neuer Eintrag</h5>
            </div>
            <div class="card-body">
              <input
                type="text"
                class="form-control"
                placeholder="Neuer Eintrag"
              />
              <div class="text-center mt-3">
              </div>
              <hr />
              <div class="d-grid gap-2">
                <button class="btn btn-primary">Eintragen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <button class="btn btn-lg mb-2">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <div id="data-settings">
          <div class="card">
            <div class="card-header text-center bg-success text-white">
              <strong>Einstellungen</strong>
            </div>
            <div class="card-body">
              <ul class="nav nav-pills nav-fill">
                <li v-for="i in 2" :key="i" class="nav-item" role="button">
                  <a class="nav-link"
                    ><i class="fas fa-icons text-success"></i
                  ></a>
                </li>
              </ul>
              <hr />
              <ul class="nav nav-pills nav-fill">
                <li class="nav-item" role="button">
                  <a class="nav-link"
                    ><i class="fas fa-sort-numeric-down-alt text-success"></i
                  ></a>
                </li>
                <li class="nav-item" role="button">
                  <a class="nav-link"
                    ><i class="fas fa-sort-alpha-down text-success"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "App",
  data() {
    return {
      data: store.state.data, 
    }
  }
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

.square {
  width: 40px;
  height: 40px;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-out;
}
</style>
