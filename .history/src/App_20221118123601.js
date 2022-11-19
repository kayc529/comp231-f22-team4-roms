import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ExampleHomePage from './pages/example/ExampleHomePage';
import ExampleHomePage2 from './pages/example/ExampleHomePage2';
import ExampleSharedLayout from './pages/example/ExampleSharedLayout';
import ExampleAnotherPage from './pages/example/ExampleAnotherPage';
import ExampleNotFoundPage from './pages/example/ExampleNotFoundPage';

import OrderOnlinePage from './pages/example/OrderOnlinePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExampleSharedLayout />}>
            <Route index element={<ExampleHomePage />} />
            <Route path='/home2' element={<ExampleHomePage2 />} />
            <Route path='another' element={<ExampleAnotherPage />} />
          </Route>
          {/* add page here if you don't want the shared layout*/}
          <Route path='order' element={<OrderOnlinePage />} /> 

          {/* !!not found page must be placed at the very end!!*/}
          <Route path='*' element={<ExampleNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
