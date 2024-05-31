import React from "react";
import { useParams } from 'react-router-dom';
import infopantai from "./infopantai";

function Mapspantai() {
    const { id } = useParams();
    const pantai = infopantai.find(item => item.id === parseInt(id));

    if (!pantai) {
        return <div>Location not found</div>;
    }

    return (
        <div>
            <section
                id="about"
                className="about section-padding"
                style={{ marginBottom: "10px" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="about-img">
                                <iframe
                                    src={pantai.maps}
                                    width="100%"
                                    height="350"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12 mt-md-4 mt-lg-0">
                            <div className="about-text">
                                <h2>Our Location</h2>
                                <br />
                                <p>{pantai.alamat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mapspantai;
