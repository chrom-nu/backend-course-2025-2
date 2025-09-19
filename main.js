const dt = null // date

url_txt = "https://bank.gov.ua/"
path = "NBUStatService/v1/statdirectory/res"
query = "date=201708&json"

my_url = new URL(url_txt)
my_url.pathname = path
my_url.search = query

console.log(my_url.href)