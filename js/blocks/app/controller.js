modules.define(
    'app-controller',
    ['i-flux', 'form-actions', 'form-store'],
    function (provide, FLUX, actions, store) {

FLUX.CONTROLLER.decl('app', {
    stores: [
        [store, function (store) {
            if (store.get('submitted')) {
                this.findBlockInside('video').play();
            };
        }]
    ]
});

provide();

});
