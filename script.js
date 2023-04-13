$(window).load(function () {
  /*from ww w.  ja v  a 2 s  .  c  om*/ $("#nameInput").keypress(function (e) {
    var txt = String.fromCharCode(e.which);
    if (!txt.match(/[A-Za-z0-9&.]/)) {
      return false;
    }
  });
});

$(window).load(function () {
  /*from ww w.  ja v  a 2 s  .  c  om*/ $("#phone").keypress(function (e) {
    var txt = String.fromCharCode(e.which);
    if (!txt.match(/[A-Za-z0-9&.]/)) {
      return false;
    }
  });
});


$(window).load(function () {
    /*from ww w.  ja v  a 2 s  .  c  om*/ $("#textArea").keypress(function (e) {
      var txt = String.fromCharCode(e.which);
      if (!txt.match(/[A-Za-z0-9&.]/)) {
        return false;
      }
    });
  });


