import React, { useState, Fragment } from 'react';
import StoreProvider from './store/provider';
import StoreContext from './store/context';
import TimePicker from './components/timePicker';
import './App.scss';


const InputComp = () => {
    return (
        <StoreContext.Consumer>
            {context => (
                <Fragment>
                    {context.data.map((x, i) => {
                        return (
                            <div className="box">
                                <TimePicker />
                                <input
                                    className="ml10"
                                    name="lastName"
                                    placeholder="Enter Last Name"
                                    value={x.lastName}
                                    onChange={e => context.handleInputChange(e, i)}
                                />
                                <div className="btn-box">
                                    {context.data.length !== 1 && <button
                                        className="mr10"
                                        onClick={() => context.handleRemoveClick(i)}>Remove</button>}
                                    {context.data.length - 1 === i && <button onClick={context.handleAddClick}>Add</button>}
                                </div>
                            </div>
                        );
                    })}
                </Fragment>
            )}
        </StoreContext.Consumer>
    );
}

const OutputComp = () => {
    return (
        <StoreContext.Consumer>
            {context => (
                <Fragment>
                    <div style={{ marginTop: 20 }}>
                        {JSON.stringify(context.data)}
                    </div>
                </Fragment>
            )}
        </StoreContext.Consumer>
    );
}

const App = () => {
    return (
        <StoreProvider>
            <div className="main-container">
                <div className="form-side">
                    <h3 className="form-side--title">Event Creator Form</h3>
                    <InputComp />
                </div>
                <div className="output-side">
                    <OutputComp />
                </div>
            </div>
        </StoreProvider>
    );
}

export default App;