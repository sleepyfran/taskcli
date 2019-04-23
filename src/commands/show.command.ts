import Command from './command'
import { CommandLineOptions } from 'command-line-args'
import TaskService from '../services/task.service'
import Renderer from '../renderer'
import Strings from '../strings'
import { isEmpty } from 'lodash'
import { Filters } from '../model/filters'

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
        {
            name: 'done',
            alias: 'd',
            type: Boolean,
        },
        {
            name: 'pending',
            alias: 'p',
            type: Boolean,
        },
        {
            name: 'archived',
            alias: 'a',
            type: Boolean,
        },
    ]

    public execute = async (options: CommandLineOptions) => {
        let filter = Filters.all
        if (options.done) filter = Filters.done
        else if (options.pending) filter = Filters.pending
        else if (options.archived) filter = Filters.archived

        const [tasksByTag, error] = TaskService.getTasksByTag(filter, options.tag)

        if (error) {
            return Renderer.printError(Strings.error.loadingTasks)
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
