import requests

data = [
        0.0,
        0.0,
        0.0,
        36.0,
        467.0,
        0.0,
        128.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0,
        0.0
    ]
dataobj = {'currRecord': data}

x = requests.post('http://127.0.0.1:5000/getBehavourial', json=dataobj)
print(x.json()['result'])