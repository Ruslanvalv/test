import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

import Cat from './components/Cat';
import Choise from './components/Choise';
import Button from './components/Button';

const BASE_URL = 'https://api.thecatapi.com/v1/';

const Main = Styled.div`
margin: 10px 5px;`;

function App() {
  const [selectedCheckbox, setSelectedCheckbox] = useState(false);
  const [isRefreshingActive, setRefreshingActive] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [timer, setTimer] = useState('');
  const [loading, setLoading] = useState(false);

  async function getImageUrl() {
    try {
      setLoading(true);

      const response = await axios.get(`${BASE_URL}images/search`);

      if (response) {
        setImageUrl(response.data[0].url);
      }

      setLoading(false);
    } catch (e) {
      alert('Произошла ошибка, обновите страницу..');
    }
  }

  useEffect(() => {
    getImageUrl();
  }, []);

  const onClickBtn = () => {
    if (selectedCheckbox === 'CHECKBOX_TYPE_REFRESH' && !isRefreshingActive) {
      setRefreshingActive(true);

      setTimer(
        setInterval(function () {
          getImageUrl();
        }, 5000),
      );
    } else if (selectedCheckbox === 'CHECKBOX_TYPE_ENABLED') {
      setRefreshingActive(false);
      clearInterval(timer);
    }
  };

  const updateFunc = (data) => {
    setSelectedCheckbox(data);
  };

  return (
    <Main>
      <Choise update={updateFunc} />
      <Button onClickBtn={onClickBtn} />
      <Cat loading={loading} imageUrl={imageUrl} />
    </Main>
  );
}

export default App;
