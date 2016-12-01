const electron = require('electron')
const {app, BrowserWindow} = electron

app.on('ready', () => {
  let win = new BrowserWindow({width:800, height: 600})
  win.loadURL(`file://${__dirname}/index.html`)
  //win.webContents.openDevTools( { detach: true } ) //dev tools - uncomment for the Chrome Dev Toools

  win.on('close', function(){
    //things that happen when you close the main window
    win = null;
  });
})
