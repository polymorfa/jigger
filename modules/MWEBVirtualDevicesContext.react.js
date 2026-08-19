__d("MWEBVirtualDevicesContext.react", ["FBLogger", "react"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e.useContext, c = s.createContext(null);
	function d() {
		var e = u(c);
		if (e == null) throw r("FBLogger")("messenger_web_product").mustfixThrow("useEBVirtualDevices must be used inside MWEBVirtualDevicesContext");
		return e;
	}
	l.MWEBVirtualDevicesContext = c, l.useMWEBVirtualDevices = d;
}), 98);
