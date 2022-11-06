import { Navbar, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const ExampleSharedLayout = () => {
  return (
    <>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand>THIS IS A SHARED LAYOUT</Navbar.Brand>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default ExampleSharedLayout;
