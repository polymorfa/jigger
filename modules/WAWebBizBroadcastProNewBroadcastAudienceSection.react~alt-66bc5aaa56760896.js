__d("WAWebBizBroadcastProNewBroadcastAudienceSection.react", [
	"CometRelay",
	"WAWebBizBroadcastAudienceSectionAudienceRow.react",
	"WAWebBizBroadcastAudienceSectionButtonContextMenu.react",
	"WAWebBizBroadcastProExistingAudienceModal.entrypoint",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizBroadcastsNewBroadcastAddButton.react",
	"WAWebBizCard.react",
	"WAWebLoadingModal.react",
	"WAWebModalManager",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSurfaceType",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.Suspense, d = u.useCallback, m = u.useEffect, p = u.useRef;
	function _(e) {
		var t = e.entryPoint, n = e.hasCustomAudiences, a = e.isDuplicate, i = a === void 0 ? !1 : a, l = e.onOpenEditAudience, u = e.onOpenUpsertAudience, _ = e.selectedAudiences, f = e.setSelectedAudiences, g = p(null), h = p(!1), y = o("CometRelay").useRelayEnvironment(), C = t === o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD && !i;
		m(function() {
			if (h.current) {
				var e = g.current;
				if (e != null && !e.contains(document.activeElement)) {
					h.current = !1;
					var t = e.querySelector("button, [tabindex=\"0\"]");
					t instanceof HTMLElement && t.focus();
				}
			}
		}, void 0);
		var b = d(function(e) {
			return function() {
				f(function(t) {
					var n = new Set(t);
					return n.delete(e), n;
				}), h.current = !0;
			};
		}, [f]), v = d(function() {
			var e = o("CometRelay").loadEntryPoint({ getEnvironment: function() {
				return y;
			} }, r("WAWebBizBroadcastProExistingAudienceModal.entrypoint"), {}), t = function() {
				o("WAWebModalManager").closeModalManager(), e.dispose();
			};
			o("WAWebModalManager").ModalManager.open(s.jsx(c, {
				fallback: s.jsx(r("WAWebLoadingModal.react"), { error: !1 }),
				children: s.jsx(o("CometRelay").RelayEnvironmentProvider, {
					environment: y,
					children: s.jsx(o("CometRelay").EntryPointContainer, {
						entryPointReference: e,
						props: {
							onClose: t,
							selectedAudiences: _,
							setSelectedAudiences: f
						}
					})
				})
			}));
		}, [
			y,
			_,
			f
		]);
		return s.jsx("div", {
			ref: g,
			"data-testid": "biz-broadcast-pro-new-broadcast-audience-section",
			className: "x19aeb6u xh8yej3",
			children: s.jsxs(r("WAWebBizCard.react"), {
				header: o("WAWebBizBroadcastsCreationStrings").getAudienceSectionTitle(),
				subtitle: C ? null : o("WAWebBizBroadcastsCreationStrings").getAudienceSectionSubtitle(),
				children: [s.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
					buttonLabel: _.size > 0 ? o("WAWebBizBroadcastsCreationStrings").getAddAudienceLabel() : o("WAWebBizBroadcastsCreationStrings").getChooseAudienceLabel(),
					contextMenu: s.jsx(r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"), {
						entryPoint: t,
						onExistingAudiences: v,
						showExistingAudienceRow: n,
						onNewAudience: function() {
							return u(null);
						},
						surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT
					}),
					testid: "biz-broadcast-pro-creation-add-audience-button"
				}), _.size > 0 && s.jsx("ul", {
					"aria-label": o("WAWebBizBroadcastsCreationStrings").getSelectedAudiencesAriaLabel(),
					"data-testid": "biz-broadcast-pro-selected-audiences-list",
					className: "x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl",
					children: Array.from(_).map(function(e) {
						return s.jsx("li", {
							"data-testid": "biz-broadcasts-pro-audience-card",
							children: s.jsx(r("WAWebBizBroadcastAudienceSectionAudienceRow.react"), {
								isPredicateExpression: !1,
								entryPoint: t,
								audienceName: e.name,
								recipientCount: e.audienceSize,
								isDuplicate: i,
								handleEditAudience: function() {
									return l(e);
								},
								handleDeleteAudience: b(e)
							})
						}, e.id);
					})
				})]
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 98);
