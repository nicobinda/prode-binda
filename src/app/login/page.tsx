import { redirect } from 'next/navigation';
import { getCurrentUser } from '@/lib/auth/getCurrentUser';
import { LoginForm } from './LoginForm';

export const metadata = {
  title: 'Ingresar — Prode Binda 2026',
};

export default async function LoginPage() {
  const user = await getCurrentUser();
  if (user) redirect(user.nickname ? '/' : '/onboarding');

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-pb-deep-blue text-white">
      {/* Gradient overlay para legibilidad — placeholder hasta tener welcome-bg.png */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(97,141,255,0.25) 0%, rgba(11,29,94,0) 60%), linear-gradient(180deg, #0B1D5E 0%, #08102E 100%)',
        }}
      />

      <main className="relative z-10 mx-auto flex w-full max-w-md flex-1 flex-col px-7 pb-8 pt-12">
        <div className="flex justify-center pt-8">
          <div className="font-display text-4xl font-black tracking-tight text-white">
            PRODE
            <span className="ml-2 inline-block rounded-md bg-pb-ceruleo px-2 py-0.5 text-2xl">
              BINDA
            </span>
          </div>
        </div>

        <div className="mt-auto">
          <LoginForm />
        </div>
      </main>
    </div>
  );
}
