# HyperAkari
![poster](./res/poster.png)

HyperAkariは、ターミナルエミュレータ「Hyper」のテーマプラグインです。

青をメインにした色合いになっています。

![poster2](./res/poster2.png)
![screenshot](./res/screenshot.png)

## 使い方
```bash
$ hyper i hyper-akari
```

## オプション
```js:.hyper.js
config: {
  // ...
  hyperAkari: {
    illust: true, // イラストを表示するか（デフォルトは true）
    opacity: 0.3, // イラストの透明度 0~1（デフォルトは 0.3）
    vibrancy: 'dark', // オープン動的効果 (デフォルトは dark)
    vibrancyOpacity: '', // ダイナミックエフェクトの透明度 0~1 (デフォルトは 0.7)
  },
  // ...
}
```
