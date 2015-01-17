(function(){
  'use strict';

  $(document).ready(function(){
    $('#hide').click(hide);
    $('#show').click(show);
    $('form').submit(addRule);
  });

  function addRule(e){
    var data = $('form').serialize(),
    type = $('form').attr('method'),
    url  = $('form').attr('action');

    $('input, textarea').val('');

    $.ajax({url:url, type:type, data:data, dataType:'html', success:function(html){
      var $rule = $(html);
      $rule.css('display', 'none');
      $('#rule').prepend($rule);
      $rule.fadeIn(2000);
    }});

    e.preventDefault();
  }

  function hide(){
    $('form').fadeOut();
  }

  function show(){
    $('form').fadeIn();
  }

})();
