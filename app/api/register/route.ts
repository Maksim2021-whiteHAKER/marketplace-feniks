// api/app/register/route.tsx
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { query } from '@/lib/db';

export async function POST(req: Request) {
  try {
    // Парсинг данных из тела запроса
    const { name, email, password } = await req.json();

    // Проверка обязательных полей
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email и пароль обязательны' },
        { status: 400 }
      );
    }

    // Проверка валидности email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Некорректный формат email' },
        { status: 400 }
      );
    }

    // Проверка существующего пользователя
    const [existingUser] = await query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUser && existingUser.length > 0) {
      return NextResponse.json(
        { error: 'Пользователь с таким email уже существует' },
        { status: 409 } // 409 Conflict — более подходящий статус для дублирующегося ресурса
      );
    }

    // Хеширование пароля
    const hashedPassword = await hash(password, 12); // Рекомендуемая "стоимость" для bcrypt
    const userId = uuidv4(); // Генерация уникального ID

    // Вставка нового пользователя в базу данных
    await query(
      `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
      [userId, name || email.split('@')[0], email, hashedPassword]
    );

    // Успешный ответ
    return NextResponse.json(
      { success: true, userId },
      { status: 201 }
    );

  } catch (error) {
    console.error('Ошибка регистрации:', error);

    // Обработка ошибок
    let errorMessage = 'Внутренняя ошибка сервера';
    let statusCode = 500;

    if (error instanceof Error) {
      if (error.message.includes('ER_DUP_ENTRY')) {
        errorMessage = 'Пользователь с таким email уже существует';
        statusCode = 409; // Конфликт при попытке создания дубликата
      } else {
        errorMessage = error.message; // Можно настроить более детальную обработку ошибок
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: statusCode }
    );
  }
}