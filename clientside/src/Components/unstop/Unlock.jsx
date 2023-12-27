import { React } from 'react';
import './Unlock.css';
import Image from '../../images/back1-removebg.png';

const Unlock = () => {
    return (
        <div className='main'>
            <div id='unlock' className='unlock-parentdiv'>
                <img alt='background' src={Image} id='background' />
                <div className='unlock-maindiv'>
                    <p className='unlock-text'>Unlock Your Potential<br />through Rmageddon <br />After Participating</p>
                    <ul className='unlock-content'>
                        <li>Development of teamwork and project management skills</li>
                        <li>Hands-on experience with designing, building, and programming robots</li>
                        <li>Exciting Prizes and Certificates after completion</li>
                        <li>Top 3 teams from each game will be allowed to sit for interviews for direct recruitment!!</li>
                        <li>Teams will be awarded on the basis of their design, speed and other parameters of their bots.</li>
                    </ul>
                    <div className="award">
                        <div className="cash-prize">
                            <p className="unlock-heading">Cash Prizes</p>
                            <p className='award-p'>The Overall Cash Prize of Rs.50,000 </p>

                        </div>

                        <div className="certificate">
                            <p className="unlock-heading">Certificate of Participation</p>
                            <p className='award-p'>Every Participate will get the Certificate</p>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );

};


export default Unlock;