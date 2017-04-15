
// default prefs

var DPR_prefsD = [];

DPR_prefsD['DictH'] = 250;

DPR_prefsD['coltext'] = '#111';
DPR_prefsD['colsel'] = '#550';

DPR_prefsD['coldppn'] = '#0B0';
DPR_prefsD['colped'] = '#C40';
DPR_prefsD['colcpd'] = '#44D';

DPR_prefsD['colfont'] = 'Verdana';
DPR_prefsD['colsize'] = '16';

DPR_prefsD['bktype'] = 'colimg';
DPR_prefsD['colbk'] = '#FFD';
DPR_prefsD['imgbk'] = 'url(chrome://digitalpalireader/content/images/background.png)';

DPR_prefsD['bkcptype'] = 'col';
DPR_prefsD['colbkcp'] = '#F4F4F4';
DPR_prefsD['imgbkcp'] = '-moz-linear-gradient(left,#DDC,#FFF,#DDC,#DDC)';

DPR_prefsD['colInput'] = '#FFF';
DPR_prefsD['colButton'] = 'RGBa(200,200,200,0.1)';
DPR_prefsD['imgButton'] = '-moz-linear-gradient(left,#DDC,#FFF,#DDC,#DDC)';
DPR_prefsD['colButtonSel'] = '#FFF';
DPR_prefsD['colbk1'] = 'yellow';
DPR_prefsD['colbk2'] = 'aqua';
DPR_prefsD['colbk3'] = 'green';

DPR_prefsD['colsearch0'] = 'yellow';
DPR_prefsD['colsearch1'] = 'blue';
DPR_prefsD['colsearch2'] = 'green';

DPR_prefsD['green'] = '#00B900';
DPR_prefsD['blue'] = '#5353D5';
DPR_prefsD['brown'] = '#000000';
DPR_prefsD['grey'] = 'grey';
DPR_prefsD['red'] = 'red';

DPR_prefsD['blueh'] = 'powderblue';

DPR_prefsD['ctrans'] = false;
DPR_prefsD['catioff'] = false;
DPR_prefsD['catiloc'] = '<none>';
DPR_prefsD['autodict'] = false;
DPR_prefsD['bkgimg'] = true;

DPR_prefsD['buddhist_texts'] = false;
DPR_prefsD['btloc'] = '<none>';


DPR_prefsD['allContext'] = true;
DPR_prefsD['contextSelected'] = false;
DPR_prefsD['noContext'] = false;

DPR_prefsD['translits'] = 0;

DPR_prefsD['setRows'] = 7;

DPR_prefsD['showPages'] = false;
DPR_prefsD['showPagesFull'] = false;
DPR_prefsD['showVariants'] = true;
DPR_prefsD['showVariantsInline'] = true;
DPR_prefsD['showPermalinks'] = true;
DPR_prefsD['showNames'] = true;
DPR_prefsD['showPedLinks'] = true;

DPR_prefsD['nigahita'] = false;

DPR_prefsD['copyWord'] = false;

DPR_prefsD['altlimit'] = 20;

var DPR_prefs = [];

function setDefPrefs() {
	var i;
	for (i in DPR_prefsD) {
		DPR_prefs[i] = DPR_prefsD[i];
	}
}
setDefPrefs();
