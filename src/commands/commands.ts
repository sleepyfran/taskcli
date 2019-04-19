import CreateCommand from './create.command'
import ShowCommand from './show.command'
import DoneCommand from './done.command'
import PendingCommand from './pending.command'
import Command from './command'
import RemoveCommand from './remove.command'

const commandList: Command[] = [
    new ShowCommand(),
    new CreateCommand(),
    new DoneCommand(),
    new PendingCommand(),
    new RemoveCommand(),
]

/**
 * Utilities to retrieve commands by their name or alias.
 */
export default {
    get: (command: string) => commandList.find(c => c.name === command || c.alias === command),
    default: () => commandList[0],
}
