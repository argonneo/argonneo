import "./style.scss";
import Image from "next/image";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { PiChartLineDownLight } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";


const page = () => {
    return (
        <main className="argon-bank">
            <section className="first-section motion-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <h1>
                                About Us
                            </h1>
                        </div>
                        <div className="col-lg-5"></div>
                    </div>
                </div>
            </section>

            <section className="second-section">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <p>ARGON BANK</p>
                            <h2>Known for Trust, Honesty & Customer Support</h2>
                            <p>Argon Bank is one of the global virtual banking services, which, in fact, was created as a mobile application from an organization that is not a bank, but promotes its services as banking, relying on legal and processing support Partner bank.</p>
                            <button className="btn btn-brand-primary mt-4">GET STARTED NOW</button>
                        </div>
                        <div className="col-lg-6">
                            <Image className="img-fluid rounded" width={600} height={400} src={'/about-us/about-argon-img.jpg'} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="third-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-view">
                                <Image className="img-fluid" width={416} height={277} src="/common/placeholder.png" alt="" />
                                <h4>Core Value</h4>
                                <p>Obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man always holds these matters to this principle of selection rejects pleasures to secure other greater pleasures.ˀ</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-view">
                                <Image className="img-fluid" width={416} height={277} src="/common/placeholder.png" alt="" />
                                <h4>Mission</h4>
                                <p>Obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man always holds these matters to this principle of selection rejects pleasures to secure other greater pleasures.ˀ</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-view">
                                <Image className="img-fluid" width={416} height={277} src="/common/placeholder.png" alt="" />
                                <h4>Vision</h4>
                                <p>Obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man always holds these matters to this principle of selection rejects pleasures to secure other greater pleasures.ˀ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fifth-section">
                <div className="container">
                    <div className="text-center">
                        <h2 className="mb-4">Why Choose Us</h2>

                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3">
                            <div className="card p-4">
                                <RiSecurePaymentLine className="my-3 fs-1" />
                                <h4>Secure International Transaction</h4>
                                <p>
                                    Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-4">
                                <IoTimerOutline className="my-3 fs-1" />
                                <h4>Less Time in any Loans Approval</h4>
                                <p>
                                    Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-4">
                                <PiChartLineDownLight className="my-3 fs-1" />
                                <h4>Lowest Processing Fee than Other Banks</h4>
                                <p>
                                    Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
                                </p>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card p-4">
                                <BiSupport className="my-3 fs-1" />
                                <h4>24/7 Support from the Expert Team</h4>
                                <p>
                                    Tortor neque sed tellus estian eget dui id ante tristique more tristique dolor.
                                </p>

                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <section className="container">
                <div className="sixth-section">
                    <h3>Get in touch</h3>
                    <p>We are here to help your business reach its goals</p>
                    <button className="btn btn-brand-primary">Contact Us</button>
                </div>
            </section>
        </main>
    );
}

export default page;