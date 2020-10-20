import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import About from './components/About/index';
import Contact from './components/Contact/index';
import Projects from './components/Projects/index';
import Main from './components/Main'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader fixedDrawer>
        <Header title="Title" scroll>
        <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to=""></Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
                <Link to=""></Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
