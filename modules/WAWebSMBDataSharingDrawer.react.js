__d("WAWebSMBDataSharingDrawer.react", [
	"fbt",
	"WASmaxInBizSettingsEnums",
	"WAWebCTWADataSharingModel",
	"WAWebCTWAGatingUtils",
	"WAWebCheckBox.react",
	"WAWebCommonCTWADataSharing",
	"WAWebCsv3pdSignals",
	"WAWebDataSharingOptInCoolOffModel",
	"WAWebDataSharingUpsellModel",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebGroupInfoSeparator.react",
	"WAWebIcDownloadIcon.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSMBDataSharingSettingAction",
	"WAWebSmbDataSharingConsentSettingWamEvent",
	"WAWebSmbDataSharingOptInModalDialog",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebTosUrl",
	"WAWebUserPrefsGeneral",
	"WAWebWamEnumSmbDataSharingConsentScreenEntryPoint",
	"WDSButton.react",
	"WDSIconIcLock.react",
	"WDSIconIcSettings.react",
	"WDSIconIcVisibilityOff.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"fbs",
	"react",
	"react-compiler-runtime",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = {
		paddingTop14: {
			paddingTop: "xyinxu5",
			$$css: !0
		},
		marginInlineStart18: {
			marginInlineStart: "xnkmj2t",
			$$css: !0
		},
		marginBottom25: {
			marginBottom: "x1ibc7va",
			$$css: !0
		}
	}, _ = {
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		header: {
			lineHeight: "x1pujyh6",
			$$css: !0
		},
		paragraph: {
			lineHeight: "xvql48z",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			width: "xvy4d1p",
			height: "xxk0z11",
			$$css: !0
		},
		toggleNote: {
			marginTop: "x1de0gy",
			$$css: !0
		}
	}, f = function() {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebSmbDataSharingOptInModalDialog").SmbDataSharingOptInModalDialog, {
			entrypoint: o("WAWebWamEnumSmbDataSharingConsentScreenEntryPoint").SMB_DATA_SHARING_CONSENT_SCREEN_ENTRY_POINT.DATA_SHARING_TOOLS,
			callback: r("WAWebNoop")
		}));
	};
	function g(e) {
		var t = o("react-compiler-runtime").c(43), n = e.entrypoint, a = e.onClose, i = e.ref, l = r("useWAWebUnmountSignal")(), c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled(), t[0] = c) : c = t[0];
		var g = c, h = m(null), y = h[0], C = h[1], b;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (b = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion(), t[1] = b) : b = t[1];
		var v = m(b), S = v[0], R = v[1], L;
		t[2] !== y || t[3] !== S ? (L = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(y, S), t[2] = y, t[3] = S, t[4] = L) : L = t[4];
		var E = L, k, I;
		t[5] !== l.aborted ? (k = function() {
			var e = function() {
				C(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()), R(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion());
			};
			return o("WAWebSMBDataSharingSettingAction").getSMBDataSharingSettingAction().then(function(t) {
				l.aborted || (C(t), R(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion()), o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e));
			}), (function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			});
		}, I = [l.aborted], t[5] = l.aborted, t[6] = k, t[7] = I) : (k = t[6], I = t[7]), d(k, I);
		var T;
		t[8] !== y || t[9] !== n || t[10] !== E || t[11] !== l.aborted ? (T = function() {
			var e = o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp() == null, t = o("WAWebCommonCTWADataSharing").shouldShowV2Disclosure();
			if (y === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset && e || t) f();
			else {
				var r = E ? o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false : o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true, a = g ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION;
				r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && (o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled() && o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(0), o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.resetCoolOffStartTimestamp()), new (o("WAWebSmbDataSharingConsentSettingWamEvent")).SmbDataSharingConsentSettingWamEvent({
					smbDataSharingConsentSettingVersion: a,
					smbDataSharingConsentSettingType: r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
					smbDataSharingConsentSettingEntryPoint: n
				}).commit(), o("WAWebDataSharingUpsellModel").enableUpsell(), o("WAWebSMBDataSharingSettingAction").setSMBDataSharingSettingAction(r, a).then(function(e) {
					if (!l.aborted) {
						var t;
						C((t = e == null ? void 0 : e.value) != null ? t : null);
					}
				});
			}
		}, t[8] = y, t[9] = n, t[10] = E, t[11] = l.aborted, t[12] = T) : T = t[12];
		var D = T, x;
		if (t[13] !== l.aborted) {
			var $ = function() {
				o("WAWebCsv3pdSignals").downloadCsvFor3pdSignals().then(function() {
					l.aborted || o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				}).catch(function() {
					l.aborted || o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
						/*BTDS*/
						""
					) }));
				});
			};
			x = o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled() ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingHor32, o("WDSMargins.stylex").wdsMargins.marginTop20],
				children: [
					u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
						size: "16",
						color: "dark",
						weight: "normal",
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, _.header],
						children: s._(
							/*BTDS*/
							""
						)
					}) }),
					u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
						size: "14",
						color: "muted",
						xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, _.paragraph],
						children: s._(
							/*BTDS*/
							"",
							[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
								href: o("WAWebFaqUrl").sharingCustomerRelatedActivityLearnMoreURL(),
								children: s._(
									/*BTDS*/
									""
								)
							}))]
						)
					}) }),
					u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						children: [u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: u.jsx(r("WDSButton.react"), {
							Icon: o("WAWebIcDownloadIcon.react").IcDownloadIcon,
							xstyle: _.icon,
							onPress: $,
							testid: "download-3pd-signals-button",
							"aria-label": r("fbs")._(
								/*BTDS*/
								""
							),
							variant: "borderless"
						}, "download") }), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
							size: "16",
							xstyle: [_.paragraph, o("WDSPaddings.stylex").wdsPaddings.paddingStart24],
							children: s._(
								/*BTDS*/
								""
							)
						})]
					})
				]
			}) : null, t[13] = l.aborted, t[14] = x;
		} else x = t[14];
		var P = x, N;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), t[15] = N) : N = t[15];
		var M = N, w;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (w = {
			surface: "unknown",
			viewName: "smb-data-sharing"
		}, t[16] = w) : w = t[16];
		var A;
		t[17] !== a ? (A = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: M,
			onBack: a,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), t[17] = a, t[18] = A) : A = t[18];
		var F;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (F = [
			o("WDSPaddings.stylex").wdsPaddings.paddingHor32,
			p.paddingTop14,
			o("WDSMargins.stylex").wdsMargins.marginBottom20
		], t[19] = F) : F = t[19];
		var O;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "16",
			color: "dark",
			weight: "normal",
			testid: "ctwa-data-sharing-settings-header",
			xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, _.header],
			children: g ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}) }), t[20] = O) : O = t[20];
		var B, W;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (B = [o("WDSMargins.stylex").wdsMargins.marginBottom16, _.paragraph], W = g ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), t[21] = B, t[22] = W) : (B = t[21], W = t[22]);
		var q, U;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (q = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "14",
			color: "muted",
			testid: "ctwa-data-sharing-settings-body",
			xstyle: B,
			children: [
				W,
				" ",
				g && u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				})
			]
		}) }), U = !g && u.jsxs(u.Fragment, { children: [
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
				children: [u.jsx(r("WDSIconIcVisibilityOff.react"), {
					height: 24,
					width: 24,
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginStart8, _.iconColor]
				}), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "14",
					color: "dark",
					xstyle: [p.marginInlineStart18, _.paragraph],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
				children: [u.jsx(r("WDSIconIcLock.react"), {
					height: 24,
					width: 24,
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginStart8, _.iconColor]
				}), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "14",
					color: "dark",
					xstyle: [p.marginInlineStart18, _.paragraph],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: o("WDSMargins.stylex").wdsMargins.marginBottom16,
				children: [u.jsx(r("WDSIconIcSettings.react"), {
					height: 24,
					width: 24,
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginStart8, _.iconColor]
				}), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "14",
					color: "dark",
					xstyle: [p.marginInlineStart18, _.paragraph],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		] }), t[23] = q, t[24] = U) : (q = t[23], U = t[24]);
		var V;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (V = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: p.marginBottom25,
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				size: "14",
				color: "muted",
				xstyle: _.paragraph,
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebTosUrl").getMetaBizTosUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					}))]
				)
			})
		}), t[25] = V) : V = t[25];
		var H;
		t[26] !== D || t[27] !== E ? (H = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
			checked: E,
			onChange: D,
			testid: "data-sharing-setting-checkbox"
		}) }), t[26] = D, t[27] = E, t[28] = H) : H = t[28];
		var G;
		t[29] === Symbol.for("react.memo_cache_sentinel") ? (G = u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
			size: "16",
			xstyle: [_.paragraph, o("WDSPaddings.stylex").wdsPaddings.paddingStart24],
			children: g ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			)
		}), t[29] = G) : G = t[29];
		var z;
		t[30] !== H ? (z = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [H, G]
		}), t[30] = H, t[31] = z) : z = t[31];
		var j;
		t[32] === Symbol.for("react.memo_cache_sentinel") ? (j = g && u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: _.toggleNote,
			testid: "ctwa-data-sharing-per-customer-note",
			children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				size: "14",
				color: "muted",
				xstyle: _.paragraph,
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), t[32] = j) : j = t[32];
		var K;
		t[33] !== z ? (K = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: F,
			children: [
				O,
				q,
				U,
				V,
				z,
				j
			]
		}), t[33] = z, t[34] = K) : K = t[34];
		var Q;
		t[35] === Symbol.for("react.memo_cache_sentinel") ? (Q = o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled() && u.jsx(r("WAWebGroupInfoSeparator.react"), {}), t[35] = Q) : Q = t[35];
		var X;
		t[36] !== P || t[37] !== K ? (X = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
			theme: "expand-height",
			animation: !1,
			children: [
				K,
				Q,
				P
			]
		}) }), t[36] = P, t[37] = K, t[38] = X) : X = t[38];
		var Y;
		return t[39] !== i || t[40] !== A || t[41] !== X ? (Y = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			tsNavigationData: w,
			children: [A, X]
		}), t[39] = i, t[40] = A, t[41] = X, t[42] = Y) : Y = t[42], Y;
	}
	l.default = g;
}), 226);
