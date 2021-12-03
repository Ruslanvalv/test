import React from 'react';
import Styled from 'styled-components';

const Img = Styled.img` 
max-width:300px;
max-height:250px`;
const Div = Styled.div`
max-width:300px;
display:flex;
justify-content:center;
`;

function Cat({ imageUrl, loading }) {
  return !loading ? (
    <Div>
      <Img src={imageUrl} alt="cat" />
    </Div>
  ) : (
    'Загрузка'
  );
}

export default Cat;
