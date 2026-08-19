__d("MAWEncryptedBackupsRestoreDialogContexts.react", [
	"CometRelay",
	"CometTransientDialogProvider.react",
	"MAWEncryptedBackupsRestoreDialogContexts_query.graphql",
	"MWChatEncryptedBackupOnCloseContextProvider.react",
	"MWChatEncryptedBackupResetContextProvider.react",
	"MWChatEncryptedBackupsDismissalDialogContextProvider.react",
	"MWChatEncryptedBackupsRestoreUpsellDialogContextProvider.react",
	"MWEBFlowSourceContextProvider.react",
	"MWEBHasSeenAutoRestoreNoticeContextProvider.react",
	"MWEBVestaUserInfoContext.react",
	"MWEBVirtualDevicesContextProvider.react",
	"react",
	"useMWEncryptedBackupsGetVirtualDevicesPreloaded"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var a, i, l, s, c = t.children, d = t.query, m = t.setIsDialogPersisted, p = t.source, _ = o("CometRelay").useFragment(e !== void 0 ? e : e = n("MAWEncryptedBackupsRestoreDialogContexts_query.graphql"), d), f = r("useMWEncryptedBackupsGetVirtualDevicesPreloaded")({ encryptedBackup: _.xfb_backup }), g = f.getVirtualDevices, h = g(), y = h.offlineDevicesCount, C = h.vestaClientID;
		return u.jsx(r("MWEBVirtualDevicesContextProvider.react"), {
			hasOtcEligibleDevicesInitialValue: (a = (i = _.xfb_backup) == null ? void 0 : i.has_otc_eligible_devices) != null ? a : void 0,
			offlineDevicesCountInitialValue: y,
			vestaClientIDInitialValue: C,
			children: u.jsx(r("MWEBHasSeenAutoRestoreNoticeContextProvider.react"), {
				hasSeenNotice: (l = (s = _.viewer.encrypted_backup) == null ? void 0 : s.has_seen_eb_auto_restore_notice) != null ? l : !1,
				children: u.jsx(r("MWEBFlowSourceContextProvider.react"), {
					source: p,
					children: u.jsx(r("MWChatEncryptedBackupOnCloseContextProvider.react"), { children: u.jsx(r("MWChatEncryptedBackupResetContextProvider.react"), { children: u.jsx(r("MWChatEncryptedBackupsDismissalDialogContextProvider.react"), {
						isDismissedDisabledValue: !1,
						children: u.jsx(r("MWChatEncryptedBackupsRestoreUpsellDialogContextProvider.react"), {
							setIsDialogPersisted: function(t) {
								m == null || m(t);
							},
							children: u.jsx(o("MWEBVestaUserInfoContext.react").MWEBVestaUserInfoContextProvider, {
								viewer$key: _.viewer,
								children: u.jsx(r("CometTransientDialogProvider.react"), { children: c })
							})
						})
					}) }) })
				})
			})
		});
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
