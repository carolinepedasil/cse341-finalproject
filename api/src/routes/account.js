import passport from 'passport';
import { Router } from 'express';

const router = Router();

router.get('/login', passport.authenticate('github'), (req, res) => {})

router.get('/logout', (req, res) => {
    req.logout(function(err) {
        if (err) { return nextTick(err); }
        res.redirect('/');
    })
})

export default router;