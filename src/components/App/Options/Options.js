import './Options.scss'
import DistritsAPI from '../../../services/DistritsAPI'
import { useRef } from 'react'

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

  const f = new Intl.DateTimeFormat('en-us', {
    weekday: 'long',
    month: 'short',
    day: '2-digit',
  })

  return (
    <>
      <div className="districts-container">
        <div>
          <label>Districts</label>
        </div>
        <div
          ref={districtsRef}
          className="districts-wrapper"
          value={districtsData?.data?.find(
            (districtData) => districtData.globalIdLocal === globalIdLocal
          )}
        >
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

          <select
            name="location"
            value={
              districtsData?.data?.find(
                (districtData) => districtData.globalIdLocal == globalIdLocal
              ).local
            }
            onChange={(e) =>
              setGlobalIdLocal(
                districtsData?.data?.find((districtData) => districtData.local === e.target.value)
                  .globalIdLocal
              )
            }
          >
            {districtsData?.data?.map((district, index) => (
              <option key={index} value={district.local}>
                {district.local}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="dates-container">
        <div>
          <label>Weekdays</label>
        </div>
        <div ref={datesRef} className="dates-wrapper">
          {weatherData?.data?.map((weekday, index) => {
            const date = new Date(weekday.forecastDate),
              formattedDate = f.format(date).replace(',', '')
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

          <select name="location" onChange={(e) => setSelectedWeekday(e.target.value)}>
            {weatherData?.data?.map((weekday, index) => {
              const date = new Date(weekday.forecastDate),
                formattedDate = f.format(date).replace(',', '')
              return (
                <option key={index} value={index}>
                  {formattedDate}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}

export default Options
