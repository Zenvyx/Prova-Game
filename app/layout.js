import '.style.css'

export const metadata = {
  title: 'Prova Jogo',
  description: 'Projeto de faculdade com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}
