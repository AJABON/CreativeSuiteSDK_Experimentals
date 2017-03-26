/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, Folder*/


function testFunc() {
try {
	var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
	} catch (e) {alert(e);}
	var eventObj = new CSXSEvent(); 
	eventObj.type = "getCallback";
	eventObj.data = "no selection";
	if (app.activeDocument.selection.length>0){
		var bnds = app.activeDocument.selection[0].geometricBounds;
		eventObj.data = "x1:"+ bnds[0] + "\ny1:" + bnds[1] + "\nx2:"+ bnds[2] + "\ny2:" + bnds[3];
		}
	eventObj.dispatch();
	xLib.unload();
	return true;
	}
testFunc();
