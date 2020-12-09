const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken: (req, res, next) =>{
        const token = req.headers['x-access-token']
        
        jwt.verify(token,process.env.JWTSECRETE, (err, decoded) =>{
            console.log(req.body)
            if(err) return res.status(401).end()
            req.userId = decoded.userId

            next()
        })
    }
}