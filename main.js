'use strict';

const qs = require ("querystring");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

const pdfURL = "http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      webSecurity: false,
    },
  });

  const param = qs.stringify({file: pdfURL});

  mainWindow.loadURL('file://' + __dirname + '/pdfjs/web/viewer.html?' + param);
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
