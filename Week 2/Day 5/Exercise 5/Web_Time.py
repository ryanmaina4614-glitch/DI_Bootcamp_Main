import requests
import time

def measure_load_time(url):
    try:
        start_time = time.time()  # start timer
        
        response = requests.get(url)
        
        end_time = time.time()  # end timer
        
        load_time = end_time - start_time
        
        return {
            "url": url,
            "status_code": response.status_code,
            "load_time": round(load_time, 4)
        }
    
    except requests.exceptions.RequestException as e:
        return {
            "url": url,
            "error": str(e)
        }


websites = [
    "https://www.google.com",
    "https://www.ynet.co.il",
    "https://www.imdb.com"
]

for site in websites:
    result = measure_load_time(site)
    
    if "error" in result:
        print(f"Error accessing {result['url']}: {result['error']}")
    else:
        print(f"{result['url']} | Status: {result['status_code']} | Load Time: {result['load_time']} seconds")
