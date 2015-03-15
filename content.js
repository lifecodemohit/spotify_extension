
window.onload = function() {	
	chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
		for(var i=1;i<=10;i++)
		{
			if(message.type[i-1].length>0)
			{
				document.getElementById("frame"+i.toString()).src=message.type[i-1];
				localStorage.setItem("url"+i.toString(),message.type[i-1]);
			}
		}

	});
	var list=["https://embed.spotify.com/?uri=spotify%3Atrack%3A7aXuop4Qambx5Oi3ynsKQr","https://embed.spotify.com/?uri=spotify%3Atrack%3A4th1RQAelzqgY7wL53UGQt"];
	for(var i=1;i<=10;i++)
	{
		if(localStorage.getItem("url"+i.toString())!=null)
			document.getElementById("frame"+i.toString()).src=localStorage.getItem("url"+i.toString());
		else
			document.getElementById("frame"+i.toString()).src=list[i%2];
	}
}