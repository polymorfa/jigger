__d("WAWebBizAdCreationDurationInput.react", [
	"fbt",
	"WAWebBizAdCreationDurationReducer",
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(28), a = t.displayDuration, i = t.hasError, l = t.logDurationChange, u = t.maxDuration, d = t.minDuration, _ = t.setLocalDuration, f = t.selectedDuration, g = i === void 0 ? !1 : i, h;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (h = [r("WAWebBizAdCreationDurationReducer")], n[0] = h) : h = n[0];
		var y = r("useWAWebBizAdCreationSpecDispatcherContext")(h), C;
		n[1] !== y ? (C = function(t) {
			y({
				durationData: { durationInDays: t },
				type: "duration_reducer.update_duration"
			});
		}, n[1] = y, n[2] = C) : C = n[2];
		var b = C, v;
		n[3] !== l || n[4] !== u || n[5] !== d || n[6] !== b || n[7] !== _ ? (v = function(t) {
			var e = parseInt(t, 10);
			if (!isNaN(e)) {
				var n = Math.max(d, Math.min(u, e));
				_(n), b(n), l(n, "manual_input");
			}
		}, n[3] = l, n[4] = u, n[5] = d, n[6] = b, n[7] = _, n[8] = v) : v = n[8];
		var S = v, R;
		n[9] !== S ? (R = {
			onSave: S,
			validateInput: p
		}, n[9] = S, n[10] = R) : R = n[10];
		var L = r("useWAWebBizAdCreationEditableInput")(R), E = L.handleBlur, k = L.handleInputChange, I = L.handleKeyDown, T = L.inputRef, D = L.inputValue, x = L.inputWidth, $ = L.isEditing, P = L.startEditing, N;
		n[11] !== f || n[12] !== P ? (N = function() {
			P(String(f));
		}, n[11] = f, n[12] = P, n[13] = N) : N = n[13];
		var M = N, w = g ? "secondaryNegative" : "contentDefault", A;
		n[14] !== a || n[15] !== E || n[16] !== k || n[17] !== I || n[18] !== M || n[19] !== g || n[20] !== T || n[21] !== D || n[22] !== x || n[23] !== $ ? (A = s._(
			/*BTDS*/
			"",
			[s._plural(a), s._param("duration_input", $ ? c.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				columnGap: 0,
				xstyle: m.editModeContainer,
				children: c.jsx("input", babelHelpers.extends({
					ref: T,
					"aria-invalid": g,
					"aria-label": s._(
						/*BTDS*/
						""
					),
					inputMode: "numeric",
					onBlur: E,
					onChange: k,
					onKeyDown: I,
					type: "text",
					value: D
				}, (e || (e = r("stylex"))).props(m.input, m.inputWidth(x), g && m.inputError)))
			}) : c.jsx(r("WAWebUnstyledButton.react"), {
				"aria-label": s._(
					/*BTDS*/
					""
				),
				onClick: M,
				xstyle: m.viewModeContainer,
				children: a
			}))]
		), n[14] = a, n[15] = E, n[16] = k, n[17] = I, n[18] = M, n[19] = g, n[20] = T, n[21] = D, n[22] = x, n[23] = $, n[24] = A) : A = n[24];
		var F;
		return n[25] !== w || n[26] !== A ? (F = c.jsx(r("WDSText.react"), {
			colorName: w,
			type: "LargeTitle1",
			children: A
		}), n[25] = w, n[26] = A, n[27] = F) : F = n[27], F;
	}
	var f = r("withWAWebBizAdCreationSpecContext")(_, function(e) {
		return { selectedDuration: e.durationData.durationInDays };
	});
	l.default = f;
}), 226);
