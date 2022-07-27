import { dashboardData } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  dashboardData,
});

const getters = {
};

const mutations = {
  editEvent(eventId) {
    // Alle edit-Attribute auf false setzen, damit immer nur ein Event bearbeitet werden kann
    state.dashboardData.map((event) => (event.edit = false));

    // Setze das entsprechende edit-Attribut auf true
    const event = state.dashboardData.find((obj) => obj.id === eventId);
    event.edit = true;
  },
  updateEvent(eventId, oldEventName, newEvent) {
    newEvent.name = newEvent.name !== "" ? newEvent.name : oldEventName;
    const event = state.dashboardData.find((obj) => obj.id === eventId);
    event.name = newEvent.name;
    event.edit = false;
  },
  addObj(eventDO) {
    state.dashboardData.push({
        name: eventDO.name,
        link: eventDO.link,
        icon: eventDO.icon,
    });
  }
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
