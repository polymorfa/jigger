__d("WAWebCappingUsageModal.react", [
	"fbt",
	"WAWebBizBroadcastDeviceCapabilityCommon",
	"WAWebBusinessBroadcastHomeFlowLoadable",
	"WAWebCappingOTERequestModalLoadable.react",
	"WAWebDrawerManager",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebIndividualNewChatMessageCappingLimitUtils",
	"WAWebIndividualNewChatMessageCappingLogEvents",
	"WAWebKeyboardTabUtils",
	"WAWebL10N",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebProgressBar.react",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"WDSIconIcArrowBack.react",
	"WDSIconIcBlock.react",
	"WDSIconIcCheckCircle.react",
	"WDSIconIcDomain.react",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSIconWdsIcChat.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		bulletIcon: {
			color: "xhslqc4",
			$$css: !0
		},
		bulletIconContainer: {
			width: "xvy4d1p",
			$$css: !0
		}
	};
	function m(e) {
		var t, n, a, i = e.onBack, l = (a = o("WAWebIndividualNewChatMessageCappingLimitUtils")).getCappingData(), m = a.getUsagePercentage(), p = a.isOTEEligible(), _ = o("WAWebMobilePlatforms").isSMB(), f = a.isUserCapped(), g = a.getCycleEndDateFormatted(r("WAWebL10N").getFullLocale()), h = _ && !p && o("WAWebBizBroadcastDeviceCapabilityCommon").isBizBroadcastEnabledAndDeviceSupported(!1);
		c(function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logView(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS, JSON.stringify(o("WAWebIndividualNewChatMessageCappingLimitUtils").getCappingData() || {}));
		}, []);
		var y = (t = l == null ? void 0 : l.used_quota) != null ? t : 0, C = (n = l == null ? void 0 : l.total_quota) != null ? n : 0, b = function(t) {
			var e = new Date(t * 1e3);
			return e.toLocaleDateString(r("WAWebL10N").getFullLocale(), {
				day: "numeric",
				month: "short"
			});
		}, v = (l == null ? void 0 : l.cycle_start_timestamp) != null ? b(l.cycle_start_timestamp) : "", S = (l == null ? void 0 : l.cycle_end_timestamp) != null ? b(l.cycle_end_timestamp) : "", R = function() {
			o("WDSDialogBridge").closeWDSDialog(), o("WAWebExternalLink.react").openExternalLink(o("WAWebFaqUrl").getWhatsAppBusinessHomeUrl());
		}, L = function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS, "try_business_broadcasts", JSON.stringify(l || {})), o("WDSDialogBridge").closeWDSDialog(), o("WAWebDrawerManager").DrawerManager.openDrawerFullscreen(u.jsx(o("WAWebBusinessBroadcastHomeFlowLoadable").WAWebBusinessBroadcastHomeFlowLoadable, {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.MESSAGE_CAPPING_NUX,
				onClose: function() {
					return o("WAWebDrawerManager").DrawerManager.closeDrawerFullscreen();
				}
			}), { focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE });
		}, E = function() {
			o("WAWebIndividualNewChatMessageCappingLogEvents").logClick(o("WAWebWamEnumSurfaceType").SURFACE_TYPE.MESSAGE_CAPPING_USAGE_STATS, "request_ote", JSON.stringify(l || {})), o("WDSDialogBridge").closeWDSDialog(), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebCappingOTERequestModalLoadable.react").CappingOTERequestModalLoadable, {}));
		}, k = s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
				href: _ ? o("WAWebFaqUrl").getSMBIndividualNewChatMessageCappingHCAUrl() : o("WAWebFaqUrl").getConsumerIndividualNewChatMessageCappingHCAUrl(),
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), I = [];
		f && I.push({
			icon: u.jsx(r("WDSIconIcBlock.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: g !== "" ? s._(
				/*BTDS*/
				"",
				[s._param("date", u.jsx(r("WDSText.react"), {
					type: "Body2Emphasized",
					colorName: "contentDefault",
					children: g
				}))]
			) : s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-block"
		}), I.push({
			icon: u.jsx(r("WDSIconIcCheckCircle.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-1"
		}), _ && p ? I.push({
			icon: u.jsx(r("WDSIconWdsIcChat.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-2"
		}) : h ? I.push({
			icon: u.jsx(r("WDSIconWdsIcBroadcastMessage.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-broadcasts"
		}) : I.push({
			icon: u.jsx(r("WDSIconIcDomain.react"), {
				width: 24,
				height: 24,
				iconXstyle: d.bulletIcon
			}),
			text: s._(
				/*BTDS*/
				""
			),
			testid: "capping-usage-modal-bullet-3"
		});
		var T, D, x, $;
		_ && p ? (T = s._(
			/*BTDS*/
			""
		), D = E, x = s._(
			/*BTDS*/
			""
		), $ = R) : h ? (T = s._(
			/*BTDS*/
			""
		), D = L, x = s._(
			/*BTDS*/
			""
		), $ = R) : _ ? (T = s._(
			/*BTDS*/
			""
		), D = R, x = s._(
			/*BTDS*/
			""
		), $ = o("WDSDialogBridge").closeWDSDialog) : (T = s._(
			/*BTDS*/
			""
		), D = R, x = s._(
			/*BTDS*/
			""
		), $ = o("WDSDialogBridge").closeWDSDialog);
		var P = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "stacked",
			width: "fill",
			primaryButtonProps: {
				label: T,
				onPress: D,
				variant: "filled",
				testid: "popup-controls-ok"
			},
			secondaryButtonProps: {
				label: x,
				onPress: $,
				variant: "outline",
				testid: "popup-controls-cancel"
			}
		});
		return u.jsxs(r("WDSDialog.react"), {
			closeButton: !0,
			footer: P,
			headerType: "expressive",
			layoutType: "expressive",
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0,
			size: "md",
			testid: "capping-usage-modal",
			title: s._(
				/*BTDS*/
				""
			),
			topBarStartContent: i != null ? u.jsx("div", {
				className: "x10l6tqk xxrlk4x xymx5cc x1vjfegm",
				children: u.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcArrowBack.react"),
					variant: "borderless",
					onPress: i,
					testid: "capping-usage-modal-back-button",
					"aria-label": s._(
						/*BTDS*/
						""
					)
				})
			}) : void 0,
			children: [
				u.jsxs("div", {
					className: "x12xbjc7",
					children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "end",
						justify: "all",
						paddingBottom: 8,
						children: [u.jsx(r("WDSText.react"), {
							type: "Headline1",
							colorName: "contentDefault",
							testid: "capping-usage-modal-amount",
							children: s._(
								/*BTDS*/
								"",
								[s._param("used", r("WAWebL10N").n(y)), s._param("total", r("WAWebL10N").n(C))]
							)
						}), v !== "" && S !== "" && u.jsx(r("WDSText.react"), {
							type: "Body2",
							colorName: "contentDeemphasized",
							testid: "capping-usage-modal-cycle-dates",
							children: s._(
								/*BTDS*/
								"",
								[s._param("startDate", v), s._param("endDate", S)]
							)
						})]
					}), u.jsx(r("WAWebProgressBar.react"), {
						value: m,
						max: 100
					})]
				}),
				u.jsx("div", {
					className: "x12xbjc7",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						testid: "capping-usage-modal-subtitle",
						children: k
					})
				}),
				u.jsx(o("WAWebFlex.react").FlexColumn, {
					align: "start",
					justify: "start",
					children: I.map(function(e) {
						var t = e.icon, n = e.testid, a = e.text;
						return u.jsxs(o("WAWebFlex.react").FlexRow, {
							testid: n,
							paddingStart: 8,
							paddingTop: 4,
							paddingBottom: 4,
							marginBottom: 8,
							columnGap: 24,
							align: "center",
							children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
								justify: "center",
								align: "center",
								shrink: 0,
								xstyle: d.bulletIconContainer,
								children: t
							}), u.jsx(o("WAWebFlex.react").FlexColumn, {
								align: "center",
								alignSelf: "center",
								children: u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: "contentDefault",
									children: a
								})
							})]
						}, n);
					})
				})
			]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.CappingUsageModal = m;
}), 226);
