---
---
<!DOCTYPE HTML>
<html lang='en' dir='ltr'>
<meta charset="utf-8" />
<meta name="robots" content="noindex,nofollow" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge">

<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
<link rel="stylesheet" type="text/css" href="phpmyadmin.css" />
<link rel="stylesheet" type="text/css" href="./themes/pmahomme/jquery/jquery-ui-1.9.2.custom.css" />
<title>phpMyAdmin</title>

</head>
<body id='loginform'>
<div id="page_content">
    <div class="container">
    <a href="./url.php?url=http%3A%2F%2Fwww.phpmyadmin.net%2F&amp;token=d87f634bd0fc7f6cbc60c68912fa6e07" target="_blank" class="logo">
<img src="./themes/pmahomme/img/logo_right.png" id="imLogo" name="imLogo" alt="phpMyAdmin" border="0" />
</a>
       <h1>Welcome to <bdo dir="ltr" lang="en">phpMyAdmin</bdo>
</h1>
<noscript>
<div class="error">
<img src="themes/dot.gif" title="" alt="" class="icon ic_s_error" /> Javascript must be enabled past this point</div>
</noscript>
<div class=''>
<form method="get" action="index.php" class="disableAjax">
<input type="hidden" name="db" value="" />
<input type="hidden" name="table" value="" />
<input type="hidden" name="token" value="d87f634bd0fc7f6cbc60c68912fa6e07" />
<fieldset>
<legend lang="en" dir="ltr">Language</legend>
<select name="lang" class="autosubmit" lang="en" dir="ltr" id="sel-lang">
<option value="ar">&#1575;&#1604;&#1593;&#1585;&#1576;&#1610;&#1577; - Arabic</option>
<option value="bg">&#1041;&#1098;&#1083;&#1075;&#1072;&#1088;&#1089;&#1082;&#1080; - Bulgarian</option>
<option value="bn">বাংলা - Bangla</option>
<option value="ca">Catal&agrave; - Catalan</option>
<option value="cs">Čeština - Czech</option>
<option value="da">Dansk - Danish</option>
<option value="de">Deutsch - German</option>
<option value="el">&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;&#940; - Greek</option>
<option value="en" selected="selected">English</option>
<option value="en_GB">English (United Kingdom)</option>
<option value="es">Espa&ntilde;ol - Spanish</option>
<option value="et">Eesti - Estonian</option>
<option value="fi">Suomi - Finnish</option>
<option value="fr">Fran&ccedil;ais - French</option>
<option value="gl">Galego - Galician</option>
<option value="hi">&#2361;&#2367;&#2344;&#2381;&#2342;&#2368; - Hindi</option>
<option value="hr">Hrvatski - Croatian</option>
<option value="hu">Magyar - Hungarian</option>
<option value="id">Bahasa Indonesia - Indonesian</option>
<option value="it">Italiano - Italian</option>
<option value="ja">&#26085;&#26412;&#35486; - Japanese</option>
<option value="ko">&#54620;&#44397;&#50612; - Korean</option>
<option value="lt">Lietuvi&#371; - Lithuanian</option>
<option value="nb">Norsk - Norwegian</option>
<option value="nl">Nederlands - Dutch</option>
<option value="pl">Polski - Polish</option>
<option value="pt">Portugu&ecirc;s - Portuguese</option>
<option value="pt_BR">Portugu&ecirc;s - Brazilian portuguese</option>
<option value="ro">Rom&acirc;n&#259; - Romanian</option>
<option value="ru">&#1056;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081; - Russian</option>
<option value="si">&#3523;&#3538;&#3458;&#3524;&#3517; - Sinhala</option>
<option value="sk">Sloven&#269;ina - Slovak</option>
<option value="sl">Sloven&scaron;&#269;ina - Slovenian</option>
<option value="sr@latin">Srpski - Serbian latin</option>
<option value="sv">Svenska - Swedish</option>
<option value="th">&#3616;&#3634;&#3625;&#3634;&#3652;&#3607;&#3618; - Thai</option>
<option value="tr">T&uuml;rk&ccedil;e - Turkish</option>
<option value="uk">&#1059;&#1082;&#1088;&#1072;&#1111;&#1085;&#1089;&#1100;&#1082;&#1072; - Ukrainian</option>
<option value="uz">&#1038;&#1079;&#1073;&#1077;&#1082;&#1095;&#1072; - Uzbek-cyrillic</option>
<option value="uz@latin">O&lsquo;zbekcha - Uzbek-latin</option>
<option value="zh_CN">&#20013;&#25991; - Chinese simplified</option>
<option value="zh_TW">&#20013;&#25991; - Chinese traditional</option>
</select>
</fieldset>
</form>
</div>
    <br />
    <!-- Login form -->
    <form method="post" action="index.php" name="login_form" class="disableAjax login js-show">
        <fieldset>
        <legend>Log in<a href="./doc/html/index.html" target="documentation">
<img src="themes/dot.gif" title="Documentation" alt="Documentation" class="icon ic_b_help" />
</a>
</legend>
<div class="item">
                <label for="input_username">Username:</label>
                <input type="text" name="pma_username" id="input_username" value="root" size="24" class="textfield"/>
            </div>
            <div class="item">
                <label for="input_password">Password:</label>
                <input type="password" name="pma_password" id="input_password" value="" size="24" class="textfield" />
            </div>    <input type="hidden" name="server" value="1" />
</fieldset>
        <fieldset class="tblFooters">
            <input value="Go" type="submit" id="input_go" />
<input type="hidden" name="target" value="index.php" />
<input type="hidden" name="token" value="d87f634bd0fc7f6cbc60c68912fa6e07" />
</fieldset>
    </form>
</div>
</div>

<!-- Google Analytics -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-850650-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</body>
</html>