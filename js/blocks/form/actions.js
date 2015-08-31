modules.define(
    'form-actions',
    ['i-flux', 'app-dispatcher'],
    function (provide, FLUX, dispatcher) {

var actions = FLUX.ACTIONS.create({
    dispatcher: dispatcher,

    actions: {
        validateField: ['type', 'value']
    }
});;

provide(actions);

});
