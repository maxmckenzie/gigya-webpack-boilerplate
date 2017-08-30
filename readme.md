# Gigya Webpack boilerplate

**Install**

> make sure to add your Gigya API key to src/index.html

requirements: [direnv](), [node](), [npm]()

`npm i` to install the dependancies

`direnv allow` to allow the directory .envrc variables. In this case it's simply a PATH to make node run Webpack from the directory not from the global user `node_modules`.

`npm run dev` for Webpack dev server and hot reloading

`npm run build` run Webpack and outputs the bundled code into the `dist` directory.

**Running on a Server**

You can run this on a normal apache serve as the `dist` file contains an index.html set up the `vhosts` to point at the `dist` directory

In order to running with node you will need to create a single express app to serve the `dist/index.html` file. You can use the snippet below to achieve this

```js
import express from 'express'
import path from 'path'
const app = express()

app.use('/public', express.static(process.cwd() + '/dist'))

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + 'dist/index.html')
})

const port = process.env.PORT || 3000

const server = app.listen(port, () => {
  logger.info('running on http://localhost:' + port)
})

module.exports = {
  server,
  app
}
```
