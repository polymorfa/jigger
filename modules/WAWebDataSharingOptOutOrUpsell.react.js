__d("WAWebDataSharingOptOutOrUpsell.react", [
	"fbt",
	"WASmaxInBizSettingsEnums",
	"WAWebCTWADataSharingModel",
	"WAWebCTWAGatingUtils",
	"WAWebCheckBox.react",
	"WAWebCommonCTWADataSharing",
	"WAWebCopyPasteSelectable.react",
	"WAWebDataSharing3pdLidCollection",
	"WAWebDataSharingUpsellModel",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSMBDataSharingSettingAction",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebSmbPerCustomerDataSharingOptInModal",
	"WAWebText.react",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		paddingTop48: {
			paddingTop: "x4i7bpe",
			$$css: !0
		},
		paddingInlineStart30: {
			paddingInlineStart: "x162tt16",
			$$css: !0
		}
	}, _ = {
		themeOrderCreate: {
			backgroundColor: "x1h3rtpe",
			$$css: !0
		},
		themeLabelsOptOut: {
			borderTopWidth: "x178xt8z",
			borderTopStyle: "x13fuv20",
			borderTopColor: "xog00wb",
			$$css: !0
		}
	}, f = function(t) {
		o("WAWebModalManager").ModalManager.close(), o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebSmbDataSharingOptInModalDialog").SmbDataSharingOptInModalDialog, {
			entrypoint: t,
			callback: r("WAWebNoop"),
			chats: null
		}));
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, r = e.entryPoint, a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = "x1ypdohk xuxw1ft", t[0] = a) : a = t[0];
		var i;
		t[1] !== r ? (i = function() {
			return f(r);
		}, t[1] = r, t[2] = i) : i = t[2];
		var l;
		return t[3] !== n || t[4] !== i ? (l = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			className: a,
			id: "data-sharing-learn-more-link",
			selectable: !0,
			onClick: i,
			children: n
		}), t[3] = n, t[4] = i, t[5] = l) : l = t[5], l;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(6), n = e.accountLids, a = e.children, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = "x1ypdohk xuxw1ft", t[0] = i) : i = t[0];
		var l;
		t[1] !== n ? (l = function() {
			return o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
				accountLids: n,
				entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.CONTACT_INFO_CARD
			}));
		}, t[1] = n, t[2] = l) : l = t[2];
		var s;
		return t[3] !== a || t[4] !== l ? (s = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			className: i,
			id: "per-customer-data-sharing-settings-link",
			selectable: !0,
			onClick: l,
			children: a
		}), t[3] = a, t[4] = l, t[5] = s) : s = t[5], s;
	}
	function y(e) {
		var t = o("react-compiler-runtime").c(11), n = e.checkboxValue, r = e.entryPoint, a = e.onCheckboxToggle, i = e.theme, l;
		t[0] !== r || t[1] !== i ? (l = i === "labels-opt-out" ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(g, {
				entryPoint: r,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(g, {
				entryPoint: r,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		), t[0] = r, t[1] = i, t[2] = l) : l = t[2];
		var c = l, d;
		t[3] !== n || t[4] !== a ? (d = u.jsx(o("WAWebCheckBox.react").CheckBox, {
			checked: n,
			onChange: a
		}), t[3] = n, t[4] = a, t[5] = d) : d = t[5];
		var m;
		t[6] !== c ? (m = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginStart16,
			children: c
		}), t[6] = c, t[7] = m) : m = t[7];
		var p;
		return t[8] !== d || t[9] !== m ? (p = u.jsxs(u.Fragment, { children: [d, m] }), t[8] = d, t[9] = m, t[10] = p) : p = t[10], p;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(2), n = e.entryPoint, r;
		return t[0] !== n ? (r = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(g, {
					entryPoint: n,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function b(e) {
		var t = o("react-compiler-runtime").c(2), n = e.accountLids, r;
		return t[0] !== n ? (r = u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(h, {
					accountLids: n,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		}), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function v(e) {
		var t = o("react-compiler-runtime").c(34), n = e.chats, a = e.checkboxValue, i = e.onCheckboxToggle, l = e.theme, s = r("useWAWebUnmountSignal")(), c = m(null), f = c[0], g = c[1], h, v;
		t[0] !== s.aborted ? (h = function() {
			return o("WAWebSMBDataSharingSettingAction").getSMBDataSharingSettingAction().then(function(e) {
				s.aborted || (g(e), o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(g));
			}), (function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(g);
			});
		}, v = [s.aborted], t[0] = s.aborted, t[1] = h, t[2] = v) : (h = t[1], v = t[2]), d(h, v);
		var S;
		t[3] !== n ? (S = function() {
			var e = [];
			return (n != null ? n : []).forEach(function(t) {
				var n, r = (n = t.accountLid) == null ? void 0 : n.toString();
				o("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(t) != null && r != null && !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(r) && e.push(r);
			}), e;
		}, t[3] = n, t[4] = S) : S = t[4];
		var R = S, L = m(R), E = L[0], k = L[1], I = m(n), T = I[0], D = I[1];
		n !== T && (n == null || T == null || n.length !== T.length || n.some(function(e, t) {
			return e !== T[t];
		})) && (D(n), k(R()));
		var x;
		t[5] !== R ? (x = function() {
			return k(R());
		}, t[5] = R, t[6] = x) : x = t[6];
		var $ = x;
		if (o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "add", $), o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "change", $), o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "remove", $), f == null || f === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset) return null;
		var P;
		if (l === "order-create") {
			var N;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (N = [
				_.themeOrderCreate,
				o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop16,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom32
			], t[7] = N) : N = t[7], P = N;
		} else if (l === "order-update") {
			var M;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (M = [
				o("WDSPaddings.stylex").wdsPaddings.paddingStart28,
				p.paddingTop48,
				o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
			], t[8] = M) : M = t[8], P = M;
		} else if (l === "labels-opt-out") {
			var w;
			t[9] === Symbol.for("react.memo_cache_sentinel") ? (w = [
				_.themeLabelsOptOut,
				o("WDSMargins.stylex").wdsMargins.marginTop24,
				o("WDSPaddings.stylex").wdsPaddings.paddingTop12,
				p.paddingInlineStart30
			], t[9] = w) : w = t[9], P = w;
		}
		var A;
		t[10] !== f ? (A = f === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && !o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled(), t[10] = f, t[11] = A) : A = t[11];
		var F = A, O;
		t[12] !== f ? (O = f === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && o("WAWebDataSharingUpsellModel").isUpsellEnabled(), t[12] = f, t[13] = O) : O = t[13];
		var B = O, W;
		t[14] !== E || t[15] !== f ? (W = f === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && E.length > 0 && o("WAWebDataSharingUpsellModel").isUpsellEnabled() && o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled(), t[14] = E, t[15] = f, t[16] = W) : W = t[16];
		var q = W;
		if (!F && !B && !q) return null;
		var U;
		l === "labels-opt-out" ? U = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT : U = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER;
		var V;
		t[17] !== U || t[18] !== B ? (V = B ? u.jsx(C, { entryPoint: U }) : null, t[17] = U, t[18] = B, t[19] = V) : V = t[19];
		var H;
		t[20] !== E || t[21] !== q ? (H = q ? u.jsx(b, { accountLids: E }) : null, t[20] = E, t[21] = q, t[22] = H) : H = t[22];
		var G;
		t[23] !== a || t[24] !== U || t[25] !== i || t[26] !== F || t[27] !== l ? (G = F ? u.jsx(y, {
			theme: l,
			entryPoint: U,
			checkboxValue: a,
			onCheckboxToggle: i
		}) : null, t[23] = a, t[24] = U, t[25] = i, t[26] = F, t[27] = l, t[28] = G) : G = t[28];
		var z;
		return t[29] !== P || t[30] !== G || t[31] !== V || t[32] !== H ? (z = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			testid: "ctwa_data_sharing_upsell_container",
			xstyle: P,
			children: [
				V,
				H,
				G
			]
		}), t[29] = P, t[30] = G, t[31] = V, t[32] = H, t[33] = z) : z = t[33], z;
	}
	l.OptOutText = y, l.UpsellText = C, l.DataSharingOptOutOrUpsell = v;
}), 226);
