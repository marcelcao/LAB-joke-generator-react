import React from 'react';
import PropTypes from 'prop-types';

// the following function is the declaration of the joke generator component - passing the parameter joke and the button
// .jokeLine and .punchline are the objects from the joke promise function
// ternary operator - if joke button does not equal the get punchline button then show the joke punchline. if the joke button does equal get punchline, don't show anything
// jokeBtn in this component also enables us to just use one button to render both the Get Punchline button and the Get New Joke button as seen on the return value on index.js
// note that JokeGen has to be capitalized cause that is the react syntax
// also note that the components need to be exported for it to be read

export default function JokeGen({ joke, jokeBtn }) {
  return (
    <>
      <h1>{joke.jokeLine}</h1>
      <p>{jokeBtn !== 'Get Punchline' ? joke.punchline : ''}</p>
    </>
  );
}

// now we're setting up what the joke generator component is to expect which are defined by propTypes//
// .shape method is a way to "shape" or structure the objects within the component //
// joke generator component has 2 sub components, the joke setup and the punch line, which are both strings //
// .isRequired is defined for the proptype because that way, it will prompt a warning when the component is used without passing the props listed ie: setup and punchline//
// same thing on line 26, but this time, we're defining the jokeBtn object a proptype //
// proptypes are kind of like the "components" of your component. by defining them, you are now able to take the objects of your component and link them to the function that enables your component to work. in this case, the propTypes here will be connected to the getNewJoke function in the index page.

JokeGen.propTypes = {
  joke: PropTypes.shape({
    jokeLine: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  jokeBtn: PropTypes.string.isRequired,
};
