__d("WAMultiDevice.pb", ["WAProtoConst"], (function(t, n, r, o, a, i, l) {
	var e, s = {}, u = {}, c = {}, d = {}, m = {}, p = {}, _ = {}, f = {}, g = {}, h = {}, y = {};
	s.name = "MultiDevice", s.internalSpec = {
		payload: [
			1,
			(e = o("WAProtoConst")).TYPES.MESSAGE,
			c
		],
		metadata: [
			2,
			e.TYPES.MESSAGE,
			u
		]
	}, u.name = "MultiDevice$Metadata", u.internalSpec = {}, c.name = "MultiDevice$Payload", c.internalSpec = {
		applicationData: [
			1,
			e.TYPES.MESSAGE,
			d
		],
		signal: [
			2,
			e.TYPES.MESSAGE,
			y
		],
		__oneofs__: { payload: ["applicationData", "signal"] }
	}, d.name = "MultiDevice$ApplicationData", d.internalSpec = {
		appStateSyncKeyShare: [
			1,
			e.TYPES.MESSAGE,
			p
		],
		appStateSyncKeyRequest: [
			2,
			e.TYPES.MESSAGE,
			m
		],
		__oneofs__: { applicationData: ["appStateSyncKeyShare", "appStateSyncKeyRequest"] }
	}, m.name = "MultiDevice$ApplicationData$AppStateSyncKeyRequestMessage", m.internalSpec = { keyIds: [
		1,
		e.FLAGS.REPEATED | e.TYPES.MESSAGE,
		h
	] }, p.name = "MultiDevice$ApplicationData$AppStateSyncKeyShareMessage", p.internalSpec = { keys: [
		1,
		e.FLAGS.REPEATED | e.TYPES.MESSAGE,
		_
	] }, _.name = "MultiDevice$ApplicationData$AppStateSyncKey", _.internalSpec = {
		keyId: [
			1,
			e.TYPES.MESSAGE,
			h
		],
		keyData: [
			2,
			e.TYPES.MESSAGE,
			f
		]
	}, f.name = "MultiDevice$ApplicationData$AppStateSyncKey$AppStateSyncKeyData", f.internalSpec = {
		keyData: [1, e.TYPES.BYTES],
		fingerprint: [
			2,
			e.TYPES.MESSAGE,
			g
		],
		timestamp: [3, e.TYPES.INT64]
	}, g.name = "MultiDevice$ApplicationData$AppStateSyncKey$AppStateSyncKeyData$AppStateSyncKeyFingerprint", g.internalSpec = {
		rawId: [1, e.TYPES.UINT32],
		currentIndex: [2, e.TYPES.UINT32],
		deviceIndexes: [3, e.FLAGS.REPEATED | e.FLAGS.PACKED | e.TYPES.UINT32]
	}, h.name = "MultiDevice$ApplicationData$AppStateSyncKeyId", h.internalSpec = { keyId: [1, e.TYPES.BYTES] }, y.name = "MultiDevice$Signal", y.internalSpec = {}, l.MultiDeviceSpec = s, l.MultiDevice$MetadataSpec = u, l.MultiDevice$PayloadSpec = c, l.MultiDevice$ApplicationDataSpec = d, l.MultiDevice$ApplicationData$AppStateSyncKeyRequestMessageSpec = m, l.MultiDevice$ApplicationData$AppStateSyncKeyShareMessageSpec = p, l.MultiDevice$ApplicationData$AppStateSyncKeySpec = _, l.MultiDevice$ApplicationData$AppStateSyncKey$AppStateSyncKeyDataSpec = f, l.MultiDevice$ApplicationData$AppStateSyncKey$AppStateSyncKeyData$AppStateSyncKeyFingerprintSpec = g, l.MultiDevice$ApplicationData$AppStateSyncKeyIdSpec = h, l.MultiDevice$SignalSpec = y;
}), 98);
