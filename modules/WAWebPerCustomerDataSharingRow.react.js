__d("WAWebPerCustomerDataSharingRow.react", [
	"fbt",
	"WAWebCTWADataSharingModel",
	"WAWebChatInfoDrawerRow.react",
	"WAWebCommonCTWADataSharing",
	"WAWebDataSharing3pdLidCollection",
	"WAWebPerCustomerDataSharingUtils",
	"WAWebText.react",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
	"WDSIconIcSyncAlt.react",
	"WDSSwitch.react",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(25), n = e.accountLid, a = e.chat, i = e.containerXstyle, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(), t[0] = l) : l = t[0];
		var c = m(l), p = c[0], _ = c[1], f;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (f = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion(), t[1] = f) : f = t[1];
		var g = m(f), h = g[0], y = g[1], C, b;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			var e = function() {
				_(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()), y(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion());
			};
			return o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e), (function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			});
		}, b = [], t[2] = C, t[3] = b) : (C = t[2], b = t[3]), d(C, b);
		var v;
		t[4] !== n ? (v = o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(n), t[4] = n, t[5] = v) : v = t[5];
		var S = m(v), R = S[0], L = S[1], E;
		t[6] !== n ? (E = function() {
			L(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(n));
		}, t[6] = n, t[7] = E) : E = t[7];
		var k = E;
		o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "add", k), o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "change", k), o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "remove", k);
		var I;
		t[8] !== p || t[9] !== h ? (I = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(p, h), t[8] = p, t[9] = h, t[10] = I) : I = t[10];
		var T = I, D = T && R, x;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), t[11] = x) : x = t[11];
		var $ = x, P;
		t[12] !== D ? (P = D ? u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }) : u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), t[12] = D, t[13] = P) : P = t[13];
		var N = P, M;
		t[14] !== D ? (M = u.jsx(r("WDSSwitch.react"), {
			tabIndex: -1,
			"aria-label": "Toggle the data sharing state for this customer",
			value: D
		}), t[14] = D, t[15] = M) : M = t[15];
		var w = M, A;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(r("WDSIconIcSyncAlt.react"), {}), t[16] = A) : A = t[16];
		var F = A, O;
		t[17] !== n || t[18] !== a ? (O = function() {
			return o("WAWebPerCustomerDataSharingUtils").getModalForPerCustomerDataSharing({
				accountLid: n,
				chat: a,
				entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CONTACT_INFO_CARD,
				perCustomerEntryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.CONTACT_INFO_CARD
			});
		}, t[17] = n, t[18] = a, t[19] = O) : O = t[19];
		var B;
		return t[20] !== i || t[21] !== N || t[22] !== w || t[23] !== O ? (B = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: F,
			testid: "per-customer-data-sharing-row",
			side: w,
			onClick: O,
			title: $,
			secondaryTitle: N,
			containerXstyle: i
		}), t[20] = i, t[21] = N, t[22] = w, t[23] = O, t[24] = B) : B = t[24], B;
	}
	l.default = p;
}), 226);
