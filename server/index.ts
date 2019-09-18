import http from 'http';

import { createApp } from './app';

const PORT = process.env.PORT || 7000;

createApp()
  .then((app: any) => http.createServer(app.callback()).listen(PORT))
  .then(() => console.log(`App listening at port: ${PORT}`))
  .catch((err: Error) => {
    console.error(err);
    process.exit(1);
  });
