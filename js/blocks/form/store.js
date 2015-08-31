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
        errors: {},
        submitted: false
    },

    handlers: [
        [actions.validateField, function (data) {
            this._set(data.type, data.value);
            this._validate(data.type, data.value);

            this.emitChange();
        }],

        [actions.validateForm, function (data) {
            Object.keys(data).forEach(function (name) {
               this._set(name, data[name]);
               this._validate(name, data[name]);
               this.emitChange();
            }, this);

            var errors = this.get('errors');
            var hasErrors = Object.keys(errors).length > 0;

            if (!hasErrors) {
                this._set('submitted', true);
                this.emitChange();
            }
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
