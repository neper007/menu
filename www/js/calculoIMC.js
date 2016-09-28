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
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function calcIMC() {
    var nome = document.getElementById('nome');
    var peso = document.getElementById('peso');
    var altura = document.getElementById('altura');
    
    var outMsg = document.getElementById('outMsg');
    
    if (altura.value.indexOf(',')>-1) {
        altura = altura.replace(',', '.'); // Substitue a virgula pelo ponto
    }
    
    if (nome.value == '') {
        nome.style.backgroundColor = "red";
        nome.focus();
        outMsg.innerHTML = "Campo obrigatório: Nome ...";
        outMsg.style.color = "red";
        
    } else if (Number(peso.value) === 0) {
        peso.style.backgroundColor = "red";
        peso.focus();
        outMsg.innerHTML = "Campo obrigatório: Peso ...";
        outMsg.style.color = "red";
        
    } else if (Number(altura.value) === 0) {
        altura.style.backgroundColor = "red";
        altura.focus();
        outMsg.innerHTML = "Campo obrigatório: Altura ..";
        outMsg.style.color = "red";
    } else {
        var imc = peso.value/(altura.value/100 * altura.value/100);
//    alert (imc);
        outMsg.innerHTML = nome.value + ", o seu índice de massa corporal (IMC) é: " + Number(Math.round(imc+'e2')+'e-2');
        outMsg.style.color = "grey";
        
        if (imc < 18.5) {
            outTabIMC.innerHTML = "Peso baixo.";
            outTabIMC.style.color = "yellowgreen";
        } else if  (imc < 24.99) {
            outTabIMC.innerHTML = "Peso normal.";
            outTabIMC.style.color = "green";
        } else if (imc < 29.99) {
            outTabIMC.innerHTML = "Peso em Excesso.";
            outTabIMC.style.color = "lightsalmon"; 
        } else if (imc < 34.99) {
            outTabIMC.innerHTML = "Obsidade Grau I.";
            outTabIMC.style.color = "orange";
        } else if (imc < 39.99) {
            outTabIMC.innerHTML = "Obsidade Grau II.";
            outTabIMC.style.color = "darkorange";
        } else {
            outTabIMC.innerHTML = "Obsidade Grau III.";
            outTabIMC.style.color = "red";
        }
    }
}

nome.onclick = function clear() {
    nome.style.backgroundColor = '';
    outMsg.innerHTML = '';
}
peso.onclick = function clear() {
    peso.style.backgroundColor = '';
    outMsg.innerHTML = '';
}
altura.onclick = function clear() {
    altura.style.backgroundColor = '';
    outMsg.innerHTML = '';
}
