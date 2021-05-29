import React, {useEffect, useState} from 'react';
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
    const [isModalOpen, setIsModalOpen] = useState(false);

    function useOutside(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsModalOpen(false);
                }
            }
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }


  return (<div>
        <Header currentPage={currentPage} useOutside={useOutside} isMenuOpen={isModalOpen} setIsMenuOpen={setIsModalOpen}/>
        <Intro setCurrentPage={setCurrentPage}/>
        <Services currentPage={currentPage} setCurrentPage={setCurrentPage} useOutside={useOutside} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        <Company currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        <Contacts setCurrentPage={setCurrentPage}/>
        <Form/>
      </div>
  );
}

export default App;
