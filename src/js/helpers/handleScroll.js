/**
 * Set or remove aos-animate class
 * @param {node} el         element
 * @param {int}  top        scrolled distance
 * @param {void} once
 */
const setState = function (el, top, once, onAnimate) {
  const attrOnce = el.node.getAttribute('data-aos-once');

  if (top > el.position) {
    if (el.node.className.indexOf('aos-animate') === -1) {
      el.node.classList.add('aos-animate');
      onAnimate(el.node.getAttribute('data-aos'));
    }
  } else if (typeof attrOnce !== 'undefined') {
    if (attrOnce === 'false' || (!once && attrOnce !== 'true')) {
      el.node.classList.remove('aos-animate');
    }
  }
};


/**
 * Scroll logic - add or remove 'aos-animate' class on scroll
 *
 * @param  {array} $elements         array of elements nodes
 * @param  {bool} once               plugin option
 * @return {void}
 */
const handleScroll = function ($elements, once, container, onAnimate) {
  let scrollTop, scrollHeight;

  if (container === window) {
    scrollTop = window.pageYOffset;
    scrollHeight = window.innerHeight;
  } else {
    scrollTop = container.scrollTop;
    scrollHeight = container.offsetHeight;
  }

  /**
   * Check all registered elements positions
   * and animate them on scroll
   */
  $elements.forEach((el, i) => {
    setState(el, scrollHeight + scrollTop, once, onAnimate);
  });
};

export default handleScroll;
