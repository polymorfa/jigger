__d("WAWebBroadcastMeta.react", [
	"WAWebMessageMeta.react",
	"react",
	"useWAWebBizBroadcastIsDelivering"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.displayType, n = e.isRTL, a = e.msg, i = r("useWAWebBizBroadcastIsDelivering")(a.unsafe());
		return s.jsx("div", babelHelpers.extends({}, {
			0: { className: "x18mqm2i xhsvlbd x14z9mp xz62fqu x1wbi8v6 x1n2onr6 x1n327nk" },
			2: { className: "xhsvlbd x14z9mp xz62fqu x1wbi8v6 x1n2onr6 x1n327nk xtrg13t" },
			1: { className: "x1n2onr6 x1n327nk x78zum5 xyen2ro x13a6bvl xfl633f x14z9mp xz62fqu x1lziwak xh8yej3" },
			3: { className: "x1n2onr6 x1n327nk x78zum5 xyen2ro x13a6bvl xfl633f x14z9mp xz62fqu x1lziwak xh8yej3" }
		}[!!n << 1 | !!i << 0], { children: s.jsx(o("WAWebMessageMeta.react").Meta, {
			displayType: t,
			isDelivering: i,
			msg: a
		}) }));
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
