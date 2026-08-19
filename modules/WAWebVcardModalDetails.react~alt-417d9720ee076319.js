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
		var t = e.onSaveContact, n = e.parsedVcard, a = e.thumbnail, i = e.username, l = o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(n), c = o("WAWebUsernameTypes").asMaybeUsername(i), m;
		r("isStringNullOrEmpty")(l) && c != null ? m = o("WAWebUsernameTypes").displayUsername(c) : m = l;
		var p = u.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: m,
			direction: "auto",
			titlify: !0,
			ellipsify: !0,
			selectable: !0
		}), f = o("WAWebVcardUtils").vcardGetOrganizationString(n), g = r("isStringNullOrEmpty")(f) ? void 0 : f, h = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.getThumbnailWidFromVcard(n), y = u.jsx(_, {
			name: m != null ? m : "",
			thumbnail: a,
			wid: h
		});
		if (o("WAWebContactManagementGating").contactManagementEnabled()) {
			var C = o("WAWebContactUtils").getContactDataFromVcard(n), b = (C == null ? void 0 : C.phoneNumber) != null && o("WAWebContactUtils").canSaveAsMyContact(C == null ? void 0 : C.phoneNumber), v = (C == null ? void 0 : C.lid) != null && o("WAWebContactUtils").canSaveAsMyContact(C == null ? void 0 : C.lid), S = b || v && o("WAWebUsernameWorkerCompatibleGatingUtils").usernameContactUIEnabled();
			if (C && S) {
				var R = function() {
					t && (o("WAWebModalManager").ModalManager.close(), t(C));
				};
				return u.jsxs(o("WAWebFlex.react").FlexRow, {
					align: "center",
					children: [u.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						children: u.jsx(r("WAWebCellFrame.react"), {
							image: y,
							theme: "plain",
							primary: p,
							secondary: g
						})
					}), t && u.jsx(o("WAWebFlex.react").FlexItem, {
						xstyle: d.content,
						children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
							onClick: R,
							children: C.isExistingContact ? s._(
								/*BTDS*/
								""
							) : s._(
								/*BTDS*/
								""
							)
						})
					})]
				});
			}
		}
		return u.jsx(r("WAWebCellFrame.react"), {
			image: y,
			theme: "plain",
			primary: p,
			secondary: g
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t, n = e.name, a = e.thumbnail, i = e.wid, l = i != null ? o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(i) : null, s = o("useWAWebModelValues").useOptionalModelValues(l, ["img"]);
		c(function() {
			i != null && o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.find(i).catch(r("WAWebNoop"));
		}, [i]);
		var d = i != null ? o("WAWebContactCollection").ContactCollection.get(i) : null, m = d != null ? o("WAWebInitialsFromNameUtils").getInitialsFromContact(d) : o("WAWebInitialsFromNameUtils").getInitialsFromNames({
			name: n,
			shortName: n.split(" ")[0],
			pushname: null
		}), p = [m.firstInitial, m.secondInitial].filter(Boolean).join("") || void 0;
		return u.jsx(r("WDSProfilePhoto.react"), {
			type: "person",
			name: n,
			src: (t = s == null ? void 0 : s.img) != null ? t : a,
			size: "medium",
			color: i != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(i) : void 0,
			customColor: i != null ? o("useWAWebDefaultProfileColors").getWDSProfilePhotoCustomColor(i) : void 0,
			placeholderIcon: i != null ? o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(i) : void 0,
			isDecorative: !0,
			initials: p,
			testid: "vcard_modal_header_photo"
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
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
		var t, n, a, i, l, c, _, g, C, b = e.onSaveContact, v = e.parsedVcard, S = e.thumbnail, R = e.username, L = o("WAWebVcardParsingUtils").vcardLidWid(v), E = (t = (n = v.TEL) == null ? void 0 : n.filter(function(e) {
			return e.properties.waid;
		})) != null ? t : [], k = (a = v.TEL) == null ? void 0 : a.filter(function(e) {
			return !e.properties.waid;
		}), I = L != null ? L : ((i = E[0]) == null || (i = i.properties) == null || (i = i.waid) == null ? void 0 : i[0]) != null ? o("WAWebWidFactory").createUserWidOrThrow(E[0].properties.waid[0]) : null, T = [];
		E.forEach(function(t) {
			var n = o("WAWebWidFactory").createUserWidOrThrow(t.properties.waid[0]), r = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableSpan, {
				selectable: !0,
				children: o("WAWebWidFormat").widToFormattedUser(n)
			});
			T.push({
				title: r,
				icon: f(n, v),
				checkboxValue: e.includePhoneNumber,
				onCheckboxChange: e.onTogglePhoneNumber,
				text: o("WAWebVcardUtils").vcardGetType(t),
				key: "vCard-" + String(t.index)
			});
		}), R != null && I != null && T.push({
			title: "@" + R,
			icon: f(I, v),
			text: s._(
				/*BTDS*/
				""
			),
			key: "vCard-username",
			checkboxValue: e.includeUsername,
			onCheckboxChange: e.onToggleUsername
		}), (l = v.EMAIL) == null || l.forEach(function(e) {
			T.push({
				title: r("WAWebL10N").forceLTR(e.value),
				text: o("WAWebVcardUtils").vcardGetType(e),
				key: "vCard-" + String(e.index),
				onClick: function() {
					return h(e.value);
				}
			});
		}), (c = v.ADR) == null || c.forEach(function(e) {
			var t = m(e.value);
			T.push({
				title: t,
				text: o("WAWebVcardUtils").vcardGetType(e),
				key: "vCard-" + String(e.index),
				onClick: function() {
					return y(e.value);
				}
			});
		}), k == null || k.forEach(function(e) {
			T.push({
				title: r("WAWebL10N").forceLTR(e.value),
				text: o("WAWebVcardUtils").vcardGetType(e),
				key: "vCard-" + String(e.index)
			});
		}), (_ = v.BDAY) == null || _.forEach(function(e) {
			T.push({
				title: o("WAWebVcardParsingUtils").vcardGetDate(e.value),
				text: s._(
					/*BTDS*/
					""
				),
				key: "vCard-" + String(e.index)
			});
		}), (g = v.NICKNAME) == null || g.forEach(function(e) {
			T.push({
				title: e.value,
				text: s._(
					/*BTDS*/
					""
				),
				key: "vCard-" + String(e.index)
			});
		}), (C = v.SERVICE) == null || C.forEach(function(e) {
			e.type === "WA-LID" || e.type === "WA-BIZ-AUTOMATED-TYPE" || T.push({
				testid: "vcard-service-" + e.type,
				title: e.value,
				text: o("WAWebVcardUtils").vcardGetType(e),
				key: "vCard-" + String(e.index)
			});
		});
		var D = u.jsx(p, {
			parsedVcard: v,
			thumbnail: S,
			onSaveContact: b,
			username: R
		}), x = T.map(function(e, t) {
			var n = t === T.length - 1, a = u.jsx(r("WAWebDrawerItem.react"), {
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
		});
		return u.jsxs("div", {
			className: "x1280gxy",
			children: [D, u.jsx("div", {
				className: "xexx8yu x1pic42t x18d9i69 x1onr9mi xdj266r x1280gxy",
				children: x
			})]
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = C;
}), 226);
