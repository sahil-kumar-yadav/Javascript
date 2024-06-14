
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter bhi apne ander callback he leta hai
// filter values return karta hai

let newarr = arr.filter((num) => num > 4)
console.log(newarr)

let newarr1 = arr.filter((num) => { // when we use this curly braces
    return num > 4; // use return most frequently done mistake
})
console.log(newarr1)

// given below data of books

const books = [
    {
        "id": 1,
        "title": "Agile Web Development with Rails",
        "author": "Sam Ruby, Dave Thomas, David Heinemeier Hansson",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Web development",
        "volume": "",
        "year": "2010",
        "edition": "Fourth Edition",
        "language": "en",
        "extension": "docs",
        "pages": "472",
        "filesize": "6937523",
    },
    {
        "id": 2,
        "title": "Flask Web Development",
        "author": "Miguel Grinberg",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "python,pyhton web development,flask",
        "volume": "",
        "year": "0",
        "edition": null,
        "language": "",
        "extension": "pdf",
        "pages": "0",
        "filesize": "8864692",

    },
    {
        "id": 3,
        "title": "Agile web development with rails: a Pragmatic guide",
        "author": "Dave Thomas, David Heinemeier Hansson, Leon Breedt, Mike Clark, Thomas Fuchs, Andrea Schwarz",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "'Web site development -- Handbooks, manuals, etc.','Ruby (Computer program language) -- Handbooks, manuals, etc.','Sites Web -- DeРњРѓveloppement -- Guides, manuels, etc.','Ruby (Langage de programmation) -- Guides, manuels, etc.'",
        "volume": "",
        "year": "2005",
        "edition": "1",
        "language": "en",
        "extension": "pdf",
        "pages": "554",
        "filesize": "7990657",



    },
    {
        "id": 4,
        "title": "CakePHP Application Development: Step-by-step introduction to rapid web development using the open-source MVC CakePHP framework",
        "author": "Ahsanul Bari, Anupom Syam",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Computer Science/Web/Server Side Scripting/PHP",
        "volume": "",
        "year": "2008",
        "edition": "",
        "language": "en",
        "extension": "pdf",
        "pages": "328",
        "filesize": "9179016",


    },
    {
        "id": 5,
        "title": "Alex Homer, ASP.NET 2.0 Visual Web Developer 2005",
        "author": "David Sussman",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Компьютерная литература\\11 web строительство\\Web - строительство, ASP.NET\\",
        "volume": "",
        "year": "2006",
        "edition": "",
        "language": "en",
        "extension": "pdf",
        "pages": "314",
        "filesize": "13218370",

    },
    {
        "id": 6,
        "title": "PHP Oracle Web Development: Data processing, Security, Caching, XML, Web Services, and Ajax: A practical guide to combining the power, performance, scalability, ... time, and high performance of PHP",
        "author": "Yuli Vasiliev",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Computer Science/Web/Server Side Scripting/PHP",
        "volume": "",
        "year": "2007",
        "edition": "1st Ed.",
        "language": "en",
        "extension": "pdf",
        "pages": "392",
        "filesize": "7257933",

    },
    {
        "id": 7,
        "title": "WordPress for Web Developers: An Introduction for Web Professionals",
        "author": "Stephanie Leary (auth.)",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Computers\\\\Web-design",
        "volume": "",
        "year": "2013",
        "edition": "",
        "language": "en",
        "extension": "pdf",
        "pages": "356",
        "filesize": "6016788",


    },
    {
        "id": 8,
        "title": "MODx Web Development",
        "author": "Antano Solar John, Antano Solar John",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Computer Science/Web/Server Side Scripting/PHP",
        "volume": "",
        "year": "2009",
        "edition": "",
        "language": "en",
        "extension": "pdf",
        "pages": "276",
        "filesize": "6044490",


    },
    {
        "id": 9,
        "title": "Grok 1.0 Web Development",
        "author": "Carlos de la Guardia",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Computing -Web",
        "volume": "",
        "year": "2010",
        "edition": "",
        "language": "en",
        "extension": "pdf",
        "pages": "307",
        "filesize": "2834507"


    },
    {
        "id": 10,
        "title": "Professional JavaScript for Web Developers",
        "author": "Nicholas C. Zakas",
        "author_firstname": null,
        "author_lastname": "",
        "author_middlename": "",
        "categories": "Computing -Web",
        "volume": "",
        "year": "2009",
        "edition": "2",
        "language": "en",
        "extension": "pdf",
        "pages": "841",
        "filesize": "5510920",


    }

]

const filteredBook = books.filter((bk) => bk.id >= 5)
const filteredBook1 = books.filter((bk) => { return bk.year > 2009 })
const filteredBook2 = books.filter((bk) => {
    return (bk.year > 2009 && bk.extension == "pdf")

})
// console.log(filteredBook)
// console.log(filteredBook1)
console.log(filteredBook2)

