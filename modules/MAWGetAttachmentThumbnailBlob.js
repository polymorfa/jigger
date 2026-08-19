__d("MAWGetAttachmentThumbnailBlob", [
	"FBLogger",
	"I64",
	"InteractionTracingMetrics",
	"LSAuthorityLevel",
	"LSIntEnum",
	"MAWBridgeSendAndReceive",
	"MAWDbMedia",
	"Promise",
	"PromiseAnnotate",
	"WAHashUtils",
	"isStringNullOrEmpty",
	"nullthrows",
	"performanceNow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m = new Map(), p = new Map();
	function _(e, t) {
		m.set(e, {
			TAG: "done",
			url: t
		});
	}
	function f(e, t, n, a, i) {
		var l;
		if (e == null) return r("FBLogger")("messenger_web_media").warn("Unable to getThumbnailBlobDataUrlByMediaId because attachment is null, from %s", t), n == null || n.endFailAfterDelay("attachment_is_null", { string: { description: t } }), "";
		if ((u || (u = o("I64"))).equal(e.authorityLevel, (c || (c = o("LSIntEnum"))).ofNumber(r("LSAuthorityLevel").OPTIMISTIC))) {
			var s, _ = h(e);
			return _ == null || _.length === 0 ? (r("FBLogger")("messenger_web_media").warn("Unable to getThumbnailBlobDataUrlByMediaId because optimistic attachment url is null or empty, from %s", t), n == null || n.endFailAfterDelay("no_optimistic_attachment_url", { string: { description: t } }), "") : (n == null || n.addPoint("return_optimistic", { string: { description: t } }), p.set((s = e.offlineAttachmentId) != null ? s : e.attachmentFbid, _), _);
		}
		var f = a != null ? a : e.attachmentFbid, g = m.get(f), b = p.get((l = e.offlineAttachmentId) != null ? l : e.attachmentFbid);
		if (g != null) {
			if (g.TAG === "loading") {
				if (b != null) return b;
				throw g.urlPromise;
			}
			var v = r("isStringNullOrEmpty")(g.url);
			return v && (n == null || n.addPoint("attachment_state_preview_url_is_null_or_empty", { string: { description: t } })), g.url;
		}
		var S = isFinite(e.attachmentFbid) ? C(e.attachmentFbid, t, n, f, i) : y(e.attachmentFbid, t, n, f, i);
		if (m.set(f, {
			TAG: "loading",
			urlPromise: S
		}), b != null) return b;
		throw (d || (d = o("PromiseAnnotate"))).setDisplayName(S, "MAWGetAttachmentThumbnailBlob.getThumbnailBlobDataUrl"), S;
	}
	function g(e, t, n, r) {
		var a = r != null ? r : e, i = m.get(a);
		if (i != null) {
			if (i.TAG === "loading") throw i.urlPromise;
			return i.url;
		}
		var l = isFinite(e) ? C(e, t, n, a) : y(e, t, n, a);
		throw m.set(a, {
			TAG: "loading",
			urlPromise: l
		}), (d || (d = o("PromiseAnnotate"))).setDisplayName(l, "MAWGetAttachmentThumbnailBlob.getThumbnailBlobByAttachmentId"), l;
	}
	function h(e) {
		return e == null ? void 0 : e.previewUrl;
	}
	function y(t, a, i, l, u) {
		i == null || i.addPoint("fetch_thumbnail_blob_from_backend_start", { string: { description: a } });
		var c = (s || (s = r("performanceNow")))(), d = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getThumbnailBlobDataUrlByHashedPlaintextHash", {
			description: a,
			interactionId: u,
			plaintextHash: o("WAHashUtils").stringToPlaintextHash(t),
			qplInstanceKey: i == null ? void 0 : i.getInstanceKey()
		}).then(function(t) {
			return b(u, c, t ? "SUCCESS" : "FAIL"), t ? i == null || i.addPoint("fetch_thumbnail_blob_from_backend_success", { string: { description: a } }) : (i == null || i.endFailAfterDelay("fetch_thumbnail_blob_from_backend_fail", { string: {
				description: a,
				error: "empty-url"
			} }), r("FBLogger")("messenger_web_media").warn("Unable to getThumbnailBlobDataUrlByMediaId, backend returned empty url, from %s", a)), m.set(l, {
				TAG: "done",
				url: r("nullthrows")(t)
			}), i == null || i.addPoint("fetch_thumbnail_blob_url_set_in_cache"), u != null && r("InteractionTracingMetrics").addMarkerPoint(u, "fetch_thumbnail_blob_url_set_in_cache", "AppTiming"), (e || (e = n("Promise"))).resolve();
		}).catch(function(t) {
			return i == null || i.endFailAfterDelay("fetch_thumbnail_blob_from_backend_fail", { string: {
				description: a,
				error: t.message
			} }), b(u, c, "FAIL"), m.set(l, {
				TAG: "done",
				url: ""
			}), r("FBLogger")("messenger_web_media").catching(t).warn("Unable to getThumbnailBlobDataUrlByHashedPlaintextHash, from %s", a), (e || (e = n("Promise"))).resolve();
		});
		return d;
	}
	function C(t, a, i, l, u) {
		i == null || i.addPoint("fetch_thumbnail_blob_from_backend_start", { string: { description: a } });
		var c = (s || (s = r("performanceNow")))(), d = o("MAWBridgeSendAndReceive").sendAndReceive("backend", "getThumbnailBlobDataUrlByMediaId", {
			description: a,
			mediaId: o("MAWDbMedia").convertNumberToMediaId(Number.parseInt(t, 10)),
			qplInstanceKey: i == null ? void 0 : i.getInstanceKey()
		}).then(function(t) {
			return b(u, c, t ? "SUCCESS" : "FAIL"), t ? i == null || i.addPoint("fetch_thumbnail_blob_from_backend_success", { string: { description: a } }) : (i == null || i.endFailAfterDelay("fetch_thumbnail_blob_from_backend_fail", { string: {
				description: a,
				error: "empty-url"
			} }), r("FBLogger")("messenger_web_media").warn("Unable to getThumbnailBlobDataUrlByMediaId, backend returned empty url, from %s", a)), m.set(l, {
				TAG: "done",
				url: r("nullthrows")(t)
			}), i == null || i.addPoint("fetch_thumbnail_blob_url_set_in_cache"), u != null && r("InteractionTracingMetrics").addMarkerPoint(u, "fetch_thumbnail_blob_url_set_in_cache", "AppTiming"), (e || (e = n("Promise"))).resolve();
		}).catch(function(t) {
			return i == null || i.endFailAfterDelay("fetch_thumbnail_blob_from_backend_fail", { string: {
				description: a,
				error: t.message
			} }), b(u, c, "FAIL"), m.set(l, {
				TAG: "done",
				url: ""
			}), r("FBLogger")("messenger_web_media").catching(t).warn("Unable to getThumbnailBlobDataUrlByMediaId, from %s", a), (e || (e = n("Promise"))).resolve();
		});
		return d;
	}
	function b(e, t, n) {
		var o = (s || (s = r("performanceNow")))(), a = function(a) {
			r("InteractionTracingMetrics").addSubspan(a, "MAWFetchAttachmentThumbnailBlob", "AppTiming", t, o, {
				action: n,
				full_duration: (o - t) / 1e3
			});
		};
		e != null && a(e), r("InteractionTracingMetrics").currentInteractionLogger().forEach(function(e) {
			e.type === "INITIAL_LOAD" && a(e.traceId);
		});
	}
	l.setEagerThumbnailUrl = _, l.getThumbnailBlob_CausesSuspense = f, l.getThumbnailBlobByAttachmentId_CausesSuspense = g;
}), 98);
