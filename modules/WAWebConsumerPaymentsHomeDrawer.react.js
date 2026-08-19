__d("WAWebConsumerPaymentsHomeDrawer.react", [
	"fbt",
	"WAWebBrazilPixKeyFormattingUtils",
	"WAWebClickable.react",
	"WAWebConsumerAddPixKeyFlow.react",
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebConsumerPixStrings",
	"WAWebConsumerTransactionRow.react",
	"WAWebCustomPaymentMethods",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebFlex.react",
	"WAWebPaymentsGatingUtils",
	"WAWebPixLogoIcon.react",
	"WAWebPlusRoundedIcon.react",
	"WAWebRoundShape.react",
	"WAWebSocketModel",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsCustomPaymentMethods",
	"WAWebWdsIllSmbGetPaidPixIcon.react",
	"WDSButton.react",
	"WDSIconIcSend.react",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebConsumerHasPasskey",
	"useWAWebConsumerTransactions",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = 51, f = 24, g = 24, h = 40, y = "consumer-payments-home-pix-key-passkey-toast", C = {
		container: {
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		icon: {
			marginBottom: "xdqhqc9",
			$$css: !0
		},
		pixIconBackground: {
			fill: "xy6m8k3",
			$$css: !0
		},
		pixIconPrimary: {
			fill: "xgz6z4f",
			$$css: !0
		},
		pixKeyIconShape: {
			backgroundColor: "x1h3rtpe",
			height: "x1vqgdyp",
			width: "x100vrsf",
			$$css: !0
		},
		pixKeyRow: {
			paddingBottom: "xvpt6g3",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			paddingTop: "x1tiyuxx",
			$$css: !0
		},
		pixKeyRowInteractive: {
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			cursor: "x1ypdohk",
			backgroundColor: "xjbqb8w x1ubxc9n xbmkbis",
			$$css: !0
		},
		pixKeyTextColumn: {
			marginInlineStart: "xlese2p",
			$$css: !0
		},
		plusIconColor: {
			color: "x14ug900",
			$$css: !0
		},
		sectionTitle: {
			paddingInlineStart: "x1phvje8",
			paddingInlineEnd: "xcldk2z",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		text: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		title: {
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function b(e) {
		var t = o("react-compiler-runtime").c(18), n = e.onClose, a = e.onSeeAllTransactions, i = e.onSharePix, l = e.ref, c = p(o("WAWebUserPrefsCustomPaymentMethods").getPIX), _ = c[0], f = c[1], g = p(v), h = g[0], y = g[1], C;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			f(o("WAWebUserPrefsCustomPaymentMethods").getPIX()), y(!0);
		}, t[0] = C) : C = t[0], o("useWAWebListener").useListener(o("WAWebCustomPaymentMethods").CustomPaymentMethods, o("WAWebCustomPaymentMethods").CUSTOM_PAYMENT_METHODS_CHANGE_EVENT, C);
		var b;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (b = function() {
			o("WAWebSocketModel").Socket.hasSynced && y(!0);
		}, t[1] = b) : b = t[1], o("useWAWebListener").useListener(o("WAWebSocketModel").Socket, "change:hasSynced", b);
		var R = m(!1), L, E;
		t[2] !== h ? (L = function() {
			h && !R.current && (R.current = !0, o("WAWebConsumerPaymentsHomeLogger").logPaymentsHomeView(o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null));
		}, E = [h], t[2] = h, t[3] = L, t[4] = E) : (L = t[3], E = t[4]), d(L, E);
		var k;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (k = {
			surface: "unknown",
			viewName: "consumer-payments-home"
		}, t[5] = k) : k = t[5];
		var I;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		), t[6] = I) : I = t[6];
		var T;
		t[7] !== n ? (T = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "consumer-payments-home-header",
			title: I,
			onBack: n,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), t[7] = n, t[8] = T) : T = t[8];
		var D;
		t[9] !== h || t[10] !== a || t[11] !== i || t[12] !== _ ? (D = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(S, {
			isLoaded: h,
			onSeeAllTransactions: a,
			onSharePix: i,
			pixData: _
		}) }), t[9] = h, t[10] = a, t[11] = i, t[12] = _, t[13] = D) : D = t[13];
		var x;
		return t[14] !== l || t[15] !== T || t[16] !== D ? (x = u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "settings",
			testid: "consumer-payments-home-drawer",
			tsNavigationData: k,
			children: [T, D]
		}), t[14] = l, t[15] = T, t[16] = D, t[17] = x) : x = t[17], x;
	}
	function v() {
		return o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null || o("WAWebSocketModel").Socket.hasSynced;
	}
	function S(e) {
		var t = o("react-compiler-runtime").c(20), n = e.isLoaded, a = e.onSeeAllTransactions, i = e.onSharePix, l = e.pixData, s;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled(), t[0] = s) : s = t[0];
		var c = s, d = r("useWAWebConsumerHasPasskey")(c), m = d.hasPasskey;
		if (l == null && !n) {
			var p;
			return t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: C.container,
				children: u.jsx(r("WDSSpinner.react"), { testid: "consumer-payments-home-loading-spinner" })
			}), t[1] = p) : p = t[1], p;
		}
		var _ = L, h = R, y;
		t[2] !== i || t[3] !== l ? (y = function() {
			if (l == null) {
				o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal(i);
				return;
			}
			i();
		}, t[2] = i, t[3] = l, t[4] = y) : y = t[4];
		var b = y, v;
		t[5] !== l ? (v = l == null ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			shrink: 0,
			xstyle: C.container,
			children: [
				u.jsx(o("WAWebWdsIllSmbGetPaidPixIcon.react").WdsIllSmbGetPaidPixIcon, { xstyle: C.icon }),
				u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					xstyle: [C.text, C.title],
					children: o("WAWebConsumerPixStrings").getConsumerPaymentsHomeEmptyStateTitle()
				}),
				u.jsx("div", {
					className: "xv6tirj",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						xstyle: C.text,
						children: o("WAWebConsumerPixStrings").getConsumerAddPixKeySubtitle()
					})
				}),
				u.jsx(r("WDSButton.react"), {
					testid: "consumer-payments-home-add-pix-key-button",
					label: o("WAWebConsumerPixStrings").getConsumerPaymentsHomeAddPixKeyButton(),
					onPress: _,
					variant: "filled",
					size: "medium",
					widthMode: "flexible"
				})
			]
		}) : null, t[5] = l, t[6] = v) : v = t[6];
		var S;
		t[7] !== b ? (S = o("WAWebPaymentsGatingUtils").consumerSharePixEnabled() ? u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			title: o("WAWebConsumerPixStrings").getConsumerPixAreaHeader(),
			testid: "consumer-payments-home-pix-area-section",
			titleXStyle: C.sectionTitle,
			children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				icon: u.jsx("div", {
					className: "x6s0dn4 xfn3atn xlr9sxt xvvg52n xwd4zgb xq8v1ta x1pse0pq x78zum5 x1vqgdyp xl56j7k x100vrsf",
					children: u.jsx(r("WDSIconIcSend.react"), {
						height: g,
						width: g
					})
				}),
				testid: "consumer-payments-home-share-pix-row",
				onClick: b,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: o("WAWebConsumerPixStrings").getConsumerSharePixRowLabel()
				})
			})
		}) : null, t[7] = b, t[8] = S) : S = t[8];
		var E;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (E = o("WAWebConsumerPixStrings").getConsumerPaymentsHomePixKeyHeader(), t[9] = E) : E = t[9];
		var I;
		t[10] !== m || t[11] !== l ? (I = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			title: E,
			testid: "consumer-payments-home-pix-keys-section",
			titleXStyle: C.sectionTitle,
			children: l != null ? u.jsx(T, {
				hasPasskey: m,
				pixData: l
			}) : u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
				icon: u.jsx(r("WAWebRoundShape.react"), {
					disabled: !0,
					xstyle: C.pixKeyIconShape,
					children: u.jsx(o("WAWebPlusRoundedIcon.react").PlusRoundedIcon, {
						height: f,
						width: f,
						iconXstyle: C.plusIconColor
					})
				}),
				testid: "consumer-payments-home-add-pix-key-row",
				color: "disabled",
				onClick: h,
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDefault",
					children: o("WAWebConsumerPixStrings").getConsumerPixKeyLabel()
				})
			})
		}), t[10] = m, t[11] = l, t[12] = I) : I = t[12];
		var D;
		t[13] !== a ? (D = u.jsx(k, {
			enabled: c,
			onSeeAll: a
		}), t[13] = a, t[14] = D) : D = t[14];
		var x;
		return t[15] !== v || t[16] !== S || t[17] !== I || t[18] !== D ? (x = u.jsxs(u.Fragment, { children: [
			v,
			S,
			I,
			D
		] }), t[15] = v, t[16] = S, t[17] = I, t[18] = D, t[19] = x) : x = t[19], x;
	}
	function R() {
		o("WAWebConsumerPaymentsHomeLogger").logAddPixRowClick(), o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
	}
	function L() {
		o("WAWebConsumerPaymentsHomeLogger").logAddPixBannerClick(), o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
	}
	var E = 6;
	function k(e) {
		var t = o("react-compiler-runtime").c(11), n = e.enabled, a = e.onSeeAll, i = r("useWAWebConsumerTransactions")(n), l = i.isLoading, s = i.transactions;
		if (!n || l || s.length === 0) return null;
		var c;
		t[0] !== a ? (c = function() {
			o("WAWebConsumerPaymentsHomeLogger").logSeeAllTransactionsClick(), a();
		}, t[0] = a, t[1] = c) : c = t[1];
		var d = c, m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = o("WAWebConsumerPixStrings").getConsumerTransactionsHeader(), t[2] = m) : m = t[2];
		var p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebConsumerPixStrings").getConsumerTransactionsSeeAll(), t[3] = p) : p = t[3];
		var _;
		t[4] !== d ? (_ = u.jsx(r("WDSButton.react"), {
			variant: "outline",
			size: "small",
			label: p,
			onPress: d,
			testid: "consumer-payments-home-see-all-transactions"
		}), t[4] = d, t[5] = _) : _ = t[5];
		var f;
		t[6] !== s ? (f = s.slice(0, E).map(I), t[6] = s, t[7] = f) : f = t[7];
		var g;
		return t[8] !== _ || t[9] !== f ? (g = u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			title: m,
			subtitle: _,
			testid: "consumer-payments-home-transactions-section",
			titleXStyle: C.sectionTitle,
			children: f
		}), t[8] = _, t[9] = f, t[10] = g) : g = t[10], g;
	}
	function I(e) {
		return u.jsx(r("WAWebConsumerTransactionRow.react"), { transaction: e }, e.id);
	}
	I.displayName = I.name + " [from " + i.id + "]";
	function T(e) {
		var t = o("react-compiler-runtime").c(19), n = e.hasPasskey, a = e.pixData, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled(), t[0] = i) : i = t[0];
		var l = i, s;
		t[1] !== n ? (s = function() {
			if (o("WAWebConsumerPaymentsHomeLogger").logPixRowClick(), n) {
				o("WAWebConsumerPaymentsHomeLogger").logPasskeyBlockedEditDeletePixView(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					id: y,
					msg: o("WAWebConsumerPixStrings").getConsumerPixPasskeyBlockedToast()
				}));
				return;
			}
			o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
		}, t[1] = n, t[2] = s) : s = t[2];
		var c = s, d = l ? c : null, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = l ? o("WAWebConsumerPixStrings").getConsumerPixEditKeyAriaLabel() : void 0, t[3] = m) : m = t[3];
		var p;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (p = [C.pixKeyRow, l && C.pixKeyRowInteractive], t[4] = p) : p = t[4];
		var f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx(r("WAWebRoundShape.react"), {
			disabled: !0,
			xstyle: C.pixKeyIconShape,
			children: u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
				height: _,
				width: _,
				innerStyles: {
					background: C.pixIconBackground,
					primary: C.pixIconPrimary
				}
			})
		}), t[5] = f) : f = t[5];
		var g;
		t[6] !== a.display_name ? (g = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: a.display_name
		}), t[6] = a.display_name, t[7] = g) : g = t[7];
		var h;
		t[8] !== a.key || t[9] !== a.key_type ? (h = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(a.key, a.key_type), t[8] = a.key, t[9] = a.key_type, t[10] = h) : h = t[10];
		var b;
		t[11] !== h ? (b = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			children: h
		}), t[11] = h, t[12] = b) : b = t[12];
		var v;
		t[13] !== g || t[14] !== b ? (v = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [f, u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: C.pixKeyTextColumn,
				children: [g, b]
			})]
		}), t[13] = g, t[14] = b, t[15] = v) : v = t[15];
		var S;
		return t[16] !== v || t[17] !== d ? (S = u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: d,
			ariaLabel: m,
			dataTestId: "consumer-payments-home-pix-key-row",
			xstyle: p,
			children: v
		}), t[16] = v, t[17] = d, t[18] = S) : S = t[18], S;
	}
	l.default = b;
}), 226);
