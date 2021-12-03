import React from 'react';
import Styled from 'styled-components';
const Btn = Styled.button` 
width: 300px;
height: 35px;
margin-bottom:20px;
 `;

function Button({ onClickBtn }) {
  return (
    <div>
      <Btn onClick={onClickBtn}>Get cat</Btn>
    </div>
  );
}

export default Button;
