console.log("hyy");
const newnote_button=document.querySelector(".addnote-btn");
const note_container=document.querySelector(".note-container");


// for New note

newnote_button.addEventListener("click",(()=>{
    // alert("hyy")

    const note_box=document.createElement("div");
    note_box.classList.add("note");
    note_container.appendChild(note_box);

    const note_header=document.createElement("div")
    note_header.classList.add("note-header");
    note_box.appendChild(note_header);
    
    const note_title=document.createElement("input");
    note_title.classList.add('title');
		note_title.type = 'text';
		note_title.value = "Enter Title";
		note_title.setAttribute('readonly', 'readonly');

		note_header.appendChild(note_title);
        
        
        const note_menubar=document.createElement("h3");
    note_menubar.classList.add('note_menubar');
		note_menubar.innerHTML = '&#x2026';
		note_header.appendChild(note_menubar); 
        
        const note_points_container=document.createElement("div")
        note_points_container.classList.add("note_points_container");
        note_box.appendChild(note_points_container);

        const enter_note_click=document.createElement("div")
        enter_note_click.classList.add("enter_note");
        enter_note_click.innerText="Enter Note"
        note_box.appendChild(enter_note_click);
        
// for edit title
       
note_title.addEventListener("dblclick",(()=>{
    note_title.removeAttribute('readonly');
    note_title.focus();
    
}))
note_box.addEventListener("click",(()=>{
    note_title.setAttribute('readonly', 'readonly');  
}))



// for Note Point

const note_input_container=document.createElement("div")
note_input_container.classList.add("enter_note_container");
note_box.appendChild(note_input_container);


   const enter_note=document.createElement("input");
    enter_note.classList.add('enter_note_text');
    enter_note.type = 'text';
    enter_note.value = "Enter Note";
    note_input_container.appendChild(enter_note);
    
    const note_save = document.createElement('button');
		note_save.classList.add('save');
		note_save.innerText = 'Save';
        note_input_container.appendChild(note_save);

        const note_input_container_close = document.createElement('p');
		note_input_container_close.classList.add('note_input_container_close');
		note_input_container_close.innerHTML = "&#10006;";
        note_input_container.appendChild(note_input_container_close);

        enter_note_click.addEventListener("click",()=>{
            note_input_container.style.display="block";
        })
        
        note_input_container_close.addEventListener("click",()=>{
            note_input_container.style.display="none";
        })
        
        
        note_save.addEventListener("click",(e)=>{
            e.preventDefault();
            // alert("hyy");
            let value=document.querySelector(".enter_note_text").value;
            const note_list=document.createElement("div");
            note_list.classList.add("note_list");
            note_points_container.appendChild(note_list);

          const note_list_point=document.createElement("p");
          note_list_point.classList.add("note_list_point");
          note_list_point.innerText=value;
          note_list.appendChild(note_list_point);

          const note_list_point_remove=document.createElement("p");
          note_list_point_remove.classList.add("note_list_point_remove");
          note_list_point_remove.innerHTML="&#10006;";
          note_list.appendChild(note_list_point_remove);
          enter_note.value = "Enter Note";
          note_input_container.style.display="none";


        //   note_list_point.addEventListener("mouseover",()=>{
        //     note_list_point_remove.style.display="block";
        // })
        note_list_point.addEventListener("dblclick",()=>{
            note_list_point_remove.style.display="none";
        })
        note_list_point.addEventListener("click",()=>{
            note_list_point_remove.style.display="block";
        })
        
        note_list_point_remove.addEventListener("click",()=>{
            note_points_container.removeChild(note_list);
        })

        })

        // For background change and delete of note card
        // const istrue=menubar_option_holder.style.display="none";
    

        const menubar_option_holder=document.createElement("div");
         menubar_option_holder.classList.add("menubar_option_holder");
         note_box.appendChild(menubar_option_holder);

         const menubar_option_box=document.createElement("div");
         menubar_option_box.classList.add("menubar_option_box");
         menubar_option_holder.appendChild(menubar_option_box);

         const menubar_colorchange=document.createElement("div");
         menubar_colorchange.classList.add("menubar_colorchange");
         menubar_colorchange.innerText="Change Background"
         menubar_option_box.appendChild(menubar_colorchange);

         const menubar_colors=document.createElement("div");
         menubar_colors.classList.add("menubar_colors");
         menubar_colors.innerHTML=
         `<div class="color_btn" data-color="#ffffff" style="background:#ffffff;"></div>
         <div class="color_btn" data-color="#cce8e4" style="background:#cce8e4;"></div>
         <div class="color_btn" data-color="#faf1db" style="background:#faf1db;"></div>
         <div class="color_btn" data-color="#fde9d9" style="background:#fde9d9;"></div>
         <div class="color_btn" data-color="#cbd2d6" style="background:#cbd2d6;"></div>
         `
         menubar_option_box.appendChild(menubar_colors);

         const note_delete = document.createElement('button');
		note_delete.classList.add('note_delete');
		note_delete.innerText = 'Delete';
        menubar_option_box.appendChild(note_delete);

        note_menubar.addEventListener("click",()=>{  
            
                menubar_option_holder.style.display="block"; 
            
        })
        note_menubar.addEventListener("dblclick",()=>{  
         menubar_option_holder.style.display="none"; 
             
        })
      const color_btn=document.querySelectorAll(".color_btn");

      color_btn.forEach(color =>{
        color.addEventListener("click",()=>{
            let dataColor= color.getAttribute("data-color");
            note_box.style.setProperty("--cardColor",dataColor);
            menubar_option_holder.style.display="none"; 
        })
      })
      color_btn.forEach(color =>{
        color.addEventListener("mouseover",()=>{
            let dataColor= color.getAttribute("data-color");
            note_box.style.setProperty("--cardColor",dataColor);
        })
      })

      const menubar_close = document.createElement('p');
      menubar_close.classList.add('note_input_container_close');
      menubar_close.innerHTML = "&#10006;";
      menubar_option_box.appendChild(menubar_close);

      menubar_close.addEventListener("click",()=>{
        menubar_option_holder.style.display="none"; 
      })

    //   for delete note

      note_delete.addEventListener("click",()=>{
        note_container.removeChild(note_box);
      })
     

}))


