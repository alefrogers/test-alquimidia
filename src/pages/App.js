import React, { useState, useEffect } from 'react';

import logo from '../assets/svgs/logo-alquimidia.svg';
import Form from '../components/Form';
import List from '../components/List';


function App() {
  const [records, setRecords] = useState([]);

  const saveRecord = (newRecord) => {
    let data = [...records];
    data.push(newRecord);
    setRecords(data);
    localStorage.setItem('records', JSON.stringify(data));
    
  }

  const removeRecord = (index) => {
    let data = [...records];
    data.splice(index, 1);
    setRecords(data);
    localStorage.setItem('records', JSON.stringify(data));
  };

  useEffect(() => {
    let records = JSON.parse(localStorage.getItem("records"));
    setRecords(records ?? []);
  }, []);

  return (
    <div className="App bg-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <header className="row mb-5">
              <div className="col-12">
                <div className="row logo">
                  <div className="offset-4 col-4 pt-5 pb-5">
                    <img src={logo} className="App-logo w-100" alt="logo" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-center">
                    <h1>Teste Alquimidia</h1>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 text-center">
                    <p className="lead">Projeto de teste para processo seletivo. Simples cadastro de clientes sem banco de dados com busca automática de CEP.</p>
                  </div>
                </div>
              </div>
            </header>

            <section className="content">
              <div className="row">
                <div className="formulario col-12 col-lg-5">
                <h3 className="mb-4">Formulário</h3>
                  <Form saveRecord={saveRecord}/>
                </div>
                <div className="lista-salvos offset-0 offset-lg-1 col-12 col-lg">
                  <h3 className="mb-4">Listagem</h3>
                  <List records={records} removeRecord={removeRecord} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
