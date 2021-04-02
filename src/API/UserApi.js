import axios from "axios";

const URL = "https://randomuser.me/api/?inc=gender,name,cell,email";


// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
    getRandomEmployees: function() {
        return axios.get(URL);
    },
};

/*$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });*/
