export default {
  getDestinations({
    destinations
  }) {
    return [...destinations].sort((a, b) => a.id - b.id);
  },
  getDreamDestinations({
    destinations
  }) {
    const dreamDestimations = destinations.filter(
      (d) => d.isDreamDestination === true
    );
    return [...dreamDestimations].sort((a, b) => a.id - b.id);
  },
  getDestination({
    destination
  }) {
    return destination;
  },
}
