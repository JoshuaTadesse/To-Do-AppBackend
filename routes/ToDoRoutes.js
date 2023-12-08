const {Router} = require("express")
const {getToDo, saveToDo, updateToDo, deleteToDo} = require('../controllers/toDoController')
//const hbs = require('hbs')
//const path = require('path')
const router = Router()

//const templatePath = path.join(__dirname, '../templates')

/*router.set("view engine", "hbs")
router.set("views", templatePath)
router.get('/', (req, res)=> {
  res.render("login.hbs")
})
router.get('/signup', (req, res)=> {
  res.render("signup.hbs")
})
*/
router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router;
