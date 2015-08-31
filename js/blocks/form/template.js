modules.define(
    'form-template',
    ['bh', 'input-view'],
    function (provide, bh) {

bh.match('form', function (ctx) {
    ctx.js(true);
    ctx.content([
        {
            block: 'control-row',
            content: [
                {
                    block: 'input',
                    mods: {
                        type: 'name',
                        theme: 'islands',
                        size: 'm',
                        width: 'available'
                    },
                    placeholder: 'Имя и фамилия'
                },
                {
                    block: 'validation',
                    mods: { for: 'name' }
                }
            ]
        },
        {
            block: 'control-row',
            content: [
                {
                    block: 'input',
                    mods: {
                        type: 'email',
                        theme: 'islands',
                        size: 'm',
                        width: 'available'
                    },
                    placeholder: 'Адрес электронной почты'
                },
                {
                    block: 'validation',
                    mods: { for: 'email' }
                }
            ]
        },
        {
            block: 'control-group',
            content: [
                {
                    block: 'control-row',
                    content: [
                        {
                            block: 'input',
                            mods: {
                                type: 'password',
                                width: 'available',
                                theme: 'islands',
                                size: 'm'
                            },
                            placeholder: 'Пароль',
                        },
                        {
                            block: 'validation',
                            mods: { for: 'password' }
                        }
                    ]
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        view: 'action',
                        size: 'm'
                    },
                    text: 'Зарегистрироваться'
                }
            ]
        }
    ]);
});

provide();

});
