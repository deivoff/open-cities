import app from './app';

const port = process.env.PORT || 3002;

app.listen(port, () => {
  return console.log(`Server is runnign on ${port}`);
})