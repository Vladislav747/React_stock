import React, { Component } from "react";
import { Checkbox, Segment, Card } from "semantic-ui-react";

import "~/css/App.css";
import "~/css/style.css";
import logo from "~/logo.svg";

import currencies from "~/data/cryptocurrencies";
import { Ticker } from "~/components";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedPairs: [],
            currenciesList: currencies,
        };
    }

    handleCheckbox = (currency) => (event) => {
        const { checked } = event.target;
        this.setState(({ selectedPairs }) => {
            let pairs = [...selectedPairs];

            if (checked) {
                pairs.push(currency);
            } else {
                pairs = pairs.filter((pair) => pair !== currency);
            }

            return {
                selectedPairs: pairs,
            };
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Крипто биржа</h1>
                </header>

                <aside>
                    <div className="currencies">
                        <ul className="currList">
                            {this.state.currenciesList.map((curr) => (
                                <li key={curr} className="currItem">
                                    <Segment compact>
                                        <Checkbox
                                            toggle
                                            id={curr}
                                            onChange={this.handleCheckbox(curr)}
                                        ></Checkbox>
                                        <label
                                            className="currenciesLabel"
                                            htmlFor={curr}
                                        >
                                            {curr.toUpperCase()}
                                        </label>
                                    </Segment>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <main>
                    <Card.Group>
                        {this.state.selectedPairs.map((pair, i) => (
                            <Card key={i}>
                                <Ticker
                                    className="currenciesTicker"
                                    key={i}
                                    pair={pair}
                                />
                            </Card>
                        ))}
                    </Card.Group>
                </main>
            </div>
        );
    }
}
