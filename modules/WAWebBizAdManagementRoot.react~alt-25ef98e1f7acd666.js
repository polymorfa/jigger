__d("WAWebBizAdManagementRoot.react", [
	"CometRelay",
	"WAWebBizAdCreationConsts",
	"WAWebBizAdManagementRootContent.react",
	"WAWebBizAdManagementRootQuery.graphql",
	"justknobx",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizAdManagementRootQuery.graphql");
	function d(e) {
		var t = e.draftPageId, n = e.hasCreatedAd, a = e.isWAAEligible, i = e.onAdSelect, l = e.onExistingDraftIDChange, s = e.onLoginToFacebook, d = e.onNavigateToCreation, m = e.onRecreateAd, p = e.onResumeDraft, _ = e.pageId1, f = e.pageId2, g = e.scrollContainerRef, h = e.selectedKey, y = o("CometRelay").useLazyLoadQuery(c, {
			after: null,
			draft_page_id: t,
			first: o("WAWebBizAdCreationConsts").AD_MANAGEMENT_INITIAL_LOAD_COUNT,
			options: {},
			page_id_1: _,
			page_id_2: f
		}, { fetchPolicy: "network-only" });
		return u.jsx(r("WAWebBizAdManagementRootContent.react"), {
			hasCreatedAd: n,
			isWAAEligible: a,
			onAdSelect: i,
			onExistingDraftIDChange: l,
			onLoginToFacebook: s,
			onNavigateToCreation: d,
			onRecreateAd: m,
			onResumeDraft: p,
			pageId1: _,
			queryData: y,
			scrollContainerRef: g,
			selectedKey: h
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.hasCreatedAd, n = e.isWAAEligible, a = e.onAdSelect, i = e.onExistingDraftIDChange, l = e.onLoginToFacebook, s = e.onNavigateToCreation, d = e.onRecreateAd, m = e.onResumeDraft, p = e.pageId1, _ = e.queryRef, f = e.scrollContainerRef, g = e.selectedKey, h = o("CometRelay").usePreloadedQuery(c, _);
		return u.jsx(r("WAWebBizAdManagementRootContent.react"), {
			hasCreatedAd: t,
			isWAAEligible: n,
			onAdSelect: a,
			onExistingDraftIDChange: i,
			onLoginToFacebook: l,
			onNavigateToCreation: s,
			onRecreateAd: d,
			onResumeDraft: m,
			pageId1: p,
			queryData: h,
			scrollContainerRef: f,
			selectedKey: g
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.draftPageId, n = e.hasCreatedAd, o = e.isWAAEligible, a = e.onAdSelect, i = e.onExistingDraftIDChange, l = e.onLoginToFacebook, s = e.onNavigateToCreation, c = e.onRecreateAd, p = e.onResumeDraft, _ = e.pageId1, f = e.pageId2, g = e.queryRef, h = e.scrollContainerRef, y = e.selectedKey;
		return r("justknobx")._("897") && g == null && _ === "" ? null : g != null ? u.jsx(m, {
			hasCreatedAd: n,
			isWAAEligible: o,
			onAdSelect: a,
			onExistingDraftIDChange: i,
			onLoginToFacebook: l,
			onNavigateToCreation: s,
			onRecreateAd: c,
			onResumeDraft: p,
			pageId1: _,
			queryRef: g,
			scrollContainerRef: h,
			selectedKey: y
		}) : u.jsx(d, {
			draftPageId: t,
			hasCreatedAd: n,
			isWAAEligible: o,
			onAdSelect: a,
			onExistingDraftIDChange: i,
			onLoginToFacebook: l,
			onNavigateToCreation: s,
			onRecreateAd: c,
			onResumeDraft: p,
			pageId1: _,
			pageId2: f,
			scrollContainerRef: h,
			selectedKey: y
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
