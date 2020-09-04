import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import {Version, Button, Spacer, HeroBase, Headline, Text} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Layout>
      <HeroBase background="ui/images/HeroA_bg.jpg"
                backdrop1="ui/images/HeroA_backdrop.png">
        <Headline type="huge" metaTitle="Never start from scratch again" subTitle="Coming soon...">Templates</Headline>
        {/* <Button>Download Now</Button> */}
      </HeroBase>

      {/* <Container>
        <Headline type="huge" subTitle="">Template Hub is work in progress</Headline>
        <Text>Come back soon to get access to templates and demo files.</Text>
      </Container> */}

      <Spacer height="400"></Spacer>

    </Layout>
  )
}
