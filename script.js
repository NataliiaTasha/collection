//header elements

const image = document.createElement("div");
image.setAttribute("class", "logo");
const heading1 = document.createElement("h1");
const node = document.createTextNode("Tasha's books collection")
heading1.appendChild(node);
const para = document.createElement("p");
const text1 = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa numquam unde nemo! Asperiores non recusandae exercitationem fugiat a, alias voluptatibus inventore fuga commodi nihil sequi, aspernatur tempora saepe architecto suscipit!");
para.appendChild(text1);
const first = document.createElement("div");
first.setAttribute("class", "one");
const second = document.createElement("div");
second.setAttribute("class", "two");

first.appendChild(image);
first.appendChild(heading1);
second.appendChild(para);

const element = document.getElementById("top");
element.appendChild(first);
element.appendChild(second);


//main

const section = document.createElement("section");
section.setAttribute("class", "container");
const main = document.querySelector("main");
main.appendChild(section);

//collection

const collection = [
    {
        bookTitle: "A Man Called Ove",
        bookAuthor: "Frederick Backman",
        bookCover: "images/book1.jpg",
        bookGenre: ["novel", " humor"],
        bookSummary: "A heartwarming story about an isolated and grumpy old man who finds unexpected friendship and purpose in the most unlikely of places. It's a touching tale of love, loss, and the power of human connection.",
        extLink: "https://www.fredrikbackmanbooks.com/",
    },

    {
        bookTitle: "Anxious People",
        bookAuthor: "Frederick Backman",
        bookCover: "images/book2.jpg",
        bookGenre: ["novel", " humor"],
        bookSummary: "This story features a Bank Robber, a Hostage Situation, a Real Estate Agent and an entire cast of other extremely complicated characters. This is a character driven novel and it delves into the trials and tribulations of each individual whose lives are affected by the situation that they are in.",
        extLink: "https://www.fredrikbackmanbooks.com/",
    },

    {
        bookTitle: "Beartown",
        bookAuthor: "Frederick Backman",
        bookCover: "images/book3.jpg",
        bookGenre: "novel", 
        bookSummary: "The novel, noted as hockey literature, centers on a declining youth hockey team in a small town. The story follows the events leading up to a violent incident involving two teenagers and the consequences that they face, the hockey players, their families, friends, and the community which has a long-standing reputation as a hockey town. It is the first book in the Beartown series, followed by Us Against You and The Winners.",
        extLink: "https://www.fredrikbackmanbooks.com/",
    },  

    {
        bookTitle: "Britt-Marie Was Here",
        bookAuthor: "Frederick Backman",
        bookCover: "images/book4.jpg",
        bookGenre: "novel", 
        bookSummary: "The story follows 63-year-old Britt-Marie, who finally leaves her unfaithful husband after a decades-long failed marriage. She finds a job in the small, declining town of Borg, and despite knowing little about soccer, becomes the youth soccer coach.",
        extLink: "https://www.fredrikbackmanbooks.com/",
    },  

    {
        bookTitle: "Becoming a sucessful illustrator",
        bookAuthor: ["Derek Brazell", " Jo Davies"],
        bookCover: "images/book5.jpg",
        bookGenre: ["non-fiction", " design"],
        bookSummary: "This book focuses on the idea fact that creative talent needs to be backed up with business skills. The books covers the many aspects that a professional illustrator needs to think about in order to make a living off creating images.",
        extLink: "http://www.derekbrazell.com/",
    }, 

    {
        bookTitle: "Sauveur and Son",
        bookAuthor: "Marie-Aude Murail",
        bookCover: "images/book6.jpg",
        bookGenre: "novel",
        bookSummary: "This book centers around the life of widowed father and psychologist Sauveur Saint-Yves and his eight-year-old son, Lazare, in Orléans, France. The word “sauveur” in French translates to “savior,” and with a name like that, wouldn’t one feel predestined to save the whole world? Sauveur was born in Martinique and migrated to France after the death of his wife when Lazare was three years old. A deeply empathetic psychologist, he possesses boundless humor and generosity for his patients—even when encountering their resistance to therapy or blatant racism against him as a black man in France. Through his skill and kindness with his patients we learn the details of their ordeals, and eventually get to the heart of not only their experiences, but also the story of Sauveur himself.",
        extLink: "https://www.instagram.com/mamurail/",
    }, 

    {
        bookTitle: "Mort",
        bookAuthor: "Terry Pratchett",
        bookCover: "images/book7.jpg",
        bookGenre: ["novel", " humor"],
        bookSummary: "A satirical comedy about how Death takes young Mort from the fields, teaches him to collect souls, and takes a holiday to experience human pleasures. In Death's absence, Mort prevents an assassination and needs strong magic to repair the rift in history.",
        extLink: "https://www.terrypratchettbooks.com/",
    }, 

    {
        bookTitle: "Foundations. Graphic design 01. Approach and language",
        bookAuthor: ["Gavin Ambrose", " Nigel Ono-Billson"],
        bookCover: "images/book8.jpg",
        bookGenre: ["non-fiction", " design"],
        bookSummary: "When we dare to finally realize our dream, the question always arises, 'Where to start?'. Even people of the freest and most inspired professions at the start very much need the support and help of experienced colleagues and mentors. Gavin Ambrose and Nigel Ono-Billson have offered graphic design beginners a helpful, friendly and colorful guide to the profession. The first book in this series will help you familiarize yourself with a professional dictionary and toolkit, provide practical tips on working with ideas and implementing ideas, teach you how to work with a brief and design the result of your creativity in accordance with standards.",
        extLink: "https://research.brighton.ac.uk/en/persons/gavin-ambrose",
    }, 
    
    {
        bookTitle: "Foundations. Graphic Design 02: Design Research",
        bookAuthor: ["Gavin Ambrose", " Nigel Ono-Billson"],
        bookCover: "images/book9.jpg",
        bookGenre: ["non-fiction", " design"],
        bookSummary: "A graphic design project can be seen as a sequence of choices — and the more conscious the choice at each stage, the better the result. Research — it is a tool with which you can study a subject in depth, and based on the acquired knowledge, choose among possible options and make successful and well-founded decisions.",
        extLink: "https://research.brighton.ac.uk/en/persons/gavin-ambrose",
    }, 
    
    {
        bookTitle: "Foundations. Graphic design 03: Generating ideas",
        bookAuthor: ["Gavin Ambrose", " Nigel Ono-Billson"],
        bookCover: "images/book10.jpg",
        bookGenre: ["non-fiction", " design"],
        bookSummary: "There are many levels of idea generation: from macro to micro, from brainstorming to more targeted, selective and strategic schemes. Creative thinking — a skill that can be developed. And in this book, you'll find a variety of approaches, theories, and strategies to help you do just that. In particular, we will look at some rather historically determined strategies, and the corresponding practical exercises will help you see them in the context of your own design work. Ideas — the basis of good design. Generation, selection and development of these ideas — fundamental skills of a graphic designer-practitioner. The book will help you get involved in the work and generate more ideas and a variety of interesting, effective and relevant design solutions.",
        extLink: "https://research.brighton.ac.uk/en/persons/gavin-ambrose",
    }, 
]

