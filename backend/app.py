import json
from flask import Flask,request
from flask_cors import CORS
import keras
import numpy as np
from pickle import load

app = Flask(__name__)
CORS(app)

prevRecord= [
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
prevScore=1.6323872834742108

@app.route('/')
def hello_world():
	return 'Hello World'

@app.route('/getCumulative',methods=['POST','GET'])
def getCumulative():
    if request.method=='POST':
        print(request.json)
        return "hello"

@app.route('/getBehavourial',methods=['POST','GET'])
def getBehavourialScore():
    global prevScore,prevRecord
    if request.method=='POST':
        model=keras.models.load_model('../ML/behavourialModel/behavourial_model.h5')
        body=request.json
        currRecord=body['currRecord']
        scaler=load(open('../ML/behavourialModel/behaveScaler.pkl','rb'))
        val=[]
        val.append(prevScore)
        val.extend(prevRecord)
        val.extend(currRecord)
        val=np.array([val])
        val=scaler.transform(val)
        val=val[None:]
        pred=model.predict(val)
        pred=pred[0]
        print(pred[0])
        if pred[0]>10:
            pred[0]=10
        prevRecord=currRecord
        prevScore=pred[0]
        return json.dumps({"result":str(pred[0])}),200,{'ContentType':'application/json'}

@app.route('/getMaintenanceDetails',methods=['POST','GET'])
def getMaintenanceDetails():
    if request.method=='POST':
        model=keras.models.load_model('../ML/maintanenceModel/MaintenanceModel.h5')
        body=request.json
        scaler=load(open('../ML/maintanenceModel/maintanenceScale.pkl','rb'))
        val=[body['curr']]
        val=np.array(val)
        val=scaler.transform(val)
        val=val[None:]
        pred=model.predict(val)
        pred=pred[0]
        print(pred[0])
        if pred[0]>10:
            pred[0]=10
        return json.dumps({"result":str(pred[0])}),200,{'ContentType':'application/json'}

if __name__ == '__main__':
	app.run()
