class DataElement{
	constructor(data)
	{
		this.data = data;
		this.currentPage = 1;
		this.dataPlusStings = 20;
	}

	init()
	{
		const table = document.querySelector('.table');
		if (table) {
			if (Math.floor(this.data.length / this.dataPlusStings) + ((this.data.length % this.dataPlusStings) > 0) > 1) {
				let paginator = new Paginator(this, this.dataToString, this.dataPlusStings, this.data);
				paginator.init();
			}
			this.loadData()
		}
		
	}

	loadTableHeader()
	{
		const table = document.querySelector('.table');
		if (table) {
			let tableInnerHTML = 
			`<tr>
			<th>№</th>
			<th>Код</th>
			<th>Наименование</th>
			<th>Уровень1</th>
			<th>Уровень2</th>
			<th>Уровень3</th>
			<th>Цена</th>
			<th>ЦенаСП</th>
			<th>Количество</th>
			<th>Поля свойств</th>
			<th>Совместные покупки</th>
			<th>Единица измерения</th>
			<th>Картинка</th>
			<th>Выводить на главной</th>
			<th>Описание</th>
			</tr>`
			table.innerHTML = tableInnerHTML;
		}
	}

	loadData()
	{

		
		const table = document.querySelector('.table');
		if (table) {
			this.loadTableHeader();
			let tableInnerHTML = table.innerHTML;
			let fromLine = this.currentPage * this.dataPlusStings - this.dataPlusStings;
			let toLine = this.currentPage * this.dataPlusStings;
			if(toLine > this.data.length){
				toLine = this.data.length;
			}
			for (let index = fromLine; index < toLine; index++) {
				tableInnerHTML += 
				`<tr>
					<td width="4%">${index+1}</td>
					<td width="4%">${this.data[index]['code']}</td>
					<td width="4%">${this.data[index]['name']}</td>
					<td width="4%">${this.data[index]['level1']}</td>
					<td width="4%">${this.data[index]['level2']}</td>
					<td width="4%">${this.data[index]['level3']}</td>
					<td width="4%">${this.data[index]['price']}</td>
					<td width="4%">${this.data[index]['priceSP']}</td>
					<td width="4%">${this.data[index]['count']}</td>
					<td width="4%">${this.data[index]['propertyFields']}</td>
					<td width="4%">${this.data[index]['jointPurchases']}</td>
					<td width="4%">${this.data[index]['unit']}</td>
					<td width="4%">${this.data[index]['picture']}</td>
					<td width="4%">${this.data[index]['displayOmMain']}</td>
					<td width="50%">${this.data[index]['description']}</td>
				</tr>`
			}
			table.innerHTML = tableInnerHTML;
		}

		
	}
}

class Paginator
{
	constructor(that, dataToString, dataPlusStings, data)
	{
		this.data = data;
		this.dataToString = dataToString;
		this.dataPlusStings = dataPlusStings;
		this.currentPage = 1;
		this.pageCount = Math.floor(data.length / this.dataPlusStings) + ((data.length % this.dataPlusStings) > 0);
		this.dataElement = that;
	}

