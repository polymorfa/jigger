__d("WAWebBizBroadcastHomeCreateAudienceButton.react", [
	"WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsUploadModalLoadable.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebModalManager",
	"WAWebWamEnumSurfaceType",
	"WDSButton.react",
	"react",
	"react-compiler-runtime",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef;
	function m(e) {
		var t = o("react-compiler-runtime").c(20), n = e.entryPoint, a = e.onCreateAudience, i = e.onSuggestedAudiencePress, l = e.onUploadSuccess, u = d(null), c;
		t[0] !== n || t[1] !== l ? (c = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceClicked(n), o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastsUploadModalLoadable.react").WAWebBizBroadcastsUploadModalLoadable, {
				entryPoint: n,
				onCancel: function(t, r) {
					var e = r === void 0 ? !1 : r;
					o("WAWebModalManager").ModalManager.close(), e !== !0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.contactImportCancelClicked(n);
				},
				onUploadSuccess: l
			}));
		}, t[0] = n, t[1] = l, t[2] = c) : c = t[2];
		var m = c, p;
		t[3] !== n || t[4] !== a || t[5] !== m || t[6] !== i ? (p = s.jsx(r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"), {
			entryPoint: n,
			onImportAudience: m,
			onNewAudience: a,
			onSuggestedAudiencePress: i,
			showExistingAudienceRow: !1,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME
		}), t[3] = n, t[4] = a, t[5] = m, t[6] = i, t[7] = p) : p = t[7];
		var _ = p, f;
		t[8] !== _ ? (f = {
			enableUIM: !1,
			menu: _,
			targetRef: u
		}, t[8] = _, t[9] = f) : f = t[9];
		var g = r("useWDSMenu")(f), h = g.isMenuOpen, y = g.menuPortal, C = g.openMenu, b;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebBizBroadcastsCreationStrings").getNewAudienceLabel(), t[10] = b) : b = t[10];
		var v;
		t[11] !== n || t[12] !== C ? (v = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeNewAudienceDropdownClicked(n), C();
		}, t[11] = n, t[12] = C, t[13] = v) : v = t[13];
		var S;
		t[14] !== h || t[15] !== v ? (S = s.jsx(r("WDSButton.react"), {
			ref: u,
			label: b,
			variant: "outline",
			showEndDropdownIcon: !0,
			"aria-expanded": h,
			"aria-haspopup": "menu",
			onPress: v,
			testid: "biz-broadcast-home-create-audience-button"
		}), t[14] = h, t[15] = v, t[16] = S) : S = t[16];
		var R;
		return t[17] !== y || t[18] !== S ? (R = s.jsxs(s.Fragment, { children: [S, y] }), t[17] = y, t[18] = S, t[19] = R) : R = t[19], R;
	}
	l.default = m;
}), 98);
