__d("WAWebConsumerTransactionRow.react", [
	"WAWebConsumerPixStrings",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebL10nGetRenderedLocale",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
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
		var t = o("react-compiler-runtime").c(31), n = e.transaction, a = n.amountValue, i = n.counterpartyId, l = n.counterpartyName, d = n.direction, g = n.status, h;
		t[0] !== i ? (h = s.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: i,
			size: u,
			testId: "consumer_transaction_avatar"
		}), t[0] = i, t[1] = h) : h = t[1];
		var y;
		t[2] !== l ? (y = s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: l
		}), t[2] = l, t[3] = y) : y = t[3];
		var C;
		t[4] !== n.timestampMs ? (C = m(n.timestampMs), t[4] = n.timestampMs, t[5] = C) : C = t[5];
		var b;
		t[6] !== C ? (b = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: C
		}), t[6] = C, t[7] = b) : b = t[7];
		var v;
		t[8] !== y || t[9] !== b ? (v = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.textColumn,
			testid: "consumer_transaction_details",
			children: [y, b]
		}), t[8] = y, t[9] = b, t[10] = v) : v = t[10];
		var S;
		t[11] !== a || t[12] !== d || t[13] !== g || t[14] !== n.currency ? (S = a != null ? s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			xstyle: g === "failure" ? c.strikethrough : void 0,
			children: p(a, n.currency, d)
		}) : null, t[11] = a, t[12] = d, t[13] = g, t[14] = n.currency, t[15] = S) : S = t[15];
		var R;
		t[16] !== g ? (R = f(g), t[16] = g, t[17] = R) : R = t[17];
		var L;
		t[18] !== d || t[19] !== g ? (L = _(g, d), t[18] = d, t[19] = g, t[20] = L) : L = t[20];
		var E;
		t[21] !== R || t[22] !== L ? (E = s.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: R,
			children: L
		}), t[21] = R, t[22] = L, t[23] = E) : E = t[23];
		var k;
		t[24] !== S || t[25] !== E ? (k = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "end",
			xstyle: c.amountColumn,
			testid: "consumer_transaction_amount",
			children: [S, E]
		}), t[24] = S, t[25] = E, t[26] = k) : k = t[26];
		var I;
		return t[27] !== h || t[28] !== k || t[29] !== v ? (I = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: c.row,
			testid: "consumer_transaction_row",
			children: [
				h,
				v,
				k
			]
		}), t[27] = h, t[28] = k, t[29] = v, t[30] = I) : I = t[30], I;
	}
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
