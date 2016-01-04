
/*** START DATE (YEAR) SHOW ***/

	var datDate = new Date(); //Gets current date
	var datYear = datDate.getFullYear();  //Gets YYYY from current date

/*** END DATE (YEAR) SHOW ***/

/*** START RESPONSIVE DESIGN ***/

	// Listeners for Window load and resizing
	addEvent(window, 'load', dynamicLayout);
	addEvent(window, 'resize', dynamicLayout);
	
	// Attaches the Listener Events to the Objects
	function addEvent( obj, type, fn ) { 
	
		if (obj.addEventListener) { 
			obj.addEventListener( type, fn, false );
		} else if (obj.attachEvent) {
			obj["e"+type+fn] = fn; 
			obj[type+fn] = function() { obj["e"+type+fn]( window.event ); } 
			obj.attachEvent( "on"+type, obj[type+fn] ); 
	   }
	   
	} 
	
	// COMMENT
	function dynamicLayout(){
		
		var browserWidth = getBrowserWidth();
		
		//Load Thin CSS Rules
		if (browserWidth < 750) {
			changeLayout("mobile");
		}
		//Load Wide CSS Rules
		if ((browserWidth >= 750) && (browserWidth <= 950)) {
			changeLayout("default");
		}
		//Load Wider CSS Rules
		if (browserWidth > 950) {
			changeLayout("default");
		}
		
	}
	
	// Returns the Width depending on what Browser used
	function getBrowserWidth() {
		
		if (window.innerWidth) {
			// FF & IE>6?
			return window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth != 0) {
			// IE6?
			return document.documentElement.clientWidth;
		} else if (document.body) {
			alert("other?");
			return document.body.clientWidth;
		}
		return 0; //default
	
	}
	
	// Loops through LINK tags in head and disables all but the one chosen in dynamicLayout() - For CSS files
	function changeLayout(description) {
		
		var i, a;
		
		for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
			if (a.getAttribute("title") == description) {
				a.disabled = false;
			} else if (a.getAttribute("title") != "default") {
				a.disabled = true;
			}
		}
		
	}

/*** END RESPONSIVE DESIGN ***/
