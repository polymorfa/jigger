__d("WAWebMBSInboxOrderNotice.react", [
	"fbt",
	"WAWebABProps",
	"WAWebMsgGetters",
	"WAWebOrderStatusButton",
	"WAWebWrapperSystemBubble.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { spacing: {
		marginTop: "x1de0gy",
		$$css: !0
	} };
	function d(e) {
		var t, n = o("react-compiler-runtime").c(1), a = e.msg, i = o("WAWebOrderStatusButton").getOrderStatusButton(a), l = (i == null || (t = i.order) == null ? void 0 : t.order_creator_surface) === "biz_inbox", d = l && o("WAWebMsgGetters").getIsSentByMe(a.unsafe()) && o("WAWebABProps").getABPropConfigValue("utility_order_view_mbs_enabled");
		if (!d) return null;
		var m;
		return n[0] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(r("WAWebWrapperSystemBubble.react"), {
			testid: "mbs_inbox_order_admin_notice",
			xstyle: c.spacing,
			children: s._(
				/*BTDS*/
				""
			)
		}), n[0] = m) : m = n[0], m;
	}
	l.default = d;
}), 226);
