import React from 'react';
import { connect } from 'react-redux'

import Card from './card';

const Media = (props) => {
     const { min, max } = props
    
    return(
        <>
            <Card green
                title="Média de números"
            >
                <div>
                    <span>Resultado: </span>
                    <strong>{ (min + max) / 2}</strong>

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

export default connect(mapStateToProps)(Media)