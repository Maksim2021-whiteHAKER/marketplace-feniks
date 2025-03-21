import Link from "next/link"
import imageFeniks from "../../public/feniksTrans.png"
import Image from "next/image"
import LoginForm from "@/components/LoginForm"
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
          <h1 className="text-3xl font-bold text-gray-800 mb-8 "></h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <LoginForm/>
            <div>
              <Image src = {imageFeniks}
              alt = "О компании ФЕНИКС"
              width={450}
              height={450}
              priority
              className="bg-opacity-25"/>
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