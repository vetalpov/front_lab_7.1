import React, { Component } from "react";
import "./App.css";

function Header() {
  return <h2>Загуський Віталій Павлович</h2>;
}

function Image({ src, alt, width, height }) {
  return (
    <img
      id="amster-image"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorIndexes: {}, // Стан для відстеження кольору кожного текстового елемента
      imageVisible: true,
      imageWidth: 500,
      imageHeight: 280,
    };

    this.backgroundColors = ["#f0f0f0", "#d1c4e9", "#ffecb3", "#c8e6c9"];
    this.textColors = ["#ff5722", "#673ab7", "#ff9800", "#388e3c"];
  }

  handleItemClick = (index) => {
    this.setState((prevState) => {
      const currentColorIndex = prevState.colorIndexes[index] || 0;
      return {
        colorIndexes: {
          ...prevState.colorIndexes,
          [index]: (currentColorIndex + 1) % this.backgroundColors.length,
        },
      };
    });
  };

  addImage = () => {
    this.setState({ imageVisible: true });
  };

  increaseImage = () => {
    this.setState((prevState) => ({
      imageWidth: prevState.imageWidth * 1.2,
      imageHeight: prevState.imageHeight * 1.2,
    }));
  };

  decreaseImage = () => {
    this.setState((prevState) => ({
      imageWidth: prevState.imageWidth * 0.8,
      imageHeight: prevState.imageHeight * 0.8,
    }));
  };

  removeImage = () => {
    this.setState({ imageVisible: false });
  };

  render() {
    const { colorIndexes, imageVisible, imageWidth, imageHeight } = this.state;

    const hobbies = ["Малювання", "Дизайн", "Спорт", "Рессейл"];

    const education = [
      "Городоцький ліцей №1, м.Городок",
      "Хмельницький обласний ліцей Хмельницької обл. ради, м.Хмельницький",
      'НТУУ "КПІ", м.Київ',
    ];

    const movies = [
      '"Дюна 2", 2024',
      '"Трансформери 2", 2009',
      '"Світ Юрського періода", 2015',
    ];

    const favoriteCity = {
      name: "Амстердам",
      description:
        "Амстердам — столиця Нідерландів, відома своїми мальовничими каналами, багатою історією та культурною спадщиною.",
    };

    return (
      <div>
        <Header />

        <p>Місце народження: 15 березня 2005 року, м.Хмельницький</p>

        <p>Освіта:</p>
        <ul>
          {education.map((item, index) => (
            <li
              key={index}
              onClick={() => this.handleItemClick(index)}
              style={{
                backgroundColor:
                  this.backgroundColors[
                    colorIndexes[index] || 0
                  ], // Кожен елемент має свій колір
                color:
                  this.textColors[colorIndexes[index] || 0], // Колір тексту
              }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p>Хоббі:</p>
        <ul>
          {hobbies.map((hobby, index) => (
            <li
              key={index + education.length} // Унікальний ключ
              onClick={() => this.handleItemClick(index + education.length)} // Відстежуємо натискання
              style={{
                backgroundColor:
                  this.backgroundColors[
                    colorIndexes[index + education.length] || 0
                  ],
                color:
                  this.textColors[colorIndexes[index + education.length] || 0],
              }}
            >
              {hobby}
            </li>
          ))}
        </ul>

        <p>Улюблені фільми:</p>
        <ol>
          {movies.map((movie, index) => (
            <li
              key={index + education.length + hobbies.length} // Унікальний ключ
              onClick={() =>
                this.handleItemClick(index + education.length + hobbies.length)
              }
              style={{
                backgroundColor:
                  this.backgroundColors[
                    colorIndexes[
                      index + education.length + hobbies.length
                    ] || 0
                  ],
                color:
                  this.textColors[
                    colorIndexes[
                      index + education.length + hobbies.length
                    ] || 0
                  ],
              }}
            >
              {movie}
            </li>
          ))}
        </ol>

        <h3>Улюблене місто:</h3>
        <p>
          <b>{favoriteCity.name}</b> — {favoriteCity.description}
        </p>

        <div id="image-container">
          {imageVisible && (
            <Image
              src="/images/amster.jpg"
              alt="amster"
              width={imageWidth}
              height={imageHeight}
            />
          )}
        </div>

        <div id="buttons-container">
          <button onClick={this.addImage}>Додати</button>
          <button onClick={this.increaseImage}>Збільшити</button>
          <button onClick={this.decreaseImage}>Зменшити</button>
          <button onClick={this.removeImage}>Видалити</button>
        </div>
      </div>
    );
  }
}

export default Content;
