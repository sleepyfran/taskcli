import { Task } from 'model/task'
import Config from './config'
import fs from 'fs'
import path from 'path'

/**
 * Creates a full, valid path given a folder and a file.
 * @param folder Path to the folder.
 * @param file File we want to point to inside the specified folder.
 */
const createPath = (folder: string, file: string) => {
    return path.join(folder, file)
}

/**
 * Gets or creates an specific storage file from the file system.
 * @param name Name of the file to get or create.
 */
const getOrCreateStorageFile = (name: string) => {
    const appFolder = Config.storage.appFolder()
    const filePath = createPath(appFolder, name)

    if (fs.existsSync(filePath)) {
        return filePath
    }

    if (!fs.existsSync(appFolder)) {
        fs.mkdirSync(appFolder)
    }

    if (!fs.existsSync(filePath)) {
        console.log('Hola?')
        fs.writeFileSync(filePath, '', 'utf-8')
    }

    return filePath
}

/**
 * Reads the tasks file and retrieves the saved tasks.
 */
const getTasks = (): Task[] => {
    const tasksFile = getOrCreateStorageFile(Config.storage.tasksFile())
    const fileContent = fs.readFileSync(tasksFile, 'utf-8')

    if (fileContent === '') return []

    return JSON.parse(fileContent)
}

/**
 * Saves the specified tasks in the tasks file.
 * @param tasks Tasks to save.
 */
const saveTasks = (tasks: Task[]) => {
    const stringifiedTasks = JSON.stringify(tasks)
    const tasksFile = getOrCreateStorageFile(Config.storage.tasksFile())
    fs.writeFileSync(tasksFile, stringifiedTasks, 'utf-8')
}

export default {
    getTasks,
    saveTasks,
}
