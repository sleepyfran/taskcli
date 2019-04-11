import CreateCommand from './create.command'
import ShowCommand from './show.command'
import DoneCommand from './done.command'
import PendingCommand from './pending.command'
import Command from './command'

/**
 * Creates a Map containing all the possible commands of the app with the name of the command as the key and
 * an instance of the command as the value.
 */
export default {
    map: () => {
        const createCommand = new CreateCommand()
        const showCommand = new ShowCommand()
        const doneCommand = new DoneCommand()
        const pendingCommand = new PendingCommand()
        return new Map<string, Command>([
            [createCommand.name, createCommand],
            [showCommand.name, showCommand],
            [doneCommand.name, doneCommand],
            [pendingCommand.name, pendingCommand],
        ])
    },
}
