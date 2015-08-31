modules.define(
    'input-view',
    ['i-bem__dom', 'input'],
    function (provide, BEMDOM) {

BEMDOM.decl('input', {
    onSetMod: {
        focused: {
            '': function () {
                this.emit('change');
            }
        }
    }
});

provide();

});
