import React, { Component } from "react";
import Banner from "./Banner";

const data = [
  {
    id: 1,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 2,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 3,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 4,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 5,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 6,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 7,
    title: "Aenean viverra rhoncus?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  },
  {
    id: 8,
    title: "Pellentesque habitant morbi tristique?",
    content:
      "Dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh etjusto cursus id rutrum lorem imperdiet."
  }
];

export default class Faq extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    this.setState({ data: data });
  }
  render() {
    return (
      <React.Fragment>
        <Banner />
        <div className="light-gray section">
          <div className="w-container">
            <div className="top-title">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div>
              <div className="w-row">
                <div className="w-col w-col-12">
                  {this.state.data.map(post => {
                    return (
                      <React.Fragment>
                        <div>
                          <h3 className="faq-title">{post.title}</h3>
                          <p>{post.content}</p>
                        </div>
                        <div className="space" />
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
