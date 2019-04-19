import Command from './command'
import { CommandLineOptions } from 'command-line-args'
import TaskService from '../services/task.service'
import Renderer from '../renderer'
import Strings from '../strings'

/**
 * Command in charge of marking the tasks as pending.
 */
export default class PendingCommand implements Command {
    public name = 'pending'
    public alias = 'p'
    public flags = [
        {
            name: 'taskId',
            defaultOption: true,
        },
    ]

    public execute = async (options: CommandLineOptions) => {
        if (!options.taskId) {
            return Renderer.printError(Strings.error.noIdProvided)
        }

        const task = TaskService.markTaskAs(+options.taskId, false)

        if (!task) {
            return Renderer.printError(Strings.error.noMatchingTasks('id'))
        }

        Renderer.printTitle(Strings.messages.taskMarkedAsPending(task))
    }
}
