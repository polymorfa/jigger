__d("WAWebHandleVoipCallReceipt", [
	"WADeprecatedWapParser",
	"WALogger",
	"WAParsableWapNode",
	"WAWap",
	"WAWebCommsWapMd",
	"WAWebJidToWid",
	"WAWebVoipPeerTcToken",
	"WAWebVoipStackInterface"
], (function(t, n, r, o, a, i, l) {
	var e, s = new (r("WADeprecatedWapParser"))("callReceiptParser", function(e) {
		e.assertTag("receipt");
		var t = e.maybeChild("offer") || e.maybeChild("accept") || e.maybeChild("reject");
		if (!t) throw e.createParseError("Unrecognized call stanza");
		return {
			stanzaId: e.attrString("id"),
			type: e.maybeAttrString("type"),
			from: o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from"))
		};
	});
	async function u(t) {
		var n = s.parse(t);
		if (n.error) return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Parsing Error: ", ""])), n.error.toString()), Promise.reject(n.error);
		var r = n.success, a = r.from, i = r.stanzaId, l = r.type, u = await Promise.all([o("WAWebVoipStackInterface").getVoipStackInterface(), o("WAWebVoipPeerTcToken").fetchPeerTcToken(a)]), c = u[0], d = u[1];
		return await (c == null ? void 0 : c.handleIncomingSignalingReceipt(new (o("WAParsableWapNode")).ParsableWapNode("receipt", t), a.toString({
			legacy: !0,
			formatIncludeDevice: !0
		}), d)), o("WAWap").wap("ack", {
			id: o("WAWap").CUSTOM_STRING(i),
			to: o("WAWebCommsWapMd").JID(a),
			class: "receipt",
			type: o("WAWap").MAYBE_CUSTOM_STRING(l)
		});
	}
	l.handleCallReceipt = u;
}), 98);
