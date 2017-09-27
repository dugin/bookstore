import React, {Component} from 'react';


class QuantityButtons extends Component {

    constructor(props) {
        super(props);

        this.state = {quantity: 1};
    }

    onAdd = () => {
        this.setState(state => state.quantity++);
        this.props.onAddOrRemove(this.state.quantity)
    };

    onRemove = () => {
        this.setState(state => state.quantity > 1 ? state.quantity-- : 1);

        this.props.onAddOrRemove(this.state.quantity)
    };

    render() {
        return (
            <div className="Book__actions__quantityContainer">
                <button onClick={this.onRemove} className="Book__actions__quantityContainer__minus"><i
                    className="material-icons">remove</i>
                </button>

                <span className="Book__actions__quantityContainer__quantity"> {this.state.quantity} </span>

                <button onClick={this.onAdd} className="Book__actions__quantityContainer__plus "><i
                    className="material-icons">add</i>
                </button>
            </div>
        )
    }
}

export default QuantityButtons;