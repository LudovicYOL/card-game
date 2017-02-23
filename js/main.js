
$(document).ready(function(){
  console.log("test");

  var gameAreaMap = {};
  var cardMap = {};

  // DRAG DROP MANAGEMENT
  var div;
  $("#myCards .card").on("dragstart", function(event){
    div = event.currentTarget.attributes.id.nodeValue;
  });

  $("#gameArea .cardArea").on("dragover", function() {
    event.preventDefault();
  });

  $("#gameArea .cardArea").on("drop", function(event){
    event.preventDefault();

    var cardId = div;
    var card = $("#"+ cardId);
    var cardAreaId = event.currentTarget.attributes.id.nodeValue;
    var cardArea = $("#"+ cardAreaId);
    if(gameAreaMap[cardAreaId]){
      console.log("ALREADY OCCUPIED !");
    }else{
      gameAreaMap[cardMap[cardId]] = false;

      cardMap[cardId] = cardAreaId;
      gameAreaMap[cardAreaId] = true;

      card.appendTo("#gameArea");

      var left = cardArea.position().left;
      var top = cardArea.position().top;
      card.css("top", top);
      card.css("left", left);
    }

  });
});
