# logout

> logout

## Graph Network Plugin for Kibana 6.2.x

Kibana plugin providing the logout implementation where external framework/component is used for authentication. Current implementation supports logout for basic authentication and in subsequent iterations we will incorporate logout functionalities for other authentication modes.

---

### Git Install
```
cd $KIBANA_HOME/plugins
git clone https://github.com/lmangani/kbn_graph graph_vis -b 6.2.x
cd graph_vis
npm install

## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following npm tasks.

  - `npm start`

    Start kibana and have it include this plugin

  - `npm start -- --config kibana.yml`

    You can pass any argument that you would normally send to `bin/kibana` by putting them after `--` when running `npm start`

  - `npm run build`

    Build a distributable archive

  - `npm run test:browser`

    Run the browser tests in a real web browser

  - `npm run test:server`

    Run the server tests using mocha

For more information about any of these commands run `npm run ${task} -- --help`.
