var ibepjs = {

  opener: {
    options: {
      width:  1024,
      height: 600,
      name: "ibepOED"
    },
    init: function(width, height, href, name) {
      var href   = href || window.location.href
        , height = height || this.options.height
        , width  = width || this.options.width
        , name   = name || this.options.name
        , specs  = "width=" + width + ",height=" + height;

      specs += ",menubar=0,scrollbars=0,status=0,titlebar=0";
      window.open(href, name, specs);
    }
  }

}


$(function() {
  // Botão abre popup com opções abaixo
  $('#menu').on('click', '> a', function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    ibepjs.opener.init(1024,900,href);
  })
  // $('button').on('click', function() {
  //   var nome = $(this).attr('id');
  //   ibepjs.opener.init(1024,900,nome + '.html',nome);
  // });
});
