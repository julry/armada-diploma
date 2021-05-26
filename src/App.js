import React, {useState} from 'react';
import Intro from "./components/Intro";
import {Header} from "./components/Header";
import Services from "./components/Sevices";
import Company from "./components/Company";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

export const PAGES = {
    Main: 'main',
    Form: 'form',
    Services: 'services',
    Company: 'company',
    Contacts: 'contacts'
}
function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.Main);
  return (<>
        <Header currentPage={currentPage} />
        <Intro setCurrentPage={setCurrentPage}/>
        <Services setCurrentPage={setCurrentPage}/>
        <Company setCurrentPage={setCurrentPage}/>
        <Contacts setCurrentPage={setCurrentPage}/>
        <Form/>
      </>
  );
}

export default App;
