__d("WAWebMessageCiphertext.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFrontendMsgGetters",
	"WAWebMessagePlaceholder.react",
	"WAWebMessageTextBubble.react",
	"WAWebMsgGetters",
	"WAWebPlaceholder",
	"WAWebStateUtils",
	"WDSTextualLink.react",
	"react",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = function(t) {
		o("WAWebExternalLink.react").openExternalLink(t);
	};
	function d(e) {
		var t = e.displayAuthor, n = e.msg, a = o("useWAWebMsgValues").useMsgValues(n.id, [
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getIsGroupMsg,
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getSubtype
		]), i = a[0], l = a[1], d = a[2], m = a[3], p = o("WAWebPlaceholder").getPlaceholderDetails(m ? m.toString() : "", i), _ = p.externalLink, f = p.placeholderIcon, g = p.placeholderMsg, h = _ != null && u.jsx(r("WDSTextualLink.react"), {
			onClick: function() {
				c(_);
			},
			children: s._(
				/*BTDS*/
				""
			)
		});
		return u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: o("WAWebStateUtils").unproxy(n),
			displayAuthor: t,
			children: u.jsxs(r("WAWebMessagePlaceholder.react"), {
				Icon: f,
				msg: n.unsafe(),
				children: [
					g,
					" ",
					h
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
