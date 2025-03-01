// This code for Random background color changes 
const thimChange = document.getElementById("thim_change").addEventListener("click", function() {
    const hexVal = Math.floor(Math.random()  * 0xffffff).toString(16)
    document.body.style.background = `#${hexVal}`
})
// This code for Random background color changes 
// This code for current day, date, month, and year
const currentDate = new Date();
const dateConvert = currentDate.toDateString()
const dayName = dateConvert.split(' ')[0]
const monthYear = dateConvert.split(' ').slice(1).join(' ')
document.getElementById('day_name').innerText = dayName + ' ,';
document.getElementById('year_month').innerText = monthYear;
// This code for current day, date, month, and year
// This code for my main click part and moer code here
const allCart = document.querySelectorAll('.my_cart');
const taskLengthElement = document.getElementById("cart_length");
taskLengthElement.innerText = allCart.length;
for (const myCart of allCart) {
    const buttons = myCart.querySelectorAll('button');
    const lastButton = myCart.querySelector('button.onetow')
    for (const button of buttons) {
        button.addEventListener('click', function() {
            alert("Board Updated Successfully")
            const title = myCart.querySelector('.title').innerHTML;
            const div = document.getElementById("history")
            const time = new Date().toLocaleTimeString();
            const titile = document.createElement("h2")
            titile.innerHTML = `You have Complete The Task ${title} at ${time}`
            titile.classList.add('p-[10px]', 'bg-secondary', 'text-[#494a4d]', 'text-base', 'mb-7')
            div.appendChild(titile)
            button.disabled = true;
            button.style.backgroundColor = "#cfd7ff";
            let currentTaskLength = parseInt(taskLengthElement.innerText);
            currentTaskLength -= 1;
            taskLengthElement.innerText = currentTaskLength; 
            const totalTask = document.getElementById("task_total")
            let convartTotalTask = parseInt(totalTask.innerText)
            convartTotalTask += 1
            totalTask.innerText = convartTotalTask
            if(button === lastButton) {
                alert('Congrates!!! You have completed all tha current task')
            }
        });
    }
}
// This code for my main click part and moer code here
// This code for clear history
document.getElementById("clear_history").addEventListener("click", function() {
    const div = document.getElementById("history")
    div.innerHTML = ""
})
// This code for clear history
// This code for navigate blog page location
document.getElementById("new_discover").addEventListener("click", function() {
    window.location.href = 'blog.html'
})
// This code for navigate blog page location


