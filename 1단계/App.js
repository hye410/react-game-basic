import Button from './Button';
import Dics from './Dics';

function App(){
  return(
    <div>
      <div>
        <Button>start</Button>
        <Button>reset</Button>
      </div>
      <Dics 
      color="blue"
      num="4"
      />
    </div>
  );
}

export default App;