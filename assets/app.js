// 水水的博客：只做最小交互，不引入框架。
(() => {
  const top = document.querySelector('.top');
  if (!top) return;

  // 滚动时分隔线加深，给长文一个轻微的空间感。
  const onScroll = () => {
    top.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();
