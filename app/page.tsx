import Link from "next/link"
import { Search, ShoppingCart, User } from "lucide-react"
import Image from "next/image"
import Feniks from "../public/feniksTrans.png"
import { Copyright } from "./functions/functions"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Заголовок */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center mr-8">
            <div className="logo-box">
              <h1 className="phoenix-title">ФЕНИКС</h1>
              <h3 className="phoenix-subtitle">торговая площадка</h3>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 justify-center">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Главная
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Категории
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Акции
            </Link>
            <Link href="/new" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Новинки
            </Link>
          </div>

          {/* Меню  управления*/}
          <div className="flex items-center space-x-4 mt-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск товаров..."
                className="pl-3 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <Link href="/login" className="">
            <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-orange-500">
              <span>войти</span>
              <User size={24} />
            </button>
            </Link>
            <button className="p-2 text-gray-700 hover:text-orange-500 relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="bg-gradient-to-r from-orange-100 to-yellow-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Добро пожаловать на ФЕНИКС</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ваша надежная торговая площадка с тысячами товаров по выгодным ценам
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                Начать покупки
              </button>
            </div>
            <div className="md:w-1/2">
            <Image src={Feniks}
            alt="Торговая площадка ФЕНИКС"
            width={500}
            height={500}
            priority
            className="bg-opacity-25"
          />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories - Рекомедуемые категории*/}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Популярные категории</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Электроника", "Одежда", "Дом и сад", "Красота и здоровье"].map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition duration-300"
              >
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-medium text-gray-800">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products - Рекомендуемые товары */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Популярные товары</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
              <div
                key={product}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
              >
                <img
                  src={`/placeholder.svg?height=200&width=300&text=Товар ${product}`}
                  alt={`Товар ${product}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Товар {product}</h3>
                  <p className="text-gray-600 text-sm mb-3">Описание товара, краткая информация о товаре</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-orange-500">₽ {(product * 1000).toLocaleString()}</span>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-1 px-3 rounded transition duration-300">
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-medium py-2 px-6 rounded-lg transition duration-300">
              Показать больше
            </button>
          </div>
        </div>
      </div>

      {/* Advantages - Преимущества*/}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Быстрая доставка", desc: "Доставка товаров по всей России в кратчайшие сроки" },
              { title: "Гарантия качества", desc: "Все товары проходят тщательную проверку перед отправкой" },
              { title: "Поддержка 24/7", desc: "Наша служба поддержки всегда готова помочь вам" },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-orange-500 text-2xl">{index + 1}</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer - Подвал сайта*/}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ФЕНИКС</h3>
              <p className="text-gray-400">Ваша надежная торговая площадка с тысячами товаров по выгодным ценам</p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    О нас
                  </Link>
                </li>
                <li>
                  <Link href="/delivery" className="text-gray-400 hover:text-white">
                    Доставка
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="text-gray-400 hover:text-white">
                    Оплата
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className="text-gray-400 hover:text-white">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Категории</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/illustrator" className="text-gray-400 hover:text-white">
                    Иллюстратор
                  </Link>
                </li>
                <li>
                  <Link href="/category/photoshop" className="text-gray-400 hover:text-white">
                    Фотошоп
                  </Link>
                </li>
                <li>
                  <Link href="/category/home" className="text-gray-400 hover:text-white">
                    .другое(пока в разработке)
                  </Link>
                </li>
                <li>
                  <Link href="/category/beauty" className="text-gray-400 hover:text-white">
                    .другое(пока в разработке)
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Телефон(пока в обработке): +7 (XXX) XXX-XX-XX</li>
                <li>Email(пока в работе): info@phoenix-market.ru</li>
                <li>Адрес: г. Воткинск, дома пока нет</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <Copyright/>
          </div>
        </div>
      </footer>
    </div>
  )
}

