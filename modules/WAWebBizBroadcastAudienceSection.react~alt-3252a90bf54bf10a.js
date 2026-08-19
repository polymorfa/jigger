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
	"useWAWebBizBroadcastOverlappingRecipients",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useRef;
	function p(e, t) {
		return e === o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD && !t;
	}
	function _(e) {
		var t = e.entryPoint, n = e.hasSelectedChats, a = e.isDuplicate, i = a === void 0 ? !1 : a, l = e.onExistingAudiences, u = e.onImportAudience, c = e.onOpenUpsertAudience, d = e.onSuggestedAudiencePress, m = e.selectedCardIds;
		if (p(t, i)) return null;
		var _ = o("WAWebBizBroadcastsAudienceUtils").getBroadcastChatsAsAudiences().length > 0, f = s.jsx(r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"), {
			entryPoint: t,
			onNewAudience: c,
			onImportAudience: u,
			onExistingAudiences: l,
			onSuggestedAudiencePress: d,
			selectedCardIds: m,
			showExistingAudienceRow: _,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT
		});
		return s.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
			buttonLabel: n ? o("WAWebBizBroadcastsCreationStrings").getAddAudienceLabel() : o("WAWebBizBroadcastsCreationStrings").getChooseAudienceLabel(),
			contextMenu: f,
			onButtonClick: function() {
				o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.addAudienceButtonClicked(t);
			},
			testid: "biz-broadcast-creation-add-audience-button"
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t, n, a = e.chat, i = e.entryPoint, l = e.handleDeleteAudience, u = e.handleEditAudience, c = e.isDuplicate, d = c === void 0 ? !1 : c, m = o("useWAWebModelValues").useModelValues(a, ["contact", "broadcastMetadata"]), p = o("WAWebChatGroupUtils").getBroadcastChatTitle(a), _ = (t = (n = m.broadcastMetadata) == null ? void 0 : n.recipients.length) != null ? t : 0, f = o("WAWebAudienceExpressionTypes").isPredicateAudience({ broadcastMetadata: m.broadcastMetadata != null ? { audienceExpression: m.broadcastMetadata.audienceExpression } : null });
		return s.jsx(r("WAWebBizBroadcastAudienceSectionAudienceRow.react"), {
			audienceName: p,
			recipientCount: _,
			isPredicateExpression: f,
			entryPoint: i,
			handleDeleteAudience: l,
			handleEditAudience: u,
			isDuplicate: d
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.entryPoint, n = e.isDuplicate, a = n === void 0 ? !1 : n, i = e.onExistingAudiences, l = e.onImportAudience, u = e.onOpenUpsertAudience, g = e.onSuggestedAudiencePress, h = e.selectedCardIds, y = e.selectedChats, C = e.setSelectedChats, b = m(null), v = m(!1);
		d(function() {
			if (v.current) {
				var e = b.current;
				if (e != null && !e.contains(document.activeElement)) {
					v.current = !1;
					var t = e.querySelector("button, [tabindex=\"0\"]");
					t instanceof HTMLElement && t.focus();
				}
			}
		}, void 0);
		var S = c(function(e) {
			return function() {
				C(function(t) {
					var n = new Set(t);
					return n.delete(e), n;
				}), v.current = !0;
			};
		}, [C]), R = c(function() {
			v.current = !0, i == null || i();
		}, [i]), L = o("useWAWebBizBroadcastOverlappingRecipients").useWAWebBizBroadcastOverlappingRecipients(y);
		return s.jsx("div", {
			ref: b,
			className: "x19aeb6u xh8yej3",
			children: s.jsxs(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastsCreationStrings").getAudienceSectionTitle(),
				subtitle: p(t, a) ? null : o("WAWebBizBroadcastsCreationStrings").getAudienceSectionSubtitle(),
				children: [
					s.jsx(_, {
						entryPoint: t,
						hasSelectedChats: y.size > 0,
						isDuplicate: a,
						onOpenUpsertAudience: function() {
							return u(null);
						},
						onImportAudience: l,
						onExistingAudiences: R,
						onSuggestedAudiencePress: g,
						selectedCardIds: h
					}),
					y.size > 0 && s.jsx("div", {
						role: "list",
						"aria-label": o("WAWebBizBroadcastsCreationStrings").getSelectedAudiencesAriaLabel(),
						children: Array.from(y).map(function(e) {
							var n = function() {
								return u(e);
							};
							return s.jsx("div", {
								role: "listitem",
								"data-testid": "biz-broadcasts-audience-card",
								children: s.jsx(f, {
									handleEditAudience: n,
									chat: e,
									entryPoint: t,
									handleDeleteAudience: S(e),
									isDuplicate: a
								})
							}, e.id.toString());
						})
					}),
					L > 0 && s.jsx("div", {
						className: "x1380le5",
						children: s.jsx(r("WDSBanner.react"), {
							type: "warning",
							body: o("WAWebBizBroadcastsCreationStrings").getOverlappingRecipientsWarning(L),
							testid: "overlapping-recipients-banner"
						})
					})
				]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
