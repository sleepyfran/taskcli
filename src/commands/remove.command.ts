import Command from './command'
import { CommandLineOptions } from 'command-line-args'
import TaskService from '../services/task.service'
import Renderer from '../renderer'
import Strings from '../strings'

/**
 * Command in charge of removing tasks.
 */
export default class RemoveCommand implements Command {
    public name = 'remove'
    public alias = 'r'
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

        const task = TaskService.removeTask(+options.taskId)

        if (!task) {
            return Renderer.printError(Strings.error.noMatchingTasks('id'))
        }

        Renderer.printTitle(Strings.messages.taskRemoved(task))
    }
}
