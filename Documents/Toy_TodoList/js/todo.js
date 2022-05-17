const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos() { 
	localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
// JSON.stringify(toDos) 로컬스토리지에 배열로 저장됨


function deleteToDo(event) { 
	const li = event.target.parentElement;
	toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
	li.remove();
	saveToDos();
}

function paintToDo (newTodo)  { 
	const li = document.createElement('li');
	li.id = newTodo.id;
	const span = document.createElement('span');
	span.innerText = newTodo.text;
	const button = document.createElement('button');
	button.innerText = "❌";
	button.addEventListener('click', deleteToDo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li)
}


function handleToDoSubmit(event) { 
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id:Date.now(), //랜덤값주는 용도
	}
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}



toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !==null) { 
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	parsedToDos.forEach(paintToDo);
}



//필터함수

// ex-1)

//const arr = ["pizza","banana","tomato"]

//function sexyFilter(food){return food !== "banana"}

//arr.filter(sexyFilter)

// 결과 ['pizza', 'tomato']


// ex-2)

// const arr2 = [1234,5454,223,122,45,6778,334]

// function sexy(numberr) { return numberr < 1000 }

// arr2.filter(sexy)

// 결과 [223, 122, 45, 334]


// ex - 3)
// const todos = [{ text: "lalala" }, { text: "lololo" }]

// function sexy(todo) { return todo.text !== "lololo" }

// todos.filter(sexy)
