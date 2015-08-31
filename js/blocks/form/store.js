modules.define(
    'form-store',
    ['i-flux', 'app-dispatcher', 'form-actions'],
    function (provide, FLUX, dispatcher, actions) {

var store = FLUX.STORE.create({
    dispatcher: dispatcher,

    state: {
        name: '',
        email: '',
        password: '',
        errors: {}
    },

    handlers: [
        [actions.validateField, function (data) {
            this._set(data.type, data.value);
            this._validate(data.type, data.value);

            this.emitChange();
        }]
    ]
});

store._validate = function (type, value) {
    var errors = store.get('errors');
    var messages = {
        name: 'Представьтесь, пожалуйста',
        email: 'Мы пришлём вам письмо',
        password: 'YOU SHALL NOT PASS'
    };

    if (value === '') {
        errors[type] = messages[type];
    } else {
        delete errors[type];
    }
};

provide(store);

});
