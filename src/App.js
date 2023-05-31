import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import ellipsis from './Photo/ellipsis.svg';
import work from './Photo/work.svg';
import play from './Photo/play.svg';
import study from './Photo/study.svg';
import exercise from './Photo/exercise.svg';
import social from './Photo/social.svg';
import selfCare from './Photo/selfCare.svg';

function App() {

  const [changeForm, setChengeForm] = useState('daily')
  const [getInfo, setGetInfo] = useState([])

  const formDaily = () => {
    setChengeForm('daily')
  }

  const formWeekly = () => {
    setChengeForm('weekly')
  }

  const formMonthly = () => {
    setChengeForm('monthly')
  }

  useEffect(() => {
    axios
      .get('data.json')
      .then(response => {
        setGetInfo(response.data)
      })
      
  },[])

  return (
    <>
      <div className='container'>
        <div className='main-container'>
          <div className='main-container-people-info'>
            <div className='user-info'>
              <div className='user-info-img'></div>
              <p className='user-info-preTitle'>Report for</p>
              <p className='user-info-title'>Jeremy Robson</p>
            </div>
          </div>
          <div className='main-container-time'>
            <p onClick={formDaily}>Dayli</p>
            <p onClick={formWeekly}>Weekly</p>
            <p onClick={formMonthly}>Monthly</p>
          </div>
        </div>
        
        {changeForm === 'daily' &&(
          <>
            <div className='daily-block'>
              <div className='work-main-block'>
                <div className='work-bg'>
                  <img src={work}></img>
                  <div className='work-info-wrapper'>
                    <div className='work-info-block'>
                      <div className='work-info-block-name'>
                        <p className='work-info-block-name-title'>{getInfo.length > 0 && getInfo[0].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='work-info-block-name-hours'>{getInfo.length > 0 && getInfo[0].timeframes.daily.current}hrs</p>
                      <p className='work-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[0].timeframes.daily.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='play-main-block'>
                <div className='play-bg'>
                  <img src={play}></img>
                  <div className='play-info-wrapper'>
                    <div className='play-info-block'>
                      <div className='play-info-block-name'>
                        <p className='play-info-block-name-title'>{getInfo.length > 0 && getInfo[1].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='play-info-block-name-hours'>{getInfo.length > 0 && getInfo[1].timeframes.daily.current}hrs</p>
                      <p className='play-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[1].timeframes.daily.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='study-main-block'>
                <div className='study-bg'>
                  <img src={study}></img>
                  <div className='study-info-wrapper'>
                    <div className='study-info-block'>
                      <div className='study-info-block-name'>
                        <p className='study-info-block-name-title'>{getInfo.length > 0 && getInfo[2].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='study-info-block-name-hours'>{getInfo.length > 0 && getInfo[2].timeframes.daily.current}hrs</p>
                      <p className='study-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[2].timeframes.daily.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='exercise-main-block'>
                <div className='exercise-bg'>
                  <img src={exercise}></img>
                  <div className='exercise-info-wrapper'>
                    <div className='exercise-info-block'>
                      <div className='exercise-info-block-name'>
                        <p className='exercise-info-block-name-title'>{getInfo.length > 0 && getInfo[3].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='exercise-info-block-name-hours'>{getInfo.length > 0 && getInfo[3].timeframes.daily.current}hrs</p>
                      <p className='exercise-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[3].timeframes.daily.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='social-main-block'>
                <div className='social-bg'>
                  <img src={social}></img>
                  <div className='social-info-wrapper'>
                    <div className='social-info-block'>
                      <div className='social-info-block-name'>
                        <p className='social-info-block-name-title'>{getInfo.length > 0 && getInfo[4].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='social-info-block-name-hours'>{getInfo.length > 0 && getInfo[4].timeframes.daily.current}hrs</p>
                      <p className='social-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[4].timeframes.daily.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='selfCare-main-block'>
                <div className='selfCare-bg'>
                  <img src={selfCare}></img>
                  <div className='selfCare-info-wrapper'>
                    <div className='selfCare-info-block'>
                      <div className='selfCare-info-block-name'>
                        <p className='selfCare-info-block-name-title'>{getInfo.length > 0 && getInfo[5].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='selfCare-info-block-name-hours'>{getInfo.length > 0 && getInfo[5].timeframes.daily.current}hrs</p>
                      <p className='selfCare-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[5].timeframes.daily.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}
        
        {changeForm === 'weekly' &&(
          <>
            <div className='weekly-block'>
              <div className='work-main-block'>
                <div className='work-bg'>
                  <img src={work}></img>
                  <div className='work-info-wrapper'>
                    <div className='work-info-block'>
                      <div className='work-info-block-name'>
                        <p className='work-info-block-name-title'>{getInfo.length > 0 && getInfo[0].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='work-info-block-name-hours'>{getInfo.length > 0 && getInfo[0].timeframes.weekly.current}hrs</p>
                      <p className='work-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[0].timeframes.weekly.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='play-main-block'>
                <div className='play-bg'>
                  <img src={play}></img>
                  <div className='play-info-wrapper'>
                    <div className='play-info-block'>
                      <div className='play-info-block-name'>
                        <p className='play-info-block-name-title'>{getInfo.length > 0 && getInfo[1].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='play-info-block-name-hours'>{getInfo.length > 0 && getInfo[1].timeframes.weekly.current}hrs</p>
                      <p className='play-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[1].timeframes.weekly.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='study-main-block'>
                <div className='study-bg'>
                  <img src={study}></img>
                  <div className='study-info-wrapper'>
                    <div className='study-info-block'>
                      <div className='study-info-block-name'>
                        <p className='study-info-block-name-title'>{getInfo.length > 0 && getInfo[2].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='study-info-block-name-hours'>{getInfo.length > 0 && getInfo[2].timeframes.weekly.current}hrs</p>
                      <p className='study-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[2].timeframes.weekly.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='exercise-main-block'>
                <div className='exercise-bg'>
                  <img src={exercise}></img>
                  <div className='exercise-info-wrapper'>
                    <div className='exercise-info-block'>
                      <div className='exercise-info-block-name'>
                        <p className='exercise-info-block-name-title'>{getInfo.length > 0 && getInfo[3].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='exercise-info-block-name-hours'>{getInfo.length > 0 && getInfo[3].timeframes.weekly.current}hrs</p>
                      <p className='exercise-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[3].timeframes.weekly.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='social-main-block'>
                <div className='social-bg'>
                  <img src={social}></img>
                  <div className='social-info-wrapper'>
                    <div className='social-info-block'>
                      <div className='social-info-block-name'>
                        <p className='social-info-block-name-title'>{getInfo.length > 0 && getInfo[4].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='social-info-block-name-hours'>{getInfo.length > 0 && getInfo[4].timeframes.weekly.current}hrs</p>
                      <p className='social-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[4].timeframes.weekly.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='selfCare-main-block'>
                <div className='selfCare-bg'>
                  <img src={selfCare}></img>
                  <div className='selfCare-info-wrapper'>
                    <div className='selfCare-info-block'>
                      <div className='selfCare-info-block-name'>
                        <p className='selfCare-info-block-name-title'>{getInfo.length > 0 && getInfo[5].title}</p>
                        <img src={ellipsis}></img>
                      </div>
                      <p className='selfCare-info-block-name-hours'>{getInfo.length > 0 && getInfo[5].timeframes.weekly.current}hrs</p>
                      <p className='selfCare-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[5].timeframes.weekly.previous}hrs</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}

        {changeForm === 'monthly' &&(
          <>
          <div className='monthly-block'>
            <div className='work-main-block'>
              <div className='work-bg'>
                <img src={work}></img>
                <div className='work-info-wrapper'>
                  <div className='work-info-block'>
                    <div className='work-info-block-name'>
                      <p className='work-info-block-name-title'>{getInfo.length > 0 && getInfo[0].title}</p>
                      <img src={ellipsis}></img>
                    </div>
                    <p className='work-info-block-name-hours'>{getInfo.length > 0 && getInfo[0].timeframes.monthly.current}hrs</p>
                    <p className='work-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[0].timeframes.monthly.previous}hrs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='play-main-block'>
              <div className='play-bg'>
                <img src={play}></img>
                <div className='play-info-wrapper'>
                  <div className='play-info-block'>
                    <div className='play-info-block-name'>
                      <p className='play-info-block-name-title'>{getInfo.length > 0 && getInfo[1].title}</p>
                      <img src={ellipsis}></img>
                    </div>
                    <p className='play-info-block-name-hours'>{getInfo.length > 0 && getInfo[1].timeframes.monthly.current}hrs</p>
                    <p className='play-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[1].timeframes.monthly.previous}hrs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='study-main-block'>
              <div className='study-bg'>
                <img src={study}></img>
                <div className='study-info-wrapper'>
                  <div className='study-info-block'>
                    <div className='study-info-block-name'>
                      <p className='study-info-block-name-title'>{getInfo.length > 0 && getInfo[2].title}</p>
                      <img src={ellipsis}></img>
                    </div>
                    <p className='study-info-block-name-hours'>{getInfo.length > 0 && getInfo[2].timeframes.monthly.current}hrs</p>
                    <p className='study-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[2].timeframes.monthly.previous}hrs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='exercise-main-block'>
              <div className='exercise-bg'>
                <img src={exercise}></img>
                <div className='exercise-info-wrapper'>
                  <div className='exercise-info-block'>
                    <div className='exercise-info-block-name'>
                      <p className='exercise-info-block-name-title'>{getInfo.length > 0 && getInfo[3].title}</p>
                      <img src={ellipsis}></img>
                    </div>
                    <p className='exercise-info-block-name-hours'>{getInfo.length > 0 && getInfo[3].timeframes.monthly.current}hrs</p>
                    <p className='exercise-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[3].timeframes.monthly.previous}hrs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='social-main-block'>
              <div className='social-bg'>
                <img src={social}></img>
                <div className='social-info-wrapper'>
                  <div className='social-info-block'>
                    <div className='social-info-block-name'>
                      <p className='social-info-block-name-title'>{getInfo.length > 0 && getInfo[4].title}</p>
                      <img src={ellipsis}></img>
                    </div>
                    <p className='social-info-block-name-hours'>{getInfo.length > 0 && getInfo[4].timeframes.monthly.current}hrs</p>
                    <p className='social-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[4].timeframes.monthly.previous}hrs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className='selfCare-main-block'>
              <div className='selfCare-bg'>
                <img src={selfCare}></img>
                <div className='selfCare-info-wrapper'>
                  <div className='selfCare-info-block'>
                    <div className='selfCare-info-block-name'>
                      <p className='selfCare-info-block-name-title'>{getInfo.length > 0 && getInfo[5].title}</p>
                      <img src={ellipsis}></img>
                    </div>
                    <p className='selfCare-info-block-name-hours'>{getInfo.length > 0 && getInfo[5].timeframes.monthly.current}hrs</p>
                    <p className='selfCare-info-block-name-hours-past'>Last Week - {getInfo.length > 0 && getInfo[5].timeframes.monthly.previous}hrs</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </>
        )}
      </div>
    </>
  );
}

export default App;