//creating cards

const container = document.querySelector(".container");
collection.forEach(book => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const title = document.createElement("h3");
    title.textContent = book.bookTitle;

    const author = document.createElement("h4");
    author.textContent = book.bookAuthor;

    const genre = document.createElement("p");
    genre.setAttribute("class", "genre");
    genre.textContent = /*"Genre: " + */book.bookGenre;

    const summary = document.createElement("p");
    summary.setAttribute("id", "summary");
    summary.textContent = book.bookSummary;

    const link = document.createElement("a");
    // link.textContent = "Learn more";
    link.innerHTML = "<img src='images/icons/share-link_1388978.png' alt='icon' class='link' width=24px>";
    link.href = book.extLink;

    const picture = document.createElement("img");
    picture.setAttribute("class", "cover");
    picture.src = book.bookCover;
    picture.alt = book.bookTitle;

    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    const fullSummary = document.createElement("p");
    fullSummary.textContent = book.bookSummary;
    modal.appendChild(fullSummary);

    // const picture = document.createElement("div");
    // picture.setAttribute("class", "cover");
    const info = document.createElement("div");
    info.setAttribute("class", "info");   

    
    info.appendChild(genre);
    info.appendChild(title);
    info.appendChild(author);
    info.appendChild(summary);
    info.appendChild(modal)
    info.appendChild(link);

    card.appendChild(picture);
    card.appendChild(info);

    container.appendChild(card);
});


//text

const summaryElement = getElementById('summary');
summaryElement.addEventlistener('click', function() {
    alert();
})
//footer

const paragraph = document.createElement("p");
const footerText = document.createTextNode("blabla");

paragraph.appendChild(footerText);

const footer = document.getElementById("bottom");
footer.appendChild(paragraph);



