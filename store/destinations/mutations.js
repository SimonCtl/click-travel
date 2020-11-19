export default {
  setDestinations({
    destinations
  }, value) {
    destinations.splice(0, destinations.length);
    destinations.push(...value);
  },
  setDreamDestinations({
    dreamDestinations
  }, value) {
    dreamDestinations.splice(0, dreamDestinations.length);
    dreamDestinations.push(...value);
  },
  setDestination({
    destination
  }, value) {
    Object.assign(destination, value);
  },
}
