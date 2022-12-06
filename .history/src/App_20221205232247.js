import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import ExampleHomePage from './pages/example/ExampleHomePage';
import ExampleNotFoundPage from './pages/example/ExampleNotFoundPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import SignOutPage from './pages/SignOutPage';
import Menu from './components/Menu';
import FoodDetailPage from './pages/FoodDetailPage';
import CartPage from './pages/Cart';
import ManageOrderPage from './pages/ManageOrder';
import ViewOrderPage from './pages/ViewOrder';
import MenuItemListPage from './pages/MenuItemListPage';
import AddMenuItemPage from './pages/AddMenuItemPage';
import EditMenuItemPage from './pages/EditMenuItemPage';
import UploadMenuItemImagePage from './pages/UploadMenuItemImagePage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import OrderHistoryDetailPage from './pages/OrderHistoryDetailPage';
import StaffsListPage from './pages/StaffsListPage';
import StaffEditPage from './pages/StaffEditPage';
import HomePg from './pages/HomePg';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}>
            <Route index element={<HomePage />} />
            <Route path='food-item/:id' element={<FoodDetailPage />} />
            {/*<Route path='/home2' element={<ExampleHomePage2 />} />*/}
            {/*<Route path='another' element={<ExampleAnotherPage />} />*/}
            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} />
            <Route path='signout' element={<SignOutPage />} />
            <Route path='cart' element={<CartPage />} />
            <Route path='manageOrder' element={<ManageOrderPage/>} />
            <Route path='viewOrder/:id' element={<ViewOrderPage/>} />
            <Route path='menu-items' element={<MenuItemListPage />} />
            <Route path='add-menu-item' element={<AddMenuItemPage />} />
            <Route path='edit-menu-item/:id' element={<EditMenuItemPage />} />
            <Route path='order-history' element={<OrderHistoryPage />} />
            <Route path='order-history/:id' element={<OrderHistoryDetailPage />} />
            <Route path='homepg' element={<HomePg />} />
            <Route
              path='upload-image/:id'
              element={<UploadMenuItemImagePage />}
            />
            <Route path='staffs' element={<StaffsListPage />} />
            <Route path='staffs/edit/:id' element={<StaffEditPage />} />
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