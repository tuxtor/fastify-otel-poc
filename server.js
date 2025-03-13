// Import the framework and instantiate it
import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {

    return { hello: 'world' }
})

// Route that triggers a recursive fibonacci function receiving n as param
fastify.get('/fibonacci/:n', async function handler (request, reply) {
    const n = request.params.n

    function fibonacci(n) {
        // Base case
        if (n <= 1) {
            return n
        }
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

    const result = fibonacci(n)
    return { result }
})

// Run the server!
try {
    await fastify.listen({ port: 3000, host: '0.0.0.0'  })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}