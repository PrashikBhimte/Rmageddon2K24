import React from 'react';
import "./HeroPage.css";

export default function HeroPage() {
    return (
        <div className='background'>
            <nav>
                <ul>
                    <li><a href='#abc'>Games</a></li>
                    <li><a href='#abc'>Organisers</a></li>
                    <li><a href='#abc'>Conatct us</a></li>
                </ul>
            </nav>
            <div className='heromain'>
                <div className='heroinfo'>
                    <p>Rmageddon</p>
                    <p>Become an early Adopter</p>
                    <p>The mission of Sci-Fi World is to teach and
                        inspire people, Species of all ages with an
                        uplifting vision of the future.
                        We aren't just any artificial brain—it actually
                        functions like the human brain.
                    </p>
                </div>
                <button>Explore Now</button>
            </div>
            <div className='back2'>
                <div className='rnxginfo'>
                    <p>RNXG</p>
                    <p>Takes place 70 years after modern 
                    civilization has been destroyed. Joel, 
                    a hardened survivor, is hired to smuggle
                    Ellie, a 14-year-old girl, out of an 
                    oppressive quarantine zone. 
                    </p>
                    <div>
                        <button>Explore</button>
                        <div className='blackbar'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
