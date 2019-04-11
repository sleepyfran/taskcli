# TaskCLI 🗃

A task manager living in your terminal.

`Note`: The app is currently in development. This will be the future documentation and not all the commands describe here are implemented yet.

## Installing

As any other `npm` package simply:

```bash
npm install -g taskcli
```

`Note`: The package hasn't been published to NPM yet.

## Usage

### Creating a new task

```bash
taskcli create 'Implement new features in taskcli'
# Or the shorter version:
taskcli c 'Implemente new features in taskcli'
```

You can also assign the task a tag:

```bash
taskcli create 'This will be under the specified tag' --tag tagname
# Or the shorter version:
taskcli create 'This will be under the specified tag' -t tagname
```

This will organize each task by tag when you display them.

### Adding a note to a task `(not implemented yet)`

```bash
taskcli note id 'This note will be shown '
```

### Displaying created tasks

`Note`: `id` represents the number show with the task

```bash
taskcli show
# Or simply:
taskcli
```

If you want to show only the content of a tag:

```bash
taskcli show --tag tagname
```

#### Filters

You can also add additional filters to the `show` command (specifying or not a tag name):

| Flag                 | Displays                      |
| -------------------- | ----------------------------- |
| `-d` or `--done`     | Shows tasks marked as done    |
| `-p` or `--pending`  | Shows tasks marked as pending |
| `-a` or `--archived` | Shows archived tasks          |

For example:

```bash
taskcli show tagname --done
# Or without a task:
taskcli show --pending
```

#### Task details

You can show a task in detail, which will show any note that the task includes, with:

```bash
taskcli show id
```

### Marking a task as done

```bash
taskcli done id
# Or the shorter version:
taskcli d id
```

### Marking a task as pending

```bash
taskcli pending id
# Or the shorter version:
taskcli p id
```

### Archiving a task `(not implemented yet)`

```bash
taskcli archive id
```

### Removing a task `(not implemented yet)`

```bash
taskcli remove id
```
