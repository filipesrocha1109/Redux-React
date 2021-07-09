import React from 'react';
import { connect } from 'react-redux';

import Card from './card';

const Soma = (props) => {

    const { min, max } = props

    
    return(
        <>
            <Card blue
                title="Soma de números"
            >
                <div>
                    <span>Resultado: </span>
                    <strong>{ min + max }</strong>

                </div>
            </Card>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        min : state.numeros.min,
        max : state.numeros.max
    }
}

export default connect(mapStateToProps)(Soma)