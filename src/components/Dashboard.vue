<template>
  <div class="container-fluid mt-5 px-10">
    <div class="flex gap-3 mb-20">
      <button class="text-white btn btn-primary" @click="logout">Logout</button>
      <input
        v-show="display"
        class="w-2/4 text-secondary p-2 rounded"
        type="text"
        @keyup.enter="onEnter"
        placeholder="Search..."
      />
    </div>

    <div class="flex">
      <div class="row w-1/4">
        <div class="">
          <div id="data-entry">
            <div class="card">
              <div class="card-header text-center">
                <h5 class="cursor-default">Neuer Eintrag</h5>
              </div>
              <div class="card-body">
                <form @submit.prevent="submitData">
                  <label for="Icon">Icon</label>
                  <select class="form-select mt-2" v-model="newEventIcon">
                    <option value="server">Server</option>
                    <option value="app">App</option>
                  </select>
                  <!-- <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Neues Icon"
                    v-model="newEventIcon"
                  /> -->
                  <label for="Name" >Name</label>
                  <input
                    type="text"
                    class="form-control mb-2"
                    placeholder="Neuer Name"
                    v-model="newEventName"
                  />
                  <label for="Link">Link</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Neuer Link"
                    v-model="newEventLink"
                  />
                  <div class="text-center mt-3"></div>
                  <hr />
                  <div class="d-grid gap-2">
                    <button
                      class="text-white btn btn-primary mt-2 pointer-events: none"
                      type="submit"
                    >
                      Eintragen
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row w-3/4 ml-1">
        <div>
          <div class="card-group">
            <div class="card">
              <div class="card-header text-center">
                <strong class="cursor-default">Daten</strong>
              </div>
              <div v-for="data in serverData" :key="data.id">
                <DashboardEvent
                  :dataProps="data"
                  @deleteObj-id="deleteObj"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardEvent from "@/components/DashboardEvent.vue";
import axios from "axios";

export default {
  name: "DashboardObj",
  components: { DashboardEvent },
  data() {
    return {
      display: true,
      newEventIcon: "",
      newEventName: "",
      newEventLink: "",
      objects: "https://x8ki-letl-twmt.n7.xano.io/api:4yIyC8ks/objects",
      serverData: [],
    };
  },

  async created() {
    const res = await axios.get(this.objects, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    this.serverData = res.data;
    console.log(this.serverData);
  },
  methods: {
    onEnter(e) {
      if (e.target.value === "") {
        return;
      } else {
        alert(e.target.value);
      }
    },
    logout() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
    submitData() {
      

      axios.post(
        this.objects,
        {
          id: Math.random(),
          label_id: Math.random(),
          name: this.newEventName,
          link: this.newEventLink,
          icon: this.newEventIcon,
          created_at: Math.floor(Date.now() / 1000),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
    },
    deleteObj(data) {
      axios.delete(this.objects + `/${data.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
    },
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: #0275d8;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.btn-primary:hover {
  background-color: #0275d8;
  border: 4px solid #0167c0;
}
</style>
