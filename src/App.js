import './App.css';
import Question from './Question';
import Text from './Text';
import QuestionVectors from './Weights.js'

function App() {
  return (
    <div className='page-container'>
      <h2>
        Personality Survey of MAHE (2023)
      </h2>
      <h3>
        About:
      </h3>
      <p style={{fontSize:"medium"}}>
        This is a personality survey conducted by me, spicybeanos(on github).<br/>
        This survey is based on the 16 personality quiz. <br/>
        I wanted to know the general populace' mbti type and how many of each are there <br/>
        This project is just for fun :)
        <br/>
      </p>
      <br />
      <ReanderQuestions />
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
