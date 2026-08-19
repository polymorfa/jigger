__d("MWThreadErrorBoundary.react", [
	"CometErrorBoundary.react",
	"FBLogger",
	"MWFailChatTabOpenQPLEvent",
	"MWInboxErrorState.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = { errorBoundary: {
		alignItems: "x6s0dn4",
		backgroundColor: "x2bj2ny",
		display: "x78zum5",
		height: "x5yr21d",
		justifyContent: "xl56j7k",
		width: "xh8yej3",
		$$css: !0
	} };
	function c(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, a = e.message, i = e.threadKey, l;
		t[0] !== a || t[1] !== i ? (l = function(t) {
			r("MWFailChatTabOpenQPLEvent")(i, t.toString()), r("FBLogger")("messenger_web_entrypoints").catching(t).mustfix(a + ": %s", t.toString());
		}, t[0] = a, t[1] = i, t[2] = l) : l = t[2];
		var u;
		return t[3] !== n || t[4] !== l ? (u = s.jsx(r("CometErrorBoundary.react"), {
			fallback: d,
			onError: l,
			children: n
		}), t[3] = n, t[4] = l, t[5] = u) : u = t[5], u;
	}
	function d(e) {
		return s.jsx(r("MWInboxErrorState.react"), {
			error: e,
			plural: !1,
			source: "thread_error_boundary",
			xstyle: u.errorBoundary
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = c;
}), 98);
