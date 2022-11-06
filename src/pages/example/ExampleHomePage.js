import { useEffect, useState } from 'react';
import { Form, Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getUniversityList } from '../../features/example/exampleSlice';
import ExampleComponent from '../../components/ExampleComponent';
import Spinner from 'react-bootstrap/Spinner';
import ExampleBox from '../../components/ExampleBox';
import { toggleSwitch } from '../../features/example/exampleSlice';

const ExampleHomePage = () => {
  //whenever the value of a state is changed, the DOM will re-render
  //hence the new value will be shown in the page
  const [countryName, setCountryName] = useState('');

  //you can get the states from the reducers you included in the store
  //same as local state, DOM will re-render when these states are changed
  const { isLoading, exampleList, isSwitchOn } = useSelector(
    (state) => state.example
  );

  //dispatch must be used when you want to carry out an action inside a reducer
  const dispatch = useDispatch();

  //if the bracket is empty, the function will be triggered when the component is FIRST loaded
  useEffect(() => {
    alert('First time in the Home page');
  }, []);

  //if the variables inside the bracket changed, the function will be triggered
  useEffect(() => {
    if (isSwitchOn) {
      alert('The switch is on');
    }
  }, [isSwitchOn]);

  const onCountryChanged = (e) => {
    //get the value inside the input field
    setCountryName(e.target.value);
  };

  const callAPI = () => {
    if (countryName.length === 0) {
      return;
    }
    //dispatch the get univerity list action
    dispatch(getUniversityList(countryName));
  };

  const onBoxClicked = () => {
    //dispatch the toggle switch action
    dispatch(toggleSwitch());
  };

  return (
    <Stack gap={3} style={{ width: '500px' }}>
      <h2>Example Home Page</h2>
      {/*useState example */}
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>Country: </Form.Label>
          <Form.Control
            placeholder='enter a country'
            value={countryName}
            onChange={onCountryChanged} //this is called referencing a function
            //or you can lambda function i.e.  onChange={(e) => onCountryChanged(e)}
          />
        </Form.Group>
      </Form>
      <p>You are searching for universities in this country: {countryName}</p>
      <ExampleBox onClick={onBoxClicked} />
      {/*Call API and useSelector example */}
      <button onClick={callAPI}>Search for universities</button>
      {/* this is the way to loop through the list and create a list of items*/}
      {exampleList?.map((item, index) => {
        //remember to add a key to each component to avoid warning
        return <ExampleComponent key={index} somePropName={item} />;
      })}

      {isLoading && <Spinner animation='border' size='lg' />}
    </Stack>
  );
};

export default ExampleHomePage;
