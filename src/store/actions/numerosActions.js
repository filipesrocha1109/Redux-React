
// Action Creator
export const alterarNumeroMinino = (novoNumero) =>{
    return{
        type : "NUM_MIN_ALTERADO",
        payload : novoNumero
    }
} 

// Action Creator
export const alterarNumeroMaximo = (novoNumero) =>{
    return{
        type : "NUM_MAX_ALTERADO",
        payload : novoNumero
    }
} 