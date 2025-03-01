const thimChange = document.getElementById("thim_change").addEventListener("click", function() {
        const hexVal = Math.floor(Math.random()  * 0xffffff).toString(16)
        document.body.style.background = `#${hexVal}`

})

// const curskfj= new Date()
// console.log(curskfj)
// const currentDate = document.getElementById("date").innerText = curskfj

// currentDate.rep


// const currentDate = new Date();

// // তারিখ, মাস, এবং বছর আলাদা করে পাওয়া
// const day = currentDate.getDate();      // দিন
// const month = currentDate.getMonth() + 1; // মাস (জানুয়ারি = 0, তাই 1 যোগ করতে হবে)
// const year = currentDate.getFullYear();  // বছর
// const time = currentDate.getTime();  // বছর

// console.log(`আজকের তারিখ: ${day}/${month}/${year} ${time}}`);

// console.log(new Date().toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }));

// const allCart = document.querySelectorAll(".my_cart button")
// document.getElementById("cart_length").innerText ="0" + allCart.length;

// const one =allCart.addEventListener("click",function(){
//     const tittle = document.querySelectorAll('h2')
//     console.log(tittle)
// })

const allCart = document.querySelectorAll('.my_cart');
const taskLengthElement = document.getElementById("cart_length");
taskLengthElement.innerText = "0" + allCart.length;


for (const myCart of allCart) {
    const buttons = myCart.querySelectorAll('button');
    const lastButton = myCart.querySelector('button.onetow')
    for (const button of buttons) {
        button.addEventListener('click', function() {
            alert("Board Updated Successfully")
            const title = myCart.querySelector('.title').innerHTML;
            const div = document.getElementById("history")
            const date= new Date()
            const titile = document.createElement("h2")
            titile.innerHTML = `You have Complete The Task ${title} at ${date}`
            titile.classList.add('p-[10px]', 'bg-secondary', 'text-[#494a4d]', 'text-base', 'mb-7')
            div.appendChild(titile)
            button.disabled = true;
            button.style.backgroundColor = "#cfd7ff";

            let currentTaskLength = parseInt(taskLengthElement.innerText);
            currentTaskLength -= 1;
            taskLengthElement.innerText = "0" + currentTaskLength; 
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


document.getElementById("clear_history").addEventListener("click", function() {
    const div = document.getElementById("history")
    div.innerHTML = ""
})



