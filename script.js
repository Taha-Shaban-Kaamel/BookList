class BOOK {
  constructor (title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;

  }

  
}

class UI{
  // display Book in page 
  addBookToList(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML =`
      <td> # ${book.title} </td>
      <td> ${book.author} </td>
      <td> ${book.isbn} </td>
      <td class = "delete">X</td>

    `
    list.append(row);
  }

  showAlert (msg, className){
      const div = document.createElement('div');
      // add class name to our element
      div.className = `Alert ${className}`;
      // add our alert msg into the div element
      div.appendChild ( document.createTextNode(msg));
      // get form and container 
      const  form = document.querySelector('#book-form');
      const  container = document.querySelector('.container');

      // dispaly alert 
      container.insertBefore(div,form);
    
    
      // delete alert after 3 sec
      setTimeout(() => {
        document.querySelector('.Alert').remove();
      }, 1000);
  }

  // clear fields
  clearField(){
    document.querySelector('#title').value = ' ';
    document.querySelector('#author').value = ' ';
    document.querySelector('#isbn').value = ' ';
  };

  // delete book 
  deletBook(e){
    if(e.className === 'delete'){
      document.querySelector('.delete').parentElement.remove();
    }
  }
}

// Event listening

document.getElementById('book-form').addEventListener('submit',(e)=>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
   
    // instantinate book
    const book = new BOOK(title,author,isbn);
    
    

    // instantinate ui

    const ui = new UI ;
    if(title === ''|| author === '' || isbn ===''){
      ui.showAlert('you have to fill in all fields' , 'error')
    }else{
      ui.addBookToList(book);
      ui.showAlert('added success' , 'sucess')
      ui.clearField();
    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',(e)=>{
  const deletBook = new UI;
 e.target.parentElement.remove()
  deletBook.deletBook(e);
  e.preventDefault();
  deletBook.showAlert("Book deleted" , "deleteSucc")
});

