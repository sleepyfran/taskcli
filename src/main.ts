import CommandsMap from './commands/index'
import commandLineArgs from 'command-line-args'

/**
 * Executes the command parser and executes the command if it was found.
 */
;(async () => {
    const commands = CommandsMap.map()

    // Define a default flag that will be the command to execute.
    const commandDefinition = [
        {
            name: 'command',
            defaultOption: true,
        },
    ]
    const parsedInput = commandLineArgs(commandDefinition, { stopAtFirstUnknown: true })
    const givenCommand = commands.get(parsedInput.command)

    if (givenCommand === undefined) {
        return
    }

    const argv = parsedInput._unknown || []
    const commandOptions = commandLineArgs(givenCommand.flags, { argv })
    await givenCommand.execute(commandOptions)
})()
