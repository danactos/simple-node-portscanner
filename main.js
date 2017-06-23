// Shout out to my bro loretoparisi for customizing the portscanner module for testing multiple ports.
// Took me 3 fucking days to try and figure it out.
// https://github.com/baalexander/node-portscanner/issues/40


// Install: npm install portscanner
var portscanner = require('portscanner');

// Install: npm install command-line-args
const commandLineArgs = require('command-line-args')

// Required vars
var startRange;
var endRange;
var targetIP;

const optionDefinitions = [
  { name: 'startPort', alias: 's', type: Number },
  { name: 'endPort', alias: 'e', type: Number },
  { name: 'target', alias: 't', type: String}
]

const options = commandLineArgs(optionDefinitions);

startRange = options['startPort'];
endRange = options['endPort'];
targetIP = options['target'];

var scanoptions = {
    host : targetIP,
    timeout : 500, // socket timeout in msec
    all : true
};

  // Scan array of ports
console.log('[LOG] Initiating scan, bro');

portscanner.findAPortInUse(startRange, endRange, scanoptions, function (error, ports){
    //console.log("[log] startRange: " + startRange);
    if (!error) {
        for (port in ports){
            console.log("Port " + ports[port] + ": open" );
        }
        console.log('[LOG] scanning complete, bro');
    }
    if (error) console.error(error);
})

