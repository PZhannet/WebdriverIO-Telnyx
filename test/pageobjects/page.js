module.exports = class Page {
    
    open (path) {
        return browser.url(`https://telnyx.com/${path}`)
    }
    switchActiveWindow(title){
        return browser.switchWindow(title)
    }
}

