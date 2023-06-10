import React, {useState} from 'react';
import './App.css';
import {HexColorPicker} from "react-colorful";
import styled from "styled-components";

function App() {
    const [color, setColor] = useState('#111')
    return (
        <div className="App">
            <HexColorPicker className="color-picker" color={color} onChange={setColor}/>
            <DivWithChoseColor color={color}></DivWithChoseColor>
        </div>
    );
}

export default App;



const DivWithChoseColor = styled.div`
  margin: 30px auto;
  width: 600px;
  height: 300px;
  border-radius: 10px;
  background-color: ${props => props.color};

`