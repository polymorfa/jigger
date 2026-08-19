__d("MAWEncryptedBackupsRestoreDialogContexts_query.graphql", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = {
		argumentDefinitions: [],
		kind: "Fragment",
		metadata: null,
		name: "MAWEncryptedBackupsRestoreDialogContexts_query",
		selections: [{
			alias: null,
			args: null,
			concreteType: "XFBEncryptedBackup",
			kind: "LinkedField",
			name: "xfb_backup",
			plural: !1,
			selections: [{
				args: null,
				kind: "FragmentSpread",
				name: "useMWEncryptedBackupsGetVirtualDevicesPreloaded_xfbEncryptedBackup"
			}, {
				alias: null,
				args: [{
					kind: "Literal",
					name: "family_device_id",
					value: ""
				}],
				kind: "ScalarField",
				name: "has_otc_eligible_devices",
				storageKey: "has_otc_eligible_devices(family_device_id:\"\")"
			}],
			storageKey: null
		}, {
			kind: "RequiredField",
			field: {
				alias: null,
				args: null,
				concreteType: "Viewer",
				kind: "LinkedField",
				name: "viewer",
				plural: !1,
				selections: [{
					args: null,
					kind: "FragmentSpread",
					name: "MWEBVestaUserInfoContextProvider_viewer"
				}, {
					alias: null,
					args: null,
					concreteType: "XFBEncryptedBackup",
					kind: "LinkedField",
					name: "encrypted_backup",
					plural: !1,
					selections: [{
						alias: null,
						args: null,
						kind: "ScalarField",
						name: "has_seen_eb_auto_restore_notice",
						storageKey: null
					}],
					storageKey: null
				}],
				storageKey: null
			},
			action: "THROW",
			path: "viewer"
		}],
		type: "Query",
		abstractKey: null
	};
	a.exports = e;
}), null);
