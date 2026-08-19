__d("WAWebVcardModalDetails.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebCellFrame.react",
	"WAWebChatEntryPoint",
	"WAWebContactCollection",
	"WAWebContactManagementGating",
	"WAWebContactUtils",
	"WAWebCopyPasteSelectable.react",
	"WAWebDrawerItem.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebInitialsFromNameUtils",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebOpenChatWithContactAction",
	"WAWebProfilePicThumbCollection",
	"WAWebUsernameTypes",
	"WAWebUsernameWorkerCompatibleGatingUtils",
	"WAWebVcardGetNameFromParsed",
	"WAWebVcardParsingUtils",
	"WAWebVcardUtils",
	"WAWebWidFactory",
	"WAWebWidFormat",
	"WDSBaseCheckbox.react",
	"WDSButton.react",
	"WDSIconWdsIcChatFilled.react",
	"WDSProfilePhoto.react",
	"WDSTooltip.react",
	"isStringNullOrEmpty",
	"react",
	"react-compiler-runtime",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		content: {
			paddingTop: "xexx8yu",
			paddingInlineEnd: "x1pic42t",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1onr9mi",
			marginTop: "xdj266r",
			backgroundColor: "x1280gxy",
			$$css: !0
		},
		itemWithCheckbox: {
			paddingInlineStart: "x12w63v0",
			$$css: !0
		}
	};
	function m(e) {
		return e.join(" ");
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(35), n = e.onSaveContact, a = e.parsedVcard, i = e.thumbnail, l = e.username, c;
		if (t[0] !== a || t[1] !== l) {
			var m = o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(a), p = o("WAWebUsernameTypes").asMaybeUsername(l);
			r("isStringNullOrEmpty")(m) && p != null ? c = o("WAWebUsernameTypes").displayUsername(p) : c = m, t[0] = a, t[1] = l, t[2] = c;
		} else c = t[2];
		var f;
		t[3] !== c ? (f = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: c,
			direction: "auto",
			titlify: !0,
			ellipsify: !0,
			selectable: !0
		}), t[3] = c, t[4] = f) : f = t[4];
		var g = f, h;
		if (t[5] !== a) {
			var y = o("WAWebVcardUtils").vcardGetOrganizationString(a);
			h = r("isStringNullOrEmpty")(y) ? void 0 : y, t[5] = a, t[6] = h;
		} else h = t[6];
		var C = h, b;
		t[7] !== a ? (b = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.getThumbnailWidFromVcard(a), t[7] = a, t[8] = b) : b = t[8];
		var v = b, S = c != null ? c : "", R;
		t[9] !== S || t[10] !== i || t[11] !== v ? (R = u.jsx(_, {
			name: S,
			thumbnail: i,
			wid: v
		}), t[9] = S, t[10] = i, t[11] = v, t[12] = R) : R = t[12];
		var L = R;
		if (o("WAWebContactManagementGating").contactManagementEnabled()) {
			var E, k, I;
			if (t[13] !== a) {
				var T, D, x, $;
				k = o("WAWebContactUtils").getContactDataFromVcard(a), E = ((T = k) == null ? void 0 : T.phoneNumber) != null && o("WAWebContactUtils").canSaveAsMyContact((D = k) == null ? void 0 : D.phoneNumber), I = ((x = k) == null ? void 0 : x.lid) != null && o("WAWebContactUtils").canSaveAsMyContact(($ = k) == null ? void 0 : $.lid), t[13] = a, t[14] = E, t[15] = k, t[16] = I;
			} else E = t[14], k = t[15], I = t[16];
			var P = I, N = E || P && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled();
			if (k && N) {
				var M;
				t[17] !== k || t[18] !== n ? (M = function() {
					n && (o("WAWebModalManager").ModalManager.close(), n(k));
				}, t[17] = k, t[18] = n, t[19] = M) : M = t[19];
				var w = M, A;
				t[20] !== L || t[21] !== C || t[22] !== g ? (A = u.jsx(o("WAWebFlex.react").FlexItem, {
					grow: 1,
					children: u.jsx(r("WAWebCellFrame.react"), {
						image: L,
						theme: "plain",
						primary: g,
						secondary: C
					})
				}), t[20] = L, t[21] = C, t[22] = g, t[23] = A) : A = t[23];
				var F;
				t[24] !== k || t[25] !== w || t[26] !== n ? (F = n && u.jsx(o("WAWebFlex.react").FlexItem, {
					xstyle: d.content,
					children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: w,
						children: k.isExistingContact ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							""
						)
					})
				}), t[24] = k, t[25] = w, t[26] = n, t[27] = F) : F = t[27];
				var O;
				return t[28] !== A || t[29] !== F ? (O = u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [A, F]
				}), t[28] = A, t[29] = F, t[30] = O) : O = t[30], O;
			}
		}
		var B;
		return t[31] !== L || t[32] !== C || t[33] !== g ? (B = u.jsx(r("WAWebCellFrame.react"), {
			image: L,
			theme: "plain",
			primary: g,
			secondary: C
		}), t[31] = L, t[32] = C, t[33] = g, t[34] = B) : B = t[34], B;
	}
	function _(e) {
		var t, n = o("react-compiler-runtime").c(25), a = e.name, i = e.thumbnail, l = e.wid, s;
		n[0] !== l ? (s = l != null ? o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(l) : null, n[0] = l, n[1] = s) : s = n[1];
		var d = s, m;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (m = ["img"], n[2] = m) : m = n[2];
		var p = o("useWAWebModelValues").useOptionalModelValues(d, m), _, f;
		n[3] !== l ? (_ = function() {
			l != null && o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(l).catch(r("WAWebNoop"));
		}, f = [l], n[3] = l, n[4] = _, n[5] = f) : (_ = n[4], f = n[5]), c(_, f);
		var g;
		if (n[6] !== a || n[7] !== l) {
			var h = l != null ? o("WAWebContactCollection").ContactCollection.get(l) : null;
			g = h != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact(h) : o("WAWebInitialsFromNameUtils").getInitialsFromNames({
				name: a,
				shortName: a.split(" ")[0],
				pushname: null
			}), n[6] = a, n[7] = l, n[8] = g;
		} else g = n[8];
		var y = g, C;
		n[9] !== y.firstInitial || n[10] !== y.secondInitial ? (C = [y.firstInitial, y.secondInitial].filter(Boolean).join("") || void 0, n[9] = y.firstInitial, n[10] = y.secondInitial, n[11] = C) : C = n[11];
		var b = C, v = (t = p == null ? void 0 : p.img) != null ? t : i, S;
		n[12] !== l ? (S = l != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(l) : void 0, n[12] = l, n[13] = S) : S = n[13];
		var R;
		n[14] !== l ? (R = l != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(l) : void 0, n[14] = l, n[15] = R) : R = n[15];
		var L;
		n[16] !== l ? (L = l != null ? o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(l) : void 0, n[16] = l, n[17] = L) : L = n[17];
		var E;
		return n[18] !== b || n[19] !== a || n[20] !== L || n[21] !== v || n[22] !== S || n[23] !== R ? (E = u.jsx(r("WDSProfilePhoto.react"), {
			type: "person",
			name: a,
			src: v,
			size: "medium",
			color: S,
			customColor: R,
			placeholderIcon: L,
			isDecorative: !0,
			initials: b,
			testid: "vcard_modal_header_photo"
		}), n[18] = b, n[19] = a, n[20] = L, n[21] = v, n[22] = S, n[23] = R, n[24] = E) : E = n[24], E;
	}
	var f = function(t, n) {
		var e = o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(n), a = s._(
			/*BTDS*/
			"",
			[s._param("contact-name", e)]
		), i = s._(
			/*BTDS*/
			""
		), l = u.jsx(r("WDSTooltip.react"), {
			label: i,
			children: u.jsx(r("WDSButton.react"), {
				testid: "vcard_chat_button",
				Icon: r("WDSIconWdsIcChatFilled.react"),
				variant: "borderless",
				onPress: function() {
					return g(t);
				},
				"aria-label": a
			})
		});
		return l;
	}, g = function(t) {
		o("WAWebModalManager").ModalManager.close(), o("WAWebOpenChatWithContactAction").openChatWithContact(t, "vCardModalDetails", o("WAWebChatEntryPoint").ChatEntryPoint.Vcard);
	}, h = function(t) {
		var e = "mailto:" + t;
		o("WAWebExternalLink.react").openExternalLink(e);
	}, y = function(t) {
		var e = t.filter(Boolean).map(encodeURIComponent).join(", "), n = "https://maps.google.com/maps/search/" + e + "?hl=" + r("WAWebL10N").getNormalizedLocale();
		o("WAWebExternalLink.react").openExternalLink(n);
	};
	function C(e) {
		var t = o("react-compiler-runtime").c(21), n = e.onSaveContact, a = e.parsedVcard, i = e.thumbnail, l = e.username, c;
		if (t[0] !== a || t[1] !== e.includePhoneNumber || t[2] !== e.includeUsername || t[3] !== e.onTogglePhoneNumber || t[4] !== e.onToggleUsername || t[5] !== l) {
			var _, g, C, S, R, L, E, k, I, T = o("WAWebVcardParsingUtils").vcardLidWid(a), D = (_ = (g = a.TEL) == null ? void 0 : g.filter(v)) != null ? _ : [], x = (C = a.TEL) == null ? void 0 : C.filter(b), $ = T != null ? T : ((S = D[0]) == null || (S = S.properties) == null || (S = S.waid) == null ? void 0 : S[0]) != null ? o("WAWebWidFactory").createUserWidOrThrow(D[0].properties.waid[0]) : null;
			c = [], D.forEach(function(t) {
				var n = o("WAWebWidFactory").createUserWidOrThrow(t.properties.waid[0]), r = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
					selectable: !0,
					children: o("WAWebWidFormat").widToFormattedUser(n)
				});
				c.push({
					title: r,
					icon: f(n, a),
					checkboxValue: e.includePhoneNumber,
					onCheckboxChange: e.onTogglePhoneNumber,
					text: o("WAWebVcardUtils").vcardGetType(t),
					key: "vCard-" + String(t.index)
				});
			}), l != null && $ != null && c.push({
				title: "@" + l,
				icon: f($, a),
				text: s._(
					/*BTDS*/
					""
				),
				key: "vCard-username",
				checkboxValue: e.includeUsername,
				onCheckboxChange: e.onToggleUsername
			}), (R = a.EMAIL) == null || R.forEach(function(e) {
				c.push({
					title: r("WAWebL10N").forceLTR(e.value),
					text: o("WAWebVcardUtils").vcardGetType(e),
					key: "vCard-" + String(e.index),
					onClick: function() {
						return h(e.value);
					}
				});
			}), (L = a.ADR) == null || L.forEach(function(e) {
				var t = m(e.value);
				c.push({
					title: t,
					text: o("WAWebVcardUtils").vcardGetType(e),
					key: "vCard-" + String(e.index),
					onClick: function() {
						return y(e.value);
					}
				});
			}), x == null || x.forEach(function(e) {
				c.push({
					title: r("WAWebL10N").forceLTR(e.value),
					text: o("WAWebVcardUtils").vcardGetType(e),
					key: "vCard-" + String(e.index)
				});
			}), (E = a.BDAY) == null || E.forEach(function(e) {
				c.push({
					title: o("WAWebVcardParsingUtils").vcardGetDate(e.value),
					text: s._(
						/*BTDS*/
						""
					),
					key: "vCard-" + String(e.index)
				});
			}), (k = a.NICKNAME) == null || k.forEach(function(e) {
				c.push({
					title: e.value,
					text: s._(
						/*BTDS*/
						""
					),
					key: "vCard-" + String(e.index)
				});
			}), (I = a.SERVICE) == null || I.forEach(function(e) {
				e.type === "WA-LID" || e.type === "WA-BIZ-AUTOMATED-TYPE" || c.push({
					testid: "vcard-service-" + e.type,
					title: e.value,
					text: o("WAWebVcardUtils").vcardGetType(e),
					key: "vCard-" + String(e.index)
				});
			}), t[0] = a, t[1] = e.includePhoneNumber, t[2] = e.includeUsername, t[3] = e.onTogglePhoneNumber, t[4] = e.onToggleUsername, t[5] = l, t[6] = c;
		} else c = t[6];
		var P;
		t[7] !== n || t[8] !== a || t[9] !== i || t[10] !== l ? (P = u.jsx(p, {
			parsedVcard: a,
			thumbnail: i,
			onSaveContact: n,
			username: l
		}), t[7] = n, t[8] = a, t[9] = i, t[10] = l, t[11] = P) : P = t[11];
		var N = P, M;
		t[12] !== c ? (M = c.map(function(e, t) {
			var n = t === c.length - 1, a = u.jsx(r("WAWebDrawerItem.react"), {
				testid: e.testid,
				title: e.title,
				icon: e.icon,
				onClick: e.onClick,
				isLastItem: n,
				children: e.text
			}, e.key);
			if (e.onCheckboxChange != null) {
				var i;
				return u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					gap: 8,
					xstyle: d.itemWithCheckbox,
					children: [u.jsx(r("WDSBaseCheckbox.react"), {
						value: (i = e.checkboxValue) != null ? i : !0,
						onChange: e.onCheckboxChange
					}), u.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						children: a
					})]
				}, e.key);
			}
			return a;
		}), t[12] = c, t[13] = M) : M = t[13];
		var w = M, A;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1280gxy" }, t[14] = A) : A = t[14];
		var F;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "xexx8yu x1pic42t x18d9i69 x1onr9mi xdj266r x1280gxy" }, t[15] = F) : F = t[15];
		var O;
		t[16] !== w ? (O = u.jsx("div", babelHelpers.extends({}, F, { children: w })), t[16] = w, t[17] = O) : O = t[17];
		var B;
		return t[18] !== N || t[19] !== O ? (B = u.jsxs("div", babelHelpers.extends({}, A, { children: [N, O] })), t[18] = N, t[19] = O, t[20] = B) : B = t[20], B;
	}
	function b(e) {
		return !e.properties.waid;
	}
	function v(e) {
		return e.properties.waid;
	}
	l.default = C;
}), 226);
