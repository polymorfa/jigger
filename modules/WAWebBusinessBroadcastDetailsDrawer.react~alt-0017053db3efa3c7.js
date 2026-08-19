__d("WAWebBusinessBroadcastDetailsDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebBizBroadcastCampaignDataLayer",
	"WAWebBizBroadcastCampaignPermissionUtils",
	"WAWebBizBroadcastDeleteConfirmationModalLoadable",
	"WAWebBizBroadcastDeliveredToDrawer.react",
	"WAWebBizBroadcastInsightsPeerOps",
	"WAWebBizBroadcastPerformanceExplainedModalLoadable",
	"WAWebBizBroadcastPreviewMessageBubble.react",
	"WAWebBizBroadcastProPerformanceSection.react",
	"WAWebBizBroadcastRateUtils",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastConsts",
	"WAWebBroadcastHomeTypes",
	"WAWebBroadcastInsightStatus",
	"WAWebBusinessBroadcastHomeTableColumns.react",
	"WAWebBusinessBroadcastInlineEditableText.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebBusinessBroadcastsGatingUtils",
	"WAWebClock",
	"WAWebDivider.react",
	"WAWebDrawerHeader.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebRenameBroadcastCampaignAction",
	"WAWebSchemaPendingBusinessBroadcastMessage",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumSurfaceType",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcContentCopy.react",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcGroup.react",
	"WDSIconIcInfo.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcReply.react",
	"WDSIconIcVisibility.react",
	"WDSIconWdsIcRead.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"useWAWebAsync",
	"useWAWebBroadcastInsights",
	"useWAWebCampaignMedia"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useRef, f = d.useState, g = 1e4, h = {
		actionTilesContainer: {
			alignItems: "x6s0dn4",
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		clickableRow: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		dividerWrapper: {
			flexShrink: "x2lah0s",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		drawerContainer: {
			backgroundColor: "x1280gxy",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			width: "xh8yej3",
			$$css: !0
		},
		editNameInput: {
			fontSize: "x1aueamr",
			$$css: !0
		},
		lastUpdatedRow: {
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		measureSpan: {
			fontSize: "x1aueamr",
			$$css: !0
		},
		messageSection: {
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingBottom: "xvpt6g3",
			paddingTop: "x1h678fw",
			width: "xh8yej3",
			$$css: !0
		},
		metricIcon: {
			objectPosition: "xm9wsd5",
			width: "xvy4d1p",
			$$css: !0
		},
		metricRight: {
			alignItems: "xuk3077",
			$$css: !0
		},
		metricRow: {
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		previewContainer: {
			backgroundColor: "x1q80dvb",
			boxSizing: "x9f619",
			flex: "x98rzlu",
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		},
		scrollableContent: {
			flex: "x98rzlu",
			minHeight: "x2lwn1j",
			overflowX: "x6ikm8r",
			overflowY: "x1odjw0f",
			width: "xh8yej3",
			$$css: !0
		},
		sectionDivider: {
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1p57kb1",
			width: "xh8yej3",
			$$css: !0
		},
		sectionDividerRow: {
			columnGap: "x1trrmfo",
			$$css: !0
		},
		spinnerColor: {
			color: "xo1mcw5",
			stroke: "x7iy8sv",
			$$css: !0
		},
		titleSection: {
			boxSizing: "x9f619",
			flexShrink: "x2lah0s",
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			textAlign: "x2b8uid",
			width: "xh8yej3",
			$$css: !0
		}
	};
	function y(e) {
		var t = e.deemphasized, n = t === void 0 ? !1 : t, a = e.icon, i = e.label, l = e.onClick, s = e.sublabel, u = e.value, d = e.valueSublabel, m = n ? "contentDeemphasized" : "contentDefault", p = c.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 20,
			align: "center",
			xstyle: h.metricRow,
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				xstyle: h.metricIcon,
				children: a
			}), c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "all",
				grow: 1,
				children: [c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [c.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDefault",
					children: i
				}), s != null ? c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s
				}) : null] }), u != null ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: h.metricRight,
					children: [c.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: m,
						children: u
					}), d != null ? c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: d
					}) : null]
				}) : null]
			})]
		});
		return l != null ? c.jsx(r("WAWebUnstyledButton.react"), {
			onClick: l,
			xstyle: h.clickableRow,
			children: p
		}) : p;
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.colorName, n = t === void 0 ? "contentDefault" : t, a = e.icon, i = e.label, l = e.onClick, s = e.sublabel, u = c.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 20,
			align: "center",
			xstyle: h.metricRow,
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				xstyle: h.metricIcon,
				children: a
			}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
				grow: 1,
				children: [c.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: n,
					maxLines: 1,
					children: i
				}), s != null ? c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s
				}) : null]
			})]
		});
		return l != null ? c.jsx(r("WAWebUnstyledButton.react"), {
			onClick: l,
			xstyle: h.clickableRow,
			children: u
		}) : u;
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(t) {
		var n, a, i, l, s, u, d, b, R, E = t.entryPoint, k = t.initialShowPreview, I = k === void 0 ? !1 : k, T = t.item, D = t.onClose, x = t.onDuplicate, $ = t.onRenameSuccess;
		p(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerViewed(E, T.campaignId);
		}, [E, T.campaignId]);
		var P = _(null), N = f(I), M = N[0], w = N[1], A = f(!1), F = A[0], O = A[1], B = x != null && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled(), W = T.campaignModelForLazyMedia, q = W == null ? void 0 : W.msgId, U = W == null ? void 0 : W.broadcastJid, V = W == null ? void 0 : W.pendingBroadcastMessageId, H = r("useWAWebAsync")(async function() {
			if (q == null || U == null) return !0;
			var e = await o("WAWebBizBroadcastCampaignDataLayer").lookupCampaignMessage(q, U);
			return e != null;
		}, [q, U], q != null), G = r("useWAWebAsync")(async function() {
			if (V == null) return !0;
			var e = await o("WAWebSchemaPendingBusinessBroadcastMessage").getPendingBusinessBroadcastMessageTable().get(V);
			return e != null;
		}, [V], q == null && V != null), z = q != null && (H.loading === !0 || H.value !== !0) || q == null && V != null && (G.loading === !0 || G.value !== !0);
		p(function() {
			B && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastTileViewed(E, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER);
		}, [E, B]);
		var j = r("useWAWebBroadcastInsights")(T.campaignId), K = j.insights, Q = (n = K == null ? void 0 : K.deliveredCount) != null ? n : T.deliveredCount, X = (a = K == null ? void 0 : K.readCount) != null ? a : T.readRate.count, Y = ((i = K == null ? void 0 : K.repliedCount) != null ? i : 0) + ((l = K == null ? void 0 : K.quickReplyCount) != null ? l : 0), J = K != null ? Y : T.replyRate.count, Z = (s = (u = K == null ? void 0 : K.recipientCount) != null ? u : T.recipientCount) != null ? s : 0, ee = o("WAWebBizBroadcastRateUtils").computeCampaignRates({
			deliveredCount: Q,
			readCount: X,
			recipientCount: Z,
			repliedCount: J
		}), te = ee.readRate, ne = ee.replyRate, re = (d = K == null ? void 0 : K.lastUpdatedTimestampMs) != null ? d : T.lastUpdatedTimestampMs, oe = f(function() {
			return Date.now();
		}), ae = oe[0], ie = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled(), le = o("WAWebBroadcastInsightStatus").getInsightStatus(T.sentAt, Q, Z, X, ae), se = !ie || le !== o("WAWebBroadcastInsightStatus").InsightStatus.DELIVERING, ue = te.percentage === 0 ? "—" : o("WAWebBizBroadcastsHomeStrings").getPercentageLabel(te.percentage), ce = ne.percentage === 0 ? "—" : o("WAWebBizBroadcastsHomeStrings").getPercentageLabel(ne.percentage), de = f(!1), me = de[0], pe = de[1], _e = _(null), fe = _(null);
		p(function() {
			me && fe.current != null && re != null && re > fe.current && (_e.current != null && (window.clearTimeout(_e.current), _e.current = null), fe.current = null, pe(!1), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getPerformanceMetricsUpdatedToast() })));
		}, [me, re]), p(function() {
			return function() {
				_e.current != null && window.clearTimeout(_e.current);
			};
		}, []);
		var ge = m(function() {
			me || (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.refreshInsightsClicked(E), fe.current = re != null ? re : 0, pe(!0), o("WAWebBizBroadcastInsightsPeerOps").sendInsightsRefreshPoke(T.campaignId).catch(r("WAWebNoop")), _e.current = window.setTimeout(function() {
				pe(!1), fe.current = null, o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getPrimaryOfflineInsightsToast() }));
			}, g));
		}, [
			E,
			me,
			T.campaignId,
			re
		]), he = m(function() {
			var e;
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastClicked(E), (e = P.current) == null || e.startEdit();
		}, [E]), ye = m(function(e) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.undoRenameBroadcastClicked(E), o("WAWebRenameBroadcastCampaignAction").renameBroadcastCampaignAction(T.campaignId, e).then(function(t) {
				t && ($ == null || $(e));
			}).catch(r("WAWebNoop"));
		}, [
			E,
			T.campaignId,
			$
		]), Ce = m(function(t) {
			var n, a = (n = T.campaignName) != null ? n : "";
			return o("WAWebRenameBroadcastCampaignAction").renameBroadcastCampaignAction(T.campaignId, t).then(function(e) {
				e ? (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastResult(E, "success"), $ == null || $(t), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
					msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastRenamedToastMessage(),
					action: {
						actionText: r("WAWebFbtCommon")("Undo"),
						onAction: function() {
							return ye(a);
						}
					}
				}))) : (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastResult(E, "failure"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastRenameFailedToastMessage() })));
			}).catch(function(t) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBusinessBroadcastDetailsDrawer] Rename failed: ", ""])), t), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastResult(E, "failure"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastRenameFailedToastMessage() }));
			});
		}, [
			E,
			ye,
			T.campaignId,
			T.campaignName,
			$
		]), be = m(function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebBizBroadcastDeleteConfirmationModalLoadable").WAWebBizBroadcastDeleteConfirmationModalLoadable, {
				broadcastJid: T.broadcastJid,
				campaignId: T.campaignId,
				entryPoint: E,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER
			}));
		}, [
			E,
			T.broadcastJid,
			T.campaignId
		]), ve = o("WAWebBusinessBroadcastHomeTableColumns.react").getStatusDetailDisplay(T.status, T.sentAt, T.scheduledTimestamp), Se = o("WAWebBizBroadcastCampaignPermissionUtils").canEditBizBroadcastCampaign(T), Re = Se ? c.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-broadcast-details-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: o("WAWebBizBroadcastsHomeStrings").getMenuButtonTitle(),
			wdsMenuToRender: c.jsxs(r("WDSMenu.react"), { children: [c.jsx(r("WDSMenuItem.react"), {
				testid: "dropdown-rename-broadcast",
				onPress: he,
				Icon: r("WDSIconIcEdit.react"),
				title: o("WAWebBizBroadcastsHomeStrings").getRenameBroadcastActionLabel()
			}, "rename-broadcast"), c.jsx(r("WDSMenuItem.react"), {
				testid: "dropdown-delete-broadcast",
				onPress: be,
				Icon: r("WDSIconIcDelete.react"),
				destructive: !0,
				title: o("WAWebBizBroadcastsHomeStrings").getDeleteActionLabel()
			}, "delete-broadcast")] })
		}) : null, Le = c.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconIcVisibility.react"),
			label: o("WAWebBizBroadcastsHomeStrings").getPreviewActionLabel(),
			onPress: function() {
				if (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastPreviewClicked(E, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER), z) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastMessageUnavailableToast() }));
					return;
				}
				w(!0);
			},
			testid: "business_broadcasts_details_preview_action_tile"
		});
		return F ? c.jsx(r("WAWebBizBroadcastDeliveredToDrawer.react"), {
			campaignId: T.campaignId,
			entryPoint: E,
			onClose: function() {
				return O(!1);
			}
		}) : M ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: h.drawerContainer,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: "small",
				title: o("WAWebBizBroadcastsHomeStrings").getBroadcastPreviewTitle(),
				onBack: function() {
					return w(!1);
				}
			}), c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				grow: 1,
				xstyle: h.previewContainer,
				children: T.campaignModelForLazyMedia != null ? c.jsx(L, {
					campaign: T.campaignModelForLazyMedia,
					fallbackAttachment: T.attachmentData,
					fallbackCtaButtonData: T.ctaButtonData,
					fallbackMessage: T.messageBody
				}) : c.jsx(r("WAWebBizBroadcastPreviewMessageBubble.react"), {
					attachmentData: T.attachmentData,
					message: T.messageBody,
					buttonData: T.ctaButtonData
				})
			})]
		}) : c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.drawerContainer,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: "small",
				title: o("WAWebBizBroadcastsHomeStrings").getBroadcastDetailsTitle(),
				onCancel: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.detailsPanelCloseClicked(E), D();
				},
				menu: Re
			}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: h.scrollableContent,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: h.messageSection,
						children: c.jsx("div", {
							className: "x6egj2d xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s x1wkxgih x6ikm8r x10wlt62 xygnafs",
							children: c.jsx(S, { item: T })
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.titleSection,
						children: c.jsx(r("WAWebBusinessBroadcastInlineEditableText.react"), {
							ref: P,
							value: (b = T.campaignName) != null ? b : "",
							onSave: Ce,
							disabled: !Se,
							inputTestId: "broadcast-campaign-name-input",
							inputXstyle: h.editNameInput,
							measureXstyle: h.measureSpan
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: h.actionTilesContainer,
						children: B ? c.jsxs(r("WDSActionTileGroup.react"), { children: [c.jsx(r("WDSActionTile.react"), {
							Icon: r("WDSIconIcContentCopy.react"),
							disabled: z,
							label: o("WAWebBizBroadcastsHomeStrings").getDuplicateActionLabel(),
							onPress: function() {
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastClicked(E, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER), x == null || x();
							},
							testid: "business_broadcasts_details_duplicate_action_tile"
						}), Le] }) : Le
					}),
					o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() ? c.jsx(r("WAWebBizBroadcastProPerformanceSection.react"), {}) : c.jsxs(c.Fragment, { children: [
						c.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							xstyle: [h.sectionDivider, h.sectionDividerRow],
							children: [c.jsx(r("WDSText.react"), {
								type: "Body1Emphasized",
								colorName: "contentDefault",
								children: o("WAWebBizBroadcastsHomeStrings").getPerformanceSectionTitle()
							}), c.jsx(r("WAWebUnstyledButton.react"), {
								onClick: function() {
									o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.performanceExplainedClicked(E), v();
								},
								children: c.jsx(r("WDSIconIcInfo.react"), {
									colorName: "contentDeemphasized",
									height: 16,
									width: 16
								})
							})]
						}),
						c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: h.lastUpdatedRow,
							children: c.jsxs(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: [
									o("WAWebBizBroadcastsHomeStrings").getLastUpdatedLabel(re != null ? o("WAWebClock").Clock.lastUpdatedDateStr(re / o("WAWebBroadcastConsts").MS_PER_SEC) : o("WAWebBusinessBroadcastHomeTableColumns.react").formatDate(T.sentAt)),
									" ",
									me ? c.jsx("span", {
										className: "x3nfvp2 xxymvpz",
										children: c.jsx(r("WDSSpinner.react"), {
											size: 16,
											stroke: 3,
											xstyle: h.spinnerColor
										})
									}) : c.jsx(r("WAWebUnstyledButton.react"), {
										testid: "refresh-insights",
										onClick: ge,
										children: c.jsx(r("WDSText.react"), {
											type: "Body2",
											colorName: "contentActionEmphasized",
											children: o("WAWebBizBroadcastsHomeStrings").getRefreshInsightsLabel()
										})
									})
								]
							})
						}),
						ie && le !== o("WAWebBroadcastInsightStatus").InsightStatus.SENT ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: h.lastUpdatedRow,
							children: c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: o("WAWebBizBroadcastsHomeStrings").getInsightsUpdateExplainer()
							})
						}) : null,
						Q > 0 && c.jsxs(c.Fragment, { children: [
							c.jsx(y, {
								icon: c.jsx(r("WDSIconIcGroup.react"), {}),
								label: o("WAWebBizBroadcastsHomeStrings").getDeliveredLabel(),
								onClick: function() {
									return O(!0);
								},
								value: Q
							}),
							c.jsx(y, {
								deemphasized: se ? te.percentage === 0 : te.count === 0,
								icon: c.jsx(r("WDSIconWdsIcRead.react"), {}),
								label: se ? o("WAWebBizBroadcastsHomeStrings").getReadRateColumnHeader() : o("WAWebBizBroadcastsHomeStrings").getReadSublabel(),
								sublabel: se ? o("WAWebBizBroadcastsHomeStrings").getReadSublabel() : void 0,
								value: se ? ue : te.count,
								valueSublabel: se && te.percentage !== 0 ? te.count : void 0
							}),
							c.jsx(y, {
								deemphasized: se ? ne.percentage === 0 : ne.count === 0,
								icon: c.jsx(r("WDSIconIcReply.react"), {}),
								label: se ? o("WAWebBizBroadcastsHomeStrings").getReplyRateColumnHeader() : o("WAWebBizBroadcastsHomeStrings").getRepliesSublabel(),
								sublabel: se ? o("WAWebBizBroadcastsHomeStrings").getRepliesSublabel() : void 0,
								value: se ? ce : ne.count,
								valueSublabel: se && ne.percentage !== 0 ? ne.count : void 0
							})
						] })
					] }),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.dividerWrapper,
						children: c.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
					}),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.sectionDivider,
						children: c.jsx(r("WDSText.react"), {
							type: "Body1Emphasized",
							colorName: "contentDefault",
							children: o("WAWebBizBroadcastsHomeStrings").getDetailsSectionTitle()
						})
					}),
					c.jsx(C, {
						icon: ve.icon,
						label: ie && T.status === o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT && le !== o("WAWebBroadcastInsightStatus").InsightStatus.SENT ? o("WAWebBizBroadcastsHomeStrings").getDeliveringStatusLabel() : ve.text,
						sublabel: (R = ve.sublabel) != null ? R : void 0
					}),
					c.jsx(C, {
						icon: c.jsx(r("WDSIconIcGroup.react"), {}),
						label: (function() {
							var e = T.audienceName;
							return e != null && e.trim() !== "" ? e : o("WAWebBizBroadcastsAudienceStrings").getUntitledListName();
						})(),
						sublabel: T.recipientCount == null || T.recipientCount === 0 ? "—" : o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(T.recipientCount)
					}),
					null,
					Se ? c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.dividerWrapper,
						children: c.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
					}), c.jsx(C, {
						colorName: "secondaryNegative",
						icon: c.jsx(r("WDSIconIcDelete.react"), { colorName: "secondaryNegative" }),
						label: o("WAWebBizBroadcastsHomeStrings").getDeleteBroadcastLabel(),
						onClick: be
					})] }) : null
				]
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v() {
		o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebBizBroadcastPerformanceExplainedModalLoadable").WAWebBizBroadcastPerformanceExplainedModalLoadable, { onClose: o("WAWebModalManager").closeModalManager }));
	}
	function S(e) {
		var t, n = e.item;
		if (n.campaignModelForLazyMedia != null) {
			var r;
			return c.jsx(R, {
				campaign: n.campaignModelForLazyMedia,
				fallbackThumbnailUrl: (r = n.attachmentData) == null ? void 0 : r.previewUrl
			});
		}
		return ((t = n.attachmentData) == null ? void 0 : t.previewUrl) == null ? null : c.jsx("img", {
			src: n.attachmentData.previewUrl,
			alt: "",
			className: "x5yr21d xl1xv1r xh8yej3"
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t, n = e.campaign, o = e.fallbackThumbnailUrl, a = r("useWAWebCampaignMedia")(n), i = (t = a.thumbnailUrl) != null ? t : o;
		return i == null ? null : c.jsx("img", {
			src: i,
			alt: "",
			className: "x5yr21d xl1xv1r xh8yej3"
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t, n, o, a = e.campaign, i = e.fallbackAttachment, l = e.fallbackCtaButtonData, s = e.fallbackMessage, u = r("useWAWebCampaignMedia")(a);
		return c.jsx(r("WAWebBizBroadcastPreviewMessageBubble.react"), {
			attachmentData: (t = u.attachment) != null ? t : i,
			message: (n = u.messageBody) != null ? n : s,
			buttonData: (o = u.ctaButtonData) != null ? o : l
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = b;
}), 226);
