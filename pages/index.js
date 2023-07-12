import { useState } from 'react';
import { Button } from 'react-bootstrap';
import getJoke from '../api/jokeData';
import JokeGen from '../components/jokeGen';

export default function Home() {
  const [jokeBtn, setJokeBtn] = useState('Get a Joke');
  const [joke, setJoke] = useState({});

  const setBtn = (text) => {
    setJokeBtn(text);
  };

  const getNewJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        jokeLine: obj.setup,
        punchline: obj.response,
      });

      setBtn('Get Punchline');
    });
  };

  return (
    <>
      <JokeGen joke={joke} jokeBtn={jokeBtn} />
      {jokeBtn === 'Get A Joke' || jokeBtn === 'Get New Joke' ? (
        <Button type="button" onClick={getNewJoke}>
          {jokeBtn}
        </Button>
      ) : (
        <Button type="button" onClick={() => setBtn('Get A Joke')}>
          {jokeBtn}
        </Button>
      )}
    </>
  );
}

// first two lines of Home() defines the arrays that need to be destrcutured to enable passing a state on to them
// useState is used because both the joke and the button will change over the course of the application use as the user generates the new joke, the joke delivery and again with a new joke.
// setBtn function has text parameter and this function enables the joke button to render the button's label- in this case we'll be rendering the button 2 ways - one to say get punchline and the other to say get new joke
// getNewJoke is the promise function that fetches the api data. getJoke is the function from jokeData that we are passing objects through - the objects being the joke line and the punchline
// once the promise is fetched, we call back the setBtn function and get it to render get punchline as the joke line would have already been rendered to the dom as the default
// the return statement imports the JokeGen component, and takes the props defined and assigns it the objects under JokeGen.propTypes
// lines 28 to 35 renders our joke button component
// the ternary operator is saying if jokeBtn triple equals to get a joke string OR if jokeBtn triple equals get new joke string return a button component that when clicked will run the getNewJoke API call
// if not, set the default of the button just get a joke
