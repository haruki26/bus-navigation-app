# Local Development Setup

以下のサービスが必要です。

- Docker
- Docker Compose

## クローン

```bash
git clone --recursive https://github.com/haruki26/bus-app-backend.git
cd bus-app-backend
```

## OTPサーバのセットアップ

1. API_KEYの取得

[公共交通オープンデータセンター開発者サイト](https://developer.odpt.org/)で登録を行い、API_KEYを取得してください。

2. .envファイルのコピーと編集

```bash
cp .env.example .env
vim .env
```

- ODPT_TOKENを自身のAPI_KEYに変更してください。

```bash
cd otp-server
chmod 777 data

docker compose up fetch-gtfs-osm
docker compose up otp-build
docker compose up -d otp-serve
```

## Honoサーバの起動

```bash
npm i
npm run dev
```

- `http://localhost:3000` からアクセス可能です
