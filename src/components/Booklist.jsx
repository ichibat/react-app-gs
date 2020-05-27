import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Booklist = props => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props])
  return (
    <div>
      <ul>
        {
          bookData === null
            ? <p>now loading...</p>
        : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.title}{' '}{x.volumeInfo.authors}<br></br><img src={ x.volumeInfo.readingModes.image ? x.volumeInfo.imageLinks.thumbnail : 'no-image' } /></li>)
        }
      </ul>
    </div>
  );
}

export default Booklist;