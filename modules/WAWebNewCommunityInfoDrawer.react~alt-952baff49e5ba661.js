__d("WAWebNewCommunityInfoDrawer.react", [
	"fbt",
	"WAUnicodeUtils",
	"WAWebCellFrame.react",
	"WAWebChatCollection",
	"WAWebCmd",
	"WAWebCommunityAddGroupConfirmationPopup.react",
	"WAWebCommunityCells.react",
	"WAWebCommunityCreationFlowMetricUtils",
	"WAWebCommunityGetParticipantInfoText",
	"WAWebCreateCommunityAction",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManager",
	"WAWebDrawerSection.react",
	"WAWebDrawerUtils",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebGroupGatingUtils",
	"WAWebModalManager",
	"WAWebNetworkStatus",
	"WAWebNewCommunityNux.react",
	"WAWebNoop",
	"WAWebNux",
	"WAWebPhotoPickerConstants",
	"WAWebPhotoPickerLoadable.react",
	"WAWebRichTextField.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWDSRichTextField.react",
	"WAWebWamEnumCommunityCreationCurrentScreenType",
	"WAWebWamPrivateStatsUtils",
	"WDSBanner.react",
	"WDSButton.react",
	"compactMap",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebABPropConfigValue",
	"useWAWebCallbackOnce",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useImperativeHandle, _ = d.useRef, f = d.useState, g = {
		section: {
			paddingInlineStart: "x11ahuha",
			paddingInlineEnd: "xl3akx1",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		buttonContainer: {
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingHoriz32: {
			paddingInlineStart: "x1m4z3lf",
			paddingInlineEnd: "x1evaxtz",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingBottom28: {
			paddingBottom: "xgb8hzy",
			$$css: !0
		},
		paddingTop28: {
			paddingTop: "xv8gdss",
			$$css: !0
		},
		paddingVert32: {
			paddingTop: "x1sk1jro",
			paddingBottom: "x1ci70gm",
			$$css: !0
		}
	};
	function h() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }, e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx("div", babelHelpers.extends({}, t, { children: c.jsx(r("WDSBanner.react"), {
			type: "tip",
			body: s._(
				/*BTDS*/
				""
			),
			actionText: s._(
				/*BTDS*/
				""
			),
			onAction: v
		}) })), e[1] = n) : n = e[1], n;
	}
	function y(t) {
		var n, a = o("react-compiler-runtime").c(98), i = t.existingGroups, l = t.onBack, u = t.onCancel, d = t.onCreateCommunity, y = t.ref, v = t.viewType, S = _(null), R = _(null), L = f(""), E = L[0], k = L[1], I;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (I = s._(
			/*BTDS*/
			""
		).toString(), a[0] = I) : I = a[0];
		var T = f(I), D = T[0], x = T[1], $ = f(), P = $[0], N = $[1], M = f(!1), w = M[0], A = M[1], F = r("useWAWebNux")(o("WAWebNux").NUX.COMMUNITY), O = F[0], B = F[1], W = f(!0), q = W[0], U = W[1], V = o("useWAWebABPropConfigValue").useABPropConfigValue("wds_web_rich_text_field"), H = O || q, G = _(!1), z;
		a[1] !== i ? (z = function() {
			return i == null || i.length <= 0 ? [] : r("compactMap")(i, b);
		}, a[1] = i, a[2] = z) : z = a[2];
		var j = f(z), K = j[0], Q = j[1], X;
		a[3] !== H ? (X = function() {
			return H ? o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_NUX : o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO;
		}, a[3] = H, a[4] = X) : X = a[4];
		var Y = X, J;
		a[5] !== K.length || a[6] !== Y ? (J = function() {
			var e = Y();
			K.length && o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.linkGroup(K.length, e);
		}, a[5] = K.length, a[6] = Y, a[7] = J) : J = a[7];
		var Z = J, ee;
		a[8] !== Z || a[9] !== l || a[10] !== u || a[11] !== H ? (ee = function() {
			Z(), H ? o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.dismiss() : G.current === !1 && o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.exit(), l || u ? (l == null || l(), u == null || u()) : G.current === !1 && o("WAWebDrawerManager").DrawerManager.closeDrawerLeft();
		}, a[8] = Z, a[9] = l, a[10] = u, a[11] = H, a[12] = ee) : ee = a[12];
		var te = r("useWAWebCallbackOnce")(ee), ne;
		a[13] !== Y ? (ne = function() {
			o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.createCommunityFail(Y());
		}, a[13] = Y, a[14] = ne) : ne = a[14];
		var re = ne, oe;
		a[15] !== K || a[16] !== Y || a[17] !== re || a[18] !== d ? (oe = async function(t) {
			var e = K == null || K.length === 0, n = await r("WAWebCreateCommunityAction")(babelHelpers.extends({}, t, {
				existingGroups: K,
				onCommunityCreationFailure: re,
				shouldCreateGeneralChat: e
			}));
			G.current = !0, o("WAWebWamPrivateStatsUtils").logUiActionShadowPrivateStatsTestEvents(), n != null && (o("WAWebCmd").Cmd.openCommunityHome(n), o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.createCommunitySuccess(Y(), n.user)), d == null || d();
		}, a[15] = K, a[16] = Y, a[17] = re, a[18] = d, a[19] = oe) : oe = a[19];
		var ae = oe, ie;
		a[20] !== ae ? (ie = function(t) {
			A(!0), ae(t);
		}, a[20] = ae, a[21] = ie) : ie = a[21];
		var le = r("useWAWebCallbackOnce")(ie), se;
		a[22] !== re || a[23] !== le ? (se = function(t) {
			if (!r("WAWebNetworkStatus").online) {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), re();
				return;
			}
			le(t);
		}, a[22] = re, a[23] = le, a[24] = se) : se = a[24];
		var ue = se, ce = [g.paddingHoriz32, g.paddingBottom28], de;
		a[25] === Symbol.for("react.memo_cache_sentinel") ? (de = function() {
			var e;
			(e = S.current) == null || e.restoreFocus();
		}, a[25] = de) : de = a[25];
		var me;
		a[26] !== K.length ? (me = [K.length], a[26] = K.length, a[27] = me) : me = a[27], m(de, me);
		var pe;
		a[28] === Symbol.for("react.memo_cache_sentinel") ? (pe = function(t) {
			S.current = t;
		}, a[28] = pe) : pe = a[28];
		var _e = pe, fe;
		a[29] === Symbol.for("react.memo_cache_sentinel") ? (fe = function(t) {
			k(t);
		}, a[29] = fe) : fe = a[29];
		var ge = fe, he;
		a[30] === Symbol.for("react.memo_cache_sentinel") ? (he = function(t) {
			x(t);
		}, a[30] = he) : he = a[30];
		var ye = he, Ce;
		a[31] === Symbol.for("react.memo_cache_sentinel") ? (Ce = function() {
			o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.unlinkGroup(), Q([]);
		}, a[31] = Ce) : Ce = a[31];
		var be = Ce, ve;
		a[32] !== D || a[33] !== P || a[34] !== E || a[35] !== ue ? (ve = function() {
			ue({
				name: E.trim(),
				desc: D.trim(),
				icon: P
			});
		}, a[32] = D, a[33] = P, a[34] = E, a[35] = ue, a[36] = ve) : ve = a[36];
		var Se = r("useWAWebCallbackOnce")(ve), Re;
		if (a[37] !== ((n = K[0]) == null ? void 0 : n.subject) || a[38] !== Se) {
			var Le;
			Re = function() {
				var e, t = s._(
					/*BTDS*/
					"",
					[s._param("community-name", c.jsx(o("WAWebEmojiText.react").EmojiText, { text: (e = K[0]) == null ? void 0 : e.subject }))]
				);
				o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunityAddGroupConfirmationPopup.react"), {
					title: t,
					disclaimer: s._(
						/*BTDS*/
						""
					),
					onOK: function() {
						o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.linkGroupConfirmationOk(), Se(), o("WAWebModalManager").ModalManager.close();
					},
					onCancel: C
				}));
			}, a[37] = (Le = K[0]) == null ? void 0 : Le.subject, a[38] = Se, a[39] = Re;
		} else Re = a[39];
		var Ee = Re, ke;
		a[40] !== K.length || a[41] !== Ee || a[42] !== Se ? (ke = function() {
			o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.createCommunity(o("WAWebWamEnumCommunityCreationCurrentScreenType").COMMUNITY_CREATION_CURRENT_SCREEN_TYPE.COMMUNITY_INFO), K.length ? Ee() : Se();
		}, a[40] = K.length, a[41] = Ee, a[42] = Se, a[43] = ke) : ke = a[43];
		var Ie = ke, Te;
		a[44] === Symbol.for("react.memo_cache_sentinel") ? (Te = function(t, n) {
			N(n);
		}, a[44] = Te) : Te = a[44];
		var De = Te, xe;
		if (a[45] === Symbol.for("react.memo_cache_sentinel") ? (xe = function() {
			return {
				restoreFocus: function() {
					var e;
					return (e = S.current) == null ? void 0 : e.restoreFocus();
				},
				getElement: function() {
					return R.current;
				}
			};
		}, a[45] = xe) : xe = a[45], p(y, xe), H) {
			var $e;
			a[46] !== q || a[47] !== O || a[48] !== B ? ($e = function() {
				o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.getStarted(), O && B(), q && U(!1);
			}, a[46] = q, a[47] = O, a[48] = B, a[49] = $e) : $e = a[49];
			var Pe = l ? te : void 0, Ne = u ? te : void 0, Me;
			return a[50] !== $e || a[51] !== Pe || a[52] !== Ne || a[53] !== v ? (Me = c.jsx(r("WAWebNewCommunityNux.react"), {
				ref: R,
				viewType: v,
				onContinue: $e,
				onBack: Pe,
				onCancel: Ne
			}), a[50] = $e, a[51] = Pe, a[52] = Ne, a[53] = v, a[54] = Me) : Me = a[54], Me;
		}
		var we;
		a[55] !== E ? (we = E.trim(), a[55] = E, a[56] = we) : we = a[56];
		var Ae = we.length > 0, Fe = o("WAUnicodeUtils").numCodepoints(D) > o("WAWebGroupGatingUtils").getGroupDescriptionLength(), Oe;
		a[57] === Symbol.for("react.memo_cache_sentinel") ? (Oe = s._(
			/*BTDS*/
			""
		), a[57] = Oe) : Oe = a[57];
		var Be = Oe, We;
		a[58] === Symbol.for("react.memo_cache_sentinel") ? (We = s._(
			/*BTDS*/
			""
		), a[58] = We) : We = a[58];
		var qe = We, Ue;
		a[59] === Symbol.for("react.memo_cache_sentinel") ? (Ue = s._(
			/*BTDS*/
			""
		), a[59] = Ue) : Ue = a[59];
		var Ve = Ue, He;
		a[60] !== v ? (He = o("WAWebDrawerUtils").getDrawerHeaderType(v), a[60] = v, a[61] = He) : He = a[61];
		var Ge = He, ze;
		a[62] === Symbol.for("react.memo_cache_sentinel") ? (ze = { surface: "new-community-info-drawer" }, a[62] = ze) : ze = a[62];
		var je;
		a[63] === Symbol.for("react.memo_cache_sentinel") ? (je = s._(
			/*BTDS*/
			""
		), a[63] = je) : je = a[63];
		var Ke = l ? te : void 0, Qe = u ? te : void 0, Xe;
		a[64] !== Ge || a[65] !== Ke || a[66] !== Qe ? (Xe = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: je,
			type: Ge,
			onBack: Ke,
			onCancel: Qe
		}), a[64] = Ge, a[65] = Ke, a[66] = Qe, a[67] = Xe) : Xe = a[67];
		var Ye;
		a[68] === Symbol.for("react.memo_cache_sentinel") ? (Ye = c.jsx(h, {}), a[68] = Ye) : Ye = a[68];
		var Je;
		a[69] !== P ? (Je = c.jsx(o("WAWebPhotoPickerLoadable.react").PhotoPickerLoadable, {
			type: o("WAWebPhotoPickerConstants").PhotoPickerType.COMMUNITY,
			attachToChat: !1,
			startImage: P,
			onImageSet: De,
			theme: o("WAWebPhotoPickerConstants").PhotoPickerThemeType.EMOJI_SUGGESTIONS
		}), a[69] = P, a[70] = Je) : Je = a[70];
		var Ze = (e || (e = r("stylex"))).props.apply(e, ce), et;
		a[71] === Symbol.for("react.memo_cache_sentinel") ? (et = o("WAWebGroupGatingUtils").getGroupMaxSubject(), a[71] = et) : et = a[71];
		var tt;
		a[72] === Symbol.for("react.memo_cache_sentinel") ? (tt = function(t) {
			var e = t.text;
			return ge(e);
		}, a[72] = tt) : tt = a[72];
		var nt = Ae && !Fe ? Ie : r("WAWebNoop"), rt;
		a[73] !== E || a[74] !== nt ? (rt = c.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "community-subject",
			title: Be,
			ref: _e,
			value: E,
			maxLength: et,
			showRemaining: !0,
			onChange: tt,
			placeholder: Be,
			onEnter: nt,
			emojiBtnPosition: "side",
			focusOnMount: !0
		}), a[73] = E, a[74] = nt, a[75] = rt) : rt = a[75];
		var ot = e.props.apply(e, ce), at;
		a[76] !== D || a[77] !== Ve || a[78] !== Fe || a[79] !== Ie || a[80] !== ye || a[81] !== V || a[82] !== qe || a[83] !== Ae ? (at = V === !0 ? c.jsx(r("WAWebWDSRichTextField.react"), {
			label: Ve,
			placeholder: Ve,
			initialText: D,
			onValueChange: ye,
			maxLength: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
			maxCharacterCount: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
			rows: 5,
			onEnter: Ae && !Fe ? Ie : void 0,
			testid: "community_create_description_textfield",
			emoji: {
				picker: { ariaLabel: s._(
					/*BTDS*/
					""
				) },
				keyboardShortcut: !0
			}
		}) : c.jsx(o("WAWebRichTextField.react").RichTextField, {
			testid: "community_create_description_textfield",
			title: qe,
			value: D,
			maxLength: o("WAWebGroupGatingUtils").getGroupDescriptionLength(),
			softMaxLength: !0,
			showRemaining: !0,
			onChange: function(t) {
				var e = t.text;
				return ye(e);
			},
			placeholder: Ve,
			inputPlaceholder: qe,
			onEnter: Ae && !Fe ? Ie : r("WAWebNoop"),
			emojiBtnPosition: "side",
			multiline: !0,
			maxVisibleLines: 5,
			minVisibleLines: 5,
			textFormatEnabled: !0,
			bulletPointsEnabled: !0,
			numberedListEnabled: !1,
			blockQuoteEnabled: !1,
			inlineCodeEnabled: !1,
			theme: "gray-background"
		}), a[76] = D, a[77] = Ve, a[78] = Fe, a[79] = Ie, a[80] = ye, a[81] = V, a[82] = qe, a[83] = Ae, a[84] = at) : at = a[84];
		var it;
		a[85] !== ot || a[86] !== at ? (it = c.jsx("div", babelHelpers.extends({}, ot, { children: at })), a[85] = ot, a[86] = at, a[87] = it) : it = a[87];
		var lt;
		a[88] !== K || a[89] !== be ? (lt = K.length ? c.jsx(r("WAWebDrawerSection.react"), {
			testid: "groups-in-community",
			title: s._(
				/*BTDS*/
				""
			),
			animation: !1,
			xstyle: g.section,
			theme: "padding-no-vertical",
			children: K.map(function(e) {
				var t = e.id, n = e.participants, a = e.subject;
				return c.jsx(r("WAWebCellFrame.react"), {
					primary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: a,
						ellipsify: !0
					}),
					image: c.jsx(o("WAWebDetailImage.react").DetailImage, { id: t }),
					secondary: c.jsx(o("WAWebEmojiText.react").EmojiText, {
						text: n ? o("WAWebCommunityGetParticipantInfoText").getParticipantInfoText(n) : null,
						ellipsify: !0
					}),
					detail: c.jsx(o("WAWebCommunityCells.react").RemoveButton, {
						groupName: a,
						onClick: be,
						subgroup: t,
						tabIndex: 0
					}),
					theme: "collection-header"
				}, t.toString());
			})
		}) : null, a[88] = K, a[89] = be, a[90] = lt) : lt = a[90];
		var st;
		a[91] === Symbol.for("react.memo_cache_sentinel") ? (st = [g.paddingVert32, g.buttonContainer], a[91] = st) : st = a[91];
		var ut;
		a[92] !== w ? (ut = w ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		), a[92] = w, a[93] = ut) : ut = a[93];
		var ct = !Ae || w || Fe, dt;
		return a[94] !== Ie || a[95] !== ut || a[96] !== ct ? (dt = c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: st,
			children: c.jsx(r("WDSButton.react"), {
				label: ut,
				variant: "filled",
				size: "medium",
				type: "default",
				onPress: Ie,
				disabled: ct,
				widthMode: "flexible",
				testid: "new-community-info-continue-btn"
			})
		}), a[94] = Ie, a[95] = ut, a[96] = ct, a[97] = dt) : dt = a[97], c.jsxs(r("WAWebDrawer.react"), {
			ref: R,
			tsNavigationData: ze,
			viewType: v,
			children: [
				Xe,
				c.jsx(r("WAWebDrawerBody.react"), { children: c.jsxs(r("WAWebDrawerSection.react"), {
					theme: "full-height",
					children: [
						Ye,
						c.jsx("div", babelHelpers.extends({}, e.props.apply(e, [g.paddingTop28].concat(ce)), { children: Je })),
						c.jsx("div", babelHelpers.extends({}, Ze, { children: rt })),
						it,
						lt
					]
				}) }),
				dt
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		o("WAWebCommunityCreationFlowMetricUtils").UiCommunityCreationAction.linkGroupConfirmationCancel(), o("WAWebModalManager").ModalManager.close();
	}
	function b(e) {
		var t, n, r = o("WAWebChatCollection").ChatCollection.get(e);
		return r == null ? null : {
			id: e,
			subject: (t = r.formattedTitle) != null ? t : "",
			participants: (n = r.groupMetadata) == null ? void 0 : n.participants,
			contact: r.contact
		};
	}
	function v() {
		var e = o("WAWebFaqUrl").getAboutCommunitiesFaqUrl();
		o("WAWebExternalLink.react").openExternalLink(e);
	}
	l.default = y;
}), 226);
