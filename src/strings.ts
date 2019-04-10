export default {
    error: {
        loadingTasks:
            'There was an error obtaining the tasks, this is probably because the taskcli JSON storage was ' +
            'modified outside this app. \nRun taskcli reset to remove the config file (this will remove your data) ' +
            'or open the file to fix the errors manually.',
    },
    titles: {
        uncategorized: 'Uncategorized',
    },
    warnings: {
        featureNotImplemented: (feature: string) => `Feature ${feature} not implemented yet. Ignoring option.`,
    },
}
