class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);

    this.IMAGE_PARTS = 4;

    this.changeTO = null;
    this.AUTOCHANGE_TIME = 5000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return /*#__PURE__*/ React.createElement(
      "div",
      {
        className: classNames("slider", { "s--ready": sliderReady }),
      } /*#__PURE__*/,
      React.createElement(
        "p",
        { className: "slider__top-heading" },
        "Animafi Aduana Development Organization"
      ) /*#__PURE__*/,
      React.createElement(
        "div",
        { className: "slider__slides" },
        this.props.slides.map((slide, index /*#__PURE__*/) =>
          React.createElement(
            "div",
            {
              className: classNames("slider__slide", {
                "s--active": activeSlide === index,
                "s--prev": prevSlide === index,
              }),
              key: slide.city,
            } /*#__PURE__*/,

            React.createElement(
              "div",
              { className: "slider__slide-content" } /*#__PURE__*/,
              React.createElement(
                "h3",
                { className: "slider__slide-subheading" },
                slide.country || slide.city
              ) /*#__PURE__*/,
              React.createElement(
                "h2",
                { className: "slider__slide-heading" },
                slide.city
                  .split("")
                  .map((l) =>
                    /*#__PURE__*/ React.createElement("span", null, l)
                  )
              ) /*#__PURE__*/,

              React.createElement(
                "p",
                { className: "slider__slide-readmore" },
                "read more"
              )
            ) /*#__PURE__*/,

            React.createElement(
              "div",
              { className: "slider__slide-parts" },
              [...Array(this.IMAGE_PARTS).fill()].map((x, i /*#__PURE__*/) =>
                React.createElement(
                  "div",
                  { className: "slider__slide-part", key: i } /*#__PURE__*/,
                  React.createElement("div", {
                    className: "slider__slide-part-inner",
                    style: { backgroundImage: `url(${slide.img})` },
                  })
                )
              )
            )
          )
        )
      ) /*#__PURE__*/,

      React.createElement("div", {
        className: "slider__control",
        onClick: () => this.changeSlides(-1),
      }) /*#__PURE__*/,
      React.createElement("div", {
        className: "slider__control slider__control--right",
        onClick: () => this.changeSlides(1),
      })
    );
  }
}

const slides = [
  {
    city: "Image01",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image01.jpeg?raw=true",
  },
  {
    city: "Image02",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image02.jpeg?raw=true",
  },
  {
    city: "Image03",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image03.jpeg?raw=true",
  },
  {
    city: "Image04",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image04.jpeg?raw=true",
  },
  {
    city: "Image05",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image05.jpeg?raw=true",
  },
  {
    city: "Image06",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image06.jpeg?raw=true",
  },
  ,
  {
    city: "Image07",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image07.jpeg?raw=true",
  },
  ,
  {
    city: "Image08",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image08.jpeg?raw=true",
  },
  ,
  {
    city: "Image09",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image09.jpeg?raw=true",
  },
  ,
  {
    city: "Image10",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image10.jpeg?raw=true",
  },
  ,
  {
    city: "Image11",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image11.jpeg?raw=true",
  },
  ,
  {
    city: "Image12",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image12.jpeg?raw=true",
  },
  ,
  {
    city: "Image13",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image13.jpeg?raw=true",
  },
  ,
  {
    city: "Image14",
    country: "Ghana",
    img: "https://github.com/RandolphG/animafiAduana/blob/master/src/assets/_image14.jpeg?raw=true",
  },
];

ReactDOM.render(
  /*#__PURE__*/ React.createElement(CitiesSlider, { slides: slides }),
  document.querySelector("#app")
);
