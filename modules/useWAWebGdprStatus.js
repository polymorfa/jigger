__d("useWAWebGdprStatus", [
	"Promise",
	"WADeprecatedWapParser",
	"WAWap",
	"WAWebCommsExperimental",
	"WAWebGdprConstants",
	"WAWebGdprHookUtils",
	"WAWebProtobufsE2E.pb",
	"decodeProtobuf",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebOnUnmount"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useMemo, m = u.useState, p = new (r("WADeprecatedWapParser"))("parseStatus", function(e) {
		if (!e.hasChild("gdpr")) return null;
		var t = e.child("gdpr");
		if (t.hasChild("document")) {
			var n = t.child("document");
			return {
				creation: n.attrTime("creation"),
				documentMessage: r("nullthrows")(o("decodeProtobuf").decodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n.contentBytes()).documentMessage),
				expiration: n.attrTime("expiration"),
				type: "GdprAvailableStatusResponse"
			};
		}
		return {
			timestamp: t.attrTime("timestamp"),
			type: "GdprPendingStatusResponse"
		};
	}), _ = new Map([[o("WAWebGdprConstants").ReportType.Account, o("WAWap").generateId()], [o("WAWebGdprConstants").ReportType.Newsletters, o("WAWap").generateId()]]);
	function f(e) {
		return e.some(function(e) {
			return (e == null ? void 0 : e.type) === "GdprPendingStatusResponse" || (e == null ? void 0 : e.type) === "GdprAvailableStatusResponse";
		});
	}
	function g(t, a, i) {
		var l = o("react-compiler-runtime").c(15), s;
		l[0] !== a ? (s = function() {
			_.set(a, o("WAWap").generateId());
		}, l[0] = a, l[1] = s) : s = l[1], r("useWAWebOnUnmount")(s);
		var u;
		l[2] !== a ? (u = _.get(a), l[2] = a, l[3] = u) : u = l[3];
		var c = m(u), d = c[0], f = c[1], g;
		l[4] !== d || l[5] !== t ? (g = t(r("nullthrows")(d)), l[4] = d, l[5] = t, l[6] = g) : g = l[6];
		var h = g, y, C;
		l[7] !== i || l[8] !== h ? (y = function(r) {
			return i && !r.aborted ? o("WAWebCommsExperimental").sendSuspensefulIq(h, p) : (e || (e = n("Promise"))).resolve();
		}, C = [h, i], l[7] = i, l[8] = h, l[9] = y, l[10] = C) : (y = l[9], C = l[10]);
		var b = r("useWAWebAsync")(y, C), v;
		l[11] === Symbol.for("react.memo_cache_sentinel") ? (v = function() {
			return f(o("WAWap").generateId());
		}, l[11] = v) : v = l[11];
		var S;
		return l[12] !== b.loading || l[13] !== b.value ? (S = [
			b.loading,
			b.value,
			v
		], l[12] = b.loading, l[13] = b.value, l[14] = S) : S = l[14], S;
	}
	function h(e, t) {
		var n = o("react-compiler-runtime").c(6), r;
		n[0] !== e ? (r = function(n) {
			return o("WAWebGdprHookUtils").getGdprIq(n, e, "status");
		}, n[0] = e, n[1] = r) : r = n[1];
		var a = r, i = g(a, e, t), l = i[0], s = i[1], u = i[2], c = s == null ? void 0 : s.result, d;
		return n[2] !== l || n[3] !== u || n[4] !== c ? (d = [
			l,
			c,
			u
		], n[2] = l, n[3] = u, n[4] = c, n[5] = d) : d = n[5], d;
	}
	l.GdprStatusWapParser = p, l.doOtherPendingRequestsExist = f, l.useGdprStatus = h;
}), 98);
