__d("LSThreadTitle.react", [
	"CometTextWithEntities.react",
	"FBLogger",
	"MWChatTextTransform",
	"mwCMIsAnyCMThread",
	"react",
	"react-compiler-runtime",
	"useLSComputedThreadName"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.thread, n = e.transforms;
		return r("useLSComputedThreadName")(t, n).threadNameElement;
	}
	function c(e) {
		var t = o("react-compiler-runtime").c(7), n = e.thread, a = e.transforms, i = a === void 0 ? o("MWChatTextTransform").textTransforms : a, l = n.threadName;
		if (l != null) {
			var c;
			return t[0] !== l || t[1] !== i ? (c = s.jsx(r("CometTextWithEntities.react"), {
				text: l,
				transforms: i
			}), t[0] = l, t[1] = i, t[2] = c) : c = t[2], c;
		}
		if (r("mwCMIsAnyCMThread")(n.threadType)) {
			r("FBLogger")("messenger_comet").mustfix("community message should not use computed thread title");
			var d;
			return t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = s.jsx(r("CometTextWithEntities.react"), { text: "" }), t[3] = d) : d = t[3], d;
		}
		var m;
		return t[4] !== n || t[5] !== i ? (m = s.jsx(u, {
			thread: n,
			transforms: i
		}), t[4] = n, t[5] = i, t[6] = m) : m = t[6], m;
	}
	l.default = c;
}), 98);
