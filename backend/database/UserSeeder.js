exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {name: 'Shafiul', email: 'shafiulbashar@zoho.com', password: 'hello1234', remember_token: 'randomtoken', email_verified_at: new Date()}
            ]);
        });
};