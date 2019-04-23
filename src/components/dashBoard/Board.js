import React from 'react';
import Card from './Card';

const Board = (props) => {
    const { title, color, tasks } = props;

    const renderTasks = () => {
        return tasks.map(task => <Card key={task.id} text={task.text} priority={task.priority}/> )
    };

    return (
        <div className="board">
            <div className="board__top-border" style={{backgroundImage: color}}/>
            <div className="board-title">
                <p className="board-title__text">{title}</p>
                <button className="board-title__btn"/>
            </div>

            { renderTasks() }
        </div>
    );
};

export default Board;