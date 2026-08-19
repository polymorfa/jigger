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
	"react-compiler-runtime",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = function(t) {
		o("WAWebExternalLink.react").openExternalLink(t);
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(19), n = e.displayAuthor, a = e.msg, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = [
			o("WAWebMsgGetters").getIsSentByMe,
			o("WAWebMsgGetters").getIsGroupMsg,
			o("WAWebFrontendMsgGetters").getSenderObj,
			o("WAWebMsgGetters").getSubtype
		], t[0] = i) : i = t[0];
		var l = o("useWAWebMsgValues").useMsgValues(a.id, i), d = l[0], m = l[3], p;
		t[1] !== d || t[2] !== m ? (p = o("WAWebPlaceholder").getPlaceholderDetails(m ? m.toString() : "", d), t[1] = d, t[2] = m, t[3] = p) : p = t[3];
		var _ = p, f = _.externalLink, g = _.placeholderIcon, h = _.placeholderMsg, y;
		t[4] !== f ? (y = f != null && u.jsx(r("WDSTextualLink.react"), {
			onClick: function() {
				c(f);
			},
			children: s._(
				/*BTDS*/
				""
			)
		}), t[4] = f, t[5] = y) : y = t[5];
		var C = y, b;
		t[6] !== a ? (b = o("WAWebStateUtils").unproxy(a), t[6] = a, t[7] = b) : b = t[7];
		var v;
		t[8] !== a ? (v = a.unsafe(), t[8] = a, t[9] = v) : v = t[9];
		var S;
		t[10] !== C || t[11] !== g || t[12] !== h || t[13] !== v ? (S = u.jsxs(r("WAWebMessagePlaceholder.react"), {
			Icon: g,
			msg: v,
			children: [
				h,
				" ",
				C
			]
		}), t[10] = C, t[11] = g, t[12] = h, t[13] = v, t[14] = S) : S = t[14];
		var R;
		return t[15] !== n || t[16] !== b || t[17] !== S ? (R = u.jsx(r("WAWebMessageTextBubble.react"), {
			msg: b,
			displayAuthor: n,
			children: S
		}), t[15] = n, t[16] = b, t[17] = S, t[18] = R) : R = t[18], R;
	}
	l.default = d;
}), 226);
