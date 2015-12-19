 $(document).ready(function() {

      // Hide both <div> by default
      $('#error').hide();

      // Check on keydown
      $('input').keyup(function (e) {
    		if (e.keyCode == 13) {
          var value = $(this).val();
          $('#error').hide();
          if (value == 'map') { // If input value is div1
            $('#div1').load("https://unilogue.github.io/commands #div1");
          } else if (value == 'derive') { // If input value is div2
            $('#div2').load("https://unilogue.github.io/commands #div2");
          } else if (value == 'glossary') { // If input value is div3
            $('#div3').load("https://unilogue.github.io/commands #div3");
          } else if (value != '') { // If input value is wrong
            $('#error').show();
          }
        }
      });
    });

term.echo ('<div id="map"></div>', {raw:true});    $('#map').load("https://unilogue.github.io/commands #div1");