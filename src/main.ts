import Commands from './commands/commands'
import commandLineArgs from 'command-line-args'

/**
 * Parses the user input and executes the command if it was found.
 */
;(async () => {
    // Define a default flag that will be the command to execute.
    const commandDefinition = [
        {
            name: 'command',
            defaultOption: true,
        },
    ]
    const parsedInput = commandLineArgs(commandDefinition, { stopAtFirstUnknown: true })
    let givenCommand = Commands.get(parsedInput.command)

    if (givenCommand === undefined) {
        givenCommand = Commands.get('show')!!
    }

    const argv = parsedInput._unknown || []
    const commandOptions = commandLineArgs(givenCommand.flags, { argv })
    await givenCommand.execute(commandOptions)
})()
