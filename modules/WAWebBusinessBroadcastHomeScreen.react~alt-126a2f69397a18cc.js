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
		var t = e.audiencesCount, n = e.audienceTable, a = e.campaigns, i = e.entryPoint, l = e.loading, u = e.nowMs, f = e.onBroadcastSelect, g = e.onClose, h = e.onCreateAudience, y = e.onCreateBroadcast, C = e.onOpenProSettings, b = e.onPreview, v = e.onProTryNow, S = e.onSuggestedCardPress, R = e.onUploadSuccess, L = e.tableScrollRef, E = p("broadcasts"), k = E[0], I = E[1], T = o("useWAWebABPropConfigValue").useABPropConfigValue("suggested_audiences_wa_web") === !0;
		d(function() {
			o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.pointOnce(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.SCREEN_MOUNTED);
		}, []), d(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.bbHomePageViewed(i);
		}, [i]), d(function() {
			!l && !o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.hasFired(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.CAMPAIGNS_FETCH_END) && (o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.pointOnce(o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLPoints.CAMPAIGNS_FETCH_END), o("WAWebBusinessBroadcastHomeQPLLogger").BusinessBroadcastHomeQPLLogger.end(2));
		}, [l]);
		var D = c(function(e) {
			e === "broadcasts" ? o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeBroadcastsTabClicked(i) : e === "audiences" && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeAudiencesTabClicked(i), I(e);
		}, [i]), x = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled(), $ = m(function() {
			return o("WAWebBusinessBroadcastHomeTableColumns.react").getBroadcastColumns(i, u, x, b);
		}, [
			i,
			x,
			u,
			b
		]), P = c(function(e) {
			return e.campaignId;
		}, []), N = c(function(e) {
			f != null && f(e);
		}, [f]), M = c(function(e) {
			S != null && S(e);
		}, [S]), w = l && a.length === 0, A = !l && a.length === 0 && t === 0 && !T, F = !l && a.length === 0, O = w ? s.jsx("div", {
			className: "x6s0dn4 x78zum5 x5yr21d xl56j7k",
			children: s.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 6
			})
		}) : s.jsx(r("WAWebSMBTable.react"), {
			columns: $,
			items: a,
			getItemKey: P,
			onRowClick: N,
			scrollContainerRef: L
		}), B = F ? s.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.emptyStateAudienceTab,
			align: "center",
			children: s.jsx(r("WAWebBusinessBroadcastHomeEmptyState.react"), {
				onCreateAudience: h,
				onCreateBroadcast: y,
				onUploadSuccess: R,
				showFooterButtons: A,
				entryPoint: i
			})
		}) : O;
		return s.jsxs("div", {
			className: "x1280gxy x78zum5 xdt5ytf x1iyjqo2 x6ikm8r x10wlt62",
			children: [
				s.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "all",
					xstyle: _.headerContainer,
					children: [s.jsx(r("WDSText.react"), {
						testid: "biz-broadcasts-home-title",
						type: "Headline1",
						colorName: "contentDefault",
						children: o("WAWebBizBroadcastsHomeStrings").getBusinessBroadcastsTitle()
					}), s.jsx(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 16,
						children: s.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							gap: 8,
							children: [!A && s.jsxs(o("WAWebFlex.react").FlexRow, {
								gap: 12,
								testid: "biz-broadcasts-home-header-button-group",
								children: [s.jsx(r("WAWebBizBroadcastHomeCreateAudienceButton.react"), {
									onUploadSuccess: R,
									onCreateAudience: h,
									onSuggestedAudiencePress: T ? M : void 0,
									entryPoint: i
								}), s.jsx(r("WDSButton.react"), {
									Icon: r("WDSIconIcAdd.react"),
									label: o("WAWebBizBroadcastsHomeStrings").getCreateBroadcastButtonLabel(),
									onPress: function() {
										o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastButtonClicked(i, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME, { is_bb_home_empty_state: !1 }), y();
									},
									size: "medium",
									testid: "biz-broadcasts-home-create-broadcast-button",
									variant: "filled"
								})]
							}), s.jsx(o("WAWebMenuBar.react").MenuBar, { children: s.jsx(r("WAWebBizBroadcastsHomeOverflowMenu.react"), {
								onMenuOpen: function() {
									o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.homeOverflowMenuClicked(i);
								},
								onOpenSettings: C,
								testid: "biz-broadcasts-home-header-menu-button"
							}) })]
						})
					})]
				}),
				s.jsx(r("WAWebBBHomeQPSurface.react"), {}),
				A ? s.jsx(r("WAWebBusinessBroadcastHomeEmptyState.react"), {
					onCreateAudience: h,
					onCreateBroadcast: y,
					onUploadSuccess: R,
					showFooterButtons: A,
					entryPoint: i
				}) : s.jsxs(s.Fragment, { children: [s.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: _.tabsContainer,
					children: s.jsx(r("WAWebTabs.react"), {
						selectedId: k,
						onSelect: D,
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
				}), s.jsx(r("WAWebDrawerBody.react"), { children: w ? s.jsx("div", {
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
						ref: L,
						className: "x12lumcd x2lwn1j xw2csxc x1odjw0f xh8yej3",
						children: k === "broadcasts" ? B : n
					})
				}) })] }),
				s.jsx(r("WAWebBizBroadcastHomeNux.react"), {
					entryPoint: i,
					onClose: g,
					onProTryNow: v
				})
			]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
