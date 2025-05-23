const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

fastify.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
});

const sequelize = require('./sequelize');
const PricelistItem = require('./models/Item');

// get all items
fastify.get('/item', async (req, res) => {
    const items = await PricelistItem.findAll({
        order: [['id', 'ASC']]
    });
    return items;
});

// update fields
fastify.put('/item/:id', async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const item = await PricelistItem.findByPk(id);
        if (!item) {
            return res.code(404).send({ message: 'Item not found' });
        }
        await item.update(updates);
        return res.send(item);
    } catch (error) {
        req.log.error(error);
        return res.code(500).send({ message: 'Error updating item' });
    }
});

const PORT = process.env.SERVER_PORT
const start = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync();
        console.log('Models synchronized.');

        await fastify.listen({ port: PORT | 3001 });
        console.log(`Server is up on http://localhost:${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
