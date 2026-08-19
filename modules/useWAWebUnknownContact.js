__d("useWAWebUnknownContact", [
	"WALogger",
	"WAPhoneFindCC",
	"WAWebContactlessChatUtils",
	"WAWebHttpErrors",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebNetworkStatus",
	"WAWebPhoneNumberSearch",
	"WAWebTrunkPrefixUtils",
	"WAWebUserPrefsMeUser",
	"asyncToGeneratorRuntime",
	"getErrorSafe",
	"react",
	"useWAWebAsync",
	"useWAWebDebouncedUsernameLookup",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = u || (u = o("react")), d = c.useCallback, m = c.useRef, p = c.useState;
	function _(t) {
		var a = t.alwaysRequireUsernameAtPrefix, i = t.onLoading, l = t.phoneOrUsername, u = t.requestOrigin, c = t.searchPhoneNumber, _ = t.searchUsername, g = o("WAWebPhoneNumberSearch").stripInvisibleChars(l), h = m(o("WAWebContactlessChatUtils").queryExistsAndGetChatCached()), y = p(), C = y[0], b = y[1], v = p(!1), S = v[0], R = v[1], L = p(!1), E = L[0], k = L[1], I = p(null), T = I[0], D = I[1], x = function(t) {
			R(t), i == null || i(t);
		}, $ = r("useWAWebStableCallback")(function(e) {
			if (e != null && e.searchQuery === g && (C == null || C.searchQuery !== e.searchQuery || C.wid == null && e.wid != null)) {
				b(e);
				return;
			}
		}), P = d(function(e) {
			return f(g, e, c);
		}, [g, c]), N = r("useWAWebStableCallback")(n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			try {
				if (D(null), P(g)) {
					var t, n, a = (g.trim()[0] === "+" ? "+" : "") + o("WAPhoneFindCC").extractDigits(g), i = !!((t = h.current) != null && t.isCached(a));
					if (!i && (x(!0), !r("WAWebNetworkStatus").online)) throw new (o("WAWebHttpErrors")).HttpNetworkError();
					var l = yield (n = h.current) == null ? void 0 : n.getOrRun(a);
					if (l == null) return;
					var u = l.chat, c = l.wid;
					if (u != null && o("WAWebUserPrefsMeUser").isMePnUser(u.id) || c != null && o("WAWebUserPrefsMeUser").isMePnUser(c)) return;
					$(babelHelpers.extends({}, l, { searchQuery: g }));
				}
			} catch (t) {
				D(t instanceof Error ? t : r("getErrorSafe")(t)), t instanceof o("WAWebHttpErrors").HttpNetworkError ? o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([" Unable to connect to the internet: ", ""])), t) : o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Phone number existence check failed with exceptions: ", ""])), t).sendLogs("phoneNumberExistence-unknownContactSearch");
			} finally {
				x(!1);
			}
		}));
		return r("useWAWebAsync")(N, [g]), o("useWAWebDebouncedUsernameLookup").useDebouncedUsernameLookup({
			text: g,
			setUnknownContactInfo: $,
			setLoading: k,
			searchUsername: _,
			alwaysRequireUsernameAtPrefix: a,
			requestOrigin: u
		}), {
			unknownContactInfo: (C == null ? void 0 : C.searchQuery) === g ? C : null,
			loading: S || E,
			error: T,
			onRetry: N
		};
	}
	function f(e, t, n) {
		if (!o("WAWebContactlessChatUtils").PHONE_NUMBER_VALIDATION_REGEX.test(e)) return !1;
		var r = o("WAPhoneFindCC").extractDigits(t), a = o("WAPhoneFindCC").findCC(r), i = r.substring(a.length), l = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(Number(a), i), s = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
		if (s != null && !l && t.trim()[0] !== "+") {
			var u = o("WAPhoneFindCC").findCC(s.user), c = o("WAWebTrunkPrefixUtils").trimTrunkPrefix(u, r);
			l = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").isPhoneNumberValid(Number(u), c);
		}
		if (s != null) {
			var d = s.user, m = o("WAPhoneFindCC").extractDigits(d);
			if (r === m) return !1;
		}
		return !!e && l && n;
	}
	l.default = _;
}), 98);
