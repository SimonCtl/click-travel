export default {
  getTickets({
    tickets
  }) {
    return [...tickets].sort((a, b) => a.id - b.id);
  },
  getTicket({
    ticket
  }) {
    return ticket;
  },
}
