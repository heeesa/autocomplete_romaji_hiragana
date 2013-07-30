$.fn.autoComplete = function(romaji, hiragana) {
  var text, charcode, hankaku = true, beforeName, tmpName ='', useValue=true, tmpNum = 0;
  var currentBrowser;
  currentBrowser = browserCheck();
    
  if (currentBrowser == "chrome" || currentBrowser == "safari" || currentBrowser == "ie" || currentBrowser == "opera"){
    $(this).keydown(function(e) {
      hankaku = hankakuCheck(e.which);
    });
  
    $(this).keyup(function(e) {
      
      var shortcutValue = $(romaji).val();
      var shortcutValueNum = $(hiragana).val();
      
      if (hankaku == false ){
        charcode = keycodeCheck(e.which);
        if (shortcutValue == ''){
          text = charcode;
        }else{
          text = shortcutValue + charcode;
        }
        $(romaji).val(text);
        if ((65 <= e.which && e.which <= 65 + 25)||(97 <= e.which && e.which <= 97 + 25)){
        if (useValue == true){
          tmpName = beforeName;
          beforeName = $(this).val();
          $(hiragana).val(beforeName);
        }else{
          var partnerName = $(this).val();
          var partnerAppend = partnerName.substr(tmpNum);
          var tmp = tmpName + partnerAppend;
          $(hiragana).val(tmp);
          beforeName = tmp;
        }
      }else{
        useValue = false;
        tmpName = beforeName;
        nowValue = $(this).val();
        
        if (tmpName != nowValue){
          tmpNum = nowValue.length;
        }
      }
      }
    });
  }else if (currentBrowser == "firefox" || currentBrowser == "gecko"){
    
  }
}

function keycodeCheck(which){
  var charcode;
  if ((65 <= which && which <= 65 + 25)||(97 <= which && which <= 97 + 25)){
      charcode = String.fromCharCode(which);
    }else if (which == 229){
      //日本語入力
    }else{
      charcode = ''
    }
  return charcode;
}

function hankakuCheck(which){
  if (which == 32 ||(65 <= which && which <= 65 + 25)||(97 <= which && which <= 97 + 25)){
      return true;
  }else if (which == 229){
    //日本語の場合
    return false;
  }else{
    charcode = ''
  }
}

function browserCheck(){
  var userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.indexOf('opera') != -1) {
    return 'opera';
  } else if (userAgent.indexOf('msie') != -1) {
    return 'ie';
  } else if (userAgent.indexOf('chrome') != -1) {
    return 'chrome';
  } else if (userAgent.indexOf('safari') != -1) {
    return 'safari';
  } else if (userAgent.indexOf('gecko') != -1) {
    return 'gecko';
  } else {
    return false;
  }
}
