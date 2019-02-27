import React, { Component } from 'react';
import './App.css';
import ExcursionListPage from "./components/ExcursionListPage";

class App extends Component {
  getExcursionList = () => {
    const result = [];
    let lastId = 0;
    result.push({ id: ++lastId, title: "Svartedalen Bottenstugan", date: "2018-12-12", distance: 7.0 });
    result.push({ id: ++lastId, title: "Bohusleden etapp 5",  date: "2019-02-05", distance: 11.5 });
    result.push({ id: ++lastId, title: "Vättlefjäll i snö",   date: "2019-02-02", distance: 7.8 });
    result.push({ id: ++lastId, title: "Runt Stora Kåsjön mm",date: "2019-02-16", distance: 10.4 });
    result.push({ id: ++lastId, title: "Änggårdsbergen",      date: "2019-02-20", distance: 7.2 });
    result.push({ id: ++lastId, title: "Verleskogen",         date: "2019-02-24", distance: 5.6 });
    return result;
  }

  render() {

    return (
      <div className="App">
        <ExcursionListPage excursions={this.getExcursionList()}/>
      </div>
    );
  }
}

export default App;
