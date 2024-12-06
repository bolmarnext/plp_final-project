const CaseFile = require('../models/CaseFile');

exports.createCaseFile = async (req, res) => {
    const { title, description } = req.body;
    try {
        const caseFile = await CaseFile.create({ title, description, registrarId: req.user.id });
        res.status(201).json(caseFile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCaseFiles = async (req, res) => {
    try {
        const caseFiles = await CaseFile.findAll();
        res.json(caseFiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};