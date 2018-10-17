const yml = require('js-yaml')
const fs = require('fs')
// const qiniu = require('qiniu-js')

const jsonToYml = (pathJson, pathYml) => {
  const fjson = fs.readFileSync(pathJson, { encoding: 'utf-8' })
  const fobj = JSON.parse(fjson)
  const fyml = yml.safeDump(fobj)
  fs.writeFileSync(pathYml, fyml)
}

const ymlToJson = (pathYml, pathJson) => {
  const fyml = fs.readFileSync(pathYml, { encoding: 'utf-8' })
  const fobj = yml.safeLoad(fyml)
  const fjson = JSON.stringify(fobj)
  fs.writeFileSync(pathJson, fjson)
}

const jobJtoY = () => {
  jsonToYml('./job.json', './job.yml')
}

const jobYtoJ = () => {
  ymlToJson('./job.yml', './job.json')
}

const main = () => {
  jobYtoJ()
}

main()
