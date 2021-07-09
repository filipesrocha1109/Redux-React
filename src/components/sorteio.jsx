import React from 'react';
import  { connect } from 'react-redux';

import Card from './card';

const Sorteio = (props) => {
    const { min, max } = props
    
    return(
        <>
            <Card purple
                title="Sorteio de números"
            >
                <div>
                    <span>Resultado: </span>
                    <strong>{Math.floor(Math.random() * (max - min + 1) + min)}</strong>

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

export default connect(mapStateToProps)(Sorteio)