from pyowm.owm import OWM
from datetime import datetime
import matplotlib.pyplot as plt
import pytz

#   API key
API_KEY = ''

owm = OWM(API_KEY)
mgr = owm.weather_manager()
air_mgr = owm.airpollution_manager()



#  CURRENT WEATHER FUNCTION

def display_weather(city):
    try:
        observation = mgr.weather_at_place(city)
        weather = observation.weather

        status = weather.detailed_status
        temp = weather.temperature('celsius')['temp']
        humidity = weather.humidity
        wind = weather.wind()['speed']

        sunrise = datetime.fromtimestamp(weather.sunrise_time())
        sunset = datetime.fromtimestamp(weather.sunset_time())

        print(f"\n Weather in {city}")
        print("Status:", status)
        print("Temperature:", temp, "°C")
        print("Humidity:", humidity, "%")
        print("Wind speed:", wind, "m/s")
        print("Sunrise:", sunrise.strftime("%H:%M:%S"))
        print("Sunset:", sunset.strftime("%H:%M:%S"))

        return observation.location.lat, observation.location.lon

    except Exception as e:
        print(" Error:", e)
        return None, None



#  WEATHER USING CITY ID

def display_weather_by_id(city_id):
    try:
        observation = mgr.weather_at_id(city_id)
        weather = observation.weather

        print("\n Weather using City ID")
        print("Status:", weather.detailed_status)

    except Exception as e:
        print(" Error:", e)



#  FORECAST FUNCTION
def display_forecast(city):
    try:
        forecast = mgr.forecast_at_place(city, '3h')
        weather_list = forecast.forecast.weathers

        print("\n Forecast (next entries):")
        for w in weather_list[:5]:
            time = w.reference_time('iso')
            print(time, "-", w.detailed_status)

    except Exception as e:
        print(" Error:", e)


#  AIR POLLUTION

def display_air_pollution(lat, lon):
    try:
        air_data = air_mgr.air_quality_at_coords(lat, lon)
        print("\n Air Quality Index:", air_data.aqi)

    except Exception as e:
        print(" Error:", e)



# HUMIDITY DATA

def get_humidity_data(city):
    forecast = mgr.forecast_at_place(city, '3h')
    weather_list = forecast.forecast.weathers

    humidity = []
    times = []

    for w in weather_list[:24]:  # ~3 days
        humidity.append(w.humidity)

        dt = datetime.fromtimestamp(w.reference_time())
        times.append(dt.strftime("%d %H:%M"))

    return times, humidity



# PLOT FUNCTIONS
def init_plot():
    plt.ylabel("Humidity (%)")
    plt.title("3-Day Humidity Forecast")


def plot_temperatures(times, humidity):
    bars = plt.bar(times, humidity)
    plt.xticks(rotation=45, ha='right')
    return bars


def write_humidity_on_bar_chart(bars, humidity):
    for bar, value in zip(bars, humidity):
        plt.text(
            bar.get_x() + bar.get_width() / 2,
            bar.get_height(),
            f"{value}%",
            ha='center',
            va='bottom'
        )


def show_chart(city):
    times, humidity = get_humidity_data(city)

    init_plot()
    bars = plot_temperatures(times, humidity)
    write_humidity_on_bar_chart(bars, humidity)

    plt.tight_layout()
    plt.show()


#  MAIN PROGRAM

def main():
    print("WEATHER APP")

    city = input("Enter city (e.g., Nairobi,KE): ").strip()

    lat, lon = display_weather(city)

    if lat and lon:
        display_forecast(city)
        display_air_pollution(lat, lon)

        # Example city ID usage (Paris)
        display_weather_by_id(2988507)

        # Show chart
        show_chart(city)


if __name__ == "__main__":
    main()
