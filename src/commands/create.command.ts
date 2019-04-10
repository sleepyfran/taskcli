import Command from './command'
import { CommandLineOptions } from 'command-line-args'
import TaskService from '../services/task.service'
import Renderer from '../renderer'

/**
 * Command in charge of creating new tasks and adding them to the storage.
 */
export default class CreateCommand implements Command {
    public name = 'create'
    public alias? = 'c'
    public flags = [
        {
            name: 'text',
            defaultOption: true,
        },
        {
            name: 'tag',
            alias: 't',
        },
    ]

    public execute = async (options: CommandLineOptions) => {
        const createdTask = TaskService.createTask(options.text, options.tag)
        Renderer.printTitle(`✔ Task with ID ${createdTask.id} created`)
    }
}
