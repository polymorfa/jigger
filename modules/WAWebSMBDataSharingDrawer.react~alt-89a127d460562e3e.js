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
		var t = e.entrypoint, n = e.onClose, a = e.ref, i = r("useWAWebUnmountSignal")(), l = o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled(), c = m(null), g = c[0], h = c[1], y = m(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion()), C = y[0], b = y[1], v = o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(g, C);
		d(function() {
			var e = function() {
				h(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue()), b(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion());
			};
			return o("WAWebSMBDataSharingSettingAction").getSMBDataSharingSettingAction().then(function(t) {
				i.aborted || (h(t), b(o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion()), o("WAWebCTWADataSharingModel").CTWADataSharingModel.subscribeForUpdates(e));
			}), function() {
				o("WAWebCTWADataSharingModel").CTWADataSharingModel.unsubscribeFromUpdates(e);
			};
		}, [i.aborted]);
		var S = function() {
			var e = o("WAWebUserPrefsGeneral").getCTWADataSharingCoolOffTimestamp() == null, n = o("WAWebCommonCTWADataSharing").shouldShowV2Disclosure();
			if (g === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.notset && e || n) f();
			else {
				var r = v ? o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false : o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true, a = l ? o("WAWebCTWADataSharingModel").EPD_DISCLOSURE_VERSION : o("WAWebCTWADataSharingModel").BASE_DISCLOSURE_VERSION;
				r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false && (o("WAWebCTWAGatingUtils").isCTWA3pdOptOutCounterOptimizationEnabled() && o("WAWebUserPrefsGeneral").setCTWADataSharingOptOutDisclosureShownCount(0), o("WAWebDataSharingOptInCoolOffModel").DataSharingOptInCoolOffModel.resetCoolOffStartTimestamp()), new (o("WAWebSmbDataSharingConsentSettingWamEvent")).SmbDataSharingConsentSettingWamEvent({
					smbDataSharingConsentSettingVersion: a,
					smbDataSharingConsentSettingType: r === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true,
					smbDataSharingConsentSettingEntryPoint: t
				}).commit(), o("WAWebDataSharingUpsellModel").enableUpsell(), o("WAWebSMBDataSharingSettingAction").setSMBDataSharingSettingAction(r, a).then(function(e) {
					if (!i.aborted) {
						var t;
						h((t = e == null ? void 0 : e.value) != null ? t : null);
					}
				});
			}
		}, R = function() {
			o("WAWebCsv3pdSignals").downloadCsvFor3pdSignals().then(function() {
				i.aborted || o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			}).catch(function() {
				i.aborted || o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
			});
		}, L = o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled() ? u.jsxs(o("WAWebFlex.react").FlexColumn, {
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
						onPress: R,
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
		}) : null, E = s._(
			/*BTDS*/
			""
		);
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "settings",
			tsNavigationData: {
				surface: "unknown",
				viewName: "smb-data-sharing"
			},
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: E,
				onBack: n,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(r("WAWebDrawerBody.react"), { children: u.jsxs(r("WAWebDrawerSection.react"), {
				theme: "expand-height",
				animation: !1,
				children: [
					u.jsxs(o("WAWebFlex.react").FlexColumn, {
						xstyle: [
							o("WDSPaddings.stylex").wdsPaddings.paddingHor32,
							p.paddingTop14,
							o("WDSMargins.stylex").wdsMargins.marginBottom20
						],
						children: [
							u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "16",
								color: "dark",
								weight: "normal",
								testid: "ctwa-data-sharing-settings-header",
								xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, _.header],
								children: l ? s._(
									/*BTDS*/
									""
								) : s._(
									/*BTDS*/
									""
								)
							}) }),
							u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
								size: "14",
								color: "muted",
								testid: "ctwa-data-sharing-settings-body",
								xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom16, _.paragraph],
								children: [
									l ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									),
									" ",
									l && u.jsx(o("WAWebExternalLink.react").ExternalLink, {
										href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
										children: s._(
											/*BTDS*/
											""
										)
									})
								]
							}) }),
							!l && u.jsxs(u.Fragment, { children: [
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
							] }),
							u.jsx(o("WAWebFlex.react").FlexRow, {
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
							}),
							u.jsxs(o("WAWebFlex.react").FlexRow, {
								align: "center",
								children: [u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, { children: u.jsx(o("WAWebCheckBox.react").CheckBox, {
									checked: v,
									onChange: S,
									testid: "data-sharing-setting-checkbox"
								}) }), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
									size: "16",
									xstyle: [_.paragraph, o("WDSPaddings.stylex").wdsPaddings.paddingStart24],
									children: l ? s._(
										/*BTDS*/
										""
									) : s._(
										/*BTDS*/
										""
									)
								})]
							}),
							l && u.jsx(o("WAWebFlex.react").FlexRow, {
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
							})
						]
					}),
					o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled() && u.jsx(r("WAWebGroupInfoSeparator.react"), {}),
					L
				]
			}) })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
