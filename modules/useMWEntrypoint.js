__d("useMWEntrypoint", ["MWLSThreadDisplayContext"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e() {
		var e = o("MWLSThreadDisplayContext").useMWLSThreadDisplayContext(), t = "inbox";
		switch (e) {
			case "ChatTab":
				t = "popup_chat_box";
				break;
			case "RoomsSideChat":
				t = "rooms_lobby";
				break;
		}
		return t;
	}
	l.default = e;
}), 98);
