function notify(text){
    document.getElementById('msg').innerHTML+='<p>'+text+'</p>'
    titleFlick()
  }

  function titleFlick(){
    if(document.hasFocus()){
      document.title='Enviando'
      return
    }
    document.title=document.title=='Enviando'?'* Enviado':'Enviado'
    setTimeout('titleFlick()',500)
  }
