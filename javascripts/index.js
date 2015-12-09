// Hide both <div> by default
$('#div1').hide();
$('#div2').hide();
$('#div3').hide();
$('#error').hide();

// Check on keydown
$('input').keydown(function() {
    if ($('input').val() == 'map') {  // If input value is div1
       $('#div1').slideDown();
       $('#div2').hide();
       $('#div3').hide();
       $('#error').hide();
  } else if ($('input').val() == 'derive') {  // If input value is div2
       $('#div1').hide();
       $('#div2').slideDown();
       $('#div3').hide();
       $('#error').hide();
  } else if ($('input').val() == 'glossary') {  // If input value is div3
       $('#div1').hide();
       $('#div2').hide();
       $('#div3').slideDown();
       $('#error').hide();
  } else if ($('input').val() == 'map') {  // If input value is wrong
       $('#div1').hide();
       $('#div2').hide();
       $('#div3').hide();
       $('#error').slideDown();
  } else {
       $('#div1').hide();
       $('#div2').hide();
       $('#div3').hide();
       $('#error').hide();
  }
});
