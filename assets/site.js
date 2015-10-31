
(function() {

  var doc = document.documentElement;
  var body = document.body;
  var header = document.getElementById('header');
  var main = document.getElementById('main');

  window.addEventListener('scroll', updateToc);
  window.addEventListener('resize', updateToc);

  function updateToc() {
    var top = doc && doc.scrollTop || body.scrollTop;
    var headerHeight = header.offsetHeight;
    if (top > headerHeight) {
      main.className = 'fixed';
    } else {
      main.className = '';
    }
  }
})();
