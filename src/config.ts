import os from 'os'

/* Colors. */
export const titleColor = () => '#C7EAE4'
export const textColor = () => '#E5E5E7'
export const pendingColor = () => '#EFA9AE'
export const doneColor = () => '#A7E8BD'
export const errorColor = () => '#9B1D20'
export const warningColor = () => '#F3A712'

/* Storage. */
export const appFolder = () => os.homedir() + '/.taskcli'
export const tasksFile = () => 'tasks.json'

/**
 * Gateway to the configuration of the application.
 * TODO: Change hard-coded values with real configuration access.
 */
export default {
    colors: {
        titleColor,
        textColor,
        pendingColor,
        doneColor,
        errorColor,
        warningColor,
    },
    storage: {
        appFolder,
        tasksFile,
    },
}
