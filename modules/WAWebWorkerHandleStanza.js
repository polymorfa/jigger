__d("WAWebWorkerHandleStanza", [
	"Promise",
	"WALogger",
	"WAWebCommsHandleWorkerCompatibleStanza",
	"WAWebOfflineHandler",
	"WAWebVoipBackendSwCallPlaceholderWriter",
	"WAWebWorkerHandleFailureApi",
	"WAWebWorkerHandleInfoBulletin",
	"WAWebWorkerHandleSuccessApi",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	var e, s;
	function u(e, t, n) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
			r === void 0 && (r = 0);
			var o = yield (s || (s = n("Promise"))).resolve(d(e, t, r));
			return o != null ? o : "NO_ACK";
		}), c.apply(this, arguments);
	}
	function d(t, n, a) {
		var i = t.attrs;
		if (i.offline) {
			var l = parseInt(i.t, 10), s = parseInt(i.offline, 10);
			o("WAWebOfflineHandler").OfflineMessageHandler.newOfflineStanza(l, a, s);
		}
		var u = o("WAWebCommsHandleWorkerCompatibleStanza").handleWorkerCompatibleStanza(t);
		if (u != null) return u;
		e: {
			if (t.tag === "ib") return r("WAWebWorkerHandleInfoBulletin")(t);
			if (t.tag === "failure") return r("WAWebWorkerHandleFailureApi")(t);
			if (t.tag === "success") return r("WAWebWorkerHandleSuccessApi")(t);
			if (t.tag === "call") return o("WAWebVoipBackendSwCallPlaceholderWriter").maybeWriteSwOfflineCallPlaceholder(t).then(function() {
				return "NO_ACK";
			});
			{
				o("WALogger").DEV_XMPP(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[worker]Comms.handleStanza unrecognized stanza ", ""])), t);
				break e;
			}
		}
	}
	l.default = u;
}), 98);
