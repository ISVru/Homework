"use strict";
// books-section: отобразить информацию о книгах
/*
для каждого жанра отдельный div:
<div>
    <h2></h2> название жанра
    <div class="books"> все книги одного жанра
        <article> книга
            <span></span> название книги
            <img> обложка
            <p></p> описание
            <a>Читать</a>
        </article>
    </div>
</div>
*/
let booksByGenre = [{
        genreName: "Crafts",
        books: [{
                id: 8,
                title: "Lorem ipsum",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non nulla " +
                    "optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=20"
            },
            {
                id: 10,
                title: "Aliquam consequatur",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur " +
                    "ea fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=21"
            },
            {
                id: 34,
                title: "Laudantium",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus, necessitatibus " +
                    "non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=22"
            }
        ]
    },
    {
        genreName: "Thriller",
        books: [{
                id: 4,
                title: "Necessitatibus",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non" +
                    " nulla optio quae quod quos repudiandae rerum, tempore",
                img: "https://picsum.photos/1000/1000?random=23"
            },
            {
                id: 13,
                title: "Nulla optio quae quod",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquam consequatur ea " +
                    "fugit inventore laudantium natus",
                img: "https://picsum.photos/1000/1000?random=24"
            },
            {
                id: 59,
                title: "Non nulla",
                description: "A ab aliquam consequatur ea fugit inventore laudantium natus, necessitatibus non " +
                    "nulla optio quae quod quos repudiandae rerum, tempore, voluptate. laudantium natus," +
                    " necessitatibus non nulla optio quae quod quos repudiandae rerum, tempore, voluptate.",
                img: "https://picsum.photos/1000/1000?random=25"
            }
        ]
    }
];

/*<div>
	<h2></h2> название жанра
	<div class="books"> все книги одного жанра
		 <article> книга
			  <span></span> название книги
			  <img> обложка
			  <p></p> описание
			  <a>Читать</a>
		 </article>
	</div>
</div>*/
let booksSection = document.querySelector(".books-section");

function addBook(booksArr, element) {
    booksArr.forEach((genre) => {
        let genreBook = document.createElement("div");
        genreBook.classList.add("genre");

        let nameGenre = document.createElement("h2");
        nameGenre.innerText = genre.genreName;

        let booksAll = document.createElement("div");
        booksAll.classList.add("books");

        genre.books.forEach((book) => {
            let bookEach = document.createElement("article");
            bookEach.classList.add("book_article");

            bookEach.innerHTML = `
            <span>${book.title}</span> название книги
            <img class="img_book" src="${book.img}"> обложка
            <p>${book.description}</p> описание
            <a>Читать</a>
            `;
            booksAll.append(bookEach);
        });
        genreBook.append(nameGenre, booksAll);
        element.append(genreBook);
    });
}
addBook(booksByGenre, booksSection);