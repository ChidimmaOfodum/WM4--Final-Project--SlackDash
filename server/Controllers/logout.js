const logout = (req, res) => {
        res.clearCookie('nToken').send('Thanks for visiting!');
        return res.redirect('/');
}

export default logout