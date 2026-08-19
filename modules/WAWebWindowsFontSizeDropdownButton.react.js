__d("WAWebWindowsFontSizeDropdownButton.react", [
	"fbt",
	"WALogger",
	"WAWebButton.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebIcChevronDownMenuIcon.react",
	"WAWebMenuItems.react",
	"WAWebSelectMenuItem.react",
	"WAWebSettingsSyncBridge",
	"WAWebText.react",
	"WAWebWindowsScalingControl.react",
	"WAWebWindowsScalingControlConstants",
	"WAWebWindowsScalingControlEventEmitter",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _, f, g = f || (f = o("react")), h = f, y = h.useLayoutEffect, C = h.useState, b = {
		menu: {
			overflowY: "x1odjw0f",
			paddingInlineStart: "xyiysdx",
			paddingInlineEnd: "x14vy60q",
			$$css: !0
		},
		buttonBorder: {
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			$$css: !0
		},
		buttonContent: {
			marginTop: "xdj266r",
			marginInlineEnd: "x1ows92d",
			marginBottom: "xat24cr",
			marginInlineStart: "x1a5kqlc",
			$$css: !0
		},
		buttonChevron: {
			marginInlineStart: "xvc5jky",
			color: "xhslqc4",
			$$css: !0
		},
		description: {
			marginTop: "x1de0gy",
			$$css: !0
		}
	}, v = "1", S = new Map([
		["0.8", s._(
			/*BTDS*/
			""
		)],
		["0.9", s._(
			/*BTDS*/
			""
		)],
		["1", s._(
			/*BTDS*/
			""
		)],
		["1.1", s._(
			/*BTDS*/
			""
		)],
		["1.25", s._(
			/*BTDS*/
			""
		)],
		["1.35", s._(
			/*BTDS*/
			""
		)],
		["1.5", s._(
			/*BTDS*/
			""
		)]
	]), R = 300, L = 320;
	function E() {
		var t = g.createRef(), n = C(v), a = n[0], i = n[1], l = C(!1), f = l[0], h = l[1], E = S.get(a);
		y(function() {
			o("WAWebWindowsScalingControl.react").WAWebScalingControlManager.getZoomLevel().then(function(t) {
				t == null ? (i(String(v)), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] zoom empty, using default"])))) : (i(String(t)), o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] Zoom level fetched successfully: ", ""])), t));
			}).catch(function() {
				o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] Disabling the font size dropdown"]))), h(!0);
			});
		}, []), o("useWAWebListener").useListener(r("WAWebWindowsScalingControlEventEmitter"), "zoomUpdate", function(e) {
			o("WAWebWindowsScalingControlConstants").AllowedZoomLevel.cast(e) && i(String(e));
		});
		var k = function(t) {
			if (o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] User selected zoom level ", ""])), t), !!S.has(t)) {
				var e = o("WAWebWindowsScalingControlConstants").AllowedZoomLevel.cast(Number(t));
				e ? (o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] Setting zoom level to ", ""])), e), o("WAWebWindowsScalingControl.react").WAWebScalingControlManager.setZoomLevel(e).then(function(t) {
					o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] Response received: ", ""])), JSON.stringify(t)), o("WAWebSettingsSyncBridge").sendSettingChange("fontSize", Math.trunc(e * 100));
				})) : o("WALogger").LOG(_ || (_ = babelHelpers.taggedTemplateLiteralLoose(["[scaling control] User selected zoom level ", " is not allowed"])), t);
			}
		}, I = Array.from(S.entries(), function(e) {
			var t = e[0], n = e[1];
			return g.jsx(o("WAWebMenuItems.react").SelectMenuItem, {
				optionId: t,
				primary: n
			}, t);
		}), T = g.jsx(o("WAWebText.react").WAWebTextMutedRefreshed, {
			xstyle: b.description,
			children: f ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		});
		return g.jsxs("div", {
			className: "x1yrsyyn x78zum5 xdt5ytf",
			children: [
				g.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
					disabled: f,
					ref: t,
					stretch: !0,
					borderStyles: b.buttonBorder,
					children: g.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						grow: 1,
						xstyle: b.buttonContent,
						children: [g.jsx(o("WAWebText.react").WAWebTextTitleRefreshed, { children: E }), g.jsx(o("WAWebIcChevronDownMenuIcon.react").IcChevronDownMenuIcon, { xstyle: b.buttonChevron })]
					})
				}),
				T,
				g.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					xstyle: b.menu,
					maxHeight: R,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.Center,
					minWidth: L,
					initHandling: "click",
					initialActiveOptionId: a,
					target: t,
					children: g.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
						onSelect: k,
						multiselect: !1,
						initialSelection: a,
						children: I
					})
				})
			]
		});
	}
	E.displayName = E.name + " [from " + i.id + "]", l.default = E;
}), 226);
