window.addEventListener('load', () => {
  document.querySelector('.body').classList.add('loaded');
});


const pageSections = document.querySelectorAll('.page-section')

var handlers = [];

pageSections.forEach(element => {
  handlers[element] = () => onBecomeVisible(pageSections[element], handlerEffect[element]);
});

handlers.forEach(element => {
  if (window.addEventListener) {
    addEventListener('DOMContentLoaded', handlers[element], false);
    addEventListener('load', handlers[element], false);
    addEventListener('scroll', handlers[element], false);
    addEventListener('resize', handlers[element], false);
  } else if (window.attachEvent)  {
    attachEvent('onDOMContentLoaded', handlers[element]); // Internet Explorer 9+ :(
    attachEvent('onload', handlers[element]);
    attachEvent('onscroll', handlers[element]);
    attachEvent('onresize', handlers[element]);
  }
});

//var handler = onBecomeVisible(pageSections[2], handlerEffect(2));

function handlerEffect (index) {
  console.log(index);
};

/*
if (window.addEventListener) {
  addEventListener('DOMContentLoaded', handler, false);
  addEventListener('load', handler, false);
  addEventListener('scroll', handler, false);
  addEventListener('resize', handler, false);
} else if (window.attachEvent)  {
  attachEvent('onDOMContentLoaded', handler); // Internet Explorer 9+ :(
  attachEvent('onload', handler);
  attachEvent('onscroll', handler);
  attachEvent('onresize', handler);
}*/

function isElementEntirelyInViewport (el) {
  let rect = el.getBoundingClientRect();
  return rect.top > 0 && rect.bottom <= window.innerHeight;
}

function onBecomeVisible(el, callback) {
  return function () {
    var visible = isElementEntirelyInViewport(el);
    if (visible) {
      if (typeof callback == 'function') {
          callback();
      }
    }
  }
}

function onVisibilityChange(el, callback) {
  var old_visible;
  return function () {
      var visible = isElementEntirelyInViewport(el);
      if (visible != old_visible) {
          old_visible = visible;
          if (typeof callback == 'function') {
              callback();
          }
      }
  }
}
