import Link from "next/link"
import { Star, Truck, ShieldCheck, ArrowLeft, ShoppingCart, Heart } from "lucide-react"

export default function ProductPage({ params }: { params: { id: string } }) {
  // В реальном приложении здесь будет запрос к API для получения данных о товаре
  const product = {
    id: params.id,
    name: `Товар ${params.id}`,
    price: Number(params.id) * 1000,
    rating: 4.7,
    reviews: 124,
    description:
      "Подробное описание товара. Здесь может быть много текста с описанием характеристик, особенностей и преимуществ товара.",
    features: [
      "Особенность 1: высокое качество материалов",
      "Особенность 2: современный дизайн",
      "Особенность 3: долгий срок службы",
      "Особенность 4: простота использования",
    ],
    images: [
      `/placeholder.svg?height=400&width=400&text=Товар ${params.id}`,
      `/placeholder.svg?height=400&width=400&text=Фото 2`,
      `/placeholder.svg?height=400&width=400&text=Фото 3`,
    ],
  }

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
            <Link href="/categories" className="text-gray-700 hover:text-orange-500 font-medium whitespace-nowrap">
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

      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-500">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href="/categories" className="hover:text-orange-500">
              Категории
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-orange-500 hover:underline mb-6">
            <ArrowLeft size={16} className="mr-1" />
            Вернуться к списку товаров
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="bg-white rounded-lg overflow-hidden mb-4">
                <img src={product.images[0] || "/placeholder.svg"} alt={product.name} className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((img, idx) => (
                  <div key={idx} className="bg-white rounded-lg overflow-hidden cursor-pointer">
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - фото ${idx + 2}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400 mr-2">
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current" size={18} />
                  <Star className="fill-current text-gray-300" size={18} />
                </div>
                <span className="text-gray-600 text-sm">
                  {product.rating} ({product.reviews} отзывов)
                </span>
              </div>

              <div className="text-3xl font-bold text-orange-500 mb-6">₽ {product.price.toLocaleString()}</div>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
                  <ShoppingCart size={20} className="mr-2" />
                  Добавить в корзину
                </button>
                <button className="border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 font-medium py-3 px-6 rounded-lg flex items-center justify-center transition duration-300">
                  <Heart size={20} className="mr-2" />В избранное
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <Truck size={20} className="mr-3 text-orange-500" />
                  <span>Доставка: 1-3 рабочих дня</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <ShieldCheck size={20} className="mr-3 text-orange-500" />
                  <span>Гарантия: 12 месяцев</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} ФЕНИКС. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

