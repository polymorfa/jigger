__d("WAWebGroupGetCompanionDsmPhashMsg", [
	"WALogger",
	"WAWebAdvMetadataCreationFailureWamEvent",
	"WAWebApiDeviceList",
	"WAWebDeviceSentMessageProtoUtils",
	"WAWebE2EProtoGenerator",
	"WAWebEncryptMsgProtobuf",
	"WAWebIdentityIcdcApi",
	"WAWebUserPrefsMeUser"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t, n, r, a) {
		if (n.length === 0) return null;
		var i = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), l = await o("WAWebApiDeviceList").bulkGetDeviceRecord([i]), s = l[0], u = null;
		try {
			u = await o("WAWebIdentityIcdcApi").getICDCMetaFromDeviceRecord(i, s);
		} catch (e) {
			throw new (o("WAWebAdvMetadataCreationFailureWamEvent")).AdvMetadataCreationFailureWamEvent({ advMetadataIsMe: !0 }).commit(), e;
		}
		var c = o("WAWebDeviceSentMessageProtoUtils").wrapDeviceSentMessage(a, t);
		c.deviceSentMessage != null && (c = babelHelpers.extends({}, c, { deviceSentMessage: babelHelpers.extends({}, c.deviceSentMessage, { phash: r }) })), o("WAWebE2EProtoGenerator").populateMessageContextInfo(c, u, null);
		var d = n.map(async function(t) {
			try {
				var n = await o("WAWebEncryptMsgProtobuf").encryptMsgProtobuf(t, 0, c);
				return {
					type: n.type,
					ciphertext: n.ciphertext,
					participant: t
				};
			} catch (n) {
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"getCompanionDsmPhashMsg: encryption fail for ",
					", ",
					""
				])), t.toString(), n).tags("messaging");
			}
		}), m = await Promise.all(d);
		return m.filter(Boolean);
	}
	l.getCompanionDsmPhashMsg = s;
}), 98);
