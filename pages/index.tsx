import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'components/Header';
import SectionTitle from 'components/SectionTitle';
import { Pill } from 'components/Pill';
import * as SVG from "components/SVGIcons";
import { useTranslations } from 'Hooks/useTranslation';

const Home: NextPage = () => {
  const i18n = useTranslations();

  return (
    <>
      <Head>
        <title>Vota.app - {i18n.SEO_TITLE}</title>
        <meta name="theme-color" content="#f7df1e" />
      </Head>
      <Header />
      <section className='mt-16 w-full max-w-4xl md:mt-28'>
        <h1 className='font-bold text-center text-black text-6xl md:text-8xl cursor-default'>
          {i18n.SEO_TITLE}
        </h1>
        <p className='max-w-lg mx-auto mt-10 text-lg text-center text-black opacity-80 font-semibold cursor-default'>
          {i18n.SEO_SUBTITLE}
        </p>
        <div className='bg-white max-w-4xl p-10 mx-auto my-20 rounded-none border-t-2 border-b-2 border-black md:border-2 md:rounded-lg'>
          <SectionTitle>Mejor biblioteca UI</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='React'   svg={<SVG.React/>}/>
            <Pill title='Vue.js'  svg={<SVG.Vue/>}/>
            <Pill title='Angular' svg={<SVG.Angular/>}/>
            <Pill title='Svelte'  svg={<SVG.Svelte/>}/>
            <Pill title='Lit'     svg={<SVG.Lit/>}/>
            {/* <Pill svg={<SVG.Ember/>} title='Ember' />
            <Pill svg={<SVG.Alpine/>} title='Alpine.js' />
            <Pill svg={<SVG.Preact/>} title='Preact' />
            <Pill svg={<SVG.Stimulus/>} title='Stimulus' />
            <Pill svg={<SVG.Solid/>} title='Solid' /> */}
          </ul>

          <SectionTitle>Mejor framework Backend</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Nest.js' svg={<SVG.Nest/>}/>
            <Pill title='Express' svg={<SVG.Express/>}/>
            <Pill title='Fastify' svg={<SVG.Fastify/>}/>
            <Pill title='Hapi'   svg={<SVG.Hapi/>}/>
          </ul>

          {/* <SectionTitle>Mejor nueva funcionalidad ECMAScript</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Nest.js' svg={<SVG.Nest/>}/>
            <Pill title='Express' svg={<SVG.Express/>}/>
            <Pill title='Fastify' svg={<SVG.Fastify/>}/>
            <Pill title='Hapi'   svg={<SVG.Hapi/>}/>
          </ul>

          <SectionTitle>Mejor nueva funcionalidad CSS</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Nest.js' svg={<SVG.Nest/>}/>
            <Pill title='Express' svg={<SVG.Express/>}/>
            <Pill title='Fastify' svg={<SVG.Fastify/>}/>
            <Pill title='Hapi'   svg={<SVG.Hapi/>}/>
          </ul> */}

          <SectionTitle>Mejor framework FullStack</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Next.js'   svg={<SVG.Next/>} />
            <Pill title='Nuxt'      svg={<SVG.Nuxt/>} />
            <Pill title='SvelteKit' svg={<SVG.Svelte/>} />
            <Pill title='Remix'     svg={<SVG.Remix/>} />
            <Pill title='Astro'     svg={<SVG.Astro/>} />
            <Pill title='BlitzJS'   svg={<SVG.Blitz/>} />
          </ul>

          <SectionTitle>Mejores empaquetadores de código</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Webpack' svg={<SVG.Webpack/>} />
            <Pill title='Rollup'  svg={<SVG.Rollup/>} />
            <Pill title='Parcel'  svg={<SVG.Parcel/>} />
            <Pill title='EsBuild' svg={<SVG.Esbuild/>} />
            <Pill title='Vite'    svg={<SVG.Vite/>} />
          </ul>

          <SectionTitle>Mejor entorno de ejecución de JavaScript</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Node.js' svg={<SVG.Node/>} />
            <Pill title='Deno'   svg={<SVG.Deno/>} />
          </ul>

          <SectionTitle>Mejor librería CSS en JS</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Stitches'          svg={<SVG.Stitches/>}/>
            <Pill title='Styled Components' svg={<SVG.StyledComponents/>}/>
            <Pill title='Emotion'           image='icons/Emotion.png' />
          </ul>

          <SectionTitle>Mejor framework CSS</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Tailwind' svg={<SVG.Tailwind/>}/>
            <Pill title='Bulma'    svg={<SVG.Bulma/>}/>
          </ul>

          <SectionTitle>Mejor herramienta de testing</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill svg={<SVG.Jest/>} title='Jest' />
            <Pill image='icons/TestingLibrary.png' title='Testing Library' />
            <Pill svg={<SVG.Vitest/>} title='Vitest' />
          </ul>

          <SectionTitle>Mejor test E2E</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Cypress'    svg={<SVG.Cypress/>} />
            <Pill title='Playwright' svg={<SVG.Playwright/>} />
            <Pill title='Puppeteer'  svg={<SVG.Puppeteer/>} />
          </ul>

          <SectionTitle>Mejor BaaS (Backend as a Service)</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Firebase' svg={<SVG.Firebase/>} />
            <Pill title='Supabase' svg={<SVG.Supabase/>} />
            <Pill title='Airtable' svg={<SVG.Airtable/>} />
            <Pill title='Amplify'  svg={<SVG.Amplify/>} />
            <Pill title='Mongo'    svg={<SVG.MongoDB/>} />
          </ul>

          <SectionTitle>Mejor catálogo de componentes</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Chakra UI'         image='icons/Chakra.png' />
            <Pill title='Material UI'       svg={<SVG.MaterialUI/>} />
            <Pill title='Next UI'           svg={<SVG.Next/>} />
            <Pill title='Ant Design'        image='icons/Ant.png' />
            <Pill title='Daisy UI'          svg={<SVG.DaisyUI/>} />
            <Pill title='React Semantic UI' image='icons/ReactSemanticUI.png' />
          </ul>

          <SectionTitle>Mejor sitio para hosting de tu proyecto web</SectionTitle>
          <ul className='flex flex-wrap gap-4 m-auto mb-16 place-content-center'>
            <Pill title='Vercel'       svg={<SVG.Vercel/>} />
            <Pill title='Netlify'      svg={<SVG.Netlify/>} />
            <Pill title='Render'       image='icons/Render.webp' />
            <Pill title='AWS'          svg={<SVG.AWS/>} />
            <Pill title='Azure'        svg={<SVG.Azure/>} />
            <Pill title='Google Cloud' />
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home
