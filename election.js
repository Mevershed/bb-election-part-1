// var data;
$(document).ready(function() {
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(data){
    console.log(data.candidates);
    data.candidates.forEach(function(goober){
      var gooberName = goober.name;
      var gooberVotes = goober.votes;
      var electionResults = $('<li>', {
        html: "Name: "+ gooberName + "<br>" + "Votes: " + gooberVotes
      });
      $('#candidate-list').append(electionResults);
    });
  });
  // Imagination!

});
