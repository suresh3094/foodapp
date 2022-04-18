//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Routes from './components/routes/routes';

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <div className="App">
      <div>
        <Routes/>
      </div>
    </div> 
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
