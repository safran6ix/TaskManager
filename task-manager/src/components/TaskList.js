// components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle }) {
    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <p className="empty-message">No tasks yet. Add one above!</p>
            ) : (
                tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))
            )}
        </div>
    );
}

export default TaskList;