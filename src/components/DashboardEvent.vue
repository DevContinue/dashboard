<template>
  <div class="card-body">
    <div class="alert text-center">
      <div v-if="!toggle">
        <div class="flex justify-between items-center">
          <em class="m-2">{{ data.icon }}</em>
          <strong>{{ data.name }}</strong>
          {{ data.link }}
          <div>
            <em class="fas fa-edit me-2" role="button" @click="editObj"></em>
            <em class="far fa-trash-alt" role="button" @click="deleteObj"></em>
          </div>
        </div>
      </div>
      <div v-else class="flex items-center">
        <h5 class="mr-3">Name: </h5>
          <input
          type="text"
          class="form-control w-1/3 mr-2"
          :placeholder="data.icon"
        />
          <h5 class="mr-3">Name: </h5>
          <input
          type="text"
          class="form-control w-1/3 mr-2"
          :placeholder="data.name"
        />
        <h5 class="mr-3">Link: </h5>
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
  props: ["dataProps", "indexProps"],
  data() {
    return {
      data: this.dataProps,
      toggle: false,
      link: this.dataProps.link
    };
  },
  methods: {
    deleteObj() {
      this.$emit("deleteObj-index", this.indexProps);
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
