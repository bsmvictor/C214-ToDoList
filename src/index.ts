type Task = {
  name: string;
  schedule: Date;
};

class ToDoListManager {
  private tasks: Task[] = [];
  constructor() {}

  insertTask(task: Task) {
    this.tasks.push(task);
  }
}

const task: Task = {
  name: "Estudar TypeScript",
  schedule: new Date("2024-09-07"),
};

const TaskManager = new ToDoListManager();

TaskManager.insertTask(task);
