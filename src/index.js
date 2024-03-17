import { Router } from './router.js'

const router = new Router()

router.add('/abount','/pager/abount.html')
router.add('/', '/pager/home.html')
router.add('/contact', '/pager/contact.html')
router.add(404 , '/pager/404.html')

router.hendler()

window.onpopstate = () => router.hendler()
window.route = () => router.route()