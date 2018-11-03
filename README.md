# pd-exercise

Backend

## Installation
Install the dependencies and devDependencies and start the server.
```
npm install
npm start
```

For production environment:
```
npm install --production
NODE_ENV=production npm start
```

### Environment Variables

| Name | Default | Usage |
| ------ | ------ | ------ |
| NODE_ENV |  | Set `production` in production environment and `test` for mocha test cases |
| PORT | `8000` | API exposed at this port |
| DB_HOST | `localhost` | MySQL hostname |
| DB_PORT | `3306` | MySQL server port |
| DB_USER | `root` | MySQL username |
| DB_PASS |  | MySQL password |
| DB_NAME | `pd` | MySQL database name |
| MAX_CONN | `10` | MySQL connection limit |
| PAGE_LIMIT | `100` | Number of records to paginate from API |

## API Specification

[Here](API.v1.md)
