import './cards.modules.css'
import moment from 'moment'
import CountUp from 'react-countup'

const Cards = ({ confirmed, recovered, deaths, lastUpdate }) => {
    if (!confirmed) {
        return <div className='loading'>Loading...</div>
    };

    const now = moment(lastUpdate)

    return (
        <div className='cards-container'>
            <div className='card infected'>
                <div className='card-title'>Infected</div>
                <div className='card-value'>
                    <CountUp
                        start={0}
                        end={confirmed.value}
                        separator="."
                        decimals={2}
                        decimal=","
                        duration={2}
                    />
                </div>
                <div className='card-date'>{now.format('L')}</div>
                <div className='card-description'>Number of infected by <span className='description-span'>COVID-19</span></div>
            </div>

            <div className='card recovered'>
                <div className='card-title'>Recovered</div>
                <div className='card-value'>
                    <CountUp
                        start={0}
                        end={recovered.value}
                        separator="."
                        decimals={2}
                        decimal=","
                        duration={2}
                    />
                </div>
                <div className='card-date'>{now.format('L')}</div>
                <div className='card-description'>Number of Recovered by <span className='description-span'>COVID-19</span></div>
            </div>

            <div className='card deaths'>
                <div className='card-title'>Deaths</div>
                <div className='card-value'>
                    <CountUp
                        start={0}
                        end={deaths.value}
                        separator="."
                        decimals={2}
                        decimal=","
                        duration={2}
                    />
                </div>
                <div className='card-date'>{now.format('L')}</div>
                <div className='card-description'>Number of Deaths by <span className='description-span'>COVID-19</span></div>
            </div>
        </div>
    )
}

export default Cards