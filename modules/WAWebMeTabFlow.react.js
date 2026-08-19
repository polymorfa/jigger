__d("WAWebMeTabFlow.react", [
	"fbt",
	"LexicalComposer",
	"WAWebABProps",
	"WAWebAboutPrompts",
	"WAWebAboutWamLogger",
	"WAWebAdaptiveLayoutGatingUtils",
	"WAWebBizProfileGatingUtils",
	"WAWebClickable.react",
	"WAWebConfirmLogoutDialogV2.react",
	"WAWebConfirmLogoutModal.react",
	"WAWebConnModel",
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebContactCollection",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebFlex.react",
	"WAWebForceFlushWamBuffers",
	"WAWebGetBizProfileDrawerContent",
	"WAWebHistorySyncSettingItem.react",
	"WAWebKeyboardShortcutsPopup.react",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMacBetaUpsellToastbar.react",
	"WAWebMeTabSettingsSearchResults.react",
	"WAWebMeTabSpeechBubble.react",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNotificationBanners.react",
	"WAWebProfilePicThumbCollection",
	"WAWebSettingSearchModel",
	"WAWebSettingsConst",
	"WAWebSettingsFlowLoadable",
	"WAWebSettingsLoggerUtils",
	"WAWebTextStatusCollection",
	"WAWebTextStatusEditModalLoadable",
	"WAWebTextStatusGatingUtils",
	"WAWebThemePopup.react",
	"WAWebUim",
	"WAWebUimUie.react",
	"WAWebUserPrefsMeUser",
	"WAWebWamEnumEntryPoint",
	"WAWebWamEnumSettingsClickEntryPoint",
	"WAWebWamEnumSettingsItemType",
	"WAWebWamEnumSettingsPageType",
	"WAWebWamEnumWebcNativeUpsellCtaSourceType",
	"WDSDialogBridge",
	"WDSSearchBar.react",
	"cr:1923",
	"react",
	"react-compiler-runtime",
	"useWAWebExternalBetaOptIn",
	"useWAWebFlow",
	"useWAWebFocusOnMount",
	"useWAWebModelValues",
	"useWAWebSearchModel"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useMemo, _ = c.useRef, f = c.useState, g = { surface: "settings-drawer" }, h = {
		profileSection: {
			alignItems: "x6s0dn4",
			marginBottom: "x9r8f99",
			$$css: !0
		},
		settingsSection: {
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		bottomSpace: {
			paddingTop: "x14a8spa",
			paddingBottom: "x1c76a8b",
			$$css: !0
		},
		noInlinePadding: {
			paddingInlineStart: "x1c1uobl",
			paddingInlineEnd: "xyri2b",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, y = "ME_TAB_HOME";
	function C(e) {
		var t = o("react-compiler-runtime").c(98), a = e.initialSearchText, i = e.onEnd, l;
		t[0] !== i ? (l = {
			transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
			onEnd: i
		}, t[0] = i, t[1] = l) : l = t[1];
		var c = o("useWAWebFlow").useFlow(y, l), d = c[0], p = c[1], C = r("useWAWebFocusOnMount")(), k = f(null), I = k[0], T = k[1], D = f(a != null ? a : ""), x = D[0], $ = D[1], P = _(null), N = o("useWAWebSearchModel").useSearchModel(E), M = N.query, w = N.results, A = N.searchInstance, F, O;
		t[2] !== a || t[3] !== M ? (F = function() {
			a != null && a !== "" && M(a);
		}, O = [a, M], t[2] = a, t[3] = M, t[4] = F, t[5] = O) : (F = t[4], O = t[5]), m(F, O);
		var B, W;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (B = function() {
			var e;
			(e = P.current) == null || e.focus();
		}, W = [], t[6] = B, t[7] = W) : (B = t[6], W = t[7]), m(B, W);
		var q;
		t[8] !== A.data ? (q = A.data.filter(L), t[8] = A.data, t[9] = q) : q = t[9];
		var U = q, V;
		e: {
			if (x === "") {
				var H;
				t[10] === Symbol.for("react.memo_cache_sentinel") ? (H = [], t[10] = H) : H = t[10], V = H;
				break e;
			}
			if (w != null) {
				var G;
				t[11] !== w.results ? (G = w.results.map(R), t[11] = w.results, t[12] = G) : G = t[12], V = G;
				break e;
			}
			var z;
			t[13] === Symbol.for("react.memo_cache_sentinel") ? (z = [], t[13] = z) : z = t[13], V = z;
		}
		var j = V, K = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(), Q;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (Q = ["pushname"], t[14] = Q) : Q = t[14];
		var X = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, Q), Y, J, Z;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (J = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(), Y = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), Z = o("WAWebContactCollection").ContactCollection.assertGet(J), t[15] = Y, t[16] = J, t[17] = Z) : (Y = t[15], J = t[16], Z = t[17]);
		var ee = Z, te = f(S), ne = te[0], re = x !== "", oe;
		t[18] !== M ? (oe = function() {
			var e;
			$(""), M(""), (e = P.current) == null || e.focus();
		}, t[18] = M, t[19] = oe) : oe = t[19];
		var ae = oe, ie;
		t[20] === Symbol.for("react.memo_cache_sentinel") ? (ie = function() {
			var e;
			(e = P.current) == null || e.focus();
		}, t[20] = ie) : ie = t[20];
		var le = ie, se;
		t[21] !== ae || t[22] !== re ? (se = re ? u.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "MeTabSearchEscape",
			escapable: !0,
			requestDismiss: ae,
			requestFocus: le,
			uimState: o("WAWebUim").UIMState.ACTIVE
		}) : null, t[21] = ae, t[22] = re, t[23] = se) : se = t[23];
		var ue = se, ce;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (ce = s._(
			/*BTDS*/
			""
		), t[24] = ce) : ce = t[24];
		var de = ce, me;
		t[25] !== M ? (me = function(t) {
			M(t), $(t);
		}, t[25] = M, t[26] = me) : me = t[26];
		var pe = me, _e;
		t[27] !== ne ? (_e = function() {
			o("WAWebSettingsLoggerUtils").logSettingsClick({
				settingsItem: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE.PROFILE,
				settingsClickEntryPoint: o("WAWebWamEnumSettingsClickEntryPoint").SETTINGS_CLICK_ENTRY_POINT.METAB_SCREEN,
				settingsPageType: o("WAWebWamEnumSettingsPageType").SETTINGS_PAGE_TYPE.ME_TAB
			});
			var e = o("WAWebBizProfileGatingUtils").businessProfileRefreshEnabled();
			if (e) o("WAWebDrawerManager").DrawerManager.openDrawerMid(r("WAWebGetBizProfileDrawerContent")(o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS, v));
			else {
				var t = o("WAWebTextStatusCollection").TextStatusCollection.assertGet(Y), a = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.assertGet(Y), i = o("WAWebContactCollection").ContactCollection.assertGet(Y);
				o("WAWebDrawerManager").DrawerManager.openDrawerLeft(u.jsx(n("cr:1923"), {
					status: t,
					profilePicThumb: a,
					contact: i,
					conn: o("WAWebConnModel").Conn,
					entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS,
					onClose: b,
					isInitialStep: !1,
					aboutPromptKey: ne
				}));
			}
		}, t[27] = ne, t[28] = _e) : _e = t[28];
		var fe = _e, ge;
		t[29] !== fe ? (ge = function(t) {
			o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() ? o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebTextStatusEditModalLoadable").TextStatusEditModalLoadable, {
				entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE.ME_TAB,
				promptKey: t
			})) : fe();
		}, t[29] = fe, t[30] = ge) : ge = t[30];
		var he = ge, ye;
		t[31] !== p || t[32] !== fe ? (ye = function(t) {
			switch (t) {
				case o("WAWebSettingsConst").SettingsSteps.Theme: {
					o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebThemePopup.react"), {}));
					return;
				}
				case o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts: {
					o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebKeyboardShortcutsPopup.react"), {}));
					return;
				}
				case o("WAWebSettingsConst").SettingsSteps.Logout: {
					o("WAWebForceFlushWamBuffers").forceFlushAllWamAndQplBuffers(), o("WAWebABProps").getABPropConfigValue("wds_web_dialog") ? o("WDSDialogBridge").openWDSDialog(u.jsx(r("WAWebConfirmLogoutDialogV2.react"), { checkUnsent: !0 })) : o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebConfirmLogoutModal.react"), { checkUnsent: !0 }));
					return;
				}
				case o("WAWebSettingsConst").SettingsSteps.Profile: {
					fe();
					return;
				}
				default:
			}
			t === o("WAWebSettingsConst").SettingsSteps.PaymentsHome && o("WAWebConsumerPaymentsHomeLogger").logPaymentsRowClick(), T(t), p.push(t);
		}, t[31] = p, t[32] = fe, t[33] = ye) : ye = t[33];
		var Ce = ye, be;
		t[34] === Symbol.for("react.memo_cache_sentinel") ? (be = s._(
			/*BTDS*/
			""
		), t[34] = be) : be = t[34];
		var ve = be, Se;
		t[35] !== Ce ? (Se = u.jsx(o("WAWebNotificationBanners.react").WAWebNotificationBanners, { onSettingClick: Ce }), t[35] = Ce, t[36] = Se) : Se = t[36];
		var Re;
		t[37] !== he || t[38] !== ne ? (Re = u.jsx(r("WAWebMeTabSpeechBubble.react"), {
			contactId: J,
			onClick: he,
			promptKey: ne
		}), t[37] = he, t[38] = ne, t[39] = Re) : Re = t[39];
		var Le;
		t[40] === Symbol.for("react.memo_cache_sentinel") ? (Le = u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: ee.id,
			size: o("WAWebDetailImage.react").DetailImageSize.Refresh,
			loader: !0,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), t[40] = Le) : Le = t[40];
		var Ee;
		t[41] !== fe ? (Ee = u.jsx("div", { children: u.jsx(o("WAWebClickable.react").Clickable, {
			onClick: fe,
			ariaLabel: de,
			focusTheme: o("WAWebClickable.react").FocusTheme.Image,
			"data-tab": 0,
			children: Le
		}) }), t[41] = fe, t[42] = Ee) : Ee = t[42];
		var ke;
		t[43] !== Re || t[44] !== Ee ? (ke = u.jsx(r("WAWebDrawerSection.react"), {
			theme: "refresh-new",
			animation: !1,
			xstyle: h.noInlinePadding,
			children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: h.profileSection,
				children: [Re, Ee]
			})
		}), t[43] = Re, t[44] = Ee, t[45] = ke) : ke = t[45];
		var Ie;
		t[46] === Symbol.for("react.memo_cache_sentinel") ? (Ie = u.jsx(r("WAWebHistorySyncSettingItem.react"), {}), t[46] = Ie) : Ie = t[46];
		var Te;
		t[47] === Symbol.for("react.memo_cache_sentinel") ? (Te = [], t[47] = Te) : Te = t[47];
		var De;
		t[48] !== Ce || t[49] !== U ? (De = u.jsx(r("WAWebMeTabSettingsSearchResults.react"), {
			searchText: "",
			topLevelSettings: U,
			filteredResults: Te,
			onSettingClick: Ce
		}), t[48] = Ce, t[49] = U, t[50] = De) : De = t[50];
		var xe;
		t[51] !== K ? (xe = K && u.jsx(o("WAWebFlex.react").FlexColumn, { xstyle: h.bottomSpace }), t[51] = K, t[52] = xe) : xe = t[52];
		var $e;
		t[53] !== De || t[54] !== xe ? ($e = u.jsxs(r("WAWebDrawerSection.react"), {
			theme: "no-padding",
			animation: !1,
			xstyle: h.settingsSection,
			children: [
				Ie,
				De,
				xe
			]
		}), t[53] = De, t[54] = xe, t[55] = $e) : $e = t[55];
		var Pe;
		t[56] !== Se || t[57] !== ke || t[58] !== $e ? (Pe = u.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
			allowTabNavigation: !0,
			colorScheme: "lightest",
			children: [
				Se,
				ke,
				$e
			]
		}), t[56] = Se, t[57] = ke, t[58] = $e, t[59] = Pe) : Pe = t[59];
		var Ne = Pe, Me;
		t[60] !== j || t[61] !== Ce || t[62] !== x || t[63] !== U ? (Me = u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
			allowTabNavigation: !0,
			colorScheme: "lightest",
			children: u.jsx(r("WAWebMeTabSettingsSearchResults.react"), {
				searchText: x,
				topLevelSettings: U,
				filteredResults: j,
				onSettingClick: Ce
			})
		}), t[60] = j, t[61] = Ce, t[62] = x, t[63] = U, t[64] = Me) : Me = t[64];
		var we = Me, Ae = re ? we : Ne, Fe, Oe;
		t[65] === Symbol.for("react.memo_cache_sentinel") ? (Fe = {
			namespace: "MeTabSearch",
			onError: r("WAWebNoop")
		}, Oe = { className: "x1phvje8 xcldk2z x1tiyuxx x1nbhmlj" }, t[65] = Fe, t[66] = Oe) : (Fe = t[65], Oe = t[66]);
		var Be;
		t[67] !== pe || t[68] !== x ? (Be = u.jsx("div", babelHelpers.extends({}, Oe, { children: u.jsx(r("WDSSearchBar.react"), {
			ref: P,
			hintText: ve,
			onValueChange: pe,
			value: x,
			autoFocus: !0,
			testid: "self_profile_search_bar"
		}) })), t[67] = pe, t[68] = x, t[69] = Be) : Be = t[69];
		var We;
		t[70] !== Ae || t[71] !== Be ? (We = u.jsxs(o("LexicalComposer").LexicalComposer, {
			initialConfig: Fe,
			children: [Be, Ae]
		}), t[70] = Ae, t[71] = Be, t[72] = We) : We = t[72];
		var qe = We, Ue;
		if (p.step != null && p.step !== y && I != null) {
			var Ve;
			t[73] !== p ? (Ve = function() {
				return p.pop();
			}, t[73] = p, t[74] = Ve) : Ve = t[74];
			var He;
			t[75] !== I || t[76] !== Ve ? (He = u.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
				initialStep: I,
				onEnd: Ve
			}), t[75] = I, t[76] = Ve, t[77] = He) : He = t[77], Ue = He;
		} else {
			var Ge;
			t[78] !== X.pushname ? (Ge = u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: X.pushname,
				ellipsify: !0,
				titlify: !0
			}), t[78] = X.pushname, t[79] = Ge) : Ge = t[79];
			var ze = x === "" ? i : void 0, je;
			t[80] !== Ge || t[81] !== ze ? (je = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
				title: Ge,
				onBack: ze
			}), t[80] = Ge, t[81] = ze, t[82] = je) : je = t[82];
			var Ke;
			t[83] !== qe || t[84] !== ue ? (Ke = u.jsxs(r("WAWebDrawerBody.react"), { children: [ue, qe] }), t[83] = qe, t[84] = ue, t[85] = Ke) : Ke = t[85];
			var Qe;
			t[86] !== re || t[87] !== K ? (Qe = !re && K && u.jsx(r("WAWebMacBetaUpsellToastbar.react"), { sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType").WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SETTINGS }), t[86] = re, t[87] = K, t[88] = Qe) : Qe = t[88];
			var Xe;
			t[89] !== je || t[90] !== Ke || t[91] !== Qe ? (Xe = u.jsxs(r("WAWebDrawer.react"), {
				theme: "white-bg",
				testid: "me-tab-drawer",
				tsNavigationData: g,
				children: [
					je,
					Ke,
					Qe
				]
			}), t[89] = je, t[90] = Ke, t[91] = Qe, t[92] = Xe) : Xe = t[92], Ue = Xe;
		}
		var Ye;
		return t[93] !== d || t[94] !== p || t[95] !== Ue || t[96] !== C ? (Ye = u.jsx(d, {
			ref: C,
			flow: p,
			children: Ue
		}), t[93] = d, t[94] = p, t[95] = Ue, t[96] = C, t[97] = Ye) : Ye = t[97], Ye;
	}
	function b() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor() ? { descriptorType: "profile" } : u.jsx(C, { onEnd: o("WAWebDrawerManager").closeDrawerLeft }), { disableRotateFocus: !0 });
	}
	function v() {
		return o("WAWebDrawerManager").DrawerManager.closeDrawerMid();
	}
	function S() {
		return o("WAWebAboutPrompts").getRandomAboutPromptKey();
	}
	function R(e) {
		return e.data;
	}
	function L(e) {
		return e.parentId == null;
	}
	function E() {
		return new (o("WAWebSettingSearchModel")).SettingSearch();
	}
	l.MeTabFlow = C;
}), 226);
