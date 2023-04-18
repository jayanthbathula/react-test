import React, { useState, useEffect} from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    // get cards list
    const data = fetch('https://jsonplaceholder.typicode.com/users');
    data.then(res => res.json())
    .then(result => {
      setCardList(result)
    })
  }, [])

  function getCardsList() {
    return cardList.map((card: any) => {
      return <Card key={card.id} data={card} />
    })
  }

  return (  
    <div className="App">
      {cardList && cardList.length ? getCardsList() : null}
    </div>
  );
}

export default App;
