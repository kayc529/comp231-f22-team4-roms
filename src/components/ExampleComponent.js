//you can name the prop whatever you want
//but make you when passing from the upper layer, the prop name matches
const ExampleComponent = ({ somePropName }) => {
  //you have to deconstruct the object depending on the structure
  //you may have to deconstruct two times if the field you want is nested
  const { name, web_pages } = somePropName;

  return (
    <div>
      <h4>{name}</h4>
      <a href={web_pages[0]}>Link</a>
    </div>
  );
};

export default ExampleComponent;
