

function item (record, index, removeRecord){
    return (
        <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{record.nome}</td>
                        <td>{record.cpf}</td>
                        <td>{record.endereco}</td>
                        <td><button onClick={() => removeRecord(index)} className="btn btn-danger">Excluir</button></td>
        </tr>
    )
}


function List (props) {
    return (
        <>
            <div className="row">
                <div className="col">

                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.records.map((record, index) => {
                                return item(record, index, props.removeRecord)
                            })
                        }
                    </tbody>
                    </table>
                    
                </div>
            </div>
        </>
    )
}

export default List;