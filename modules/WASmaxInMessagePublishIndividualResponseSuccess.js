__d("WASmaxInMessagePublishIndividualResponseSuccess", [
	"WAResultOrError",
	"WASmaxInMessagePublishAckMixin",
	"WASmaxInMessagePublishAckRcatMixin",
	"WASmaxInMessagePublishDeviceListStaleMixin",
	"WASmaxInMessagePublishEnums",
	"WASmaxInMessagePublishRefreshLIDMixin",
	"WASmaxParseJid",
	"WASmaxParseUtils"
], (function(t, n, r, o, a, i, l) {
	function e(e, t) {
		var n = o("WASmaxParseUtils").assertTag(e, "ack");
		if (!n.success) return n;
		var r = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrUserJid, e, "recipient");
		if (!r.success) return r;
		var a = o("WASmaxParseUtils").optional(o("WASmaxParseJid").attrJidEnum, e, "participant", o("WASmaxInMessagePublishEnums").USERJID_USERJID);
		if (!a.success) return a;
		var i = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
		if (!i.success) return i;
		var l = o("WASmaxInMessagePublishDeviceListStaleMixin").parseDeviceListStaleMixin(e), s = o("WASmaxInMessagePublishRefreshLIDMixin").parseRefreshLIDMixin(e), u = o("WASmaxInMessagePublishAckRcatMixin").parseAckRcatMixin(e);
		return o("WAResultOrError").makeResult(babelHelpers.extends({
			recipient: r.value,
			participant: a.value
		}, i.value, {
			deviceListStaleMixin: l.success ? l.value : null,
			refreshLIDMixin: s.success ? s.value : null,
			ackRcatMixin: u.success ? u.value : null
		}));
	}
	l.parseIndividualResponseSuccess = e;
}), 98);
