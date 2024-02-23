const tasks = [];
const categories = {};


function addTasks(taskName, categoryName) {
    const task = { name: taskName, category: categoryName, completed: false };
    tasks.push(task);
    if (!categories[categoryName]) {
        categories[categoryName] = [];
    }
    categories[categoryName].push(task);
}

function displayByCategory() {
    for (const category in categories) {
        console.log(`Category: ${category}`);
        categories[category].forEach(task => {
            console.log(`- ${task.name} (${task.completed ? 'Completed' : 'Incomplete'})`);
        });
    }
}


function markAsCompleted(taskName) {
    const task = tasks.find(task => task.name === taskName);
    if (task) {
        task.completed = true;
        console.log(`Task "${taskName}" marked as completed.`);
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}

function removeTask(taskName) {
    const index = tasks.findIndex(task => task.name === taskName);
    if (index !== -1) {
        const removedTask = tasks.splice(index, 1)[0];
        const categoryTasks = categories[removedTask.category];
        const categoryTaskIndex = categoryTasks.findIndex(task => task.name === taskName);
        categoryTasks.splice(categoryTaskIndex, 1);
        console.log(`Task "${taskName}" removed.`);
    } else {
        console.log(`Task "${taskName}" not found.`);
    }
}
addTasks('Study algebra', 'Study');
addTasks('attend a zoom call ', 'Work');
addTasks('Buy groceries', 'Personal');
addTasks('Do laundry', 'cleaning');


console.log('Tasks grouped by category:');
displayByCategory();

markAsCompleted('Buy groceries');

console.log('After marking task as completed:');
displayByCategory();

removeTask('do laundry');

console.log('After removing task:');
displayByCategory();