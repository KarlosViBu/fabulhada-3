import { Bjamju } from '@/components/font'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body className={Bjamju.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
