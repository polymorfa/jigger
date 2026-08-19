__d("WAWebDebugAds", [
	"WAWebActiveAccountInfoContext.react",
	"WAWebBizNativeAdsStoredFBIdentityStore",
	"WAWebCTWABizAccessTokenNonceManager",
	"WAWebCTWADebugDrawer.react",
	"WAWebChatCollection",
	"WAWebCtwaConversationDepthUtils",
	"WAWebDrawerManager",
	"WAWebFetchAdAccountToken",
	"WAWebLinkAdMediaInFacebook",
	"WAWebLinkedAccountsJob",
	"WAWebUploadNativeAdMedia",
	"WAWebUserPrefsCTWA",
	"WAWebUserPrefsGeneral",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		return o("WAWebCTWABizAccessTokenNonceManager").fetchNonce(!0).then(function(e) {});
	}
	u.doc = "Fetch ad account nonce", u.paramsToExecute = [];
	function c() {
		return o("WAWebFetchAdAccountToken").fetchToken(!0).then(function(e) {});
	}
	c.doc = "Fetch ad account token", c.paramsToExecute = [];
	function d(e) {
		return o("WAWebLinkAdMediaInFacebook").linkAdMediaInFacebook(e).then(function(e) {}).catch(function(e) {});
	}
	d.doc = "Link given ad media id in Facebook, so that it is available there for native ads creation flows";
	function m(e) {
		var t = function(t) {
			return o("WAWebUploadNativeAdMedia").uploadBlobAsNativeAdMedia(t, new AbortController().signal).then(function(e) {}).catch(function(e) {});
		};
		return e == null ? new Promise(function(e) {
			var t = document.createElement("input");
			t.type = "file", t.onchange = function(t) {
				e(t.target.files[0]);
			}, t.click();
		}).then(t) : t(e);
	}
	m.doc = "Upload given blob as native ad media, so that it is available there for native ads creation flows";
	var p = function() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(s.jsx(r("WAWebCTWADebugDrawer.react"), { onBack: function() {
			o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		} }));
	};
	p.doc = "Opens the CTWA Debug Drawer", p.paramsToExecute = [];
	function _() {
		o("WAWebFetchAdAccountToken").markTokenAsInvalid();
	}
	_.doc = "Clear WA token from cache and storage", _.paramsToExecute = [];
	function f() {
		o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity();
	}
	f.doc = "Clear FB identity token from storage", f.paramsToExecute = [];
	function g(e) {
		o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(e);
	}
	g.doc = "Set last used ad account type preference ('FB', 'WAA', or null to clear)";
	function h() {
		o("WAWebBizNativeAdsStoredFBIdentityStore").clearStoredFBIdentity(), o("WAWebFetchAdAccountToken").markTokenAsInvalid(), o("WAWebUserPrefsGeneral").setLastUsedAdAccountType(null);
	}
	h.doc = "Clear all ads identity (FB token, WA token, and last used account type)", h.paramsToExecute = [];
	async function y() {
		var e = o("WAWebUserPrefsCTWA").getFBIdentity(), t = o("WAWebUserPrefsCTWA").getAdAccountToken(), n = t != null && t.type === "WAA" ? t.bp_id + " (" + t.tokenStrength + ")" : "null", r = o("WAWebUserPrefsGeneral").getLastUsedAdAccountType(), a = await o("WAWebLinkedAccountsJob").queryLinkedPagesInfo();
	}
	y.doc = "Print current ads identity details (tokens, account type preference, and linked pages)", y.paramsToExecute = [];
	function C(e) {
		o("WAWebActiveAccountInfoContext.react").setActiveAccountInfo(e);
	}
	C.doc = "Set the active account info for testing ad entry points";
	function b() {
		var e = o("WAWebChatCollection").ChatCollection.getActive();
		if (e) var t = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(e);
	}
	b.doc = "Print the CTWA conversation depth (biz reply count) for the active chat", b.paramsToExecute = [];
	var v = {
		fetchAdAccountNonce: u,
		fetchAdAccountToken: c,
		linkAdMediaInFacebook: d,
		uploadBlobAsNativeAdMedia: m,
		ctwaOpenDebugDrawer: p,
		clearWAToken: _,
		clearFBToken: f,
		setLastUsedAccountType: g,
		clearAdsIdentity: h,
		printAdsIdentityDetails: y,
		dfsSetActiveAccountInfo: C,
		printCtwaConversationDepth: b
	};
	l.default = v;
}), 98);
