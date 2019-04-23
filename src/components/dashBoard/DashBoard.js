import React from 'react';
import Layout from '../Layout';
import DashBoardHeader from "./DashBoardHeader";
import Board from './Board';
import plus from '../../images/plus_icon.svg';

const arr = [
    {
        id: 0,
        status: 'backlog',
        text: 'Company website redesign.',
        priority: 'low',
        user: 0
    },
    {
        id: 1,
        status: 'progress',
        text: 'Research and strategy for upcoming projects.',
        priority: 'high',
        user: 0
    },
    {
        id: 2,
        status: 'review',
        text: 'Dashboard layout design.',
        priority: 'med',
        user: 0
    },
    {
        id: 3,
        status: 'complete',
        text: 'Review client spec document and give feedback.',
        priority: 'low',
        user: 0
    },
    {
        id: 4,
        status: 'backlog',
        text: 'Mobile app login process prototype.',
        priority: 'med',
        user: 0
    },
    {
        id: 5,
        status: 'backlog',
        text: 'Onboarding designs.',
        priority: 'high',
        user: 0
    },
    {
        id: 6,
        status: 'progress',
        text: 'Account profile flow diagrams.',
        priority: 'med',
        user: 0
    },
    {
        id: 7,
        status: 'progress',
        text: 'Slide templates for client pitch project.',
        priority: 'low',
        user: 0
    },
    {
        id: 8,
        status: 'progress',
        text: 'Review administator console designs.',
        priority: 'low',
        user: 0
    },
    {
        id: 9,
        status: 'review',
        text: 'Social media posts.',
        priority: 'high',
        user: 0
    },
    {
        id: 10,
        status: 'review',
        text: 'Shopping cart and product catalog wireframes.',
        priority: 'low',
        user: 0
    },
    {
        id: 11,
        status: 'review',
        text: 'End user flow charts.',
        priority: 'med',
        user: 0
    },
    {
        id: 12,
        status: 'complete',
        text: 'Navigation designs.',
        priority: 'med',
        user: 0
    },
    {
        id: 13,
        status: 'complete',
        text: 'User profile prototypes.',
        priority: 'high',
        user: 0
    },
    {
        id: 14,
        status: 'complete',
        text: 'Create style guide based on previous feedback.',
        priority: 'high',
        user: 0
    }
];


const DashBoard = () => {
    return (
        <Layout>
            <div className="dashBoard container">
                <DashBoardHeader/>
                <div className="boards">
                    <Board
                        title = "Backlog"
                        tasks = {arr.filter(task => task.status === 'backlog')}
                        color = "linear-gradient(134deg, #c781ff 0%, #e57373 100%)"
                    />
                    <Board
                        title = "Progress"
                        tasks = {arr.filter(task => task.status === 'progress')}
                        color = "linear-gradient(135deg, #ff9784 0%, #ffb74d 100%)"
                    />
                    <Board
                        title = "Review"
                        tasks = {arr.filter(task => task.status === 'review')}
                        color = "linear-gradient(134deg, #9ea7fc 0%, #65b6f7 100%)"
                    />
                    <Board
                        title = "Complete"
                        tasks = {arr.filter(task => task.status === 'complete')}
                        color = "linear-gradient(-45deg, #81d5ee 0%, #7ed492 100%)"
                    />
                </div>

                <button className="btn-add-task">
                    <img src={plus} alt="Add new tasks"/>
                </button>
            </div>
        </Layout>
    );
};

export default DashBoard;