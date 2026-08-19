__d("WAWebNewsletterModalsUtils.react", [
	"fbt",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlex.react",
	"WAWebPencilIcon.react",
	"WAWebSecurityShieldIcon.react",
	"WAWebText.react",
	"WAWebUsernameGatingUtils",
	"WDSIconIcVisibilityOff.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		bulletIcon: {
			width: "x1useyqa",
			$$css: !0
		},
		bulletColor: {
			color: "x1v5yvga",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.Icon, n = e.iconSize, r = n === void 0 ? 24 : n, a = e.iconXstyle, i = e.subtext, l = e.testid, s = l === void 0 ? "bullet-point-item" : l, d = e.text;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			className: "x9f619 xh8yej3 x1qjc9v5",
			marginBottom: 8,
			paddingBottom: 4,
			paddingStart: 8,
			paddingTop: 4,
			testid: s,
			children: [u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				shrink: 0,
				xstyle: c.bulletIcon,
				children: u.jsx(t, {
					height: r,
					width: r,
					iconXstyle: a
				})
			}), u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [d != null && u.jsx(o("WAWebText.react").WAWebTextTitle, { children: d }), u.jsx(o("WAWebText.react").WAWebTextSmall, { children: i })] })]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.bullets;
		return t.map(function(e, t) {
			return u.jsx(d, {
				Icon: e.Icon,
				text: e.text(),
				subtext: e.subtext(),
				testid: e.testid,
				iconSize: e.iconSize,
				iconXstyle: e.iconXstyle
			}, t);
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	var p = [{
		Icon: o("WAWebPencilIcon.react").PencilIcon,
		iconXstyle: c.bulletColor,
		text: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		subtext: function() {
			return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterAdminInviteFaqUrlV2(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
		}
	}], _ = {
		Icon: r("WDSIconIcVisibilityOff.react"),
		iconXstyle: c.bulletColor,
		text: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		subtext: function() {
			return o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}
	}, f = [].concat(p, [_, {
		Icon: o("WAWebSecurityShieldIcon.react").SecurityShieldIcon,
		iconXstyle: c.bulletColor,
		text: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		subtext: function() {
			return s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			);
		}
	}]);
	l.BulletPointList = m, l.MinimalBullets = p, l.VisibilityBullet = _, l.ExtendedBullets = f;
}), 226);
