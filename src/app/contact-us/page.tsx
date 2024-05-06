import "./style.scss";
import Image from "next/image";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { PiChartLineDownLight } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";


const page = () => {
    return (
        <main className="contact-us">
            <section className="first-section motion-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1>
                                Contact Us
                            </h1>
                        </div>
                        <div className="col-lg-5"></div>
                    </div>
                </div>
            </section>

            <section className="second-section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-4">
                            <p>ADDRESS</p>
                            <h4>Lourdel Towers, Lourdel Road, Nakasero, Kampala, Uganda</h4>


                        </div>
                        <div className="col-lg-4">
                            <p>CONTACT</p>
                            <h4>
                                <ul>
                                    <li>Mobile: (+44) - 45789 - 5789</li>
                                    <li>E-mail: hello@example.com</li>
                                </ul>
                            </h4>


                        </div>
                        <div className="col-lg-4">
                            <p>WORKING HOURS</p>
                            <h4>
                                <ul>
                                    <li>Monday - Friday: 09:00 - 20:00</li>
                                    <li>Sunday & Saturday: 10:30 - 22:00</li>
                                </ul>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="third-section">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="card-view">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.006430004189!2d32.5768209!3d0.3313343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb74a7766f75%3A0x8ccd5e98c34d7bc5!2sLourdel%20Towers!5e0!3m2!1sen!2sin!4v1714939805216!5m2!1sen!2sin" width="100%" height="616" style={{ "border": 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card-view">

                                <h2>Let's Connect</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Phone no.</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Subject</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                                        <textarea rows={6} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-brand-primary">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default page;