autocomplete_romaji_hiragana(v0.1.0)
============================

inputタグに入力された全角文字を、半角のローマ字とひらがなに自動入力されます。

使用例）住所入力のひらがな補完、ショートカットキーの設定、履歴書のひらがな補完等

※IE10, IE9, chrome, safari, operaで動作確認済

============================

使い方

============================

1.ヘッダにソースを追加
  <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
  <script src="autocomplete_romaji_hiragana.js"></script>
  
  
2.type="text"のinputタグを追加

  <input id="address" size="30" type="text" placeholder="ここに入力">
  <input id="address_romaji" size="30" type="text">
	<input id="address_hiragana" size="30" type="text">
  
  
3.
  $('<入力補完してほしいid(classも可)>').autoComplete('<ローマ字出力してほしいinputタグのid>', '<ひらがな出力してほしいinputタグのid>');

  $('#address').autoComplete('#address_romaji', '#address_hiragana');
  
=============================
Demoページ
  http://plugin-demo.doublw.com/

