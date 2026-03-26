# holiday.py

from datetime import datetime
import holiday

def get_upcoming_holiday(country_code="KE"):
    today = datetime.now()
    current_year = today.year

    # Get holidays for the country
    country_holidays = holiday.country_holidays(country_code, years=current_year)

    next_holiday = None
    min_days = float("inf")

    for date, name in country_holidays.items():
        diff = (date - today.date()).days
        if 0 <= diff < min_days:
            min_days = diff
            next_holiday = (date, name)

    return today, next_holiday, min_days


def display_upcoming_holiday():
    today, next_holiday, days_left = get_upcoming_holiday()

    print(f"Today's date: {today}")

    if next_holiday:
        print(f"The next holiday is {next_holiday[1]} in {days_left} days.")
    else:
        print("No upcoming holidays found.")