import Command from './command'
import { CommandLineOptions } from 'command-line-args'
import TaskService from '../services/task.service'
import Renderer from '../renderer'
import { last } from 'lodash'
import { Task } from '../model/task'

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
        const [tasks] = TaskService.getTasks()
        const lastId = (last(tasks) || { id: 0 }).id
        const createdTask: Task = {
            id: lastId + 1,
            text: options.text,
            done: false,
            tag: options.tag,
        }

        TaskService.saveTasks([...tasks, createdTask])
        Renderer.printTitle(`✔ Task with ID ${createdTask.id} created`)
    }
}
