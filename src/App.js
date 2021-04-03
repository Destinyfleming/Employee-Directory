import React from 'react';
import SearchBar from './componets/Search-Bar'
import ContainerRows from './componets/Container'

function App() {
  return (
    <div >
      <h1>
      Employee Directory
      </h1>
      <p>
        Below is a list of your employees! Use the search bar to find them by name.
      </p>
      <SearchBar/>
      <ContainerRows/>
    </div>
  );
}

export default App;
