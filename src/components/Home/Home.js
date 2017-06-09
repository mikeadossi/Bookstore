import './home.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import HomeBookList from 'components/HomeBookList/HomeBookList';
import BooksList from 'components/BooksList/BooksList';
import {Motion, spring} from 'react-motion';
import slider from 'react-slick';

export default class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      current_slide : '1'
    }

    this.slideLeft = this.slideLeft.bind(this);
    this.slideRight = this.slideRight.bind(this);
    this.carouselSlide = this.carouselSlide.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
  }

  slideLeft(){
    console.log('left')
  }

  slideRight(){
    console.log('right')
  }

  renderSlide(){
    let slides = {
      zero : <div className="home_carousel_image home_carousel_one"><div className="home_carousel_content">Slide 1</div></div>,
      one : <div className="home_carousel_image home_carousel_two"><div className="home_carousel_content">Slide 2</div></div>,
      two : <div className="home_carousel_image home_carousel_three"><div className="home_carousel_content">Slide 3</div></div>,
      four : <div className="home_carousel_image home_carousel_four"><div className="home_carousel_content">Slide 4</div></div>
    }
    let {current_slide} = this.state;
    console.log('>>>>>>> ',slides[Object.keys(slides)[current_slide]]);
    return(
      <div>
        {slides[Object.keys(slides)[current_slide]]}
      </div>
    )
  }

  carouselSlide(operator){
    let {current_slide} = this.state;
    if ( current_slide === 3 && operator === '+'){
      current_slide = 0;
      this.setState({
        current_slide : current_slide
      })
      console.log('FORWARD current_slide => ',current_slide)
    } else if ( current_slide === 0 && operator === '-' ){
      current_slide = 3
      this.setState({
        current_slide : current_slide
      })
      console.log('BACK current_slide => ',current_slide)
    } else {
      current_slide = eval( current_slide + operator + 1 )
      this.setState({
        current_slide : current_slide
      })
      console.log('ADD current_slide => ',current_slide)
    }
  }


  render(){
    return(
      <div>
        <Nav />
          <div className="home_container">

            <div className="home_carousel">
              <div className="home_arrow_container">
                <div className="home_left_arrow_container">
                  <button className="home_arrows home_arrow_left fa fa-arrow-circle-left" aria-hidden="true" onClick={() => this.carouselSlide('-')}></button>
                </div>
                <div className="home_right_arrow_container">
                  <button className="home_arrows home_arrow_right fa fa-arrow-circle-right" aria-hidden="true" onClick={() => this.carouselSlide('+')}></button>
                </div>
              </div>

              {this.renderSlide()}
            </div>

            <div className="home_carousel_dots_container">
              <i className="home_carousel_dot_one fa fa-circle-o" aria-hidden="true"></i>
              <i className="home_carousel_dot_two fa fa-circle-o" aria-hidden="true"></i>
              <i className="home_carousel_dot_three fa fa-circle-o" aria-hidden="true"></i>
              <i className="home_carousel_dot_four fa fa-circle-o" aria-hidden="true"></i>
            </div>

            <HomeBookList allBooks={this.props.allBooks}/>
          </div>
        <Footer />
      </div>
    );
  };
}
