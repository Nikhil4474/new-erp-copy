const myFaker = require('faker');

/**
    * @param {Object} factory
    * @return {Object}
 */
module.exports = (factory) => {
    factory.define('user', null, {
        name: () => myFaker.name,
        email: () => myFaker.internet,
        email_verified_at: () => new Date(),
        password: () => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        remember_token: () => myFaker.random.alphaNumeric(10, 20),
    });
};
