import './App.css';
import Intervalo from './components/intervalo';
import Media from './components/media';
import Soma from './components/soma';
import Sorteio from './components/sorteio';

function App() {
    return (
        <div className="App">
            <h1>Exercicio Redux (simples) </h1>

            <div className="linha">
                <Intervalo/>
                
      	    </div>

            <div className="linha">
                <Media/>             
                <Soma/>
                <Sorteio/>
      	    
              
            </div>
      
        </div>
    );
}

export default App;
