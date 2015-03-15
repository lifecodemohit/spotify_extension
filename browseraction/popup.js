window.onload = function() {
	for(var i=1;i<=10;i++)
	{
		document.getElementById("url"+i.toString()).value=localStorage.getItem("url"+i.toString());
	}
	document.getElementById("button").onclick = function() {
		chrome.extension.sendMessage({
	        type: [document.getElementById("url1").value,document.getElementById("url2").value,document.getElementById("url3").value,document.getElementById("url4").value,document.getElementById("url5").value,
	        document.getElementById("url6").value,document.getElementById("url7").value,document.getElementById("url8").value,document.getElementById("url9").value,document.getElementById("url10").value],
	    });
	}
}