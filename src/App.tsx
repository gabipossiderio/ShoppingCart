import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import CartProvider from "./contexts/cartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
