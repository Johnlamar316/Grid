//const wmf = document.querySelector("#book-list li:nth-child(2) span.name");
//console.log(wmf);

// let books = document.querySelectorAll("#book-list li span.name");
/* for(let i = 0; i < books.length; i++) {
    console.log(books[i]);
} 
  //for loop and forEach() are the same thing   

 let books = document.querySelectorAll("#book-list li span.name");
books.forEach(function(book) {
    book.textContent +=  " " + "(book title)";     //textContent changes the content of the element//
})

const bookList = document.querySelector("#book-list");
bookList.innerHTML += "<h2> Book Concept <h2>";    // innerHTML changes the content of the elemet//

*/

/* const banner = document.querySelector("#page-banner");
console.log("node type:  " + banner.nodeType);
console.log("node name:  " + banner.nodeName);
console.log("child node:  " + banner.hasChildNodes());

//const cloneBanner = banner.cloneNode(true);

const getParent = document.querySelector("#add-book");
console.log(getParent.parentNode);   
  // or //
console.log(getParent.parentElement); //addng .parentElement goes upper to return the parent element
console.log(getParent.children);      // children element

const getSibling = document.querySelector("#book-list");
console.log(getSibling.previousElementSibling);   // returns the siblings element that is in the same level//
getSibling.previousElementSibling.querySelector("p").innerHTML += "<br/>to cool and easier to access"; */

const getH2 = document.querySelector("#book-list h2");
getH2.addEventListener("click", function(a) {
  console.log(a.target);
  console.log(a);
})


// to block the link from its source//
const link = document.querySelector("#book-list a");
  link.addEventListener("click", function(b) {
    b.preventDefault();
    console.log("block link");
  })



//1 
/*const del = document.querySelectorAll("#book-list li span.delete");
del.forEach(function(items){
  items.addEventListener("click", function(b) {
    const off = b.target.parentElement;   // grabbing the li which is the parentElement//
    console.log(off);
   off.parentElement.removeChild(off);   // grabbing the parentElement of li which is ul and removing the child which is li //
  })
}) */

// good practice of adding event listening..always start eventlistener from the parentElement//
//2
  const list = document.querySelector("#book-list ul");
  list.addEventListener("click", function(c) {
    if(c.target.className === "delete") {
      const takeOff = c.target.parentElement;
      //console.log(takeOff);
      list.removeChild(takeOff)
      //console.log(list);
    } 
  }); 

// how to add submit eventListener to a from and remove its default behaviour //
const addForm = document.forms["add-book"];
  //console.log(addForm);
addForm.addEventListener("submit", function(w){
  //console.log(w);
  w.preventDefault();
  const getValue = addForm.querySelector('input[type="text"]').value;
 // console.log(value);

 // create elements //
const li = document.createElement("li");
const bookName = document.createElement("span");
const deleteBtn = document.createElement("span");

//add content //
deleteBtn.innerHTML = "delete";
bookName.innerHTML = getValue;
console.log(list.appendChild(li));
//add class //
deleteBtn.classList.add("delete");
bookName.classList.add("name");

// append to document i.e arrange and put it to document //
li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
console.log(list.appendChild(li));

})

// using checkbox to hide the books //
const hideBooks = document.querySelector("#hide");
hideBooks.addEventListener("change", function(z) {
 
  if(z.target.checked) {
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
})

/*
// get, set and remove Attributes //
 const atributes = document.querySelector("#book-list h2");
 atributes.getAttribute("class");
 atributes.setAttribute("class", "src-2");
 atributes.removeAtrributes("class");
*/


// search for books//
const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", function(s) {
  const term = s.target.value.toLowerCase();
  const books = list.getElementsByTagName("li");
   Array.from(books).forEach(function(book) {
    const title = book.firstElementChild.innerHTML;
    console.log(title);
    if(title.toLowerCase().indexOf(term) != -1) {
        book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  })
})


  //tabbed content //
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      console.log(targetPanel);
      panels.forEach(function(panel){
        if(panel === targetPanel) {
          panel.classList.add("active");  //put active in d panel if the panell === targetPanel;
        } else {
          panel.classList.remove("active");
        } 
      })
    }
  })



















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  document.addEventListener("DOMContentLoaded", function(){
    // wrap all your DOM codes //
  })
  