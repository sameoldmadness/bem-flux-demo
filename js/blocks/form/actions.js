modules.define(
    'form-actions',
    ['i-flux', 'app-dispatcher'],
    function (provide, FLUX, dispatcher) {

var actions = FLUX.ACTIONS.create({
    dispatcher: dispatcher,

    actions: {
        validateField: ['type', 'value'],
        validateForm: ['name', 'email', 'password']
    }
});;

provide(actions);

});
