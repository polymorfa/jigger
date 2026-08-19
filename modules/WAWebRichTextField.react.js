__d("WAWebRichTextField.react", [
	"fbt",
	"$InternalEnum",
	"WAUnicodeUtils",
	"WAWebAlertErrorIcon.react",
	"WAWebCharacterLimitPlugin",
	"WAWebCheckboxRoundCheckedIcon.react",
	"WAWebDragIconWrapper.react",
	"WAWebDropdown.react",
	"WAWebEmojiPanel.react",
	"WAWebEmojiPickerPlugin",
	"WAWebFlex.react",
	"WAWebFocusTracer",
	"WAWebIcMoodIcon.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebL10N",
	"WAWebPencilRefreshedIcon.react",
	"WAWebRichTextFieldEmojiTextBlock.react",
	"WAWebRichTextInput.react",
	"WAWebRichTextInputPlugins.react",
	"WAWebRound.react",
	"WAWebSpinner.react",
	"WAWebUimUie.react",
	"WAWebUimUieMenu.react",
	"WAWebUnstyledButton.react",
	"WAWebVelocityTransitionGroup",
	"WAWebWdsIcSendFilledIcon.react",
	"WAWebWebIcCheckIcon.react",
	"WDSButton.react",
	"WDSFocusStateStyles",
	"WDSIconIcImage.react",
	"WDSIconIcInfo.react",
	"WDSPaddings.stylex",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useHoverState",
	"useWAWebPrevious",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useImperativeHandle, f = m.useMemo, g = m.useRef, h = m.useState, y = {
		marginInlineStart10: {
			marginInlineStart: "x1hm9lzh",
			$$css: !0
		},
		marginBottom6: {
			marginBottom: "xzueoph",
			$$css: !0
		}
	}, C = 50, b = 10, v = 24, S = n("$InternalEnum")({
		GroupInfoName: "groupInfoName",
		Desaturated: "desaturated",
		NoErrorInfo: "noErrorInfo",
		ChatInfoDefaultText: "chatInfoDefaultText",
		ChatInfoLargeText: "chatInfoLargeText",
		DisabledLabel: "disabledLabel",
		DigitalCode: "digitalCode"
	}), R = {
		sendBtn: {
			boxShadow: "x1gnnqk1",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		iconMain: {
			position: "x10l6tqk",
			top: "x1atx4j1",
			color: "x1heor9g",
			cursor: "x1ypdohk",
			$$css: !0
		},
		btn: {
			color: "x1heor9g",
			cursor: "x1ypdohk",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			$$css: !0
		},
		textInputFontSize13: {
			fontSize: "x1nxh6w3",
			$$css: !0
		},
		textInputFontSize14: {
			fontSize: "x1f6kntn",
			$$css: !0
		},
		textInputFontSize15: {
			fontSize: "x6prxxf",
			$$css: !0
		},
		textInputFontSize16: {
			fontSize: "x1jchvi3",
			$$css: !0
		},
		textInputFontSize17: {
			fontSize: "x1lkfr7t",
			$$css: !0
		},
		textInputFontSize24: {
			fontSize: "xngnso2",
			$$css: !0
		},
		btnFooterContainer: {
			display: "x78zum5",
			flexDirection: "x3ieub6",
			$$css: !0
		},
		wrapperRefreshed: {
			position: "x1n2onr6",
			zIndex: "xhtitgo",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		inputWrapperRefreshed: {
			borderBottom: "x112ta8",
			paddingTop: "x3hdcf8",
			paddingInlineEnd: "xje27ih",
			paddingBottom: "x18dplov",
			paddingInlineStart: "xozx76t",
			$$css: !0
		},
		iconMainRefreshed: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x100vrsf",
			height: "x1vqgdyp",
			borderStartStartRadius: "xvs2etk",
			borderStartEndRadius: "xg3wpu6",
			borderEndEndRadius: "x1jwbhkm",
			borderEndStartRadius: "xgg4q86",
			cursor: "x1ypdohk",
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		iconMainContainerRefreshed: {
			flexShrink: "x2lah0s",
			color: "x14ug900",
			$$css: !0
		},
		iconMainContainerMultilineRefreshed: {
			alignSelf: "x1y8v6su",
			$$css: !0
		},
		groupInfoLargeTextRefreshed: {
			color: "x14ug900",
			fontSize: "xngnso2",
			lineHeight: "xcgk4ki",
			$$css: !0
		},
		chatInfoDefaultTextRefreshed: {
			fontSize: "x6prxxf",
			lineHeight: "x1o2sk6j",
			color: "x14ug900",
			$$css: !0
		},
		alignSelfCenter: {
			alignSelf: "xamitd3",
			$$css: !0
		},
		textAlign: {
			textAlign: "x1yc453h",
			$$css: !0
		},
		largeEmojiVerticalAlign: {
			verticalAlign: "x523cq2",
			$$css: !0
		},
		emojiTextSmall: {
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1gabggj",
			paddingBottom: "x10b6aqq",
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		emojiTextEditOnHover: {
			paddingInlineEnd: "xyri2b",
			$$css: !0
		},
		emojiTextChatInfoDefault: {
			paddingTop: "xexx8yu",
			fontSize: "x1jchvi3",
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		emojiTextChatInfoLarge: {
			fontSize: "xngnso2",
			lineHeight: "xgif2c7",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		},
		iconThemed: {
			color: "xhslqc4",
			$$css: !0
		},
		iconMainContainer: {
			position: "x1n2onr6",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			width: "xvy4d1p",
			height: "xxk0z11",
			paddingTop: "x1y1aw1k",
			$$css: !0
		},
		iconMainContainerSmall: {
			paddingTop: "x1iorvi4",
			$$css: !0
		},
		iconMainContainerEditOnHover: {
			paddingTop: "x1y1aw1k",
			paddingInlineStart: "x135b78x",
			$$css: !0
		},
		iconMainContainerChatInfoLarge: {
			marginTop: "x1ok221b",
			$$css: !0
		},
		iconsEditContainer: {
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			flexBasis: "xdl72j9",
			columnGap: "xtqikln",
			paddingTop: "x1y1aw1k",
			marginInlineEnd: "xjji8sl",
			$$css: !0
		},
		iconsEditContainerInvite: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		iconsEditContainerChatInfoLarge: {
			paddingTop: "xyinxu5",
			$$css: !0
		},
		labelText: {
			position: "x10l6tqk",
			width: "xh8yej3",
			paddingTop: "x1y1aw1k",
			fontSize: "x1jchvi3",
			lineHeight: "x1fc57z9",
			color: "x2ens7a",
			transitionProperty: "x11xpdln",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "xrix70t",
			transform: "xo13l8a",
			$$css: !0
		},
		labelTextEllipsified: {
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			display: "x104kibb",
			WebkitLineClamp: "x1h7i4cw",
			WebkitBoxOrient: "x1ua5tub",
			$$css: !0
		},
		labelRichTextInput: {
			paddingTop: "x889kno",
			$$css: !0
		},
		labelWithEmojiIcon: {
			width: "xm6i5cn",
			$$css: !0
		},
		labelFloat: {
			fontSize: "x1pg5gke",
			lineHeight: "x1d3mw78",
			transform: "x1c1b4dv",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			whiteSpace: "xuxw1ft",
			textOverflow: "xlyipyv",
			display: "x1lliihq",
			WebkitLineClamp: "xh0615m",
			$$css: !0
		},
		labelHideFloating: {
			width: "xktia5q",
			$$css: !0
		},
		labelLabelInput: {
			paddingTop: "x1iorvi4",
			$$css: !0
		},
		labelInvite: {
			paddingTop: "xexx8yu",
			$$css: !0
		},
		labelEditor: {
			color: "x181ptb6",
			fontSize: "x1f6kntn",
			lineHeight: "x1d3mw78",
			$$css: !0
		},
		labelEditorFloat: {
			color: "x1v5yvga",
			$$css: !0
		},
		labelTransformNone: {
			transform: "x1c071of",
			$$css: !0
		},
		labelDisabled: {
			color: "x54l9or",
			$$css: !0
		},
		labelDigitalCode: {
			fontVariantNumeric: "xss6m8b",
			letterSpacing: "xtc2khw",
			$$css: !0
		},
		wrapper: {
			position: "x1n2onr6",
			zIndex: "xhtitgo",
			display: "x78zum5",
			alignItems: "x1cy8zhl",
			borderBottomWidth: "xlxy82",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x16pkwpw",
			$$css: !0
		},
		wrapperLocked: {
			borderBottomColor: "x16stqrj",
			$$css: !0
		},
		wrapperFocused: {
			borderBottomColor: "x1rrvw3c",
			$$css: !0
		},
		wrapperDesaturated: {
			borderBottomColor: "x16pkwpw",
			$$css: !0
		},
		wrapperBorderNone: {
			borderBottomWidth: "x1qhh985",
			borderBottomStyle: "x1sy0etr",
			$$css: !0
		},
		wrapperError: {
			paddingBottom: "x18d9i69",
			borderBottomWidth: "xlxy82",
			borderBottomStyle: "x1q0q8m5",
			borderBottomColor: "x61tcke",
			$$css: !0
		},
		textActive: {
			paddingBottom: "x18d9i69",
			$$css: !0
		},
		wrapperSmall: {
			minHeight: "x21xpn4",
			$$css: !0
		},
		wrapperEditOnHoverLocked: {
			marginInlineEnd: "xule2z1",
			$$css: !0
		},
		wrapperDigitalCodeEditing: {
			letterSpacing: "x16gzlzp",
			$$css: !0
		},
		inputWrapperInner: {
			flexGrow: "x1iyjqo2",
			flexShrink: "xs83m0k",
			flexBasis: "x1t1x2f9",
			minWidth: "xeuugli",
			$$css: !0
		},
		inputWrapperInvite: {
			overflowY: "x1rife3k",
			height: "xjp8j0k",
			$$css: !0
		},
		inputWrapperPhone: {
			paddingBottom: "x18d9i69",
			fontSize: "x6prxxf",
			lineHeight: "x1o2sk6j",
			fontWeight: "xo1h6xc",
			$$css: !0
		},
		inputWrapperHighlight: {
			paddingTop: "xexx8yu",
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x2vl965",
			paddingLeft: null,
			paddingRight: null,
			paddingBottom: "x10b6aqq",
			$$css: !0
		},
		constrainedWidth: {
			width: "xktia5q",
			$$css: !0
		},
		textInput: {
			position: "x1n2onr6",
			wordWrap: "x1vvkbs",
			$$css: !0
		},
		containerGroupInfoNameActive: {
			marginBottom: "xzueoph",
			$$css: !0
		},
		containerSmall: {
			minHeight: "x21xpn4",
			$$css: !0
		},
		containerEditOnHover: {
			transitionProperty: "x13b0p5u",
			$$css: !0
		},
		containerChatInfoDefault: {
			paddingTop: "xexx8yu",
			fontSize: "x1jchvi3",
			lineHeight: "x1o2sk6j",
			$$css: !0
		},
		containerChatInfoLarge: {
			fontSize: "xngnso2",
			$$css: !0
		},
		containerRequestReason: {
			width: "x14atkfc",
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			paddingInlineStart: "xmzvs34",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		containerGrayBackground: {
			paddingInlineStart: "xmzvs34",
			backgroundColor: "x4wrhlh",
			$$css: !0
		},
		containerEditor: {
			width: "xqv71hg",
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			paddingInlineStart: "xmzvs34",
			fontSize: "x1f6kntn",
			backgroundColor: "x1ayflyp",
			$$css: !0
		}
	};
	function L(t) {
		var n, a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), c = l.customStyleThemes, m = c === void 0 ? [] : c, L = l.focusOnMount, E = l.selectOnMount, k = l.lockable, I = l.multiline, T = l.onBeginEdit, D = l.lowProfile, x = l.error, $ = l.validate, P = l.onSave, N = l.onError, M = l.onCancel, w = l.emptyValuePlaceholder, A = l.editable, F = A === void 0 ? !0 : A, O = l.pending, B = l.blockFocusOnLock, W = l.managed, q = l.managedError, U = l.testid, V = U === void 0 ? "text-input" : U, H = l.inputPlaceholder, G = l.direction, z = l.maxCodeUnits, j = l.softMaxLength, K = l.setIsEditing, Q = l.contextMsg, X = l.shutEmojiPickerOnSelect, Y = l.onCharLimitReachedOnce, J = l.containerXstyle, Z = l.showValidateIcon, ee = l.showErrorIcon, te = l.showSuccessIcon, ne = l.placeholderClickToEditEnabled, re = ne === void 0 ? !1 : ne, oe = l.isRefresh, ae = oe === void 0 ? !1 : oe, ie = l.tabOrder, le = l.showSendBtn, se = le === void 0 ? !1 : le, ue = l.onSend, ce = l.emojiBtnPosition === "side", de = l.emojiBtnPosition === "footer", me = l.photoBtnPosition === "side", pe = l.photoBtnPosition === "footer", _e = ce || de, fe = m.includes(S.ChatInfoLargeText), ge = m.includes(S.ChatInfoDefaultText), he = l.disableLockedLineDirectionInference !== !0 ? !0 : void 0, ye = babelHelpers.extends({
			multiline: I,
			direction: "auto",
			inferLinesDirection: he,
			emojiXstyle: l.theme === "large" ? R.largeEmojiVerticalAlign : void 0
		}, l.emojiTextSettingsInLockMode), Ce = [
			l.theme === "small" && R.emojiTextSmall,
			l.showEditOnHover === !0 && R.emojiTextEditOnHover,
			ge && R.emojiTextChatInfoDefault,
			fe && R.emojiTextChatInfoLarge
		], be = r("useHoverState")(), ve = be.onMouseEnter, Se = be.onMouseLeave, Re = h(l.value), Le = Re[0], Ee = Re[1], ke = Le != null ? Le : l.value, Ie = !ke, Te = H == null || H === "";
		p(function() {
			Ee(l.value);
		}, [l.value]);
		var De = g(null), xe = g(null), $e = g(null), Pe = g(null), Ne = h((n = l.startActive) != null ? n : !1), Me = Ne[0], we = Ne[1], Ae = h(!1), Fe = Ae[0], Oe = Ae[1], Be = h(l.startActive !== !0 && !!k), We = Be[0], qe = Be[1], Ue = h(null), Ve = Ue[0], He = Ue[1], Ge = function() {
			var e;
			(e = De.current) == null || e.focus();
		};
		p(function() {
			K != null && Me !== K && (we(K), qe(!K), Ge());
		}, [K]);
		var ze = r("useWAWebPrevious")(We), je = r("useWAWebPrevious")(F), Ke = r("useWAWebPrevious")(O);
		p(function() {
			L === !0 && Ge();
		}, []);
		var Qe = function(t) {
			t && (t.preventDefault(), t.stopPropagation());
			var e = d.jsx(r("WAWebEmojiPanel.react"), {
				onEmoji: function(t) {
					var e;
					X === !0 && Xe(), (e = De.current) == null || e.replaceSelection(t);
				},
				onFocusNext: Ge,
				onFocusPrev: Ge
			});
			He({
				menu: e,
				dirY: o("WAWebDropdown.react").DirY.TOP,
				type: o("WAWebDropdown.react").MenuType.EmojiPicker,
				anchor: t.target
			}), Ge();
		}, Xe = function() {
			He(null);
		}, Ye = function() {
			var e;
			(e = xe.current) == null || e.restoreFocus();
		}, Je = function() {
			var e = !(D !== !0 && x);
			$ && e && (e = $(ke)), e ? (P && P(), qe(!0), we(!1)) : N && N();
		}, Ze = function(t) {
			k === !0 && Je(), se === !0 && ue != null && ue(ke), I !== !0 && t instanceof KeyboardEvent && (l.onEnter == null || l.onEnter(t));
		}, et = function(t) {
			we(!0), l.onFocus == null || l.onFocus(t);
		}, tt = function(t) {
			we(!1), l.onBlur == null || l.onBlur(t);
		}, nt = function() {
			T && T(), qe(!1);
		}, rt = r("useWAWebStableCallback")(function() {
			M && M(), qe(!0), we(!1), Ee(l.value);
		}), ot = function() {
			return Ie && w != null && w !== "" && We;
		}, at = r("useWAWebStableCallback")(function() {
			return F && !We;
		}), it = function() {
			Ve && Ye();
		};
		p(function() {
			if (ze !== !0 && je === !0 && !F && rt(), $e.current) {
				var e = ze !== !0 && We, t = Ke === !0 && !O;
				B !== !0 && (e || t) && r("WAWebFocusTracer").focus($e.current);
			}
			var n = De.current;
			(!at() || W === !0) && (n == null ? void 0 : n.getTextContent()) !== ke && (n == null || n.setTextContent(ke || "")), q === !0 && x != null && We && qe(!1);
		}, [
			B,
			F,
			x,
			rt,
			at,
			We,
			W,
			q,
			O,
			je,
			ze,
			Ke,
			ke
		]);
		var lt = function() {
			ye.onReadMore == null || ye.onReadMore(), !F && l.editRestrictionInfo ? l.editRestrictionInfo() : F && We && nt();
		}, st = function() {
			var e, t;
			(e = Pe.current) == null || e.focus(), (t = De.current) == null || t.focus();
		}, ut = function() {
			var e;
			st(), (e = De.current) == null || e.selectAll();
		}, ct = function() {
			var e;
			(e = De.current) == null || e.reset();
		}, dt = function() {
			$e.current && r("WAWebFocusTracer").focus($e.current);
		};
		_(i, function() {
			return {
				restoreFocus: Ge,
				triggerSelect: lt,
				triggerFocus: st,
				selectTextInput: ut,
				clearTextInput: ct,
				focusEditBtn: dt
			};
		});
		var mt = (a = l.maxLength) != null ? a : 25, pt = at(), _t = pt && l.error != null && l.error !== "" && !l.lowProfile, ft = m.includes(S.GroupInfoName), gt = !Ie || l.theme === "gray-background" && l.hideSpacer !== !0, ht = F && l.theme === "editor", yt = ht || l.theme === "request-reason", Ct = yt || l.theme === "gray-background", bt = m.includes(S.DisabledLabel), vt = m.includes(S.DigitalCode), St = m.includes(S.Desaturated), Rt = m.includes(S.NoErrorInfo), Lt = l.theme === "invite-message-caption", Et = {
			container: (u || (u = r("stylex")))(R.textInput, ft && at() && R.containerGroupInfoNameActive, l.theme === "small" && R.containerSmall, l.showEditOnHover === !0 && R.containerEditOnHover, ge && R.containerChatInfoDefault, fe && R.containerChatInfoLarge, l.theme === "request-reason" && R.containerRequestReason, l.theme === "gray-background" && R.containerGrayBackground, ht && R.containerEditor, J),
			label: u(R.labelText, R.labelTextEllipsified, l.theme !== "small" && R.labelRichTextInput, Ie && ce && R.labelWithEmojiIcon, gt && R.labelFloat, l.hideFloatingLabel === !0 && R.labelHideFloating, l.theme === "label-input" && R.labelLabelInput, l.theme === "invite-message-caption" && R.labelInvite, yt && R.labelEditor, yt && gt && R.labelEditorFloat, Ct && R.labelTransformNone, bt && R.labelDisabled, vt && R.labelDigitalCode),
			inputWrapper: u(ae === !0 ? R.wrapperRefreshed : R.wrapper, !ae && We && R.wrapperLocked, !ae && F && Me && R.wrapperFocused, !ae && St && R.wrapperDesaturated, !ae && at() && Lt && R.wrapperBorderNone, !ae && Ct && at() && R.wrapperBorderNone, !ae && _t && R.wrapperError, !ae && l.theme === "small" && R.wrapperSmall, !ae && l.showEditOnHover === !0 && We && R.wrapperEditOnHoverLocked, Me && R.textActive, vt && at() && R.wrapperDigitalCodeEditing),
			infoWrapper: {
				0: "x1n2onr6 x78zum5 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78",
				2: "x1n2onr6 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78 x1s85apg",
				1: "x1n2onr6 x78zum5 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78 x18d9i69",
				3: "x1n2onr6 x1cy8zhl x1hshjfz xyqdw3p x1pg5gke x1d3mw78 x1s85apg x18d9i69"
			}[!!Rt << 1 | !!Me << 0]
		}, kt, It;
		if (l.lockable === !0) {
			if (l.pending === !0) It = d.jsx("div", {
				className: ae ? "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xvs2etk xg3wpu6 x1jwbhkm xgg4q86 x1ypdohk x17gydlx" : {
					0: "",
					1: "xndqk7f"
				}[(l.theme === "small") << 0],
				children: d.jsx(o("WAWebSpinner.react").Spinner, {
					size: 18,
					stroke: 6,
					color: "highlight"
				})
			}, "spinner");
			else if (We) {
				if (F) {
					var xt, $t = (xt = l.fieldName) != null ? xt : "", Pt = s._(
						/*BTDS*/
						"",
						[s._param("fieldName", $t)]
					);
					It = d.jsx(r("WDSTooltip.react"), {
						label: Pt,
						children: d.jsx(r("WDSButton.react"), {
							testid: V + "-edit",
							Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
							variant: "borderless",
							onPress: nt,
							"aria-label": Pt,
							ref: $e
						}, "btn-edit")
					});
				} else if (l.editRestrictionInfo && !F) {
					var Nt, Mt = (Nt = l.fieldName) != null ? Nt : "", wt = Mt !== "" ? s._(
						/*BTDS*/
						"",
						[s._param("fieldName", Mt)]
					) : s._(
						/*BTDS*/
						""
					);
					It = d.jsx(r("WAWebUnstyledButton.react"), {
						xstyle: [ae ? R.iconMainRefreshed : R.iconMain, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
						onClick: l.editRestrictionInfo,
						testid: V + "-info",
						title: wt,
						children: d.jsx(r("WDSIconIcInfo.react"), { iconXstyle: R.iconColor })
					}, "btn-info");
				}
			} else {
				var Tt, Dt = (Tt = l.fieldName) != null ? Tt : "";
				It = d.jsx(r("WAWebUnstyledButton.react"), {
					xstyle: [ae ? R.iconMainRefreshed : R.iconMain, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
					onClick: Je,
					disabled: l.disabled,
					testid: V + "-save",
					title: s._(
						/*BTDS*/
						"",
						[s._param("fieldName", Dt)]
					),
					children: d.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, {})
				}, "btn-done");
			}
			if (l.lockable === !0 && It != null) {
				var At = We && F && !l.pending;
				kt = d.jsx(r("WAWebVelocityTransitionGroup"), {
					exit: !l.showEditOnHover,
					enter: l.showEditOnHover !== !0 || !We,
					xstyle: ae || At ? [
						R.iconMainContainerRefreshed,
						ae && I && [R.iconMainContainerMultilineRefreshed, y.marginInlineStart10],
						R.alignSelfCenter
					] : [
						R.iconMainContainer,
						l.theme === "small" && R.iconMainContainerSmall,
						l.showEditOnHover === !0 && R.iconMainContainerEditOnHover,
						fe && at() && R.iconMainContainerChatInfoLarge,
						R.alignSelfCenter
					],
					transitionName: "pop",
					children: It
				});
			}
		} else if (Z === !0) {
			var Ft;
			l.pending === !0 ? Ft = d.jsx(o("WAWebSpinner.react").Spinner, {
				size: 18,
				stroke: 6,
				color: "highlight"
			}) : x != null || ee === !0 ? Ft = d.jsx(o("WAWebAlertErrorIcon.react").AlertErrorIcon, { height: 18 }) : te === !0 && (Ft = d.jsx(o("WAWebCheckboxRoundCheckedIcon.react").CheckboxRoundCheckedIcon, { xstyle: [R.icon, (F && l.theme === "editor" || l.theme === "request-reason" || l.theme === "gray-background") && R.iconThemed] })), Ft != null && (kt = d.jsx(r("WAWebVelocityTransitionGroup"), {
				appear: !0,
				xstyle: [
					R.iconMainContainer,
					l.theme === "small" && R.iconMainContainerSmall,
					l.showEditOnHover === !0 && R.iconMainContainerEditOnHover,
					fe && at() && R.iconMainContainerChatInfoLarge
				],
				transitionName: "pop",
				children: d.jsx("div", {
					className: "x10l6tqk xfr5jun xyqdw3p x1im30kd xg8j3zb x1djpfga",
					children: Ft
				})
			}));
		} else if (se && ue) {
			var Ot = ke == null || ke.trim() === "";
			kt = d.jsx(r("WAWebVelocityTransitionGroup"), {
				appear: !0,
				transitionName: "pop",
				children: d.jsx(o("WAWebRound.react").Round, {
					xstyle: [R.sendBtn, y.marginBottom6],
					medium: !0,
					theme: Ot ? o("WAWebRound.react").RoundTheme.Disabled : void 0,
					onClick: function() {
						return ue(ke);
					},
					disabled: Ot,
					label: s._(
						/*BTDS*/
						""
					),
					testid: "rich-text-send-button",
					children: d.jsx(o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon, { directional: !0 })
				})
			});
		}
		var Bt = at() && _e ? d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			handlers: {
				enter: Qe,
				space: Qe
			},
			children: d.jsx(r("WAWebUnstyledButton.react"), {
				dataTab: ie,
				xstyle: [R.btn, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
				onClick: Qe,
				onFocus: it,
				title: l.fieldName != null ? s._(
					/*BTDS*/
					"",
					[s._param("fieldName", l.fieldName)]
				) : s._(
					/*BTDS*/
					""
				),
				children: d.jsx(o("WAWebIcMoodIcon.react").IcMoodIcon, {})
			}, "emoji-btn")
		}) : null, Wt = d.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, { children: d.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: [R.btn, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus],
			onClick: l.onPhotoIconClick,
			title: s._(
				/*BTDS*/
				""
			),
			children: d.jsx(r("WDSIconIcImage.react"), {
				width: v,
				height: v
			})
		}, "photo-btn") }), qt = null;
		if (l.showRemaining === !0) {
			var Ut, Vt = o("WAUnicodeUtils").numCodepoints(ke || ""), Ht = (z != null ? z : 1 / 0) - o("WAWebCharacterLimitPlugin").numCodeUnits(ke || ""), Gt = Math.min(Ht, mt - Vt), zt = (Ut = l.charLimit) != null ? Ut : C, jt = Gt <= zt && at();
			if (jt) {
				var Kt = Gt <= Math.min(zt, b);
				qt = d.jsx("div", babelHelpers.extends({
					"aria-label": s._(
						/*BTDS*/
						""
					),
					className: {
						0: "x1p8j9ns xpcyujq x1f6kntn x19v9tvf xhslqc4 xp4054r",
						1: "x1p8j9ns xpcyujq x1f6kntn x19v9tvf xp4054r x30a034"
					}[(Gt < 0) << 0],
					"aria-live": "polite",
					"aria-atomic": "true",
					"aria-busy": "true"
				}, Kt && { "aria-busy": "false" }, { children: r("WAWebL10N").n(Gt) }), "counter"), Fe || (Oe(!0), Y != null && Y());
			}
		}
		var Qt = kt != null, Xt = f(function() {
			return I === !0 ? null : We && Qt && ae === !0 ? d.jsx("div", { className: "x2lah0s x100vrsf x1vqgdyp" }) : null;
		}, [
			We,
			I,
			ae,
			Qt
		]), Yt = l.showDraggableIcon != null && l.showDraggableIcon === !0 ? null : d.jsx("div", { children: d.jsx(r("WAWebDragIconWrapper.react"), { onDragThumbMouseDown: l.onDragThumbMouseDown }) }), Jt = ce || l.showRemaining === !0 ? d.jsxs(r("WAWebVelocityTransitionGroup"), {
			xstyle: [
				R.iconsEditContainer,
				l.theme === "invite-message-caption" && R.iconsEditContainerInvite,
				fe && at() && R.iconsEditContainerChatInfoLarge
			],
			exit: !l.showEditOnHover,
			transitionName: "none",
			children: [
				qt,
				me ? Wt : null,
				ce ? Bt : null,
				at() && l.onDragThumbMouseDown != null ? Yt : null
			]
		}) : null, Zt = l.error != null && l.error !== "" ? d.jsxs(d.Fragment, { children: [d.jsx("div", {
			className: "x78zum5 x1iyjqo2 xs83m0k x1t1x2f9 x30a034",
			"data-testid": V + "-error-text",
			children: _t ? l.error : null
		}), d.jsx("div", {
			className: "x10l6tqk x1i1rx1s xjm9jq1 x6ikm8r x10wlt62 xeh89do x1hyvwdk xuxw1ft",
			role: "alert",
			children: s._(
				/*BTDS*/
				"",
				[s._param("error", l.error)]
			)
		})] }) : null, en = Q != null && Q !== "" ? d.jsx("div", {
			className: "x1pg5gke xhslqc4",
			"data-testid": V + "-context-msg",
			children: Q
		}) : null, tn = l.lowProfile !== !0 ? d.jsxs("div", {
			className: "x78zum5 x1q0g3np",
			children: [
				d.jsx("div", {
					className: "x78zum5 x3ieub6 x1iyjqo2",
					children: d.jsx("div", {
						className: Et.infoWrapper,
						children: Zt != null ? Zt : en
					})
				}),
				pe && Me && d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(R.btnFooterContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop2), { children: Wt })),
				de && d.jsx("div", babelHelpers.extends({}, (u || (u = r("stylex"))).props(R.btnFooterContainer, o("WDSPaddings.stylex").wdsPaddings.paddingTop2), { children: Bt }))
			]
		}) : null, nn;
		if (l.lockable === !0 && !We) {
			var rn;
			Ve && (rn = d.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "EmojiPicker",
				escapable: !0,
				popable: !0,
				dismissOnWindowResize: !0,
				requestDismiss: Xe,
				requestFocus: Ye,
				children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Ve })
			})), nn = d.jsx(o("WAWebUimUie.react").UIE, {
				displayName: "TextInput",
				escapable: !0,
				dismissOnWindowResize: !0,
				requestFocus: Ge,
				requestDismiss: rt,
				children: d.jsx("div", { children: rn })
			});
		} else l.lockable !== !0 && Ve && (nn = d.jsx(o("WAWebUimUie.react").UIE, {
			displayName: "EmojiPicker",
			escapable: !0,
			popable: !0,
			dismissOnWindowResize: !0,
			requestDismiss: Xe,
			requestFocus: Ye,
			children: d.jsx(r("WAWebUimUieMenu.react"), { contextMenu: Ve })
		}));
		var on = F && !We, an = on, ln, sn;
		if (!an) Ie ? Te || (ln = d.jsx("div", {
			className: "xhslqc4 xs83m0k x1iyjqo2",
			children: d.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
				settings: ye,
				textContent: H,
				testid: V,
				emojiTextXstyle: Ce
			})
		})) : (ln = d.jsx(r("WAWebRichTextFieldEmojiTextBlock.react"), {
			settings: ye,
			textContent: ke,
			testid: V,
			emojiTextXstyle: Ce
		}), ae ? ln = d.jsx("div", {
			className: (u || (u = r("stylex")))(R.inputWrapperInner, Lt && R.inputWrapperInvite, l.theme === "phone-input" && R.inputWrapperPhone, l.showHighlightOnHover === !0 && R.inputWrapperHighlight, R.inputWrapperRefreshed, fe && R.groupInfoLargeTextRefreshed, ge && R.chatInfoDefaultTextRefreshed),
			children: ln
		}) : l.showHighlightOnHover === !0 && (ln = d.jsx("div", {
			className: {
				0: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli",
				4: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k",
				2: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x18d9i69 x6prxxf x1o2sk6j xo1h6xc",
				6: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k x18d9i69 x6prxxf x1o2sk6j xo1h6xc",
				1: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli xexx8yu xe2zdcy x2vl965 x10b6aqq",
				5: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k xexx8yu xe2zdcy x2vl965 x10b6aqq",
				3: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x6prxxf x1o2sk6j xo1h6xc xexx8yu xe2zdcy x2vl965 x10b6aqq",
				7: "x1iyjqo2 xs83m0k x1t1x2f9 xeuugli x1rife3k xjp8j0k x6prxxf x1o2sk6j xo1h6xc xexx8yu xe2zdcy x2vl965 x10b6aqq"
			}[!!Lt << 2 | (l.theme === "phone-input") << 1 | (l.showHighlightOnHover === !0) << 0],
			children: ln
		})));
		else {
			var un;
			m.includes(S.ChatInfoLargeText) ? un = R.textInputFontSize24 : m.includes(S.ChatInfoDefaultText) || l.theme === "label-input" ? ae ? un = R.textInputFontSize15 : un = R.textInputFontSize16 : l.theme === "editor" ? un = R.textInputFontSize14 : l.theme === "small" ? un = R.textInputFontSize13 : un = R.textInputFontSize17;
			var cn = l.theme === "phone-input" ? {} : {
				paddingTop: 8,
				paddingBottom: 5
			};
			ln = d.jsx("div", {
				style: cn,
				className: (u || (u = r("stylex")))(R.inputWrapperInner, Lt && R.inputWrapperInvite, l.theme === "phone-input" && R.inputWrapperPhone, l.showHighlightOnHover === !0 && R.inputWrapperHighlight, ae && R.inputWrapperRefreshed, l.constrainedWidth === !0 && R.constrainedWidth),
				children: d.jsxs(r("WAWebRichTextInput.react"), {
					title: l.title,
					ariaLabel: l.ariaLabel,
					testid: V,
					ref: De,
					initialText: l.value,
					multiline: l.multiline,
					focusOnMount: L,
					selectOnMount: E,
					pasteFromHTML: l.pasteFromHTML,
					enterIsNewLine: l.enterIsNewLine,
					onChange: function(t, n) {
						Ee(t.text), l.onChange == null || l.onChange(t, n);
					},
					onFocus: et,
					onBlur: tt,
					onEnter: Ze,
					onKeyDown: l.onKeyDown,
					onFiles: l.onFiles,
					maxLength: j === !0 ? void 0 : l.maxLength,
					maxVisibleLines: l.maxVisibleLines,
					minVisibleLines: l.minVisibleLines,
					maxCodeUnits: j === !0 ? void 0 : z,
					placeholder: H,
					textXstyle: un,
					lineWrap: l.lineWrap,
					readOnly: l.readOnly,
					tabOrder: ie,
					children: [d.jsx(r("WAWebRichTextInputPlugins.react"), {
						textFormatEnabled: l.textFormatEnabled,
						bulletPointsEnabled: l.bulletPointsEnabled,
						numberedListEnabled: l.numberedListEnabled,
						inlineCodeEnabled: l.inlineCodeEnabled,
						blockQuoteEnabled: l.blockQuoteEnabled,
						textFormatShortcutsEnabled: l.textFormatShortcutsEnabled,
						linksEnabled: l.linksEnabled,
						internLinksEnabled: l.internLinksEnabled,
						phoneNumbersEnabled: l.phoneNumbersEnabled,
						floatingToolbarEnabled: l.floatingToolbarEnabled
					}), d.jsx(r("WAWebEmojiPickerPlugin"), {})]
				})
			}), sn = null;
		}
		var dn, mn;
		l.placeholder != null && (dn = (Ie || l.hideFloatingLabel !== !0) && d.jsx("span", {
			className: Et.label,
			children: l.placeholder
		}), l.hideSpacer !== !0 && (mn = d.jsx("div", { className: {
			0: "x1n2onr6 xxk0z11",
			1: "x1n2onr6 xmix8c7"
		}[(l.theme === "label-input") << 0] })));
		var pn = function(t) {
			var e = Pe.current;
			e != null && t.target instanceof HTMLElement && e.contains(t.target);
		}, _n = G != null ? G : r("WAWebL10N").isRTL() ? "rtl" : "ltr", fn = {
			0: { className: "x1v5yvga" },
			1: { className: "x1v5yvga x1f6kntn" }
		}[(l.theme === "small") << 0], gn = d.jsx("div", babelHelpers.extends({}, fn, {
			"data-testid": V + "-empty-placeholder",
			children: w
		}));
		return d.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
			className: Et.container,
			onFocus: pn,
			onMouseEnter: ve,
			onMouseLeave: Se,
			children: [
				dn,
				mn,
				d.jsxs("div", {
					ref: Pe,
					className: Et.inputWrapper,
					dir: _n,
					children: [
						Xt,
						sn,
						ln,
						ot() && (re ? d.jsx(o("WAWebFlex.react").FlexRow, {
							grow: 1,
							paddingBottom: 8,
							children: d.jsx(r("WAWebUnstyledButton.react"), {
								onClick: nt,
								xstyle: R.textAlign,
								children: gn
							})
						}) : gn),
						d.jsxs(o("WAWebFlex.react").FlexRow, {
							columnGap: 8,
							children: [Jt, kt]
						})
					]
				}),
				tn,
				nn
			]
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	var E = L;
	l.TextInputCustomStyleThemes = S, l.RichTextField = E;
}), 226);
