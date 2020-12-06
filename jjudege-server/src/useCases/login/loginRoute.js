const express = require('express')
const router = express.Router()
const { json } = require('body-parser')
const { save, getUser } = require('./loginPersistence')
const jwt = require('jsonwebtoken')

router.post('/signUp', async (req, res) => {
    /**
     const data = {
          name: name,
          email: email,
          password: password
        }
     */
    try {
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        res.status(201).send(await save(user))
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.post('/signIn', async (req, res) => {
    try {
        const userLogin = {
            email: req.body.email,
            password: req.body.password
        }
        const user = await getUser(userLogin)
        console.log(user.dataValues)
        if (user != null) {
            const token = jwt.sign(
                { userId: user.id, userName: user.name },
                process.env.JWTSECRETE,
                { expiresIn: 600 }
            )
            res.json({ auth: true, token })
        } else {
            
            res.status(401).end()
        }
    } catch (error) {
        console.log(error)
        res.status(400).send('server error')
    }
})

module.exports = router