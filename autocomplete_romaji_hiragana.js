$.fn.autoComplete = function(romaji, hiragana) {
  var text, charcode, hankaku = true, before_name, tmp_name ='', use_value=true, tmp_num = 0;
  var current_browser;
  current_browser = browser_check();
    
  if (current_browser == "chrome" || current_browser == "safari" || current_browser == "ie" || current_browser == "opera"){
  	$(this).keydown(function(e) {
      hankaku = hankaku_check(e.which);
    });
    console.log('hankaku:'+ hankaku);
  
    $(this).keyup(function(e) {
      
    	var shortcut_value = $(romaji).val();
    	var shortcut_value_num = $(hiragana).val();
    	
    	if (hankaku == false ){
    		charcode = keycode_check(e.which);
  	  	if (shortcut_value == ''){
  	  		text = charcode;
  	  	}else{
  	  		text = shortcut_value + charcode;
  	  	}
  	  	$(romaji).val(text);
  	  	if ((65 <= e.which && e.which <= 65 + 25)||(97 <= e.which && e.which <= 97 + 25)){
  			if (use_value == true){
  				tmp_name = before_name;
  				before_name = $(this).val();
  				$(hiragana).val(before_name);
  				//console.log(tmp_name)
  			}else{
  				var partner_name = $(this).val();
  				var partner_append = partner_name.substr(tmp_num);
  				var tmp = tmp_name + partner_append;
  				$(hiragana).val(tmp);
  				before_name = tmp;
  			}
  		}else{
  			use_value = false;
  			tmp_name = before_name;
  			now_value = $(this).val();
  			
  			if (tmp_name != now_value){
  				tmp_num = now_value.length;
  			}
  		}
    	}
    });
  }else if (current_browser == "firefox" || current_browser == "gecko"){
    
  }
}

function keycode_check(which){
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

function hankaku_check(which){
	if (which == 32 ||(65 <= which && which <= 65 + 25)||(97 <= which && which <= 97 + 25)){
			return true;
	}else if (which == 229){
		//日本語の場合
		return false;
	}else{
		charcode = ''
	}
}

function browser_check(){
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
