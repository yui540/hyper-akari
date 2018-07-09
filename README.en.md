# HyperAkari
![poster](./res/poster.png)

[README 日本語](README.md)

Hyperakari is a theme plugin for the terminal emulator called Hyper.

It uses blue as a base tone.

![poster2](./res/poster2.png)
![screenshot](./res/screenshot.png)
![screenshot2](./res/screenshot2.png)

## Usage
```bash
$ hyper i hyper-akari
```

## Options
```js:.hyper.js
config: {
  // ...
  hyperAkari: {
    illust: true, // Whether to show the image or not (default: true)
    opacity: 0.3 // Opacity of the image（default: 0.3）
    vibrancy: 'dark', // (default: dark)
    vibrancyOpacity: 0.7, // (default: 0.7)
  },
  // ...
}
```