import './Options.scss'
import DistritsAPI from '../../../services/DistritsAPI'
import WeatherDataAPI from '../../../services/WeatherDataAPI'
import { useRef, useState, useEffect } from 'react'

function Options({
  weatherData,
  globalIdLocal,
  setGlobalIdLocal,
  selectedWeekday,
  setSelectedWeekday,
}) {
  const { districtsData } = DistritsAPI()
  const districtsRef = useRef()
  const datesRef = useRef()

  return (
    <>
      <div className="districts-container">
        <div>
          <label>Districts</label>
        </div>
        <div ref={districtsRef} className="districts-wrapper">
          {districtsData?.data?.map((district, index) => (
            <button
              key={index}
              className={district.globalIdLocal == globalIdLocal ? 'active' : null}
              onClick={() =>
                setGlobalIdLocal(
                  districtsData?.data?.find((districtData) => districtData.local === district.local)
                    .globalIdLocal
                )
              }
            >
              {district.local}
            </button>
          ))}
        </div>
      </div>

      <div className="dates-container">
        <div>
          <label>Days</label>
        </div>
        <div ref={datesRef} className="dates-wrapper">
          {weatherData?.data?.map((weekday, index) => {
            const date = new Date(weekday.forecastDate),
              f = new Intl.DateTimeFormat('en-us', {
                weekday: 'long',
                month: 'short',
                day: '2-digit',
              })
            const formattedDate = f.format(date).replace(',', '')

            return (
              <button
                key={index}
                className={selectedWeekday == index ? 'active' : null}
                onClick={() => setSelectedWeekday(index)}
              >
                {formattedDate}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Options
