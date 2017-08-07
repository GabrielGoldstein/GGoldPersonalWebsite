$(document)
  .ready(function() {

    var
      changeSides = function() {
        $('.ui.shape')
          .eq(0)
            .shape('flip over')
            .end()
          .eq(1)
            .shape('flip over')
            .end()
          .eq(2)
            .shape('flip back')
            .end()
          .eq(3)
            .shape('flip back')
            .end()
        ;
      },
      validationRules = {
        firstName: {
          identifier  : 'email',
          rules: [
            {
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },
            {
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }
          ]
        }
      }
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    $('.ui.form')
      .form(validationRules, {
        on: 'blur'
      })
    ;

    $('.masthead .information')
      .transition('scale in', 1000)
    ;

    setInterval(changeSides, 3000);

    $('.copy').popup({on: 'click'});

    
$('.test').popup({
      inline    : true,
      hoverable : true,
      position  : 'bottom left',
      delay : {
        show  : 300,
        hide  : 800
      },
      
    })
    ;


    ///////
   



$('.example .custom.button')
  .popup({
    popup : $('.custom.popup'),
    on    : 'click'
  })
;

$('.test')
.popup({
  on : 'click'
});



  })
;

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();  
}


function toggleImg(element) {
  if ($(element).text() == "1")
    $("#headerImg").attr('src','images/tenor.gif');
  else if ($(element).text() == '2')
    $("#headerImg").attr('src','images/spice&wolf.png');
  else if ($(element).text() == '3')
    $("#headerImg").attr('src','images/waveingLikeUJustDontCare.gif');
  else if ($(element).text() == '4')
    $("#headerImg").attr('src','images/animeDance2.gif');
  else if ($(element).text() == '5')
    $("#headerImg").attr('src','images/animeDance3.gif');
}