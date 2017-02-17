// var data;
$(document).ready(function() {
  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'
  }).done(function(responseData){



    for (var i = 0; i < responseData.candidates.length; i = i+1){
      var candidateInfo = $('<li>')
      var candidate = responseData.candidates[i];
      console.log(candidate.name);
      console.log(candidate.votes);

    }
    // attatch names and votes
    // var informationName = 'Name: ' + (data.name);
    // var informationVotes = 'Votes: ' + (data.votes);
    //
    // var namesAndVotes =
  });
  // Imagination!

});
