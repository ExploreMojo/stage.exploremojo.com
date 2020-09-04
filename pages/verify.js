import Layout from '../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text, Spacer} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default class extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          
          <Headline type="h1" metaTitle="Almost there..." subTitle="Check your emails and confirm">Confirmation email was sent</Headline>

          <Spacer height="100"></Spacer>

        </Container>
        <Spacer height="300"></Spacer>
      </Layout>
    )
  }
}