$(document).ready(function(){

$('.modal').modal();
$('.sidenav').sidenav();

$('.slider').slider({fullWidth: true,

   
  });
  $('.parallax').parallax();


  $('.myreviews').carousel({
      
    numvisiable:3,
    shift:30,
    padding:25,

   
  });
})


function togglemodal(){

var instance =M.Modal.getInstance($('#modal3'));
instance.open();


}
