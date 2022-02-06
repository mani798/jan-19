var reviews = [
    {
      id: 1,
      name: "Anna",
      job: "  WEB DEVELOPER",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRuc5g4UHrTWzsk7SEU0QbEauiRxakwFnd9w&usqp=CAU",
      text: "The definition paragraph does exactly what you would expect: it defines a term, often by drawing distinctions between the term and other related ones. The definition that you provide will often be specific to your subject area. Try to avoid perfunctory dictionary definitions that do not inform your analysis in a meaningful way.",
    },
    {
      id: 2,
      name: "Winsey",
      job: "WEB DESIGNER",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wKNeguzGBs7ZgPl18dtNzD9CWm7Zi3nxuQ&usqp=CAU",
      text: "Our typology is built on three dimensions: internality, types of participants, and the degree of effective resistance. For our study, a civil war is any armed conflict that involves (a) military action internal to the metropole, (b) the active participation of the national government, and (c) effective resistance by both sides. With these criteria, we differentiate civil wars from other types of internal violent conflicts.",
    },
    {
      id: 3,
      name: "James",
      job: "INTERN",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjidvk3DPBtaN3SXhqTDVhzve_yJEhYIE9xQ&usqp=CAU",
      text: "Policies of privatisation should be considered as responses to several distinct pressures. First, privatisation is a response by the state to internal forces such as increasing fiscal problems (O’Connor, 1973). It provides a means of lessening the state’s fiscal responsibilities by encouraging the development of private alternatives which, theoretically at least, do not draw upon the state’s financial reserves.",
    },
    {
      id: 4,
      name: "Edison",
      job: "THE BOSS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8Bir6y6D_S_BVCfgyYRwy7lacrkQ0ys-ig&usqp=CAU",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
  
  var imgElement = document.getElementById("person-img");
  var author = document.getElementById("author");
  var job = document.getElementById("job");
  var info = document.getElementById("info");
  var prevBtn = document.querySelector(".prev-btn");
  var nextBtn = document.querySelector(".next-btn");
  var randomBtn = document.querySelector(".random-btn");
  

  
  var currentIndex = 0;
  
  prevBtn.addEventListener("click", prevClick);
  nextBtn.addEventListener("click", nextClick);
  randomBtn.addEventListener("click", randomaize);
  
  function prevClick() {
    if (currentIndex === 0) {
      currentIndex = reviews.length - 1;
    } else {
      currentIndex--;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function nextClick() {
    if (currentIndex === reviews.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    console.log(currentIndex);
    updateUserDetails();
  }
  
  function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
  }