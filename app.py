
from flask import Flask, render_template, request, redirect,url_for,render_template, request
from werkzeug.utils import secure_filename
import json
from keras.models import Sequential, load_model
from keras.layers import Dense, Dropout, Flatten, Conv2D, MaxPooling2D, LSTM
from keras.utils import to_categorical
from flask import Flask, redirect, url_for, request, render_template,jsonify, make_response, send_from_directory

from gevent.pywsgi import WSGIServer

# Import Keras dependencies
from tensorflow.keras.models import model_from_json


import numpy as np
import h5py

import os

import librosa

import urllib.request

from flask import Flask, flash, request, redirect, render_template


UPLOAD_FOLDER = 'C:/uploads'

app = Flask(__name__)
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = set(['wav'])


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


MODEL_ARCHITECTURE = 'check2.json'
MODEL_WEIGHTS = 'complete_weight.h5'

json_file = open(MODEL_ARCHITECTURE)
loaded_model_json = json_file.read()
json_file.close()
model = model_from_json(loaded_model_json)

# Get weights into the model
model.load_weights(MODEL_WEIGHTS)
print('Model loaded. Check http://127.0.0.1:5000/')

from werkzeug.utils import secure_filename


def model_predict(audio_data,model):
    audio_data= app.config['UPLOAD_FOLDER']+"/"+audio_data
    x, sr = librosa.load(audio_data)
    mfcc = librosa.feature.mfcc(x, sr)
    mfcc = np.asarray(mfcc)
    mfcc = mfcc.reshape(1, mfcc.shape[1], mfcc.shape[0], 1)
    print(type(mfcc), mfcc.shape)
    model = Sequential()
    model.compile(loss="categorical_crossentropy", optimizer="adam",
				  metrics=['accuracy'])
    prediction = np.argmax(model.predict_classes(mfcc))
    print("pppppppppppppppppppppppppppppppppp",prediction)
    return prediction

@app.route('/')
def upload_file():
	return render_template('upload.html')

@app.route('/', methods=['POST','GET'])
def upload():
    if request.method == 'POST':
        #if 'file' not in request.files:
         #   print('No file part')
          #  return redirect(request.url)
        file = request.files['file']
        print("gggg")
       # if file.filename == '':
        #    print('No file selected for uploading')
         #   return redirect(request.url)
        if file and allowed_file(file.filename):
            print("yyy")
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            checking = model_predict(file.filename,model)
            if checking > 98:
                check2 = "Try Again!"
                print(check2)
            else:
                check2 = checking
            print("checked value is = ", str(check2))
            return jsonify("The predicted value is {}".format(str(check2)))

        else:
            print('Allowed file types are wav')
            return redirect(request.url)


if __name__ == '__main__':

	app.run(host='192.168.10.9' , port=8080)
