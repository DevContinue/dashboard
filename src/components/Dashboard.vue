<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <div class="card-group">
          <div class="card">
            <div class="card-header text-center">
              <strong>Daten</strong>
            </div>
            <div v-for="(data, index) in serverData" :key="data.id">
              <DashboardEvent
                :dataProps="data"
                :indexProps="index"
                @deleteObj-index="deleteObj"
              />
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
                placeholder="Neues Icon"
                v-model="newEventIcon"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Neuer Name"
                v-model="newEventName"
              />
              <input
                type="text"
                class="form-control"
                placeholder="Neuer Link"
                v-model="newEventLink"
              />
              <div class="text-center mt-3"></div>
              <hr />
              <div class="d-grid gap-2">
                <button class="btn btn-primary" @click="addObj">
                  Eintragen
                </button>
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

export default {
  name: "DashboardObj",
  components: { DashboardEvent },
  data() {
    return {
      newEventIcon: "",
      newEventName: "",
      newEventLink: "",
      serverData: [
        {
          id: 1,
          label_id: 1,
          name: "Awesome Server",
          link: "https://example.com",
          icon: "server",
          created_at: 1658763176202,
        },
      ],
    };
  },
  methods: {
    addObj() {
      if (this.newEventName.trim() === "") {
        this.newEventName = "";
        this.newEventIcon = "";
        this.newEventLink = "";
        return;
      } else {
        this.serverData.push({
          id: Math.random(),
          label_id: Math.random(),
          name: this.newEventName,
          link: this.newEventLink,
          icon: this.newEventIcon,
          created_at: 1658763176587,
        });
        this.newEventName = "";
        this.newEventIcon = "";
        this.newEventLink = "";
      }
    },
    deleteObj(index) {
      this.serverData.splice(index, 1);
    },
  },
};
</script>
