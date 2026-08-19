__d("WAWebBizAdCreationDurationInput.react", [
	"fbt",
	"WAWebBizAdCreationDurationReducer",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSText.react",
	"react",
	"stylex",
	"useWAWebBizAdCreationEditableInput",
	"useWAWebBizAdCreationSpecDispatcherContext",
	"withWAWebBizAdCreationSpecContext"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u.useCallback, m = {
		editModeContainer: {
			backgroundColor: "x1280gxy",
			borderTopColor: "xlze6vy",
			borderInlineEndColor: "x47fsot",
			borderBottomColor: "x1rrvw3c",
			borderInlineStartColor: "x18djku1",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "xamhcws",
			borderInlineEndWidth: "x1alpsbp",
			borderBottomWidth: "xlxy82",
			borderInlineStartWidth: "xyumdvf",
			display: "x3nfvp2",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x181vq82",
			$$css: !0
		},
		input: {
			backgroundColor: "xjbqb8w",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			color: "x14ug900",
			fontSize: "x579bpy",
			fontWeight: "x1fcty0u",
			minWidth: "xnei2rj",
			outline: "x1a2a7pz",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			textAlign: "x2b8uid",
			$$css: !0
		},
		inputError: {
			color: "x30a034",
			$$css: !0
		},
		inputWidth: function(t) {
			return [{
				width: t != null ? "x5lhr3w" : t,
				$$css: !0
			}, { "--x-width": (function(e) {
				return typeof e == "number" ? e + "px" : e != null ? e : void 0;
			})(t) }];
		},
		viewModeContainer: {
			borderTopColor: "x1v8p93f",
			borderInlineEndColor: "x1o3jo1z",
			borderBottomColor: "x16stqrj",
			borderInlineStartColor: "xv5lvn5",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			cursor: "x1ed109x",
			display: "x3nfvp2",
			paddingTop: "x1tiyuxx",
			paddingInlineEnd: "x1uc92m",
			paddingBottom: "x1nbhmlj",
			paddingInlineStart: "x181vq82",
			transitionProperty: "x13b0p5u",
			":hover_backgroundColor": "x1ubxc9n",
			":hover_borderTopColor": "x1j88qlk",
			":hover_borderInlineEndColor": "xmly02p",
			":hover_borderBottomColor": "x36lclb",
			":hover_borderInlineStartColor": "xzyl2ln",
			$$css: !0
		}
	}, p = function(t) {
		return /^\d*$/.test(t);
	};
	function _(t) {
		var n = t.displayDuration, a = t.hasError, i = a === void 0 ? !1 : a, l = t.logDurationChange, u = t.maxDuration, _ = t.minDuration, f = t.setLocalDuration, g = t.selectedDuration, h = r("useWAWebBizAdCreationSpecDispatcherContext")([r("WAWebBizAdCreationDurationReducer")]), y = d(function(e) {
			h({
				durationData: { durationInDays: e },
				type: "duration_reducer.update_duration"
			});
		}, [h]), C = d(function(e) {
			var t = parseInt(e, 10);
			if (!isNaN(t)) {
				var n = Math.max(_, Math.min(u, t));
				f(n), y(n), l(n, "manual_input");
			}
		}, [
			_,
			u,
			f,
			y,
			l
		]), b = r("useWAWebBizAdCreationEditableInput")({
			onSave: C,
			validateInput: p
		}), v = b.handleBlur, S = b.handleInputChange, R = b.handleKeyDown, L = b.inputRef, E = b.inputValue, k = b.inputWidth, I = b.isEditing, T = b.startEditing, D = d(function() {
			T(String(g));
		}, [T, g]);
		return c.jsx(r("WDSText.react"), {
			colorName: i ? "secondaryNegative" : "contentDefault",
			type: "LargeTitle1",
			children: s._(
				/*BTDS*/
				"",
				[s._plural(n), s._param("duration_input", I ? c.jsx(o("WAWebFlex.react").FlexRow, {
					align: "center",
					columnGap: 0,
					xstyle: m.editModeContainer,
					children: c.jsx("input", babelHelpers.extends({
						ref: L,
						"aria-invalid": i,
						"aria-label": s._(
							/*BTDS*/
							""
						),
						inputMode: "numeric",
						onBlur: v,
						onChange: S,
						onKeyDown: R,
						type: "text",
						value: E
					}, (e || (e = r("stylex"))).props(m.input, m.inputWidth(k), i && m.inputError)))
				}) : c.jsx(r("WAWebUnstyledButton.react"), {
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onClick: D,
					xstyle: m.viewModeContainer,
					children: n
				}))]
			)
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	var f = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
		return { selectedDuration: e.durationData.durationInDays };
	});
	l.default = f;
}), 226);
