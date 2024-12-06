const Inmate = require('../models/Inmate');

exports.addInmate = async (req, res) => {
    const { name, nin, sentenceDuration, caseFileId } = req.body;
    try {
        const inmate = await Inmate.create({ name, nin, sentenceDuration, caseFileId });
        res.status(201).json(inmate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getInmates = async (req, res) => {
    try {
        const inmates = await Inmate.findAll();
        res.json(inmates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};