__d("WAWebAfterReadingExpiryFooter.react", [
	"fbt",
	"WATimeUtils",
	"WAWebAfterReadUtils",
	"WAWebClockDurationFormatters",
	"WAWebDrawerSection.react",
	"WAWebMsgGetters",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebInterval",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = 1e3, m = { contactPlacement: {
		paddingBottom: "x18d9i69",
		marginBottom: "x1wsgfga",
		$$css: !0
	} };
	function p(e) {
		var t = o("react-compiler-runtime").c(13), n = e.msg, a = e.placement, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			o("WAWebMsgGetters").getAfterReadDuration,
			o("WAWebMsgGetters").getEphemeralExpirationTimestamp,
			o("WAWebMsgGetters").getIsKept
		], t[0] = i) : i = t[0];
		var l = o("useWAWebMsgValues").useMsgValues(n.id, i), p = l[0], f = l[1], g = l[2], h;
		t[1] !== p || t[2] !== f || t[3] !== g ? (h = p != null && o("WAWebAfterReadUtils").isAfterReadDuration(p) && !g && f != null && o("WAWebAfterReadUtils").isAfterReadEnabled(), t[1] = p, t[2] = f, t[3] = g, t[4] = h) : h = t[4];
		var y = h, C = c(0), b = C[1], v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			return b(_);
		}, t[5] = v) : v = t[5];
		var S;
		if (t[6] !== y ? (S = { immediate: y }, t[6] = y, t[7] = S) : S = t[7], r("useWAWebInterval")(v, d, S), !y || f == null) return null;
		var R = Math.max(0, f - o("WATimeUtils").unixTime()), L = a === "contact" ? m.contactPlacement : void 0, E;
		t[8] !== R ? (E = u.jsx("div", {
			"data-testid": "after_reading_expiry_footer",
			children: u.jsx(r("WDSText.react"), {
				colorName: "contentDeemphasized",
				type: "Body3",
				children: s._(
					/*BTDS*/
					"",
					[s._param("time", o("WAWebClockDurationFormatters").afterReadingExpiryTimeStr(R))]
				)
			})
		}), t[8] = R, t[9] = E) : E = t[9];
		var k;
		return t[10] !== L || t[11] !== E ? (k = u.jsx(r("WAWebDrawerSection.react"), {
			theme: "padding",
			xstyle: L,
			children: E
		}), t[10] = L, t[11] = E, t[12] = k) : k = t[12], k;
	}
	function _(e) {
		return e + 1;
	}
	l.default = p;
}), 226);
