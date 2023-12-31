import { Footer } from '@/app/components/Footer';
import { SideBarList } from '@/app/components/SideBarList';
import { Breadcrumb } from '@/app/components/breadcrumb';
import { Header } from '@/app/components/header';

import '@/app/globals.css';

import '@/styles/icon.css';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center bg-white-1">
          <Header loginCheck={true} />
          <main className="mb-6 w-11/12 md:w-[1000px]">
            <div className="mt-36 flex flex-col md:mt-28 md:flex-row-reverse md:justify-center">
              <div className="basis-auto md:w-full md:pl-6">{children}</div>
              <SideBarList />
            </div>
          </main>
          <Breadcrumb />
          <Footer />
        </div>
      </body>
    </html>
  );
}
