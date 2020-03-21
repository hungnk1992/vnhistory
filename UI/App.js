import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import { Header, Tab, Tabs, TabHeading } from 'native-base';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    // await some function here to load resource or etc
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Header hasTabs/>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Home</Text></TabHeading>}>
            <Text >Something here!</Text>
          </Tab>
          <Tab heading={ <TabHeading><Text>About</Text></TabHeading>}>
            <Text>Something here!</Text>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}