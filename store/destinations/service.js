import axios from 'axios'

export default {
  getAll() {
    return axios
      .get(`http://travel-api.clicksomeone.com/destinations`)
      .then((response) => {
        return response.data;
      })
  },
}
