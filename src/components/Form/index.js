import React, { useState } from 'react';

const initData = {
  'nome'        : '',
  'identidade'  : '',
  'cpf'         : '',
  'email'       : '',
  'cep'         : '',
  'endereco'    : '',
  'logradouro'  : '',
  'numero'      : '',
  'complemento' : '',
  'bairro'      : '',
  'cidade'      : '',
  'estado'      : '',
  'pais'        : ''
};

function _findCep (data, error, setData, setSearchCep, setError) {

  fetch("https://viacep.com.br/ws/"+ data.cep +"/json/")
      .then((res) => res.json())
      .then((response) => {
        let auxData = {...data};
        auxData.bairro = response.bairro;
        auxData.estado = response.uf;
        auxData.cidade = response.localidade;
        auxData.logradouro = response.logradouro;
        auxData.pais = 'Brasil';
        auxData.endereco = response.logradouro + ' - ' + response.bairro + ', ' + response.localidade + ', ' + response.uf;
        if (error.cep) {
          let auxError = {...error};
          delete auxError.cep;
          setError(auxError);
        }
        setData(auxData);
        setSearchCep(true);
      })
      .catch((errorResponse) => {
        let auxError = {...error};
        auxError.cep = 'Cep inválido';
        setError(auxError);
      });
}

function _setDataForm(value, index, data, setData) {
  let dataAux = {...data};
  dataAux[index] = value;

  setData(dataAux);
}

function _filterData(data, setData, setError, setSearchCep, saveRecord) {
  
  let error = {};
  
  if (data.nome.length < 1) {
    error.nome = "Nome é um campo obrigatório.";
  }

  if (data.cpf.length < 1) {
    error.cpf = "CPF é um campo obrigatório.";
  }

  if (data.email.length < 1) {
    error.email = "E-mail é um campo obrigatório.";
  }

  if (data.logradouro.length < 1) {
    error.logradouro = "Logradouro é um campo obrigatório.";
  }

  if (data.numero.length < 1) {
    error.numero = "Número é um campo obrigatório.";
  }

  if (data.bairro.length < 1) {
    error.bairro = "Bairro é um campo obrigatório.";
  }

  if (Object.keys(error).length > 0) {
    setError(error);
  } else {
    setData(initData);

    setError({});

    setSearchCep(0);

    saveRecord(data);
  }

}

