# eslint-config-jitsi

A shareable eslint config for Jitsi's projects.

## Install

```bash
npm install --save-dev @jitsi/eslint-config
```

### Installing peerDependencies

```bash
npm install --save-dev babel-eslint eslint-plugin-import
```

## Usage

Add the following to your `.eslintrc.js`.

```
{
  'extends': '@jitsi/eslint-config'
}
```

### Additional

If you want to enforce `jsdoc` rules used by Jitsi.

```bash
npm install --save-dev eslint-plugin-jsdoc
```

```
{
  'extends': [
    '@jitsi/eslint-config',
    '@jitsi/eslint-config/jsdoc'
  ]
}
```

If you are using `react`.

```bash
npm install --save-dev eslint-plugin-react
```

```
{
  'extends': [
    '@jitsi/eslint-config',
    '@jitsi/eslint-config/react'
  ]
}
```

If you are using `typescript`:

```bash
 npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser @stylistic/eslint-plugin
```

```
{
  'extends': [
    '@jitsi/eslint-config',
    '@jitsi/eslint-config/typescript'
  ]
}
```
