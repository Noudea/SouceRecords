import NavBar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(<>
      <NavBar></NavBar>
  <main>
      <Component {...pageProps} />
  </main>)
      </>)
}

export default MyApp
