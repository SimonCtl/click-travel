import service from './service'

export default {
  async loadDestinations({
    commit
  }) {
    try {
      const destinations = await service.getAll();
      commit('setDestinations', destinations);
    } catch (e) {
      console.error(e);
    }
  },
}
