import './chart.modules.css';
import { Bar } from 'react-chartjs-2';

const Chart = ({ confirmed, recovered, deaths }) => {
    if(!confirmed){
        return <div>''</div>
    }
    return (
        <div className='chart-container'>
            <Bar
                data={{
                    labels: ['Confirmed', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: '# of cases',
                        data: [confirmed.value, recovered.value, deaths.value],
                        backgroundColor: [
                            'rgba(36, 186, 2, .8)',
                            'rgba(245, 5, 5, .8)',
                            'rgba(0,0,0,.8)',
                        ],
                        borderColor: [
                            'rgba(36, 186, 2, 1)',
                            'rgba(245, 5, 5, 1)',
                            'rgba(0,0,0,1)',
                        ],
                        borderWidth: 2
                    }]
                }}      
            />
        </div>
    )
}

export default Chart

