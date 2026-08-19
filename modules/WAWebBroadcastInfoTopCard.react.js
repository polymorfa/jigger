__d("WAWebBroadcastInfoTopCard.react", [
	"fbt",
	"WAWebAudienceExpressionTypes",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsHomeStrings",
	"WAWebBroadcastListAction",
	"WAWebBusinessBroadcastInlineEditableText.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebClock",
	"WAWebCopyPasteSelectable.react",
	"WAWebDrawerSection.react",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumSurfaceType",
	"WAWebWidToJid",
	"WDSActionTile.react",
	"WDSActionTileGroup.react",
	"WDSIconIcPersonAdd.react",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSIconWdsIcBroadcastMessageFill.react",
	"react",
	"useWAWebForceUpdate",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = {
		broadcastIcon: {
			color: "xhslqc4",
			height: "x39lw6i",
			width: "xycev2y",
			$$css: !0
		},
		broadcastIconSvg: {
			height: "x5yr21d",
			width: "xh8yej3",
			$$css: !0
		},
		editNameInput: {
			fontSize: "xngnso2",
			$$css: !0
		},
		measureSpan: {
			fontSize: "xngnso2",
			$$css: !0
		},
		topCardContainer: {
			paddingBottom: "x18d9i69",
			$$css: !0
		}
	};
	function m(e) {
		"use no forget";
		var t, n, a = e.chat, i = e.entryPoint, l = e.onAudienceUpdate, m = e.onEditAudience, p = e.onNewBroadcast, _ = (t = a.groupMetadata) == null ? void 0 : t.participants, f = o("useWAWebModelValues").useModelValues(a.contact, ["name"]), g = o("useWAWebForceUpdate").useForceUpdateDONOTUSE();
		o("useWAWebListener").useListener(_, "add remove reset", g);
		var h = o("WAWebWidToJid").widToBroadcastJid(a.id), y = c(function(e) {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.undoRenameAudienceClicked(i, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, h), h != null && o("WAWebBroadcastListAction").renameBroadcastListAction(h, e).then(function() {
				l == null || l();
			}).catch(r("WAWebNoop"));
		}, [
			h,
			i,
			l
		]), C = c(function(e) {
			var t;
			if (h != null) {
				var n = (t = f.name) != null ? t : "";
				return o("WAWebBroadcastListAction").renameBroadcastListAction(h, e).then(function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceResult(i, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, h, "success"), l == null || l(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
						msg: o("WAWebBizBroadcastsHomeStrings").getAudienceRenamedToastMessage(),
						action: {
							actionText: r("WAWebFbtCommon")("Undo"),
							onAction: function() {
								return y(n);
							}
						}
					}));
				}).catch(function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.renameAudienceResult(i, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, h, "failure"), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebBizBroadcastsHomeStrings").getAudienceRenameFailedToastMessage() }));
				});
			}
		}, [
			h,
			f.name,
			i,
			y,
			l
		]), b = function() {
			var e = a.t;
			return e != null ? o("WAWebClock").Clock.broadcastCreatedStr(e).toString() : s._(
				/*BTDS*/
				""
			).toString();
		}, v = f.name != null && f.name.trim() !== "" ? f.name : o("WAWebBizBroadcastsAudienceStrings").getUntitledListName(), S = o("WAWebAudienceExpressionTypes").isPredicateAudience({ broadcastMetadata: a.broadcastMetadata != null ? { audienceExpression: a.broadcastMetadata.audienceExpression } : null }), R = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.audienceInfoDrawerEditRecipientsClicked(i, h), m == null || m();
		}, L = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newBroadcastTileClicked(i, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER, h), p == null || p();
		}, E = u.jsx("div", {
			className: "xw7yly9 xh8yej3",
			children: u.jsxs(r("WDSActionTileGroup.react"), { children: [u.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconIcPersonAdd.react"),
				disabled: S,
				label: o("WAWebBizBroadcastsHomeStrings").getEditRecipientsLabel(),
				onPress: R,
				testid: "business_broadcasts_audience_edit_recipients_action_tile",
				tooltip: o("WAWebBizBroadcastsHomeStrings").getEditAudienceOnPhoneLabel()
			}), u.jsx(r("WDSActionTile.react"), {
				Icon: r("WDSIconWdsIcBroadcastMessage.react"),
				label: o("WAWebBizBroadcastsCreationStrings").getNewBroadcastButtonLabel(),
				onPress: L,
				testid: "business_broadcasts_audience_new_broadcast_action_tile"
			})] })
		});
		return u.jsxs(r("WAWebDrawerSection.react"), {
			theme: "padding-large",
			xstyle: d.topCardContainer,
			children: [u.jsx("div", {
				className: "x78zum5 xl56j7k xieb3on",
				children: u.jsx("div", {
					className: "x6s0dn4 x1od0jb8 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x1wkxgih xl56j7k x6ikm8r x10wlt62 xygnafs",
					children: u.jsx(r("WDSIconWdsIcBroadcastMessageFill.react"), {
						xstyle: d.broadcastIcon,
						iconXstyle: d.broadcastIconSvg,
						"aria-hidden": !0
					})
				})
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					u.jsx(r("WAWebBusinessBroadcastInlineEditableText.react"), {
						disabled: S,
						value: (n = f.name) != null ? n : "",
						onSave: C,
						displayText: v,
						inputTestId: "broadcast-name-input",
						inputXstyle: d.editNameInput,
						measureXstyle: d.measureSpan
					}),
					u.jsx("div", {
						className: "x1evy7pa x7r5mf7",
						children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
							dir: "auto",
							selectable: !0,
							children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
								size: "16",
								color: "secondary",
								children: b()
							})
						})
					}),
					S && u.jsx("div", {
						className: "x1evy7pa x7r5mf7",
						children: u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
							dir: "auto",
							selectable: !0,
							children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
								size: "16",
								color: "secondary",
								children: o("WAWebBizBroadcastsHomeStrings").getEditAudienceOnPhoneLabel()
							})
						})
					}),
					E
				]
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
