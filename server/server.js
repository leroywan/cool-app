import express from 'express';
import path from 'path';


const app = new express();
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
	});
}

app.listen((process.env.PORT || 3000), (error) => {
  if (!error) {
    console.log('App is running on port: '+ (process.env.PORT || 3000) +'!'); // eslint-disable-line
  }
});

export default app;
