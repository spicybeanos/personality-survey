import './App.css';
import Question from './Question';
import Text from './Text';
import QuestionVectors from './Weights.js'

function App() {
  return (
    <div>
      <div className='page-container'>
        <h2>
          Personality Survey of MAHE (2023)
        </h2>

        <div className='info'>
          <h3>
            About:
          </h3>
          <div>
            This is a personality survey conducted by me, spicybeanos(on github).<br />
            This survey is based on the 16 personality quiz. <br />
            I wanted to find out the general populace' mbti type and how many of each are there <br />
            This project is just for fun :)
            <br />
          </div>
        </div>

        <br />
        <ReanderQuestions />
      </div>

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
