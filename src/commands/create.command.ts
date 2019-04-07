import Command from './command'
import { CommandLineOptions } from 'command-line-args'

/**
 * Command in charge of creating new tasks and adding them to the storage.
 */
export default class CreateCommand implements Command {
    public name = 'create'
    public alias? = 'c'
    public flags = [
        {
            name: 'tag',
            alias: 't',
        },
    ]

    public execute = async (options: CommandLineOptions) => {
        console.log('Hi from the create command', options)
    }
}
