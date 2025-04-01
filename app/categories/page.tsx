import Link from "next/link"
import { Copyright } from "../functions/functions"

export default function CategoriesPage() {
  const categories = [
    { name: "Иллюстратор", subcategories: ["Эскизы", "Векторная графика", "Иллюстрации", "Логотипы"] },
    { name: "Фотошоп", subcategories: ["Текстуры", "Фоны", "Фотографии", "Открытки"]}
    //{ name: "Одежда", subcategories: ["Мужская", "Женская", "Детская", "Обувь"] },
    //{ name: "Дом и сад", subcategories: ["Мебель", "Декор", "Кухня", "Сад"] },
    //{ name: "Красота и здоровье", subcategories: ["Косметика", "Парфюмерия", "Уход за телом", "Витамины"] },
    //{ name: "Спорт и отдых", subcategories: ["Тренажеры", "Спортивная одежда", "Туризм", "Велосипеды"] },
    //{ name: "Детские товары", subcategories: ["Игрушки", "Коляски", "Детская мебель", "Школьные принадлежности"] },
    //{ name: "Автотовары", subcategories: ["Запчасти", "Аксессуары", "Шины", "Электроника"] },
    //{ name: "Продукты питания", subcategories: ["Сладости", "Напитки", "Снеки", "Здоровое питание"] },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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
            <Link href="/categories" className="text-orange-500 font-medium whitespace-nowrap">
              Категории
            </Link>
            <Link href="/deals" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Акции
            </Link>
            <Link href="/new" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
              Новинки
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Категории товаров</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">{category.name}</h2>
                  <ul className="space-y-2">
                    {category.subcategories.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          href={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                          className="text-gray-600 hover:text-orange-500"
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/category/${category.name.toLowerCase()}`}
                    className="inline-block mt-4 text-orange-500 hover:underline"
                  >
                    Все в категории {category.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Copyright/>
        </div>
      </footer>
    </div>
  )
}

