// import {getTodayDateFormat, getPreciseDateDifference} from "../core/utils/date";
import * as DateUtils from '../core/utils/date'


export class TimerBlock {
    #timerContainer
    #timerText
    #dateDifference
    #date

    constructor(date) {
        this.#date = date
        this.#dateDifference = document.createElement('div')
        this.#timerContainer = document.createElement('div')
        this.#timerText = document.createElement('h2')
    }


    #getTimerContent(){
        return DateUtils.getPreciseDateDifference(new Date(), this.#date)
    }

    #updateEverySeconds(){
        setInterval(() =>{
            this.#dateDifference.textContent = this.#getTimerContent()

        }, 1000)
    }

    render(){


        this.#timerContainer.className = 'timer-container'

        this.#dateDifference.className = 'date-difference'
        this.#dateDifference.textContent = this.#getTimerContent()
        const dateToday = DateUtils.getTodayDateFormat( new Date())
        this.#timerText.className = 'timer-text'
        this.#timerText.textContent = `(Today: ${dateToday})`
        this.#updateEverySeconds()
        this.#timerContainer.append(this.#dateDifference, this.#timerText)

        return this.#timerContainer




    }


    
}