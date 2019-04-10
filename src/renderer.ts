import Config from './config'
import { Task } from './model/task'
import chalk from 'chalk'

const textColor = (color: string) => chalk.hex(color)

/**
 * Prints a title with the default title colors.
 * @param title Title to print.
 */
export const printTitle = (title: string) => {
    console.log(textColor(Config.colors.titleColor())(title))
}

/**
 * Prints a task row with the default colors.
 * @param text Text of the task to print.
 * @param done Indicates whether the task is done or not.
 */
export const printTask = (task: Task) => {
    console.log(
        textColor(Config.colors.textColor())(`${task.id}. `),
        task.done ? textColor(Config.colors.doneColor())('◉') : textColor(Config.colors.pendingColor())('○'),
        textColor(Config.colors.textColor())(task.text),
    )
}

/**
 * Prints an error into the screen.
 * @param error Description of the error.
 */
export const printError = (error: string) => {
    console.log(textColor(Config.colors.errorColor())(error))
}

export default { printTitle, printTask, printError }
