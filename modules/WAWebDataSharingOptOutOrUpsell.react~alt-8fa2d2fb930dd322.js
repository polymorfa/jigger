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
		var t = e.children, n = e.entryPoint;
		return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			className: "x1ypdohk xuxw1ft",
			id: "data-sharing-learn-more-link",
			selectable: !0,
			onClick: function() {
				return f(n);
			},
			children: t
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.accountLids, n = e.children;
		return u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
			className: "x1ypdohk xuxw1ft",
			id: "per-customer-data-sharing-settings-link",
			selectable: !0,
			onClick: function() {
				return o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebSmbPerCustomerDataSharingOptInModal"), {
					accountLids: t,
					entryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.CONTACT_INFO_CARD
				}));
			},
			children: n
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.checkboxValue, n = e.entryPoint, r = e.onCheckboxToggle, a = e.theme, i = a === "labels-opt-out" ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(g, {
				entryPoint: n,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m1", u.jsx(g, {
				entryPoint: n,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		);
		return u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebCheckBox.react").CheckBox, {
			checked: t,
			onChange: r
		}), u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			xstyle: o("WDSMargins.stylex").wdsMargins.marginStart16,
			children: i
		})] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.entryPoint;
		return u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(g, {
					entryPoint: t,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = e.accountLids;
		return u.jsx(o("WAWebText.react").WAWebTextSmall, {
			color: "secondary",
			children: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", u.jsx(h, {
					accountLids: t,
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			)
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.chats, n = e.checkboxValue, a = e.onCheckboxToggle, i = e.theme, l = r("useWAWebUnmountSignal")(), s = m(null), c = s[0], f = s[1];
		d(function() {
			return o("WAWebSMBDataSharingSettingAction").getSMBDataSharingSettingAction().then(function(e) {
				l.aborted || (f(e), o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(f));
			}), function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(f);
			};
		}, [l.aborted]);
		var g = function() {
			var e = [];
			return (t != null ? t : []).forEach(function(t) {
				var n, r = (n = t.accountLid) == null ? void 0 : n.toString();
				o("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(t) != null && r != null && !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(r) && e.push(r);
			}), e;
		}, h = m(g), v = h[0], S = h[1], R = m(t), L = R[0], E = R[1];
		t !== L && (t == null || L == null || t.length !== L.length || t.some(function(e, t) {
			return e !== L[t];
		})) && (E(t), S(g()));
		var k = function() {
			return S(g());
		};
		if (o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "add", k), o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "change", k), o("useWAWebListener").useListener(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection, "remove", k), c == null || c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset) return null;
		var I;
		i === "order-create" ? I = [
			_.themeOrderCreate,
			o("WDSPaddings.stylex").wdsPaddings.paddingStart16,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop16,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom32
		] : i === "order-update" ? I = [
			o("WDSPaddings.stylex").wdsPaddings.paddingStart28,
			p.paddingTop48,
			o("WDSPaddings.stylex").wdsPaddings.paddingBottom16
		] : i === "labels-opt-out" && (I = [
			_.themeLabelsOptOut,
			o("WDSMargins.stylex").wdsMargins.marginTop24,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop12,
			p.paddingInlineStart30
		]);
		var T = c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && !o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled(), D = c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && o("WAWebDataSharingUpsellModel").isUpsellEnabled(), x = c === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true && v.length > 0 && o("WAWebDataSharingUpsellModel").isUpsellEnabled() && o("WAWebCTWAGatingUtils").isPerCustomerDataSharingControlsEnabled();
		if (!T && !D && !x) return null;
		var $;
		return i === "labels-opt-out" ? $ = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.LABEL_CHAT : $ = o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.NEW_ORDER, u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			testid: "ctwa_data_sharing_upsell_container",
			xstyle: I,
			children: [
				D ? u.jsx(C, { entryPoint: $ }) : null,
				x ? u.jsx(b, { accountLids: v }) : null,
				T ? u.jsx(y, {
					theme: i,
					entryPoint: $,
					checkboxValue: n,
					onCheckboxToggle: a
				}) : null
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.OptOutText = y, l.UpsellText = C, l.DataSharingOptOutOrUpsell = v;
}), 226);
