import { Task } from './model/task'

export default {
    error: {
        loadingTasks:
            'There was an error obtaining the tasks, this is probably because the taskcli JSON storage was ' +
            'modified outside this app. \nRun taskcli reset to remove the config file (this will remove your data) ' +
            'or open the file to fix the errors manually.',
        noIdProvided: '✖️  No task ID provided',
        noMatchingTasks: (property: string) => `✖️  No matching tasks with the specified ${property}`,
    },
    messages: {
        taskMarkedAsDone: (task: Task) => `✔  Task with id ${task.id} marked as done`,
        taskMarkedAsPending: (task: Task) => `✔  Task with id ${task.id} marked as pending`,
        taskRemoved: (task: Task) => `✔  Task with id ${task.id} removed`,
        taskArchived: (task: Task) => `✔  Task with id ${task.id} archived`,
        taskRestored: (task: Task) => `✔  Task with id ${task.id} restored from the archive`,
    },
    titles: {
        uncategorized: 'Uncategorized',
    },
    warnings: {
        featureNotImplemented: (feature: string) => `Feature ${feature} not implemented yet. Ignoring option.`,
    },
}
