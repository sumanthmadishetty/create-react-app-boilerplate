import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ArtistCard } from "./card";
import { useTranslation, withTranslation } from "react-i18next";
import asd from "./testHoc";

const { t, i18n } = useTranslation();
function MyComponent() {
  const { t, i18n } = useTranslation();
  return <h1>{t("asd")}</h1>;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: ""
    };
  }

  handleChangeRate = state => {
    this.setState({ rate: state });
  };

  render() {
    debugger;
    console.log(t);
    return (
      <div className="App">
        <p>HALlALOOOOYAAAHHH</p>
      </div>
    );
  }
}

export default App;
