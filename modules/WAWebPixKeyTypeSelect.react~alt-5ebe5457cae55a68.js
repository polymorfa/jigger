__d("WAWebPixKeyTypeSelect.react", [
	"fbt",
	"WAWebBizPaymentsBrazilAddPixModal.react",
	"WAWebConsumerPixStrings",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebFlex.react",
	"WAWebMobilePlatforms",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUserPrefsTypes",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcChevronDown.react",
	"WDSTextField.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useRef, m = c.useState, p = {
		row: {
			height: "xdd8jsf",
			paddingBottom: "x1l90r2v",
			width: "xh8yej3",
			$$css: !0
		},
		column: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function _(e) {
		var t, n, a = e.onSelectChange, i = e.pixKeyType, l = o("WAWebMobilePlatforms").isSMB() ? Array.from(o("WAWebUserPrefsTypes").PixKeyType.members(), function(e) {
			return {
				keyType: e,
				label: o("WAWebBizPaymentsBrazilAddPixModal.react").getPixKeyType(e)
			};
		}) : o("WAWebConsumerPixStrings").getConsumerPixKeyTypeOptions(), c = d(null), _ = m(null), f = _[0], g = _[1], h = (t = (n = l.find(function(e) {
			return e.keyType === i;
		})) == null ? void 0 : n.label) != null ? t : o("WAWebBizPaymentsBrazilAddPixModal.react").getPixKeyType(i), y = function() {
			g({
				menu: l.map(function(e) {
					var t = e.keyType, n = e.label;
					return u.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						action: function() {
							a(t), g(null);
						},
						testid: String(t),
						children: n
					}, String(t));
				}),
				anchor: c.current,
				type: o("WAWebDropdown.react").MenuType.DropdownMenuPopup
			});
		}, C = function() {
			g(null);
		}, b = function(t) {
			f == null ? y() : C(), t == null || t.currentTarget.blur();
		};
		return u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: p.row,
			align: "start",
			justify: "start",
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: p.column,
				align: "start",
				justify: "center",
				children: u.jsxs("div", {
					className: "xh8yej3",
					ref: c,
					"data-testid": "pix-key-type-select",
					children: [u.jsx(r("WDSTextField.react"), {
						label: s._(
							/*BTDS*/
							""
						),
						defaultValue: h,
						EndIcon: o("WAWebMobilePlatforms").isSMB() ? r("WDSIconIcArrowDropDown.react") : r("WDSIconIcChevronDown.react"),
						onEndIconClick: b,
						value: h.toString(),
						onFocus: b,
						testid: "chat_thread_pix_key_type_textfield"
					}), f && u.jsx(o("WAWebUimUie.react").UIE, {
						displayName: f.toString(),
						escapable: !0,
						popable: !0,
						requestDismiss: C,
						dismissOnWindowResize: !0,
						children: u.jsx(r("WAWebUimUieMenu.react"), { contextMenu: f })
					})]
				})
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
