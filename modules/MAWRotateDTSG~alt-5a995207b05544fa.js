__d("MAWRotateDTSG", [
	"CSRFGuard",
	"DTSG",
	"MWFBLogger",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = o("MWFBLogger").MWLogger().tags(["RotateDTSG"]), c = async function() {
		var t, n;
		u.DEBUG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Getting new DTSG token"])));
		var r = new Request("/ajax/dtsg/?__a=true", {
			credentials: "include",
			method: "GET"
		}), a = await self.fetch(r);
		if (a.status !== 200) throw u.mustfixThrow("Unable to get new DTSG token: " + a.status);
		var i = await a.text(), l = o("CSRFGuard").clean(i), s = JSON.parse(l), c = s == null || (t = s.payload) == null ? void 0 : t.token, d = s == null || (n = s.payload) == null ? void 0 : n.valid_for;
		if (c == null || d == null) throw u.mustfixThrow("DTSG response is not valid: " + l + "'");
		return {
			token: c,
			validFor: d
		};
	}, d = null;
	async function m() {
		self.clearTimeout(d);
		try {
			var e = await c(), t = e.token, n = e.validFor;
			return d = self.setTimeout(m, n / 2 * 1e3), o("DTSG").setToken(t), !0;
		} catch (e) {
			return u.catching(r("getErrorSafe")(e)).MUSTFIX(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Error rotating DTSG"]))), d = self.setTimeout(m, 600 * 1e3), !1;
		}
	}
	l.getNewDTSG = c, l.tryRotateDTSG = m;
}), 98);
