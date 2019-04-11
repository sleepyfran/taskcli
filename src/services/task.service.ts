import Storage from '../storage'
import { Task } from '../model/task'
import { Filters } from '../model/filters'
import { last } from 'lodash'

/**
 * Saves the specified tasks into the storage
 * @param tasks Tasks to save.
 */
const saveTasks = (tasks: Task[]) => {
    Storage.saveTasks(tasks)
}

/**
 * Saves the specified task into the storage.
 * @param task Task to save.
 */
const saveTask = (task: Task) => {
    const tasks = Storage.getTasks()
    const taskArrayIndex = tasks.findIndex(t => t.id === task.id)

    if (taskArrayIndex === -1) return

    tasks[taskArrayIndex] = task
    return saveTasks(tasks)
}

/**
 * Returns the tasks specified by the user and a status flag.
 */
const getTasksByTag = (filter: Filters, tag?: string): [Map<string, Task[]>, string] => {
    try {
        let tasks = Storage.getTasks()

        switch (filter) {
            case Filters.done:
                tasks = tasks.filter(t => t.done)
                break
            case Filters.pending:
                tasks = tasks.filter(t => !t.done)
                break
            case Filters.archived:
                break
        }

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
 * Finds a task with the specified ID.
 * @param id Id of the task to retrieve.
 */
const getTaskById = (id: number): Task | undefined => {
    try {
        let tasks = Storage.getTasks()
        return tasks.find(t => t.id === id)
    } catch (error) {
        return undefined
    }
}

/**
 * Marks a task with the specified status.
 * @param id Id of the task to modify.
 * @param done Status of the task. True if done, false if pending.
 */
const markTaskAs = (id: number, done: boolean): Task | undefined => {
    try {
        const specifiedTask = getTaskById(id)

        if (!specifiedTask) {
            return undefined
        }

        specifiedTask.done = done
        saveTask(specifiedTask)
        return specifiedTask
    } catch (error) {
        return undefined
    }
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
    getTaskById,
    createTask,
    markTaskAs,
}
