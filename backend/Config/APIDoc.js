module.exports = {
    output: 'public/docs',
    router: 'laravel',
    base_url: '',
    postman: {
        enabled: true,
        name: null,
        description: null
    },
    routes: [
        {
            match: {
                domains: [
                    '*',
                    // 'domain1.*'
                ],
                prefixes: [
                    'api/v3/*',
                    // 'users/*'
                ],
                versions: ['v1']
            },
            include: [
                // 'users.index', 'healthcheck*'
            ],
            exclude: [
                // 'users.create', 'admin.*'
            ],
            apply: {
                headers: {
                    // 'Authorization': 'Bearer {token}',
                    // 'Api-Version': 'v2'
                },
                response_calls: {
                    methods: ['GET'],
                    bindings: [
                        // '{user}': 1
                    ],
                    config: {
                        'app.env': 'documentation',
                        'app.debug': false
                        // 'service.key': 'value'
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                        // 'key': 'value'
                    },
                    cookies: {
                        // 'name': 'value'
                    },
                    query: {
                        // 'key': 'value'
                    },
                    body: {
                        // 'key': 'value'
                    }
                }
            }
        }
    ],
    strategies: {
        metadata: [
            '\Mpociot\ApiDoc\Strategies\Metadata\GetFromDocBlocks'
        ],
        bodyParameters: [
            '\Mpociot\ApiDoc\Strategies\BodyParameters\GetFromBodyParamTag'
        ],
        queryParameters: [
            '\Mpociot\ApiDoc\Strategies\QueryParameters\GetFromQueryParamTag'
        ],
        responses: [
            '\Mpociot\ApiDoc\Strategies\Responses\UseResponseTag',
            '\Mpociot\ApiDoc\Strategies\Responses\UseResponseFileTag',
            '\Mpociot\ApiDoc\Strategies\Responses\UseTransformerTags',
            '\Mpociot\ApiDoc\Strategies\Responses\ResponseCalls'
        ]
    },
    logo: false,
    default_group: 'general',
    example_languages: ['bash', 'javascript'],
    fractal: {
        serializer: null
    },
    faker_seed: null
}