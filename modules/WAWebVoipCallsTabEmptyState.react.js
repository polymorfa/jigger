__d("WAWebVoipCallsTabEmptyState.react", [
	"fbt",
	"WALogger",
	"WAWebCallLogEntryDetails.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerManager",
	"WAWebIntroPanelStyles.stylex",
	"WAWebLockOutlineIcon.react",
	"WAWebTabOrder",
	"WAWebVoipCallsTabCallInfoUtils",
	"WAWebVoipCallsTabEmptyStateButtons.react",
	"WAWebVoipCallsTabPanelManager",
	"WAWebWaLogoIcon.react",
	"getErrorSafe",
	"react",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useRef, f = m.useState, g = {
		whatsappLogo: {
			color: "x1vef352",
			display: "x1rg5ohu",
			$$css: !0
		},
		drawerWithBorder: {
			borderInlineStartWidth: "xpilrb4",
			borderInlineStartStyle: "x1t7ytsu",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		panelBg: {
			backgroundColor: "xs1q97v",
			$$css: !0
		}
	};
	function h() {
		var t, n, a = f(null), i = a[0], l = a[1], c = _(null), m = p(function(e) {
			c.current = e, l(e);
		}, []);
		(n = o("useWAWebListener")).useListener(t = r("WAWebVoipCallsTabPanelManager"), "openCallLogInfoPanel", function(e) {
			o("WAWebDrawerManager").DrawerManager.closeDrawerRight(), m(e);
		}), n.useListener(t, "closeCallLogInfoPanel", function() {
			m(null);
		}), n.useListener(t, "updateActveCallLogInfo", function(e) {
			var t = c.current;
			t == null || o("WAWebVoipCallsTabCallInfoUtils").getCallLogMsgsKey(e) === o("WAWebVoipCallsTabCallInfoUtils").getCallLogMsgsKey(t) || m(e.slice());
		}), n.useListener(t, "onWriteCallLogMessage", function(t) {
			var n = c.current;
			if (!(t == null || n == null)) try {
				var a = o("WAWebVoipCallsTabCallInfoUtils").getUpdatedCallLogInfoPropsForWrittenMsg(t, n);
				a != null && o("WAWebVoipCallsTabCallInfoUtils").getCallLogMsgsKey(a) !== o("WAWebVoipCallsTabCallInfoUtils").getCallLogMsgsKey(n) && m(a.slice());
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebVoipCallsTabEmptyState: failed to refresh call info panel"]))).catching(r("getErrorSafe")(t)).sendLogs("call-info-panel-refresh-failed");
			}
		});
		var h = o("useWAWebABPropConfigValue").useABPropConfigValue("web_calls_tab_empty_state_buttons");
		if (i != null) return d.jsx(r("WAWebCallLogEntryDetails.react"), { callLogMsgs: i });
		var y = h ? d.jsx(r("WAWebVoipCallsTabEmptyStateButtons.react"), {}) : d.jsx(o("WAWebWaLogoIcon.react").WaLogoIcon, {
			height: 56,
			width: 56,
			iconXstyle: g.whatsappLogo
		}), C = d.jsxs("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encrypted), {
			"data-tab": o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE + 1,
			tabIndex: 0,
			role: "note",
			children: [
				d.jsx("span", babelHelpers.extends({}, u.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.encryptedIcon), { children: d.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
					height: 20,
					width: 20
				}) })),
				" ",
				s._(
					/*BTDS*/
					""
				)
			]
		}));
		return d.jsx(r("WAWebDrawer.react"), {
			theme: "white-bg",
			testid: "empty-state-drawer",
			xstyle: g.drawerWithBorder,
			children: d.jsx(r("WAWebDrawerBody.react"), { children: d.jsx("div", babelHelpers.extends({}, u.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.intro, g.panelBg), { children: d.jsxs("div", babelHelpers.extends({}, u.props(o("WAWebIntroPanelStyles.stylex").introPanelStyles.body), { children: [d.jsx("div", { children: y }), C] })) })) })
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
