const axios = require('axios')
const { response } = require('express')


    axios.get('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=3&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=AIzaSyAaKt6KoyLEs-1H1kKEFoA0NJIYxp9sjwI')
    .then(function (response) {
       console.log(response);
    });
