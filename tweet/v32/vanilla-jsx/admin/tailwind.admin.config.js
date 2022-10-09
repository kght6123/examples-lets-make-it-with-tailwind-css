/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./admin/index.html", "./admin/src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // 値のバリエーションの追加ぐらいなら、設定ファイルの簡単な変更でできる。
        // 下記は、さらに小さいフォントサイズを追加する。
        "4xs": ["0.25rem", { lineHeight: "0.4rem" }],
        "3xs": ["0.5rem", { lineHeight: "0.5rem" }],
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false, // modern-normalize の無効化
  // },
};
