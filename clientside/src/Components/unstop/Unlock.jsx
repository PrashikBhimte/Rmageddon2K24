import { React } from 'react';
import './Unlock.css';

const Unlock = () => {
    return (
        <div className='main'>
            <div id='unlock' className='unlock-parentdiv'>
                <img alt='background' src="https://res.cloudinary.com/doiocpcni/image/upload/v1704271063/Rmageddon2K24/back1-removebg_kf9mxb.png" id='background' />
                <div className='unlock-maindiv'>
                    <div className='unlock-text-div'>
                    <p className='unlock-text'>Unlock Your Potential through Rmageddon <br />After Participating</p>
                    </div>
                    <ul className='unlock-content'>
                        <li>Development of teamwork and learn "GAMESMANSHIP" and "CREATIVITY" - a crucial 21st century skills.</li>
                        <li>Exceptional hands-on learning experience with designing, building and complement your engineering curriculum.</li>
                        <li> Exciting Prizes,Certificates after completion and a ton of excitement.</li>
                        <li>By participating in the competition, familiarize yourself with SCI-FI realm.</li>
                    </ul>
                    <div className="award">
                        <div className="cash-prize">
                            <p className="unlock-heading">Cash Prizes</p>
                            <p className='award-p'>Cash prize for each Game.</p>

                        </div>

                        <div className="certificate">
                            <p className="unlock-heading">Certificate of Participation</p>
                            <p className='award-p'>Every Participant will get the Certificate</p>
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