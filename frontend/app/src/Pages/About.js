import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './About.css'
import Sma from '../Components/Sma';
const About = () => {
  return (
    <div className='about'>
      <h1 className='head'>About Us</h1>
      <p className='parah'>Chandan, Vijayendra, Balamurali, and Abhishek, a quartet of talented web development students from Sahyadri College of Engineering, joined forces to create a culinary masterpiece in the digital world. Vijayendra, a coding virtuoso, spearheaded the technical aspects of the project, meticulously crafting the website's architecture and ensuring its smooth functionality. His expertise in programming languages brought the recipe website to life, providing users with a seamless and intuitive experience.</p>
      <p className='parah'>Chandan, the team's culinary connoisseur, passionately curated a diverse and delectable assortment of recipes that catered to a wide range of tastes and preferences. His dedication to culinary excellence was evident in the carefully crafted content that graced the website. Balamurali, with an eye for aesthetics and user experience, designed an engaging and visually pleasing interface that captivated visitors from the moment they landed on the site. Abhishek, the group's marketing guru, skillfully promoted the website, attracting a thriving online community of food enthusiasts eager to explore, share, and learn. Together, these four students from Sahyadri College of Engineering not only showcased their technical prowess but also created a recipe website that brought the joy of cooking to countless individuals, bridging the gap between technology and the culinary arts.</p>

      <h2 className='head' style={{ textAlign: 'center' }}>Our Team</h2>
      <Card className=" mb-2 text-center">
      <Card.Header>CEO & Founder</Card.Header>
      <Card.Body>
        <Card.Title>Balamurali</Card.Title>
        <Card.Text>
        Balamurali, a promising web-developing student hailing from the Information Science department of Sahyadri College of Engineering and Management, stands out as a beacon of creativity and design acumen. With a passion for crafting visually captivating and user-friendly digital experiences, Balamurali is known for his meticulous attention to detail and flair for aesthetics. His ability to seamlessly blend form and functionality has earned him recognition among peers and professors alike. Whether it's architecting an intuitive user interface or optimizing website performance, Balamurali's dedication to enhancing the digital landscape is truly commendable. His innovative approach and commitment to excellence make him a rising star in the field of web development, promising a bright future filled with captivating online experiences.
        </Card.Text>
        <Card.Text>
          Bala@gmail.com
        </Card.Text>
        <Button className='btn btn-outline-danger' >Contact</Button>
        <Sma/>
      </Card.Body>
    </Card><Card className="text-center">
      <Card.Header>CFO & Developer</Card.Header>
      <Card.Body>
        <Card.Title>Chandan</Card.Title>
        <Card.Text>
        Chandan, a standout web-developing student hailing from the Information Science department of Sahyadri College of Engineering and Management, is the visionary project head behind numerous innovative web ventures. Possessing an exceptional aptitude for coding and technical problem-solving, Chandan is the driving force behind his team's success. His leadership and technical expertise have consistently propelled projects to new heights, and his ability to architect robust and scalable web applications is widely recognized. Chandan's dedication to pushing the boundaries of web development, coupled with his strong leadership skills, positions him as a trailblazer in the field, and his contributions continue to make a lasting impact within the academic community and beyond.
        </Card.Text>
        <Card.Text>
          Kiara@gmail.com
        </Card.Text>
        <Button className='btn btn-outline-danger' >Contact</Button>
        <Sma/>
      </Card.Body>
    </Card><Card className="text-center">
      <Card.Header>Full-stack developer</Card.Header>
      <Card.Body>
        <Card.Title>Vijayendra</Card.Title>
        <Card.Text>
        Vijayendra, a proficient backend developer hailing from the Information Science department of Sahyadri College of Engineering and Management, is a driving force behind the digital innovation within his academic community. With a keen understanding of programming languages, database management, and server-side technologies, Vijayendra is the go-to expert for creating robust and efficient backend systems. His meticulous coding skills and problem-solving prowess have earned him a reputation as a reliable and resourceful developer. Whether it's optimizing database queries for faster data retrieval or implementing secure authentication systems, Vijayendra's commitment to building the backbone of web applications is truly commendable. His dedication to delivering high-performance backend solutions showcases his potential to excel in the field of information science and contribute significantly to the ever-evolving world of technology.
        </Card.Text>
        <Card.Text>
          Vijay@gmail.com
        </Card.Text>
        <Button className='btn btn-outline-danger' >Contact</Button>
        <Sma/>
      </Card.Body>
    </Card>
    <Card className="text-center">
      <Card.Header>Designer</Card.Header>
      <Card.Body>
        <Card.Title>Abhishek</Card.Title>
        <Card.Text>
        Abhishek, a multifaceted web developer and designer hailing from the Information Science department of Sahyadri College of Engineering and Management, is a creative force to be reckoned with. With a profound understanding of both the technical and aesthetic aspects of web development, Abhishek brings a unique blend of skills to the table. His ability to seamlessly merge cutting-edge design concepts with impeccable coding expertise has earned him a reputation as a visionary in the field. Abhishek's passion for innovation and user-centric design shines through in every project he takes on, resulting in websites that not only look stunning but also offer exceptional user experiences. His dedication to pushing the boundaries of web development and design promises to leave a lasting impact on the digital landscape, making him a standout talent in his field.
        </Card.Text>
        <Card.Text>
          Abhi@gmail.com
        </Card.Text>
        <Button className='btn btn-outline-danger' >Contact</Button>
        <Sma/>
      </Card.Body>
    </Card>
    </div>
  );
};

export default About;
