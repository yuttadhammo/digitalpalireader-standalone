function eventSend(event,internal) {
		if(!event) return;
		if(event.ctrlKey || event.which == 2) return true;
		if(event.shiftKey) return 'shift';
		if(event.which == 1 && internal) return 'internal';
		if (event.which == 1) return false;
		if(event.keyCode) return false;
		return 'right';
}
