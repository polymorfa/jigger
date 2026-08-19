__d("WAWebCometLiteRecentCalls.react", [
	"fbt",
	"WAWebChatCollection",
	"WAWebCometLiteCallLogData",
	"WAWebCometLiteRecentCallRow.react",
	"WAWebContactCollection",
	"WAWebFlex.react",
	"WAWebLocalStorage",
	"WAWebSocketModel",
	"WAWebUserPrefsLoginKeys",
	"WAWebVoipCallsTabPanelManager",
	"WDSText.react",
	"react",
	"useWAWebDebouncedCallback",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useReducer, p = c.useState, _ = {
		list: {
			width: "xpmw3k",
			maxWidth: "x193iq5w",
			alignSelf: "xkh2ocl",
			overflowY: "x1odjw0f",
			paddingTop: "xl7twdi",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		state: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		}
	};
	function f(e) {
		"use no forget";
		var t, n = e.onSelect, a = p(null), i = a[0], l = a[1], c = m(function(e) {
			return e + 1;
		}, 0), f = c[1], g = r("useWAWebDebouncedCallback")(function() {
			o("WAWebCometLiteCallLogData").loadRecentCallLogMsgs().then(l);
		}, 150), h = r("useWAWebDebouncedCallback")(f, 150);
		if (d(function() {
			o("WAWebCometLiteCallLogData").loadRecentCallLogMsgs().then(l);
		}, []), (t = o("useWAWebListener")).useListener(r("WAWebVoipCallsTabPanelManager"), "onWriteCallLogMessage", g), t.useListener(o("WAWebSocketModel").Socket, "change:hasSynced", g), t.useListener(o("WAWebContactCollection").ContactCollection, "add", h), t.useListener(o("WAWebChatCollection").ChatCollection, "add sort", h), i != null) {
			var y = o("WAWebCometLiteCallLogData").deriveRecentCalls(i);
			if (y.length > 0) return u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: _.list,
				role: "list",
				testid: "wa-web-lite-recent-calls-list",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: y.map(function(e, t) {
					return u.jsx(r("WAWebCometLiteRecentCallRow.react"), {
						call: e,
						index: t,
						onSelect: n
					}, e.key);
				})
			});
		}
		var C = (r("WAWebLocalStorage") == null ? void 0 : r("WAWebLocalStorage").getItem(o("WAWebUserPrefsLoginKeys").WAWebUserPrefsLoginKeys.LAST_WID_MD)) != null;
		return i == null && C ? u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: _.state,
			testid: "wa-web-lite-recent-calls-loading"
		}) : u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: _.state,
			testid: "wa-web-lite-recent-calls-empty",
			children: u.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
