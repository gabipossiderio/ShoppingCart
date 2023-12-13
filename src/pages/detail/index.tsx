import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import toast from "react-hot-toast";
import { CartContext } from "../../contexts/cartContext";
import { ProductProps } from "../home";

export function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItemCart } = useContext(CartContext);
  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    getProduct();
  }, [id]);

  function handleAddCartItem(product: ProductProps) {
    toast.success("Produto adicionado no carrinho!");
    addItemCart(product);
    navigate("/cart");
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto my-6">
        {product && (
          <section className="w-full">
            <div className="flex flex-col md:flex-row">
              <img className="flex-1 w-full max-h-72 object-contain" src={product.cover} alt={product.title} />
            
            <div className="flex-1">
              <h1 className="font-bold text-2xl mt-4 mb-2">{product.title}</h1>
              <p className="my-4">{product.description}</p>
              
              <strong className="text-zinc-700/90">
                {product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </strong>
              <button
                onClick={() => handleAddCartItem(product)}
                className="p-2 rounded"
              >
                <BsCartPlus size={18} color="black" />
              </button>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
