modules.define(
  'video-template',
  ['bh'],
  function (provide, bh) {

bh.match('video', function (ctx) {
  ctx.tag('video');
  ctx.attr('src', 'media/reindeer.mp4');
});

provide();

});
