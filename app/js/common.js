$(function() {
  $("[name=send]").click(function () {
    $(":input.error").removeClass('error');
    $(".allert").remove();

    var error;
    var btn = $(this);
    var ref = ('[required]');
    var msg = ('input, textarea, select');
    var send_btn = ('[name=send]');
    var send_options = ('[name=campaign_token]');

    // Cose button isn't inside <form> I had to change vars definition
    // original is commented

    // var error;
    // var btn = $(this);
    // var ref = btn.closest('form').find('[required]');
    // var msg = btn.closest('form').find('input, textarea, select');
    // var send_btn = btn.closest('form').find('[name=send]');
    // var send_options = btn.closest('form').find('[name=campaign_token]');



    $(ref).each(function() {
      if ($(this).val() == '') {
        var errorfield = $(this);
        $(this).addClass('error').parent('.field').append('<div class="allert"><span>Füllen Sie das Feld</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
        error = 1;
        $(":input.error:first").focus();
        return;
      } else {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if ($(this).attr("type") == 'email') {
          if(!pattern.test($(this).val())) {
            $("[name=email]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Bitte geben Sie eine gültige E-Mail</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
        var patterntel = /^()[- +()0-9]{9,18}/i;
        if ( $(this).attr("type") == 'tel') {
          if(!patterntel.test($(this).val())) {
            $("[name=phone]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Bitte geben Sie eine gültige Telefonnummer</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
        var patternplz = /^()[0-9]{5}/i;
        if ( $(this).attr("name") == 'plz') {
          if(!patterntel.test($(this).val())) {
            $("[name=plz]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>Geben Sie fünf Zahlen PLZ</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
      }
    });
    if(!(error==1)) {
      $(send_btn).each(function() {
        $(this).attr('disabled', true);
      });
      $(send_options).each(function() {

        // $.ajax({
        //   type: 'POST',
        //   url: 'mail.php',
        //   data: msg,
        //   success: function() {
        //     $('form').trigger("reset");
        //     setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
        //       // Настройки после удачной отправки
        //       $('form').trigger("reset");
        //     },
        //     error: function(xhr, str) {
        //       alert('Возникла ошибка: ' + xhr.responseCode);
        //     }
        //   });

      });
    }
    return false;
  })
});


// Form trigger

$(".first_form_trigger").click(function() {
  $('#first_step_form').submit();
});

// Stars
switch($('.stars').data('stars')) {
  case  5:
  $('.stars').css('width', '71px')
  break;
  case  4:
  $('.stars').css('width', '57px')
  break;
  case 3:
  $('.stars').css('width', '43px')
  break;
  case 2:
  $('.stars').css('width', '43px')
  break;
  case 1:
  $('.stars').css('width', '43px')
  break;
}

// Perfect Pxel

$('body').each(function() {
    var body = $(this);
    var img_url = $(this).data('img');
    var img = new Image();
    img.src = img_url;
    img.onload = function(){
        var ppbox = '<div id="pp" style="background: url('+img_url+') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000000;opacity:0.5;height:'+img.height+'px"></div>';
        var ppbtn = '<button onclick="myOff()" id="ppbtn" style="position:fixed;top:0;right:0;z-index:1000001">ON</button>'
        body.append(ppbox);
        body.append(ppbtn);
    };
});
function myOff() {
    var ppbtntext = $('#ppbtn').text();
    if (ppbtntext == 'ON') {
        $('#ppbtn').text('OFF');
        $('#pp').css('display', 'none');
    } else {
        $('#ppbtn').text('ON');
        $('#pp')        .css({
          ' z-index' : '1000000',
          display: 'block'
        });

    }
}

$('html').keydown(function(){
  var ppbtntext = $('#ppbtn').text();
  if (event.keyCode == 81) {
    if (ppbtntext == 'ON') {
        $('#ppbtn').text('OFF');
        $('#pp').css('display', 'none');
    } else {
        $('#ppbtn').text('ON');
        $('#pp')        .css({
          ' z-index' : '1000000',
          display: 'block'
        });
    }
  }
});
