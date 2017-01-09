
$(function() {
  $("[name=send]").click(function () {
    $(":input.error").removeClass('error');
    $(".allert").remove();

    var error;
    var btn = $(this);
    var ref = ('[required=required]');
    var msg = $('input, textarea, select');
    var send_btn = ('[name=send]');
    var send_options = ('[name=step_count]');

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
          if(!patternplz.test($(this).val())) {
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
        var form = $(this).closest('form');
        if ($(this).val() == '1') {
          // Открываем скрытые поля
          $('.hidden_form_inputs').slideDown();
          // Добавляем валидацию скрытых полей
          $(form).find('input[required]').each(function() {
            $(this).attr('required', 'required');;
          })
          // Меняем отображение текущего шага
          $('.current_step').addClass('done_step');
          $('.inactive_step').addClass('current_step').removeClass('inactive_step');
          // Активируем кнопку
          setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
          // Инкрементим шаг отправки чтоб перейти к следующему блоку
          $(send_options).val(2);
        } else {
          $.ajax({
            type: 'POST',
            // отправляем данные на нужный адресс
            url: 'http://www.moebel24.de/CheckoutCombo.do',
            data: msg,
            success: function() {
              setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
                // Настройки после удачной отправки
                $('form').trigger("reset");
                 window.location = ""; // url куда редиректить после отправки сюда
               },
               error: function(xhr, str) {
                console.log('erorr' + xhr.responseCode);
                alert('Возникла ошибка: ' + xhr.responseCode);
              }
            });
        }
      });
    }
    return false;
  })
});


// Form trigger

$(".first_form_trigger").click(function() {
  $('#first_step_form').submit();
});

// Checkbox

$('[type=checkbox]').click(function() {
  $(this).toggleClass('input_checked');
  $(this).hasClass( "input_checked" ) ? $(this).val(1) : $(this).val(0)
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