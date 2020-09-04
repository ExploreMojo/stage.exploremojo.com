import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Container>
        <Headline type="huge" subTitle="Mojo for XD is not perfect yet. Help us improve.">Issues</Headline>
        
        <Headline type="h1" subTitle="">Known Issues</Headline>
        <Text>
          Work in progress...    
        </Text>
      </Container>

      <div style={{height: '220px'}}></div>

    </Layout>
  )
}
