const { ipcMain,app,shell } = require('electron');

ipcMain.on('test_render_info',(event,arg)=>{
    console.log('receive render info',arg);
})