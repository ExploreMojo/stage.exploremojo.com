import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text, MojoEmbed} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Headline type="huge" subTitle="">Showcase is work in progress</Headline>
        <Text>Come back soon to see what is possible.</Text>
      </Container>

      <MojoEmbed src="demos/explainer_living_prototypes/index.html" aspectRatio={500/500}></MojoEmbed>

      <div style={{height: '220px'}}></div>

    </Layout>
  )
}
