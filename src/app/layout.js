import { Metadata } from 'next'
 
export const metadata = {
  title: 'hi'
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>navbar</nav>
          {children}
        <footer>footer</footer>
      </body>
    </html>
  )
}
