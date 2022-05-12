// 상단 시계
clockTitle = document.querySelector(".clock");

function getTime() {
	const date = new Date();
	const minutes = date.getMinutes();
	const hours = date.getHours();
	const seconds = date.getSeconds();
	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

}

function init() {
	getTime();
	setInterval(getTime, 1000);
}

init();
// 상단시계 끝


// 올림 액티브

const upbtn = document.querySelectorAll('.upbtn');
const accountCont = document.querySelectorAll('.account_content');



function upHandler() {
	accountCont.forEach(function (item) {
		item.classList.toggle('up_active');
	})
}

upbtn.forEach(function (item) {
	item.addEventListener("click", upHandler);
})

//차트페이지

//차트버튼
const cht = document.querySelectorAll('.cht');
const chtPage = document.querySelector('.cht_page')

cht.forEach(function (chtbtn) {
	chtbtn.addEventListener('click', chtUp);
})

function chtUp(e) {
	e.preventDefault();
	chtPage.classList.add('up');
}

//차트페이지 취소버튼
const chtClose = document.querySelector('.cht_close');

function closehandler(e) {
	e.preventDefault();
	chtPage.classList.remove('up');
}

chtClose.addEventListener('click', closehandler);

// 이체페이지

const trsBtn = document.querySelectorAll('.trs');
const trsPage = document.querySelector('.transpg');

trsBtn.forEach(function (trbtn) {
	trbtn.addEventListener('click', trsUp);
})

function trsUp(e) {
	e.preventDefault();
	trsPage.classList.add('up');
}

// 이체페이지 취소버튼
const trsClose = document.querySelector('.transpg >.close');

const trsCloseHandle = (e) => {
	e.preventDefault();
	trsPage.classList.remove('up');
}

trsClose.addEventListener('click', trsCloseHandle)


// 지출 관리 기준금액 설정

const val1 = document.querySelector("#manageMoney");
const moneyPut1 = document.querySelector("#managePut");

function moneyinputHanler(event) {

	const mValue = event.target.value;
	const mValuePnt = mValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	val1.innerText = mValuePnt;
}
val1.innerText = moneyPut1.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

moneyPut1.addEventListener("input", moneyinputHanler);


// 이체넘버페이지

const trsDRBtn = document.querySelectorAll('.direct_bt,.direct_bt_1');
const trsDRPage = document.querySelector('.transNumberpg');
const trsDRClose = trsDRPage.querySelector('.close');
const trsDRNum = document.querySelector('.numberInput');

trsDRBtn.forEach(function (DRbtn) {
	DRbtn.addEventListener('click', trsDR);
})

function trsDR(e) {
	e.preventDefault();
	trsDRPage.classList.add('up');
}

function trsDRCloseHandle(e) { 
	e.preventDefault();
	trsDRPage.classList.remove('up');
}


trsDRClose.addEventListener('click', trsDRCloseHandle);

// 이체넘버

const numBtnGr = document.querySelector(".numBtn");
const numBtn = numBtnGr.querySelectorAll(".num");
const numDel = numBtnGr.querySelector(".del");
function numberInnerHandler(e) { 
	const numTarget = e.target.textContent;

	trsDrnNumPut = trsDRNum.textContent += numTarget;
	

	const threept = trsDrnNumPut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	console.log(threept);
	trsDRNum.textContent = threept;
}

numBtn.forEach(function (numBBtn) {
	numBBtn.addEventListener("click", numberInnerHandler);
});

function ResetHandler() { 
	trsDRNum.textContent = trsDRNum.textContent.slice(0,-1);
}

numDel.addEventListener("click", ResetHandler);


//이체 결과페이지
const trsNext = document.querySelector(".next");
const trsComplepg = document.querySelector(".trsComple")
const trsCompleCencle = trsComplepg.querySelector('.close')
const lastMon = document.querySelector('.last_money')


function trnCompleHandler(e) { 
	e.preventDefault();
	trsComplepg.classList.add('up');

	lastMon.textContent = trsDRNum.textContent}

function trsComCan(e) { 
	e.preventDefault();
	trsComplepg.classList.remove('up');
}


trsNext.addEventListener('click', trnCompleHandler);
trsCompleCencle.addEventListener('click', trsComCan);


