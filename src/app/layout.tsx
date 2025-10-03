import { Layout } from "@/components/Layout"
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Site.Set',
    description: 'Venda seus produtos como afiliado em um único lugar',
    openGraph: {
        title: 'Blog',
        description: 'Dicas e estratégias para impulsionar seu negócio',
        url: "https://site-blog-gray.vercel.app/og-image.jpg",
        siteName: 'Blog',
        locale: 'pt_BR',
        type: 'website',
        images: [
            {
                url: "https://site-blog-gray.vercel.app/og-image.jpg",
                width: 800,
                height: 600,
                alt: 'Site.Set'
            }
        ]
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}
