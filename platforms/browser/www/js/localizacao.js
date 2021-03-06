// função para recolher a posição atual
function getPosition() {

    var options = {
        enableHighAccuracy: true,
        maximumAge: 360000 // em milisegundos = 6min
    }

    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    
    function onSuccess(position) {
        
        alert ('Latitude: '         + position.coords.latitude          + '\n' +
            'Longitude: '           + position.coords.longitude         + '\n' +
            'Altitude: '            + position.coords.altitude          + '\n' +
            'Accuracy: '            + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: '   + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '             + position.coords.heading           + '\n' +
            'Speed: '               + position.coords.speed             + '\n' +
            'Timestamp: '           + position.coords.timestamp         + '\n');
    };
    
    function onError(error) {
        alert ('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
}

function watchPosition() {
    
    var options = {
        maximumAge: 3600000,
        timeout: 3000,
        enableHighAccuracy: true
    }
    
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);
    
    function onSuccess(position) {
        
        alert ('Latitude: '         + position.coords.latitude          + '\n' +
            'Longitude: '           + position.coords.longitude         + '\n' +
            'Altitude: '            + position.coords.altitude          + '\n' +
            'Accuracy: '            + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: '   + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '             + position.coords.heading           + '\n' +
            'Speed: '               + position.coords.speed             + '\n' +
            'Timestamp: '           + position.coords.timestamp         + '\n');
    };
    
    function onError(error) {
        alert ('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }
}

// varáveis

var app = {
    initialize:function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        document.getElementById("getPosition").addEventListener("click", getPosition);
        document.getElementById("watchPosition").addEventListener("click", watchPosition);
    }
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    
    
    onDeviceReady: function() {
        // by MT app.receivedEvent('deviceready');
        document.getElementById("getPosition").addEventListener("click", getPosition);
        document.getElementById("watchPosition").addEventListener("click", watchPosition);
    },
    
    
    // Update DOM on a Received Event
    // Next comment block by MT
/*    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
