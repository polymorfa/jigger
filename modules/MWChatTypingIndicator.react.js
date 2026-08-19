__d("MWChatTypingIndicator.react", [
	"MessengerWebUXLogger",
	"react",
	"react-compiler-runtime",
	"react-strict-dom"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = "x1h06q2e-B", c = "x1yitzd3-B", d = {
		dot: {
			alignItems: "x6s0dn4",
			animationDuration: "xmg6eyc",
			animationIterationCount: "xa4qsjk",
			animationName: "xwnhzmj",
			animationTimingFunction: "x4hg4is",
			backgroundColor: "x1iuwi03",
			borderStartStartRadius: "xr9e8f9",
			borderStartEndRadius: "x1e4oeot",
			borderEndEndRadius: "x1ui04y5",
			borderEndStartRadius: "x6en5u8",
			display: "x78zum5",
			height: "xqu0tyb",
			marginInlineStart: "xm2jcoa",
			marginInlineEnd: "x1mpyi22",
			marginLeft: null,
			marginRight: null,
			width: "x51ohtg",
			$$css: !0
		},
		dot1: {
			animationDelay: "x1t83zlg",
			$$css: !0
		},
		dot1Opacity: {
			animationDelay: "x1uzojwf",
			$$css: !0
		},
		dot2: {
			animationDelay: "x1x1c4bx",
			$$css: !0
		},
		dot2Opacity: {
			animationDelay: "xfjzax6",
			$$css: !0
		},
		dot3: {
			animationDelay: "x1xwhvez",
			$$css: !0
		},
		dot3Opacity: {
			animationDelay: "x1la68h3",
			$$css: !0
		},
		dotOpacity: {
			animationDuration: "xmg6eyc",
			animationIterationCount: "xa4qsjk",
			animationName: "x1bcwpiy",
			animationTimingFunction: "x4hg4is",
			opacity: "x1hc1fzr",
			$$css: !0
		},
		root: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			height: "x1ta3ar0",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(10), n = e.threadType, a;
		t[0] !== n ? (a = {
			eventName: "show_typing_indicators",
			threadType: n
		}, t[0] = n, t[1] = a) : a = t[1];
		var i = r("MessengerWebUXLogger").useImpressionLoggerRef(a), l;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (l = [d.dotOpacity, d.dot1Opacity], t[2] = l) : l = t[2];
		var u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = s.jsx(o("react-strict-dom").html.div, {
			style: l,
			children: s.jsx(o("react-strict-dom").html.div, { style: [d.dot, d.dot1] })
		}), t[3] = u) : u = t[3];
		var c;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (c = [d.dotOpacity, d.dot2Opacity], t[4] = c) : c = t[4];
		var m;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (m = s.jsx(o("react-strict-dom").html.div, {
			style: c,
			children: s.jsx(o("react-strict-dom").html.div, { style: [d.dot, d.dot2] })
		}), t[5] = m) : m = t[5];
		var p;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (p = [d.dotOpacity, d.dot3Opacity], t[6] = p) : p = t[6];
		var _;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = s.jsx(o("react-strict-dom").html.div, {
			style: p,
			children: s.jsx(o("react-strict-dom").html.div, { style: [d.dot, d.dot3] })
		}), t[7] = _) : _ = t[7];
		var f;
		return t[8] !== i ? (f = s.jsxs(o("react-strict-dom").html.div, {
			ref: i,
			style: d.root,
			children: [
				u,
				m,
				_
			]
		}), t[8] = i, t[9] = f) : f = t[9], f;
	}
	l.default = m;
}), 98);
