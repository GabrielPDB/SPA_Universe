import { Router } from './router.js'

const router = new Router()
router.add('/', '/pages/home.html', './assets/mountains-universe-1.png')
router.add(
  '/exploration',
  '/pages/exploration.html',
  './assets/mountains-universe-2.png'
)
router.add(
  '/universe',
  '/pages/universe.html',
  './assets/mountains-universe-3.png'
)

router.handle()

window.onpopstate = () => {
  handle()
}

window.route = () => router.route()
