
const taskScheduler = {
    tasks: [],
  
    addTasks: function(title, description, dueDate) {
      this.tasks.push({
        title,
        description,
        dueDate,
        completed: false
      });
    },
  
    displayTasksByDueDate: function() {
      const sortedTasks = this.tasks.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  
      console.log('Tasks Sorted by Due Date:');
      sortedTasks.forEach((task) => {
        console.log(`Title: ${task.title} | Due Date: ${task.dueDate} | Completed: ${task.completed}`);
      });
    },
  
    updateTasks: function(title, newDescription, newDueDate, markAsCompleted = false) {
      const taskToUpdate = this.tasks.find(task => task.title === title);
  
      if (taskToUpdate) {
        taskToUpdate.description = newDescription || taskToUpdate.description;
        taskToUpdate.dueDate = newDueDate || taskToUpdate.dueDate;
        taskToUpdate.completed = markAsCompleted || taskToUpdate.completed;
        console.log('Task updated successfully!');
      } else {
        console.log('Task not found.');
      }
    },
  
    removeTasks: function(title) {
      const taskIndex = this.tasks.findIndex(task => task.title === title);
  
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
        console.log('Task removed successfully!');
      } else {
        console.log('Task not found.');
      }
    }
  };
  
  taskScheduler.addTasks('Complete project', 'Finish the my assignment', '2024-02-28');
  taskScheduler.addTasks('Go for a run', 'Jog for 30 minutes', '2024-02-24');
  taskScheduler.addTasks('Read a book', 'Read the fault in our stars', '2024-03-10');
  
  taskScheduler.displayTasksByDueDate();
  
  console.log('\nUpdating task details:');
  taskScheduler.updateTasks('Complete project', 'Finish the coding project and write documentation', '2024-03-05');
  
  taskScheduler.displayTasksByDueDate();
  
  console.log('\nMarking task as completed:');
  taskScheduler.updateTasks('Go for a run', null, null, true);
  
  taskScheduler.displayTasksByDueDate();
  
  console.log('\nRemoving a task:');
  taskScheduler.removeTasks('Read a book');
  
  taskScheduler.displayTasksByDueDate();
  