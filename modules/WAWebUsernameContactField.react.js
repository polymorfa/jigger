__d("WAWebUsernameContactField.react", [
	"fbt",
	"WALogger",
	"WAWebChatEntryPoint",
	"WAWebClickableLink.react",
	"WAWebCmd",
	"WAWebContactCollection",
	"WAWebContactLogging",
	"WAWebContactSyncLogger",
	"WAWebFindChatAction",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebMentionsRefreshedIcon.react",
	"WAWebQueryExistsJob",
	"WAWebRichTextField.react",
	"WAWebUsernameUtils",
	"WAWebUsernameValidationUtils",
	"WAWebWidFactory",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"isStringNullOrEmpty",
	"react",
	"useLazyRef"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useState, p = {
		iconSection: {
			display: "x78zum5",
			flexGrow: "x1c4vz4f",
			flexShrink: "x2lah0s",
			justifyContent: "x1nhvcw1",
			alignItems: "x6s0dn4",
			color: "xhslqc4",
			$$css: !0
		},
		marginTop28: {
			marginTop: "xevwqry",
			$$css: !0
		},
		marginStart12: {
			marginInlineStart: "x1uvdrpn",
			$$css: !0
		},
		paddingHoriz24: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function _(t) {
		var a = t.contactLid, i = t.onInvalidUsername, l = t.origin, c = t.setContactLid, _ = t.setUsernameInput, g = t.setUsernameState, h = t.usernameInput, y = t.usernameState, C = m(!1), b = C[0], v = C[1], S = r("useLazyRef")(function() {
			return new AbortController();
		}), R = m(null), L = R[0], E = R[1], k = s._(
			/*BTDS*/
			""
		), I = function(t) {
			_(t), c(null), E(null);
			var e = o("WAWebUsernameValidationUtils").validateUsernameLocally(t), n = e.isValid;
			if (t.length < 3 || !n) {
				g(null);
				return;
			}
			S.current.abort(), S.current = new AbortController(), v(!0), g(null);
			var r = S.current.signal;
			window.setTimeout(function() {
				return void T(t, r);
			}, 750);
		}, T = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
				if (r("isStringNullOrEmpty")(t) || n.aborted) {
					v(!1);
					return;
				}
				if (!navigator.onLine) {
					D("offline");
					return;
				}
				var a;
				try {
					a = yield o("WAWebQueryExistsJob").queryUsernameExists(t, null, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE);
				} catch (t) {
					n.aborted || (D(navigator.onLine ? "generic" : "offline"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[UsernameContactField] failed to check username availability: ", ""])), t).sendLogs("check-username-availability-failed", { sampling: .01 }));
					return;
				}
				n.aborted || x(a);
			});
			return function(n, r) {
				return t.apply(this, arguments);
			};
		})(), D = function(t) {
			g(null), E(t), v(!1);
		}, x = function(t) {
			if (t != null && t.wid) {
				var e = o("WAWebContactCollection").ContactCollection.get(t.wid), n = e != null && o("WAWebFrontendContactGetters").getIsMyContact(e);
				g(n ? "already-contact" : "exists"), c(o("WAWebWidFactory").asUserLidOrThrow(t.wid));
			} else t != null && t.keyRequired ? g("key-required") : (g("does-not-exist"), i());
			v(!1);
		}, $ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (a) {
					var e = yield o("WAWebFindChatAction").findOrCreateLatestChat(a, "createContact"), t = e.chat;
					yield o("WAWebCmd").Cmd.openChatAt({
						chat: t,
						msgContext: null,
						chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit
					}), o("WAWebCmd").Cmd.chatInfoDrawer(t, {
						showFullGroupDescription: !1,
						scrollToParticipantList: !1
					});
				} else o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[UsernameContactField] view contact: no LID"]))).sendLogs("view-existing-contact-no-lid-found", { sampling: .01 });
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), P = o("WAWebUsernameUtils").usernameInputStateIsValid(y), N = h != null && P, M = s._(
			/*BTDS*/
			""
		), w = s._(
			/*BTDS*/
			""
		), A = s._(
			/*BTDS*/
			""
		), F = d.jsx(r("WAWebClickableLink.react"), {
			onClick: $,
			children: d.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentActionEmphasized",
				textAlign: "start",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), O = y === "already-contact" && l === o("WAWebContactLogging").ContactSourceType.NewChat, B = !b && P, W;
		B ? W = O ? A : w : !b && y === "does-not-exist" && (W = M);
		var q = f(L);
		return d.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: p.paddingHoriz24,
			children: [d.jsx(o("WAWebFlex.react").FlexItem, {
				xstyle: p.iconSection,
				children: d.jsx(o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon, {
					width: 26,
					height: 26,
					xstyle: p.marginTop28
				})
			}), d.jsxs(o("WAWebFlex.react").FlexItem, {
				xstyle: p.marginStart12,
				grow: 1,
				shrink: 1,
				children: [d.jsx(o("WAWebRichTextField.react").RichTextField, {
					pending: b,
					onChange: function(t) {
						var e = t.text;
						I(e);
					},
					theme: "text-input",
					focusOnMount: !0,
					value: h,
					placeholder: k,
					ariaLabel: k,
					maxLength: 30,
					showRemaining: !0,
					charLimit: 4,
					spellCheck: !1,
					showValidateIcon: b || N || q != null,
					showSuccessIcon: N,
					error: q,
					contextMsg: W
				}), B && O ? F : null]
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return e === "offline" ? s._(
			/*BTDS*/
			""
		) : e === "generic" ? s._(
			/*BTDS*/
			""
		) : e == null ? null : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + e);
		})();
	}
	l.default = _;
}), 226);
