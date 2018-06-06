# eslint-config-jitsi

A shareable eslint config for Jitsi's projects.

## Install

```bash
npm install --save-dev jitsi/eslint-config-jitsi
```

### Installing peerDependencies

```bash
npm install --save-dev babel-eslint eslint-plugin-flowtype eslint-plugin-import
```

## Usage

Add the following to your `.eslintrc.js`.

```
{
  'extends': 'eslint-config-jitsi'
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
    'eslint-config-jitsi',
    'eslint-config-jitsi/jsdoc'
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
    'eslint-config-jitsi',
    'eslint-config-jitsi/react'
  ]
}
```
