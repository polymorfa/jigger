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
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState;
	function p(e) {
		var t, n = e.accountLid, a = e.chat, i = e.containerXstyle, l = m(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()), c = l[0], p = l[1], _ = m(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion()), f = _[0], g = _[1];
		d(function() {
			var e = function() {
				p(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()), g(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion());
			};
			return o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e), function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			};
		}, []);
		var h = m((t = o("WAWebDataSharing3pdLidCollection")).DataSharing3pdLidCollection.isDataSharingEnabled(n)), y = h[0], C = h[1], b = function() {
			C(o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(n));
		};
		o("useWAWebListener").useListener(t.DataSharing3pdLidCollection, "add", b), o("useWAWebListener").useListener(t.DataSharing3pdLidCollection, "change", b), o("useWAWebListener").useListener(t.DataSharing3pdLidCollection, "remove", b);
		var v = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(c, f), S = v && y, R = u.jsx(o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed, { title: s._(
			/*BTDS*/
			""
		) }), L = S ? u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }) : u.jsx(o("WAWebText.react").WAWebTextMuted, { children: s._(
			/*BTDS*/
			""
		) }), E = u.jsx(r("WDSSwitch.react"), {
			tabIndex: -1,
			"aria-label": "Toggle the data sharing state for this customer",
			value: S
		}), k = u.jsx(r("WDSIconIcSyncAlt.react"), {});
		return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
			icon: k,
			testid: "per-customer-data-sharing-row",
			side: E,
			onClick: function() {
				return o("WAWebPerCustomerDataSharingUtils").getModalForPerCustomerDataSharing({
					accountLid: n,
					chat: a,
					entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.CONTACT_INFO_CARD,
					perCustomerEntryPoint: o("WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT.CONTACT_INFO_CARD
				});
			},
			title: R,
			secondaryTitle: L,
			containerXstyle: i
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
