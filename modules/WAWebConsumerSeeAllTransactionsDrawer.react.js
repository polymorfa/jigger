__d("WAWebConsumerSeeAllTransactionsDrawer.react", [
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebConsumerPixStrings",
	"WAWebConsumerTransactionFilters",
	"WAWebConsumerTransactionRow.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebPaymentsGatingUtils",
	"WDSChip.react",
	"WDSDatePicker.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebConsumerTransactions"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useEffect, d = u.useMemo, m = u.useRef, p = u.useState, _ = [
		{
			id: "all",
			testid: "consumer-see-all-transactions-tab-all",
			label: o("WAWebConsumerPixStrings").getConsumerTransactionsTabAll
		},
		{
			id: "you_requested",
			testid: "consumer-see-all-transactions-tab-you-requested",
			label: o("WAWebConsumerPixStrings").getConsumerTransactionsTabYouRequested
		},
		{
			id: "they_requested",
			testid: "consumer-see-all-transactions-tab-they-requested",
			label: o("WAWebConsumerPixStrings").getConsumerTransactionsTabTheyRequested
		}
	], f = {
		centered: {
			alignItems: "x6s0dn4",
			paddingTop: "x1h678fw",
			paddingBottom: "xv6tirj",
			$$css: !0
		},
		dateField: {
			flexBasis: "x1r8uery",
			flexGrow: "x1iyjqo2",
			minWidth: "xeuugli",
			$$css: !0
		},
		dateFilterBar: {
			flexShrink: "x2lah0s",
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			paddingTop: "x16ovd2e",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		tabBar: {
			flexShrink: "x2lah0s",
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(34), n = e.onBack, a = e.ref, i = r("useWAWebConsumerTransactions")(!0), l = i.isLoading, u = i.transactions, d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = o("WAWebPaymentsGatingUtils").consumerTransactionsDateFilterEnabled(), t[0] = d) : d = t[0];
		var g = d, y = p("all"), C = y[0], b = y[1], v;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (v = {
			start: null,
			end: null
		}, t[1] = v) : v = t[1];
		var S = p(v), R = S[0], L = S[1], E;
		if (t[2] !== C || t[3] !== R || t[4] !== u) {
			var k = o("WAWebConsumerTransactionFilters").filterByTab(u, C);
			E = g ? o("WAWebConsumerTransactionFilters").filterByDateRange(k, R) : k, t[2] = C, t[3] = R, t[4] = u, t[5] = E;
		} else E = t[5];
		var I = E, T = m(!1), D, x;
		t[6] !== l || t[7] !== u.length ? (D = function() {
			!l && !T.current && (T.current = !0, o("WAWebConsumerPaymentsHomeLogger").logTransactionsListView(u.length));
		}, x = [l, u.length], t[6] = l, t[7] = u.length, t[8] = D, t[9] = x) : (D = t[8], x = t[9]), c(D, x);
		var $;
		if (l) {
			var P;
			t[10] === Symbol.for("react.memo_cache_sentinel") ? (P = s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: f.centered,
				children: s.jsx(r("WDSSpinner.react"), { testid: "consumer-see-all-transactions-loading-spinner" })
			}), t[10] = P) : P = t[10], $ = P;
		} else if (u.length === 0) {
			var N;
			t[11] === Symbol.for("react.memo_cache_sentinel") ? (N = s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: f.centered,
				children: s.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					testid: "consumer-see-all-transactions-empty",
					children: o("WAWebConsumerPixStrings").getConsumerTransactionsEmpty()
				})
			}), t[11] = N) : N = t[11], $ = N;
		} else {
			var M;
			if (t[12] !== R) {
				var w, A;
				M = g ? s.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: f.dateFilterBar,
					testid: "consumer-see-all-transactions-date-filter",
					children: [s.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: f.dateField,
						children: s.jsx(r("WDSDatePicker.react"), {
							mode: "single",
							value: R.start,
							onChange: function(t) {
								return L(function(e) {
									return babelHelpers.extends({}, e, { start: t });
								});
							},
							disableAfterDate: (w = R.end) != null ? w : void 0,
							label: o("WAWebConsumerPixStrings").getConsumerTransactionsDateFrom(),
							placeholder: o("WAWebConsumerPixStrings").getConsumerTransactionsDateFrom(),
							locale: r("WAWebL10N").getFullLocale(),
							testID: "consumer-see-all-transactions-date-from"
						})
					}), s.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: f.dateField,
						children: s.jsx(r("WDSDatePicker.react"), {
							mode: "single",
							value: R.end,
							onChange: function(t) {
								return L(function(e) {
									return babelHelpers.extends({}, e, { end: t });
								});
							},
							disableBeforeDate: (A = R.start) != null ? A : void 0,
							label: o("WAWebConsumerPixStrings").getConsumerTransactionsDateTo(),
							placeholder: o("WAWebConsumerPixStrings").getConsumerTransactionsDateTo(),
							locale: r("WAWebL10N").getFullLocale(),
							testID: "consumer-see-all-transactions-date-to"
						})
					})]
				}) : null, t[12] = R, t[13] = M;
			} else M = t[13];
			var F;
			t[14] !== C ? (F = _.map(function(e) {
				return s.jsx(r("WDSChip.react"), {
					testid: e.testid,
					label: e.label(),
					onPress: function() {
						return b(e.id);
					},
					isSelected: C === e.id
				}, e.id);
			}), t[14] = C, t[15] = F) : F = t[15];
			var O;
			t[16] !== F ? (O = s.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: f.tabBar,
				testid: "consumer-see-all-transactions-tabs",
				children: F
			}), t[16] = F, t[17] = O) : O = t[17];
			var B;
			t[18] !== I ? (B = I.length === 0 ? s.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: f.centered,
				children: s.jsx(r("WDSText.react"), {
					type: "Body1",
					colorName: "contentDeemphasized",
					testid: "consumer-see-all-transactions-empty",
					children: o("WAWebConsumerPixStrings").getConsumerTransactionsEmpty()
				})
			}) : I.map(h), t[18] = I, t[19] = B) : B = t[19];
			var W;
			t[20] !== M || t[21] !== O || t[22] !== B ? (W = s.jsxs(s.Fragment, { children: [
				M,
				O,
				B
			] }), t[20] = M, t[21] = O, t[22] = B, t[23] = W) : W = t[23], $ = W;
		}
		var q;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (q = {
			surface: "unknown",
			viewName: "consumer-see-all-transactions"
		}, t[24] = q) : q = t[24];
		var U;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (U = o("WAWebConsumerPixStrings").getConsumerTransactionsHeader(), t[25] = U) : U = t[25];
		var V;
		t[26] !== n ? (V = s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "consumer-see-all-transactions-header",
			title: U,
			onBack: n,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[26] = n, t[27] = V) : V = t[27];
		var H;
		t[28] !== $ ? (H = s.jsx(r("WAWebDrawerBody.react"), { children: $ }), t[28] = $, t[29] = H) : H = t[29];
		var G;
		return t[30] !== a || t[31] !== V || t[32] !== H ? (G = s.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "settings",
			testid: "consumer-see-all-transactions-drawer",
			tsNavigationData: q,
			children: [V, H]
		}), t[30] = a, t[31] = V, t[32] = H, t[33] = G) : G = t[33], G;
	}
	function h(e) {
		return s.jsx(r("WAWebConsumerTransactionRow.react"), { transaction: e }, e.id);
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 98);
