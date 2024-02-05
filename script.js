let input= document.querySelector('.entered-list');
let addBtn= document.getElementById('add-list');
let tasks= document.querySelector('.tasks');

//add button disabled

input.addEventListener('keyup', () => {
	if(input.value.trim() !=0){
		addBtn.classList.add('active')
	}else{
		addBtn.classList.remove('active')
	}

	})

//add new item to list


addBtn.addEventListener('click', () => {
    // alert("hello");
    if (input.value.trim() !== '') { // Check if the input value is not empty
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <p> ${input.value} </p>
            <div class="item-btn">
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-xmark"></i> 
            </div>
        `
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task');
    }
});
// delete item from list

tasks.addEventListener('click',(e) =>{
	if(e.target.classList.contains('fa-xmark')){
		e.target.parentElement.parentElement.remove();
	}
})

// mark items as completed

tasks.addEventListener('click',(e) =>{
	if(e.target.classList.contains('fa-pen-to-square')
		){
		e.target.parentElement.parentElement.classList.toggle('completed');
	}
})



