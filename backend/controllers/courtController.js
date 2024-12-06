const CaseFile = require('../models/CaseFile');

exports.assignCaseToJudge = async (req, res) => {
    const { caseFileId, judgeId } = req.body;
    try {
        const caseFile = await CaseFile.findByPk(caseFileId);
        if (!caseFile) return res.status(404).json({ message: 'Case file not found' });

        caseFile.judgeId = judgeId;
        await caseFile.save();
        res.json(caseFile);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};