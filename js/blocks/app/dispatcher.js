modules.define(
    'app-dispatcher',
    ['i-flux'],
    function (provide, FLUX) {

var dispatcher = FLUX.DISPATCHER.create({ debug: false });

provide(dispatcher);

});
