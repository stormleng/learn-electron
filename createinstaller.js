const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  console.log('creating windows installer')
  //const rootPath = path.join('./')
  //const outPath = path.join(rootPath, 'release-builds')

  return Promise.resolve({
    appDirectory: path.join('./', 'electron-quick-start-win32-x64/'),
    authors: 'wu xu',
    noMsi: true,
    outputDirectory: path.join('./', 'windows-installer'),
    exe: 'electron-quick-start.exe',
    setupExe: 'helloworldinstaller.exe',
    setupIcon: path.join('./', 'hello.ico')
  })
}