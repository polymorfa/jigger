__d("WAWebBroadcastMeta.react", [
	"WAWebMessageMeta.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastIsDelivering"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(12), n = e.displayType, a = e.isRTL, i = e.msg, l;
		t[0] !== i ? (l = i.unsafe(), t[0] = i, t[1] = l) : l = t[1];
		var u = r("useWAWebBizBroadcastIsDelivering")(l), c;
		t[2] !== u || t[3] !== a ? (c = {
			0: { className: "x18mqm2i xhsvlbd x14z9mp xz62fqu x1wbi8v6 x1n2onr6 x1n327nk" },
			2: { className: "xhsvlbd x14z9mp xz62fqu x1wbi8v6 x1n2onr6 x1n327nk xtrg13t" },
			1: { className: "x1n2onr6 x1n327nk x78zum5 xyen2ro x13a6bvl xfl633f x14z9mp xz62fqu x1lziwak xh8yej3" },
			3: { className: "x1n2onr6 x1n327nk x78zum5 xyen2ro x13a6bvl xfl633f x14z9mp xz62fqu x1lziwak xh8yej3" }
		}[!!a << 1 | !!u << 0], t[2] = u, t[3] = a, t[4] = c) : c = t[4];
		var d;
		t[5] !== n || t[6] !== u || t[7] !== i ? (d = s.jsx(o("WAWebMessageMeta.react").Meta, {
			displayType: n,
			isDelivering: u,
			msg: i
		}), t[5] = n, t[6] = u, t[7] = i, t[8] = d) : d = t[8];
		var m;
		return t[9] !== c || t[10] !== d ? (m = s.jsx("div", babelHelpers.extends({}, c, { children: d })), t[9] = c, t[10] = d, t[11] = m) : m = t[11], m;
	}
	l.default = u;
}), 98);
