fetch('../data/categories.json')
  .then(response => response.json())
  .then(result => {
    const categories = result.data.categories;
    const container = document.getElementById('container');
    container.innerHTML = '';
    for(let i = 0; i < categories.length; i++) {
        const category = categories[i];
        container.innerHTML += 
        `<button onclick="fetchQuestionsByCategory('${category.id}')"><h1>${category.name}</h1></button><br>`;
    }
  })
  .catch(error => {
    console.error('取得分類失敗', error);
  });

function fetchQuestionsByCategory(categoryId) {
  return fetch(`../data/questions/${categoryId}.json`)
    .then(response => response.json())
    .then(result => {
    const questions = result.data.questions;
    const questionDiv = document.getElementById('questions');
    questionDiv.innerHTML = '';
      
    for(let j = 0; j < questions.length; j++) {
        const ques = questions[j];
        questionDiv.innerHTML += 
          `<p>Q${j+1}: ${ques.question}<br></p>
          `;
          for(let k = 0; k < ques.options.length; k++) {
            questionDiv.innerHTML += `
            <button onclick="checkAnswer(${k}, ${ques.answer})">${ques.options[k]}</button><br>
            `;
          }
    }
  });
}
function checkAnswer(selectedIndex, correctAnswer) {
  if (selectedIndex == correctAnswer) {
    alert("答對了！");
  } else {
    alert("答錯了，再試試看！");
  }
}
