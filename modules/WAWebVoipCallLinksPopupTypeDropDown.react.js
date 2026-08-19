__d("WAWebVoipCallLinksPopupTypeDropDown.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebSelectMenuItem.react",
	"WAWebText.react",
	"WDSButton.react",
	"WDSIconIcCall.react",
	"WDSIconIcVideocam.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingInlineEnd15: {
		paddingInlineEnd: "x1q3ajuy",
		$$css: !0
	} }, m = { buttonCustomizations: {
		borderStartStartRadius: "xyi3aci",
		borderStartEndRadius: "xwf5gio",
		borderEndEndRadius: "x1p453bz",
		borderEndStartRadius: "x1suzm8a",
		$$css: !0
	} }, p = n("$InternalEnum").Mirrored(["VIDEO", "VOICE"]);
	function _(t) {
		var n = t.callLinkType, a = t.onCallLinkTypeSelectionChanged, i = c.jsx(r("WDSIconIcVideocam.react"), {}), l = c.jsx(r("WDSIconIcCall.react"), {}), u = c.createRef(), _ = c.createRef();
		return c.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 16,
			children: [c.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: d.paddingInlineEnd15,
				children: c.jsx(r("WDSButton.react"), {
					variant: "outline",
					size: "medium",
					type: "default",
					ref: u,
					xstyle: [
						m.buttonCustomizations,
						o("WDSPaddings.stylex").wdsPaddings.paddingEnd0,
						o("WDSPaddings.stylex").wdsPaddings.paddingStart8
					],
					Icon: n === p.VIDEO ? r("WDSIconIcVideocam.react") : r("WDSIconIcCall.react"),
					label: n === p.VIDEO ? s._(
						/*BTDS*/
						""
					) : s._(
						/*BTDS*/
						""
					),
					showEndDropdownIcon: !0,
					onPress: function() {
						var e;
						(e = _.current) == null || e.showPopover();
					}
				})
			}), c.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
				controllerRef: _,
				position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
				alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
				minWidth: 140,
				target: u,
				children: c.jsxs(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
					multiselect: !1,
					initialSelection: n,
					onSelect: function(n) {
						var t = p.cast(n);
						if (t == null) {
							o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["call links popup dropdown: unexpected invalid call type: ", ""])), n);
							return;
						}
						a(t);
					},
					children: [c.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
						optionId: p.VIDEO,
						primary: c.jsx(f, {
							icon: i,
							text: s._(
								/*BTDS*/
								""
							)
						})
					}), c.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
						optionId: p.VOICE,
						primary: c.jsx(f, {
							icon: l,
							text: s._(
								/*BTDS*/
								""
							)
						})
					})]
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = o("react-compiler-runtime").c(8), n = e.icon, r = e.text, a;
		t[0] !== n ? (a = c.jsx(o("WAWebFlex.react").FlexItem, { children: n }), t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = [o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSMargins.stylex").wdsMargins.marginStart8], t[2] = i) : i = t[2];
		var l;
		t[3] !== r ? (l = c.jsx(o("WAWebFlex.react").FlexItem, {
			xstyle: i,
			align: "start",
			children: c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
				color: "primary",
				children: r
			})
		}), t[3] = r, t[4] = l) : l = t[4];
		var s;
		return t[5] !== a || t[6] !== l ? (s = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "start",
			children: [a, l]
		}), t[5] = a, t[6] = l, t[7] = s) : s = t[7], s;
	}
	l.CallLinkType = p, l.WAWebVoipCallLinksPopupTypeDropDown = _;
}), 226);
