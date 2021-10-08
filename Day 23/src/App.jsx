import React from 'react';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import './styles/App.css';

function App(){
    return(
        <div className="container">
        <div className="App">
           <DocTitleOne/>
           <DocTitleTwo/>
        </div>
        </div>
    );
}

export default App;