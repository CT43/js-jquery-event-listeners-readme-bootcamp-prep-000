//define functions here
function getIt () {
  $('p').on('click',function() {
    alert('Hey!')
  })
}

function frameIt () {
  $('img').on('load', function (){
    $('img').addClass('tasty')
  })
}

function pressIt () {
  $('#typing').on('keydown', function(e) {
    if (e.which===71) {
      alert('you pressed g')
    }
  })
}

function submitIt () {
  
}

$(document).ready(function() {
  $('#typing').on('keydown', function(e) {
    if (e.which===71) {
      alert('you pressed g')
    }
  })

});
