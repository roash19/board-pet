import React from 'react';
import {Draggable} from 'react-beautiful-dnd';
import Avatar from "../Avatar";

const Task = (props) => {
    const {text, priority, index, id} = props;

    return (
        <Draggable draggableId={id.toString()} index={index}>
            {(provided, snapshot) => (
                <div className={snapshot.isDragging ? 'task task_dragging' : 'task'}
                     ref={provided.innerRef}
                     {...provided.draggableProps}
                     {...provided.dragHandleProps}
                >
                    <div className={`task-priority task-priority_${priority}`}>
                        <p>{`${priority} Priority`}</p>
                    </div>
                    <p className="task__text text-default">
                        {text}
                    </p>
                    <Avatar/>
                </div>
            )}

        </Draggable>
    );
};

export default Task;