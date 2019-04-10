import Command from './command'
import { CommandLineOptions } from 'command-line-args'
import TaskService from '../services/task.service'
import Renderer from '../renderer'
import Strings from '../strings'
import { isEmpty } from 'lodash'

/**
 * Command in charge of showing the tasks saved in the storage.
 */
export default class ShowCommand implements Command {
    public name = 'show'
    public flags = [
        {
            name: 'tag',
            alias: 't',
        },
    ]

    public execute = async (options: CommandLineOptions) => {
        const [tasksByTag, error] = TaskService.getTasksByTag(options.tag)

        if (error) {
            Renderer.printError(Strings.error.loadingTasks)
        }

        if (isEmpty(tasksByTag)) {
            Renderer.printTitle('No tasks added! Run taskcli --help to get started')
        }

        tasksByTag.forEach((tasks, tag) => {
            Renderer.printTitle(tag ? `#${tag}` : Strings.titles.uncategorized)
            tasks.forEach(t => {
                Renderer.printTask(t)
            })
            Renderer.printNewLine()
        })
    }
}
