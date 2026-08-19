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
		var t = e.onClose, n = e.onSeeAllTransactions, a = e.onSharePix, i = e.ref, l = p(o("WAWebUserPrefsCustomPaymentMethods").getPIX), c = l[0], _ = l[1], f = p(function() {
			return o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null || o("WAWebSocketModel").Socket.hasSynced;
		}), g = f[0], h = f[1];
		o("useWAWebListener").useListener(o("WAWebCustomPaymentMethods").CustomPaymentMethods, o("WAWebCustomPaymentMethods").CUSTOM_PAYMENT_METHODS_CHANGE_EVENT, function() {
			_(o("WAWebUserPrefsCustomPaymentMethods").getPIX()), h(!0);
		}), o("useWAWebListener").useListener(o("WAWebSocketModel").Socket, "change:hasSynced", function() {
			o("WAWebSocketModel").Socket.hasSynced && h(!0);
		});
		var y = m(!1);
		return d(function() {
			g && !y.current && (y.current = !0, o("WAWebConsumerPaymentsHomeLogger").logPaymentsHomeView(o("WAWebUserPrefsCustomPaymentMethods").getPIX() != null));
		}, [g]), u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "consumer-payments-home-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "consumer-payments-home"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				testid: "consumer-payments-home-header",
				title: s._(
					/*BTDS*/
					""
				),
				onBack: t,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(v, {
				isLoaded: g,
				onSeeAllTransactions: n,
				onSharePix: a,
				pixData: c
			}) })]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(e) {
		var t = e.isLoaded, n = e.onSeeAllTransactions, a = e.onSharePix, i = e.pixData, l = o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled(), s = r("useWAWebConsumerHasPasskey")(l), c = s.hasPasskey;
		if (i == null && !t) return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: C.container,
			children: u.jsx(r("WDSSpinner.react"), { testid: "consumer-payments-home-loading-spinner" })
		});
		var d = function() {
			o("WAWebConsumerPaymentsHomeLogger").logAddPixBannerClick(), o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
		}, m = function() {
			o("WAWebConsumerPaymentsHomeLogger").logAddPixRowClick(), o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
		}, p = function() {
			if (i == null) {
				o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal(a);
				return;
			}
			a();
		};
		return u.jsxs(u.Fragment, { children: [
			i == null ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
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
						onPress: d,
						variant: "filled",
						size: "medium",
						widthMode: "flexible"
					})
				]
			}) : null,
			o("WAWebPaymentsGatingUtils").consumerSharePixEnabled() ? u.jsx(r("WAWebDrawerSection.react"), {
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
					onClick: p,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: o("WAWebConsumerPixStrings").getConsumerSharePixRowLabel()
					})
				})
			}) : null,
			u.jsx(r("WAWebDrawerSection.react"), {
				animation: !1,
				title: o("WAWebConsumerPixStrings").getConsumerPaymentsHomePixKeyHeader(),
				testid: "consumer-payments-home-pix-keys-section",
				titleXStyle: C.sectionTitle,
				children: i != null ? u.jsx(L, {
					hasPasskey: c,
					pixData: i
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
					onClick: m,
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						children: o("WAWebConsumerPixStrings").getConsumerPixKeyLabel()
					})
				})
			}),
			u.jsx(R, {
				enabled: l,
				onSeeAll: n
			})
		] });
	}
	v.displayName = v.name + " [from " + i.id + "]";
	var S = 6;
	function R(e) {
		var t = e.enabled, n = e.onSeeAll, a = r("useWAWebConsumerTransactions")(t), i = a.isLoading, l = a.transactions;
		if (!t || i || l.length === 0) return null;
		var s = function() {
			o("WAWebConsumerPaymentsHomeLogger").logSeeAllTransactionsClick(), n();
		};
		return u.jsx(r("WAWebDrawerSection.react"), {
			animation: !1,
			title: o("WAWebConsumerPixStrings").getConsumerTransactionsHeader(),
			subtitle: u.jsx(r("WDSButton.react"), {
				variant: "outline",
				size: "small",
				label: o("WAWebConsumerPixStrings").getConsumerTransactionsSeeAll(),
				onPress: s,
				testid: "consumer-payments-home-see-all-transactions"
			}),
			testid: "consumer-payments-home-transactions-section",
			titleXStyle: C.sectionTitle,
			children: l.slice(0, S).map(function(e) {
				return u.jsx(r("WAWebConsumerTransactionRow.react"), { transaction: e }, e.id);
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(e) {
		var t = e.hasPasskey, n = e.pixData, a = o("WAWebPaymentsGatingUtils").consumerPixActionsEnabled(), i = function() {
			if (o("WAWebConsumerPaymentsHomeLogger").logPixRowClick(), t) {
				o("WAWebConsumerPaymentsHomeLogger").logPasskeyBlockedEditDeletePixView(), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
					id: y,
					msg: o("WAWebConsumerPixStrings").getConsumerPixPasskeyBlockedToast()
				}));
				return;
			}
			o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
		};
		return u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: a ? i : null,
			ariaLabel: a ? o("WAWebConsumerPixStrings").getConsumerPixEditKeyAriaLabel() : void 0,
			dataTestId: "consumer-payments-home-pix-key-row",
			xstyle: [C.pixKeyRow, a && C.pixKeyRowInteractive],
			children: u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				children: [u.jsx(r("WAWebRoundShape.react"), {
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
				}), u.jsxs(o("WAWebFlex.react").FlexColumn, {
					xstyle: C.pixKeyTextColumn,
					children: [u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						children: n.display_name
					}), u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDeemphasized",
						children: o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(n.key, n.key_type)
					})]
				})]
			})
		});
	}
	L.displayName = L.name + " [from " + i.id + "]", l.default = b;
}), 226);
