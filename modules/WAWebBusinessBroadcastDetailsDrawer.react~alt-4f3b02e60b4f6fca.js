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
	"asyncToGeneratorRuntime",
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
		var a, i, l, s, u, d, b, R, E, k = t.entryPoint, I = t.initialShowPreview, T = I === void 0 ? !1 : I, D = t.item, x = t.onClose, $ = t.onDuplicate, P = t.onRenameSuccess;
		p(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastInfoDrawerViewed(k, D.campaignId);
		}, [k, D.campaignId]);
		var N = _(null), M = f(T), w = M[0], A = M[1], F = f(!1), O = F[0], B = F[1], W = $ != null && o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastDuplicateEnabled(), q = D.campaignModelForLazyMedia, U = q == null ? void 0 : q.msgId, V = q == null ? void 0 : q.broadcastJid, H = q == null ? void 0 : q.pendingBroadcastMessageId, G = r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (U == null || V == null) return !0;
			var e = yield o("WAWebBizBroadcastCampaignDataLayer").lookupCampaignMessage(U, V);
			return e != null;
		}), [U, V], U != null), z = r("useWAWebAsync")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			if (H == null) return !0;
			var e = yield o("WAWebSchemaPendingBusinessBroadcastMessage").getPendingBusinessBroadcastMessageTable().get(H);
			return e != null;
		}), [H], U == null && H != null), j = U != null && (G.loading === !0 || G.value !== !0) || U == null && H != null && (z.loading === !0 || z.value !== !0);
		p(function() {
			W && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastTileViewed(k, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER);
		}, [k, W]);
		var K = r("useWAWebBroadcastInsights")(D.campaignId), Q = K.insights, X = (a = Q == null ? void 0 : Q.deliveredCount) != null ? a : D.deliveredCount, Y = (i = Q == null ? void 0 : Q.readCount) != null ? i : D.readRate.count, J = ((l = Q == null ? void 0 : Q.repliedCount) != null ? l : 0) + ((s = Q == null ? void 0 : Q.quickReplyCount) != null ? s : 0), Z = Q != null ? J : D.replyRate.count, ee = (u = (d = Q == null ? void 0 : Q.recipientCount) != null ? d : D.recipientCount) != null ? u : 0, te = o("WAWebBizBroadcastRateUtils").computeCampaignRates({
			deliveredCount: X,
			readCount: Y,
			recipientCount: ee,
			repliedCount: Z
		}), ne = te.readRate, re = te.replyRate, oe = (b = Q == null ? void 0 : Q.lastUpdatedTimestampMs) != null ? b : D.lastUpdatedTimestampMs, ae = f(function() {
			return Date.now();
		}), ie = ae[0], le = o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastInThreadInsightMetricsEnabled(), se = o("WAWebBroadcastInsightStatus").getInsightStatus(D.sentAt, X, ee, Y, ie), ue = !le || se !== o("WAWebBroadcastInsightStatus").InsightStatus.DELIVERING, ce = ne.percentage === 0 ? "—" : o("WAWebBizBroadcastsHomeStrings").getPercentageLabel(ne.percentage), de = re.percentage === 0 ? "—" : o("WAWebBizBroadcastsHomeStrings").getPercentageLabel(re.percentage), me = f(!1), pe = me[0], _e = me[1], fe = _(null), ge = _(null);
		p(function() {
			pe && ge.current != null && oe != null && oe > ge.current && (fe.current != null && (window.clearTimeout(fe.current), fe.current = null), ge.current = null, _e(!1), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getPerformanceMetricsUpdatedToast() })));
		}, [pe, oe]), p(function() {
			return function() {
				fe.current != null && window.clearTimeout(fe.current);
			};
		}, []);
		var he = m(function() {
			pe || (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.refreshInsightsClicked(k), ge.current = oe != null ? oe : 0, _e(!0), o("WAWebBizBroadcastInsightsPeerOps").sendInsightsRefreshPoke(D.campaignId).catch(r("WAWebNoop")), fe.current = window.setTimeout(function() {
				_e(!1), ge.current = null, o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getPrimaryOfflineInsightsToast() }));
			}, g));
		}, [
			k,
			pe,
			D.campaignId,
			oe
		]), ye = m(function() {
			var e;
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastClicked(k), (e = N.current) == null || e.startEdit();
		}, [k]), Ce = m(function(e) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.undoRenameBroadcastClicked(k), o("WAWebRenameBroadcastCampaignAction").renameBroadcastCampaignAction(D.campaignId, e).then(function(t) {
				t && (P == null || P(e));
			}).catch(r("WAWebNoop"));
		}, [
			k,
			D.campaignId,
			P
		]), be = m(function(t) {
			var n, a = (n = D.campaignName) != null ? n : "";
			return o("WAWebRenameBroadcastCampaignAction").renameBroadcastCampaignAction(D.campaignId, t).then(function(e) {
				e ? (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastResult(k, "success"), P == null || P(t), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
					msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastRenamedToastMessage(),
					action: {
						actionText: r("WAWebFbtCommon")("Undo"),
						onAction: function() {
							return Ce(a);
						}
					}
				}))) : (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastResult(k, "failure"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastRenameFailedToastMessage() })));
			}).catch(function(t) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[WAWebBusinessBroadcastDetailsDrawer] Rename failed: ", ""])), t), o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameBroadcastResult(k, "failure"), o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastRenameFailedToastMessage() }));
			});
		}, [
			k,
			Ce,
			D.campaignId,
			D.campaignName,
			P
		]), ve = m(function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebBizBroadcastDeleteConfirmationModalLoadable").WAWebBizBroadcastDeleteConfirmationModalLoadable, {
				broadcastJid: D.broadcastJid,
				campaignId: D.campaignId,
				entryPoint: k,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER
			}));
		}, [
			k,
			D.broadcastJid,
			D.campaignId
		]), Se = o("WAWebBusinessBroadcastHomeTableColumns.react").getStatusDetailDisplay(D.status, D.sentAt, D.scheduledTimestamp), Re = o("WAWebBizBroadcastCampaignPermissionUtils").canEditBizBroadcastCampaign(D), Le = Re ? c.jsx(r("WDSMenuBarItem.react"), {
			testid: "btn-broadcast-details-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: o("WAWebBizBroadcastsHomeStrings").getMenuButtonTitle(),
			wdsMenuToRender: c.jsxs(r("WDSMenu.react"), { children: [c.jsx(r("WDSMenuItem.react"), {
				testid: "dropdown-rename-broadcast",
				onPress: ye,
				Icon: r("WDSIconIcEdit.react"),
				title: o("WAWebBizBroadcastsHomeStrings").getRenameBroadcastActionLabel()
			}, "rename-broadcast"), c.jsx(r("WDSMenuItem.react"), {
				testid: "dropdown-delete-broadcast",
				onPress: ve,
				Icon: r("WDSIconIcDelete.react"),
				destructive: !0,
				title: o("WAWebBizBroadcastsHomeStrings").getDeleteActionLabel()
			}, "delete-broadcast")] })
		}) : null, Ee = c.jsx(r("WDSActionTile.react"), {
			Icon: r("WDSIconIcVisibility.react"),
			label: o("WAWebBizBroadcastsHomeStrings").getPreviewActionLabel(),
			onPress: function() {
				if (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastPreviewClicked(k, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER), j) {
					o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getBroadcastMessageUnavailableToast() }));
					return;
				}
				A(!0);
			},
			testid: "business_broadcasts_details_preview_action_tile"
		});
		return O ? c.jsx(r("WAWebBizBroadcastDeliveredToDrawer.react"), {
			campaignId: D.campaignId,
			entryPoint: k,
			onClose: function() {
				return B(!1);
			}
		}) : w ? c.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: h.drawerContainer,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: "small",
				title: o("WAWebBizBroadcastsHomeStrings").getBroadcastPreviewTitle(),
				onBack: function() {
					return A(!1);
				}
			}), c.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				grow: 1,
				xstyle: h.previewContainer,
				children: D.campaignModelForLazyMedia != null ? c.jsx(L, {
					campaign: D.campaignModelForLazyMedia,
					fallbackAttachment: D.attachmentData,
					fallbackCtaButtonData: D.ctaButtonData,
					fallbackMessage: D.messageBody
				}) : c.jsx(r("WAWebBizBroadcastPreviewMessageBubble.react"), {
					attachmentData: D.attachmentData,
					message: D.messageBody,
					buttonData: D.ctaButtonData
				})
			})]
		}) : c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "stretch",
			xstyle: h.drawerContainer,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: "small",
				title: o("WAWebBizBroadcastsHomeStrings").getBroadcastDetailsTitle(),
				onCancel: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.detailsPanelCloseClicked(k), x();
				},
				menu: Le
			}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "stretch",
				xstyle: h.scrollableContent,
				children: [
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						xstyle: h.messageSection,
						children: c.jsx("div", {
							className: "x6egj2d xlr9sxt xvvg52n xwd4zgb xq8v1ta x2lah0s x1wkxgih x6ikm8r x10wlt62 xygnafs",
							children: c.jsx(S, { item: D })
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.titleSection,
						children: c.jsx(r("WAWebBusinessBroadcastInlineEditableText.react"), {
							ref: N,
							value: (R = D.campaignName) != null ? R : "",
							onSave: be,
							disabled: !Re,
							inputTestId: "broadcast-campaign-name-input",
							inputXstyle: h.editNameInput,
							measureXstyle: h.measureSpan
						})
					}),
					c.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: h.actionTilesContainer,
						children: W ? c.jsxs(r("WDSActionTileGroup.react"), { children: [c.jsx(r("WDSActionTile.react"), {
							Icon: r("WDSIconIcContentCopy.react"),
							disabled: j,
							label: o("WAWebBizBroadcastsHomeStrings").getDuplicateActionLabel(),
							onPress: function() {
								o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.duplicateBroadcastClicked(k, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER), $ == null || $();
							},
							testid: "business_broadcasts_details_duplicate_action_tile"
						}), Ee] }) : Ee
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
									o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.performanceExplainedClicked(k), v();
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
									o("WAWebBizBroadcastsHomeStrings").getLastUpdatedLabel(oe != null ? o("WAWebClock").Clock.lastUpdatedDateStr(oe / o("WAWebBroadcastConsts").MS_PER_SEC) : o("WAWebBusinessBroadcastHomeTableColumns.react").formatDate(D.sentAt)),
									" ",
									pe ? c.jsx("span", {
										className: "x3nfvp2 xxymvpz",
										children: c.jsx(r("WDSSpinner.react"), {
											size: 16,
											stroke: 3,
											xstyle: h.spinnerColor
										})
									}) : c.jsx(r("WAWebUnstyledButton.react"), {
										testid: "refresh-insights",
										onClick: he,
										children: c.jsx(r("WDSText.react"), {
											type: "Body2",
											colorName: "contentActionEmphasized",
											children: o("WAWebBizBroadcastsHomeStrings").getRefreshInsightsLabel()
										})
									})
								]
							})
						}),
						le && se !== o("WAWebBroadcastInsightStatus").InsightStatus.SENT ? c.jsx(o("WAWebFlex.react").FlexItem, {
							xstyle: h.lastUpdatedRow,
							children: c.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								children: o("WAWebBizBroadcastsHomeStrings").getInsightsUpdateExplainer()
							})
						}) : null,
						X > 0 && c.jsxs(c.Fragment, { children: [
							c.jsx(y, {
								icon: c.jsx(r("WDSIconIcGroup.react"), {}),
								label: o("WAWebBizBroadcastsHomeStrings").getDeliveredLabel(),
								onClick: function() {
									return B(!0);
								},
								value: X
							}),
							c.jsx(y, {
								deemphasized: ue ? ne.percentage === 0 : ne.count === 0,
								icon: c.jsx(r("WDSIconWdsIcRead.react"), {}),
								label: ue ? o("WAWebBizBroadcastsHomeStrings").getReadRateColumnHeader() : o("WAWebBizBroadcastsHomeStrings").getReadSublabel(),
								sublabel: ue ? o("WAWebBizBroadcastsHomeStrings").getReadSublabel() : void 0,
								value: ue ? ce : ne.count,
								valueSublabel: ue && ne.percentage !== 0 ? ne.count : void 0
							}),
							c.jsx(y, {
								deemphasized: ue ? re.percentage === 0 : re.count === 0,
								icon: c.jsx(r("WDSIconIcReply.react"), {}),
								label: ue ? o("WAWebBizBroadcastsHomeStrings").getReplyRateColumnHeader() : o("WAWebBizBroadcastsHomeStrings").getRepliesSublabel(),
								sublabel: ue ? o("WAWebBizBroadcastsHomeStrings").getRepliesSublabel() : void 0,
								value: ue ? de : re.count,
								valueSublabel: ue && re.percentage !== 0 ? re.count : void 0
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
						icon: Se.icon,
						label: le && D.status === o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT && se !== o("WAWebBroadcastInsightStatus").InsightStatus.SENT ? o("WAWebBizBroadcastsHomeStrings").getDeliveringStatusLabel() : Se.text,
						sublabel: (E = Se.sublabel) != null ? E : void 0
					}),
					c.jsx(C, {
						icon: c.jsx(r("WDSIconIcGroup.react"), {}),
						label: (function() {
							var e = D.audienceName;
							return e != null && e.trim() !== "" ? e : o("WAWebBizBroadcastsAudienceStrings").getUntitledListName();
						})(),
						sublabel: D.recipientCount == null || D.recipientCount === 0 ? "—" : o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(D.recipientCount)
					}),
					null,
					Re ? c.jsxs(c.Fragment, { children: [c.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: h.dividerWrapper,
						children: c.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
					}), c.jsx(C, {
						colorName: "secondaryNegative",
						icon: c.jsx(r("WDSIconIcDelete.react"), { colorName: "secondaryNegative" }),
						label: o("WAWebBizBroadcastsHomeStrings").getDeleteBroadcastLabel(),
						onClick: ve
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
