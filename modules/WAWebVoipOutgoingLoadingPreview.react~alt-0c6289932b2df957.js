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
	"react"
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
		var t = e.isJoin, n = e.isVideo, a = n ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), i = t ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), l = u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDeemphasized",
			selectable: !1,
			children: i
		}), u.jsx(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDeemphasized",
			selectable: !1,
			children: a
		})] });
		return u.jsx(o("WAWebThemeContext").ThemeContext.Provider, {
			value: c,
			children: u.jsx(o("WAWebFlex.react").FlexColumn, {
				testid: "voip_outgoing_loading_preview_wrapper",
				xstyle: [
					o("WDSThemes").WDSDarkTheme,
					d.voipContainer,
					o("WDSColorStyles.stylex").WDSColorStyles.persistentAlwaysWhite,
					o("WDSColorStyles.stylex").WDSBackgroundColorStyles.backgroundWashPlain
				],
				children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
					align: "center",
					paddingTop: 8,
					xstyle: d.contentContainer,
					children: [n ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
						align: "center",
						justify: "center",
						grow: 1,
						rowGap: 16,
						xstyle: d.loadingArea,
						children: [u.jsx(o("WAWebSpinner.react").Spinner, {
							size: 40,
							color: "accent",
							stroke: 3
						}), l]
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
							children: l
						})]
					}), u.jsx(o("WAWebFlex.react").FlexRow, {
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
					})]
				})
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
