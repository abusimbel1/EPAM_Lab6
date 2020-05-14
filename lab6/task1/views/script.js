
const requestURL = "http://jsonplaceholder.typicode.com/users"
function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload = () => {
      if(xhr.status >= 400){
        reject(xhr.response)
      }else{
        resolve(xhr.response)
      }
    }
    xhr.onerror = () => {
      reject(xhr.response)
    }
    xhr.send(JSON.stringify(body))
  })
}
// const body = {
//     name: 'sasga',
//     sasha: 22
//   }


// jQuery(function($) {
//     $('#register').on('submit', function(event) {
      
//       if ( validateForm() ) { // если есть ошибки возвращает true
//         event.preventDefault();
//         console.log("error");
        
//       }else{
//         console.log("here");
//         console.log($('login').val());
        
//         var body = {
//           name: $('login').val(),
//             email: $('email').val(),
//             message: $('textarea').val()
//         };
//         sendRequest('POST',requestURL,body)
//       .then(data => console.log(data))
//       .catch(err => cosole.log(err))
//         // var user = {
//         //   name: $('login').val(),
//         //     email: $('email').val(),
//         //     message: $('textarea').val()
        
//         // };
//         // var gg = {
//         //   name: "sasga",
//         //   sasha: "loxxxxxxxxxxxx"
//         // }
//         // sendRequest('POST',requestURL,body)
//         // .then(data=>console.log(data))
//         // .catch(err => console.log(err)
//         // )
//         // var json = JSON.stringify(gg);
//         // var request = new XMLHttpRequest();
//         // request.open("POST", "http://localhost:3001/prinial");
//         // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         // request.onreadystatechange = function () {
//         //         if (request.readyState == 4 && request.status == 200)
//         //             document.getElementById("output").innerHTML=request.responseText;
//         // }
//         // request.send(json);
//       }
//     });
    
    
     
//   });
  jQuery(function($) {
    $('#register').on('submit', function(event) {
     
       event.preventDefault();
      if ( validateForm() ) { 
        
        return false; 
      }else{

      
      var body = {
        name: $('#login').val(),
          email: $('#email').val(),
          message: $('#textarea').val()
      };
      sendRequest('POST',requestURL,body)
    .then(data => console.log(data))
    .catch(err => cosole.log(err))}
    });
    function validateForm() {
      $(".text-error").remove();
      var v_login = false;
      var reg1=/^[а-яА-Яa-zA-Z]+$/;
      // Проверка логина    
      var el_l    = $("#login");
      if ( el_l.val().length < 4 ) {
         v_login = true;
        el_l.after('<span class="text-error for-login">Логин должен быть больше 3 символов</span>');
        $(".for-login").css({top: el_l.position().top + el_l.outerHeight() + 2});
      } else if(!reg1.test(el_l.val())){
          v_login = true;
          el_l.after('<span class="text-error for-email">Вы указали недопустимое имя</span>');
          $(".for-login").css({top: el_l.position().top + el_l.outerHeight() + 2});
      }
      $("#login").toggleClass('error', v_login );
      // v_login = false;
      
      // Проверка e-mail
      
      var reg     = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
      var el_e    = $("#email");
      var v_email = el_e.val()?false:true;
    
      if ( v_email ) {
        el_e.after('<span class="text-error for-email">Поле e-mail обязательно к заполнению</span>');
        $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
      } else if ( !reg.test( el_e.val() ) ) {
        v_email = true;
        el_e.after('<span class="text-error for-email">Вы указали недопустимый e-mail</span>');
        $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
      }
      $("#email").toggleClass('error', v_email );
      // v_email = false;
      // Проверка паролей
      
      var el_text = $("#textarea");
    //   console.log(el_text.val().length);
      var v_text = false;
      if(el_text.val().length < 2){
          v_text = true;
          // console.log('gg');
          
          el_text.after('<span class="text-error for-text">Логин должен быть больше 31 символов</span>');
          $(".for-text").css({top: el_text.position().top + el_text.outerHeight() + 2});
      }
      console.log(v_text);
      
      $("#textarea").toggleClass('error', v_text );
      // v_text = false;
    }
    // тут функция валидации без изменений
  })

  // function validateForm() {
  //   $(".text-error").remove();
  //   var v_login = false;
  //   var reg1=/^[а-яА-Яa-zA-Z]+$/;
  //   // Проверка логина    
  //   var el_l    = $("#login");
  //   if ( el_l.val().length < 4 ) {
  //      v_login = true;
  //     el_l.after('<span class="text-error for-login">Логин должен быть больше 3 символов</span>');
  //     $(".for-login").css({top: el_l.position().top + el_l.outerHeight() + 2});
  //   } else if(!reg1.test(el_l.val())){
  //       v_login = true;
  //       el_l.after('<span class="text-error for-email">Вы указали недопустимое имя</span>');
  //       $(".for-login").css({top: el_l.position().top + el_l.outerHeight() + 2});
  //   }
  //   $("#login").toggleClass('error', v_login );
  //   // v_login = false;
    
  //   // Проверка e-mail
    
  //   var reg     = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/i;
  //   var el_e    = $("#email");
  //   var v_email = el_e.val()?false:true;
  
  //   if ( v_email ) {
  //     el_e.after('<span class="text-error for-email">Поле e-mail обязательно к заполнению</span>');
  //     $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
  //   } else if ( !reg.test( el_e.val() ) ) {
  //     v_email = true;
  //     el_e.after('<span class="text-error for-email">Вы указали недопустимый e-mail</span>');
  //     $(".for-email").css({top: el_e.position().top + el_e.outerHeight() + 2});
  //   }
  //   $("#email").toggleClass('error', v_email );
  //   // v_email = false;
  //   // Проверка паролей
    
  //   var el_text = $("#textarea");
  // //   console.log(el_text.val().length);
  //   var v_text = false;
  //   if(el_text.val().length < 2){
  //       v_text = true;
  //       // console.log('gg');
        
  //       el_text.after('<span class="text-error for-text">Логин должен быть больше 31 символов</span>');
  //       $(".for-text").css({top: el_text.position().top + el_text.outerHeight() + 2});
  //   }
  //   console.log(v_text);
    
  //   $("#textarea").toggleClass('error', v_text );
  //   // v_text = false;
  // }
// // $(function() {
// //     $("#register").submit(function() {
// //         var formData = {
// //             "field1":$("#field1").val()
// //             , "field2":$("#field2").val()
// //         };
// //         $.ajax({
// //             url:'dataparser.php'
// //             , type:'POST'
// //             , data:'jsonData=' + $.toJSON(formData)
// //             , success: function(res) {
// //                 alert(res);
// //             }
// //         });
// //         return false;
// //     });
// // });





//------------------
// const requestURL = "http://jsonplaceholder.typicode.com/users"

// function sendRequest(method, url, body= null){
//   const headers ={
//     'Content-Type' : 'application/json'
//   }


//   return fetch(url,{
//   method: method,
//   body: JSON.stringify(body),
//   headers: headers
// }).then(response => {
//   // if(response.ok){
//     return response.json()
//   // }
//   // return response.json().then(error => {
//   //   const e = new Error("Something goes wrong...")
//   //   e.data = error
//   //   throw e
//   // })
// })  
// }
// const body = {
//     name: 'sasga',
//     sasha: 22
//   }
// sendRequest('POST',requestURL,body)
// .then(data => console.log(data))
// .catch(err => console.log(err))
