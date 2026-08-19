__d("WAFlowsExternalDataChannelRequest", [
	"Promise",
	"WAFlowsError",
	"WAFlowsNativeWAMLogger",
	"asyncToGeneratorRuntime",
	"err"
], (function(t, n, r, o, a, i, l) {
	var e, s = 1, u = "WA|787118555984857|7bb1544a3599aa180ac9a3f7688ba243", c = "https://graph.whatsapp.com/graphql/catalog/";
	function d(e) {
		switch (e.code) {
			case o("WAFlowsError").WAFlowsShoppingErrorCodes.CATALOG_BAD_REQUEST_ERROR_400:
				var t = o("WAFlowsError").WAFlowsShoppingCodedError.CATALOG_BAD_REQUEST_ERROR_400;
				throw t.description = e.description, t.message = e.message, t;
			case o("WAFlowsError").WAFlowsShoppingErrorCodes.CATALOG_UNAUTHORISED_ERROR_401:
				var n = o("WAFlowsError").WAFlowsShoppingCodedError.CATALOG_UNAUTHORISED_ERROR_401;
				throw n.description = e.description, n.message = e.message, n;
			case o("WAFlowsError").WAFlowsShoppingErrorCodes.CATALOG_FORBIDDEN_ERROR_403:
				var r = o("WAFlowsError").WAFlowsShoppingCodedError.CATALOG_FORBIDDEN_ERROR_403;
				throw r.description = e.description, r.message = e.message, r;
			case o("WAFlowsError").WAFlowsShoppingErrorCodes.CATALOG_NOT_ACCEPTABLE_ERROR_406:
				var a = o("WAFlowsError").WAFlowsShoppingCodedError.CATALOG_NOT_ACCEPTABLE_ERROR_406;
				throw a.description = e.description, a.message = e.message, a;
			case o("WAFlowsError").WAFlowsShoppingErrorCodes.CATALOG_GET_PRODUCT_UNPROCESSABLE_DATA_422:
				var i = o("WAFlowsError").WAFlowsShoppingCodedError.CATALOG_GET_PRODUCT_UNPROCESSABLE_DATA_422;
				throw i.description = e.description, i.message = e.message, i;
			case o("WAFlowsError").WAFlowsShoppingErrorCodes.CATALOG_COMMERCE_FEATURES_DISABLED_ERROR_451:
				var l = o("WAFlowsError").WAFlowsShoppingCodedError.CATALOG_COMMERCE_FEATURES_DISABLED_ERROR_451;
				throw l.description = e.description, l.message = e.message, l;
			default:
				var s = o("WAFlowsError").WAFlowsShoppingCodedError.CATALOG_INTERNAL_SERVER_ERROR_500;
				throw s.description = e.description, s.message = e.message, s;
		}
	}
	function m(e, t, n) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var a = yield window.fetch(c, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"User-Agent": ""
				},
				body: JSON.stringify({
					access_token: u,
					doc_id: t,
					variables: e.payload
				})
			}), i = yield a.json();
			if (i.errors != null) {
				var l = i.errors[0], s = r("WAFlowsNativeWAMLogger")(n), m = s.logWAMFlowError, p = o("WAFlowsError").getErrorFromDataChannelResponse(i);
				p != null && m(p), d(l);
			}
			return i;
		}), p.apply(this, arguments);
	}
	function _(t, o, a) {
		for (var i, l = (i = t.max_retries) != null ? i : s, u = 0; u <= l;) try {
			return m(t, o, a);
		} catch (e) {
			if (u < l) {
				u++;
				continue;
			} else throw e;
		}
		return (e || (e = n("Promise"))).reject(r("err")("All retries exhausted"));
	}
	l.default = _;
}), 98);
