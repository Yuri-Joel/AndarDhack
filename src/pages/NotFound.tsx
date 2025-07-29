// src/pages/NotFound.tsx
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-center px-6">
      <h1 className="text-5xl font-bold text-purple-900 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Página não encontrada</p>
      <Link
        to="/"
        className="text-white bg-purple-900 hover:bg-purple-950 px-6 py-3 rounded-lg transition duration-200"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
