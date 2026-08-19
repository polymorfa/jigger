__d("WAWebVoipEncryptionButton.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebContactCollection",
	"WAWebUserPrefsMultiDevice",
	"WAWebVoipE2EInfoModal.react",
	"WDSButton.react",
	"WDSIconIcInfo.react",
	"WDSIconIcLock.react",
	"WDSTooltip.react",
	"react",
	"useWAWebABPropConfigValue",
	"useWAWebVoipModalManager",
	"useWAWebVoipWindowPopoutTooltipProps"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { iconButton: {
		color: "xhslqc4",
		$$css: !0
	} };
	function d(e) {
		var t, n = e.inline, a = n === void 0 ? !1 : n, i = e.tonal, l = i === void 0 ? !1 : i, d = r("useWAWebVoipWindowPopoutTooltipProps")(), m = d.tooltipAnchorRef, p = d.tooltipOwnerDocument, _ = r("useWAWebVoipModalManager")(), f = _.openModal, g = o("useWAWebABPropConfigValue").useABPropConfigValue("coex_calling_enabled"), h = g, y = h && o("WAWebUserPrefsMultiDevice").getIsHostedMeAccountFromLocalStorage(), C = (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.peerJid, b = C != null ? o("WAWebContactCollection").ContactCollection.get(C) : null, v = h && (b == null ? void 0 : b.isHosted) === !0, S = y || v, R = function() {
			f(u.jsx(r("WAWebVoipE2EInfoModal.react"), {
				isCurrentUserCoex: y,
				isPeerCoex: v
			}));
		}, L = r(S ? "WDSIconIcInfo.react" : "WDSIconIcLock.react"), E;
		v ? E = s._(
			/*BTDS*/
			""
		) : y ? E = s._(
			/*BTDS*/
			""
		) : E = s._(
			/*BTDS*/
			""
		);
		var k = u.jsx(r("WDSTooltip.react"), {
			label: E,
			ownerAnchorRef: m,
			ownerDocument: p,
			children: u.jsx(r("WDSButton.react"), {
				Icon: L,
				onPress: R,
				size: "small",
				type: l ? "media" : "default",
				variant: l ? "tonal" : "borderless",
				testid: "voip-encryption-button",
				xstyle: l ? void 0 : c.iconButton,
				"aria-label": E
			})
		});
		return a ? k : u.jsx("div", {
			className: "x10l6tqk xugynej x67dgr1 x68pp3s",
			children: k
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
