import Storage from '../storage'
import { Task } from '../model/task'
import { last } from 'lodash'

/**
 * Returns the tasks specified by the user and a status flag.
 */
const getTasksByTag = (tag?: string): [Map<string, Task[]>, string] => {
    try {
        let tasks = Storage.getTasks()

        if (tag) {
            tasks = tasks.filter(t => t.tag === tag)
        }

        const tasksByTag = new Map<string, Task[]>()
        tasks.forEach(t => {
            const currentTagTasks = tasksByTag.get(t.tag) || []
            tasksByTag.set(t.tag, [...currentTagTasks, t])
        })

        return [tasksByTag, '']
    } catch (error) {
        return [new Map(), 'Error accessing the storage']
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
    const tasks = Storage.getTasks()
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
    getTasksByTag,
    createTask,
}
