import "./App.css";
import React from "react";
import axios from "axios";
function App() {
  const [books, setBooks] = React.useState([]);
  const [form, setform] = React.useState({});
  const [isFormOpen, setiformopen] = React.useState(true);

  React.useEffect(() => {
    getinitialdata();
  }, []);

  function getinitialdata() {
    fetch("https://schbang-backend-app.herokuapp.com/books").then(async (d) => {
      const res = await d.json();
      console.log(res);
      setBooks(res);
    });
  }
  function deleteBook(ud) {
    console.log(ud);
    axios
      .delete(`https://schbang-backend-app.herokuapp.com/books?id=${ud._id}`)
      .then((d) => {
        getinitialdata();
      });
  }

  function addNewBook() {
    if (!isFormOpen) {
      console.log(form);
      fetch("https://schbang-backend-app.herokuapp.com/books", {
        method: "POST",
        mode: "cors",
        headers: new Headers({
          // Your header content
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(form), // body data type must match "Content-Type" header
      }).then(() => {
        getinitialdata();
      });
    }
    setiformopen(!isFormOpen);
  }

  function onChange(event) {
    const finalObj = { ...form, [event.target.name]: event.target.value };
    setform(finalObj);
  }
  return (
    <div className="App">
      {isFormOpen ? (
        books.map((d) => (
          <div class="movie_card" id="bright">
            <div class="info_section">
              <div class="movie_header">
                <img class="locandina" src={d.image} />
                <div className="row">
                  <h1>{d.title}</h1>
                  <span onClick={() => deleteBook(d)}>X</span>
                </div>
                <span class="minutes">{d.author}</span>
                <p class="type">Rs.{d.price}</p>
              </div>
              <div class="movie_desc"></div>
            </div>
          </div>
        ))
      ) : (
        <div className="form">
          <h2>Enter details of the book</h2>
          <label>Enter title</label>
          <input name="title" onChange={onChange} />
          <label>Enter image</label>
          <input name="image" onChange={onChange} />
          <label>Enter author</label>
          <input name="author" onChange={onChange} />
          <label>Enter price</label>
          <input type="number" name="price" onChange={onChange} />
        </div>
      )}

      <div className="addButton" onClick={addNewBook}>
        +
      </div>
    </div>
  );
}

export default App;
