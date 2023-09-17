import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header/';
import Footer from './components/common/Footer/';
import HomePage from './components/home/HomePage/';
import CourseOfferedPage from './components/course/CourseOfferedPage/';
import AboutUsPage from './components/about/AboutUsPage/';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/courses" component={CourseOfferedPage} />
          <Route path="/about" component={AboutUsPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
export default App;
