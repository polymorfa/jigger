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
		var t = e.index, n = e.onDelete, a = e.onPreview, i = e.showDelete, l = i === void 0 ? !0 : i;
		return s.jsxs(r("WDSMenu.react"), { children: [s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcVisibility.react"),
			testid: "biz-broadcasts-campaign-table-preview-action-" + t,
			title: o("WAWebBizBroadcastsHomeStrings").getPreviewActionLabel(),
			onPress: a
		}), l ? s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			testid: "biz-broadcasts-campaign-table-delete-action-" + t,
			title: o("WAWebBizBroadcastsHomeStrings").getDeleteActionLabel(),
			onPress: n,
			destructive: !0
		}) : null] });
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(e) {
		var t = e.broadcastJid, n = e.entryPoint, a = e.index, i = e.item, l = e.onPreview, u = d(null), p = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastPreviewClicked(n, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.OVERFLOW_MENU), l(i);
		}, [
			n,
			l,
			i
		]), _ = c(function() {
			o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBizBroadcastDeleteConfirmationModalLoadable").WAWebBizBroadcastDeleteConfirmationModalLoadable, {
				broadcastJid: t,
				campaignId: i.campaignId,
				entryPoint: n,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME
			}));
		}, [
			t,
			n,
			i.campaignId
		]), f = o("WAWebBizBroadcastCampaignPermissionUtils").canEditBizBroadcastCampaign(i), g = r("useWDSMenu")({
			dismissable: !0,
			enableUIM: !1,
			menu: s.jsx(L, {
				index: a,
				onDelete: _,
				onPreview: p,
				showDelete: f
			}),
			targetRef: u
		}), h = g.closeMenu, y = g.isMenuOpen, C = g.menuPortal, b = g.openMenu, v = c(function(e) {
			e.stopPropagation(), y ? h() : (o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.broadcastItemOverflowClicked(n), b());
		}, [
			n,
			y,
			h,
			b
		]);
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.actionsContainer,
			children: [s.jsx(r("WDSButton.react"), {
				ref: u,
				Icon: r("WDSIconIcMoreVert.react"),
				testid: "biz-broadcasts-campaign-table-actions-button-" + a,
				variant: "borderless",
				size: "small",
				type: "default",
				onPress: v
			}), C]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]";
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
		var t = e.index, n = e.onDelete, a = e.onRename;
		return s.jsxs(r("WDSMenu.react"), { children: [s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcEdit.react"),
			testid: "biz-broadcasts-audience-table-rename-action-" + t,
			title: o("WAWebBizBroadcastsHomeStrings").getRenameAudienceActionLabel(),
			onPress: a
		}), s.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			testid: "biz-broadcasts-audience-table-delete-action-" + t,
			title: o("WAWebBizBroadcastsHomeStrings").getDeleteAudienceLabel(),
			onPress: n,
			destructive: !0
		})] });
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = e.entryPoint, n = e.index, a = e.item, i = e.onDelete, l = e.onRename, u = d(null), p = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceClicked(t, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME, a.broadcastJid), l(a);
		}, [
			t,
			l,
			a
		]), _ = c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.deleteAudienceClicked(t, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_HOME, a.broadcastJid), i(a);
		}, [
			t,
			i,
			a
		]), f = r("useWDSMenu")({
			dismissable: !0,
			enableUIM: !1,
			menu: s.jsx(I, {
				index: n,
				onRename: p,
				onDelete: _
			}),
			targetRef: u
		}), g = f.closeMenu, h = f.isMenuOpen, y = f.menuPortal, C = f.openMenu, b = c(function(e) {
			e.stopPropagation(), h ? g() : C();
		}, [
			h,
			g,
			C
		]);
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: m.actionsContainer,
			children: [s.jsx(r("WDSButton.react"), {
				ref: u,
				Icon: r("WDSIconIcMoreVert.react"),
				testid: "biz-broadcasts-audience-table-actions-button-" + n,
				variant: "borderless",
				size: "small",
				type: "default",
				onPress: b
			}), y]
		});
	}
	T.displayName = T.name + " [from " + i.id + "]";
	function D(e) {
		var t = e.createdTimestamp, n = e.rowIndex, a = e.sentAt, i = e.showCreatedOn, l = e.thumbnailUrl, u = e.title, c = i ? o("WAWebBizBroadcastsHomeStrings").getCreatedDateText(h(t)) : u, d = i ? u : o("WAWebBizBroadcastsHomeStrings").getSentDateText(h(a));
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			gap: 12,
			align: "center",
			xstyle: m.rowContainer,
			testid: "biz-broadcasts-campaign-table-broadcast-cell-" + n,
			children: [s.jsx(o("WAWebFlex.react").FlexItem, {
				shrink: 0,
				children: s.jsx(r("WAWebBizAdManagementThumbnail.react"), {
					thumbnailUrl: l,
					boostingStatus: null,
					size: o("WAWebBroadcastConsts").DEFAULT_PROFILE_PICTURE_SIZE,
					thumbnailXStyle: m.broadcastThumbnail
				})
			}), s.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: m.textContainer,
				children: [s.jsx("div", {
					className: "x193iq5w",
					children: s.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						maxLines: 1,
						children: c
					})
				}), s.jsx("div", {
					className: "x193iq5w",
					children: s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						maxLines: 1,
						children: d
					})
				})]
			})]
		});
	}
	D.displayName = D.name + " [from " + i.id + "]";
	function x(e) {
		var t, n, o, a = e.campaign, i = e.item, l = e.rowIndex, u = e.showCreatedOn, c = r("useWAWebCampaignMedia")(a), d = (t = c.thumbnailUrl) != null ? t : (n = i.attachmentData) == null ? void 0 : n.previewUrl, m = (o = i.campaignName) != null ? o : "";
		return c.messageBody != null && c.messageBody !== "" ? m = c.messageBody : i.messageBody !== "" && (m = i.messageBody), s.jsx(D, {
			createdTimestamp: i.createdTimestamp,
			rowIndex: l,
			sentAt: i.sentAt,
			showCreatedOn: u,
			thumbnailUrl: d,
			title: m
		});
	}
	x.displayName = x.name + " [from " + i.id + "]", l.formatDate = h, l.getStatusDisplay = b, l.getStatusDetailDisplay = v, l.getBroadcastColumns = R, l.getAudienceColumns = k;
}), 98);
