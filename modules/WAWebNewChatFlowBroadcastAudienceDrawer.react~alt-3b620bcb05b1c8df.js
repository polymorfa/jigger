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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(12), n = e.icon, a = e.label, i = e.onClick, l = e.testid, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (u = (s || (s = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, f.pinnedItem), t[0] = u) : u = t[0];
		var d;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (d = { className: "x6s0dn4 x3l9nec x1c9tyrk xeusxvb x1pahc9y x1ertn4p x78zum5 x112a4uq xl56j7k x15jighw" }, t[1] = d) : d = t[1];
		var m;
		t[2] !== n ? (m = c.jsx("div", babelHelpers.extends({}, d, { children: n })), t[2] = n, t[3] = m) : m = t[3];
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = [_.paddingInlineStart13], t[4] = p) : p = t[4];
		var g;
		t[5] !== a ? (g = c.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: a
		}), t[5] = a, t[6] = g) : g = t[6];
		var h;
		return t[7] !== i || t[8] !== m || t[9] !== g || t[10] !== l ? (h = c.jsx("div", babelHelpers.extends({}, u, { children: c.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: i,
			testid: l,
			detailLeft: m,
			detailLeftXStyle: p,
			primary: g
		}) })), t[7] = i, t[8] = m, t[9] = g, t[10] = l, t[11] = h) : h = t[11], h;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(16), n = e.audience, a = e.onSelect, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.newChatFlowAudienceListItemClicked(n.broadcastJid), a(n);
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, u;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (u = (s || (s = r("stylex"))).props(o("WDSFlex.stylex").wdsFlex.flex, f.audienceItem), t[3] = u) : u = t[3];
		var d, m;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx(r("WAWebDefaultProfilePicture.react"), {
			type: "business-broadcast",
			size: 48
		}), m = [_.paddingInlineStart13], t[4] = d, t[5] = m) : (d = t[4], m = t[5]);
		var p;
		t[6] !== n.name ? (p = c.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			children: n.name
		}), t[6] = n.name, t[7] = p) : p = t[7];
		var g;
		t[8] !== n.recipientCount ? (g = o("WAWebBizBroadcastsCreationStrings").getExistingAudienceRecipientsLabel(n.recipientCount), t[8] = n.recipientCount, t[9] = g) : g = t[9];
		var h;
		t[10] !== g ? (h = c.jsx(r("WDSText.react"), {
			type: "Body3",
			colorName: "contentDeemphasized",
			children: g
		}), t[10] = g, t[11] = h) : h = t[11];
		var y;
		return t[12] !== l || t[13] !== p || t[14] !== h ? (y = c.jsx("div", babelHelpers.extends({}, u, { children: c.jsx(r("WAWebCellV2.react"), {
			size: "medium",
			material: !0,
			onClick: l,
			testid: "audience-item",
			detailLeft: d,
			detailLeftXStyle: m,
			primary: p,
			secondary: h
		}) })), t[12] = l, t[13] = p, t[14] = h, t[15] = y) : y = t[15], y;
	}
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
		var n = o("react-compiler-runtime").c(38), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.audiences, u = l.onBack, d = l.onCancel, p = l.onCreateAudience, _ = l.onImportAudience, f = l.onSelectAudience, C = l.onSuggestedCardPress, v = l.suggestedAudiencesEnabled, S = l.viewType, R, L;
		n[3] !== u ? (R = function() {
			o("WAWebBizBroadcastTos").isBizBroadcastTosAccepted() || o("WAWebModalManager").ModalManager.openSupportModal(c.jsx(r("WAWebBizBroadcastTosModal.react"), {
				entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME,
				onAccept: b,
				onDismiss: function() {
					o("WAWebModalManager").ModalManager.closeSupportOrModal(), u();
				}
			}));
		}, L = [u], n[3] = u, n[4] = R, n[5] = L) : (R = n[4], L = n[5]), m(R, L);
		var E = S === r("WAWebDrawerViewType").FLYOUT ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL, k;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebBizBroadcastsCreationStrings").getCreateBroadcastDrawerTitle(), n[6] = k) : k = n[6];
		var I = S === r("WAWebDrawerViewType").FLYOUT ? void 0 : u, T;
		n[7] !== E || n[8] !== d || n[9] !== I ? (T = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: k,
			type: E,
			onBack: I,
			onCancel: d
		}), n[7] = E, n[8] = d, n[9] = I, n[10] = T) : T = n[10];
		var D;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x1xrf6ya xde1mab xscbp6u x1iw51ew" }, n[11] = D) : D = n[11];
		var x, $;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(r("WDSIconIcAdd.react"), { colorName: "contentInverse" }), $ = o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(), n[12] = x, n[13] = $) : (x = n[12], $ = n[13]);
		var P;
		n[14] !== p ? (P = c.jsx(g, {
			icon: x,
			label: $,
			onClick: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), p();
			},
			testid: "create-audience-button"
		}), n[14] = p, n[15] = P) : P = n[15];
		var N, M;
		n[16] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(r("WDSIconIcUpload.react"), { colorName: "contentInverse" }), M = o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(), n[16] = N, n[17] = M) : (N = n[16], M = n[17]);
		var w;
		n[18] !== _ ? (w = c.jsx(g, {
			icon: N,
			label: M,
			onClick: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHAT_HOME, o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHATLIST), _();
			},
			testid: "import-audience-button"
		}), n[18] = _, n[19] = w) : w = n[19];
		var A;
		n[20] !== w || n[21] !== P ? (A = c.jsxs("div", babelHelpers.extends({}, D, { children: [P, w] })), n[20] = w, n[21] = P, n[22] = A) : A = n[22];
		var F;
		n[23] !== C || n[24] !== v ? (F = v === !0 && C != null && c.jsx(y, { onCardPress: C }), n[23] = C, n[24] = v, n[25] = F) : F = n[25];
		var O;
		n[26] !== s || n[27] !== f ? (O = s.length > 0 && c.jsxs(c.Fragment, { children: [c.jsx("div", {
			className: "x16ovd2e x12xbjc7 x1iw51ew xde1mab",
			children: c.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentDeemphasized",
				children: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel()
			})
		}), s.map(function(e) {
			return c.jsx(h, {
				audience: e,
				onSelect: f
			}, e.broadcastJid);
		})] }), n[26] = s, n[27] = f, n[28] = O) : O = n[28];
		var B;
		n[29] !== A || n[30] !== F || n[31] !== O ? (B = c.jsxs(r("WAWebDrawerBody.react"), { children: [
			A,
			F,
			O
		] }), n[29] = A, n[30] = F, n[31] = O, n[32] = B) : B = n[32];
		var W;
		return n[33] !== i || n[34] !== B || n[35] !== T || n[36] !== S ? (W = c.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			testid: "new-broadcast-audience-drawer",
			viewType: S,
			children: [T, B]
		}), n[33] = i, n[34] = B, n[35] = T, n[36] = S, n[37] = W) : W = n[37], W;
	}
	function b() {
		o("WAWebModalManager").ModalManager.closeSupportOrModal();
	}
	l.default = C;
}), 98);
