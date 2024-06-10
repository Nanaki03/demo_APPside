# Fresh project

Your new Fresh project is ready to go. You can follow the Fresh "Getting
Started" guide here: https://fresh.deno.dev/docs/getting-started

### Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

deno.jsonはworkplace直下に1個だけじゃないと動かない(Releなんとかみたいなエラーが出る)
>Deno:
Cache~~~みたいなやつでキャッシュにモジュールが読み込まれる。(Uncacheみたいなエラーがでる)
これをしないとエラーがでてとても邪魔
コンテナ間でデータベースを連結するのはまあまあ簡単（Denoのモジュールが優秀）
コンテナを立てる時にテンプレートがDeno+PostgresSQLしかないので、あきらめてPostgresSQLを使う。
MySQLに変更するのは、モジュール的にはたぶんできるけど、コンテナの設定がむずすぎて死んだ。
Dockerのローカルに保存したデータベースのデータは消えるのか
=>docker-compaseの設定にローカルに保存して永久化みたいな記事があったからそれをしないとDockerの起動のたびに消える

# 説明
## 手順
1. FRESHAPP内のdevcontainerの設定ファイルを元に、VSCodeで開発コンテナを立てる(要DevContainer拡張機能)
2. MY-FRESH-APPの直下にdeno.jsonがあることを確認する。(deno.jsonがワークスペースの一番上にないとエラーが起こる。)
3. MY-FRESH-APPにいることを確認して、"deno task start"を実行
## Deno.jsとは
Node.jsの開発者が、Nodeの問題点を修正して作ったもの。フレームワークではなく、実行環境やランタイムである。
パッケージのインポートはURLを指定して行う。deno.land/x/に多くのパッケージが存在する。公式のドキュメントを読んだほうが早いときが多い。
今回はFreshとPostgreSQLのパッケージを使用している。更新で結構変わるので注意が必要。
TypeScriptが基本となっている。また、npmは対応しかけているがNode.jsを使ったことがないので確認してください。
## Freshとは
DenoのWebアプリケーション開発のフレームワーク。Preactがベースとなっている。
Islandsアーキテクチャが採用されており、静的な部分はHTMLに変換され、動的な動作が必要な部分だけJavaScriptに変換される。
ハンドラーとかでごちゃごちゃして、returnのとこでHTMLみたいなのを書くことで動く。
SQLなどで変数を置きたいときは、バッククオーテーション(``)(@とかのキー)で囲み、${foo}みたいに書く。
## PostgreSQLとは
共通のSQLの基礎部分しかさわっていないのでわからない。
## tailwindCSSとは
CSSフレームワークであり、CSSをほとんど書く必要がなくなる。
HTMLのタグにclass=で直接CSS部分を記述することができる。記述できるのは、tailwindで設定されているプロパティのみ。
tailwindCSS チートシートとかを見て書くと大体わかるが、CSSの基礎知識がしっかりしていないとどのタグに書くかなどが分からないため、CSSの知識が結構必要。
## dockerとは
仮想環境の小さい版みたいなやつ。コンテナと呼ばれる仮想環境を構築して、みんなで共通の環境で開発を進めることができる。
今回は、VSCodeの拡張機能であるDevContainerを使用して、VSCodeの環境ごとコンテナ上で設定して動かしている。
実務で使うときは、自分の環境で書いたコードをコンテナ上で動かすとかで使うのかもしれない。よくわかりません。
設定とかがいっぱいあるので、ターミナルとかで環境構築に慣れてないと全然わからない。
難しいけど、Dockerイメージがあれば簡単にコンテナを立てたりすることはできるので、少しでも使えるようになっておくといい気がします。