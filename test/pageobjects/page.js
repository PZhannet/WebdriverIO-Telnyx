module.exports = class Page {
    
    open (path) {
        return browser.url(`/${path}`)
    }
    switchActiveWindow(title){
        return browser.switchWindow(title)
    }
}

