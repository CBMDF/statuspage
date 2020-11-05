# Status Page

A status page to host on GitHub pages. Its uses GitHub issues to show the status of your service components and incidents.

Do you like it? Support this project!

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B12LOPH)

<img src="https://github.com/ricardomaia/statuspage/blob/main/screenshot.png" width="600"/>

## Demo
https://ricardomaia.github.io/statuspage/

## Get started

_Note that you will need to have [Node.js](https://nodejs.org) installed._

[Clone or fork the repository](https://github.com/ricardomaia/statuspage/fork)

Install the dependencies...

```bash
cd statuspage
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Configuration

Set your config.json file like this, replacing `:user` and `:repo` with your username and repository name.

```json
{
  "componentUrl": "https://api.github.com/repos/:user/:repo/issues?state=all&labels=component",
  "incidentUrl": "https://api.github.com/repos/:user/:repo/issues?state=all&labels=incident"
}

```


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Deploying to GitHub Pages

```bash
npm run publish
```
