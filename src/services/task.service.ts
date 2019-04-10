import Storage from '../storage'
import { Task } from '../model/task'
import { last } from 'lodash'

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

/**
 * Creates and saves a new task.
 * @param text Text of the task.
 * @param tag Tag associated with the task.
 */
const createTask = (text: string, tag: string) => {
    const [tasks] = getTasks()
    const lastId = (last(tasks) || { id: 0 }).id
    const createdTask: Task = {
        id: lastId + 1,
        text: text,
        done: false,
        tag,
    }

    saveTasks([...tasks, createdTask])
    return createdTask
}

export default {
    getTasks,
    createTask,
}
