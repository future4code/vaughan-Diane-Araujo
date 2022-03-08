import React from "react";

export class Header extends React.Component {


    render() {
        return (
            <div>
                <H1>LabeNinjas</H1>
                <button onClick={this.props.goToHome}>Home</button>
                <button onClick={this.props.goToCart}>Carrinho</button>
            </div>
        );
    }
}
