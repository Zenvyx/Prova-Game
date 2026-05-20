import "./style.css";

export const metadata = {
  title: "Prova Jogo",
  description: "Projeto faculdade",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
