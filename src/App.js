import React, {useState} from 'react';
import Intro from "./components/Intro";
import {Header} from "./components/Header";
import Services from "./components/Sevices";
import Company from "./components/Company";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

const PAGES = {
    Main: 'main',
    Form: 'form',
    Services: 'services',
    Company: 'company',
    Contacts: 'contacts'
}
function App() {
    const [currentPage, setCurrentPage] = useState(PAGES.Main);

    const introObserver = new IntersectionObserver(()=>setCurrentPage(PAGES.Main), {threshold: 0.5});
    const servicesObserver = new IntersectionObserver(()=>setCurrentPage(PAGES.Services), {threshold: 0.5});
    const companyObserver = new IntersectionObserver(()=>setCurrentPage(PAGES.Company), {threshold: 0.5});
    const contactsObserver = new IntersectionObserver(()=>setCurrentPage(PAGES.Contacts), {threshold: 0.5});

  return (<>
        <Header />
        <Intro />
        <Services />
        <Company />
        <Contacts />
        <Form />
      </>
  );
}

export default App;
