

// Validasi penulisan email:
function validation_input(form){
  tipe_email=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!tipe_email.test(form.email.value)){
    alert ('email writing is wrong!');
    form.email.focus();
    return false;
  }
  return (true);
}

// Validaasi penulisan nomor telepon:
function validation_input(form) {
  if (form.telp.value = "+62" && 8 <= form.telp.value.length <= 15 ) {
    var x = (form.telp.value);
    var status = true;
    var list = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
    for (i=0; i<=x.length-1; i++) {
      if (x[i] in list) cek = true;
      else cek = false;
      status = status && cek;
    }
    if (status == false) {
      alert("telephone must number!");
      form.telp.focus();
      return false;
    }
  }
  return (true);
}

// Validasi username:
function validation_input(form){
  var mincar = 5;
  var maxcar = 9;
  if (form.username.value.length < mincar && form.username.value.length > maxcar){
    alert("Username Length just 5-9 Character!");
    form.username.focus();
    return (false);
  }
   return (true);
}

// Validasi password
function validation_input(form){
  pola_pwd=/^[a-zA-Z0-9._-] + =/;
  if (!pola_pwd.test(form.password.value)){
    alert ('wrong password format!');
    form.password.focus();
    return false;
  }
  return (true);
}