import './App.css';
import Question from './Question';
import Vector5 from './Weights.js'
import QuestionVectors from './Weights.js'

function App() {
  return (
    <div className='page-container'>
      <h2>
        Personality Survey (2023)
      </h2>
      <br />
      <ReanderQuestions/>
    </div>
  );
}
const listQs = QuestionVectors.map(qs =>
  <Question content={qs.text} id={qs.id} />
);
function ReanderQuestions() {
  return (
    <div>
      {listQs}
    </div>
  );
}



export default App;
