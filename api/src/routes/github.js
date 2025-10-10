import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/callback', passport.authenticate('github', {
        failureRedirect: '/', 
        session: false,
    }),
    (req, res) => {
        req.session.user = req.user;
        res.redirect('/');
    }
);

export default router;