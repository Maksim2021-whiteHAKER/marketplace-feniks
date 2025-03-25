import Link from "next/link"
import imageFeniks from "../../public/feniksTrans.png"
import Image from "next/image"
import { Copyright } from "../functions/functions"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - можно скопировать из других страниц */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center">
          <Link href="/" className="mr-8">
            <div className="logo-box">
              <h1 className="phoenix-title">ФЕНИКС</h1>
              <h3 className="phoenix-subtitle">торговая площадка</h3>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6 flex-wrap">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Главная
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Категории
            </Link>
            <Link href="/about" className="text-orange-500 font-medium whitespace-nowrap">
              О нас
            </Link>
            <Link href="/contacts" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">О компании ФЕНИКС</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>          
              <p className="text-gray-700 mb-4">
                Компания ФЕНИКС была основана в 2023 году с целью создания удобной и надежной торговой площадки для покупателей и продавцов.
              </p>
              <p className="text-gray-700 mb-4">
                Наша миссия — сделать онлайн-шоппинг максимально простым, безопасным и приятным для каждого клиента.
              </p>
              <p className="text-gray-700 mb-4">
                Мы тщательно отбираем товары и продавцов, чтобы гарантировать высокое качество и надежность каждой покупки.
              </p>
            </div>
            <div>
              <Image src = {imageFeniks}
              alt = "О компании ФЕНИКС"
              width={500}
              height={500}
              priority
              className="bg-opacity-25"/>
            </div>
          </div>          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Наши ценности</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-orange-500">Качество</h3>
                <p className="text-gray-700">Мы предлагаем только качественные товары от проверенных поставщиков.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-orange-500">Надежность</h3>
                <p className="text-gray-700">Мы гарантируем безопасность платежей и своевременную доставку.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-xl mb-3 text-orange-500">Клиентоориентированность</h3>
                <p className="text-gray-700">Мы всегда на стороне клиента и готовы решить любую проблему.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer - можно скопировать из других страниц */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Copyright/>
        </div>
      </footer>
    </div>
  )
}