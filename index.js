const title = document.getElementById('title');
const question = document.getElementById('question');
const radioCont = document.getElementById('radio-container');
const currIndex = 0;

const getCheckedRadioValue = container => {
  const inputs = container.getElementsByTagName('input');
  let value = '';
  for (const input of inputs) {
    if(input.checked) {
      value = input.value;
    }
  }
  // console.log(value);
  return value;
}




const createRadioBlock = (container, answer) => {
  const div = document.createElement('div');
  const input = document.createElement('input');
  const label = document.createElement('label');

  const id = `rad${Math.floor(Math.random() * 100)}`;

  input.setAttribute('id', id);
  input.setAttribute('type', 'radio');
  input.setAttribute('name', 'answers');
  input.value = answer;

  label.setAttribute('for', id);
  label.innerText = answer;

  div.appendChild(input);
  div.appendChild(label);  
  container.appendChild(div);  
}


const initQuestion = (task, index) => {
  // clean radio-container
  title.innerText = index + 1;
  question.innerText = task.question;

  task.answers.forEach(answer => createRadioBlock(radioCont, answer));
}

initQuestion(tasks[currIndex], currIndex);

 /*  
  
  add ~5-8 tasks

  create class with constructor
 
  implement next button "Next" with validation
      validation:
       - checked required
       - last task => button name = "Finish"
  
  implement next steps

  implement count all points  
      
*/
