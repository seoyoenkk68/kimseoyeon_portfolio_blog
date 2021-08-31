function sendEmailForm(form) {
  if ( form._replyto.value.length == 0 ) {
    alert('이메일 주소를 입력해주세요.');
    form._replyto.focus();
    return;
  }
  
  if ( form.message.value.length == 0 ) {
    alert('메세지를 입력해주세요.');
    form.message.focus();
    return;
  }
  
  form.submit();
  
  form._replyto.value = '';
  form.message.value = '';
  form.submit1.innerHTML = '전송되었습니다.';
  form.submit1.disabled = true;
}