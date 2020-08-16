const db = require('../persistence');
const uuid = require('uuid/v4');
//This si some test text for a new commit
module.exports = async (req, res) => {
    const item = {
        id: uuid(),
        name: req.body.name,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
