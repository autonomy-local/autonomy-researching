# Title
オープンデータビュワー機能
# Author(s)
@yamashita-kenngo
# Overview
行政から提供されるオープンデータの閲覧をWeb上で可能にする。
# Context
オープンデータを使ってWeb上でコラボレーションできるようにしたい。
# Goal
ローカルアップロードしたCSVファイルを表形式で閲覧できる。ユーザーは自身のブラウザ上にデータを保存することができる。
ログイン済みのユーザーは自身の取り込んだデータを他のユーザーに共有できる。
ログイン済みのユーザーは他者の取り込んだデータを閲覧できる。
# Milestone
as soon as possible
# Solutions
- [ ] 全てのユーザーはCSVファイルをローカルからアップロードして表形式で閲覧できる
- [ ] 全てのユーザーはCSVファイルから取り込んだデータをブラウザのDB上に保存できる
- [ ] ログイン済みのユーザーは取り込んだデータを共有できる
# testability, monioring and alerting
- testability: マージ後にbrowser上でE2Eテストを実施できること