	init()
	{
		if (this.pageCount > 1) {
			const pagination = document.querySelectorAll('.pagination');
			if (pagination) {
				pagination.forEach(element => {
					element.classList.remove('hidden');
				});
			}
		}

		const paginationPrev = document.querySelectorAll('.pagination-prev');
		if (paginationPrev) {
			paginationPrev.forEach(element => {
				element.addEventListener('click', paginationPrevClick.bind(this));
			});
		}

		function paginationPrevClick(e)
		{
			if (this.currentPage > 1) {
				this.currentPage = --this.currentPage;
				this.dataElement.currentPage = --this.dataElement.currentPage;
				this.update();
			}
		}
		
		const paginationNext = document.querySelectorAll('.pagination-next');
		if (paginationNext) {
			paginationNext.forEach(element => {
				element.addEventListener('click', paginationNextClick.bind(this));
			});
		}

		function paginationNextClick(e)
		{
			if (this.currentPage < this.pageCount) {
				this.currentPage = ++this.currentPage;
				this.dataElement.currentPage = ++this.dataElement.currentPage;
				this.update();
			}
		}

		const paginationTop = document.querySelectorAll('.pagination-top');
		if (paginationTop) {
			paginationTop.forEach(element => {
				element.addEventListener('click', paginationTopClick.bind(this));
			});
		}
		
		function paginationTopClick(e)
		{
			window.scrollTo(0, 0);
		}

		const paginationBottom = document.querySelectorAll('.pagination-bottom');
		if (paginationBottom) {
			paginationBottom.forEach(element => {
				element.addEventListener('click', paginationBottomClick.bind(this));
			});
		}
		
		function paginationBottomClick(e)
		{
			window.scrollTo(0, 5000);
		}

		this.update();

	}

	update()
	{
		const paginationNumbers = document.querySelectorAll('.pagination-numbers');
		if (paginationNumbers) {

			paginationNumbers.forEach(element => {
				element.innerHTML = '';

				element.innerHTML += `<div class="pagination-number" data-number=1>1</div>`
				if(this.currentPage != 4){	
					element.innerHTML += '<div class="pagination-dots">...</div>';
				}
				for (let index = +this.currentPage - 2; index <= +this.currentPage + 2; index++) {
					if(index <= 1){
						element.innerHTML = '';
					}
					element.innerHTML += `<div class="pagination-number ${index == this.currentPage ? "current" : ""}" data-number=${index}>${index}</div>`
					if(index >= this.pageCount){
						break;
					}
				}
				if(this.currentPage < +this.pageCount - 2){
					if(this.currentPage != +this.pageCount - 3){	
						element.innerHTML += '<div class="pagination-dots">...</div>';
					}
					element.innerHTML += `<div class="pagination-number" data-number=${this.pageCount}>${this.pageCount}</div>`
				}	
					
				const paginationNumber = document.querySelectorAll('.pagination-number');
				if (paginationNumber) {
					paginationNumber.forEach(element => {
						element.addEventListener('click', paginationNumberClick.bind(this));
					});
				}

				function paginationNumberClick(e)
				{
					this.currentPage = e.target.dataset.number;
					this.dataElement.currentPage = e.target.dataset.number;
					this.update();
				}
			});
			
		}

		this.dataElement.loadData();
	}
}

function fetInputFile() 
{
	let inputs = document.querySelectorAll('.input__file');
	if (inputs) {
		Array.prototype.forEach.call(inputs, function (input) {
			let label = input.nextElementSibling,
			labelVal = label.querySelector('.input__file-button-text').innerText;
	
			input.addEventListener('change', function (e) {
				let fileName = '';
				if (this.files && this.files.length >= 1)
				fileName = this.files[0].name;
				
				if (fileName)
				label.querySelector('.input__file-button-text').innerText = 'Выбран файл: ' + fileName;
				else
				label.querySelector('.input__file-button-text').innerText = labelVal;
			});
		});
	}
}

function onWindowLoad() {

	const frm = document.querySelector('.file-form');
	const modal = document.querySelector('.modal');
	if (frm) {
		frm.addEventListener('submit', function (event) {
			if (modal) {
				modal.classList.remove("close");
			}
		});
	}

	let dataElement = '';
	
	switch (view) {
		case 'data':
			// fetch('http://localhost/Akticom/api/product/all')
			// fetch('http://html4you.hostronavt.ru/api/product/all')
			// .then((response) => {
			// 	return response.json();
			// })
			// .then((data) => {
				dataElement = new DataElement(data);
				dataElement.init();
			// });
		  	break;
			  
		case 'home':
			fetInputFile();
			break;

		default:
		  	break;
	  }
	
}

window.addEventListener("load", onWindowLoad);