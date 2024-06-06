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
>Deno: Cache~~~みたいなやつでキャッシュにモジュールが読み込まれる。(Uncacheみたいなエラーがでる)
これをしないとエラーがでてとても邪魔
コンテナ間でデータベースを連結するのはまあまあ簡単（Denoのモジュールが優秀）
コンテナを立てる時にテンプレートがDeno+PostgresSQLしかないので、あきらめてPostgresSQLを使う。
MySQLに変更するのは、モジュール的にはたぶんできるけど、コンテナの設定がむずすぎて死んだ。
Dockerのローカルに保存したデータベースのデータは消えるのか
=>docker-compaseの設定にローカルに保存して永久化みたいな記事があったからそれをしないとDockerの起動のたびに消える
