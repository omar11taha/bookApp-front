/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
export class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BooksData: [],
    };
  }

  componentDidMount =  () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/books`)
      .then((bookResponse) => {
        this.setState({ BooksData: bookResponse.data });
        console.log(this.state.BooksData);
      })
      .catch((error) => alert(error.message));
  };

  render() {
    return (
      <div>
        {(this.state.BooksData.length > 0) ? (
          <>
            <Carousel>
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1304642/pexels-photo-1304642.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt="Image One"
                />
                <Carousel.Caption>
                  <h3>{this.state.BooksData[0].title}</h3>
                  <p>{this.state.BooksData[0].description}</p>
                  <p>{this.state.BooksData[0].status}</p>
                  <p>{this.state.BooksData[0].email}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1304642/pexels-photo-1304642.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h3>{this.state.BooksData[1].title}</h3>
                  <p>{this.state.BooksData[1].description}</p>
                  <p>{this.state.BooksData[1].status}</p>
                  <p>{this.state.BooksData[1].email}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1304642/pexels-photo-1304642.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h3>{this.state.BooksData[2].title}</h3>
                  <p>{this.state.BooksData[2].description}</p>
                  <p>{this.state.BooksData[2].status}</p>
                  <p>{this.state.BooksData[2].email}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </>
        ) : (
          <p> "No Data Found" </p>
        )}
      </div>
    );
  }
}

export default Books;
