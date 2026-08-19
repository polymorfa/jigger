__d("MWV2ChatErrorBubble.react", [
	"fbt",
	"MWV2TombstonedMessage.react",
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		vr: {
			height: "x36qwtl",
			width: "xh8yej3",
			$$css: !0
		},
		withRepliedMessage: {
			zIndex: "x1vjfegm",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(9), n = e.isOutgoing, a = e.isReply, i = a && c.withRepliedMessage, l;
		t[0] !== a ? (l = a ? null : u.jsx(o("react-strict-dom").html.div, { style: c.vr }), t[0] = a, t[1] = l) : l = t[1];
		var d;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (d = s._(
			/*BTDS*/
			""
		), t[2] = d) : d = t[2];
		var m;
		t[3] !== n ? (m = u.jsxs(r("MWV2TombstonedMessage.react"), {
			isOutgoing: n,
			children: [" ", d]
		}), t[3] = n, t[4] = m) : m = t[4];
		var p;
		return t[5] !== i || t[6] !== l || t[7] !== m ? (p = u.jsxs(o("react-strict-dom").html.div, {
			style: i,
			children: [l, m]
		}), t[5] = i, t[6] = l, t[7] = m, t[8] = p) : p = t[8], p;
	}
	l.default = d;
}), 226);
