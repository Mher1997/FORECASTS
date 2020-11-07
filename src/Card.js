import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <div className="card-header">
               <div className="card-header-section">
                    <p>FORECASTS</p>
                    <button>Sales</button>
               </div>
            </div>
            <div className="card-body">
                {dataSet.map((item, index) => (
                    <div className="forecast" key={index}>
                        <div className="forecast-title">
                           <p>{item.title}</p> 
                        </div>
                        <div className="forecast-range">
                           {item.ranges.map((range, index) => <div className={`range range-type-${index+1}`} key={index} style={{width: range*100/70 + '%'}}></div>)}
                        </div>
                        <div className="forecast-rank" style={{width: item.forecast*100/70 + '%'}}></div>
                        <div className="forecast-bottom">
                           <span>${item.minValue}</span>
                           <span>${item.maxValue}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const dataSet = [
    {
        title: 'Current Month',
        ranges: [10, 20, 40],
        forecast: 10,
        minValue: '1.6k',
        maxValue: '2.4k'
    },
    {
        title: 'Current Quarter',
        ranges: [20, 10, 40],
        forecast: 30,
        minValue: '1.6k',
        maxValue: '2.4k'
    }
];


export default Card;