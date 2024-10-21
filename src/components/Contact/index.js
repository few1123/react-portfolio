import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2 className="contact-me">Contact Me</h2>
          <p>
            Feel free to reach out to me for any inquiries or opportunities related to Computer Networks 
            or IoT Networks. You can contact me through the following channels:
          </p>
          <p>Email: [Angkhawee5@gmail.com]</p>
          <p>Phone: [0971288228]</p>
          <p>Resume: []</p>
          <p>I look forward to connecting with you!</p>
        </div>
        <div className="info-map">
          The Curve
          <br />
          Thailand
          <br />
          316 73 ซอย วงศ์สว่าง 11 แขวงบางซื่อ เขตบางซื่อ กรุงเทพมหานคร 10800
          <br />
        </div>
        <div className="map-wrap">
          <MapContainer center={[13.826398, 100.515558]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[13.826398, 100.515558]} />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
