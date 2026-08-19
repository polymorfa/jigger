__d("WAWebBusinessBroadcastHomeScreen.react", [
	"WAWebBBHomeQPSurface.react",
	"WAWebBizBroadcastHomeCreateAudienceButton.react",
	"WAWebBizBroadcastHomeNux.react",
	"WAWebBizBroadcastsHomeOverflowMenu.react",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBusinessBroadcastHomeEmptyState.react",
	"WAWebBusinessBroadcastHomeQPLLogger",
	"WAWebBusinessBroadcastHomeTableColumns.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebDrawerBody.react",
	"WAWebFlex.react",
	"WAWebMenuBar.react",
	"WAWebSMBTable.react",
	"WAWebSpinner.react",
	"WAWebTabs.react",
	"WAWebWamEnumSurfaceType",
	"WDSButton.react",
	"WDSIconIcAdd.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebABPropConfigValue"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState, _ = {
		emptyStateAudienceTab: {
			flexGrow: "x1iyjqo2",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			width: "xh8yej3",
			$$css: !0
		},
		headerContainer: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineEnd: "xde1mab",
			paddingInlineStart: "x1phvje8",
			$$css: !0
		},
		selectedTab: {
			borderBottomWidth: "xv7zg05",
			$$css: !0
		},
		tab: {
			flexGrow: "x1iyjqo2",
			justifyContent: "xl56j7k",
			paddingTop: "xl7twdi",
			paddingInlineEnd: "xyo0t3i",
			paddingBottom: "xvg22vi",
			paddingInlineStart: "xb0esv5",
			$$css: !0
		},
		tableContainer: {
			flexGrow: "x1iyjqo2",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		tabs: {
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		tabsContainer: {
			alignSelf: "xkh2ocl",
			borderBottomColor: "x120ee7l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xso031l",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(71), n = e.audiencesCount, a = e.audienceTable, i = e.campaigns, l = e.entryPoint, u = e.loading, c = e.nowMs, m = e.onBroadcastSelect, f = e.onClose, y = e.onCreateAudience, C = e.onCreateBroadcast, b = e.onOpenProSettings, v = e.onPreview, S = e.onProTryNow, R = e.onSuggestedCardPress, L = e.onUploadSuccess, E = e.tableScrollRef, k = p("broadcasts"), I = k[0], T = k[1], D = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0, x;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (x = [], t[0] = x) : x = t[0], d(h, x);
		var $, P;
		t[1] !== l ? ($ = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.bbHomePageViewed(l);
		}, P = [l], t[1] = l, t[2] = $, t[3] = P) : ($ = t[2], P = t[3]), d($, P);
		var N, M;
		t[4] !== u ? (N = function() {
			!u && !o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.hasFired(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.CAMPAIGNS_FETCH_END) && (o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.pointOnce(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.CAMPAIGNS_FETCH_END), o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.end(2));
		}, M = [u], t[4] = u, t[5] = N, t[6] = M) : (N = t[5], M = t[6]), d(N, M);
		var w;
		t[7] !== l ? (w = function(t) {
			t === "broadcasts" ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeBroadcastsTabClicked(l) : t === "audiences" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeAudiencesTabClicked(l), T(t);
		}, t[7] = l, t[8] = w) : w = t[8];
		var A = w, F;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (F = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled(), t[9] = F) : F = t[9];
		var O = F, B;
		t[10] !== l || t[11] !== c || t[12] !== v ? (B = o("WAWebBusinessBroadcastHomeTableColumns.react").getBroadcastColumns(l, c, O, v), t[10] = l, t[11] = c, t[12] = v, t[13] = B) : B = t[13];
		var W = B, q = g, U;
		t[14] !== m ? (U = function(t) {
			m != null && m(t);
		}, t[14] = m, t[15] = U) : U = t[15];
		var V = U, H;
		t[16] !== R ? (H = function(t) {
			R != null && R(t);
		}, t[16] = R, t[17] = H) : H = t[17];
		var G = H, z = u && i.length === 0, j = !u && i.length === 0 && n === 0 && !D, K = !u && i.length === 0, Q;
		t[18] !== W || t[19] !== i || t[20] !== V || t[21] !== z || t[22] !== E ? (Q = z ? s.jsx("div", {
			className: "x6s0dn4 x78zum5 x5yr21d xl56j7k",
			children: s.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 6
			})
		}) : s.jsx(r("WAWebSMBTable.react"), {
			columns: W,
			items: i,
			getItemKey: q,
			onRowClick: V,
			scrollContainerRef: E
		}), t[18] = W, t[19] = i, t[20] = V, t[21] = z, t[22] = E, t[23] = Q) : Q = t[23];
		var X = Q, Y;
		t[24] !== X || t[25] !== l || t[26] !== j || t[27] !== K || t[28] !== y || t[29] !== C || t[30] !== L ? (Y = K ? s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.emptyStateAudienceTab,
			align: "center",
			children: s.jsx(r("WAWebBusinessBroadcastHomeEmptyState.react"), {
				onCreateAudience: y,
				onCreateBroadcast: C,
				onUploadSuccess: L,
				showFooterButtons: j,
				entryPoint: l
			})
		}) : X, t[24] = X, t[25] = l, t[26] = j, t[27] = K, t[28] = y, t[29] = C, t[30] = L, t[31] = Y) : Y = t[31];
		var J = Y, Z;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (Z = { className: "x1280gxy x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62" }, t[32] = Z) : Z = t[32];
		var ee;
		t[33] === Symbol.for("react.memo_cache_sentinel") ? (ee = s.jsx(r("WDSText.react"), {
			testid: "biz-broadcasts-home-title",
			type: "Headline1",
			colorName: "contentDefault",
			children: o("WAWebBizBroadcastsHomeStrings").getBusinessBroadcastsTitle()
		}), t[33] = ee) : ee = t[33];
		var te;
		t[34] !== l || t[35] !== G || t[36] !== j || t[37] !== y || t[38] !== C || t[39] !== L || t[40] !== D ? (te = !j && s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 12,
			testid: "biz-broadcasts-home-header-button-group",
			children: [s.jsx(r("WAWebBizBroadcastHomeCreateAudienceButton.react"), {
				onUploadSuccess: L,
				onCreateAudience: y,
				onSuggestedAudiencePress: D ? G : void 0,
				entryPoint: l
			}), s.jsx(r("WDSButton.react"), {
				Icon: r("WDSIconIcAdd.react"),
				label: o("WAWebBizBroadcastsHomeStrings").getCreateBroadcastButtonLabel(),
				onPress: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(l, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME, { is_bb_home_empty_state: !1 }), C();
				},
				size: "medium",
				testid: "biz-broadcasts-home-create-broadcast-button",
				variant: "filled"
			})]
		}), t[34] = l, t[35] = G, t[36] = j, t[37] = y, t[38] = C, t[39] = L, t[40] = D, t[41] = te) : te = t[41];
		var ne;
		t[42] !== l ? (ne = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeOverflowMenuClicked(l);
		}, t[42] = l, t[43] = ne) : ne = t[43];
		var re;
		t[44] !== b || t[45] !== ne ? (re = s.jsx(o("WAWebMenuBar.react").MenuBar, { children: s.jsx(r("WAWebBizBroadcastsHomeOverflowMenu.react"), {
			onMenuOpen: ne,
			onOpenSettings: b,
			testid: "biz-broadcasts-home-header-menu-button"
		}) }), t[44] = b, t[45] = ne, t[46] = re) : re = t[46];
		var oe;
		t[47] !== te || t[48] !== re ? (oe = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: _.headerContainer,
			children: [ee, s.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 16,
				children: s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 8,
					children: [te, re]
				})
			})]
		}), t[47] = te, t[48] = re, t[49] = oe) : oe = t[49];
		var ae;
		t[50] === Symbol.for("react.memo_cache_sentinel") ? (ae = s.jsx(r("WAWebBBHomeQPSurface.react"), {}), t[50] = ae) : ae = t[50];
		var ie;
		t[51] !== I || t[52] !== a || t[53] !== J || t[54] !== l || t[55] !== A || t[56] !== j || t[57] !== z || t[58] !== y || t[59] !== C || t[60] !== L || t[61] !== E ? (ie = j ? s.jsx(r("WAWebBusinessBroadcastHomeEmptyState.react"), {
			onCreateAudience: y,
			onCreateBroadcast: C,
			onUploadSuccess: L,
			showFooterButtons: j,
			entryPoint: l
		}) : s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: _.tabsContainer,
			children: s.jsx(r("WAWebTabs.react"), {
				selectedId: I,
				onSelect: A,
				testIdPrefix: "biz-broadcasts-home-tab",
				tabConfigs: [{
					id: "broadcasts",
					title: o("WAWebBizBroadcastsHomeStrings").getBroadcastsTabTitle()
				}, {
					id: "audiences",
					title: o("WAWebBizBroadcastsHomeStrings").getAudiencesTabTitle()
				}],
				xstyle: _.tabs,
				tabXstyle: _.tab,
				selectedXStyle: _.selectedTab
			})
		}), s.jsx(r("WAWebDrawerBody.react"), { children: z ? s.jsx("div", {
			className: "x6s0dn4 x78zum5 x5yr21d xl56j7k",
			children: s.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 6
			})
		}) : s.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: _.tableContainer,
			children: s.jsx("div", {
				ref: E,
				className: "x12lumcd x2lwn1j xw2csxc x1odjw0f xh8yej3",
				children: I === "broadcasts" ? J : a
			})
		}) })] }), t[51] = I, t[52] = a, t[53] = J, t[54] = l, t[55] = A, t[56] = j, t[57] = z, t[58] = y, t[59] = C, t[60] = L, t[61] = E, t[62] = ie) : ie = t[62];
		var le;
		t[63] !== l || t[64] !== f || t[65] !== S ? (le = s.jsx(r("WAWebBizBroadcastHomeNux.react"), {
			entryPoint: l,
			onClose: f,
			onProTryNow: S
		}), t[63] = l, t[64] = f, t[65] = S, t[66] = le) : le = t[66];
		var se;
		return t[67] !== oe || t[68] !== ie || t[69] !== le ? (se = s.jsxs("div", babelHelpers.extends({}, Z, { children: [
			oe,
			ae,
			ie,
			le
		] })), t[67] = oe, t[68] = ie, t[69] = le, t[70] = se) : se = t[70], se;
	}
	function g(e) {
		return e.campaignId;
	}
	function h() {
		o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.pointOnce(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.SCREEN_MOUNTED);
	}
	l.default = f;
}), 98);
