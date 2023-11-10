app.get('/songs', (req, res) => {
    res.send("Here's all the music");
});

app.get('/songs/:id', (req, res) => {
    res.send("Here's the specifc song");
});
