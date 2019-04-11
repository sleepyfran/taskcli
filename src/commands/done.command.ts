import Command from './command'
import { CommandLineOptions } from 'command-line-args'
import TaskService from '../services/task.service'
import Renderer from '../renderer'
import Strings from '../strings'

/**
 * Command in charge of marking the tasks as done.
 */
export default class DoneCommand implements Command {
    public name = 'done'
    public alias = 'd'
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

        const task = TaskService.markTaskAs(+options.taskId, true)

        if (!task) {
            return Renderer.printError(Strings.error.nonMatchingTasks('id'))
        }

        Renderer.printTitle(Strings.messages.taskMarkedAsDone(task))
    }
}
