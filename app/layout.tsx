import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { title } from 'process';

export const metadata = {
  title: 'Next.js Dashboard',
  description: 'Dashboard created using next.js full stack features',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
