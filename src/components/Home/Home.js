import './home.css'
import React from 'react';
import Nav from 'components/Nav/Nav';
import Footer from 'components/Footer/Footer';
import HomeBookList from 'components/HomeBookList/HomeBookList';
import BooksList from 'components/BooksList/BooksList';
import slider from 'react-slick';

export default class Home extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      current_slide : '0',
      dot : [
        'home_carousel_dot_one fa fa-dot-circle-o',
        'home_carousel_dot_one fa fa-circle-o',
        'home_carousel_dot_one fa fa-circle-o',
        'home_carousel_dot_one fa fa-circle-o'
      ]
    }

    this.carouselSlide = this.carouselSlide.bind(this);
    this.renderSlide = this.renderSlide.bind(this);
    this.setDot = this.setDot.bind(this);
  }

  renderSlide(){
    let {current_slide} = this.state;

    let slides = {
      zero : <div className="home_carousel_image home_carousel_one"><div className="home_carousel_content">Slide 0</div></div>,
      one : <div className="home_carousel_image home_carousel_two"><div className="home_carousel_content">Slide 1</div></div>,
      two : <div className="home_carousel_image home_carousel_three"><div className="home_carousel_content">Slide 2</div></div>,
      four : <div className="home_carousel_image home_carousel_four"><div className="home_carousel_content">Slide 3</div></div>
    }
    return(
      <div>
        {slides[Object.keys(slides)[current_slide]]}
      </div>
    )
  }

  setDot(num){
    let {current_slide} = this.state;
    let dot = [
      'home_carousel_dot_one fa fa-circle-o',
      'home_carousel_dot_one fa fa-circle-o',
      'home_carousel_dot_one fa fa-circle-o',
      'home_carousel_dot_one fa fa-circle-o'
    ]
    dot[num] = 'home_carousel_dot_one fa fa-dot-circle-o';

    this.setState({
      dot : dot,
      current_slide : num
    })
  }

  carouselSlide(operator){
    let {current_slide} = this.state;
    let dot = [
      'home_carousel_dot_one fa fa-circle-o',
      'home_carousel_dot_one fa fa-circle-o',
      'home_carousel_dot_one fa fa-circle-o',
      'home_carousel_dot_one fa fa-circle-o'
    ]

    if ( current_slide > 2 && operator === '+'){
      current_slide = 0;
      dot[current_slide] = 'home_carousel_dot_one fa fa-dot-circle-o';
      this.setState({
        current_slide : current_slide,
        dot : dot
      })
    } else if ( current_slide < 1 && operator === '-' ){
      current_slide = 3;
      dot[current_slide] = 'home_carousel_dot_one fa fa-dot-circle-o';
      this.setState({
        current_slide : current_slide,
        dot : dot
      })
    } else {
      current_slide = eval( current_slide + operator + 1 )
      dot[current_slide] = 'home_carousel_dot_one fa fa-dot-circle-o';
      this.setState({
        current_slide : current_slide,
        dot : dot
      })
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
              <i className={this.state.dot[0]} aria-hidden="true" onClick={() => this.setDot('0')}></i>
              <i className={this.state.dot[1]} aria-hidden="true" onClick={() => this.setDot('1')}></i>
              <i className={this.state.dot[2]} aria-hidden="true" onClick={() => this.setDot('2')}></i>
              <i className={this.state.dot[3]} aria-hidden="true" onClick={() => this.setDot('3')}></i>
            </div>

            <HomeBookList allBooks={this.props.allBooks}/>
          </div>
        <Footer />
      </div>
    );
  };
}
