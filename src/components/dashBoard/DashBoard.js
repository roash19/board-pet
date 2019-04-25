import React from 'react';
import Layout from '../Layouts/Layout';
import DashBoardHeader from "./DashBoardHeader";
import Column from './Column';
import {DragDropContext} from 'react-beautiful-dnd';
import axios from 'axios';
import plus from '../../images/plus_icon.svg';


class DashBoard extends React.Component {
    state = {
        tasks: {},
        boards: [],
        currentBoard: ""
    };

    componentDidMount() {
        this.getBoards();
    }

    getBoards = () => {
        axios.get('http://localhost:3004/boards')
            .then(res => {
                this.setState({boards: res.data, currentBoard: res.data[0].name});
                this.getTasks(0);
            })
    };

    handleBoard = (board) => {
        this.setState({currentBoard: board.name});
        this.getTasks(board.id)
    };

    getTasks = (boardId) => {
        axios.get(`http://localhost:3004/tasks?boardId=${boardId}`)
            .then(res => {
                res.data.length !== 0 ?
                    this.setState({tasks: res.data[0].tasks})
                    :
                    this.setState({tasks: {}})
            })
    };

    onDragEnd = result => {
        const {destination, source} = result;
        const {tasks} = this.state;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const startColumn = source.droppableId;
        const finishColumn = destination.droppableId;

        if (startColumn === finishColumn) {
            const newColumnTasks = [...tasks[startColumn]];

            const task = newColumnTasks.splice(source.index, 1);
            newColumnTasks.splice(destination.index, 0, task[0]);

            const newTasks = {
                ...tasks,
                [startColumn]: newColumnTasks
            };

            this.setState({
                tasks: newTasks
            });

            return;
        }

        const startTasks = [...tasks[startColumn]];
        const dropTask = startTasks.splice(source.index, 1);

        const finishTasks = [...tasks[finishColumn]];
        finishTasks.splice(destination.index, 0, dropTask[0]);

        const newTasksColumns = {
            ...tasks,
            [startColumn]: startTasks,
            [finishColumn]: finishTasks,
        };

        this.setState({
            tasks: newTasksColumns
        });
    };

    render() {
        const {boards, tasks, currentBoard} = this.state;

        return (
            <Layout>
                <div className="dashBoard container">
                    <DashBoardHeader currentBoard={currentBoard}
                                     handleBoard={this.handleBoard}
                                     boards={boards}
                    />

                    <div className="boards">
                        <DragDropContext
                            onDragEnd={this.onDragEnd}
                        >
                            <Column
                                title="backlog"
                                tasks={tasks.backlog}
                                color="linear-gradient(134deg, #c781ff 0%, #e57373 100%)"
                            />
                            <Column
                                title="progress"
                                tasks={tasks.progress}
                                color="linear-gradient(135deg, #ff9784 0%, #ffb74d 100%)"
                            />
                            <Column
                                title="review"
                                tasks={tasks.review}
                                color="linear-gradient(134deg, #9ea7fc 0%, #65b6f7 100%)"
                            />
                            <Column
                                title="complete"
                                tasks={tasks.complete}
                                color="linear-gradient(-45deg, #81d5ee 0%, #7ed492 100%)"
                            />
                        </DragDropContext>
                    </div>

                    <button className="btn-add-task">
                        <img src={plus} alt="Add new tasks"/>
                    </button>
                </div>
            </Layout>
        )
    }
}

export default DashBoard;