__d("WAWebHandlePushnameUpdate", [
	"WALogger",
	"WAWebABProps",
	"WAWebApiContact",
	"WAWebBackendApi",
	"WAWebDBBulkPersistContact",
	"WAWebEnvironment",
	"WAWebPromiseQueue",
	"WAWebWidFactory"
], (function(t, n, r, o, a, i, l) {
	var e, s = new (o("WAWebPromiseQueue")).PromiseQueue();
	function u(e, t) {
		return o("WAWebBackendApi").frontendSendAndReceive("updatePushname", {
			contactId: e,
			pushname: t
		});
	}
	function c(t, n, a) {
		a === void 0 && (a = !1);
		var i = o("WAWebWidFactory").asUserWidOrThrow(t);
		return s.enqueue(async function() {
			var t = void 0;
			if (!a || r("WAWebEnvironment").isGuest) t = await u(i, n);
			else if (o("WAWebABProps").getABPropConfigValue("wa_web_anr_pushname_check_enabled")) {
				var l = await o("WAWebApiContact").getContactRecord(i);
				t = (l == null ? void 0 : l.pushname) !== n;
			}
			(t === !0 || t === void 0) && (o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["updatePushName: set pushname for ", ""])), i.toLogString()), o("WAWebDBBulkPersistContact").persistContactUpdateBatched(i, { pushname: n }));
		});
	}
	l.updatePushname = c;
}), 98);
