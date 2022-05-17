export class Router {
  routes = {}
  background = {}

  add(routeName, page, background) {
    this.routes[routeName] = page
    this.background[routeName] = background
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  select() {
    const links = document.querySelectorAll('a')

    links.forEach(link => {
      if (link.attributes[0].nodeValue == window.location.pathname) {
        link.style.fontWeight = 700
      } else {
        link.style.fontWeight = 400
      }
    })
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname]
    document.body.style.backgroundImage = `url(${this.background[pathname]})`

    this.select()

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
  }
}
