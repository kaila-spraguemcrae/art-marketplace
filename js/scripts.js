$(document).ready(function() {
  $("form#form").submit(function(event){
    event.preventDefault();

    const painting = $("input:radio[name=painting]:checked").val();

    const frame = $("#frame").val();
  });
})