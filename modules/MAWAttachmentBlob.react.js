__d("MAWAttachmentBlob.react", [
	"FBLogger",
	"I64",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MAWBridgeSendAndReceive",
	"MAWDbMedia",
	"Promise",
	"PromiseAnnotate",
	"WAHashUtils",
	"WAMediaQplHelper",
	"cr:332",
	"interaction-tracing",
	"performanceNow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = new Map(), p = new Map();
	function _(e, t) {
		m.set(e, {
			TAG: 1,
			value: t
		});
	}
	function f(e) {
		var t = m.get(e);
		return t != null && t.TAG === 1;
	}
	function g(t, a, i, l) {
		var s = l != null ? l : t, u = m.get(s);
		if (u != null) {
			if (u.TAG === 0) throw u.value;
			return u.value;
		}
		i == null || i.addPoint("fetch_data_blob_from_backend_start", { string: { fetch_by: isFinite(t) ? "mediaId" : "hashedPlaintextHash" } });
		var p = r("interaction-tracing").InteractionTracingCore.getPendingInteractions(), _ = (d || (d = r("performanceNow")))(), f = isFinite(t) ? o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByMediaId", {
			description: a,
			mediaId: o("MAWDbMedia").convertNumberToMediaId(Number.parseInt(t, 10)),
			qplInstanceKey: i == null ? void 0 : i.getInstanceKey()
		}).then(function(e) {
			return i == null || i.addPoint("fetch_data_blob_from_backend_success", { string: {
				blob_size_bucket: e != null ? o("WAMediaQplHelper").convertIntegerSizeToStringBucket(e.size) : void 0,
				description: a,
				fetch_by: "mediaId"
			} }), b(p, _, e != null ? "SUCCESS" : "FAIL"), m.set(s, {
				TAG: 1,
				value: e != null ? URL.createObjectURL(e) : ""
			}), i == null || i.addPoint("fetch_data_blob_url_set_in_cache"), (c || (c = n("Promise"))).resolve();
		}).catch(function(e) {
			return i == null || i.endFailAfterDelay("fetch_data_blob_from_backend_fail", { string: {
				description: a,
				error: e.message,
				fetch_by: "mediaId"
			} }), b(p, _, "FAIL"), m.set(s, {
				TAG: 1,
				value: ""
			}), r("FBLogger")("messenger_web_media").catching(e).mustfix("Unable to getBlobUrlByMediaId"), (c || (c = n("Promise"))).resolve();
		}) : o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getBlobDataUrlByHashedPlaintextHash", {
			description: a,
			plaintextHash: o("WAHashUtils").stringToPlaintextHash(t),
			qplInstanceKey: i == null ? void 0 : i.getInstanceKey()
		}).then(function(e) {
			return i == null || i.addPoint("fetch_data_blob_from_backend_success", { string: {
				blob_size_bucket: e != null ? o("WAMediaQplHelper").convertIntegerSizeToStringBucket(e.size) : void 0,
				description: a,
				fetch_by: "hashedPlaintextHash"
			} }), b(p, _, e != null ? "SUCCESS" : "FAIL"), m.set(s, {
				TAG: 1,
				value: e != null ? URL.createObjectURL(e) : ""
			}), i == null || i.addPoint("fetch_data_blob_url_set_in_cache"), n("cr:332") != null && n("cr:332").runBlobReadAndCompareResult({
				fileName: t,
				idbBlob: e
			}), (c || (c = n("Promise"))).resolve();
		}).catch(function(e) {
			return i == null || i.endFailAfterDelay("fetch_data_blob_from_backend_fail", { string: {
				description: a,
				error: e.message,
				fetch_by: "hashedPlaintextHash"
			} }), b(p, _, "FAIL"), m.set(s, {
				TAG: 1,
				value: ""
			}), r("FBLogger")("messenger_web_media").catching(e).mustfix("Unable to getBlobDataUrlByHashedPlaintextHash"), (c || (c = n("Promise"))).resolve();
		});
		throw (e || (e = o("PromiseAnnotate"))).setDisplayName(f, "MAWAttachmentBlob.getBlobDataUrl"), m.set(s, {
			TAG: 0,
			value: f
		}), f;
	}
	function h(e, t, n) {
		if (e == null) return r("FBLogger")("messenger_web_media").warn("Unable to getAttachmentBlob because attachment is null, from %s", t), n == null || n.endFailAfterDelay("attachment_is_null", { string: { description: t } }), "";
		if ((s || (s = o("I64"))).equal(e.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC))) {
			var a, i = (a = C(e)) != null ? a : "";
			return i == null || i.length === 0 ? (r("FBLogger")("messenger_web_media").warn("Unable to getAttachmentBlob because optimistic attachment url is null or empty, from %s", t), n == null || n.endFailAfterDelay("no_optimistic_attachment_url", { string: { description: t } }), "") : (n == null || n.addPoint("return_optimistic", { string: { description: t } }), i);
		}
		return g(e.attachmentFbid, t, n);
	}
	function y(e, t, n, a, i) {
		var l = "fetch_" + t + "_xma_blob", c = { string: { description: n } };
		if (e == null) return a == null || a.endFailAfterDelay(l + "_attachment_is_null", c), "";
		if ((s || (s = o("I64"))).equal(e.authorityLevel, (u || (u = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC)) && t === "preview") {
			var d = C(e);
			return d == null || d.length === 0 ? (r("FBLogger")("messenger_web_media").mustfix("Unable to getInfoUrlXMA because optimistic attachment url is null or empty, from %s", n), a == null || a.endFailAfterDelay(l + "_no_optimistic_attachment_url", c), "") : (a == null || a.addPoint(l + "_return_optimistic", c), d);
		}
		var m = i != null ? i : e.attachmentFbid + t, _ = p.get(m);
		if (_ != null) {
			if (_.TAG === 0) throw _.value;
			return _.value;
		}
		var f;
		switch (t) {
			case "preview":
				f = e.xmaPreviewFbid;
				break;
			case "header":
				f = e.xmaHeaderImageFbid;
				break;
			case "favicon":
				f = e.xmaFaviconFbid;
				break;
		}
		if (f == null) throw r("FBLogger")("messenger_web_media").mustfixThrow("Failed to getInfoUrlXMA because xma does not have required data. xmaId is %s, info type is %s, from %s", e.attachmentFbid, t, n);
		return g(f, n, a);
	}
	function C(e) {
		return e == null ? void 0 : e.previewUrl;
	}
	function b(e, t, n) {
		var o = (d || (d = r("performanceNow")))();
		e.forEach(function(e) {
			e.addSubspan("MAWFetchAttachmentBlob", "AppTiming", t, o, {
				action: n,
				full_duration: (o - t) / 1e3
			});
		});
	}
	l.setEagerAttachmentUrl = _, l.isEagerAttachmentUrlDone = f, l.getAttachmentBlobNonOptional_CausesSuspense = g, l.getAttachmentBlob_CausesSuspense = h, l.getInfoUrlXMA_CausesSuspense = y;
}), 98);
