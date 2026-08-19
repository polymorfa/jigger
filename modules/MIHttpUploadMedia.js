__d("MIHttpUploadMedia", [
	"FBLogger",
	"MAWRotateDTSG",
	"MIMediaUploadAuth",
	"WADirectPath",
	"WAResultOrError",
	"asyncToGeneratorRuntime",
	"err",
	"fetch",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return s.apply(this, arguments);
	}
	function s() {
		return s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			try {
				var t, n = yield e.json();
				return (n == null || (t = n.debug_info) == null ? void 0 : t.type) === "NotAuthorizedError";
			} catch (e) {
				return !1;
			}
		}), s.apply(this, arguments);
	}
	function u(e, t, n) {
		return c.apply(this, arguments);
	}
	function c() {
		return c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = n.entityLength, i = n.entityName, l = n.mediaType, s = n.offset, u = e + "&" + o("MIMediaUploadAuth").buildMIAuthQueryString();
			try {
				var c = yield r("fetch")(u, {
					body: new Blob([t]),
					cache: "no-store",
					credentials: "include",
					headers: {
						"Content-Type": "application/octet-stream",
						Offset: String(s),
						"X-Entity-Length": String(a),
						"X-Entity-Name": i,
						"X-Entity-Type": "application/octet-stream",
						desired_upload_handler: "encrypted_backups",
						media_type: l
					},
					method: "POST",
					mode: "cors"
				});
				return r("FBLogger")("mi_upload").info("MIHttpUploadMedia: HTTP status %s", c.status), c;
			} catch (e) {
				throw r("FBLogger")("mi_upload").catching(r("getErrorSafe")(e)).mustfix("fail to initiate fetch"), e;
			}
		}), c.apply(this, arguments);
	}
	function d(e, t, n) {
		return m.apply(this, arguments);
	}
	function m() {
		return m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
			var i = yield u(t, n, a);
			if (i.status === 400 && (yield e(i))) {
				r("FBLogger")("mi_upload").info("MIHttpUploadMedia: NotAuthorizedError, rotating DTSG");
				try {
					(yield o("MAWRotateDTSG").tryRotateDTSG()) && (i = yield u(t, n, a));
				} catch (e) {
					r("FBLogger")("mi_upload").catching(r("getErrorSafe")(e)).mustfix("failed to rotate DTSG");
				}
			}
			switch (i.status) {
				case 200: return i.json().then(function(e) {
					if (!Object.prototype.hasOwnProperty.call(e, "direct_path")) throw r("err")("direct_path not available in MI upload response");
					if (typeof e.direct_path != "string") throw r("err")("directPath: \"" + e.direct_path + "\" is not a string");
					if (e.object_id && typeof e.object_id != "string") throw r("err")("objectId: \"" + e.object_id + "\" is not a string");
					if (e.handle && typeof e.handle != "string") throw r("err")("handle: \"" + e.handle + "\" is not a string");
					var t = {
						directPath: o("WADirectPath").unsafeCastToDirectPath(e.direct_path),
						handle: e.handle,
						objectId: e.object_id
					};
					return o("WAResultOrError").makeResult(t);
				}).catch(function(e) {
					return r("FBLogger")("mi_upload").catching(r("getErrorSafe")(e)).mustfix("fail to parse response body"), o("WAResultOrError").makeError("body-network-error");
				});
				case 408: return o("WAResultOrError").makeError("server-timeout");
				case 413: return o("WAResultOrError").makeError("payload-too-large");
				case 415: return o("WAResultOrError").makeError("invalid-media");
				case 429:
				case 507: return o("WAResultOrError").makeError("upload-throttled");
				default: return i.status >= 400 && i.status < 500 ? o("WAResultOrError").makeError("request-error") : o("WAResultOrError").makeError("unspecified-http-error");
			}
		}), m.apply(this, arguments);
	}
	l.miHttpUploadMedia = d;
}), 98);
