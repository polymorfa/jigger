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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.Suspense, d = u.useCallback, m = u.useEffect, p = u.useRef;
	function _(e) {
		var t = o("react-compiler-runtime").c(33), n = e.entryPoint, a = e.hasCustomAudiences, i = e.isDuplicate, l = e.onOpenEditAudience, u = e.onOpenUpsertAudience, d = e.selectedAudiences, _ = e.setSelectedAudiences, f = i === void 0 ? !1 : i, g = p(null), h = p(!1), y = o("CometRelay").useRelayEnvironment(), C = n === o("WAWebWamEnumEntryPoint").ENTRY_POINT.BB_THREAD && !f, b;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (b = function() {
			if (h.current) {
				var e = g.current;
				if (e != null && !e.contains(document.activeElement)) {
					h.current = !1;
					var t = e.querySelector("button, [tabindex=\"0\"]");
					t instanceof HTMLElement && t.focus();
				}
			}
		}, t[0] = b) : b = t[0], m(b, void 0);
		var v;
		t[1] !== _ ? (v = function(t) {
			return function() {
				_(function(e) {
					var n = new Set(e);
					return n.delete(t), n;
				}), h.current = !0;
			};
		}, t[1] = _, t[2] = v) : v = t[2];
		var S = v, R;
		t[3] !== y || t[4] !== d || t[5] !== _ ? (R = function() {
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
							selectedAudiences: d,
							setSelectedAudiences: _
						}
					})
				})
			}));
		}, t[3] = y, t[4] = d, t[5] = _, t[6] = R) : R = t[6];
		var L = R, E;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x19aeb6u xh8yej3" }, t[7] = E) : E = t[7];
		var k;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (k = o("WAWebBizBroadcastsCreationStrings").getAudienceSectionTitle(), t[8] = k) : k = t[8];
		var I;
		t[9] !== C ? (I = C ? null : o("WAWebBizBroadcastsCreationStrings").getAudienceSectionSubtitle(), t[9] = C, t[10] = I) : I = t[10];
		var T;
		t[11] !== d.size ? (T = d.size > 0 ? o("WAWebBizBroadcastsCreationStrings").getAddAudienceLabel() : o("WAWebBizBroadcastsCreationStrings").getChooseAudienceLabel(), t[11] = d.size, t[12] = T) : T = t[12];
		var D;
		t[13] !== u ? (D = function() {
			return u(null);
		}, t[13] = u, t[14] = D) : D = t[14];
		var x;
		t[15] !== n || t[16] !== L || t[17] !== a || t[18] !== D ? (x = s.jsx(r("WAWebBizBroadcastAudienceSectionButtonContextMenu.react"), {
			entryPoint: n,
			onExistingAudiences: L,
			showExistingAudienceRow: a,
			onNewAudience: D,
			surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.BB_CAMPAIGN_DRAFT
		}), t[15] = n, t[16] = L, t[17] = a, t[18] = D, t[19] = x) : x = t[19];
		var $;
		t[20] !== x || t[21] !== T ? ($ = s.jsx(r("WAWebBizBroadcastsNewBroadcastAddButton.react"), {
			buttonLabel: T,
			contextMenu: x,
			testid: "biz-broadcast-pro-creation-add-audience-button"
		}), t[20] = x, t[21] = T, t[22] = $) : $ = t[22];
		var P;
		t[23] !== n || t[24] !== S || t[25] !== f || t[26] !== l || t[27] !== d ? (P = d.size > 0 && s.jsx("ul", {
			"aria-label": o("WAWebBizBroadcastsCreationStrings").getSelectedAudiencesAriaLabel(),
			"data-testid": "biz-broadcast-pro-selected-audiences-list",
			className: "x3ct3a4 xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl",
			children: Array.from(d).map(function(e) {
				return s.jsx("li", {
					"data-testid": "biz-broadcasts-pro-audience-card",
					children: s.jsx(r("WAWebBizBroadcastAudienceSectionAudienceRow.react"), {
						isPredicateExpression: !1,
						entryPoint: n,
						audienceName: e.name,
						recipientCount: e.audienceSize,
						isDuplicate: f,
						handleEditAudience: function() {
							return l(e);
						},
						handleDeleteAudience: S(e)
					})
				}, e.id);
			})
		}), t[23] = n, t[24] = S, t[25] = f, t[26] = l, t[27] = d, t[28] = P) : P = t[28];
		var N;
		return t[29] !== $ || t[30] !== P || t[31] !== I ? (N = s.jsx("div", babelHelpers.extends({
			ref: g,
			"data-testid": "biz-broadcast-pro-new-broadcast-audience-section"
		}, E, { children: s.jsxs(r("WAWebBizCard.react"), {
			header: k,
			subtitle: I,
			children: [$, P]
		}) })), t[29] = $, t[30] = P, t[31] = I, t[32] = N) : N = t[32], N;
	}
	l.default = _;
}), 98);
