import service from './service'

export default {
  async loadTicketsByDestination({
    commit
  }, destinationCode) {
    try {
      const tickets = await service.getAllByDestination(destinationCode);
      commit('setTickets', tickets);
    } catch (e) {
        console.error(e);
    }
  },
}
