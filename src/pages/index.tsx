import { NextSeo } from 'next-seo'

export default function Index() {
  return (
    <>
      <NextSeo
        title="Exsign Studio"
        description="Uma equipe de designers e desenvolvedores de ponta com o objetivo de trazer a experiência e design que seus usuários merecem."
      />
      <div className="flex items-center justify-center min-h-screen overflow-hidden">
        <h1 className="text-4xl font-semibold">Hello World</h1>
      </div>
    </>
  )
}
