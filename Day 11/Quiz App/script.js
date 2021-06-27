const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

  
const questions = [
  {
    question: 'What Indian city is the capital of two states',
    answers: [
      { text: 'Chandigarh', correct: true },
      { text: 'Kolkata', correct: false },
      { text: 'Chennai', correct: false },
      { text: 'Mumbai', correct: false }
    ]
  },
  {
    question: 'How many countries border India?',
    answers: [
      { text: '2', correct: false },
      { text: '9', correct: false },
      { text: '6', correct: true },
      { text: '14', correct: false }
    ]
  },
  {
    question: 'What is the capital of Gujarat?',
    answers: [
      { text: 'Lucknow', correct: false },
      { text: 'Mumbai', correct: false },
      { text: 'Ghandinagar', correct: true },
      { text: 'Bhopal', correct: false }
    ]
  },
  {
    question: 'What, approximately, is the area of India, in square kilometers?',
    answers: [
      { text: '2,000,000', correct: false },
      { text: '3,000,000', correct: true },
      { text: '2,000,000', correct: false },
      { text: '1,500,000', correct: false }
    ]
  },
  {
    question: 'Who was the president of India in 2009?',
    answers: [
      { text: 'Indira Gandhi', correct: false },
      { text: 'Pratibha Patil', correct: true },
      { text: 'Jawaharlal Nehru', correct: false },
      { text: 'Govind Singh', correct: false }
    ]
  },
  {
    question: 'What is India’s smallest state by area?',
    answers: [
      { text: 'Puducherry', correct: false },
      { text: 'Uttar Pradesh', correct: false},
      { text: 'Goa', correct: true },
      { text: 'Kerala', correct: false }
    ]
  },
  {
    question: 'During what period does India’s wet season occur?',
    answers: [
      { text: 'several days in late December', correct: false },
      { text: 'November through February', correct: false },
      { text: 'April and a week in May', correct: false },
      { text: 'about mid-June to early October', correct: true }
    ]
  },
  {
    question: 'Which of these bodies of water does not border India?',
    answers: [
      { text: 'Bay of Bengal', correct: false },
      { text: 'Indian Ocean', correct: false },
      { text: 'Arabian Sea', correct: false },
      { text: 'Red Sea', correct: true}
    ]
  },
  {
    question: 'Delhi is located along what river?',
    answers: [
      { text: 'the Brahmaputra', correct: false },
      { text: 'the Ganges', correct: false },
      { text: 'the Yamuna', correct: true },
      { text: 'the Nile', correct: false }
    ]
  },
  {
    question: 'When is India’s Independence Day?',
    answers: [
      { text: 'October 31', correct: false },
      { text: 'July 14', correct: false },
      { text: 'January 1', correct: false },
      { text: 'August 15', correct: true }
    ]
  },
  {
    question: 'Which of these is not a river of India?',
    answers: [
      { text: 'Ganges', correct: false },
      { text: 'Yamuna', correct: false },
      { text: 'Mekong', correct: true },
      { text: 'Brahmaputra', correct: false }
    ]
  },
  {
    question: 'Who was India’s prime minister in 2006?',
    answers: [
      { text: 'Atal Bihari Vajpayee', correct: false },
      { text: 'Manmohan Singh', correct: true },
      { text: 'Morarji Desai', correct: false },
      { text: 'Indira Gandhi', correct: false }
    ]
  },

]