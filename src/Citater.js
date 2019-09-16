import React from 'react';



const Citater = ({ Citater, deleteCitate }) => {


    const CitateList = Citater.map(Citate => {
        return (
            <div className="container">
                <div classtitle="Citate" key={Citate.id}>
                    <div className="font-weight-bold pt-5 text-center">{Citate.title} </div>
                    <div className="text-center">{Citate.text}</div>
                    <div className="text-center">{Citate.author}</div>
                    <div className="text-center">
                        <button className="btn btn-primary mt-3" onClick={() => { deleteCitate(Citate.id) }} >Delete</button>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <div classtitle="Citate-List">
            {CitateList}
        </div>
    )
}


export default Citater;
