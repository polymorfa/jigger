__d("useWAWebServerCustomerDataByLeadStage", [
	"WAWebContactManagerCustomerProfilesQuery",
	"WAWebContactType",
	"WAWebCustomerDataModel",
	"WAWebLeadStage",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useCallback, c = s.useMemo, d = s.useState;
	function m() {
		var e = o("react-compiler-runtime").c(11), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], e[0] = t) : t = e[0];
		var n = r("useWAWebAsync")(_, t), a = n.error, i = n.loading, l = n.value, s = d(p), u = s[0], c = s[1], m;
		e[1] !== l ? (m = l != null ? l : [], e[1] = l, e[2] = m) : m = e[2];
		var g;
		e[3] !== u || e[4] !== m ? (g = f(m, u), e[3] = u, e[4] = m, e[5] = g) : g = e[5];
		var h = g, y;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t, n, r) {
			c(function(e) {
				var n = new Map(e);
				return n.set(t, r), n;
			});
		}, e[6] = y) : y = e[6];
		var C = y, b;
		return e[7] !== a || e[8] !== h || e[9] !== i ? (b = {
			error: a,
			groupedData: h,
			loading: i,
			moveCustomer: C
		}, e[7] = a, e[8] = h, e[9] = i, e[10] = b) : b = e[10], b;
	}
	function p() {
		return new Map();
	}
	function _() {
		return o("WAWebContactManagerCustomerProfilesQuery").fetchCustomerProfileRecords();
	}
	function f(e, t) {
		var n = new Map();
		for (var r of o("WAWebLeadStage").LEAD_STAGE_ORDER) n.set(r, []);
		for (var a of e) {
			var i, l = String(a.chatJid), s = (i = t.get(l)) != null ? i : a.leadStage;
			if (!(s == null || s === o("WAWebLeadStage").LeadStage.NONE)) {
				var u = n.get(s);
				u != null && u.push(g(a, s));
			}
		}
		return n;
	}
	function g(e, t) {
		return new (o("WAWebCustomerDataModel")).CustomerData({
			acquisitionSource: e.acquisitionSource,
			address: null,
			altPhoneNumbers: null,
			birthday: null,
			chatJid: e.chatJid,
			contactType: o("WAWebContactType").ContactType.CUSTOMER,
			createdAt: e.modifiedAt,
			email: e.email,
			id: String(e.chatJid),
			lastOrder: null,
			leadStage: t,
			modifiedAt: e.modifiedAt
		});
	}
	l.default = m;
}), 98);
