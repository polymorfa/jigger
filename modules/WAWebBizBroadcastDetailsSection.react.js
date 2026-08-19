__d("WAWebBizBroadcastDetailsSection.react", [
	"WAWebBizBroadcastPaymentMethodSection.react",
	"WAWebBizBroadcastsCreationStrings",
	"WAWebBizCard.react",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(6), n = e.budget, a = e.entryPoint, i = e.onBillingInfoChanged, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = { className: "x19aeb6u xh8yej3" }, t[0] = l) : l = t[0];
		var u;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (u = o("WAWebBizBroadcastsCreationStrings").getDetailsSectionTitle(), t[1] = u) : u = t[1];
		var c;
		return t[2] !== n || t[3] !== a || t[4] !== i ? (c = s.jsx("div", babelHelpers.extends({}, l, { children: s.jsx(r("WAWebBizCard.react"), {
			header: u,
			children: s.jsx(o("WAWebFlex.react").FlexColumn, { children: s.jsx(r("WAWebBizBroadcastPaymentMethodSection.react"), {
				budget: n,
				entryPoint: a,
				onBillingInfoChanged: i
			}) })
		}) })), t[2] = n, t[3] = a, t[4] = i, t[5] = c) : c = t[5], c;
	}
	l.default = u;
}), 98);
