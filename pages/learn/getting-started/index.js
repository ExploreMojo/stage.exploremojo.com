import Head from 'next/head'
import LearnLayout from '../../../components/layouts/LearnLayout'
import {Version, Button, HeroBase, Headline, Text, YouTube, Spacer} from '@trendspurt/trendspurt-theme';
import {Container, Row, Col} from 'react-bootstrap';

const meta = {
  audience: 'Beginner',
  goal: 'Get you up and running in no time',
  duration: '15min',
}

export default function Home() {
  return (
    <LearnLayout meta={meta}>

      <Container>
        <Headline type="huge" metaTitle="Learning Mojo" subTitle="Let's make the first steps together">Getting Started</Headline>
        <Text>Follow along with Simon as he guides you through the process of creating your first Mojo project. It will just take a couple of minutes. Here is what we will cover:</Text>

        <ul>
          <li>Prerequisites</li>
          <ul>
            <li>Mojo in 90s</li>
            <li>Installing the Plugin</li>
            <li>Sample Files</li>
            {/* <li>Preview and Export</li> */}
          </ul>
          <li>My First Project</li>
          <ul>
            <li>Mojo Effects</li>
            <li>Animation Timeline</li>
            <li>Artboards and Mojo Scenes</li>
            <li>Outlook</li>
          </ul>
        </ul>


        {/* <YouTube id="74qNvMWkWhE" title="Preview of Mojo for Adobe XD" /> */}


        {/* ///////////////////////// */}
        {/* First Steps */}
        <Headline type="h1">First Steps</Headline>
        <Text>
          Let's make the first steps by installing the plugin and exploring the provided sample files.<br/>
          Please download the plugin and sample files here:<br/> 
          <br/> 
          <a href="http://trendspurt.com/share/mojo_prerelease/0.9.6/Mojo.Prerelease.xdx">Download Mojo Plugin</a><br/><br/>  
          <a href="http://trendspurt.com/share/mojo_prerelease/0.9.6/Mojo_Getting_Started_Demos.zip">Download Sample Files</a>
        </Text>


        {/* Mojo in 90s */}
        <Row>
          <Col md={7}>
            <Headline type="h3">Mojo in 90s</Headline>
            <Text>Watch this quick introduction video and learn about Mojo and what you can build with it.</Text>
          </Col>
          <Col>
            <Spacer height="70"></Spacer>
            <YouTube id="QKZcZeqNbQo" title="Mojo in 90s" />
          </Col>
        </Row>        

        {/* Install */}
        <Headline type="h3">Installing the Plugin</Headline>
        {/* <Text>Installing the Mojo Plugin for Adobe XD is super simple. Just open "Plugins -&gt; Discover Plugins..." in Adobe XD and search for "Mojo". Just click on "install" on you are all set up.</Text>
        <Text>Alternatively you can download the plugin directly from exploremojo.com.</Text> */}
        <Text>Install the plugin by double clicking the downladed .xdx file. This will open Adobe XD and the install process will start.</Text>
        
        {/* Sample Files */}
        {/* <Row>
          <Col md={7}> */}
            <Headline type="h3">Sample Files</Headline>
            <Text>
              {/* Mojo comes with a bunch of templates. Templates are great to explore the capabilities of Mojo. See how basic and more complex samples are created. Tempates are also the perfect starting point for your next projects. */}
              As part of the pre-release we provide four sample projects covering the different use cases. Download the files, open them in Adobe XD and use Mojo plugin to preview the samples in the browser.<br/>
            </Text>
            {/* <Text>
              You can also watch the following video covering all the sample files and how to preview these.
            </Text> */}
          {/* </Col>
          <Col>
            <Spacer height="70"></Spacer>
            <YouTube id="74qNvMWkWhE" title="Exploring Sample Files" />
          </Col>
        </Row> */}

        {/* Preview and Export */}
        {/* <Headline type="h3">Preview and Export</Headline>
        <Text>#WIP</Text> */}


        {/* ///////////////////////// */}
        {/* First Project */}
        <Headline type="h1">My First Project</Headline>
        <Text>Let's create something from scratch. This quick guide walks you through the steps of a typical Mojo composition. We will add effects, use the animation timeline and setup multiple Mojo scenes with a simple navigation flow.
        </Text>
        <Text>Watch this video and follow along.</Text>
        <Spacer height="20"></Spacer>
        <YouTube id="j9ap_lju7HI" title="Creating first Mojo composition from scratch" />

        {/* Mojo Effects */}
        {/* <Headline type="h3">Mojo Effects</Headline>
        <Text>#WIP</Text> */}

        {/* Animation Timeline */}
        {/* <Headline type="h3">Animation Timeline</Headline>
        <Text>#WIP</Text> */}

        {/* Artboards and Mojo Scenes */}
        {/* <Headline type="h3">Artboards and Mojo Scenes</Headline>
        <Text>#WIP</Text> */}

        {/* Outlook */}
        {/* <Headline type="h3">Outlook</Headline>
        <Text>#WIP</Text> */}

        {/* Outlook */}
        <Headline type="h3">Outlook</Headline>
        <Text>More videos covering all the distinct features and effects are in the making and will be published soon. So stay tuned.</Text>

        {/* Feedback */}
        <Headline type="h3">Feedback</Headline>
        <Text>We would love to hear back from you. Send us your thoughts, questions and feature requests: <a href="mailto:widjaja@trendspurt.com">widjaja@trendspurt.com</a></Text>

      </Container>
      

      <Spacer height="200"></Spacer>

    </LearnLayout>
  )
}
