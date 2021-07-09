import React from 'react';
import  { connect } from 'react-redux';


import './intervalo.css';
import Card from './card';
import { alterarNumeroMaximo, alterarNumeroMinino } from '../store/actions/numerosActions'

const Intervalo = (props) => {
    const { min,max } = props
    
    return(
        <>
            <Card red
                title="Intervalo de números"
            >
                <div className="intervalo">
                    <span>
                        Minímo
                    </span>
                    <input type="number" value={min} 
                        onChange={e => props.alterarMinimo(+e.target.value)}
                    />
                    <span>
                        Maxímo
                    </span>
                    <input type="number" value={max}                    
                        onChange={e => props.alterarMaximo(+e.target.value)}
                    />
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

const mapDispatchToProps = (dispatch) =>{
    return{
        alterarMinimo(numeronovo){
            const action = alterarNumeroMinino(numeronovo)
            dispatch(action)
        },
        alterarMaximo(numeronovo){
            const action = alterarNumeroMaximo(numeronovo)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps   
)(Intervalo)