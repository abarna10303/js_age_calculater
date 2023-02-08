// let date=new Date();
// let dateofBirth=new Date();
// dateofBirth.setFullYear(2003);
// console.log(date.getFullYear()-dateofBirth.getFullYear());
let submit=document.getElementById('btn');
let para=document.getElementById('ans');
submit.addEventListener("click",()=>
{
    let birth_day=document.getElementById('birthday');
    let birthday=new Date(birth_day.value);
    let currentday=new Date();

    para.innerText=`${currentday.getFullYear()-birthday.getFullYear()} years ${currentday.getMonth()-birthday.getMonth()} Months ${currentday.getDate()-birthday.getDate()} Days`;
})