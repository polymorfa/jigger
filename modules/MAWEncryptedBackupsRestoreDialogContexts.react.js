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
	"react-compiler-runtime",
	"useMWEncryptedBackupsGetVirtualDevicesPreloaded"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react"));
	function c(t) {
		var a, i, l, s, c = o("react-compiler-runtime").c(25), d = t.children, m = t.query, p = t.setIsDialogPersisted, _ = t.source, f = o("CometRelay").useFragment(e !== void 0 ? e : e = n("MAWEncryptedBackupsRestoreDialogContexts_query.graphql"), m), g;
		c[0] !== f.xfb_backup ? (g = { encryptedBackup: f.xfb_backup }, c[0] = f.xfb_backup, c[1] = g) : g = c[1];
		var h = r("useMWEncryptedBackupsGetVirtualDevicesPreloaded")(g), y = h.getVirtualDevices, C;
		c[2] !== y ? (C = y(), c[2] = y, c[3] = C) : C = c[3];
		var b = C, v = b.offlineDevicesCount, S = b.vestaClientID, R = (a = (i = f.xfb_backup) == null ? void 0 : i.has_otc_eligible_devices) != null ? a : void 0, L = (l = (s = f.viewer.encrypted_backup) == null ? void 0 : s.has_seen_eb_auto_restore_notice) != null ? l : !1, E;
		c[4] !== p ? (E = function(t) {
			p == null || p(t);
		}, c[4] = p, c[5] = E) : E = c[5];
		var k;
		c[6] !== d ? (k = u.jsx(r("CometTransientDialogProvider.react"), { children: d }), c[6] = d, c[7] = k) : k = c[7];
		var I;
		c[8] !== f.viewer || c[9] !== k ? (I = u.jsx(o("MWEBVestaUserInfoContext.react").MWEBVestaUserInfoContextProvider, {
			viewer$key: f.viewer,
			children: k
		}), c[8] = f.viewer, c[9] = k, c[10] = I) : I = c[10];
		var T;
		c[11] !== E || c[12] !== I ? (T = u.jsx(r("MWChatEncryptedBackupOnCloseContextProvider.react"), { children: u.jsx(r("MWChatEncryptedBackupResetContextProvider.react"), { children: u.jsx(r("MWChatEncryptedBackupsDismissalDialogContextProvider.react"), {
			isDismissedDisabledValue: !1,
			children: u.jsx(r("MWChatEncryptedBackupsRestoreUpsellDialogContextProvider.react"), {
				setIsDialogPersisted: E,
				children: I
			})
		}) }) }), c[11] = E, c[12] = I, c[13] = T) : T = c[13];
		var D;
		c[14] !== _ || c[15] !== T ? (D = u.jsx(r("MWEBFlowSourceContextProvider.react"), {
			source: _,
			children: T
		}), c[14] = _, c[15] = T, c[16] = D) : D = c[16];
		var x;
		c[17] !== L || c[18] !== D ? (x = u.jsx(r("MWEBHasSeenAutoRestoreNoticeContextProvider.react"), {
			hasSeenNotice: L,
			children: D
		}), c[17] = L, c[18] = D, c[19] = x) : x = c[19];
		var $;
		return c[20] !== v || c[21] !== x || c[22] !== R || c[23] !== S ? ($ = u.jsx(r("MWEBVirtualDevicesContextProvider.react"), {
			hasOtcEligibleDevicesInitialValue: R,
			offlineDevicesCountInitialValue: v,
			vestaClientIDInitialValue: S,
			children: x
		}), c[20] = v, c[21] = x, c[22] = R, c[23] = S, c[24] = $) : $ = c[24], $;
	}
	l.default = c;
}), 98);
