import React, { Component } from 'react';
import logo from './logo.svg';
import Particle from "./Particle";
import HeroHeader from "./HeroHeader";
import Scene from "./Scene";
import CentralizedWorkflowPresentation from "./CentralizedWorkflowPresentation";
import ProductOrientedPresentation from "./ProductOrientedPresentation";
import MultiPlateformDevPresentation from "./MultiPlateformDevPresentation";
import ContinousDevelopmentPresentation from "./ContinousDevelopmentPresentation";
import NewsLetterForm from "./NewsLetterForm";
import CuttingEdgeToolingPresentation from "./CuttingEdgeToolingPresentation";
import PluginsPresentation from "./PluginsPresentation";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Scene>
          <Particle jsonPath="particlesjs-config(2).json"/>
          <HeroHeader/>
          <div className="App-header">
            <img src={require('../public/atom-logo.png')} className="App-logo" alt="logo" />
            <h2>Based on Atom</h2>
          </div>
        </Scene>
        <Scene>
          <ContinousDevelopmentPresentation/>
        </Scene>
        <Scene>
          <ProductOrientedPresentation/>
        </Scene>
        <Scene>
          <CentralizedWorkflowPresentation/>
        </Scene>
        <Scene>
          <MultiPlateformDevPresentation/>
        </Scene>
        <Scene>
          <CuttingEdgeToolingPresentation/>
        </Scene>
        <Scene>
          <NewsLetterForm/>
        </Scene>
        <Scene>
          <PluginsPresentation/>
        </Scene>
        <p className="App-intro">
          To get started: apm install molecule
        </p>
      </div>
    );
  }
}

export default App;
