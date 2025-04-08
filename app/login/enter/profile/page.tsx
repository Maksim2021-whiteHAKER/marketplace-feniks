'use client'
import Link from "next/link"
import { User, Settings, Heart, Box, LogOut } from "lucide-react"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Image from "next/image"
import Feniks from "../public/feniksTrans.png"
import { Copyright } from "../../../functions/functions"
import { useSession } from "next-auth/react"
// ultragf pass: 123456

export default function ProfilePage() {
  const {data: session} = useSession()

  if (!session) {
    return <div>Пользователь не авторизован</div>;
  }

  // Пример данных пользователя
  const userData = {
    name: session.user.name,
    email: session.user.email,
    phone: "пока в разработке",
    address: "пока в разработке",
    orders: [
    //   { id: 1, date: "2024-03-15", total: 15000, status: "Доставлен" },
    //   { id: 2, date: "2024-03-20", total: 8500, status: "В обработке" }
    ]
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Заголовок (такой же как на главной) */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          {/* ... ваш существующий хедер ... */}
        </div>
      </header>

      {/* Основной контент профиля */}
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Левая панель - меню */}
            <div className="md:w-1/4 bg-white rounded-lg shadow-sm p-6 h-fit">
              <div className="text-center mb-6">
                <div className="bg-orange-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                  <User size={48} className="text-orange-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">{userData.name}</h2>
                <p className="text-gray-600">{userData.email}</p>
              </div>

              <nav className="space-y-2">
                <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-50 rounded-lg">
                  <Settings className="mr-2 h-5 w-5" />
                  Личные данные
                </Link>
                <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-50 rounded-lg">
                  <Box className="mr-2 h-5 w-5" />
                  Мои заказы
                </Link>
                <Link href="#" className="flex items-center p-3 text-gray-700 hover:bg-orange-50 rounded-lg">
                  <Heart className="mr-2 h-5 w-5" />
                  Избранное
                </Link>
                <button className="w-full flex items-center p-3 text-red-600 hover:bg-red-50 rounded-lg">
                  <LogOut className="mr-2 h-5 w-5" />
                  Выйти
                </button>
              </nav>
            </div>

            {/* Правая часть - контент */}
            <div className="md:w-3/4">
              {/* Секция личных данных */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Личные данные</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ФИО</label>
                    <input
                      type="text"
                      value={userData.name}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={userData.email}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input
                      type="tel"
                      value={userData.phone}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Адрес доставки</label>
                    <textarea
                      value={userData.address}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition duration-300">
                    Сохранить изменения
                  </button>
                </div>
              </div>

              {/* Секция заказов */}
              {/* <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">История заказов</h2>
                <div className="space-y-4">
                  {userData.orders.map(order => (
                    <div key={order.id} className="border-b border-gray-200 pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h3 className="font-medium">Заказ №{order.id}</h3>
                          <p className="text-sm text-gray-500">{order.date}</p>
                        </div>
                        <span className="text-lg font-bold text-orange-500">₽ {order.total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${
                          order.status === 'Доставлен' ? 'text-green-600' : 'text-blue-600'
                        }`}>
                          {order.status}
                        </span>
                        <Link href="#" className="text-orange-500 hover:text-orange-600 text-sm">
                          Подробнее →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Подвал сайта (такой же как на главной) */}
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        {/* ... ваш существующий футер ... */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <Copyright/>
          </div>
      </footer>
    </div>
  )
}