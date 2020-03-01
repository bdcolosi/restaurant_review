const express = require('express');
router = express.Router();

router.get('/index', (req,res) => {
    res.render('template', {
        locals: {
            title: 'index'
        },
        partials: {
            partial: 'partial-index'
        }
    })
});

module.exports = router;
