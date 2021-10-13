import React from 'react';
import TutorialCard from './Cards/TutorialCard';
import { Container, CardGroup } from 'react-bootstrap';
import HeroSection from './Hero/HeroSection';
import './../stylesheets/blog.css'
import FooterPage from './Footer/footer';
import NavBar from './NavBar/Nav';

// react router import start

// react router import end
// import dropdownButton from './ProfileButton/dropdown';

const MainComponents = (props) => {
    const cardHead = {
        borderRadius: '1rem 1rem 0rem 0rem',
        background: 'red'
    };



    const cards = ["Mobile App Testing", "Web App Testing", "API Testing"];

    return (
        <div className='font-link'>
            {/* Navbar start */}
            <NavBar/>

            {/* Navbar End */}
            {/* Hero section start */}
            <HeroSection/>
            {/* Hero section end */}
            {/* Card section */}
            <Container fluid style={{ padding: ' 0 5%', marginTop: '1rem', background: '#e8e8e8', paddingTop: '2rem', paddingBottom: '2rem' }}>


                <div className="tutorialHeader">
                    <h3 style={{}}>Tutorials : </h3>
                    <button type="button" className="slide">
                        <div>View All</div>
                        <i class="icon-arrow-right"></i>
                    </button>
                </div>
                {/* button start */}

                {/* Button End */}


                <CardGroup>
                        {cards.map((value, idx) => { return <TutorialCard key={idx} val={value} link={value} type="subject"/> })}
                </CardGroup>

            </Container>

            <Container fluid style={{ padding: ' 0 5%', marginTop: '1rem', background: '#e8e8e8', paddingTop: '2rem', paddingBottom: '2rem' }}>


                <div className="tutorialHeader">
                    <h3 >Interview Questions : </h3>
                    <button type="button" className="slide">
                        <div>View All</div>
                        <i class="icon-arrow-right"></i>
                    </button>
                </div>
                {/* button start */}

                {/* Button End */}


                <CardGroup>
                        {cards.map((value,idx) => { return <TutorialCard key={idx} val={value} link={value} type="interview"/> })}
                </CardGroup>

            </Container>


            {/* //mbd testing */}


            <FooterPage />
        </div >
    );
}

export default MainComponents;