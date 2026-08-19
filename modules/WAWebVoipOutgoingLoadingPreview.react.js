__d("WAWebVoipOutgoingLoadingPreview.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebNoop",
	"WAWebSpinner.react",
	"WAWebThemeContext",
	"WAWebVoipCancelOutgoingCall",
	"WDSButton.react",
	"WDSColorStyles.stylex",
	"WDSIconIcCallEndFilled.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		theme: "dark",
		setTheme: r("WAWebNoop"),
		setSystemThemeMode: r("WAWebNoop"),
		systemThemeMode: !1
	}, d = {
		voipContainer: {
			position: "x1n2onr6",
			width: "xh8yej3",
			height: "x5yr21d",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			userSelect: "x87ps6o",
			pointerEvents: "x67bb7w",
			$$css: !0
		},
		contentContainer: {
			height: "x5yr21d",
			width: "xh8yej3",
			boxSizing: "x9f619",
			backgroundColor: "x1c7u0tx",
			$$css: !0
		},
		loadingArea: {
			width: "xh8yej3",
			$$css: !0
		},
		loadingAreaCompact: {
			width: "xh8yej3",
			boxSizing: "x9f619",
			$$css: !0
		},
		controls: {
			marginTop: "xr1yuqi",
			height: "xsdox4t",
			width: "xh8yej3",
			boxSizing: "x9f619",
			$$css: !0
		},
		endButton: {
			height: "x10w6t97",
			minWidth: "x4m7ku4",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(16), n = e.isJoin, a = e.isVideo, i;
		t[0] !== a ? (i = a ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[0] = a, t[1] = i) : i = t[1];
		var l = i, m;
		if (t[2] !== n) {
			var p = n ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
			m = u.jsx(r("WDSText.react"), {
				type: "Body1",
				colorName: "contentDeemphasized",
				selectable: !1,
				children: p
			}), t[2] = n, t[3] = m;
		} else m = t[3];
		var _;
		t[4] !== l ? (_ = u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			selectable: !1,
			children: l
		}), t[4] = l, t[5] = _) : _ = t[5];
		var f;
		t[6] !== m || t[7] !== _ ? (f = u.jsxs(u.Fragment, { children: [m, _] }), t[6] = m, t[7] = _, t[8] = f) : f = t[8];
		var g = f, h;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (h = [
			o("WDSThemes").WDSDarkTheme,
			d.voipContainer,
			o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
			o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
		], t[9] = h) : h = t[9];
		var y;
		t[10] !== a || t[11] !== g ? (y = a ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			grow: 1,
			rowGap: 16,
			xstyle: d.loadingArea,
			children: [u.jsx(o("WAWebSpinner.react").Spinner, {
				size: 40,
				color: "accent",
				stroke: 3
			}), g]
		}) : u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			grow: 1,
			columnGap: 12,
			xstyle: d.loadingAreaCompact,
			children: [u.jsx(o("WAWebSpinner.react").Spinner, {
				size: 32,
				color: "accent",
				stroke: 3
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				justify: "center",
				children: g
			})]
		}), t[10] = a, t[11] = g, t[12] = y) : y = t[12];
		var C;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "end",
			shrink: 0,
			paddingStart: 8,
			paddingEnd: 8,
			xstyle: d.controls,
			children: u.jsx(r("WDSButton.react"), {
				testid: "voip_outgoing_cancel_button",
				type: "destructive",
				variant: "filled",
				onPress: o("WAWebVoipCancelOutgoingCall").cancelPendingOutgoingCall,
				Icon: r("WDSIconIcCallEndFilled.react"),
				size: "small",
				xstyle: [o("WDSThemes").WDSLightTheme, d.endButton],
				"aria-label": s._(
					/*BTDS*/
					""
				)
			})
		}), t[13] = C) : C = t[13];
		var b;
		return t[14] !== y ? (b = u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
			value: c,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				testid: "voip_outgoing_loading_preview_wrapper",
				xstyle: h,
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					paddingTop: 8,
					xstyle: d.contentContainer,
					children: [y, C]
				})
			})
		}), t[14] = y, t[15] = b) : b = t[15], b;
	}
	l.default = m;
}), 226);
