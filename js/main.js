modules.require(
    ['jquery', 'i-bem__dom', 'bh', 'app-template', 'app-controller', 'form-controller'],
    function ($, BEMDOM, bh) {

BEMDOM.append('body', bh.apply({ block: 'app' }));

});
