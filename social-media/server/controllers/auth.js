import User from '../models/user'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../../config'

const signin = (req, res) => {
    User.findOne({ email: req.body.email },
        (err, user) => {
            if (err || !user) { return res.status(401).json({ error: "User not found" })}
            if (!user.authenticate(req.body.password)) {
                return res.status(400).json({ error: "Email or password don't match."})
            }

            const token = jwt.sign({
                _id: user._id
            }, config.jwtSecret)

            // res.cookie("t", token, { expire: new Date + 9999})

            return res.json({
                token,
                user: {_id: user._id, name: user.name, email: user.email }
            })
        }
    )
}

const signout = (req, res) => {
    
}

/**
 * The requireSignin method in auth.controller.js uses express-jwt to verify that the
incoming request has a valid JWT in the Authorization header. If the token is valid,
it appends the verified user's ID in an 'auth' key to the request object, otherwise
it throws an authentication error.

We can add requireSignin to any route that should be protected against
unauthenticated access.
 */
const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth'
})

/**
 * checks if the authenticated user is the same
as the user being updated or deleted
 */
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!(authorized)) {
        return res.status(403).json({
            error: "User is not authorized"
        })
    }
    next()
}

export default { signin, signout, requireSignin, hasAuthorization }
