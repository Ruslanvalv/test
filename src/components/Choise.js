import React, { useState } from 'react';
import Styled from 'styled-components';

const Variant = Styled.div`margin-bottom:15px;`;
const Checkbox = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 0 auto;
 `;

function Choise({ update }) {
  const [checked, setChecked] = useState('CHECKBOX_TYPE_ENABLED');

  const changeValue = (event) => {
    setChecked(event.target.value);
    update(event.target.value);
  };

  return (
    <Checkbox>
      <Variant>
        <input
          type="checkbox"
          value="CHECKBOX_TYPE_ENABLED"
          checked={checked === 'CHECKBOX_TYPE_ENABLED'}
          onChange={changeValue}
        />
        <span> Enabled</span>
      </Variant>
      <Variant>
        <input
          type="checkbox"
          value="CHECKBOX_TYPE_REFRESH"
          checked={checked === 'CHECKBOX_TYPE_REFRESH'}
          onChange={changeValue}
        />
        <span> Auto-refresh every 5 seconds</span>
      </Variant>
    </Checkbox>
  );
}

export default Choise;
