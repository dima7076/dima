"use strict"

window.addEventListener("DOMContentLoaded",
  function () {
    if (typeof localStorage === "undefined") {
      window.alert("このブラウザはLocal Storage機能が実装されていません ");
      return;
    } else {
      viewStorage();
      saveLocalStorage();
      selectTable();
      delLocalStorage();
      allClearLocalStorage();
    }
  }, false
);

function saveLocalStorage() {
  const save = document.getElementById("save");
  save.addEventListener("click",
    function (e) {
      e.preventDefault();
      const key = document.getElementById("textKey").value;
      const value = document.getElementById("textMemo").value;

      if (key == "" || value == "") {
        Swal.fire({
          title: "Memo app"
          , html: "Key,Memoはいずれも必須です。"
          , type: "error"
          , allowOutsideClick: false
        });
        return;
      } else {
        let w_msg = "LocalStorageに\n「" + key + " " + value + "」。\nを保存しますか？❤";
        Swal.fire({
          title: "Memo app"
          , html: w_msg
          , type: "question"
          , showCancelButton: true
        }).then(function (result) {
          if (result.value === true) {
            localStorage.setItem(key, value);
            viewStorage();
            let w_msg = "LocalStorageに" + key + " " + value + "を保存しました";
            Swal.fire({
              title: "Memo app"
              , html: w_msg
              , type: "success"
              , allowOutsideClick: false
            });
            document.getElementById("textKey").value = "";
            document.getElementById("textMemo").value = "";
          }

        });


      }

    }, false

  );
};

function delLocalStorage() {
  const del = document.getElementById("del");
  del.addEventListener("click",
    function (e) {
      e.preventDefault();
      const chkbox1 = document.getElementsByName("chkbox1");
      const table1 = document.getElementById("table1");
      let w_cnt = 0;
      w_cnt = selectCheckBox("del");
      if (w_cnt >= 1) {
        let w_msg = "LocalStorageから選択されている\n" + w_cnt + "件を削除しますか？❤";
        Swal.fire({
          title: "Memo app"
          , html: w_msg
          , type: "question"
          , showCancelButton: true
        }).then(function (result) {
          if (result.value) {
            for (let i = 0; i < chkbox1.length; i++) {
              if (chkbox1[i].checked) {
                localStorage.removeItem(table1.rows[i + 1].cells[1].firstChild.data);
              }
            }
            viewStorage();
            let w_msg = "LocalStorageから" + w_cnt + "件を削除しました。";
            Swal.fire({
              title: "Memo app"
              , html: w_msg
              , type: "Success"
              , allowOutsideClick: false
            });
            document.getElementById("textKey").value = "";
            document.getElementById("textMemo").value = "";
          }

        });
      }
    }, false
  );
};


function allClearLocalStorage() {
  const allClear = document.getElementById("allClear");
  allClear.addEventListener("click",
    function (e) {
      e.preventDefault();
      let w_msg = "LocalStorageのデータをすべて削除します。よろしいですか❤";
      Swal.fire({
        title: "Memo app"
        , html: w_msg
        , type: "question"
        , showCancelButton: true
      }).then(function(result) {
      if (result.value === true) {
        localStorage.clear();
        viewStorage();
        let w_msg = "LocalStorageのデータをすべて削除しました。"
        Swal.fire({
          title: "Memo app"
          , html: w_msg
          , type: "success"
          , allowOutsideClick: false
        });
        document.getElementById("textKey").value = "";
        document.getElementById("textMemo").value = "";
      }
    });
    }, false
  );
};


function selectTable() {
  const select = document.getElementById("select");
  select.addEventListener("click",
    function (e) {
      e.preventDefault;
      selectCheckBox("select");
    }, false
  );
};
function selectCheckBox(mode) {
  // let w_sel = "0";
  let w_cnt = 0;
  const chkbox1 = document.getElementsByName("chkbox1");
  const table1 = document.getElementById("table1");
  let w_textKey = "";
  let w_textMemo = "";
  for (let i = 0; i < chkbox1.length; i++) {
    if (chkbox1[i].checked) {
      if (w_cnt === 0) {
        w_textKey = table1.rows[i + 1].cells[1].firstChild.data;
        w_textMemo = table1.rows[i + 1].cells[2].firstChild.data;
      }
      w_cnt++;
    }
  }
  document.getElementById("textKey").value = w_textKey;
  document.getElementById("textMemo").value = w_textMemo;
  if (mode == "select") {
    if (w_cnt === 1) {
      return w_cnt;
    } else {
      Swal.fire({
        title:"Memo app"
        ,html:"1つ選択(select)してください。"
        ,type:"error"
        ,allowOutsideClick:false
    });
    }
  }
  if (mode == "del") {
    if (w_cnt >= 1) {
      return w_cnt;
    } else {
      Swal.fire({
        title:"Memo app"
        ,html:"1つ選択以上(select)してください。"
        ,type:"error"
        ,allowOutsideClick:false
    });
    }
  }

};

function viewStorage() {
  const list = document.getElementById("list");
  while (list.rows[0]) list.deleteRow(0);

  for (let i = 0; i < localStorage.length; i++) {
    let w_key = localStorage.key(i);

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    list.appendChild(tr)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    td1.innerHTML = "<input name='chkbox1' type='checkbox'> ";
    td2.innerHTML = w_key;
    td3.innerHTML = localStorage.getItem(w_key);

  }
  $("#table1").tablesorter({
    sortList: [[1, 0]]
  });
  $("#table1").trigger("update");
}