import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ExampleHomePage from './pages/example/ExampleHomePage';
import ExampleNotFoundPage from './pages/example/ExampleNotFoundPage';
import Menu from './components/Menu';
import CartPage from './pages/Cart';
import OrderContolPage from './pages/OrderControl'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<ExampleHomePage />} />
            <Route path='cart' element={<CartPage />} />
            {/* add page here if you want the shared layout*/}
          </Route>
          {/* add page here if you don't want the shared layout*/}

          {/* !!not found page must be placed at the very end!!*/}
          <Route path='*' element={<ExampleNotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
