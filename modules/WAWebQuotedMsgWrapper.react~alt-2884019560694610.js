__d("WAWebQuotedMsgWrapper.react", [
	"fbt",
	"WAWebKeyboardIsKeyActivation",
	"WAWebTabOrder",
	"WDSFocusStateStyles",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useState, m = {
		quotedMsg: {
			position: "x1n2onr6",
			display: "x78zum5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			backgroundColor: "x16p640f",
			borderStartStartRadius: "x1liijdw",
			borderStartEndRadius: "xu342n7",
			borderEndEndRadius: "xelbjmh",
			borderEndStartRadius: "x16pgt24",
			$$css: !0
		},
		quotedMsgRefresh: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		noBorderRadius: {
			borderStartStartRadius: null,
			borderStartEndRadius: null,
			borderEndEndRadius: null,
			borderEndStartRadius: null,
			$$css: !0
		},
		hover: {
			cursor: "x1ypdohk",
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		colorBar: {
			flexShrink: "x2lah0s",
			flexGrow: "x1c4vz4f",
			flexBasis: "xdl72j9",
			width: "x51ohtg",
			borderStartStartRadius: "x1liijdw",
			borderEndStartRadius: "x16pgt24",
			$$css: !0
		}
	};
	function p(t) {
		var n = t.authorBackgroundStyle, a = t.children, i = t.clickable, l = t.handleClick, u = t.rootMsg, p = t.theme, _ = d(!1), f = _[0], g = _[1], h = !f && !!u, y = i ? "button" : null, C = p === "composeBox", b = function(t) {
			h && g(!0);
		}, v = function(t) {
			f && g(!1);
		}, S = function(t) {
			r("WAWebKeyboardIsKeyActivation")(t) && i && l();
		}, R = (e || (e = r("stylex")))(m.quotedMsg, m.quotedMsgRefresh, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner, p === "composeBox" && m.noBorderRadius, f && m.hover), L = e(n, m.colorBar), E = s._(
			/*BTDS*/
			""
		);
		return c.jsx("div", {
			"data-testid": "quoted-message",
			className: "xh8yej3 xeuugli",
			onMouseOver: i ? b : null,
			onMouseEnter: i ? b : null,
			onMouseLeave: i ? v : null,
			children: c.jsxs("div", {
				className: R,
				role: y,
				"aria-label": E,
				tabIndex: i ? 0 : null,
				"data-tab": C && i ? o("WAWebTabOrder").TAB_ORDER.POPUP_PANEL : void 0,
				onKeyDown: S,
				onClick: i ? l : null,
				children: [c.jsx("span", { className: L }), a]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
