import React from "react";


export default class Dood extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            favcolor :"Blue"
        }
    }

    componentDidMount()
    {
        setTimeout(
            () =>
                {
                    this.setState({favcolor:"red"})
                },3000
        )
    }

    componentDidUpdate()
    {
        setTimeout(
            () =>
                {
                    this.setState({favcolor:"Yellow"})
                },3000
        )
    }

    componentWillUnmount() {
        alert("test")
        
    }

    render()



    {
        return(
            <>
            <h1> Hello Class {this.state.favcolor}</h1>
            
            </>
        )
    }
}