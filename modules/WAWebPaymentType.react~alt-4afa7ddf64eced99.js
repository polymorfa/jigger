__d("WAWebPaymentType.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebFormatPaymentMsg",
	"WAWebName.react",
	"WAWebWidFormat",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = e.isQuoted, n = e.msgKey, r = e.receiverJid, a = e.subtype, i;
		if (a === "invite" && n) i = o("WAWebFormatPaymentMsg").formatPaymentInviteMessageText(n);
		else if (a === "send") {
			var l = d(r);
			l != null && (i = s._(
				/*BTDS*/
				"",
				[s._param("receiverName", l)]
			));
		} else if (a === "request") {
			var c = d(r);
			c != null && (i = s._(
				/*BTDS*/
				"",
				[s._param("receiverName", c)]
			));
		}
		return i ? u.jsx("span", babelHelpers.extends({}, {
			0: { className: "x14ug900" },
			1: { className: "x14ug900 x13a8xbf" }
		}[(t === !0) << 0], { children: i })) : null;
	}
	c.displayName = c.name + " [from " + i.id + "]";
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
