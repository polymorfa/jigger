__d("WAWebAboutEditModal.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WATimeUtils",
	"WAWeb-moment",
	"WAWebAboutDailyUtils",
	"WAWebAboutPrompts",
	"WAWebAboutWamLogger",
	"WAWebApiPrivacyDisallowedList",
	"WAWebClickable.react",
	"WAWebClock",
	"WAWebContactCollection",
	"WAWebContactStatusBridge",
	"WAWebDateInput.react",
	"WAWebDivider.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownItemSeparator.react",
	"WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react",
	"WAWebEmoji",
	"WAWebEmoji.react",
	"WAWebEphemeralAboutDurationsUtils",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPrivacySettings",
	"WAWebPrivacyVisibilityEditDrawer.react",
	"WAWebSelect.react",
	"WAWebSelectContactsExceptModal.react",
	"WAWebSelectMenuItem.react",
	"WAWebStatusClockIcon.react",
	"WAWebTextStatusAction",
	"WAWebTextStatusGatingUtils",
	"WAWebTextStatusUtils",
	"WAWebTimeInput.react",
	"WAWebUserPrefsGeneral",
	"WAWebUserPrefsMeUser",
	"WAWebWebIcCheckIcon.react",
	"WDSButton.react",
	"WDSIconIcCheck.react",
	"WDSIconIcChevronRight.react",
	"WDSIconIcClose.react",
	"WDSIconIcDelete.react",
	"WDSIconIcLock.react",
	"WDSIconIcMood.react",
	"WDSMenu.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"WDSTextField.react",
	"fbs",
	"react",
	"react-compiler-runtime",
	"useWAWebContactValues",
	"useWAWebFlow",
	"useWAWebListener",
	"useWAWebUnmountSignal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useCallback, g = _.useEffect, h = _.useRef, y = _.useState, C = n("$InternalEnum")({
		Edit: "edit",
		Privacy: "privacy",
		ContactsExcept: "contacts_except"
	}), b = 50, v = [
		{
			emoji: "🟢",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "⏰",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "🤣",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "✈️",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		},
		{
			emoji: "🔥",
			text: r("fbs")._(
				/*BTDS*/
				""
			).toString()
		}
	], S = v.length, R = [
		o("WAWebAboutWamLogger").PRESET_TYPE.FREE_TO_CHAT,
		o("WAWebAboutWamLogger").PRESET_TYPE.SLOW_TO_RESPOND,
		o("WAWebAboutWamLogger").PRESET_TYPE.HANGING_WITH_FRIENDS,
		o("WAWebAboutWamLogger").PRESET_TYPE.TRAVELING,
		o("WAWebAboutWamLogger").PRESET_TYPE.EXCITED
	], L = {
		textEmojiContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		textStatusContainer: {
			width: "xh8yej3",
			$$css: !0
		},
		moodIcon: {
			color: "x1v5yvga",
			$$css: !0
		},
		grayColor: {
			color: "xhslqc4",
			$$css: !0
		},
		footer: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			paddingTop: "x1p57kb1",
			paddingBottom: "xvpt6g3",
			paddingInlineEnd: "xvtqlqk",
			paddingInlineStart: "x1m4z3lf",
			backgroundColor: "x1od0jb8",
			$$css: !0
		},
		confirmButton: {
			marginInlineStart: "xvc5jky",
			$$css: !0
		},
		contentPadding: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		suggestionItem: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			cursor: "x1ypdohk",
			paddingTop: "x16ovd2e",
			paddingInlineStart: "xb0esv5",
			":hover_backgroundColor": "xs723ss",
			":focus-visible_outline": "x18z0m94",
			":focus-visible_outlineOffset": "x1bqaal",
			$$css: !0
		},
		paddingEnd: {
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		timerIcon: {
			minWidth: "x1fns5xo",
			height: "x1vqgdyp",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingInlineEnd: "x1uc92m",
			$$css: !0
		},
		emojiStatusAlign: {
			marginBottom: "xdqhqc9",
			$$css: !0
		},
		emojiButton: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x100vrsf",
			height: "x1vqgdyp",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			borderTopColor: "xnj1f2r",
			borderInlineEndColor: "x2uibgs",
			borderBottomColor: "xkveyfu",
			borderInlineStartColor: "x12llq9",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			backgroundColor: "xjbqb8w",
			cursor: "x1ypdohk",
			":focus-visible_outline": "x18z0m94",
			":focus-visible_outlineOffset": "x7s97pk",
			$$css: !0
		},
		paddingTop: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		customDateTimeRow: {
			paddingInlineStart: "x1g7keqi",
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		expiryInfo: {
			paddingInlineStart: "x16zwnhg",
			paddingTop: "x16ovd2e",
			$$css: !0
		},
		paddingStart: {
			paddingInlineStart: "x12w63v0",
			$$css: !0
		},
		suggestionEmojiBox: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x100vrsf",
			height: "x1vqgdyp",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		suggestionsPaddingTop: {
			paddingTop: "x1xrf6ya",
			$$css: !0
		},
		presetsSeparator: {
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		privacyInfo: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			paddingTop: "x1tiyuxx",
			fontSize: "x1nxh6w3",
			color: "xhslqc4",
			$$css: !0
		},
		privacyIcon: {
			minWidth: "x1fns5xo",
			height: "x1vqgdyp",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		privacyValue: {
			display: "x3nfvp2",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		privacyChevron: {
			flexShrink: "x2lah0s",
			color: "xo1mcw5",
			$$css: !0
		},
		editContent: {
			backgroundColor: "x1280gxy",
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			flexGrow: "x1iyjqo2",
			minHeight: "x2lwn1j",
			$$css: !0
		},
		drawerBodyScroll: {
			flexBasis: "xdl72j9",
			minHeight: "x2lwn1j",
			$$css: !0
		},
		privacyDrawerContainer: {
			position: "x1n2onr6",
			height: "x16nrsnc",
			$$css: !0
		}
	};
	function E(e) {
		var t = o("react-compiler-runtime").c(17), n = e.emoji, a = e.onSave, i, l = y(!1), s = l[0], u = l[1], c = h(), d;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (d = function() {
			u(!0);
		}, t[0] = d) : d = t[0];
		var m = d;
		if (n != null) {
			var _;
			t[1] !== n ? (_ = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n), t[1] = n, t[2] = _) : _ = t[2];
			var f = _;
			if (f != null) {
				var g;
				t[3] !== f ? (g = p.jsx(r("WAWebEmoji.react"), { emoji: f }, "low-res"), t[3] = f, t[4] = g) : g = t[4], i = g;
			}
		}
		var C, b;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x1uc92m xdqhqc9" }, b = { className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp xyi3aci xwf5gio x1p453bz x1suzm8a xnj1f2r x2uibgs xkveyfu x12llq9 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xjbqb8w x1ypdohk x18z0m94 x7s97pk" }, t[5] = C, t[6] = b) : (C = t[5], b = t[6]);
		var v;
		t[7] !== i ? (v = i || p.jsx(r("WDSIconIcMood.react"), { xstyle: L.moodIcon }), t[7] = i, t[8] = v) : v = t[8];
		var S;
		t[9] !== v ? (S = p.jsx("button", babelHelpers.extends({}, b, {
			onClick: m,
			ref: c,
			children: v
		})), t[9] = v, t[10] = S) : S = t[10];
		var R;
		t[11] !== a || t[12] !== s ? (R = s && p.jsx(o("WAWebEditGroupProfileDrawerEmojiStickerPanelPopup.react").EmojiPanelPopup, {
			anchorRef: c,
			onClose: function() {
				u(!1);
			},
			onSelect: function(t) {
				a(t), u(!1);
			}
		}), t[11] = a, t[12] = s, t[13] = R) : R = t[13];
		var E;
		return t[14] !== S || t[15] !== R ? (E = p.jsxs("div", babelHelpers.extends({}, C, { children: [S, R] })), t[14] = S, t[15] = R, t[16] = E) : E = t[16], E;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(10), n = e.onClear, a = e.onSave, i = e.promptKey, l = e.text, s;
		t[0] !== i ? (s = function() {
			return i != null ? o("WAWebAboutPrompts").getAboutPromptText(i) : o("WAWebAboutPrompts").getRandomAboutPrompt();
		}, t[0] = i, t[1] = s) : s = t[1];
		var u = y(s), c = u[0], d;
		t[2] !== a ? (d = function(t) {
			a(t);
		}, t[2] = a, t[3] = d) : d = t[3];
		var m = d, _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "xh8yej3" }, t[4] = _) : _ = t[4];
		var f = l != null ? l : "", g;
		return t[5] !== m || t[6] !== c || t[7] !== n || t[8] !== f ? (g = p.jsx("div", babelHelpers.extends({}, _, { children: p.jsx(r("WDSTextField.react"), {
			EndIcon: r("WDSIconIcClose.react"),
			label: c,
			value: f,
			onEndIconClick: n,
			onValueChange: m,
			maxCharacterCount: b,
			testid: "self_profile_about_text_textfield"
		}) })), t[5] = m, t[6] = c, t[7] = n, t[8] = f, t[9] = g) : g = t[9], g;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(20), n = e.onClick, a = y(T), i = a[0], l = a[1], u = y(0), c = u[0], d = u[1], m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = function() {
			var e, t = (e = o("WAWebUserPrefsGeneral").getUserPrivacySettings().about) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
			l(t);
		}, t[0] = m) : m = t[0];
		var _ = m;
		o("useWAWebListener").useListener(o("WAWebUserPrefsGeneral").privacySettingsEventEmitter, "all", _);
		var f, h;
		t[1] !== i ? (f = function() {
			if (i === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist) {
				var e = !1;
				return (async function() {
					var t = await o("WAWebApiPrivacyDisallowedList").queryDisallowedLists();
					if (!e) {
						var n, r;
						d((n = (r = t.about) == null ? void 0 : r.disallowedList.length) != null ? n : 0);
					}
				})(), (function() {
					e = !0;
				});
			}
		}, h = [i], t[1] = i, t[2] = f, t[3] = h) : (f = t[2], h = t[3]), g(f, h);
		var C;
		t[4] !== i || t[5] !== c ? (C = i === o("WAWebPrivacySettings").VISIBILITY.all ? s._(
			/*BTDS*/
			""
		) : i === o("WAWebPrivacySettings").VISIBILITY.contacts ? s._(
			/*BTDS*/
			""
		) : i === o("WAWebPrivacySettings").VISIBILITY.contact_blacklist ? s._(
			/*BTDS*/
			"",
			[s._param("excluded_count", c)]
		) : i === o("WAWebPrivacySettings").VISIBILITY.none ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
		})(), t[4] = i, t[5] = c, t[6] = C) : C = t[6];
		var b = C, v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x3nfvp2 x6s0dn4" }, t[7] = v) : v = t[7];
		var S;
		t[8] !== b ? (S = p.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentActionEmphasized",
			children: b
		}), t[8] = b, t[9] = S) : S = t[9];
		var R;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (R = p.jsx(r("WDSIconIcChevronRight.react"), {
			height: 20,
			width: 20,
			xstyle: L.privacyChevron
		}), t[10] = R) : R = t[10];
		var E;
		t[11] !== S ? (E = p.jsxs("span", babelHelpers.extends({}, v, { children: [S, R] })), t[11] = S, t[12] = E) : E = t[12];
		var k = E, I;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x78zum5 x6s0dn4 x1tiyuxx x1nxh6w3 xhslqc4" }, t[13] = I) : I = t[13];
		var D;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (D = p.jsx(r("WDSIconIcLock.react"), {
			iconXstyle: L.grayColor,
			xstyle: L.privacyIcon
		}), t[14] = D) : D = t[14];
		var x;
		t[15] !== k ? (x = p.jsx("span", { children: s._(
			/*BTDS*/
			"",
			[s._param("privacy_setting", k)]
		) }), t[15] = k, t[16] = x) : x = t[16];
		var $;
		return t[17] !== n || t[18] !== x ? ($ = p.jsxs("div", babelHelpers.extends({}, I, {
			"data-testid": "privacy-info",
			children: [D, p.jsx(o("WAWebClickable.react").Clickable, {
				onClick: n,
				children: x
			})]
		})), t[17] = n, t[18] = x, t[19] = $) : $ = t[19], $;
	}
	function T() {
		var e;
		return (e = o("WAWebUserPrefsGeneral").getUserPrivacySettings().about) != null ? e : o("WAWebPrivacySettings").VISIBILITY.all;
	}
	var D = "custom", x = 30, $ = function() {
		var e = r("WAWeb-moment")().format("YYYY-MM-DD"), t = r("WAWeb-moment")().add(x, "days").format("YYYY-MM-DD");
		return [e, t];
	};
	function P(e, t) {
		var n = r("WAWeb-moment")(e + " " + t);
		return Math.max(0, n.diff(r("WAWeb-moment")(), "seconds"));
	}
	function N(e) {
		var t = o("react-compiler-runtime").c(51), n = e.duration, a = e.onSave, i = o("WAWebEphemeralAboutDurationsUtils").getTextStatusEphemeralityDurations(), l;
		t[0] !== n ? (l = function(t) {
			return t.value === n;
		}, t[0] = n, t[1] = l) : l = t[1];
		var u = i.some(l), c = y(!u), d = c[0], m = c[1], _ = y(A), f = _[0], g = _[1], h = y(w), C = h[0], b = h[1], v = y(n), S = v[0], R = v[1];
		if (n !== S) {
			R(n);
			var E;
			t[2] !== n ? (E = function(t) {
				return t.value === n;
			}, t[2] = n, t[3] = E) : E = t[3];
			var k = i.some(E);
			if (k && d) m(!1);
			else if (!k && !d) {
				m(!0);
				var I = r("WAWeb-moment")().add(n, "seconds");
				g(I.format("YYYY-MM-DD")), b(I.format("HH:mm"));
			}
		}
		var T;
		t[4] !== f || t[5] !== C || t[6] !== a ? (T = function(t) {
			t === D ? (m(!0), a(P(f, C))) : (m(!1), a(Number(t)));
		}, t[4] = f, t[5] = C, t[6] = a, t[7] = T) : T = t[7];
		var x = T, N;
		t[8] !== C || t[9] !== a ? (N = function(t) {
			g(t), a(P(t, C));
		}, t[8] = C, t[9] = a, t[10] = N) : N = t[10];
		var F = N, O;
		t[11] !== f || t[12] !== a ? (O = function(t) {
			b(t), a(P(f, t));
		}, t[11] = f, t[12] = a, t[13] = O) : O = t[13];
		var B = O, W;
		t[14] !== n || t[15] !== d ? (W = d ? D : n.toString(), t[14] = n, t[15] = d, t[16] = W) : W = t[16];
		var q = W, U = o("WAWebFlex.react").FlexRow, V = "center", H = L, G;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (G = p.jsx(o("WAWebStatusClockIcon.react").StatusClockIcon, {
			iconXstyle: L.grayColor,
			xstyle: L.timerIcon
		}), t[17] = G) : G = t[17];
		var z = o("WAWebSelect.react").Select, j;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (j = s._(
			/*BTDS*/
			""
		), t[18] = j) : j = t[18];
		var K;
		t[19] !== n || t[20] !== d ? (K = d ? D : n.toString(), t[19] = n, t[20] = d, t[21] = K) : K = t[21];
		var Q;
		t[22] === Symbol.for("react.memo_cache_sentinel") ? (Q = s._(
			/*BTDS*/
			""
		), t[22] = Q) : Q = t[22];
		var X = "text-status-ephemeral-durations-dropdown", Y = "about-20-screen", J = "100%", Z = i.map(M), ee;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (ee = p.jsx(r("WAWebDropdownItemSeparator.react"), {}), t[23] = ee) : ee = t[23];
		var te;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (te = p.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: D,
			primary: s._(
				/*BTDS*/
				""
			).toString()
		}, "duration-custom"), t[24] = te) : te = t[24];
		var ne;
		t[25] !== z || t[26] !== x || t[27] !== q || t[28] !== Q || t[29] !== Z || t[30] !== j || t[31] !== K ? (ne = p.jsxs(z, {
			defaultLabel: j,
			initialSelection: K,
			label: Q,
			onChange: x,
			testid: X,
			theme: Y,
			width: J,
			children: [
				Z,
				ee,
				te
			]
		}, q), t[25] = z, t[26] = x, t[27] = q, t[28] = Q, t[29] = Z, t[30] = j, t[31] = K, t[32] = ne) : ne = t[32];
		var re;
		t[33] !== U || t[34] !== ne || t[35] !== H.paddingTop || t[36] !== G ? (re = p.jsxs(U, {
			align: V,
			xstyle: H.paddingTop,
			children: [G, ne]
		}), t[33] = U, t[34] = ne, t[35] = H.paddingTop, t[36] = G, t[37] = re) : re = t[37];
		var oe;
		t[38] !== f || t[39] !== C || t[40] !== F || t[41] !== B || t[42] !== d ? (oe = d && p.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: L.customDateTimeRow,
			dir: "ltr",
			columnGap: 8,
			children: [p.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				basis: 0,
				children: p.jsx(o("WAWebDateInput.react").DateInput, {
					name: "about-custom-date",
					value: f,
					onChange: F,
					getDateBoundaries: $,
					theme: "about",
					label: s._(
						/*BTDS*/
						""
					)
				})
			}), p.jsx(o("WAWebFlex.react").FlexItem, {
				grow: 1,
				basis: 0,
				children: p.jsx(o("WAWebTimeInput.react").TimeInput, {
					name: "about-custom-time",
					value: C,
					onChange: B,
					theme: "about",
					label: s._(
						/*BTDS*/
						""
					)
				})
			})]
		}), t[38] = f, t[39] = C, t[40] = F, t[41] = B, t[42] = d, t[43] = oe) : oe = t[43];
		var ae;
		t[44] !== n || t[45] !== d ? (ae = !d && p.jsx("div", {
			className: "x16zwnhg x16ovd2e",
			"data-testid": "expiry-preview",
			children: p.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: o("WAWebClock").Clock.textStatusExpiryStr(o("WATimeUtils").castToUnixTime(o("WATimeUtils").unixTime() + n))
			})
		}), t[44] = n, t[45] = d, t[46] = ae) : ae = t[46];
		var ie;
		return t[47] !== re || t[48] !== oe || t[49] !== ae ? (ie = p.jsxs(p.Fragment, { children: [
			re,
			oe,
			ae
		] }), t[47] = re, t[48] = oe, t[49] = ae, t[50] = ie) : ie = t[50], ie;
	}
	function M(e) {
		return p.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
			optionId: "" + e.value,
			primary: e.label.toString()
		}, "duration-" + e.value);
	}
	M.displayName = M.name + " [from " + i.id + "]";
	function w() {
		return r("WAWeb-moment")().format("HH:mm");
	}
	function A() {
		return r("WAWeb-moment")().add(1, "day").format("YYYY-MM-DD");
	}
	function F(e) {
		var t = o("react-compiler-runtime").c(33), n = e.emojiKey, a = e.isDeletable, i = e.onDelete, l = e.onSelect, u = e.textVal, c = h(null), d;
		t[0] !== n ? (d = o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(n != null ? n : ""), t[0] = n, t[1] = d) : d = t[1];
		var m = d, _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		), t[2] = _) : _ = t[2];
		var f;
		t[3] !== l ? (f = p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcCheck.react"),
			title: _,
			onPress: l,
			testid: "mi-suggestion-select"
		}), t[3] = l, t[4] = f) : f = t[4];
		var g;
		t[5] !== a || t[6] !== i ? (g = a === !0 && p.jsx(r("WDSMenuItem.react"), {
			Icon: r("WDSIconIcDelete.react"),
			title: s._(
				/*BTDS*/
				""
			),
			onPress: i,
			destructive: !0,
			testid: "mi-suggestion-delete"
		}), t[5] = a, t[6] = i, t[7] = g) : g = t[7];
		var y;
		t[8] !== f || t[9] !== g ? (y = p.jsxs(r("WDSMenu.react"), { children: [f, g] }), t[8] = f, t[9] = g, t[10] = y) : y = t[10];
		var C = y, b;
		t[11] !== C ? (b = {
			targetRef: c,
			menu: C,
			contextMenuArea: !0,
			enableUIM: !1
		}, t[11] = C, t[12] = b) : b = t[12];
		var v = r("useWDSMenu")(b), S = v.menuPortal, R = v.openMenu, E;
		t[13] !== R ? (E = function(t) {
			t.preventDefault(), t.stopPropagation(), R(t);
		}, t[13] = R, t[14] = E) : E = t[14];
		var k = E, I;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x78zum5 x6s0dn4 x1qughib x1ypdohk x16ovd2e xb0esv5 xs723ss x18z0m94 x1bqaal" }, t[15] = I) : I = t[15];
		var T;
		t[16] !== l ? (T = function(t) {
			t.key === "Enter" && l();
		}, t[16] = l, t[17] = T) : T = t[17];
		var D;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (D = { className: "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x2lah0s" }, t[18] = D) : D = t[18];
		var x;
		t[19] !== m ? (x = p.jsx("div", babelHelpers.extends({}, D, { children: m != null ? p.jsx(r("WAWebEmoji.react"), { emoji: m }, "low-res") : p.jsx(r("WDSIconIcMood.react"), {
			height: 20,
			width: 20,
			xstyle: L.moodIcon
		}) })), t[19] = m, t[20] = x) : x = t[20];
		var $;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x12w63v0" }, t[21] = $) : $ = t[21];
		var P;
		t[22] !== u ? (P = p.jsx("span", babelHelpers.extends({}, $, { children: u })), t[22] = u, t[23] = P) : P = t[23];
		var N;
		t[24] !== x || t[25] !== P ? (N = p.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			children: [x, P]
		}), t[24] = x, t[25] = P, t[26] = N) : N = t[26];
		var M;
		return t[27] !== k || t[28] !== S || t[29] !== l || t[30] !== N || t[31] !== T ? (M = p.jsxs("div", babelHelpers.extends({ ref: c }, I, {
			onClick: l,
			onContextMenu: k,
			onKeyDown: T,
			role: "button",
			tabIndex: 0,
			children: [N, S]
		})), t[27] = k, t[28] = S, t[29] = l, t[30] = N, t[31] = T, t[32] = M) : M = t[32], M;
	}
	function O(e) {
		var t = o("react-compiler-runtime").c(13), n = e.handleDeleteSuggestion, a = e.onSave, i = e.suggestions, l = i.length > S, s, u;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (s = { className: "x1xrf6ya" }, u = p.jsx(r("WAWebDivider.react"), { direction: "horizontal" }), t[0] = s, t[1] = u) : (s = t[0], u = t[1]);
		var c;
		if (t[2] !== n || t[3] !== l || t[4] !== a || t[5] !== i) {
			var d;
			t[7] !== n || t[8] !== l || t[9] !== a ? (d = function(t, o) {
				var e = t.duration, i = t.emoji, s = t.text;
				return p.jsxs(p.Fragment, { children: [o === S && l && p.jsx("div", {
					className: "x16ovd2e x12xbjc7",
					children: p.jsx(r("WAWebDivider.react"), { direction: "horizontal" })
				}), p.jsx(F, {
					emojiKey: i,
					isDeletable: o >= S,
					textVal: s,
					onSelect: function() {
						return a({
							selectedDur: e,
							selectedEmoji: i,
							selectedText: s
						});
					},
					onDelete: function() {
						n(o);
					}
				})] }, o);
			}, t[7] = n, t[8] = l, t[9] = a, t[10] = d) : d = t[10], c = i.map(d), t[2] = n, t[3] = l, t[4] = a, t[5] = i, t[6] = c;
		} else c = t[6];
		var m;
		return t[11] !== c ? (m = p.jsxs("div", babelHelpers.extends({}, s, { children: [u, p.jsx("div", { children: c })] })), t[11] = c, t[12] = m) : m = t[12], m;
	}
	function B(t) {
		var n, a, i, l = y(function() {
			return o("WAWebAboutDailyUtils").incrementAboutCreationVisit(), Date.now();
		}), m = l[0], _ = h(!1), f = r("useWAWebUnmountSignal")(), T = y([]), D = T[0], x = T[1], $ = function(t) {
			if (t == null || t.length === 0) {
				x(v);
				return;
			}
			var e = new Set(v.map(function(e) {
				var t, n;
				return ((t = e.emoji) != null ? t : "") + "|" + ((n = e.text) != null ? n : "");
			})), n = t.filter(function(t) {
				var n, r, o = ((n = t.emoji) != null ? n : "") + "|" + ((r = t.text) != null ? r : "");
				return e.has(o) ? !1 : (e.add(o), !0);
			});
			x([].concat(v, n));
		}, P = o("WAWebUserPrefsMeUser").getMeUserOrThrow(), M = o("WAWebContactCollection").ContactCollection.assertGet(P), w = o("useWAWebContactValues").useContactValues(M.id, [
			(i = o("WAWebFrontendContactGetters")).getTextStatusString,
			i.getTextStatusEmoji,
			i.getTextStatusEphemeralDuration,
			i.getTextStatusExpiryTs,
			i.getTextStatusLastUpdateTime
		]), A = w[0], F = w[1], B = w[2], W = w[3], q = w[4], U = o("WAWebTextStatusUtils").hasTextStatusSet({
			textStatusEmoji: F,
			textStatusEphemeralDuration: B,
			textStatusExpiryTs: W,
			textStatusLastUpdateTime: q,
			textStatusString: A
		}), V = y(U ? A : null), H = V[0], G = V[1], z = y(U ? F : null), j = z[0], K = z[1], Q = y(U && B != null ? B : o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration), X = Q[0], Y = Q[1];
		g(function() {
			(async function() {
				if (!(!o("WAWebTextStatusGatingUtils").sendTextStatusEnabled() || f.aborted)) {
					var e = await o("WAWebTextStatusAction").getSuggestions();
					f.aborted || $(e);
				}
			})();
		}, [f.aborted]);
		var J = o("useWAWebFlow").useFlow(C.Edit, {
			transitions: o("useWAWebFlow").FlowTransitions.None,
			onEnd: o("WAWebModalManager").closeModalManager
		}), Z = J[1], ee = h(null), te = Z.step;
		if (te == null) return null;
		var ne = function() {
			_.current || (_.current = !0, o("WAWebAboutDailyUtils").incrementAboutCreationStarted());
		}, re = function(t) {
			ne(), G(t);
		}, oe = function(t) {
			ne(), K(t);
		}, ae = function() {
			G(null), K(null), Y(o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration);
		}, ie = function(t) {
			Y(t);
		}, le = function() {
			return D == null ? void 0 : D.some(function(e) {
				return e.emoji === j && e.text === H;
			});
		}, se = function() {
			var e = D == null ? void 0 : D.findIndex(function(e) {
				return e.emoji === j && e.text === H;
			});
			if (e != null && e >= 0 && e < S) return R[e];
		}, ue = function(t) {
			var e = t.selectedDur, n = t.selectedEmoji, r = t.selectedText;
			ne(), K(n), G(r), e != null && Y(e);
		}, ce = async function() {
			var n, r = H != null && H.trim() ? H : null;
			if (!(r != null && r.length > b)) {
				if (r === A && j === F && X === B) {
					o("WAWebModalManager").closeModalManager();
					return;
				}
				try {
					await o("WAWebTextStatusAction").setMyTextStatus(r, j, X);
				} catch (t) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[handleSave] failed to save About status: ", ""])), t), o("WAWebAboutDailyUtils").incrementAboutFailure();
					return;
				}
				try {
					var a = [j, r].filter(Boolean).join(" ");
					if (await o("WAWebContactStatusBridge").setMyStatus(a), (r || j) && !le()) {
						var i = (D != null ? D : []).slice(S);
						await o("WAWebTextStatusAction").setSuggestions([{
							emoji: j,
							text: r,
							duration: X
						}].concat(i));
					}
				} catch (e) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[handleSave] secondary operations failed: ", ""])), e);
				}
				var l = (r == null || r === "") && j == null, s;
				l ? s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CLEAR_EXISTING : U ? s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.UPDATE_EXISTING : s = o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CREATE_NEW, o("WAWebAboutWamLogger").logAboutCreation({
					aboutDuration: X,
					aboutEntrypoint: t.entrypoint,
					aboutLength: (n = r == null ? void 0 : r.length) != null ? n : 0,
					aboutOverallT: Math.round((Date.now() - m) / 1e3),
					aboutPresetSelected: le(),
					aboutPromptKey: t.promptKey,
					aboutRequestType: s,
					preset: se()
				}), o("WAWebAboutDailyUtils").incrementAboutSuccess(), o("WAWebModalManager").closeModalManager();
			}
		}, de = async function(t) {
			if (!(t == null || D == null)) {
				var e = [].concat(D);
				e.splice(t, 1);
				try {
					var n = e.slice(S);
					await o("WAWebTextStatusAction").setSuggestions(n), $(n);
				} catch (e) {
					o("WALogger").WARN(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[handleDeleteSuggestion] failed to update suggestions"])));
				}
			}
		}, me = s._(
			/*BTDS*/
			""
		), pe = async function() {
			try {
				await o("WAWebTextStatusAction").setMyTextStatus(null, null, o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration), await o("WAWebContactStatusBridge").setMyStatus("");
			} catch (e) {
				o("WALogger").ERROR(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[handleDelete] failed to clear About status: ", ""])), e), o("WAWebAboutDailyUtils").incrementAboutFailure();
				return;
			}
			o("WAWebAboutWamLogger").logAboutCreation({
				aboutDuration: o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration,
				aboutEntrypoint: t.entrypoint,
				aboutLength: 0,
				aboutOverallT: Math.round((Date.now() - m) / 1e3),
				aboutPresetSelected: !1,
				aboutRequestType: o("WAWebAboutWamLogger").ABOUT_REQUEST_TYPE.CLEAR_EXISTING
			}), o("WAWebAboutDailyUtils").incrementAboutSuccess(), o("WAWebModalManager").closeModalManager();
		}, _e = function() {
			pe();
		}, fe = function() {
			ce();
		}, ge = (n = U ? A : null) != null ? n : null, he = (a = U ? F : null) != null ? a : null, ye = U && B != null ? B : o("WAWebEphemeralAboutDurationsUtils").defaultTextStatusEphemeralDuration, Ce = H != null && H.trim() ? H : null, be = Ce === ge && (j != null ? j : null) === he && X === ye, ve = be || !!j && Ce == null || H != null && H.length > b;
		return te === C.Edit ? p.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.EditAbout,
			children: p.jsxs("div", {
				className: "x1280gxy x78zum5 xdt5ytf x1iyjqo2 x2lwn1j",
				children: [
					p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: me,
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
						onCancel: o("WAWebModalManager").closeModalManager
					}),
					p.jsxs(r("WAWebDrawerBody.react"), {
						theme: "padding",
						xstyle: L.drawerBodyScroll,
						children: [p.jsxs("div", {
							className: "xb0esv5 xyo0t3i",
							children: [
								p.jsxs(o("WAWebFlex.react").FlexRow, {
									align: "center",
									xstyle: L.textEmojiContainer,
									children: [p.jsx(E, {
										emoji: j,
										onSave: oe
									}), p.jsx(k, {
										onClear: ae,
										onSave: re,
										promptKey: t.promptKey,
										text: H
									})]
								}),
								p.jsx(I, { onClick: function() {
									return Z.push(C.Privacy);
								} }),
								p.jsx(N, {
									duration: X,
									onSave: ie
								})
							]
						}), p.jsx(O, {
							handleDeleteSuggestion: de,
							onSave: ue,
							suggestions: D
						})]
					}),
					p.jsxs("div", {
						className: "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 xvtqlqk x1m4z3lf x1od0jb8",
						children: [U && p.jsx(o("WAWebClickable.react").Clickable, {
							ariaLabel: s._(
								/*BTDS*/
								""
							),
							onClick: _e,
							children: p.jsx(r("WDSIconIcDelete.react"), { xstyle: L.grayColor })
						}), p.jsx("div", {
							className: "xvc5jky",
							children: p.jsx(r("WDSButton.react"), {
								variant: "filled",
								size: "medium",
								type: "default",
								Icon: o("WAWebWebIcCheckIcon.react").WebIcCheckIcon,
								disabled: ve,
								onPress: fe,
								testid: "popup-controls-ok",
								"aria-label": s._(
									/*BTDS*/
									""
								)
							})
						})]
					})
				]
			})
		}) : te === C.Privacy ? p.jsx(o("WAWebModal.react").Modal, {
			type: o("WAWebModal.react").ModalTheme.EditAbout,
			children: p.jsx("div", {
				className: "x1n2onr6 x16nrsnc",
				children: p.jsx(r("WAWebPrivacyVisibilityEditDrawer.react"), {
					category: "about",
					onClose: function() {
						return Z.pop();
					},
					onOpenContactsExceptModal: function(t) {
						ee.current = t, Z.push(C.ContactsExcept);
					}
				})
			})
		}) : te === C.ContactsExcept ? p.jsx(r("WAWebSelectContactsExceptModal.react"), {
			category: "about",
			onConfirm: function() {
				ee.current == null || ee.current();
			},
			onBack: function() {
				return Z.pop();
			}
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + te);
		})();
	}
	B.displayName = B.name + " [from " + i.id + "]", l.default = B;
}), 226);
