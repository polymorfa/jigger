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
		var n = t.contactLid, a = t.onInvalidUsername, i = t.origin, l = t.setContactLid, c = t.setUsernameInput, _ = t.setUsernameState, g = t.usernameInput, h = t.usernameState, y = m(!1), C = y[0], b = y[1], v = r("useLazyRef")(function() {
			return new AbortController();
		}), S = m(null), R = S[0], L = S[1], E = s._(
			/*BTDS*/
			""
		), k = function(t) {
			c(t), l(null), L(null);
			var e = o("WAWebUsernameValidationUtils").validateUsernameLocally(t), n = e.isValid;
			if (t.length < 3 || !n) {
				_(null);
				return;
			}
			v.current.abort(), v.current = new AbortController(), b(!0), _(null);
			var r = v.current.signal;
			window.setTimeout(function() {
				return void I(t, r);
			}, 750);
		}, I = async function(n, a) {
			if (r("isStringNullOrEmpty")(n) || a.aborted) {
				b(!1);
				return;
			}
			if (!navigator.onLine) {
				T("offline");
				return;
			}
			var t;
			try {
				t = await o("WAWebQueryExistsJob").queryUsernameExists(n, null, o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE);
			} catch (t) {
				a.aborted || (T(navigator.onLine ? "generic" : "offline"), o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[UsernameContactField] failed to check username availability: ", ""])), t).sendLogs("check-username-availability-failed", { sampling: .01 }));
				return;
			}
			a.aborted || D(t);
		}, T = function(t) {
			_(null), L(t), b(!1);
		}, D = function(t) {
			if (t != null && t.wid) {
				var e = o("WAWebContactCollection").ContactCollection.get(t.wid), n = e != null && o("WAWebFrontendContactGetters").getIsMyContact(e);
				_(n ? "already-contact" : "exists"), l(o("WAWebWidFactory").asUserLidOrThrow(t.wid));
			} else t != null && t.keyRequired ? _("key-required") : (_("does-not-exist"), a());
			b(!1);
		}, x = async function() {
			if (n) {
				var e = await o("WAWebFindChatAction").findOrCreateLatestChat(n, "createContact"), t = e.chat;
				await o("WAWebCmd").Cmd.openChatAt({
					chat: t,
					msgContext: null,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.ContactEdit
				}), o("WAWebCmd").Cmd.chatInfoDrawer(t, {
					showFullGroupDescription: !1,
					scrollToParticipantList: !1
				});
			} else o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[UsernameContactField] view contact: no LID"]))).sendLogs("view-existing-contact-no-lid-found", { sampling: .01 });
		}, $ = o("WAWebUsernameUtils").usernameInputStateIsValid(h), P = g != null && $, N = s._(
			/*BTDS*/
			""
		), M = s._(
			/*BTDS*/
			""
		), w = s._(
			/*BTDS*/
			""
		), A = d.jsx(r("WAWebClickableLink.react"), {
			onClick: x,
			children: d.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				colorName: "contentActionEmphasized",
				textAlign: "start",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), F = h === "already-contact" && i === o("WAWebContactLogging").ContactSourceType.NewChat, O = !C && $, B;
		O ? B = F ? w : M : !C && h === "does-not-exist" && (B = N);
		var W = f(R);
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
					pending: C,
					onChange: function(t) {
						var e = t.text;
						k(e);
					},
					theme: "text-input",
					focusOnMount: !0,
					value: g,
					placeholder: E,
					ariaLabel: E,
					maxLength: 30,
					showRemaining: !0,
					charLimit: 4,
					spellCheck: !1,
					showValidateIcon: C || P || W != null,
					showSuccessIcon: P,
					error: W,
					contextMsg: B
				}), O && F ? A : null]
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
