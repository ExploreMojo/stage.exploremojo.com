import Head from 'next/head'
import Layout from '../../components/layouts/Layout'
import {Version, Button, HeroBase, Headline, Text, Spacer} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';


export default class extends React.Component {
  componentDidMount() {
    // Only in browser
    if (process.browser) {
    }
    console.log('random', localStorage.getItem('random') );
    localStorage.setItem('random', 'abc') ;
  }
  render() {
    return (
      <Layout>
        <Container>
          
          <Headline type="h1" subTitle="Free downloads and resources">Premium</Headline>
          <Text>
            Work in progress...    
          </Text>

        </Container>
        <Spacer height="300"></Spacer>
      </Layout>
    )
  }
}