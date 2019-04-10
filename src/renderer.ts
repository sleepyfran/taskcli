import Config from './config'
import { Task } from './model/task'
import chalk from 'chalk'

const textColor = (color: string) => chalk.hex(color)

/**
 * Prints a title with the default title colors.
 * @param title Title to print.
 */
const printTitle = (title: string) => {
    console.log(textColor(Config.colors.titleColor())(title))
}

/**
 * Prints a task row with the default colors.
 * @param text Text of the task to print.
 * @param done Indicates whether the task is done or not.
 */
const printTask = (task: Task) => {
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
const printError = (error: string) => {
    console.log(textColor(Config.colors.errorColor())(error))
}

/**
 * Prints a warning into the screen.
 * @param warning Description of the warning.
 */
const printWarning = (warning: string) => {
    console.log(textColor(Config.colors.warningColor())(warning))
}

/**
 * Prints a new line in the screen.
 */
const printNewLine = () => {
    console.log('\n')
}

export default {
    printTitle,
    printTask,
    printError,
    printNewLine,
    printWarning,
}
