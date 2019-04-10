import { CommandLineOptions, OptionDefinition } from 'command-line-args'

/**
 * Base interface for any command in the application.
 */
export default interface Command {
    /**
     * Defines the main name that refers to this command. E.g.: `create`, `delete`, etc.
     */
    name: string

    /**
     * Defines the alias that can also refer to this command. E.g.: `c` for `create`, `d` for `delete`, etc.
     */
    alias?: string

    /**
     * Possible flags that this command accepts. E.g.: `--tag` or `-t` for the `create` command.
     */
    flags: OptionDefinition[]

    /**
     * Function to be called when the parser is ready to execute this command.
     * @param options Parsed flags given by the user.
     */
    execute: (options: CommandLineOptions) => Promise<void>
}
