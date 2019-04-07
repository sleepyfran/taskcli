import CreateCommand from './create.command'
import Command from './command'

/**
 * Creates a Map containing all the possible commands of the app with the name of the command as the key and
 * an instance of the command as the value.
 */
export default {
    map: () => {
        const createCommand = new CreateCommand()
        return new Map<string, Command>([[createCommand.name, createCommand]])
    },
}