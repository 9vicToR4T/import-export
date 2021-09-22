import jsImg from '../../assets/js.png'

export class HeaderJs {
    #container
    constructor() {
        this.#container = document.createElement('div')
        this.#container.className = 'container-header'
    }
    render(){
        const jsTitle = document.createElement('h1')
        jsTitle.className = 'js-title'
        jsTitle.textContent = 'Java Script'


        const javascriptImg = document.createElement('img')
        javascriptImg.className = 'js-img'
        javascriptImg.src = jsImg

        const subtitle = document.createElement('div')
        subtitle.className = 'subtitle'
        subtitle.textContent = 'Since the creation of JS has passed: '

        this.#container.append(jsTitle, javascriptImg, subtitle)
        return this.#container




    }



}

