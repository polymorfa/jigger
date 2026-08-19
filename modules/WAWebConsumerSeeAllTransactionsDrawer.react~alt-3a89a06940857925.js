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
		var t = e.onBack, n = e.ref, a = r("useWAWebConsumerTransactions")(!0), i = a.isLoading, l = a.transactions, u = o("WAWebPaymentsGatingUtils").consumerTransactionsDateFilterEnabled(), g = p("all"), h = g[0], y = g[1], C = p({
			start: null,
			end: null
		}), b = C[0], v = C[1], S = d(function() {
			var e = o("WAWebConsumerTransactionFilters").filterByTab(l, h);
			return u ? o("WAWebConsumerTransactionFilters").filterByDateRange(e, b) : e;
		}, [
			h,
			u,
			b,
			l
		]), R = m(!1);
		c(function() {
			!i && !R.current && (R.current = !0, o("WAWebConsumerPaymentsHomeLogger").logTransactionsListView(l.length));
		}, [i, l.length]);
		var L;
		if (i) L = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.centered,
			children: s.jsx(r("WDSSpinner.react"), { testid: "consumer-see-all-transactions-loading-spinner" })
		});
		else if (l.length === 0) L = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: f.centered,
			children: s.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				testid: "consumer-see-all-transactions-empty",
				children: o("WAWebConsumerPixStrings").getConsumerTransactionsEmpty()
			})
		});
		else {
			var E, k;
			L = s.jsxs(s.Fragment, { children: [
				u ? s.jsxs(o("WAWebFlex.react").FlexRow, {
					xstyle: f.dateFilterBar,
					testid: "consumer-see-all-transactions-date-filter",
					children: [s.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: f.dateField,
						children: s.jsx(r("WDSDatePicker.react"), {
							mode: "single",
							value: b.start,
							onChange: function(t) {
								return v(function(e) {
									return babelHelpers.extends({}, e, { start: t });
								});
							},
							disableAfterDate: (E = b.end) != null ? E : void 0,
							label: o("WAWebConsumerPixStrings").getConsumerTransactionsDateFrom(),
							placeholder: o("WAWebConsumerPixStrings").getConsumerTransactionsDateFrom(),
							locale: r("WAWebL10N").getFullLocale(),
							testID: "consumer-see-all-transactions-date-from"
						})
					}), s.jsx(o("WAWebFlex.react").FlexColumn, {
						xstyle: f.dateField,
						children: s.jsx(r("WDSDatePicker.react"), {
							mode: "single",
							value: b.end,
							onChange: function(t) {
								return v(function(e) {
									return babelHelpers.extends({}, e, { end: t });
								});
							},
							disableBeforeDate: (k = b.start) != null ? k : void 0,
							label: o("WAWebConsumerPixStrings").getConsumerTransactionsDateTo(),
							placeholder: o("WAWebConsumerPixStrings").getConsumerTransactionsDateTo(),
							locale: r("WAWebL10N").getFullLocale(),
							testID: "consumer-see-all-transactions-date-to"
						})
					})]
				}) : null,
				s.jsx(o("WAWebFlex.react").FlexRow, {
					xstyle: f.tabBar,
					testid: "consumer-see-all-transactions-tabs",
					children: _.map(function(e) {
						return s.jsx(r("WDSChip.react"), {
							testid: e.testid,
							label: e.label(),
							onPress: function() {
								return y(e.id);
							},
							isSelected: h === e.id
						}, e.id);
					})
				}),
				S.length === 0 ? s.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: f.centered,
					children: s.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDeemphasized",
						testid: "consumer-see-all-transactions-empty",
						children: o("WAWebConsumerPixStrings").getConsumerTransactionsEmpty()
					})
				}) : S.map(function(e) {
					return s.jsx(r("WAWebConsumerTransactionRow.react"), { transaction: e }, e.id);
				})
			] });
		}
		return s.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "consumer-see-all-transactions-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "consumer-see-all-transactions"
			},
			children: [s.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "consumer-see-all-transactions-header",
				title: o("WAWebConsumerPixStrings").getConsumerTransactionsHeader(),
				onBack: t,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), s.jsx(r("WAWebDrawerBody.react"), { children: L })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 98);
