__d("WAWebGroupMsgInfoFlow.react", [
	"$InternalEnum",
	"WAWebFrontendMsgGetters",
	"WAWebGroupMsgInfoDrawer.react",
	"WAWebProductDetailsFlowLoadable",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebFlow"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = n("$InternalEnum").Mirrored(["GroupMessageInfo", "ProductDetails"]);
	function d(e) {
		var t = o("react-compiler-runtime").c(20), n = e.msg, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = { transitions: o("useWAWebFlow").FlowTransitions.DrawerRight }, t[0] = a) : a = t[0];
		var i = o("useWAWebFlow").useFlow(c.GroupMessageInfo, a), l = i[0], d = i[1], m = u(), p = m[0], _ = m[1];
		if (d.step == null) return null;
		var f;
		e: switch (d.step) {
			case c.GroupMessageInfo: {
				var g;
				t[1] !== d ? (g = function(t) {
					_(t), d.push(c.ProductDetails);
				}, t[1] = d, t[2] = g) : g = t[2];
				var h = g, y;
				t[3] !== h || t[4] !== n ? (y = s.jsx(r("WAWebGroupMsgInfoDrawer.react"), {
					msg: n,
					onProductClick: h
				}), t[3] = h, t[4] = n, t[5] = y) : y = t[5], f = y;
				break e;
			}
			case c.ProductDetails: {
				var C;
				t[6] !== n ? (C = o("WAWebFrontendMsgGetters").getChat(n), t[6] = n, t[7] = C) : C = t[7];
				var b;
				t[8] !== p ? (b = r("nullthrows")(p), t[8] = p, t[9] = b) : b = t[9];
				var v;
				t[10] !== d ? (v = function() {
					return d.pop();
				}, t[10] = d, t[11] = v) : v = t[11];
				var S;
				t[12] !== C || t[13] !== b || t[14] !== v ? (S = s.jsx(o("WAWebProductDetailsFlowLoadable").ProductDetailsFlowLoadable, {
					refreshCarousel: !0,
					chat: C,
					product: b,
					onEnd: v
				}), t[12] = C, t[13] = b, t[14] = v, t[15] = S) : S = t[15], f = S;
			}
		}
		var R;
		return t[16] !== l || t[17] !== f || t[18] !== d ? (R = s.jsx(l, {
			flow: d,
			children: f
		}), t[16] = l, t[17] = f, t[18] = d, t[19] = R) : R = t[19], R;
	}
	l.default = d;
}), 98);
