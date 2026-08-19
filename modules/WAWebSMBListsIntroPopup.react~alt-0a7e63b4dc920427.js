__d("WAWebSMBListsIntroPopup.react", [
	"fbt",
	"WAWebClickableLink.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawerManager",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexItem.react",
	"WAWebLabelFlowLoadable",
	"WAWebListPeopleIcon.react",
	"WAWebModalManager",
	"WAWebWamEnumUpdateEntryPoint",
	"WAWebWdsIllContactFiltersIcon.react",
	"WDSIconIcCheckCircle.react",
	"WDSIconIcSettings.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["content"], u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useRef, _ = {
		iconRow: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		header: {
			fontSize: "x1603h9y",
			fontWeight: "xk50ysn",
			lineHeight: "x37zpob",
			marginTop: "x9u28bd",
			textAlign: "x2b8uid",
			$$css: !0
		},
		content: {
			color: "xhslqc4",
			$$css: !0
		},
		contentItemRow: {
			marginTop: "x1nmyh1g",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function f(e) {
		var t = function() {
			o("WAWebModalManager").ModalManager.close(), o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebLabelFlowLoadable").LabelFlowLoadable, {
				isInitialStep: !0,
				entryPoint: o("WAWebWamEnumUpdateEntryPoint").UPDATE_ENTRY_POINT.LIST_NUX
			}));
		}, n = c.jsx(r("WAWebClickableLink.react"), {
			onClick: t,
			children: s._(
				/*BTDS*/
				""
			)
		}), a = [
			{
				Icon: o("WAWebListPeopleIcon.react").ListPeopleIcon,
				title: s._(
					/*BTDS*/
					""
				),
				key: "lists-easier-organize"
			},
			{
				Icon: r("WDSIconIcCheckCircle.react"),
				title: s._(
					/*BTDS*/
					""
				),
				key: "labels-stay-same"
			},
			{
				Icon: r("WDSIconIcSettings.react"),
				title: s._(
					/*BTDS*/
					"",
					[s._param("settingsLink", n)]
				),
				key: "edit-your-lists"
			}
		];
		return c.jsx(g, babelHelpers.extends({ content: a }, e));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.content, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = p();
		m(function() {
			var e;
			(e = i.current) == null || e.focus();
		}, []);
		var l = function() {
			o("WAWebModalManager").ModalManager.close(), a.onContinue == null || a.onContinue();
		};
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okText: r("WAWebFbtCommon")("Continue"),
			onOK: l,
			ref: i,
			children: [
				c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					xstyle: _.iconRow,
					children: c.jsx(r("WAWebFlexItem.react"), { children: c.jsx(o("WAWebWdsIllContactFiltersIcon.react").WdsIllContactFiltersIcon, {}) })
				}),
				c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					justify: "center",
					children: c.jsx(r("WAWebFlexItem.react"), {
						xstyle: _.header,
						children: s._(
							/*BTDS*/
							""
						)
					})
				}),
				c.jsx(o("WAWebFlex.react").FlexColumn, {
					xstyle: _.content,
					children: n.map(function(e) {
						var t = e.Icon, n = e.description, r = e.key, o = e.title;
						return c.jsx(h, {
							Icon: t,
							title: o,
							description: n
						}, r);
					})
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.Icon, n = e.description, a = e.title;
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: _.contentItemRow,
			children: [c.jsx(r("WAWebFlexItem.react"), {
				shrink: 0,
				className: "x1iw51ew xyo0t3i",
				children: c.jsx(t, {
					width: 24,
					iconXstyle: _.icon
				})
			}), c.jsxs(r("WAWebFlexItem.react"), { children: [c.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDefault",
				children: a
			}), n != null && c.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "contentDeemphasized",
				children: n
			})] })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.SMBListsIntroPopup = f;
}), 226);
