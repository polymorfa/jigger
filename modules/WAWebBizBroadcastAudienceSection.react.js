__d("WAWebBizBroadcastAudienceSection.react", [
	"WAWebAudienceExpressionTypes",
	"WAWebBizBroadcastAudienceSectionAudienceRow.react",
	"WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
	"WAWebBizBroadcastsAudienceUtils",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsNewBroadcastAddButton.react",
	"WAWebBizCard.react",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebChatGroupUtils",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"WDSBanner.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizBroadcastOverlappingRecipients",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e, t) {
		return e === o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD && !t;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(16), n = e.entryPoint, a = e.hasSelectedChats, i = e.isDuplicate, l = e.onExistingAudiences, u = e.onImportAudience, c = e.onOpenUpsertAudience, d = e.onSuggestedAudiencePress, m = e.selectedCardIds, _ = i === void 0 ? !1 : i;
		if (p(n, _)) return null;
		var f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences(), t[0] = f) : f = t[0];
		var g = f.length > 0, h;
		t[1] !== n || t[2] !== l || t[3] !== u || t[4] !== c || t[5] !== d || t[6] !== m ? (h = s.jsx(r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"), {
			entryPoint: n,
			onNewAudience: c,
			onImportAudience: u,
			onExistingAudiences: l,
			onSuggestedAudiencePress: d,
			selectedCardIds: m,
			showExistingAudienceRow: g,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT
		}), t[1] = n, t[2] = l, t[3] = u, t[4] = c, t[5] = d, t[6] = m, t[7] = h) : h = t[7];
		var y = h, C;
		t[8] !== a ? (C = a ? o("WAWebBizBroadcastsCreationStrings").getAddAudienceLabel() : o("WAWebBizBroadcastsCreationStrings").getChooseAudienceLabel(), t[8] = a, t[9] = C) : C = t[9];
		var b;
		t[10] !== n ? (b = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.addAudienceButtonClicked(n);
		}, t[10] = n, t[11] = b) : b = t[11];
		var v;
		return t[12] !== y || t[13] !== C || t[14] !== b ? (v = s.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
			buttonLabel: C,
			contextMenu: y,
			onButtonClick: b,
			testid: "biz-broadcast-creation-add-audience-button"
		}), t[12] = y, t[13] = C, t[14] = b, t[15] = v) : v = t[15], v;
	}
	function f(e) {
		var t, n, a = o("react-compiler-runtime").c(13), i = e.chat, l = e.entryPoint, u = e.handleDeleteAudience, c = e.handleEditAudience, d = e.isDuplicate, m = d === void 0 ? !1 : d, p;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (p = ["contact", "broadcastMetadata"], a[0] = p) : p = a[0];
		var _ = o("useWAWebModelValues").useModelValues(i, p), f;
		a[1] !== i ? (f = o("WAWebChatGroupUtils").getBroadcastChatTitle(i), a[1] = i, a[2] = f) : f = a[2];
		var g = f, h = (t = (n = _.broadcastMetadata) == null ? void 0 : n.recipients.length) != null ? t : 0, y;
		a[3] !== _.broadcastMetadata ? (y = o("WAWebAudienceExpressionTypes").isPredicateAudience({ broadcastMetadata: _.broadcastMetadata != null ? { audienceExpression: _.broadcastMetadata.audienceExpression } : null }), a[3] = _.broadcastMetadata, a[4] = y) : y = a[4];
		var C = y, b;
		return a[5] !== g || a[6] !== l || a[7] !== u || a[8] !== c || a[9] !== m || a[10] !== C || a[11] !== h ? (b = s.jsx(r("WAWebBizBroadcastAudienceSectionAudienceRow.react"), {
			audienceName: g,
			recipientCount: h,
			isPredicateExpression: C,
			entryPoint: l,
			handleDeleteAudience: u,
			handleEditAudience: c,
			isDuplicate: m
		}), a[5] = g, a[6] = l, a[7] = u, a[8] = c, a[9] = m, a[10] = C, a[11] = h, a[12] = b) : b = a[12], b;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(34), n = e.entryPoint, a = e.isDuplicate, i = e.onExistingAudiences, l = e.onImportAudience, u = e.onOpenUpsertAudience, c = e.onSuggestedAudiencePress, g = e.selectedCardIds, h = e.selectedChats, y = e.setSelectedChats, C = a === void 0 ? !1 : a, b = m(null), v = m(!1), S;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (S = function() {
			if (v.current) {
				var e = b.current;
				if (e != null && !e.contains(document.activeElement)) {
					v.current = !1;
					var t = e.querySelector("button, [tabindex=\"0\"]");
					t instanceof HTMLElement && t.focus();
				}
			}
		}, t[0] = S) : S = t[0], d(S, void 0);
		var R;
		t[1] !== y ? (R = function(t) {
			return function() {
				y(function(e) {
					var n = new Set(e);
					return n.delete(t), n;
				}), v.current = !0;
			};
		}, t[1] = y, t[2] = R) : R = t[2];
		var L = R, E;
		t[3] !== i ? (E = function() {
			v.current = !0, i == null || i();
		}, t[3] = i, t[4] = E) : E = t[4];
		var k = E, I = o("useWAWebBizBroadcastOverlappingRecipients").useWAWebBizBroadcastOverlappingRecipients(h), T;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x19aeb6u xh8yej3" }, t[5] = T) : T = t[5];
		var D;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (D = o("WAWebBizBroadcastsCreationStrings").getAudienceSectionTitle(), t[6] = D) : D = t[6];
		var x;
		t[7] !== n || t[8] !== C ? (x = p(n, C) ? null : o("WAWebBizBroadcastsCreationStrings").getAudienceSectionSubtitle(), t[7] = n, t[8] = C, t[9] = x) : x = t[9];
		var $ = h.size > 0, P;
		t[10] !== u ? (P = function() {
			return u(null);
		}, t[10] = u, t[11] = P) : P = t[11];
		var N;
		t[12] !== n || t[13] !== k || t[14] !== C || t[15] !== l || t[16] !== c || t[17] !== g || t[18] !== $ || t[19] !== P ? (N = s.jsx(_, {
			entryPoint: n,
			hasSelectedChats: $,
			isDuplicate: C,
			onOpenUpsertAudience: P,
			onImportAudience: l,
			onExistingAudiences: k,
			onSuggestedAudiencePress: c,
			selectedCardIds: g
		}), t[12] = n, t[13] = k, t[14] = C, t[15] = l, t[16] = c, t[17] = g, t[18] = $, t[19] = P, t[20] = N) : N = t[20];
		var M;
		t[21] !== n || t[22] !== L || t[23] !== C || t[24] !== u || t[25] !== h ? (M = h.size > 0 && s.jsx("div", {
			role: "list",
			"aria-label": o("WAWebBizBroadcastsCreationStrings").getSelectedAudiencesAriaLabel(),
			children: Array.from(h).map(function(e) {
				var t = function() {
					return u(e);
				};
				return s.jsx("div", {
					role: "listitem",
					"data-testid": "biz-broadcasts-audience-card",
					children: s.jsx(f, {
						handleEditAudience: t,
						chat: e,
						entryPoint: n,
						handleDeleteAudience: L(e),
						isDuplicate: C
					})
				}, e.id.toString());
			})
		}), t[21] = n, t[22] = L, t[23] = C, t[24] = u, t[25] = h, t[26] = M) : M = t[26];
		var w;
		t[27] !== I ? (w = I > 0 && s.jsx("div", {
			className: "x1380le5",
			children: s.jsx(r("WDSBanner.react"), {
				type: "warning",
				body: o("WAWebBizBroadcastsCreationStrings").getOverlappingRecipientsWarning(I),
				testid: "overlapping-recipients-banner"
			})
		}), t[27] = I, t[28] = w) : w = t[28];
		var A;
		return t[29] !== N || t[30] !== M || t[31] !== w || t[32] !== x ? (A = s.jsx("div", babelHelpers.extends({ ref: b }, T, { children: s.jsxs(r("WAWebBizCard.react"), {
			header: D,
			subtitle: x,
			children: [
				N,
				M,
				w
			]
		}) })), t[29] = N, t[30] = M, t[31] = w, t[32] = x, t[33] = A) : A = t[33], A;
	}
	l.default = g;
}), 98);
