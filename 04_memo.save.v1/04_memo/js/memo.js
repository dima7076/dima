"use strict"

window.addEventListener("DOMContentLoaded",
function(){
    if(typeof localStorage ==="undefined"){
        window.alert("this blower is not being locoatstorageFuntion ");
        return;
    }else{
        saveLocalStorage();
    }
    },false
);

function saveLocalStorage(){
     const save = document.getElementById("save");
        save.addEventListener("click",
        function(e){
        e.preventDefault();
        const key = document.getElementById("textKey").value;
        const value = document.getElementById("textMemo").value;

        if(key==""||value==""){
            window.alert("Key,Memo must be typig");
            return;
        }else{
            localStorage.setItem(key,value);
            let w_msg="LocalStorage" + key +" " + value + "saved";
            window.alert(w_msg);
            document.getElementById("textKey").value="";
            document.getElementById("textMemo").value="";

        }
     },false

    );
};
