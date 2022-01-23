import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import MainTitle from 'components/MainTitle';
import SectionTitle from 'components/SectionTitle';
import VotingBox from 'components/VotingBox';
import { Pill } from 'components/Pill';
import * as SVG from "components/SVGIcons";
import { useTranslations } from 'hooks/useTranslations';
import { Code } from 'components/Code';
import MainSubtitle from 'components/MainSubtitle';

const Home: NextPage = () => {
  const i18n = useTranslations();

  return (
    <>
      <Head>
        <title>Vota.app - {i18n.SEO_TITLE}</title>
        <meta name="theme-color" content="#f7df1e" />
      </Head>

      <Header />

      <Main>
        <MainTitle title={i18n.HERO_TITLE} />
        <MainSubtitle subtitle={i18n.HERO_SUBTITLE} />

        <div className='bg-white max-w-4xl p-10 mx-auto my-20 rounded-none border-t-2 border-b-2 border-black md:border-2 md:rounded-lg'>
          <SectionTitle>{i18n.UI_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='React'   svg={<SVG.React/>}/>
            <Pill title='Vue.js'  svg={<SVG.Vue/>}/>
            <Pill title='Angular' svg={<SVG.Angular/>}/>
            <Pill title='Svelte'  svg={<SVG.Svelte/>}/>
            <Pill title='Lit'     svg={<SVG.Lit/>}/>
          </VotingBox>

          <SectionTitle>{i18n.BACKEND_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Nest.js' svg={<SVG.Nest/>}/>
            <Pill title='Express' svg={<SVG.Express/>}/>
            <Pill title='Fastify' svg={<SVG.Fastify/>}/>
            <Pill title='Hapi'   svg={<SVG.Hapi/>}/>
          </VotingBox>

          <SectionTitle>{i18n.ECMA_TITLE}</SectionTitle>
          <VotingBox>
          <Code
              title="Nullish Coalescing Operator"
              image="images/es-nullish.png"
            />
            <Code
              title="Nullish Coalescing Operator"
              image="images/es-nullish.png"
            />
            <Code
              title="Nullish Coalescing Operator"
              image="images/es-nullish.png"
            />
            <Code
              title="Nullish Coalescing Operator"
              image="images/es-nullish.png"
            />
            <Code
              title="Nullish Coalescing Operator"
              image="images/es-nullish.png"
            />
          </VotingBox>


          {/* <SectionTitle>Mejor nueva funcionalidad CSS</SectionTitle>
          <VotingBox>
            <Pill title='Nest.js' svg={<SVG.Nest/>}/>
            <Pill title='Express' svg={<SVG.Express/>}/>
            <Pill title='Fastify' svg={<SVG.Fastify/>}/>
            <Pill title='Hapi'   svg={<SVG.Hapi/>}/>
          </ul> */}

          <SectionTitle>{i18n.FULL_STACK_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Next.js'   svg={<SVG.Next/>} />
            <Pill title='Nuxt'      svg={<SVG.Nuxt/>} />
            <Pill title='SvelteKit' svg={<SVG.Svelte/>} />
            <Pill title='Remix'     svg={<SVG.Remix/>} />
            <Pill title='Astro'     svg={<SVG.Astro/>} />
            <Pill title='BlitzJS'   svg={<SVG.Blitz/>} />
          </VotingBox>

          <SectionTitle>{i18n.PACKAGE_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Webpack' svg={<SVG.Webpack/>} />
            <Pill title='Rollup'  svg={<SVG.Rollup/>} />
            <Pill title='Parcel'  svg={<SVG.Parcel/>} />
            <Pill title='EsBuild' svg={<SVG.Esbuild/>} />
            <Pill title='Vite'    svg={<SVG.Vite/>} />
          </VotingBox>

          <SectionTitle>{i18n.ENV_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Node.js' svg={<SVG.Node/>} />
            <Pill title='Deno'   svg={<SVG.Deno/>} />
          </VotingBox>

          <SectionTitle>{i18n.CSS_IN_JS_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Stitches'          svg={<SVG.Stitches/>}/>
            <Pill title='Styled Components' svg={<SVG.StyledComponents/>}/>
            <Pill title='Emotion'           image='icons/Emotion.png' />
          </VotingBox>

          <SectionTitle>{i18n.FRAMEWORK_CSS_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Tailwind' svg={<SVG.Tailwind/>}/>
            <Pill title='Bulma'    svg={<SVG.Bulma/>}/>
          </VotingBox>

          <SectionTitle>{i18n.TOOL_TESTING_TITLE}</SectionTitle>
          <VotingBox>
            <Pill svg={<SVG.Jest/>} title='Jest' />
            <Pill image='icons/TestingLibrary.png' title='Testing Library' />
            <Pill svg={<SVG.Vitest/>} title='Vitest' />
          </VotingBox>

          <SectionTitle>{i18n.E2S_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Cypress'    svg={<SVG.Cypress/>} />
            <Pill title='Playwright' svg={<SVG.Playwright/>} />
            <Pill title='Puppeteer'  svg={<SVG.Puppeteer/>} />
          </VotingBox>

          <SectionTitle>{i18n.SERVICE_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Firebase' svg={<SVG.Firebase/>} />
            <Pill title='Supabase' svg={<SVG.Supabase/>} />
            <Pill title='Airtable' svg={<SVG.Airtable/>} />
            <Pill title='Amplify'  svg={<SVG.Amplify/>} />
            <Pill title='Mongo'    svg={<SVG.MongoDB/>} />
          </VotingBox>

          <SectionTitle>{i18n.CATALOG_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Chakra UI'         image='icons/Chakra.png' />
            <Pill title='Material UI'       svg={<SVG.MaterialUI/>} />
            <Pill title='Next UI'           svg={<SVG.Next/>} />
            <Pill title='Ant Design'        image='icons/Ant.png' />
            <Pill title='Daisy UI'          svg={<SVG.DaisyUI/>} />
            <Pill title='React Semantic UI' image='icons/ReactSemanticUI.png' />
          </VotingBox>

          <SectionTitle>{i18n.HOSTING_TITLE}</SectionTitle>
          <VotingBox>
            <Pill title='Vercel'       svg={<SVG.Vercel/>} />
            <Pill title='Netlify'      svg={<SVG.Netlify/>} />
            <Pill title='Render'       image='icons/Render.webp' />
            <Pill title='AWS'          svg={<SVG.AWS/>} />
            <Pill title='Azure'        svg={<SVG.Azure/>} />
            <Pill title='Google Cloud' />
          </VotingBox>        
        </div>
      </Main>

      <Footer />
    </>
  );
}

export default Home
