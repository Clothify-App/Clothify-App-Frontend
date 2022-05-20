import "./App.css";
import AuthProvider from "./Context/AuthContext";
import Navigations from "./components/Navigations";
import ProductProvider from "./Context/ProductContext";

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <Navigations />
      </ProductProvider>
    </AuthProvider>
  );
}
export default App;

// <div>
// {isLoggedIn ? (
//   <Navbar isLoggedIn={isLoggedIn} />
// ) : (
//   <Navbar setlogin={setLoginOpen} />
// )}
// {loginOpen ? <Login setlogin={setLoginOpen} /> : undefined}
// <Routes>
//   <Route
//     exact
//     path="/"
//     element={
//       <div>
//         <Carousel />
//         <Sections />
//         <Footer />
//       </div>
//     }
//   />
//   <Route
//     exact
//     path="/dashboard"
//     element={
//       <PrivateRoute>
//         <Dashboard />
//       </PrivateRoute>
//     }
//   />
//   <Route path="/contact" element={<Contact />} />
//   <Route path="/about" element={<About setlogin={setLoginOpen} />} />
//   <Route path="/products" element={<Products />} />
// </Routes>
// </div>
