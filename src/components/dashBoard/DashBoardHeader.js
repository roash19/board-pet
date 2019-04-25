import React from 'react';
import Avatar from "../Avatar";

class DashBoardHeader extends React.Component {
    state ={
        isOpen: false,
    };

    toggleOpen = () => {
        const isOpen = this.state.isOpen;
        this.setState({isOpen: !isOpen})
    };

    renderBoards = (boards) => {
        return boards.map(board => (
            <li className="boards-list__item" key={board.id}
                onClick={() => {this.props.handleBoard(board); this.toggleOpen()}}>
                {board.name}
            </li>
        ))
    };

    render() {
        const {isOpen} = this.state;
        const {currentBoard, boards} = this.props;
        return (
            <div className="dashBoard-header">
                <div className="select-project" onClick={this.toggleOpen}>
                    <p className="select-project__text">{ currentBoard }</p>
                    <button className="select-project__btn" />

                    {
                       isOpen &&
                       <ul className="boards-list">
                           {this.renderBoards(boards)}
                       </ul>
                    }
                </div>

                <div className="dashBoard-users">
                    <Avatar/>
                    <Avatar/>
                    <Avatar/>
                    <Avatar/>
                </div>
            </div>
        )
    }
}

export default DashBoardHeader;