function Form(props) {
  const [searchCep, setSearchCep]   = useState(false);
  const [error, setError] = useState({});
  const [data, setData] = useState(initData);

  return (
      <section id="form-component">
          <div className="row mb-4">
              <div className="col">
                <label htmlFor="nome" className="w-100 text-start">Nome</label>
                <input 
                  type="text" 
                  className={`form-control w-100 ${error.nome ? "is-invalid" : ""} `}
                  name="nome" 
                  required
                  value={data.nome}
                  onChange={e => { 
                    _setDataForm(e.target.value, 'nome', data, setData);
                  }}
                />
                <div className="invalid-feedback text-start">
                  {error.nome}
                </div>
              </div>

              <div className="col">
                <label htmlFor="identidade" className="w-100 text-start">Identidade</label>
                <input 
                  type="text" 
                  className={`form-control w-100 ${error.identidade ? "is-invalid" : ""} `}
                  name="identidade"
                  value={data.identidade}
                  onChange={e => { 
                    _setDataForm(e.target.value, 'identidade', data, setData);
                  }}
                />
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <label htmlFor="cpf" className="w-100 text-start">CPF</label>
                <input 
                  type="text" 
                  className={`form-control w-100 ${error.cpf ? "is-invalid" : ""} `}
                  name="cpf"
                  value={data.cpf}
                  required
                  onChange={e => { 
                    _setDataForm(e.target.value, 'cpf', data, setData);
                  }}
                />
                <div className="invalid-feedback text-start">
                  {error.cpf}
                </div>
              </div>

              <div className="col">
                <label htmlFor="email" className="w-100 text-start">E-mail</label>
                <input 
                  type="email" 
                  className={`form-control w-100 ${error.email ? "is-invalid" : ""} `}
                  name="email"
                  value={data.email}
                  required
                  onChange={e => { 
                    _setDataForm(e.target.value, 'email', data, setData);
                  }}
                />
                <div className="invalid-feedback text-start">
                  {error.email}
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className={`col`}>
                <label htmlFor="cep" className="w-100 text-start">CEP</label>
                <input 
                  type="text" 
                  className={`form-control w-100 ${error.cep ? 'is-invalid' : ''}`}
                  value={data.cep}
                  name="cep"
                  onChange={e => { 
                    _setDataForm(e.target.value, 'cep', data, setData);
                  }}
                />
                <div className="invalid-feedback text-start">
                  {error.cep}
                </div>
              </div>

              <div className="col text-start mt-4">
                  <button onClick={() => _findCep(data, error, setData, setSearchCep, setError)} className="btn btn-secondary w-100">Pesquisar</button>
              </div>
            </div>

            <div className={`endereco ${!searchCep ? 'd-none' : ''}`}>
              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="endereco" className="w-100 text-start">Endereço</label>
                  <input 
                    type="text" 
                    className={`form-control w-100 ${error.endereco ? "is-invalid" : ""} `}
                    name="endereco" 
                    value={data.endereco}
                    required
                    onChange={e => { 
                      _setDataForm(e.target.value, 'endereco', data, setData);
                    }}
                  />
                  <div className="invalid-feedback text-start">
                    {error.endereco}
                  </div>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="logradouro" className="w-100 text-start">Logradouro</label>
                  <input 
                    type="text" 
                    className={`form-control w-100 ${error.logradouro ? "is-invalid" : ""} `} 
                    name="logradouro"
                    value={data.logradouro}
                    onChange={e => { 
                      _setDataForm(e.target.value, 'logradouro', data, setData);
                    }}
                    required
                  />
                  <div className="invalid-feedback text-start">
                    {error.logradouro}
                  </div>
                </div>

                <div className="col-3">
                  <label htmlFor="numero" className="w-100 text-start">Número</label>
                  <input 
                    type="numeric" 
                    className={`form-control w-100 ${error.numero ? "is-invalid" : ""} `}
                    name="numero"
                    value={data.numero}
                    onChange={e => { 
                      _setDataForm(e.target.value, 'numero', data, setData);
                    }}
                    required
                  />
                  <div className="invalid-feedback text-start">
                    {error.numero}
                  </div>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="complemento" className="w-100 text-start">Complemento</label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="complemento"
                    onChange={e => { 
                      _setDataForm(e.target.value, 'complemento', data, setData);
                    }}
                  />
                </div>
              </div>

              <div className="row mb-2">
                <div className="col">
                  <label htmlFor="bairro" className="w-100 text-start">Bairro</label>
                  <input 
                    type="text" 
                    className={`form-control w-100 ${error.bairro ? "is-invalid" : ""} `} 
                    name="bairro"
                    value={data.bairro}
                    required
                    onChange={e => { 
                      _setDataForm(e.target.value, 'bairro', data, setData);
                    }}
                  />
                  <div className="invalid-feedback text-start">
                    {error.bairro}
                  </div>
                </div>

                <div className="col">
                  <label htmlFor="cidade" className="w-100 text-start">Cidade</label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="cidade" 
                    value={data.cidade} 
                    disabled
                  />
                </div>
              </div>

              <div className="row mb-4">
                <div className="col">
                  <label htmlFor="estado" className="w-100 text-start">Estado</label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="estado"
                    value={data.estado}  
                    disabled/>
                </div>

                <div className="col">
                  <label htmlFor="pais" className="w-100 text-start">País</label>
                  <input 
                    type="text" 
                    className="form-control w-100" 
                    name="pais"
                    value={data.pais}  
                    disabled/>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="offset-9 col-3">
                <button 
                  className="btn btn-success w-100" 
                  disabled={!searchCep ? 'disabled' : false}
                  onClick={() => _filterData(data, setData, setError, setSearchCep, props.saveRecord)}
                >
                  Salvar
                </button>
              </div>
            </div>
      </section>
  )
}

export default Form;