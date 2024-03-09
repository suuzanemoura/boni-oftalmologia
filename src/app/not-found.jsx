import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <main className="grid min-h-[85vh] place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-5xl font-bold text-sky-500">404</p>
          <h1 className="mt-4 text-8xl font-black sm:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-6 text-base leading-7">
            Desculpe, a página que você está procurando não existe.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-full bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
            >
              Volte para o início
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
