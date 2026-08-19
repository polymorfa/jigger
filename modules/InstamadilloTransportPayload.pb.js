__d("InstamadilloTransportPayload.pb", [
	"InstamadilloAddMessage.pb",
	"InstamadilloDeleteMessage.pb",
	"InstamadilloSupplementMessage.pb",
	"WAProtoConst"
], (function(t, n, r, o, a, i, l) {
	var e, s = {
		PAYLOAD_CREATOR_UNSPECIFIED: 0,
		PAYLOAD_CREATOR_IGIOS: 1,
		PAYLOAD_CREATOR_IG4A: 2,
		PAYLOAD_CREATOR_WWW: 3,
		PAYLOAD_CREATOR_IGLITE: 4
	}, u = {}, c = {};
	u.name = "TransportPayload", u.internalSpec = {
		franking: [
			4,
			(e = o("WAProtoConst")).TYPES.MESSAGE,
			c
		],
		openEb: [5, e.TYPES.BOOL],
		isE2EeAttributed: [6, e.TYPES.BOOL],
		payloadCreator: [
			7,
			e.TYPES.ENUM,
			s
		],
		add: [
			1,
			e.TYPES.MESSAGE,
			o("InstamadilloAddMessage.pb").AddMessagePayloadSpec
		],
		delete: [
			2,
			e.TYPES.MESSAGE,
			o("InstamadilloDeleteMessage.pb").DeleteMessagePayloadSpec
		],
		supplement: [
			3,
			e.TYPES.MESSAGE,
			o("InstamadilloSupplementMessage.pb").SupplementMessagePayloadSpec
		],
		__oneofs__: { transportPayload: [
			"add",
			"delete",
			"supplement"
		] }
	}, c.name = "Franking", c.internalSpec = {
		frankingKey: [1, e.TYPES.BYTES],
		frankingVersion: [2, e.TYPES.INT32]
	}, l.PAYLOAD_CREATOR = s, l.TransportPayloadSpec = u, l.FrankingSpec = c;
}), 98);
