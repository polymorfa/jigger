__d("WAWebConsumerTransactionRow.react", [
	"WAWebConsumerPixStrings",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebL10nGetRenderedLocale",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = 40, c = {
		row: {
			flexShrink: "x2lah0s",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		textColumn: {
			flexGrow: "x1iyjqo2",
			marginInlineStart: "xlese2p",
			minWidth: "xeuugli",
			$$css: !0
		},
		amountColumn: {
			marginInlineStart: "xlese2p",
			$$css: !0
		},
		strikethrough: {
			textDecoration: "xmqliwb",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.transaction, n = t.amountValue, a = t.counterpartyId, i = t.counterpartyName, l = t.direction, d = t.status;
		return s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.row,
			testid: "consumer_transaction_row",
			children: [
				s.jsx(o("WAWebDetailImage.react").DetailImage, {
					id: a,
					size: u,
					testId: "consumer_transaction_avatar"
				}),
				s.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: c.textColumn,
					testid: "consumer_transaction_details",
					children: [s.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: i
					}), s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: m(t.timestampMs)
					})]
				}),
				s.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "end",
					xstyle: c.amountColumn,
					testid: "consumer_transaction_amount",
					children: [n != null ? s.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						xstyle: d === "failure" ? c.strikethrough : void 0,
						children: p(n, t.currency, l)
					}) : null, s.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: f(d),
						children: _(d, l)
					})]
				})
			]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = String(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()).replace(/_/g, "-");
		return new Intl.DateTimeFormat(t, {
			month: "short",
			day: "numeric",
			timeZone: "America/Sao_Paulo"
		}).format(new Date(e));
	}
	function p(e, t, n) {
		var r = n === "outgoing" ? "-" : "+", o = Math.abs(e);
		if (t !== "BRL") {
			var a = o.toLocaleString("pt-BR", {
				style: "currency",
				currency: t
			});
			return r + " " + a;
		}
		var i = o.toLocaleString("pt-BR", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2
		});
		return r + " R$" + i;
	}
	function _(e, t) {
		return e === "success" ? o("WAWebConsumerPixStrings").getConsumerTransactionStatusCompleted() : e === "failure" ? o("WAWebConsumerPixStrings").getConsumerTransactionStatusFailed() : e === "pending" ? o("WAWebConsumerPixStrings").getConsumerTransactionStatusPending() : e === "requested" ? t === "incoming" ? o("WAWebConsumerPixStrings").getConsumerTransactionStatusRequestedByYou() : o("WAWebConsumerPixStrings").getConsumerTransactionStatusRequestedByThem() : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	function f(e) {
		return e === "success" ? "secondaryPositive" : e === "failure" ? "secondaryNegative" : e === "pending" || e === "requested" ? "contentDeemphasized" : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.default = d;
}), 98);
