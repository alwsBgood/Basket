
$(function() {
  $("[name=send]").click(function () {
    $(":input.error").removeClass('error');
    $(".allert").remove();

    var error;
    var btn = $(this);
    var ref = $('[required=required]');
    var msg = $('input, textarea, select');
    var send_btn = $('[name=send]');
    var send_options = $('[name=step_count]');
    var form_action = $('[name=action]').val();

    var errorfield_text = $('[name=errorfield]').val();
    var patternmail_text = $('[name=patternmail]').val();
    var patterntel_text = $('[name=patterntel]').val();
    var patternplz_text = $('[name=patternplz]').val();

    $(ref).each(function() {
      if ($(this).val() == '') {
        var errorfield = $(this);
        $(this).addClass('error').parent('.field').append('<div class="allert"><span>'+ errorfield_text + '</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
        error = 1;
        $(":input.error:first").focus();
        return;
      } else {
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if ($(this).attr("type") == 'email') {
          if(!pattern.test($(this).val())) {
            $("[name=email]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>'+ patternmail_text +'</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
        var patterntel = /^()[- +()0-9]{9,18}/i;
        if ( $(this).attr("type") == 'tel') {
          if(!patterntel.test($(this).val())) {
            $("[name=phone]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>'+ patterntel_text + '</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
            error = 1;
            $(":input.error:first").focus();
          }
        }
        var patternplz = /^()[0-9]{5}/i;
        if ( $(this).attr("name") == 'plz') {
          if(!patternplz.test($(this).val())) {
            $("[name=plz]").val('');
            $(this).addClass('error').parent('.field').append('<div class="allert"><span>' + patternplz_text + '</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286.1 286.1"><path d="M143 0C64 0 0 64 0 143c0 79 64 143 143 143 79 0 143-64 143-143C286.1 64 222 0 143 0zM143 259.2c-64.2 0-116.2-52-116.2-116.2S78.8 26.8 143 26.8s116.2 52 116.2 116.2S207.2 259.2 143 259.2zM143 62.7c-10.2 0-18 5.3-18 14v79.2c0 8.6 7.8 14 18 14 10 0 18-5.6 18-14V76.7C161 68.3 153 62.7 143 62.7zM143 187.7c-9.8 0-17.9 8-17.9 17.9 0 9.8 8 17.8 17.9 17.8s17.8-8 17.8-17.8C160.9 195.7 152.9 187.7 143 187.7z" fill="#E2574C"/></svg></div>');
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
          // Open hidden fields
          $('.hidden_form_inputs').slideDown();
          // Adding validation of hidden fields
          $(form).find('input[required]').each(function() {
            $(this).attr('required', 'required');;
          })
          // Change current step count on page
          $('.current_step').addClass('done_step');
          $('.inactive_step').addClass('current_step').removeClass('inactive_step');
          // activate button
          setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
          // Change send options to get to the next step
          $(send_options).val(2);
        } else {
          $(this).attr('disabled', true);
          form.attr('action', form_action);
          form.submit();

          // $.ajax({
          //   type: 'POST',
          //   // Send data
          //   url: 'http://www.moebel24.de/CheckoutCombo.do',
          //   data: msg,
          //   success: function() {
          //     setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
          //       // Settings after sending
          //       $('form').trigger("reset");
          //        window.location = ""; // redirect url enter here.
          //      },
          //      error: function(xhr, str) {
          //       console.log('erorr' + xhr.responseCode);
          //       alert('Возникла ошибка: ' + xhr.responseCode);
          //     }
          //   });
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

// Select
jQuery(document).ready(function($) {
  var defaultSelectValue = $("select").val();
  $("option[value=" + defaultSelectValue + "]").attr('selected', true);
  $("select").change(function(){
      var selectValue = $(this).children(":selected").text();
      $(this).val(selectValue);
  });
});

// Checkbox
jQuery(document).ready(function($) {
  if( $('[type=checkbox]').val() == 1 ){
    $('[type=checkbox]').prop('checked', true);
    $('[type=checkbox]').addClass('input_checked');
  } else {
    $('[type=checkbox]').prop('checked', false);
  }

  $('[type=checkbox]').click(function() {
    $(this).toggleClass('input_checked');
    $(this).hasClass( "input_checked" ) ? $(this).val(1) : $(this).val(0);
  });
});

// Radio button
jQuery(document).ready(function($) {
  if( $('[name=sex_hidden]').val() == 'Frau' ){
    $('.frau_radio').prop('checked', true);
  } else {
    $('.herr_radio').prop('checked', true);
  }

  $('.frau_radio').click(function() {
    $('[name=sex_hidden]').val("Frau");
  })
  $('.herr_radio').click(function() {
    $('[name=sex_hidden]').val("Herr");
  })
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