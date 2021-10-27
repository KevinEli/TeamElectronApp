const { app, BrowserWindow } = require('electron')

function createWindow () {

  const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36';
  let view;
  view = new BrowserWindow({
    width: 1350,
    height: 711
  });
  view.webContents.setUserAgent(userAgent);
  view.loadURL('https://teams.microsoft.com');

}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
