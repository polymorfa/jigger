__d("WAWebMBSInboxOrderNotice.react", [
	"fbt",
	"WAWebABProps",
	"WAWebMsgGetters",
	"WAWebOrderStatusButton",
	"WAWebWrapperSystemBubble.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { spacing: {
		marginTop: "x1de0gy",
		$$css: !0
	} };
	function d(e) {
		var t, n = e.msg, a = o("WAWebOrderStatusButton").getOrderStatusButton(n), i = (a == null || (t = a.order) == null ? void 0 : t.order_creator_surface) === "biz_inbox", l = i && o("WAWebMsgGetters").getIsSentByMe(n.unsafe()) && o("WAWebABProps").getABPropConfigValue("utility_order_view_mbs_enabled");
		return l ? u.jsx(r("WAWebWrapperSystemBubble.react"), {
			testid: "mbs_inbox_order_admin_notice",
			xstyle: c.spacing,
			children: s._(
				/*BTDS*/
				""
			)
		}) : null;
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
