

function USER_TO_STORAGE(){
 console.log(document.getElementById("date").value);
 if(document.getElementById("date").value=="" || document.getElementById("hour").value == "" || document.getElementById("DISCRIPTION").value ==""){
     alert("one or more is empty");
 }
 else{
localStorage.setItem("date",document.getElementById("date").value);
localStorage.setItem("hour",document.getElementById("hour").value);
localStorage.setItem("DISCRIPTION",document.getElementById("DISCRIPTION").value)
 }

return;
}

function STORAGE_TO_LIST(){
////CREAT ELEMENTS
//labels
let done_button=document.createElement("input");
done_button.setAttribute("type","checkbox");
done_button.setAttribute("onclick","click_done()");

let delet_button=document.createElement("img");
delet_button.setAttribute("onclick", "delet_row()");



let label_DATE=document.createElement("label");
let label_hour=document.createElement("label");
let label_DISCRIPTION=document.createElement("textarea");
label_DISCRIPTION.setAttribute("rows","3")
label_DISCRIPTION.setAttribute("cols","15")
//td
let td_DATE=document.createElement("td");
let td_hour=document.createElement("td");
let td_DISCRIPTION =document.createElement("td");

let td_done=document.createElement("td");

let td_delet=document.createElement("td");

//tr//row
let new_row=document.createElement("tr");
new_row.setAttribute("onclick", "row_index(this)");

//table
let mytable=document.getElementById("mytable");

//add values to label
label_DATE.textContent=localStorage.getItem("date");
label_hour.textContent=localStorage.getItem("hour");
label_DISCRIPTION.textContent=localStorage.getItem("DISCRIPTION");
delet_button.src="data:image/png;base64,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"
delet_button.style.width="25px";
delet_button.style.height="25px";



///TEST
console.log(label_DATE);
console.log(label_hour);
console.log(label_DISCRIPTION);


///ADD TO TABLE
td_DATE.append(label_DATE);
td_hour.append(label_hour);
td_DISCRIPTION.append(label_DISCRIPTION);
td_done.append(done_button);
td_delet.append(delet_button);


new_row.append(td_DATE);
new_row.append(td_hour);
new_row.append(td_DISCRIPTION);
new_row.append(td_done);
new_row.append(td_delet);

mytable.append(new_row);


return;
 


}

function contaner(){
USER_TO_STORAGE();
STORAGE_TO_LIST();
  localStorage.clear();
return; 
}

function row_index(x){
    console.log("here");
    console.log(("Row index is: " + x.rowIndex));
    localStorage.row_index = x.rowIndex
    
    return;
}

function  delet_row(){
    let mytable=document.getElementById("mytable");
    let y=localStorage.getItem("row_index")
    console.log(typeof(y));
    console.log(y);
    console.log("here3");
    console.log(typeof(Number( y)));
     console.log(mytable.rows[(Number( y))-1]);
     mytable.rows[((Number( y))) - 1].remove();
    
    return ;
}

function click_done(){
    let mytable=document.getElementById("mytable");
    let y=localStorage.getItem("row_index")
    console.log(y);
    console.log(Number( y)+1);
    console.log(typeof(( y)));
    console.log("here done");
    console.log(mytable.rows[((Number(y))-1)]);
    mytable.rows[((Number( y))+1)].setAttribute("class","delet_line");
   
    return;
}

function delet_table(){
    let mytable=document.getElementById("mytable");
    mytable.remove();
    localStorage.clear();
    return;
}




