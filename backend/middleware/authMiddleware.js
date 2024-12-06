const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authMiddleware = (roles) => {
    return async (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: 'Access denied. No token provided.' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findByPk(decoded.id);

            // Check if the user's role is included in the allowed roles
            if (roles && !roles.includes(req.user.role)) {
                return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
            }

            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid token.' });
        }
    };
};

exports.authMiddleware = (requiredPermissions) => {
    return async (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: 'Access denied. No token provided.' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findByPk(decoded.id);

            // Check if the user's permissions include the required permissions
            if (requiredPermissions && !requiredPermissions.every(permission => req.user.permissions.includes(permission))) {
                return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
            }

            next();
        } catch (error) {
            res.status(401).json({ message: 'Invalid token.' });
        }
    };
};