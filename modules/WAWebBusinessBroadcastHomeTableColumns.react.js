__d("WAWebBusinessBroadcastHomeTableColumns.react", [
	"WAWebBizAdManagementThumbnail.react",
	"WAWebBizBroadcastCampaignPermissionUtils",
	"WAWebBizBroadcastDeleteConfirmationModalLoadable",
	"WAWebBizBroadcastHomeInsightStatus",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastConsts",
	"WAWebBroadcastHomeTypes",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebDefaultProfilePicture.react",
	"WAWebFlex.react",
	"WAWebL10nGetRenderedLocale",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebWamEnumSurfaceType",
	"WDSButton.react",
	"WDSIconIcCheckCircleFilled.react",
	"WDSIconIcDelete.react",
	"WDSIconIcEdit.react",
	"WDSIconIcErrorFilled.react",
	"WDSIconIcMoreVert.react",
	"WDSIconIcScheduleFilled.react",
	"WDSIconIcVisibility.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebCampaignMedia",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useRef, m = {
		actionsContainer: {
			alignItems: "xuk3077",
			paddingInlineEnd: "xyri2b",
			width: "xh8yej3",
			$$css: !0
		},
		broadcastThumbnail: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		rowContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		textContainer: {
			minWidth: "xeuugli",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		}
	}, p = { minWidth: 200 }, _ = { minWidth: 120 }, f = { minWidth: 100 }, g = { minWidth: 80 };
	function h(e) {
		var t = o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale().replace("_", "-");
		return new Intl.DateTimeFormat(t, {
			day: "numeric",
			hour: "numeric",
			hour12: !0,
			minute: "2-digit",
			month: "short"
		}).format(e);
	}
	var y = function(t) {
		return s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: t === 0 ? "contentDeemphasized" : "contentDefault",
			children: t === 0 ? "—" : o("WAWebBizBroadcastsHomeStrings").getPercentageLabel(t)
		});
	}, C = function(t) {
		return t === "PROCESSING" ? o("WAWebBizBroadcastsHomeStrings").getProcessingStatusLabel() : t === "SCHEDULED" ? o("WAWebBizBroadcastsHomeStrings").getScheduledTableStatusLabel() : t === "SENT" ? o("WAWebBizBroadcastsHomeStrings").getSentStatusLabel() : t === "FAILED" ? o("WAWebBizBroadcastsHomeStrings").getFailedTableStatusLabel() : t === "DRAFT" ? o("WAWebBizBroadcastsHomeStrings").getDraftStatusLabel() : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	};
	function b(e) {
		return e === "PROCESSING" ? {
			icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
				colorName: "secondaryWarning",
				height: 24,
				width: 24
			}),
			text: o("WAWebBizBroadcastsHomeStrings").getProcessingStatusLabel()
		} : e === "SCHEDULED" ? {
			icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
				colorName: "contentDeemphasized",
				height: 24,
				width: 24
			}),
			text: o("WAWebBizBroadcastsHomeStrings").getScheduledStatusLabel()
		} : e === "SENT" ? {
			icon: s.jsx(r("WDSIconIcCheckCircleFilled.react"), {
				colorName: "secondaryPositive",
				height: 24,
				width: 24
			}),
			text: o("WAWebBizBroadcastsHomeStrings").getSentStatusLabel()
		} : e === "FAILED" ? {
			icon: s.jsx(r("WDSIconIcErrorFilled.react"), {
				colorName: "secondaryNegative",
				height: 24,
				width: 24
			}),
			text: o("WAWebBizBroadcastsHomeStrings").getFailedStatusLabel()
		} : e === "DRAFT" ? {
			icon: s.jsx(r("WDSIconIcEdit.react"), {
				colorName: "contentDeemphasized",
				height: 24,
				width: 24
			}),
			text: o("WAWebBizBroadcastsHomeStrings").getDraftStatusLabel()
		} : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function v(e, t, n) {
		return e === "PROCESSING" ? {
			icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
				colorName: "secondaryWarning",
				height: 24,
				width: 24
			}),
			sublabel: o("WAWebBizBroadcastsHomeStrings").getProcessingStatusSublabel(),
			text: o("WAWebBizBroadcastsHomeStrings").getProcessingStatusLabel()
		} : e === "SCHEDULED" ? {
			icon: s.jsx(r("WDSIconIcScheduleFilled.react"), {
				colorName: "contentDeemphasized",
				height: 24,
				width: 24
			}),
			sublabel: n != null ? h(n) : null,
			text: o("WAWebBizBroadcastsHomeStrings").getScheduledStatusLabel()
		} : e === "SENT" ? {
			icon: s.jsx(r("WDSIconIcCheckCircleFilled.react"), {
				colorName: "secondaryPositive",
				height: 24,
				width: 24
			}),
			sublabel: o("WAWebBizBroadcastsHomeStrings").getCompletedStatusSublabel(h(t)),
			text: o("WAWebBizBroadcastsHomeStrings").getSentStatusLabel()
		} : e === "FAILED" ? {
			icon: s.jsx(r("WDSIconIcErrorFilled.react"), {
				colorName: "secondaryNegative",
				height: 24,
				width: 24
			}),
			sublabel: o("WAWebBizBroadcastsHomeStrings").getFailedStatusSublabel(),
			text: o("WAWebBizBroadcastsHomeStrings").getFailedStatusLabel()
		} : e === "DRAFT" ? {
			icon: s.jsx(r("WDSIconIcEdit.react"), {
				colorName: "contentDeemphasized",
				height: 24,
				width: 24
			}),
			sublabel: null,
			text: o("WAWebBizBroadcastsHomeStrings").getDraftStatusLabel()
		} : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function S(e, t) {
		switch (e.status) {
			case o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT: return {
				colorName: "contentDefault",
				label: o("WAWebBizBroadcastHomeInsightStatus").isBroadcastCompleted(e, t) ? o("WAWebBizBroadcastsHomeStrings").getSentStatusLabel() : o("WAWebBizBroadcastsHomeStrings").getDeliveringStatusLabel(),
				subLabel: o("WAWebBizBroadcastsHomeStrings").getCompletedStatusSublabel(h(e.sentAt))
			};
			case o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SCHEDULED: return {
				colorName: "contentDefault",
				label: o("WAWebBizBroadcastsHomeStrings").getScheduledTableStatusLabel(),
				subLabel: e.scheduledTimestamp != null ? o("WAWebBizBroadcastsHomeStrings").getScheduledForDateSublabel(h(e.scheduledTimestamp)) : null
			};
			case o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.FAILED: return {
				colorName: "secondaryNegative",
				label: o("WAWebBizBroadcastsHomeStrings").getFailedTableStatusLabel(),
				subLabel: null
			};
			default: return {
				colorName: "contentDefault",
				label: C(e.status),
				subLabel: null
			};
		}
	}
	function R(e, t, n, a) {
		var i;
		return [
			{
				cell: function(t) {
					var e, r;
					return t.item.campaignModelForLazyMedia != null ? s.jsx(x, {
						campaign: t.item.campaignModelForLazyMedia,
						item: t.item,
						rowIndex: t.rowIndex,
						showCreatedOn: n
					}) : s.jsx(D, {
						createdTimestamp: t.item.createdTimestamp,
						rowIndex: t.rowIndex,
						sentAt: t.item.sentAt,
						showCreatedOn: n,
						thumbnailUrl: (e = t.item.attachmentData) == null ? void 0 : e.previewUrl,
						title: t.item.messageBody !== "" ? t.item.messageBody : (r = t.item.campaignName) != null ? r : ""
					});
				},
				header: (i = o("WAWebBizBroadcastsHomeStrings")).getBroadcastColumnHeader(),
				key: "broadcast",
				width: {
					options: p,
					type: "proportional",
					value: 35
				}
			},
			{
				cell: function(t) {
					var e;
					return s.jsx("div", {
						className: "x193iq5w",
						"data-testid": "biz-broadcasts-campaign-table-audience-cell-" + t.rowIndex,
						children: s.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							maxLines: 1,
							children: (e = t.item.audienceName) != null ? e : ""
						})
					});
				},
				header: i.getAudienceColumnHeader(),
				key: "audience",
				width: {
					options: _,
					type: "proportional",
					value: 25
				}
			},
			{
				cell: function(a) {
					if (!n) {
						var e = C(a.item.status), i = a.item.status === o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.FAILED ? "secondaryNegative" : "contentDefault";
						return s.jsx("div", {
							className: "xzl6hoh",
							"data-testid": "biz-broadcasts-campaign-table-status-cell-" + a.rowIndex,
							children: s.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: i,
								maxLines: 1,
								children: e
							})
						});
					}
					var l = S(a.item, t), u = l.colorName, c = l.label, d = l.subLabel;
					return s.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: m.textContainer,
						testid: "biz-broadcasts-campaign-table-status-cell-" + a.rowIndex,
						children: [s.jsx("div", {
							className: "x193iq5w",
							children: s.jsx(r("WDSText.react"), {
								type: "Body1",
								colorName: u,
								maxLines: 1,
								children: c
							})
						}), d != null ? s.jsx("div", {
							className: "x193iq5w",
							children: s.jsx(r("WDSText.react"), {
								type: "Body2",
								colorName: "contentDeemphasized",
								maxLines: 1,
								children: d
							})
						}) : null]
					});
				},
				header: i.getStatusColumnHeader(),
				key: "status",
				width: {
					options: f,
					type: "proportional",
					value: 15
				}
			},
			{
				cell: function(r) {
					return s.jsx("div", {
						"data-testid": "biz-broadcasts-campaign-table-read-rate-cell-" + r.rowIndex,
						children: y(!n || o("WAWebBizBroadcastHomeInsightStatus").isBroadcastCompleted(r.item, t) ? r.item.readRate.percentage : 0)
					});
				},
				header: i.getReadRateColumnHeader(),
				key: "readRate",
				width: {
					options: g,
					type: "proportional",
					value: 10
				}
			},
			{
				cell: function(r) {
					return s.jsx("div", {
						"data-testid": "biz-broadcasts-campaign-table-reply-rate-cell-" + r.rowIndex,
						children: y(!n || o("WAWebBizBroadcastHomeInsightStatus").isBroadcastCompleted(r.item, t) ? r.item.replyRate.percentage : 0)
					});
				},
				header: i.getReplyRateColumnHeader(),
				key: "replyRate",
				width: {
					options: g,
					type: "proportional",
					value: 10
				}
			},
			{
				cell: function(n) {
					return s.jsx(E, {
						entryPoint: e,
						index: n.rowIndex,
						item: n.item,
						broadcastJid: n.item.broadcastJid,
						onPreview: a != null ? a : r("WAWebNoop")
					});
				},
				header: "",
				key: "actions",
				width: {
					options: {
						maxWidth: 60,
						minWidth: 40
					},
					type: "proportional",
					value: 5
				}
			}
		];
	}
	function L(e) {
		var t = o("react-compiler-runtime").c(11), n = e.index, a = e.onDelete, i = e.onPreview, l = e.showDelete, u = l === void 0 ? !0 : l, c = "biz-broadcasts-campaign-table-preview-action-" + n, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebBizBroadcastsHomeStrings").getPreviewActionLabel(), t[0] = d) : d = t[0];
		var m;
		t[1] !== i || t[2] !== c ? (m = s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcVisibility.react"),
			testid: c,
			title: d,
			onPress: i
		}), t[1] = i, t[2] = c, t[3] = m) : m = t[3];
		var p;
		t[4] !== n || t[5] !== a || t[6] !== u ? (p = u ? s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			testid: "biz-broadcasts-campaign-table-delete-action-" + n,
			title: o("WAWebBizBroadcastsHomeStrings").getDeleteActionLabel(),
			onPress: a,
			destructive: !0
		}) : null, t[4] = n, t[5] = a, t[6] = u, t[7] = p) : p = t[7];
		var _;
		return t[8] !== m || t[9] !== p ? (_ = s.jsxs(r("WDSMenu.react"), { children: [m, p] }), t[8] = m, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(26), n = e.broadcastJid, a = e.entryPoint, i = e.index, l = e.item, u = e.onPreview, c = d(null), p;
		t[0] !== a || t[1] !== l || t[2] !== u ? (p = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastPreviewClicked(a, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU), u(l);
		}, t[0] = a, t[1] = l, t[2] = u, t[3] = p) : p = t[3];
		var _ = p, f;
		t[4] !== n || t[5] !== a || t[6] !== l.campaignId ? (f = function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastDeleteConfirmationModalLoadable").WAWebBizBroadcastDeleteConfirmationModalLoadable, {
				broadcastJid: n,
				campaignId: l.campaignId,
				entryPoint: a,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME
			}));
		}, t[4] = n, t[5] = a, t[6] = l.campaignId, t[7] = f) : f = t[7];
		var g = f, h;
		t[8] !== l ? (h = o("WAWebBizBroadcastCampaignPermissionUtils").canEditBizBroadcastCampaign(l), t[8] = l, t[9] = h) : h = t[9];
		var y = h, C;
		t[10] !== g || t[11] !== _ || t[12] !== i || t[13] !== y ? (C = {
			dismissable: !0,
			enableUIM: !1,
			menu: s.jsx(L, {
				index: i,
				onDelete: g,
				onPreview: _,
				showDelete: y
			}),
			targetRef: c
		}, t[10] = g, t[11] = _, t[12] = i, t[13] = y, t[14] = C) : C = t[14];
		var b = r("useWDSMenu")(C), v = b.closeMenu, S = b.isMenuOpen, R = b.menuPortal, E = b.openMenu, k;
		t[15] !== v || t[16] !== a || t[17] !== S || t[18] !== E ? (k = function(t) {
			t.stopPropagation(), S ? v() : (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastItemOverflowClicked(a), E());
		}, t[15] = v, t[16] = a, t[17] = S, t[18] = E, t[19] = k) : k = t[19];
		var I = k, T = "biz-broadcasts-campaign-table-actions-button-" + i, D;
		t[20] !== I || t[21] !== T ? (D = s.jsx(r("WDSButton.react"), {
			ref: c,
			Icon: r("WDSIconIcMoreVert.react"),
			testid: T,
			variant: "borderless",
			size: "small",
			type: "default",
			onPress: I
		}), t[20] = I, t[21] = T, t[22] = D) : D = t[22];
		var x;
		return t[23] !== R || t[24] !== D ? (x = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.actionsContainer,
			children: [D, R]
		}), t[23] = R, t[24] = D, t[25] = x) : x = t[25], x;
	}
	function k(e, t) {
		return [
			{
				cell: function(t) {
					return s.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						gap: 12,
						xstyle: m.rowContainer,
						testid: "biz-broadcasts-audience-table-name-cell-" + t.rowIndex,
						children: [s.jsx(o("WAWebFlex.react").FlexItem, {
							shrink: 0,
							children: s.jsx(r("WAWebDefaultProfilePicture.react"), {
								type: "business-broadcast",
								size: o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE
							})
						}), s.jsx(o("WAWebFlex.react").FlexColumn, {
							xstyle: m.textContainer,
							children: s.jsx("div", {
								className: "x193iq5w",
								children: s.jsx(r("WDSText.react"), {
									type: "Body1",
									colorName: "contentDefault",
									maxLines: 1,
									children: t.item.name
								})
							})
						})]
					});
				},
				header: o("WAWebBizBroadcastsHomeStrings").getAudienceNameColumnHeader(),
				key: "name",
				width: {
					options: p,
					type: "proportional",
					value: 50
				}
			},
			{
				cell: function(t) {
					return s.jsx("div", {
						className: "x193iq5w",
						"data-testid": "biz-broadcasts-audience-table-recipients-cell-" + t.rowIndex,
						children: s.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: "contentDefault",
							maxLines: 1,
							children: t.item.recipientCount
						})
					});
				},
				header: o("WAWebBizBroadcastsHomeStrings").getRecipientsColumnHeader(),
				key: "recipients",
				width: {
					options: _,
					type: "proportional",
					value: 25
				}
			},
			{
				cell: function(t) {
					return s.jsx("div", {
						className: "x193iq5w",
						"data-testid": "biz-broadcasts-audience-table-last-broadcast-cell-" + t.rowIndex,
						children: s.jsx(r("WDSText.react"), {
							type: "Body1",
							colorName: t.item.lastBroadcastTimestamp != null ? "contentDefault" : "contentDeemphasized",
							maxLines: 1,
							children: t.item.lastBroadcastTimestamp != null ? h(t.item.lastBroadcastTimestamp) : "—"
						})
					});
				},
				header: o("WAWebBizBroadcastsHomeStrings").getLastBroadcastColumnHeader(),
				key: "lastBroadcast",
				width: {
					options: _,
					type: "proportional",
					value: 25
				}
			},
			{
				cell: function(o) {
					var n, a;
					return s.jsx(T, {
						entryPoint: e,
						index: o.rowIndex,
						item: o.item,
						onRename: (n = t == null ? void 0 : t.onRename) != null ? n : r("WAWebNoop"),
						onDelete: (a = t == null ? void 0 : t.onDelete) != null ? a : r("WAWebNoop")
					});
				},
				header: "",
				key: "actions",
				width: {
					options: {
						maxWidth: 60,
						minWidth: 40
					},
					type: "proportional",
					value: 5
				}
			}
		];
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(11), n = e.index, a = e.onDelete, i = e.onRename, l = "biz-broadcasts-audience-table-rename-action-" + n, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = o("WAWebBizBroadcastsHomeStrings").getRenameAudienceActionLabel(), t[0] = u) : u = t[0];
		var c;
		t[1] !== i || t[2] !== l ? (c = s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcEdit.react"),
			testid: l,
			title: u,
			onPress: i
		}), t[1] = i, t[2] = l, t[3] = c) : c = t[3];
		var d = "biz-broadcasts-audience-table-delete-action-" + n, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebBizBroadcastsHomeStrings").getDeleteAudienceLabel(), t[4] = m) : m = t[4];
		var p;
		t[5] !== a || t[6] !== d ? (p = s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			testid: d,
			title: m,
			onPress: a,
			destructive: !0
		}), t[5] = a, t[6] = d, t[7] = p) : p = t[7];
		var _;
		return t[8] !== c || t[9] !== p ? (_ = s.jsxs(r("WDSMenu.react"), { children: [c, p] }), t[8] = c, t[9] = p, t[10] = _) : _ = t[10], _;
	}
	function T(e) {
		var t = o("react-compiler-runtime").c(22), n = e.entryPoint, a = e.index, i = e.item, l = e.onDelete, u = e.onRename, c = d(null), p;
		t[0] !== n || t[1] !== i || t[2] !== u ? (p = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceClicked(n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME, i.broadcastJid), u(i);
		}, t[0] = n, t[1] = i, t[2] = u, t[3] = p) : p = t[3];
		var _ = p, f;
		t[4] !== n || t[5] !== i || t[6] !== l ? (f = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME, i.broadcastJid), l(i);
		}, t[4] = n, t[5] = i, t[6] = l, t[7] = f) : f = t[7];
		var g = f, h;
		t[8] !== g || t[9] !== _ || t[10] !== a ? (h = {
			dismissable: !0,
			enableUIM: !1,
			menu: s.jsx(I, {
				index: a,
				onRename: _,
				onDelete: g
			}),
			targetRef: c
		}, t[8] = g, t[9] = _, t[10] = a, t[11] = h) : h = t[11];
		var y = r("useWDSMenu")(h), C = y.closeMenu, b = y.isMenuOpen, v = y.menuPortal, S = y.openMenu, R;
		t[12] !== C || t[13] !== b || t[14] !== S ? (R = function(t) {
			t.stopPropagation(), b ? C() : S();
		}, t[12] = C, t[13] = b, t[14] = S, t[15] = R) : R = t[15];
		var L = R, E = "biz-broadcasts-audience-table-actions-button-" + a, k;
		t[16] !== L || t[17] !== E ? (k = s.jsx(r("WDSButton.react"), {
			ref: c,
			Icon: r("WDSIconIcMoreVert.react"),
			testid: E,
			variant: "borderless",
			size: "small",
			type: "default",
			onPress: L
		}), t[16] = L, t[17] = E, t[18] = k) : k = t[18];
		var T;
		return t[19] !== v || t[20] !== k ? (T = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.actionsContainer,
			children: [k, v]
		}), t[19] = v, t[20] = k, t[21] = T) : T = t[21], T;
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(23), n = e.createdTimestamp, a = e.rowIndex, i = e.sentAt, l = e.showCreatedOn, u = e.thumbnailUrl, c = e.title, d;
		t[0] !== n || t[1] !== l || t[2] !== c ? (d = l ? o("WAWebBizBroadcastsHomeStrings").getCreatedDateText(h(n)) : c, t[0] = n, t[1] = l, t[2] = c, t[3] = d) : d = t[3];
		var p = d, _;
		t[4] !== i || t[5] !== l || t[6] !== c ? (_ = l ? c : o("WAWebBizBroadcastsHomeStrings").getSentDateText(h(i)), t[4] = i, t[5] = l, t[6] = c, t[7] = _) : _ = t[7];
		var f = _, g = "biz-broadcasts-campaign-table-broadcast-cell-" + a, y;
		t[8] !== u ? (y = s.jsx(o("WAWebFlex.react").FlexItem, {
			shrink: 0,
			children: s.jsx(r("WAWebBizAdManagementThumbnail.react"), {
				thumbnailUrl: u,
				boostingStatus: null,
				size: o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE,
				thumbnailXStyle: m.broadcastThumbnail
			})
		}), t[8] = u, t[9] = y) : y = t[9];
		var C;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x193iq5w" }, t[10] = C) : C = t[10];
		var b;
		t[11] !== p ? (b = s.jsx("div", babelHelpers.extends({}, C, { children: s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			maxLines: 1,
			children: p
		}) })), t[11] = p, t[12] = b) : b = t[12];
		var v;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x193iq5w" }, t[13] = v) : v = t[13];
		var S;
		t[14] !== f ? (S = s.jsx("div", babelHelpers.extends({}, v, { children: s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			maxLines: 1,
			children: f
		}) })), t[14] = f, t[15] = S) : S = t[15];
		var R;
		t[16] !== b || t[17] !== S ? (R = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: m.textContainer,
			children: [b, S]
		}), t[16] = b, t[17] = S, t[18] = R) : R = t[18];
		var L;
		return t[19] !== g || t[20] !== y || t[21] !== R ? (L = s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 12,
			align: "center",
			xstyle: m.rowContainer,
			testid: g,
			children: [y, R]
		}), t[19] = g, t[20] = y, t[21] = R, t[22] = L) : L = t[22], L;
	}
	function x(e) {
		var t, n, a, i = o("react-compiler-runtime").c(7), l = e.campaign, u = e.item, c = e.rowIndex, d = e.showCreatedOn, m = r("useWAWebCampaignMedia")(l), p = (t = m.thumbnailUrl) != null ? t : (n = u.attachmentData) == null ? void 0 : n.previewUrl, _ = (a = u.campaignName) != null ? a : "";
		m.messageBody != null && m.messageBody !== "" ? _ = m.messageBody : u.messageBody !== "" && (_ = u.messageBody);
		var f;
		return i[0] !== u.createdTimestamp || i[1] !== u.sentAt || i[2] !== c || i[3] !== d || i[4] !== p || i[5] !== _ ? (f = s.jsx(D, {
			createdTimestamp: u.createdTimestamp,
			rowIndex: c,
			sentAt: u.sentAt,
			showCreatedOn: d,
			thumbnailUrl: p,
			title: _
		}), i[0] = u.createdTimestamp, i[1] = u.sentAt, i[2] = c, i[3] = d, i[4] = p, i[5] = _, i[6] = f) : f = i[6], f;
	}
	l.formatDate = h, l.getStatusDisplay = b, l.getStatusDetailDisplay = v, l.getBroadcastColumns = R, l.getAudienceColumns = k;
}), 98);
