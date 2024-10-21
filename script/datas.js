

 
const datas = {
    docs: [
        {
            title: 'How to delete an account',
            answer: [
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/1/1.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/1/2.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                },
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/1/3.jpg'},
                            className : "photo-mid"
                        }
                    ],
                    className : 'cont',
                    classNameCont : 'center' 
                },
                // {   
                //     conent : [
                //         {
                //             teg : 'p',
                //             className : "text",
                //             text : "Hello user name ssada dsad sad sad sa d sad dsag sa gdsa fsa df saf sa fdsa fds "
                //         }
                //     ],
                //     className : 'cont',
                //     classNameCont : 'center mb25' 
                // }
            ],
            type: 'account',
            _id : '1'

        },
        {
            title: 'What to do if I forgot my password',
            answer: [
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/2/1.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/2/2.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                },
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/2/3.jpg'},
                            className : "photo-mid"
                        }
                    ],
                    className : 'cont',
                    classNameCont : 'center' 
                }
            ],
            type: 'account',
            _id : '2'
        },
        {
            title: 'How to change the password',
            answer: [
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/3/1.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/3/2.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                },
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/3/3.jpg'},
                            className : "photo-mid"
                        }
                    ],
                    className : 'cont',
                    classNameCont : 'center' 
                }
            ],
            type: 'account',
            _id : '3'
        },
        {
            title: 'Can I change my email',
            answer: [
                  {   
                    conent : [
                        {
                            teg : 'p',
                            className : "text",
                            text : "At the moment, it is not possible to change the account email. This feature may become available in future updates."
                        }
                    ],
                    className : 'cont',
                    classNameCont : 'center mb25' 
                }
            ],
            type: 'account',
            _id : '4'
        },
        {
            title: 'Why can\'t I log into my account and why do I have to wait 24 hours',
            answer: [
                {   
                    conent : [
                        {
                            teg : 'p',
                            className : "text",
                            text : "For user security, one account can only be logged into on one device at a time, and the device can be changed 24 hours after logging in. This ensures that no one but you can access your account from another device. In the future, if absolutely necessary, you can contact technical support, and we can lift this restriction."
                        }
                    ],
                    className : 'cont',
                    classNameCont : 'center mb25' 
                }
            ],
            type: 'account',
            _id : '5'
        },
        {
            title: 'How to update personal information',
            answer: [
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/6/1.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/6/2.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                },
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/6/3.jpg'},
                            className : "photo-mid"
                        }
                    ],
                    className : 'cont',
                    classNameCont : 'center' 
                }
            ],
            type: 'account',
            _id : '6'
        },
        // --------------
        {   
            title: 'Як перенести свою табличку excel у застосунок',
            answer: [],
            type: 'setting',
            _id : '' //!
        },
        {
            title: 'How to upload your data into the app',
            answer: [
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/7/1.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/7/2.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                },
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/7/3.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/7/4.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                },
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/7/5.jpg'},
                            className : "photo-mid"
                        }
                    ],
                    className : 'cont',
                    classNameCont : 'center' 
                }
            ],
            type: 'setting',
            _id : '7'
        },
        // --------------
        {
            title: 'Які дані збирає додаток',
            answer: [],
            type: 'confidentially',
            _id : '' //!
        },
        {
            title: 'How to request data deletion',
            answer: [],
            type: 'confidentially',
            _id : '8'
        },
        {
            title: 'What security measures do you provide',
            answer: [],
            type: 'confidentially',
            _id : '9'
        },
        // --------------
        {
            title: 'How to leave feedback about the app',
            answer: [],
            type: 'contact',
            _id : '10'
        },
        {
            title: 'How to report a bug or error',
            answer: [],
            type: 'contact',
            _id : '11'
        },
        // --------------
        {
            title: 'How to subscribe to premium services / How to upgrade your subscription',
            answer: [],
            type: 'payment',
            _id : '12'
        },
        {
            title: 'What payment methods are supported',
            answer: [],
            type: 'payment',
            _id : '13'
        },
        {
            title: 'What subscription plans are available',
            answer: [],
            type: 'payment',
            _id : '14'
        },
        // --------------
        {
            title: 'How to remove an employee',
            answer: [
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/15/1.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/15/2.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                },
                {   
                    conent : [
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/15/3.jpg'},
                            className : "photo-left"
                        },
                        {
                            teg : 'img',
                            atributes : {src : './images/faq/15/4.jpg'},
                            className : "photo-left"
                        },
                    ],
                    className : 'cont cont-2' 
                }
            ],
            type: 'worker',
            _id : '15'
        },
        {
            title: 'How to add an employee',
            answer: [],
            type: 'worker',
            _id : '16'
        },
        {
            title: 'How to restrict employee access',
            answer: [],
            type: 'worker',
            _id : '17'
        },
        // --------------
        {
            title: 'What is the "Important" folder',
            answer: [],
            type: 'folder',
            _id : '18'
        },
        {
            title: 'What is the "Favorites" folder',
            answer: [],
            type: 'folder',
            _id : '19'
        },
        // --------------
        {
            title: 'How to use the Auto Report feature',
            answer: [],
            type: 'transaction',
            _id : '20'
        },
        {
            title: 'What is Receiving',
            answer: [],
            type: 'transaction',
            _id : '21'
        },
        {
            title: 'What is Sales',
            answer: [],
            type: 'transaction',
            _id : '22'
        },
        {
            title: 'What is Returns',
            answer: [],
            type: 'transaction',
            _id : '23' 
        },
        // --------------
        {
            title: 'Що таке документи',
            answer: [],
            type: 'docum',
            _id : '' //!
        },
        // --------------
        {
            title: 'I am an Inventory Manager user. Where do I start',
            answer: [],
            type: 'function',
            _id : '24'
        },
        {
            title: 'What features are available in the app',
            answer: [],
            type: 'function',
            _id : '25'
        },
        {
            title: 'Does the app support barcode and QR code scanning? How does it work',
            answer: [],
            type: 'function',
            _id : '26'
        },
        {
            title: 'What is offline mode',
            answer: [],
            type: 'function',
            _id : '27'
        },
        {
            title: 'How is stock tracking performed',
            answer: [],
            type: 'function',
            _id : '28'
        },
        {
            title: 'How to synchronize data with other devices',
            answer: [],
            type: 'function',
            _id : '29'
        },
        {
            title: 'What is a barcode',
            answer: [],
            type: 'function',
            _id : '30'
        },
        // --------------
        {
            title: 'What does this button do (img)',
            answer: [],
            img: '',
            type: 'button',
            _id : '31' 
        },
        {
            title: 'What does this button do (img)',
            answer: [],
            img: '',
            type: 'button',
            _id : '32' 
        },
    ],
    types: {
        account: 'Акаунт',
        setting: 'Налаштування та персоналізація',
        confidentially: 'Конфиденциальность и данные',
        contact: 'Контакти та підтримка',
        payment: 'Оплата та підписка',
        worker: 'Співробітники',
        folder: 'Папки',
        transaction: 'Управління транзакціями',
        docum: 'Документи',
        function: 'Функції та можливості',
        button: 'Кнопки'
    }
}

























// const lang = datas['uk']['docs'];





