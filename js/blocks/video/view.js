modules.define(
  'video-view',
  ['i-bem__dom'],
  function (provide, BEMDOM) {

BEMDOM.decl('video', {
  play: function () {
    this.domElem[0].play();
  }
});

provide();

});
