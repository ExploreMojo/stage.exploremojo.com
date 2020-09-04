import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text, YouTube} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Headline type="huge" subTitle="">Mojo Help</Headline>
        <Text>Come back soon to get access to tutorials and demo files.</Text>
      </Container>

      <YouTube id="74qNvMWkWhE" title="Preview of Mojo for Adobe XD" />      

      <div style={{height: '220px'}}></div>

    </Layout>
  )
}
