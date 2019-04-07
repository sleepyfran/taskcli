import Config from './config'
import { Task } from './model/task'
import chalk from 'chalk'

const textColor = (color: string) => chalk.hex(color)

/**
 * Prints a title with the default title colors.
 * @param title Title to print.
 */
export const printTitle = (title: string) => {
    console.log(textColor(Config.titleColor())(title))
}

/**
 * Prints a task row with the default colors.
 * @param text Text of the task to print.
 * @param done Indicates whether the task is done or not.
 */
export const printTask = (task: Task) => {
    console.log(
        textColor(Config.textColor())(`${task.id}. `),
        task.done ? textColor(Config.doneColor())('◉') : textColor(Config.pendingColor())('○'),
        textColor(Config.textColor())(task.text),
    )
}

export default { printTitle, printTask }
