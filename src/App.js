import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import React, { useState, useEffect } from 'react';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then((res) => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err))
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => {
        setTerm(text);
        }}/>
      {isLoading ? <h1 className=" text-5xl font-semibold text-center mt-32">
        Loading... Please wait 
      </h1>
      : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;