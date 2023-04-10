import fetch from 'node-fetch';

const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=25&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=AIzaSyAaKt6KoyLEs-1H1kKEFoA0NJIYxp9sjwI HTTP/1.1');
const data = await response.json();

console.log(data);

//GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cid&maxResults=25&playlistId=PLvjQ7W5Y_v68h52mUW0NErYBKt0Nn2TDl&key=[YOUR_API_KEY] HTTP/1.1

//Authorization: Bearer [YOUR_ACCESS_TOKEN]
//Accept: application/json
