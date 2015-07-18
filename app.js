$('.btn-register').on('click', function () {
  var targetOffset = $('section.registro').offset().top
  animatedScrollTo(document.body, targetOffset, 600)
})
