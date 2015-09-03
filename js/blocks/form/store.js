modules.define(
  'form-store',
  ['i-flux', 'app-dispatcher', 'form-actions'],
  function (provide, FLUX, dispatcher, actions) {

var store = FLUX.STORE.create({
  dispatcher: dispatcher,

  state: {
    errors: {}
  },

  handlers: [
    [actions.validateField, function (data) {
      this._validate(data.type, data.value);

      this.emitChange();
    }]
  ]
});

store._hasErrors = function () {
  var errors = store.get('errors');
  var count = Object.keys(errors).length;

  return count > 0;
};

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
