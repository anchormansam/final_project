import React from 'react';


class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">This is where I could add a fancy quote... but i didnt!</p>
                <hr className="my-4" />
                    <p>This is where i would give credit to the quote</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="Contact" role="button">Contact Me</a>
                    </p>
            </div>
                )
            }
        }
        
        
        
        
export default Jumbotron;