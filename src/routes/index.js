const { Router } = require("express")
const router = Router();

router.get('/', (req, res)=> res.json({message: 'pa cuando mi fondo de ahorro'}))

module.exports = router;

