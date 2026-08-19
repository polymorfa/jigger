__d("WAWebNewChatFlowBroadcastAudienceDrawer.react", [
	"WAWebAudienceResolver",
	"WAWebBizBroadcastTos",
	"WAWebBizBroadcastTosModal.react",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebCellV2.react",
	"WAWebDefaultProfilePicture.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerViewType",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebSuggestedAudienceCards",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSFlex.stylex",
	"WDSIconIcAdd.react",
	"WDSIconIcUpload.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["ref"], s, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = { paddingInlineStart13: {
		paddingInlineStart: "xbmws1g",
		$$css: !0
	} }, f = {
		audienceItem: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		pinnedItem: {
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		},
		suggestedIconWrapper: {
			backgroundColor: "x1h3rtpe",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			height: "xsdox4t",
			width: "x1useyqa",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.icon, n = e.label, a = e.onClick, i = e.testid;
		return c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, f.pinnedItem), { children: c.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: a,
			testid: i,
			detailLeft: c.jsx("div", {
				className: "x6s0dn4 x3l9nec x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x112a4uq xl56j7k x15jighw",
				children: t
			}),
			detailLeftXStyle: [_.paddingInlineStart13],
			primary: c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: n
			})
		}) }));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.audience, n = e.onSelect, a = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatFlowAudienceListItemClicked(t.broadcastJid), n(t);
		};
		return c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, f.audienceItem), { children: c.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: a,
			testid: "audience-item",
			detailLeft: c.jsx(r("WAWebDefaultProfilePicture.react"), {
				type: "business-broadcast",
				size: 48
			}),
			detailLeftXStyle: [_.paddingInlineStart13],
			primary: c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDefault",
				children: t.name
			}),
			secondary: c.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(t.recipientCount)
			})
		}) }));
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.onCardPress, n = p(null), a = n[0], i = n[1];
		if (m(function() {
			var e = !1;
			return (async function() {
				var t = await Promise.all(o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(async function(t) {
					var n = null;
					try {
						var r = await o("WAWebSuggestedAudienceCards").resolveCardExpression(t);
						n = r.predicateType;
						var a = await o("WAWebAudienceResolver").resolveAudienceExpression(r), i = a.length, l = i >= o("WAWebBizBroadcastsRecipientUtils").MIN_RECIPIENTS && i <= o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit();
						return {
							count: i,
							eligible: l,
							id: t.id
						};
					} catch (r) {
						return e || o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardError(t.id, n, o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), {
							count: 0,
							eligible: !1,
							id: t.id
						};
					}
				}));
				if (!e) {
					var n = new Map();
					for (var r of t) r.eligible && n.set(r.id, r.count);
					i(n), n.size > 0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(n.size, o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST);
				}
			})(), function() {
				e = !0;
			};
		}, []), a == null || a.size === 0) return null;
		var l = o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.filter(function(e) {
			return a.has(e.id);
		});
		return c.jsxs(c.Fragment, { children: [c.jsx("div", {
			className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
			children: c.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudiencesSectionTitle()
			})
		}), l.map(function(e) {
			var n, i = (n = a.get(e.id)) != null ? n : 0, l = e.id === "active_chats" || e.id === "inactive_chats", u = o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudienceCardSubtitle(i, l ? o("WAWebBizBroadcastsAudienceStrings").getDurationLabelForDays(30) : void 0), d = e.icon;
			return c.jsx("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, f.audienceItem), { children: c.jsx(r("WAWebCellV2.react"), {
				size: "medium",
				material: !0,
				onClick: function() {
					return t(e);
				},
				testid: "suggested-audience-item-" + e.id,
				detailLeft: c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: f.suggestedIconWrapper,
					children: c.jsx(d, { colorName: "contentInverse" })
				}),
				detailLeftXStyle: [_.paddingInlineStart13],
				primary: c.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: e.title()
				}),
				secondary: c.jsx(r("WDSText.react"), {
					type: "Body3",
					colorName: "contentDeemphasized",
					children: u
				})
			}) }), e.id);
		})] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.audiences, l = a.onBack, s = a.onCancel, u = a.onCreateAudience, d = a.onImportAudience, p = a.onSelectAudience, _ = a.onSuggestedCardPress, f = a.suggestedAudiencesEnabled, C = a.viewType;
		m(function() {
			o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() || o("WAWebModalManager").ModalManager.openSupportModal(c.jsx(r("WAWebBizBroadcastTosModal.react"), {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onAccept: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal();
				},
				onDismiss: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal(), l();
				}
			}));
		}, [l]);
		var b = C === r("WAWebDrawerViewType").FLYOUT ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "new-broadcast-audience-drawer",
			viewType: C,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(),
				type: b,
				onBack: C === r("WAWebDrawerViewType").FLYOUT ? void 0 : l,
				onCancel: s
			}), c.jsxs(r("WAWebDrawerBody.react"), { children: [
				c.jsxs("div", {
					className: "x1xrf6ya xde1mab xscbp6u x1iw51ew",
					children: [c.jsx(g, {
						icon: c.jsx(r("WDSIconIcAdd.react"), { colorName: "contentInverse" }),
						label: o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(),
						onClick: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), u();
						},
						testid: "create-audience-button"
					}), c.jsx(g, {
						icon: c.jsx(r("WDSIconIcUpload.react"), { colorName: "contentInverse" }),
						label: o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(),
						onClick: function() {
							o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), d();
						},
						testid: "import-audience-button"
					})]
				}),
				f === !0 && _ != null && c.jsx(y, { onCardPress: _ }),
				i.length > 0 && c.jsxs(c.Fragment, { children: [c.jsx("div", {
					className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
					children: c.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDeemphasized",
						children: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel()
					})
				}), i.map(function(e) {
					return c.jsx(h, {
						audience: e,
						onSelect: p
					}, e.broadcastJid);
				})] })
			] })]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 98);
