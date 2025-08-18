import requests
import re
from matplobblib.nm import response

rurl ="https://dhlottery.co.kr/gameResult.do?method=byWin"
response = requests.get(rurl)
print("상태코드:",response.status_code)
print(response.text)
