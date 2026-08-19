__d("useWAWebSaveableProfilePicUrl", [
	"WAAbortError",
	"WALogger",
	"WAWebFetchImageBlobUrl",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = u.useEffect, d = u.useState;
	function m(t) {
		var a = d(function() {
			return {
				sourceUrl: t,
				objectUrl: null
			};
		}), i = a[0], l = a[1];
		return i.sourceUrl !== t && l({
			sourceUrl: t,
			objectUrl: null
		}), c(function() {
			if (!(t == null || t === "" || p(t))) {
				var a = new AbortController(), i = null, s = null, u = (function() {
					var u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
						var n;
						try {
							n = yield r("WAWebFetchImageBlobUrl")(t, a.signal);
						} catch (t) {
							var u = r("getErrorSafe")(t);
							if (u.name === o("WAAbortError").ABORT_ERROR) return;
							o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["profile-pic saveable url unavailable: ", ""])), u.message).sendLogs("profile-pic-saveable-fetch-error", { sampling: .01 });
							return;
						}
						if (a.signal.aborted) {
							window.URL.revokeObjectURL(n);
							return;
						}
						i = n, s = new Image(), s.src = n, l({
							sourceUrl: t,
							objectUrl: n
						});
					});
					return function() {
						return u.apply(this, arguments);
					};
				})();
				return u(), function() {
					a.abort(), s = null, i != null && window.URL.revokeObjectURL(i);
				};
			}
		}, [t]), i.sourceUrl === t ? i.objectUrl : null;
	}
	function p(e) {
		return e.startsWith("blob:") || e.startsWith("data:");
	}
	l.default = m;
}), 98);
