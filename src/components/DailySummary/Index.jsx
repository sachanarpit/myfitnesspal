import React from 'react'
import style from '../DailySummary/Index.css'
import { Heading1, Heading5, Heading6 } from '../GlobalComp/Heading.Pages.Signup'
import mockaroo from '../DailySummary/MOCK_DATA.json'
import {SignUpNextButton} from '../GlobalComp/SignUp.Pages.Button'
import Demoimg from '../DailySummary/myfitness1.png'

export const Index = () => {
    console.log(mockaroo[1]);
    return (
        <div>

            <div className='top-section'>
                <div className='title-bar'>
                    <div>
                        <p className='text-from-top'>Your Daily Summary</p>
                    </div>
                    <div className='float-right'>
                        1 DAY
                        STREAK
                    </div>
                    <div className='data-container'>
                        <div className='uplode-img'><img src="" alt="no-img" /></div>
                        <div></div>
                        <div>
                            <div className='Calories-details'>
                                <div>
                                    <div className='Calories-details-div'>Calories Remaining</div>
                                    <a href='#'>Change goal ?</a>
                                </div>
                                <div className='Calories-count'>
                                    <Heading1 style={{color:"#85C400"}}>{mockaroo[1].Calories_Remaining}</Heading1>
                                    </div>
                            </div>
                            <div className='goal-details-and-button'>
                                <div className='Calories-goal'>Goal <span>{mockaroo[1].Goal}</span></div>
                                <div>
                                    <button className='btn-1'>ADD EXCERCISE</button>
                                </div>
                                <div>
                                <button className='btn-1'>ADD FOOD</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    
                </div>
                <div>
                    <Heading6>Recent Forum Topics</Heading6>
                    <ul>
                        <li>Is cycling good ? </li>
                        <li>Is cycling good ? </li>
                        <li>What mini-goal is motivating you right now ?</li>
                        <li>Doing 1 year of Keto</li>
                        <li>Do dieting really helps ?</li>
                    </ul>
                    <a href='#'>View All...</a>
                </div>


                <div className='Net-calories-detils'>
                    <div>{mockaroo[1].GAINED}
                    <p>Gained</p>
                    </div>
                <div>{mockaroo[1].Food}
                <p>FOOD</p>
                </div>
                <div> - </div>
                <div>{mockaroo[1].EXCERCISE}
                <p>EXCERCISE</p>
                </div>
                <div>=</div>
                <div>{mockaroo[1].Food - mockaroo[1].EXCERCISE}
                <p>NET</p></div>
            </div>
            </div>

            <div className='img-container'>
                <div>
                <img className='demo-img' src={Demoimg} alt="" />
                    <div className='write-something'>Share your thoughts...</div>
                    <input className='text-area' type="text" placeholder='What’s in your mind ?'/>
                    <div className='post-button'>
                        <button>POST</button>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <Heading6>Recent Forum Topics</Heading6>
                    <ul>
                        <li>Streak is not completed yet</li>
                        <li>Streak is not completed yet</li>
                        <li>No carbs today...</li>
                        <li>You have a friend request</li>
                        <li>Congratulations for completing 7 day </li>
                    </ul>
                    <a href="#">View All...</a>
                </div>

                
            </div>
            <div className='bottom-side'>
                    <div>
                        <Heading5>Add Friends to help you reach your goals</Heading5>
                    </div>
                    <div>
                    Lose upto 3x more with the support of friends, than those who diet alone.
                    </div>

                    <div className='bottom-button'>
                        <div></div>
                        <button>COPY LINK</button>
                        <div></div>
                        <button>FRIENDS</button>
                    </div>
                </div>
        </div>
    )
}
