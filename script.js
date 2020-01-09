var artist = prompt("artist?")
var buttonClick = $("#reset");
var makeDiv = $("<div>");
var makeH2 = $("<h2>");
var makeP = $("<p>")
var makeTags = $("<h1>")
var containerEl = $("#container");
var makeBioLine = $("<h1>")
var makeYearPublishedLine = $("<h1>")
var makeYearPublished = $("<p>")
var makeBtn = $("<button>")
var btnClick = $("#artistBtn")
var makeBigDiv = $("#albumContainer")


//This function puts the artist info on the page; 3rd tier call
buttonClick.click(function () {
  var getArtistInfo = function (data) {
    makeH2.text(JSON.parse(JSON.stringify(data.artist.name)));
    makeDiv.append(makeH2);
    makeTags.text(" TOP TAGS");
    makeBioLine.text("Short Bio")
    makeP.text(JSON.parse(JSON.stringify(data.artist.bio.summary)));
    makeYearPublishedLine.text("Year Published");
    makeYearPublished.text(JSON.parse(JSON.stringify(data.artist.bio.published)));
    makeDiv.append(makeTags);
    for (i = 0; i < 5; i++) {
      var makeTag = $("<p>")
      makeTag.text(JSON.parse(JSON.stringify(data.artist.tags.tag[i].name)));
      makeDiv.append(makeTag);
    }
    makeDiv.append(makeBioLine);
    makeDiv.append(makeP);
    makeDiv.append(makeYearPublishedLine);
    makeDiv.append(makeYearPublished);
    makeBtn.text("Click for Top Albums")
    makeBtn.attr("id", "albumBtn")
    makeDiv.append(makeBtn);
    containerEl.append(makeDiv);
  }
  function searchLastFM(artist) {
    var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      getArtistInfo(response);
    });
  };
  searchLastFM(artist);
});


// takes an artist
// looks up their list of albums
// adds that list of albums with their songs to the page



<<<<<<< HEAD
btnClick.click(function () {
  console.log("button is working")
  var getAlbumInfo = function (albums) {
=======
  btnClick.click(function () {
    console.log(albums);
    makeBigDiv.attr("class", "albumsContainer")
    containerEl.append(makeBigDiv);
<<<<<<< HEAD
    console.log("add album container")
    //step 1. make the album container
    var makePic = $("<img>")
    for (i = 0; i < 3; i++) {
      var makePic = $("<img>")
      var makeDiv = $("<div>")

=======
    var makePic = $("<img>")
>>>>>>> origin
    for (i = 0; i < 3; i++) {
      let makePic = $("<img>")
      let makeDiv = $("<div>")
>>>>>>> d9d0fddc9a0fcafc630e6474185ce4a917077fc2
      makeBigDiv.append(makeDiv)
<<<<<<< HEAD
      console.log("div is getting added to albumcontainer")
=======
      console.log("adds div" + i)
>>>>>>> origin
      makePic.attr("src", JSON.parse(JSON.stringify(albums.topalbums.album[i].image[2]["#text"])))
      makeDiv.attr("class", "div" + i)
      console.log("Creating Div:" + i)
      makeDiv.append(makePic)
<<<<<<< HEAD
      console.log("add pic" + i + " to div" + i)
      function searchLastFM3(artist) {
        console.log("i is currently at " + i + "inside the searchLast Fm3 function")
=======
      console.log("Creating Pic:" + i)
      var searchLastFM3 = function (artist) {
>>>>>>> d9d0fddc9a0fcafc630e6474185ce4a917077fc2
        var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&artist=" + artist + "&album=" + albums.topalbums.album[i].name + "&format=json"
        console.log("i is at " + i + "in the searchLastFM function")
        $.ajax({
          url: queryURL3,
          method: "GET"
        }).then(function (response) {
<<<<<<< HEAD
          console.log("i is currently at " + i + "inside the AJAX function")
          var makeTrackName = $("<p>")
          makeTrackName.text(JSON.stringify(response.album.tracks.track[0].name))
          console.log("k loop is producing songs for the " + i + " album");
          console.log(response)
          makeDiv.append(makeTrackName)
=======
          console.log("i is at " + i + "in the AJAX function")
          for (k = 0; k < 5; k++) {
            console.log(response)
            var makeTrackName = $("<p>")
            makeTrackName.text(JSON.parse(JSON.stringify(response.album.tracks.track[k].name)))
            console.log("song are produced from the " + i + "album");
            makeDiv.append(makeTrackName)
          }
>>>>>>> d9d0fddc9a0fcafc630e6474185ce4a917077fc2
        });
        console.log("is at " + i + " after the AJAX function")
      };
      searchLastFM3(artist)
    }
<<<<<<< HEAD
  }
  function searchLastFM2(artist) {
    var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"
    console.log("functionFM2 is called")
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function (response) {
      getAlbumInfo(response);
      console.log(response)
    });
  
  };
  searchLastFM2(artist)
});
=======
  });
  ///add pic1 to div1
  ///add tracks to div1
  ///add div 1 to bigdiv



};
var searchLastFM = function (artist) {
  var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    getArtistInfo(response);
    //Calling the function inside of this function; 2nd tier call
    console.log(response)
  });

};
var searchLastFM2 = function (artist) {
  var queryURL2 = "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + artist + "&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&format=json"

  $.ajax({
    url: queryURL2,
    method: "GET"
  }).then(function (response) {
    getAlbumInfo(response);
  });

};
var searchLastFM3 = function (artist) {
  var queryURL3 = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=2adfbf73b317cd43f7ed6f612c4c8e9e&artist=" + artist + "&album=Indicud&format=json"

  $.ajax({
    url: queryURL3,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  });

};
searchLastFM(artist);
//calling the Ajax function; 1st tier call
searchLastFM2(artist);

>>>>>>> origin
