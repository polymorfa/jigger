__d("WAWebBizBroadcastHomeCreateAudienceButton.react", [
	"WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsUploadModalLoadable.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebModalManager",
	"WAWebWamEnumSurfaceType",
	"WDSButton.react",
	"react",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef;
	function m(e) {
		var t = e.entryPoint, n = e.onCreateAudience, a = e.onSuggestedAudiencePress, i = e.onUploadSuccess, l = d(null), u = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(t), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: t,
				onCancel: function(n, r) {
					r === void 0 && (r = !1), o("WAWebModalManager").ModalManager.close(), r !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(t);
				},
				onUploadSuccess: i
			}));
		}, [t, i]), m = s.jsx(r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"), {
			entryPoint: t,
			onImportAudience: u,
			onNewAudience: n,
			onSuggestedAudiencePress: a,
			showExistingAudienceRow: !1,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME
		}), p = r("useWDSMenu")({
			enableUIM: !1,
			menu: m,
			targetRef: l
		}), _ = p.isMenuOpen, f = p.menuPortal, g = p.openMenu;
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WDSButton.react"), {
			ref: l,
			label: o("WAWebBizBroadcastsCreationStrings").getNewAudienceLabel(),
			variant: "outline",
			showEndDropdownIcon: !0,
			"aria-expanded": _,
			"aria-haspopup": "menu",
			onPress: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeNewAudienceDropdownClicked(t), g();
			},
			testid: "biz-broadcast-home-create-audience-button"
		}), f] });
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
