modules.define(
    'form-controller',
    ['i-flux', 'form-actions', 'form-store'],
    function (provide, FLUX, actions, store) {

FLUX.CONTROLLER.decl('form', {
    stores: [
        [store, function (store) {
            var errors = store.get('errors');

            this._updateValidation(errors);
        }]
    ],

    views: {
        input: function (event) {
            var type = event.target.getMod('type');
            var value = this._getInput(type).getVal();

            actions.validateField(type, value);
        }
    },

    _updateValidation: function (errors) {
        var errors = store.get('errors');

        this._clearValidation();

        Object.keys(errors).forEach(function (error) {
            this._getValidation(error).domElem.text(errors[error]);
        }, this);
    },

    _getInput: function (name) {
        return this.findBlockInside({ block: 'input', modName: 'type', modVal: name });
    },

    _getValidation: function (name) {
        return this.findBlockInside({ block: 'validation', modName: 'for', modVal: name });
    },

    _clearValidation: function () {
        this.findBlocksInside('validation').forEach(function (validation) {
            validation.domElem.text('');
        });
    }
});

provide();

});
