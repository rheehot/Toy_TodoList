fetch('https://raw.githubusercontent.com/Sweet-Pumpkin/mgs-toy-project/main/json/list-01.json')
		.then (res=>{
			return res.json()
		})
		.then(obj=>{
			List(obj);
		})



	function List(obj) {
  
  function forList(D1, D2) {
    const ulEl = document.querySelector('.list');
    const dataWrap = document.createElement('div');
		const dateName = document.createElement('span');
		dataWrap.classList.add('accountBox')
    dateName.className = "dateName";
    dateName.textContent = D2;

    const plusPrice = document.createElement('span');
    plusPrice.className ="plusPrice";

    const D1Price = obj.map(
			v => v.date === D1 && v.inOut === 'out' ? v.price : null)
			
      .reduce((a, b) => {return a + b}, 0
    );
    
    const changeD1Price = D1Price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    plusPrice.textContent = `${changeD1Price}원 지출`;
    
    ulEl.appendChild(dataWrap);
    dataWrap.appendChild(dateName);
    dataWrap.appendChild(plusPrice);

    for (let i = 0; i < obj.length; i++) {
      const date = obj[i].date;
      const inOut = obj[i].inOut;
      const item = obj[i].item;
      const price = obj[i].price;
      const changePrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      if (date === D1) {
        const liItem = document.createElement('div');
        const liPrice = document.createElement('div');
        const listWrap = document.createElement('li');

        liItem.textContent = `${item}`;

        if (inOut === 'out') {
          liPrice.classList.add('out');
          
          liPrice.textContent = `${changePrice}원`; 
        } else {
          liPrice.classList.add('in');
          liPrice.textContent = `${changePrice}원`; 
        }
        ulEl.appendChild(listWrap)
        listWrap.appendChild(liItem);
        listWrap.appendChild(liPrice);
      }
    }
  }
  forList("2022.05.06", "오늘");
  forList("2022.05.05", "어제");
  forList("2022.05.04", "2일 전");
  forList("2022.05.03", "3일 전");
  forList("2022.05.02", "5월 2일");
  forList("2022.05.01", "5월 1일");
}



//

      // function list(obj) {
      //   const accountList = document.querySelectorAll('.list');
        
      //   const date1 =  new Date(obj[obj.length-1].date);
      //   const date2 = new Date(obj[0].date);
      //   const diffDate = date1.getTime() - date2.getTime();
      //   const dateDays = Math.abs(diffDate / (1000* 3600 * 24));

      //   let sum = [];
      //   let accountSum =[];
      //   let day=[];
      //   let expend=[];
      //   let ulElem=[];
      //   for(let k= 0; k<3;k++) {
      //     for (let j=0; j<=dateDays;j++){
          
      //       sum[j] =0;
      //       accountSum[j] = document.createElement('div');
      //       day[j] = document.createElement('span');
      //       expend[j] = document.createElement('span');
      //       ulElem[j] = document.createElement('ul');
      //       accountSum[j].classList.add('account_detail__sum');
      //       ulElem[j].classList.add('list');
      //       day[j].classList.add('day');
      //       expend[j].classList.add('expend');
      //       accountList.item(k).appendChild(accountSum[j]);
      //       accountSum[j].appendChild(day[j]);
      //       accountSum[j].appendChild(expend[j]);
      //       accountList.item(k).appendChild(ulElem[j]);
  
      //       for(let i = 0; i < obj.length; i++ ) {
      //         if (obj[i].date == ('2022.05.0'+String(6-j))) {
      //           if(j === 0 ){
      //             day[j].textContent = '오늘';
      //           } else if (j===1) {
      //             day[j].textContent = '어제';
      //           } else if (j===2) {
      //             day[j].textContent = '그제';
      //           } else {
      //             day[j].textContent = '2022.05.0'+String(6-j);
      //           }
                
      //           const li = document.createElement('li');
      //           const strong = document.createElement('strong');
      //           strong.textContent = obj[i].item;
      //           const span = document.createElement('span');
                
      //           span.textContent = obj[i].price;
    
      //           li.appendChild(strong);
      //           li.appendChild(span);
      //           ulElem[j].appendChild(li);
      //           if(obj[i].inOut == 'out'){
      //             sum[j]+=obj[i].price;
      //           }
      //         }
      //       }
      //       expend[j].textContent = sum[j] + "원 지출";
      //     }
      //   }
      // };