module.exports = {
    default: process.env.BROADCAST_DRIVER,

    connections: {
        pusher: {
            driver: 'pusher',
            key: process.env.PUSHER_APP_KEY,
            secret: process.env.PUSHER_APP_SECRET,
            app_id: process.env.PUSHER_APP_ID,
            options: {
                cluster: process.env.PUSHER_APP_CLUSTER,
                encrypted: true,
            },
        },

        redis: {
            driver: 'redis',
            connection: 'default',
        },

        log: {
            driver: 'log',
        },

        null: {
            driver: 'null',
        },
    },
}