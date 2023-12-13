import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

export function Cart() {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);

  return (
    <div>
      <main className="w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-center my-4 text-2xl">
          Carrinho de Compras
        </h1>

        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <p className="font-medium text-3xl m-8">
              Ops! Seu carrinho está vazio :(
            </p>
            <Link
                className="bg-slate-600 my-6 p-1 px-3 text-white rounded"
                to="/"
              >
                Acessar produtos
              </Link>
          </div>
        )}
        {cart.map((item) => (
          <section
            key={item.id}
            className="flex items-center justify-between border-b-2 border-gray-300"
          >
            <img className="w-28" src={item.cover} alt={item.title} />
            <strong>Preço: {item.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</strong>
            <div className="flex items-center justify-center gap-2">
              <button onClick={() => removeItemCart(item)} className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">
                -
              </button>
              <p>{item.amount}</p>
              <button onClick={() => addItemCart(item)}
              className="bg-slate-600 rounded px-2 text-white font-medium flex items-center justify-center">
                +
              </button>
            </div>

            <strong className="float-right">
              SubTotal:{" "}
              {item.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
          </section>
        ))}
        {cart.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}
      </main>
    </div>
  );
}
