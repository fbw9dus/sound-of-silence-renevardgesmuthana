// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import music from '../assets/music'

import 'bootstrap/dist/css/bootstrap.min.css';

function myFunction() {
  for (var i = 0; i < music.length; i++) {

    var d = music[i].releaseDate
    var day = new Date(d)
    var tag = day.getDate()
    var mon = day.getMonth()
    var jahr = day.getFullYear()

    var distance = music[i].trackTimeMillis
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (seconds < 10) {
      seconds = "0" + seconds
    }








    var song = `
 


   <tr class="myUL">
     <th scope="row">${i+1}</th>
     <td><img class="img-thumbnail" src="${music[i].artworkUrl30}"></td>
     <td>${music[i].trackName} </td>
     <td class="artist"><a href="">${music[i].artistName}</a></td>
     <td>${tag + "." + mon + "." + jahr }</td>
     <td>${minutes + ":" + seconds}</td>
     <td>${music[i].trackPrice} ${music[i].currency}</td>
   </tr>
 
 `


    document.querySelector(".mek").insertAdjacentHTML("beforeend", song);
  }

}

myFunction()