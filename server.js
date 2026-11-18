app.use(express.static('public'));
const express = require('express');
const app = express();

app.use(express.json({ limit: '10kb' }));

// Allowed order values
const allowedSizes = ['6 Inch', 'Footlong'];

const allowedBreads = [
    'White',
    'Wheat',
    'Rye'
];

const allowedCheeses = [
    'American',
    'Pepper Jack',
    'Cheddar'
];

const allowedVegetables = [
    'Lettuce',
    'Tomato',
    'Pickle',
    'Onion',
    'Mushroom',
    'Banana Pepper',
    'Jalepeno',
    'Black Olive',
    'Green Olive'
];

// Receive and validate an order
app.post('/api/orders', (req, res) => {

    const { size, bread, cheese, vegetables } = req.body;

    // Verify sandwich size
    if (!allowedSizes.includes(size)) {
        return res.status(400).json({
            error: 'Invalid sandwich size'
        });
    }

    // Verify bread
    if (!allowedBreads.includes(bread)) {
        return res.status(400).json({
            error: 'Invalid bread selection'
        });
    }

    // Verify cheese
    if (!allowedCheeses.includes(cheese)) {
        return res.status(400).json({
            error: 'Invalid cheese selection'
        });
    }

    // Verify vegetables
    if (
        !Array.isArray(vegetables) ||
        vegetables.length > allowedVegetables.length ||
        !vegetables.every(v => allowedVegetables.includes(v)) ||
        new Set(vegetables).size !== vegetables.length
    ) {
        return res.status(400).json({
            error: 'Invalid vegetable selection'
        });
    }

    // Accept the validated order
    const verifiedOrder = {
        size,
        bread,
        cheese,
        vegetables
    };

    console.log('Verified order:', verifiedOrder);

    return res.status(201).json({
        message: 'Order successfully verified',
        order: verifiedOrder
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
