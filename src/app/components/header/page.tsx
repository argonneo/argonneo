"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import useDetectScroll from "@smakss/react-scroll-direction";

const Header = () => {
  const { scrollDir, scrollPosition } = useDetectScroll();

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-dark fixed-top ${
          scrollDir === "down" && scrollPosition.top > 100
            ? "hide-header"
            : "show-header"
        } ${scrollPosition.top < 100 ? "header-bg-transparant" : ""}`}
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image width={120} height={40} className="" src="logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            <div className="offcanvas-header px-4">
              <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">
                <Image
                  width={120}
                  height={40}
                  className=""
                  src="logo.svg"
                  alt=""
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body px-4">
              <ul className="navbar-nav justify-content-end flex-grow-1 gap-2">
                <li className="nav-item dropdown">
                  <a
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle"
                    href="#"
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Argon Bank
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Board of Directors
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Meet Core Team
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle"
                    href="#"
                  >
                    Products
                  </a>
                  <div className="dropdown-menu p-4 text-body-secondary mega-menu">
                    <div className="row g-4">
                      <div className="col-lg-4">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <h6 className="dropdown-header px-0">Banking</h6>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Ordinary Savings Account
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Salary Savings Account
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Personal Current Account
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Business Current Account
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <h6 className="dropdown-header px-0">
                              Borrowing and Lending
                            </h6>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Unsecured Loans
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Secured Loans
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              P2P Lending and Borrowing
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Buy Now Pay Later
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-4">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <h6 className="dropdown-header px-0">Services</h6>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Money Transfer
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Agent Banking
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Insurance
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <h6 className="dropdown-header px-0">Cards</h6>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Debit Cards
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Credit Cards
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            <h6 className="dropdown-header px-0">Others</h6>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Argon Payment System (APS)
                            </a>
                          </li>
                          <li className="list-group-item">
                            <a className="text-decoration-none" href="#">
                              Investment
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Locate Kiosk
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Downloads
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    className="nav-link dropdown-toggle"
                    href="#"
                  >
                    Misc.
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Milestones
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Emergency Contact
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        News and Announcements
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
