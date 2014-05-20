// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

      // Only stub undefined methods.
      if (!console[method]) {
        console[method] = noop;
      }
    }
  }());

// Place any jQuery/helper plugins in here.
(function() {
  var fontSize = $('body').css('font-size');
  var plusFontSize = parseFloat(fontSize) * 1.1;
  var minusFontSize = parseFloat(fontSize) * 0.9;
  $('#fontIncrease').on('click', function() {
    $('body').css('font-size', plusFontSize + "px");
  });
  $('#fontReset').on('click', function() {
    $('body').css('font-size', fontSize);
  });
  $('#fontDecrease').on('click', function() {
    $('body').css('font-size', minusFontSize + "px");
  });
});
