let input =document.querySelector(".todo_input");
let maintodocontainer=document.getElementById("todos");
let addbutton=document.querySelector(".additem");
let del=document.querySelector(".deleteitem");


addbutton.addEventListener('click',function(e){
    //create the element
   
    if(input.value.trim()){
        //crete a ul tag
        let ultag=document.createElement("ul");
    ultag.classList.add("list-class")
    let todolist=document.createElement("div");
    todolist.classList.add("list-divclass");

    let litag=document.createElement("li");
    litag.innerHTML=input.value;
    litag.classList.add("to-do-item");
    console.log(litag);

    // div for button
    let buttondiv=document.createElement("div");
    buttondiv.classList.add("button");

    var completebutton=document.createElement('button');
    completebutton.classList.add('completed');
    completebutton.innerHTML='<i class="fa fa-check"></i>';


    //trash button
    var trashbutton=document.createElement('button');
    trashbutton.classList.add('trash');
    trashbutton.innerHTML='<i class="fa fa-trash"></i>';

    //apending
    ultag.appendChild(todolist);
    todolist.appendChild(litag);
    todolist.appendChild(buttondiv);
    buttondiv.appendChild(completebutton);
    buttondiv.appendChild(trashbutton);
    // console.log(ultag);
  maintodocontainer.appendChild(ultag);

  todolist.addEventListener('click',function(e){
      let items=e.target;
      if(items.classList[0]==='completed')
      {
          let todo=items.parentElement;
          let todo2=todo.parentElement;
          todo2.classList.add("line-through");
      }
      if(items.classList[0]==='trash')
      {
          let to=items.parentElement;
          let to1=to.parentElement;
          let to3=to1.parentElement;
          to3.remove();
      }

  })

    }
})