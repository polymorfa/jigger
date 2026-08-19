__d("WAWebGalaxyFlowsResponseDownloadFlow.react", [
	"fbt",
	"$InternalEnum",
	"WAWebABProps",
	"WAWebButton.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebGalaxyFlowDownloadTracker",
	"WAWebGalaxyFlowWamLoggerUtils",
	"WAWebGalaxyFlowsResponseDownloadUtils",
	"WAWebIcAssignmentIcon.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPonyfillsCryptoRandomUUID",
	"WAWebProtobufsE2E.pb",
	"WAWebRadio.react",
	"WAWebSendNonMessageDataRequest",
	"WAWebText.react",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSPaddings.stylex",
	"react",
	"useWAWebFocusOnMount"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState, _ = {
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBlock15: {
			paddingTop: "xqy66fx",
			paddingBottom: "xr1496l",
			$$css: !0
		}
	}, f = {
		popoverOptions: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xif0l9a",
			borderBottomWidth: "xso031l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x6hs5rg",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		radioContainer: {
			width: "xh8yej3",
			alignItems: "x1qjc9v5",
			$$css: !0
		},
		radioOption: {
			alignSelf: "xkh2ocl",
			$$css: !0
		}
	}, g = n("$InternalEnum").Mirrored(["ONLY_THIS_RESPONSE", "ALL_RESPONSES_TO_THIS_FORM"]), h = (e = {}, e[g.ONLY_THIS_RESPONSE] = "DOWNLOAD_SINGLE_RESPONSE", e[g.ALL_RESPONSES_TO_THIS_FORM] = "DOWNLOAD_ALL_RESPONSES", e), y = function() {
		var e = [{
			value: g.ONLY_THIS_RESPONSE,
			label: s._(
				/*BTDS*/
				""
			),
			secondaryLabel: ""
		}];
		return o("WAWebABProps").getABPropConfigValue("flows_wa_web_responses_download") && e.push({
			value: g.ALL_RESPONSES_TO_THIS_FORM,
			label: s._(
				/*BTDS*/
				""
			),
			secondaryLabel: ""
		}), e;
	};
	function C(e) {
		var t, n = e.bizPlatform, a = e.businessOwnerJid, i = e.flowId, l = e.flowName, u = e.flowResponseMessage, d = e.flowWAMMessageId, C = e.flowWAMSessionId, b = e.getFileDownloadRef, v = e.phoneNumber, S = e.timestamp, R = r("useWAWebFocusOnMount")(), L = p(), E = L[0], k = L[1], I = function() {
			if (E != null && o("WAWebGalaxyFlowWamLoggerUtils").logFlowsScreenActionWAMEvent({
				bizPlatform: n,
				businessOwnerJid: a,
				clickType: h[E],
				currentFlowId: i,
				flowsMessageId: d,
				flowsSessionId: C
			}), E === g.ONLY_THIS_RESPONSE) o("WAWebGalaxyFlowsResponseDownloadUtils").manageResponseDownload(i, l, u, v, S, b);
			else if (E === g.ALL_RESPONSES_TO_THIS_FORM) {
				var e = r("WAWebPonyfillsCryptoRandomUUID")();
				o("WAWebGalaxyFlowDownloadTracker").GalaxyFlowDownloadTracker.registerRequest(e), o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType.GALAXY_FLOW_ACTION, {
					actionType: "DOWNLOAD_RESPONSES",
					flowId: i,
					requestId: e
				}).catch(function() {
					o("WAWebGalaxyFlowDownloadTracker").GalaxyFlowDownloadTracker.failRequest(e);
				});
			}
			o("WAWebModalManager").ModalManager.close();
		}, T = m(function() {
			return l != null && (l == null ? void 0 : l.length) > 0 ? l : i;
		}, [i, l]);
		return c.jsxs(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.GalaxyFlowResponsePopup,
			ref: R,
			actions: [c.jsx(o("WAWebButton.react").Button, {
				buttonType: "button",
				stretch: !0,
				type: "primary",
				disabled: E == null,
				onClick: I,
				children: s._(
					/*BTDS*/
					""
				)
			}, "confirm_btn")],
			children: [c.jsxs((t = o("WAWebFlex.react")).FlexRow, {
				align: "center",
				xstyle: [_.paddingInline30, o("WDSPaddings.stylex").wdsPaddings.paddingVer20],
				children: [c.jsxs(t.FlexColumn, {
					grow: 1,
					children: [c.jsx(o("WAWebText.react").WAWebTextTitle, { children: s._(
						/*BTDS*/
						""
					) }), c.jsxs(t.FlexRow, {
						justify: "center",
						align: "center",
						gap: 4,
						children: [c.jsx(o("WAWebIcAssignmentIcon.react").IcAssignmentIcon, {
							width: 14,
							height: 14,
							viewBox: {
								height: 24,
								width: 24,
								x: 0,
								y: 0
							},
							xstyle: f.icon
						}), c.jsx(o("WAWebText.react").WAWebTextMuted, { children: T })]
					})]
				}), c.jsx(r("WDSButton.react"), {
					Icon: r("WDSIconIcClose.react"),
					variant: "borderless",
					size: "medium",
					"aria-label": r("WAWebFbtCommon")("Close"),
					onPress: o("WAWebModalManager").closeModalManager
				})]
			}), c.jsx(t.FlexRow, {
				align: "center",
				xstyle: [
					_.paddingInline30,
					_.paddingBlock15,
					f.popoverOptions
				],
				children: c.jsxs(t.FlexColumn, {
					gap: 16,
					xstyle: f.radioContainer,
					children: [c.jsx(o("WAWebRadio.react").RadioGroup, {
						name: "radio",
						checkedValue: E != null ? E : null,
						options: y().map(function(e) {
							return {
								value: e.value,
								label: e.label,
								secondaryLabel: e.secondaryLabel,
								onChange: function() {
									return k(e.value);
								},
								xstyle: f.radioOption
							};
						})
					}), !o("WAWebABProps").getABPropConfigValue("flows_wa_web_responses_download") && c.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
						/*BTDS*/
						""
					) })]
				})
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
