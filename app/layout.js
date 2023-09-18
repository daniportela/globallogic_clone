import './globals.css'
import { Poppins } from 'next/font/google'

// Components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ["300", "400", "500", "700"]
})

export const metadata = {
    title: 'GlobalLogic clone',
    description: 'Mock project for GlobalLogic'
}

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body className={poppins.className}>
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    )
}
