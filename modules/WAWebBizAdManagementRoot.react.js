__d("WAWebBizAdManagementRoot.react", [
	"CometRelay",
	"WAWebBizAdCreationConsts",
	"WAWebBizAdManagementRootContent.react",
	"WAWebBizAdManagementRootQuery.graphql",
	"justknobx",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = e !== void 0 ? e : e = n("WAWebBizAdManagementRootQuery.graphql");
	function d(e) {
		var t = o("react-compiler-runtime").c(13), n = e.draftPageId, a = e.hasCreatedAd, i = e.isWAAEligible, l = e.onAdSelect, s = e.onExistingDraftIDChange, d = e.onLoginToFacebook, m = e.onNavigateToCreation, p = e.onRecreateAd, _ = e.onResumeDraft, f = e.pageId1, g = e.pageId2, h = e.scrollContainerRef, y = e.selectedKey, C = o("CometRelay").useLazyLoadQuery(c, {
			after: null,
			draft_page_id: n,
			first: o("WAWebBizAdCreationConsts").AD_MANAGEMENT_INITIAL_LOAD_COUNT,
			options: {},
			page_id_1: f,
			page_id_2: g
		}, { fetchPolicy: "network-only" }), b;
		return t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== s || t[4] !== d || t[5] !== m || t[6] !== p || t[7] !== _ || t[8] !== f || t[9] !== C || t[10] !== h || t[11] !== y ? (b = u.jsx(r("WAWebBizAdManagementRootContent.react"), {
			hasCreatedAd: a,
			isWAAEligible: i,
			onAdSelect: l,
			onExistingDraftIDChange: s,
			onLoginToFacebook: d,
			onNavigateToCreation: m,
			onRecreateAd: p,
			onResumeDraft: _,
			pageId1: f,
			queryData: C,
			scrollContainerRef: h,
			selectedKey: y
		}), t[0] = a, t[1] = i, t[2] = l, t[3] = s, t[4] = d, t[5] = m, t[6] = p, t[7] = _, t[8] = f, t[9] = C, t[10] = h, t[11] = y, t[12] = b) : b = t[12], b;
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(13), n = e.hasCreatedAd, a = e.isWAAEligible, i = e.onAdSelect, l = e.onExistingDraftIDChange, s = e.onLoginToFacebook, d = e.onNavigateToCreation, m = e.onRecreateAd, p = e.onResumeDraft, _ = e.pageId1, f = e.queryRef, g = e.scrollContainerRef, h = e.selectedKey, y = o("CometRelay").usePreloadedQuery(c, f), C;
		return t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== s || t[5] !== d || t[6] !== m || t[7] !== p || t[8] !== _ || t[9] !== y || t[10] !== g || t[11] !== h ? (C = u.jsx(r("WAWebBizAdManagementRootContent.react"), {
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
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = s, t[5] = d, t[6] = m, t[7] = p, t[8] = _, t[9] = y, t[10] = g, t[11] = h, t[12] = C) : C = t[12], C;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(27), n = e.draftPageId, a = e.hasCreatedAd, i = e.isWAAEligible, l = e.onAdSelect, s = e.onExistingDraftIDChange, c = e.onLoginToFacebook, p = e.onNavigateToCreation, _ = e.onRecreateAd, f = e.onResumeDraft, g = e.pageId1, h = e.pageId2, y = e.queryRef, C = e.scrollContainerRef, b = e.selectedKey;
		if (r("justknobx")._("897") && y == null && g === "") return null;
		if (y != null) {
			var v;
			return t[0] !== a || t[1] !== i || t[2] !== l || t[3] !== s || t[4] !== c || t[5] !== p || t[6] !== _ || t[7] !== f || t[8] !== g || t[9] !== y || t[10] !== C || t[11] !== b ? (v = u.jsx(m, {
				hasCreatedAd: a,
				isWAAEligible: i,
				onAdSelect: l,
				onExistingDraftIDChange: s,
				onLoginToFacebook: c,
				onNavigateToCreation: p,
				onRecreateAd: _,
				onResumeDraft: f,
				pageId1: g,
				queryRef: y,
				scrollContainerRef: C,
				selectedKey: b
			}), t[0] = a, t[1] = i, t[2] = l, t[3] = s, t[4] = c, t[5] = p, t[6] = _, t[7] = f, t[8] = g, t[9] = y, t[10] = C, t[11] = b, t[12] = v) : v = t[12], v;
		}
		var S;
		return t[13] !== n || t[14] !== a || t[15] !== i || t[16] !== l || t[17] !== s || t[18] !== c || t[19] !== p || t[20] !== _ || t[21] !== f || t[22] !== g || t[23] !== h || t[24] !== C || t[25] !== b ? (S = u.jsx(d, {
			draftPageId: n,
			hasCreatedAd: a,
			isWAAEligible: i,
			onAdSelect: l,
			onExistingDraftIDChange: s,
			onLoginToFacebook: c,
			onNavigateToCreation: p,
			onRecreateAd: _,
			onResumeDraft: f,
			pageId1: g,
			pageId2: h,
			scrollContainerRef: C,
			selectedKey: b
		}), t[13] = n, t[14] = a, t[15] = i, t[16] = l, t[17] = s, t[18] = c, t[19] = p, t[20] = _, t[21] = f, t[22] = g, t[23] = h, t[24] = C, t[25] = b, t[26] = S) : S = t[26], S;
	}
	l.default = p;
}), 98);
