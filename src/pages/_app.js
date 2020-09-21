import React from 'react'

import '../css/tailwind.css'
import '../css/main.css'
import GoogleFonts from 'next-google-fonts'
import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <DefaultSeo
        titleTemplate={
          router.route === '/' ? 'Exsign Studio' : '%s | Exsign Studio'
        }
      />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
