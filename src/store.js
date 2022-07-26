import { data } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  data,
});

const getters = {
};

const mutations = {
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
