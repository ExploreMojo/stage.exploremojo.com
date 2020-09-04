import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      {/* <HeroBase background="ui/images/HeroA_bg.jpg"
                backdrop1="ui/images/HeroA_backdrop.png">
        <Headline type="huge" metaTitle="Learn. Create. Publish." subTitle="Coming soon...">Learn</Headline>
      </HeroBase> */}

      <Container>
        <Headline type="huge" subTitle="">Learning Mojo</Headline>
        {/* <Text>Come back soon to get access to tutorials and demo files.</Text> */}
        
        <Text>
          <Link href="learn/getting-started">Getting Started Guide</Link>
        </Text>
        <Text>
          <Link href="issues">Known Issues</Link>
        </Text>
      </Container>

      <div style={{height: '220px'}}></div>

    </Layout>
  )
}
