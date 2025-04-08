// app\api\register\route.ts
import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/lib/supabase'; // Импортируем уже настроенный клиент

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email и пароль обязательны' }, { status: 400 });
    }

    const { data: existingUser, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (existingUser) {
      return NextResponse.json({ error: 'Пользователь с таким email уже существует' }, { status: 409 });
    }

    const hashedPassword = await hash(password, 12);
    const userId = uuidv4();

    const { data: newUser, error: insertError } = await supabase
      .from('users')
      .insert([{ id: userId, name: name || email.split('@')[0], email, password_hash: hashedPassword }])
      .select();

    if (insertError) {
      console.error('Ошибка при создании пользователя:', insertError);
      return NextResponse.json({ error: 'Ошибка сервера при создании пользователя' }, { status: 500 });
    }

    return NextResponse.json({ success: true, userId: newUser[0].id }, { status: 201 });
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    return NextResponse.json({ error: 'Внутренняя ошибка сервера' }, { status: 500 });
  }
}