<template>
  <div class="card-body">
    <div class="alert text-center border border-primary">
      <div v-if="!toggle">
        <div class="flex justify-between items-center">
          <p class="m-2 cursor-default">{{ data.icon }}</p>
          <strong class="cursor-default">{{ data.name }}</strong>
          <a target="_blank" :href="data.link">{{ data.link }} </a>
          <div>
            <em class="fas fa-edit me-2" role="button" @click="editObj"></em>
            <em class="far fa-trash-alt" role="button" @click="deleteObj"></em>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center">
        <h5 class="mr-3 cursor-default">Icon: </h5>
          <select class="form-select mr-2 w-1/3">
            <option value="server">Server</option>
            <option value="app">App</option>
          </select>
         <!--  <input
          type="text"
          class="form-control w-1/3 mr-2"
          :placeholder="data.icon"
        /> -->
          <h5 class="mr-3 cursor-default">Name: </h5>
          <input
          type="text"
          class="form-control w-1/3 mr-2"
          :placeholder="data.name"
        />
        <h5 class="mr-3 cursor-default">Link: </h5>
        <input
          type="text"
          class="form-control w-1/3"
          :placeholder="data.link"
        />
        <i class="ml-4 fas fa-check" role="button" @click="updateObj"></i>
      </div>
    </div>
  </div>

  
</template>

<script>

export default {
  name: "DashboardEvent",
  /* ["dataProps", "indexProps"], */
  props: {
    dataProps: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: -1,
          label_id: -1,
          name: "",          
          link: "",
          icon: "",
          created_at: Math.floor(Date.now() / 1000),
        };
      },
      validator: function (value) {
        if (Object.keys(value).includes("id")) {
          return true;
        }
      },
    },
  }, 
  data() {
    return {
      data: this.dataProps,
      toggle: false,
      to: this.dataProps.link
    };
  },
  methods: {
    deleteObj() {
      this.$emit("deleteObj-id", this.dataProps);
    },
    editObj() {
      this.toggle = !this.toggle;
    },
    updateObj() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped></style>
