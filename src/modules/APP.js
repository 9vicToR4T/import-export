import {HeaderJs} from "./HeaderJs";
import {TimerBlock} from './Timer'
import {jsCreationDate} from "../core/constants/settings";


export default class App {
    #headerJS
    #dateBlock
    constructor() {
        this.#headerJS = new HeaderJs()
        this.#dateBlock = new TimerBlock(jsCreationDate)

    }

    render(){
        const headerHTML = this.#headerJS.render()
        const dateHTML = this.#dateBlock.render()

        document.body.append(headerHTML, dateHTML)

    }
    
}



