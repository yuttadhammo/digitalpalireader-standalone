var sidebarJS = {
	changeSet() {
		var nik = $('#nav-set').val();
		if (G_hier == 't' && (nik == 'k' || nik == 'x' || nik == 'g' || nik == 'b')) { 
			alert('Ṭīkā not available for '+G_nikLongName[nik]+'.');
			$('#nav-set').val(oldnikaya);
			return; 
		} 
		if (G_hier == 'a' && nik == 'g') {
			alert('Atthakatha not available for Gram.');
			$('#nav-set').val(oldnikaya);
			return;
		}
		if (G_hier == 'a' && nik == 'b') {
			alert('Atthakatha not available for Abhidh-s.');
			$('#nav-set').val(oldnikaya);
			return;
		}
		oldnikaya = nik;
		this.setBookList(nik);
	},

	setBookList(nik,book){
		var titles;
		if (nikvoladi[nik]) titles = nikvoladi[nik];
		else titles = nikvoladi[nik+G_hier];
		var bookNode = $('#nav-book');
		bookNode.empty();
		for (i = 0; i < titles.length; i++) {
			var title;
			var val;
			if(nik == 'k' || nik == 'y') {
				title = G_kynames[nik][titles[i]];
				val = titles[i]+1;
			}
			else {
				title = titles[i];
				val = i+1;
			}
			bookNode.append($("<option />").val(val).text(translit(title)));
		}
		bookNode.val(book?book:1);
		this.updateSubnav(0);
	},

	updateSubnav:function (depth,event){ // depth: 4=section, 3=sutta..., 2=vagga..., 1=volume..., 0=all

		document.activeElement.blur();
		
		var nikaya = $('#nav-set').val();
		var book = $('#nav-book').val();
		var nikbookhier = nikaya + book + G_hier;
		var xmlDoc = loadXMLFile(nikbookhier,0);

		var meta = (depth > 0  ? $("#nav-meta option:selected").index() : 0);
		var volume = (depth > 1 ? $("#nav-volume option:selected").index() : 0);
		var vagga = (depth > 2 ? $("#nav-vagga option:selected").index() : 0);
		var sutta = (depth > 3 ? $("#nav-sutta option:selected").index() : 0);

		var nik = nikaya;

		var xml,axml,lista,list,name,namea;
		
		axml = xmlDoc.getElementsByTagName("ha");
		namea = axml[0].getElementsByTagName("han");
		if (namea[0].childNodes[0] && namea[0].textContent.length > 1) name = namea[0].textContent.replace(/\{.*\}/,'').replace(/^  */, '').replace(/  *$/,''); 
		else name = this.unnamed;
		var outname = translit(toUni(name));
		$('#nav-title').val(outname);
			
		var u = xmlDoc.getElementsByTagName("h0");
		var v = u[meta].getElementsByTagName("h1");
		var w = v[volume].getElementsByTagName("h2");
		var x = w[vagga].getElementsByTagName("h3");
		var y = x[sutta].getElementsByTagName("h4");

		var listNode;

		switch(true) {
			case (depth == 0): // remake meta list
				lista = this.makeTitleSelect(u,'h0n');

				listNode = $('#nav-meta');
				listNode.empty();
				
				if (lista.length == 1 && lista[0] == this.unnamed ) {
					listNode.parent().hide();
					listNode.append($("<option />").val(0).text(this.unnamed));
				}
				else {
					for(idx in lista){
						listNode.append($("<option />").val(idx).text(lista[idx]));
					}	
					listNode.parent().show();
				}
				listNode.val(0);
			case  (depth < 2): // remake volume list
				lista = this.makeTitleSelect(v,'h1n');

				listNode = $('#nav-volume');
				listNode.empty();
				
				if (lista.length == 1 && lista[0] == this.unnamed ) {
					listNode.parent().hide();
					listNode.append($("<option />").val(0).text(this.unnamed));
				}
				else {
					for(idx in lista){
						listNode.append($("<option />").val(idx).text(lista[idx]));
					}	
					listNode.parent().show();
				}
				listNode.val(0);

			case  (depth < 3): // remake vaggalist
				lista = this.makeTitleSelect(w,'h2n');
				listNode = $('#nav-vagga');
				listNode.empty();
				
				if (lista.length == 1 && lista[0] == this.unnamed ) {
					listNode.parent().hide();
					listNode.append($("<option />").val(0).text(this.unnamed));
				}
				else {
					for(idx in lista){
						listNode.append($("<option />").val(idx).text(lista[idx]));
					}	
					listNode.parent().show();
				}
				listNode.val(0);

			case  (depth < 4): // remake sutta list on depth = 0, 2, or 3
				lista = this.makeTitleSelect(x,'h3n');

				listNode = $('#nav-sutta');
				listNode.empty();
				
				if (lista.length == 1 && lista[0] == this.unnamed ) {
					listNode.parent().hide();
					listNode.append($("<option />").val(0).text(this.unnamed));
				}
				else {
					for(idx in lista){
						listNode.append($("<option />").val(idx).text(lista[idx]));
					}	
					listNode.parent().show();
				}
				listNode.val(0);
			default: // remake section list

				lista = this.makeTitleSelect(y,'h4n');

				listNode = $('#nav-section');
				listNode.empty();
				
				if (lista.length == 1 && lista[0] == this.unnamed ) {
					listNode.parent().hide();
					listNode.append($("<option />").val(0).text(this.unnamed));
				}
				else {
					for(idx in lista){
						listNode.append($("<option />").val(idx).text(lista[idx]));
					}	
					listNode.parent().show();
				}
				listNode.val(0);
			break;
		}

		$('#nav-section-button').click(function(){
			var aplace = [nikaya,$('#nav-book').index(),$('#nav-meta').index(),$('#nav-volume').index(),$('#nav-vagga').index(),$('#nav-sutta').index(),$('#nav-section').index(),G_hier];
			loadXMLSection("","",aplace);
		});

	},
	
	makeTitleSelect:function(xml,tag) { // output menupopup tag with titles in menuitems
		var name, namea;
		var outlist = [];
		for (var a = 0; a < xml.length; a++)
		{
			name = xml[a].getElementsByTagName(tag);
			if (name[0].childNodes[0] && name[0].textContent.replace(/ /g,'').length > 0) namea = name[0].textContent.replace(/\{.*\}/,'').replace(/^  */, '').replace(/  *$/,'');
			else {
				namea = this.unnamed;
				outlist.push(namea);
				continue;
			}
			
			namea = translit(toUni(namea));

			outlist.push(namea);
		}
		return outlist;
	},
	unnamed:'[unnamed]',
}
