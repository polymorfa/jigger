__d("WAWebPaymentType.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebFormatPaymentMsg",
	"WAWebName.react",
	"WAWebWidFormat",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(13), n = e.isQuoted, r = e.msgKey, a = e.receiverJid, i = e.subtype, l;
		if (i === "invite" && r) {
			var c;
			t[0] !== r ? (c = o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(r), t[0] = r, t[1] = c) : c = t[1], l = c;
		} else if (i === "send") {
			var m;
			t[2] !== a ? (m = d(a), t[2] = a, t[3] = m) : m = t[3];
			var p = m;
			if (p != null) {
				var _;
				t[4] !== p ? (_ = s._(
					/*BTDS*/
					"",
					[s._param("receiverName", p)]
				), t[4] = p, t[5] = _) : _ = t[5], l = _;
			}
		} else if (i === "request") {
			var f;
			t[6] !== a ? (f = d(a), t[6] = a, t[7] = f) : f = t[7];
			var g = f;
			if (g != null) {
				var h;
				t[8] !== g ? (h = s._(
					/*BTDS*/
					"",
					[s._param("receiverName", g)]
				), t[8] = g, t[9] = h) : h = t[9], l = h;
			}
		}
		var y;
		return t[10] !== l || t[11] !== n ? (y = l ? u.jsx("span", babelHelpers.extends({}, {
			0: { className: "x14ug900" },
			1: { className: "x14ug900 x13a8xbf" }
		}[(n === !0) << 0], { children: l })) : null, t[10] = l, t[11] = n, t[12] = y) : y = t[12], y;
	}
	function d(e) {
		if (!e) return null;
		var t = o("WAWebContactCollection").ContactCollection.get(e), n;
		return t && o("WAWebContactGetters").getIsMe(t) ? n = s._(
			/*BTDS*/
			""
		) : t ? n = u.jsx(o("WAWebName.react").Name, {
			contact: t,
			showNotifyName: !0
		}) : n = o("WAWebWidFormat").widToFormattedUser(e), u.jsx("span", {
			className: "xk50ysn",
			children: n
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 226);
