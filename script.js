// Array of MCQ questions
const mcqQuestions = [
    {
      question: "1. What does CPU stand for?",
      options: [ "Computer Personal Unit", "Central Power Unit", " Core Processing Unit"],
      correctAnswer: "Central Processing Unit"
    },
    {
      question: "2. Name two types of computer memory.",
      options: ["CPU and GPU", "HDD and SSD","LAN and WAN"],
      correctAnswer: "RAM and ROM"
    },
    {
      question: "3. What is the function of an operating system?",
      options: ["Store user data", "Connect to the internet","Print documents"],
      correctAnswer: "Manage computer hardware and software resources"
    },
    {
      question: "4. What is the difference between RAM and ROM?",
      options: ["RAM is used for long-term storage, while ROM is for short-term storage.", "RAM is faster than ROM.","ROM can be upgraded, but RAM cannot."],
      correctAnswer: "RAM is volatile, while ROM is non-volatile."
    },
    {
      question: "5. Explain the purpose of a motherboard in a computer",
      options: ["It generates power for the computer.", "It processes data.","It displays images on the screen."],
      correctAnswer: "It connects all components of the computer system."
    },
    {
      question: "6. What does the acronym USB stand for?",
      options: ["United States Business", "User System Backup","Underlying Storage Buffer"],
      correctAnswer: "Universal Serial Bus"
    },
    {
      question: "7. Name three common input devices used with computers.",
      options: ["Monitor, printer, scanner", "CPU, GPU, RAM","Speakers, webcam, touchscreen"],
      correctAnswer: "Keyboard, mouse, and microphone"
    },
    {
      question: "8. Define the term \"bit\" in computing.",
      options: ["A unit of measurement for computer speed.", "A type of computer virus.","A unit of memory storage. "],
      correctAnswer: "The smallest unit of data in a computer, representing a binary digit (0 or 1)."
    },
    {
      question: "9. What is the difference between software and hardware?",
      options: ["Software and hardware are synonyms.", "Software is more important than hardware.","Hardware includes only input devices"],
      correctAnswer: "Software refers to programs and applications that run on a computer, while hardware refers to physical components of a computer system."
    },
    {
      question: "10. Describe the difference between a hard disk drive (HDD) and a solid-state drive (SSD).",
      options: ["HDD is faster than SSD.", "HDD is more expensive than SSD.","HDD has a longer lifespan than SSD."],
      correctAnswer: "HDD uses spinning disks to store data magnetically, while SSD uses flash memory for storage."
    },
    {
      question: "11. What does the term \"LAN\" stand for in networking?",
      options: ["Large Access Network", "Long Antenna Network","Low-speed Area Network"],
      correctAnswer: "Local Area Network"
    },
    {
      question: "12. What is the purpose of a graphics processing unit (GPU)?",
      options: ["To process text documents.", "To store data permanently.","To connect to wireless networks."],
      correctAnswer: "To render images and videos for display on a computer screen."
    },
    {
      question: "13. Explain the concept of file compression.",
      options: ["It increases the quality of images.", "It prevents unauthorized access to files.","It encrypts files for security."],
      correctAnswer: "It reduces the size of a file to save storage space and make it easier to transmit."
    },
    {
      question: "14. What does \"URL\" stand for in relation to the internet?",
      options: ["Universal Routing Language", "User Recognition List","Uninterruptible Relay Link"],
      correctAnswer: "Uniform Resource Locator"
    },
    {
      question: "15. Describe the difference between HTTP and HTTPS.",
      options: ["HTTP is faster than HTTPS.", "HTTP is used for emails, while HTTPS is used for web browsing.","HTTP and HTTPS are the same thing."],
      correctAnswer: "HTTPS is a secure version of HTTP that encrypts data sent between a browser and a website."
    },
    // Add more questions as needed
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const quizContainer = document.getElementById('quiz');
  const nextButton = document.getElementById('nextButton');
  
  // Function to shuffle options (Fisher-Yates shuffle)
  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  }
  
  // Function to display current question
  function displayQuestion() {
    const currentQuestion = mcqQuestions[currentQuestionIndex];
    const shuffledOptions = shuffleOptions([...currentQuestion.options, currentQuestion.correctAnswer]);
  
    quizContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      <div class="options">
        ${shuffledOptions.map(option => `
          <div class="option" onclick="checkAnswer('${option}')">${option}</div>
        `).join('')}
      </div>
    `;
  }
  
  // Function to check answer
  function checkAnswer(selectedAnswer) {
    const currentQuestion = mcqQuestions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  
    if (currentQuestionIndex < mcqQuestions.length - 1) {
      currentQuestionIndex++;
      displayQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to show result
  function showResult() {
    quizContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${mcqQuestions.length}</p>
    `;
    nextButton.style.display = 'none';
  }
  
  // Event listener for next button
  nextButton.addEventListener('click', () => {
    checkAnswer(null); // Null because we're not passing an answer parameter
  });
  
  // Initial display of first question
  displayQuestion();