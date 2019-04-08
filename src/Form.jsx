import React from 'react'

export default class Form extends React.Component{
    render(){
        const {handleSubmit, handleChange} = this.props
        return(
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange('comment')} className="form-control mb-2" type="text" planceholder="Comenta tu estado!"></input>
                    <button className="btn btn-success">Comentar</button>
                </form>
            </div>
        )
    }
}