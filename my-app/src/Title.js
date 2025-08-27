import React, { useState } from 'react';

function Title() {
  const [title, setTitle] = useState('Título Simples');
  const [clickCount, setClickCount] = useState(0);

  const handleTitleClick = () => {
    setTitle('Título Modificado');
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <h1 onClick={handleTitleClick}>{title}</h1>
      <p>Contagem de Cliques: {clickCount}</p>
    </div>
  );
}

export default Title;
