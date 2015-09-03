modules.define(
  'app-template',
  ['bh', 'form-template',
   'video-template', 'video-view'],
  function (provide, bh) {

bh.match('app', function (ctx) {
  ctx.js(true);
  ctx.content([
    { block: 'video' },
    { block: 'form' }
  ]);
});

provide();

});
