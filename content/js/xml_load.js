function loadXMLFile(file,setNo) {
	var setName;
	if(typeof(setNo) == 'undefined')
		setNo = 0;
		
	switch(setNo) {
		case 0:
			var setPack = 'myanmar';
			var setName = 'Myanmar';
			break;
		case 1:
			var setPack = 'thai';
			var setName = 'Thai';
			break;
	}
	try {
		var bookload = 'content/tipitaka/'+setPack+'/' + file + '.xml';
		var xmlhttp = new window.XMLHttpRequest();
		xmlhttp.open("GET", bookload, false);
		xmlhttp.send(null);
		var xmlDoc = xmlhttp.responseXML.documentElement;

		return xmlDoc;
	}
	catch(ex) {
		alert('XML file '+file+'.xml not found.  Do you have the latest ' + setName + ' Tipitaka extension installed?');
		return null;
	}
}

