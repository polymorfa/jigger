__d("DeidentifiedGraphQLFetch", [
	"E2EEBackupUtil",
	"FBLogger",
	"MessagingWebACSGraphQLTokenStore",
	"OhaiClient",
	"OhaiFetchUtils",
	"OhaiWebConfig",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = r("OhaiWebConfig").ALLOWED_PROXY_URLS.length > 1 ? r("OhaiWebConfig").ALLOWED_PROXY_URLS[1] : r("OhaiWebConfig").DEFAULT_PROXY_URL, s = "https://www.facebook.com/api/graphql", u = new Map();
	function c(e) {
		var t = u.get(e);
		return t == null && (t = o("MessagingWebACSGraphQLTokenStore").buildMessagingWebAcsTokenStore(e), u.set(e, t)), t;
	}
	function d(e) {
		return c(e).then(function(e) {
			return e.prewarm();
		});
	}
	function m(e, t) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield c(e), o = yield n.getACSToken();
			if (o == null) throw r("FBLogger")(t).mustfixThrow("ACS token is null");
			return o;
		}), p.apply(this, arguments);
	}
	function _(e) {
		return {
			"X-ACS-ATTRIBUTE-IDENTIFIER": e.attributeIdentifier,
			"X-ACS-CONFIG-ID": e.serverConfigId,
			"X-ACS-CREDENTIAL": o("E2EEBackupUtil").encodeBase64Url(e.credential),
			"X-ACS-PROJECT-NAME": e.projectName,
			"X-ACS-TAG": o("E2EEBackupUtil").encodeBase64Url(e.tag)
		};
	}
	function f(e, t, n) {
		return g.apply(this, arguments);
	}
	function g() {
		return g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield C(e, t, n);
			return JSON.parse(r);
		}), g.apply(this, arguments);
	}
	function h(e, t, n) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var r = yield C(e, t, n);
			return JSON.parse(r);
		}), y.apply(this, arguments);
	}
	function C(e, t, n) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
			var i, l = yield m(a.acsProjectName, a.fbLoggerProject), u = yield a.getPublicKeyConfig();
			if (u == null) throw r("FBLogger")(a.fbLoggerProject).mustfixThrow("OHAI public key config is unavailable");
			var c = new URLSearchParams({
				doc_id: (i = t.id) != null ? i : "",
				fb_api_caller_class: a.fbApiCallerClass,
				fb_api_req_friendly_name: a.graphQlFriendlyName,
				variables: JSON.stringify(n)
			}).toString(), d = new Headers(babelHelpers.extends({}, _(l), {
				"Content-Type": "application/x-www-form-urlencoded",
				"X-FB-Friendly-Name": a.graphQlFriendlyName
			})), p = new Request(s, {
				body: c,
				headers: d,
				method: "POST"
			}), f = yield o("OhaiClient").encapsulateRequest(u, p, !0), g = f.ctx, h = f.enc, y = f.encapsulatedRequest, C = yield o("OhaiFetchUtils").fetchWithRetry(e, {
				body: y,
				headers: { "Content-Type": "message/ohttp-req" },
				method: "POST"
			}, a.fetchRetryLogger);
			C.ok || (yield S(C, a.fbLoggerProject));
			var b = yield C.arrayBuffer(), v = yield o("OhaiClient").decapsulateResponse(g, h, new Uint8Array(b));
			return v.text();
		}), b.apply(this, arguments);
	}
	function v(e) {
		return function(t, n) {
			return f(t, n, e);
		};
	}
	function S(e, t) {
		return R.apply(this, arguments);
	}
	function R() {
		return R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = "";
			try {
				n = yield e.text();
			} catch (e) {}
			throw r("FBLogger")(t).mustfixThrow("OHAI proxy returned HTTP %s: %s", e.status, n);
		}), R.apply(this, arguments);
	}
	l.prewarmDeidentifiedTokenCache = d, l.fetchDeidentifiedGraphQL = f, l.fetchDeidentifiedGraphQLWithTypedData = h, l.createDeidentifiedOhaiFetch = v;
}), 98);
