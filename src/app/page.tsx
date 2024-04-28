'use client'
import "./styles/home-style.scss";
import Image from "next/image";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { MdChevronRight } from "react-icons/md";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

export default function Home() {

  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
  };

  const testimonial = [
    { 
      name: 'John Snow1',
      designation: 'CEO',
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque justo, suscipit eu cursus nec, congue id nunc. Nullam a quam molestie, semper libero vel, elementum ante. Quisque tristique neque quis imperdiet feugiat. Nullam nec urna et justo lobortis blandit. Praesent tempor nec velit non congue.",
      img:'/user-img.jpg'
     },
    { 
      name: 'John Snow2',
      designation: 'CEO',
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque justo, suscipit eu cursus nec, congue id nunc. Nullam a quam molestie, semper libero vel, elementum ante. Quisque tristique neque quis imperdiet feugiat. Nullam nec urna et justo lobortis blandit. Praesent tempor nec velit non congue.",
      img:'/user-img.jpg'
     },
    { 
      name: 'John Snow3',
      designation: 'CEO',
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque justo, suscipit eu cursus nec, congue id nunc. Nullam a quam molestie, semper libero vel, elementum ante. Quisque tristique neque quis imperdiet feugiat. Nullam nec urna et justo lobortis blandit. Praesent tempor nec velit non congue.",
      img:'/user-img.jpg'
     },
    { 
      name: 'John Snow4',
      designation: 'CEO',
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque justo, suscipit eu cursus nec, congue id nunc. Nullam a quam molestie, semper libero vel, elementum ante. Quisque tristique neque quis imperdiet feugiat. Nullam nec urna et justo lobortis blandit. Praesent tempor nec velit non congue.",
      img:'/user-img.jpg'
     },
    
  ]

  return (
    <main>
      <section className="first-section motion-color">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1>
                The Secure Way to Bank on the fingertip
                <br />
                <span>Future of Banking</span>
              </h1>
              <p className="w-50 mt-4">
                Applications that power financial institutions, marketplaces
                that accelerate industry & an open innovation platform for
                banks, fintechs & non-banks to connect and collaborate
              </p>
            </div>
            <div className="col-lg-5"></div>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="container">
          <div className="row gy-lg-0 gy-4">
            <div className="col-lg-4">
              <div className="floating-card">
                <div className="content">
                  <p className="fs-5">
                    What’s ‘must have’ in 2024 for Financial Institutions?
                  </p>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="floating-card">
                <div className="content">
                  <p className="fs-5">
                    What’s ‘must have’ in 2024 for Financial Institutions?
                  </p>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="floating-card">
                <div className="content">
                  <p className="fs-5">
                    What’s ‘must have’ in 2024 for Financial Institutions?
                  </p>
                  <a href="#">Discover Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className="container">
          <div className="content mb-5">
            <p>ARGON BANK</p>
            <h3>
              Explore Argon Bank
              <br />
              <span>Watch season 2 now</span>
            </h3>
            <p>
              Are you prepared to compete in the modern digital banking
              landscape?
            </p>
            <p>
              Uncover the transformative trends shaping the world of finance and
              be inspired with insights from industry experts.{" "}
              <strong>FINANCE IS OPEN</strong>.
            </p>
          </div>
          <div className="row gy-4 card-view">
            <div className="col-lg-4">
              <Image
                width={340}
                height={266}
                className="img-fluid w-100 mb-4"
                src={"/placeholder.png"}
                alt=""
              />
              <h4>Mobile-First Experience</h4>
              <p>
                Argon banks ditch physical branches altogether, focusing on
                user-friendly mobile apps for all your banking needs. This makes
                banking convenient and accessible anytime, anywhere.
              </p>
            </div>
            <div className="col-lg-4">
              <Image
                width={340}
                height={266}
                className="img-fluid w-100 mb-4"
                src={"/placeholder.png"}
                alt=""
              />
              <h4>Mobile-First Experience</h4>
              <p>
                Argon banks ditch physical branches altogether, focusing on
                user-friendly mobile apps for all your banking needs. This makes
                banking convenient and accessible anytime, anywhere.
              </p>
            </div>
            <div className="col-lg-4">
              <Image
                width={340}
                height={266}
                className="img-fluid w-100 mb-4"
                src={"/placeholder.png"}
                alt=""
              />
              <h4>Mobile-First Experience</h4>
              <p>
                Argon banks ditch physical branches altogether, focusing on
                user-friendly mobile apps for all your banking needs. This makes
                banking convenient and accessible anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth-section">
        <div className="container">
          <h3 className="mb-4">
            Explore Argon’s solutions that can make you ready for today and the
            future.
          </h3>
          <nav>
            <div
              className="nav nav-tabs nav-justified"
              id="nav-tab"
              role="tablist"
            >
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Home
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Profile
              </button>
              <button
                className="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Contact
              </button>
              <button
                className="nav-link"
                id="nav-disabled-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-disabled"
                type="button"
                role="tab"
                aria-controls="nav-disabled"
                aria-selected="false"
              >
                Disabled
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="tab-view">
                <p className="fs-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, neque qui velit. Magni dolorum quidem ipsam eligendi,
                  totam, facilis laudantium cum accusamus ullam voluptatibus
                  commodi numquam, error, est. Ea, consequatur.
                </p>
                <Image
                  width={300}
                  height={250}
                  className="img-fluid"
                  src={"/tab-img.jpg"} alt={""} />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="tab-view">
                <p className="fs-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, neque qui velit. Magni dolorum quidem ipsam eligendi,
                  totam, facilis laudantium cum accusamus ullam voluptatibus
                  commodi numquam, error, est. Ea, consequatur.
                </p>
                <Image
                  width={300}
                  height={250}
                  className="img-fluid"
                  src={"/tab-img.jpg"}
                  alt={""}
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="tab-view">
                <p className="fs-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, neque qui velit. Magni dolorum quidem ipsam eligendi,
                  totam, facilis laudantium cum accusamus ullam voluptatibus
                  commodi numquam, error, est. Ea, consequatur.
                </p>
                <Image
                  width={300}
                  height={250}
                  className="img-fluid"
                  src={"/tab-img.jpg"}
                  alt={""}
                />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
            >
              <div className="tab-view">
                <p className="fs-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Optio, neque qui velit. Magni dolorum quidem ipsam eligendi,
                  totam, facilis laudantium cum accusamus ullam voluptatibus
                  commodi numquam, error, est. Ea, consequatur.
                </p>
                <Image
                  width={300}
                  height={250}
                  className="img-fluid"
                  src={"/tab-img.jpg"}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3>
                Build the future. <br />
                Open collaboration.
              </h3>
              <Image width={540} height={431} src={"/pic-5.jpg"} alt={""} />
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="card p-4">
                    <h4>Add Your Heading Text Here</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card p-4">
                    <h4>Add Your Heading Text Here</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card p-4">
                    <h4>Add Your Heading Text Here</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card p-4">
                    <h4>Add Your Heading Text Here</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                    <a href="#">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sixth-section">
        <div className="container">
          <h3>Get in touch</h3>
          <p>We are here to help your business reach its goals</p>
          <button className="btn btn-brand-primary">Contact Us</button>
        </div>
      </section>
      <section className="seventh-section">
        <div className="container">
          <h3 className="mb-4">What People Think About Us</h3>
          <Splide hasTrack={false} options={options}>
            <SplideTrack>
              {
                testimonial.map((ele, index) => {
                  return (<SplideSlide key={index} className="testimonial">
                    <div className="testimonial-card">
                      <Image width={100} height={100} className="img-fluid user-image" src={'/user-img.jpg'} alt=""/>
                      <div className="content">{ele.testimonial}
                        <ImQuotesLeft className="left-qoute" />
                        <ImQuotesRight className="right-qoute" /></div>
                      <h6>{ele.name}</h6>
                      <p>{ele.designation}</p>
                    </div>
                  </SplideSlide>)
                })
              }
            </SplideTrack>
            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev"><MdChevronRight /></button>
              <button className="splide__arrow splide__arrow--next"><MdChevronRight /></button>
            </div>
          </Splide>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leoLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
      </section>
    </main>
  );
}
