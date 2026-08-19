__d("WAWebBizBroadcastAudienceSectionButtonContextMenu.react", [
	"WAWebAudienceResolver",
	"WAWebBizBroadcastRecipientLimitCommon",
	"WAWebBizBroadcastsAudienceStrings",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebSuggestedAudienceCards",
	"WDSIconIcAdd.react",
	"WDSIconIcGroup.react",
	"WDSIconIcUpload.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(39), n = e.entryPoint, a = e.onExistingAudiences, i = e.onImportAudience, l = e.onNewAudience, u = e.onSuggestedAudiencePress, c = e.selectedCardIds, p = e.showExistingAudienceRow, f = e.surface, g, h;
		t[0] !== n || t[1] !== p ? (g = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuViewed(p, n);
		}, h = [p, n], t[0] = n, t[1] = p, t[2] = g, t[3] = h) : (g = t[2], h = t[3]), d(g, h);
		var y = m(null), C = y[0], b = y[1], v = u != null, S, R;
		t[4] !== n || t[5] !== v || t[6] !== f ? (S = function() {
			if (v) {
				var e = !1;
				return (async function() {
					var t = await Promise.all(o("WAWebSuggestedAudienceCards").SUGGESTED_AUDIENCE_CARDS.map(_));
					if (!e) {
						var r = o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit(), a = t.filter(function(e) {
							var t = e.count;
							return t >= o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS && t <= r;
						});
						b(a), a.length > 0 && o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.suggestedAudienceCardsViewed(a.length, n, f);
					}
				})(), (function() {
					e = !0;
				});
			}
		}, R = [
			v,
			n,
			f
		], t[4] = n, t[5] = v, t[6] = f, t[7] = S, t[8] = R) : (S = t[7], R = t[8]), d(S, R);
		var L;
		if (t[9] !== n || t[10] !== a || t[11] !== i || t[12] !== l || t[13] !== u || t[14] !== C || t[15] !== c || t[16] !== p || t[17] !== f) {
			var E = C == null ? void 0 : C.filter(function(e) {
				var t = e.card;
				return c == null || !c.has(t.id);
			}), k;
			t[19] !== n || t[20] !== a ? (k = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createBroadcastAudienceMenuExistingAudiencesClicked(n), a == null || a();
			}, t[19] = n, t[20] = a, t[21] = k) : k = t[21];
			var I = k, T;
			t[22] !== n || t[23] !== l || t[24] !== f ? (T = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.createAudienceButtonClicked(n, f), l == null || l();
			}, t[22] = n, t[23] = l, t[24] = f, t[25] = T) : T = t[25];
			var D = T, x;
			t[26] !== n || t[27] !== i || t[28] !== f ? (x = function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.importAudienceButtonClicked(n, f), i == null || i();
			}, t[26] = n, t[27] = i, t[28] = f, t[29] = x) : x = t[29];
			var $ = x, P;
			t[30] !== I || t[31] !== p ? (P = p && s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcGroup.react"),
				title: o("WAWebBizBroadcastsCreationStrings").getExistingAudiencesLabel(),
				onPress: I,
				testid: "biz-broadcasts-create-audience-existing"
			}), t[30] = I, t[31] = p, t[32] = P) : P = t[32];
			var N;
			t[33] === Symbol.for("react.memo_cache_sentinel") ? (N = o("WAWebBizBroadcastsCreationStrings").getCreateAudienceLabel(), t[33] = N) : N = t[33];
			var M;
			t[34] !== D ? (M = s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcAdd.react"),
				title: N,
				onPress: D,
				testid: "biz-broadcasts-create-audience-new"
			}), t[34] = D, t[35] = M) : M = t[35];
			var w;
			t[36] === Symbol.for("react.memo_cache_sentinel") ? (w = o("WAWebBizBroadcastsCreationStrings").getImportAudienceLabel(), t[36] = w) : w = t[36];
			var A;
			t[37] !== $ ? (A = s.jsx(r("WDSMenuItem.react"), {
				Icon: r("WDSIconIcUpload.react"),
				title: w,
				onPress: $,
				testid: "biz-broadcasts-create-audience-import"
			}), t[37] = $, t[38] = A) : A = t[38], L = s.jsxs(r("WDSMenu.react"), { children: [
				P,
				M,
				A,
				u != null && E != null && E.length > 0 && s.jsxs(s.Fragment, { children: [
					s.jsx(r("WDSMenuItem.react"), { type: "separator" }),
					s.jsx(r("WDSMenuItem.react"), {
						type: "groupHeader",
						title: o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudiencesSectionTitle()
					}),
					E.map(function(e) {
						var t = e.card, n = e.count, a = t.icon, i = t.id === "active_chats" || t.id === "inactive_chats", l = o("WAWebBizBroadcastsAudienceStrings").getSuggestedAudienceCardSubtitle(n, i ? o("WAWebBizBroadcastsAudienceStrings").getDurationLabelForDays(30) : void 0);
						return s.jsx(r("WDSMenuItem.react"), {
							Icon: a,
							onPress: function() {
								return u(t);
							},
							subtitle: l,
							testid: "suggested-audience-menu-item-" + t.id,
							title: t.title()
						}, t.id);
					})
				] })
			] }), t[9] = n, t[10] = a, t[11] = i, t[12] = l, t[13] = u, t[14] = C, t[15] = c, t[16] = p, t[17] = f, t[18] = L;
		} else L = t[18];
		return L;
	}
	async function _(e) {
		try {
			var t = await o("WAWebSuggestedAudienceCards").resolveCardExpression(e), n = await o("WAWebAudienceResolver").resolveAudienceExpression(t);
			return {
				card: e,
				count: n.length
			};
		} catch (t) {
			return {
				card: e,
				count: 0
			};
		}
	}
	l.default = p;
}), 98);
