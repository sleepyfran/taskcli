import Storage from '../storage'
import { Task } from '../model/task'

/**
 * Returns the tasks specified by the user and a status flag.
 */
const getTasks = (): [Task[], string] => {
    try {
        return [Storage.getTasks(), '']
    } catch (error) {
        return [[], 'Error accessing the storage']
    }
}

/**
 * Saves the specified tasks into the storage
 * @param tasks Tasks to save.
 */
const saveTasks = (tasks: Task[]) => {
    Storage.saveTasks(tasks)
}

export default {
    getTasks,
    saveTasks,
}
