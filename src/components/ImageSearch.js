import React, { useState } from 'react';

export default function ImageSearch({ searchText }) {
  const [text, setText] = useState('');
  
  function onSubmit(e) {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className="max-w-xs overflow-hidden rounded my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input onChange={e => setText(e.target.value)} type="text" placeholder="Input Search Terms Here..." className="
          appearance-none w-full text-gray-700 py-1 px-2 
          leading-tight focus:outline-none"/>
          <button className="shrink-0 bg-teal-500 hover:bg-teal-700 
          border-teal-500 hover:border-teal-700 text-sm border-4
          text-white py-1 px-3 rounded" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  )
};