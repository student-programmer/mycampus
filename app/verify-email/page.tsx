'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import userActions from "@/actions/user";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  const [status, setStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('❌ Токен не найден в ссылке.');
      return;
    }

    const verify = async () => {
      try {
        const res = userActions.verifyEmail(token)
        res.then(response => {
          if (response?.status === 201 || response?.status === 200) {
            setStatus('success');
            setMessage('✅ Email успешно подтверждён!');
            router.push('/connects')
          } else {
            setStatus('error');
            setMessage('Ошибка подтверждения.');
          }
        })
      } catch (err) {
        setStatus('error');
        setMessage('Произошла ошибка при подтверждении email.');
      }
    };

    verify();
  }, [token]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-2xl font-bold mb-4">Подтверждение Email</h1>
      <p>
        {status === 'pending' && '⏳ Подтверждаем ваш email...'}
        {status !== 'pending' && message}
      </p>
    </main>
  );
}
