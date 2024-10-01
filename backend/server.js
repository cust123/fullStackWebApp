import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "a joke",
      desc: "this is first Joke",
    },
    {
      id: 2,
      title: "another joke",
      desc: "this is second Joke",
    },
    {
      id: 3,
      title: "third joke",
      desc: "this is third Joke",
    },
    {
      id: 4,
      title: "fourth joke",
      desc: "this is fourth Joke",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost: ${port}`);
});
