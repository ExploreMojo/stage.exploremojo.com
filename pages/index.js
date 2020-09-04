import Head from 'next/head'
import Layout from '../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text, Claim, ImageText, YouTube} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Layout>
      {/* 
      #TODO: SEO
      <Head>
      </Head> 
      */}

      {/* ////////// */}
      {/* Hero */}

      <HeroBase background="ui/images/HeroA_bg.jpg"
                backdrop1="ui/images/HeroA_backdrop.png">
        <Headline type="huge" metaTitle="Bring your content to life" subTitle="Create production ready rich content and prototypes right in XD">
          #STAGE2 Mojo for Adobe XD
        </Headline>
        <Button>pre-register soon</Button>
      </HeroBase>

      <Container>
        <Headline type="huge" subTitle="Production ready rich content and prototypes">Create more with XD</Headline>
        <Text>Author rich, animated, interactive content and prototypes right in XD. Mojo features a powerful timeline and a robust and highly extensible web exporter. Fine tuning complex animations or adding custom code to your prototypes, integrating videos and working with real interactive data sets (search, filter etc.) is now possible with Mojo.</Text>
      </Container>

      <div style={{height: '120px'}}></div>

      <YouTube id="74qNvMWkWhE" title="Preview of Mojo for Adobe XD" />



      {/* ////////// */}
      {/* Buzzwords */}

      <Claim title="Use Mojo for" background="ui/images/Claim_bg_shapes.png" inverted>
        <strong>RICH PROTOTYPING</strong> / <strong><nobr>WEB EXPORT</nobr></strong> / <strong><nobr>RICH CONTENT</nobr></strong> / UI ANIMATIONS / STORYTELLING / SCRIPTING / INTERACTIVE INFOGRAPHICS / BANNERS / CONFIGURATORS / ...
      </Claim>



      {/* ////////// */}
      {/* Highlights */}

      <ImageText aspectRatio={800/600}>
        <image>v0/images/mojo_timeline_loop.gif</image>
        <title>Powerful Timeline</title>
        <body>Orchestrate numerous animations on a powerful yet intuitive timeline.</body>
      </ImageText>

      <ImageText aspectRatio={800/600} reversed>
        <image>v0/images/mojo_webexporter.png</image>
        <title>Robust Web Exporter</title>
        <body>Mojo exports to production ready code (100% Web Standards: HTML, SVG, CSS, JS).</body>
      </ImageText>

      <ImageText aspectRatio={800/600}>
        <image>v0/images/mojo_extensible.png</image>
        <title>100% Extensible</title>
        <body>Coders are also specifically invited to the Mojo party. Mojo supports several options and hooks to add custom scripts (e.g. dynamic data integration, UI extensions etc.)</body>
      </ImageText>

      <ImageText aspectRatio={800/600} reversed>
        <image>v0/images/mojo_greensock.png</image>
        <title>Industry standards</title>
        <body>Rendering is pure HTML and SVG. Animations use the most popular and robust animation engine Greensock (GSAP).</body>
      </ImageText>

      <iframe src="https://cdn.forms-content.sg-form.com/d0d32f9c-edf1-11ea-95b9-d62efb5267d7"
              style={{minWidth: '600px', minHeight: '600px'}}/>

    </Layout>
  )
}
