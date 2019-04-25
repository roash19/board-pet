import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Column = (props) => {
    const { title, color, tasks } = props;

    const renderTasks = () => {
        return tasks.map((task, index) => <Task key={task.id} id={task.id} text={task.text} priority={task.priority} index={index}/> )
    };

    return (
        <div className="column">
            <div className="column__top-border" style={{backgroundImage: color}}/>
            <div className="column-title">
                <p className="column-title__text">{title}</p>
                <button className="column-title__btn"/>
            </div>
            <Droppable droppableId={title}>
                {(provided) => (
                    <div style={{minHeight: 150}}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        { tasks && renderTasks() }
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

        </div>
    );
};

export default Column;