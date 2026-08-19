__d("WAWebWhatsNewContent", [
	"fbt",
	"WAWebABProps",
	"WAWebEnvironment",
	"WAWebMobilePlatforms",
	"WAWebVoipGatingUtils",
	"WDSIconIcDescription.react",
	"WDSIconIcDownload.react",
	"WDSIconIcHistory.react",
	"WDSIconIcMood.react",
	"WDSIconIcPermMedia.react",
	"WDSIconIcShare.react",
	"WDSIconIcVideoCall.react",
	"WDSIconIcVideocam.react",
	"WDSIconWdsIcAi.react",
	"WDSIconWdsIcLogoMetaAi.react"
], (function(t, n, r, o, a, i, l, s) {
	var e = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcDescription.react")
	}, u = [
		{
			description: function() {
				return s._(
					/*BTDS*/
					""
				);
			},
			Icon: r("WDSIconWdsIcLogoMetaAi.react")
		},
		e,
		{
			description: function() {
				return r("WAWebEnvironment").isWindows ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				);
			},
			Icon: r("WDSIconIcShare.react")
		}
	], c = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcPermMedia.react")
	}, d = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcVideoCall.react")
	}, m = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcVideocam.react")
	}, p = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcHistory.react")
	}, _ = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcMood.react")
	}, f = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconWdsIcLogoMetaAi.react")
	}, g = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconWdsIcAi.react")
	}, h = {
		description: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		Icon: r("WDSIconIcDownload.react")
	};
	function y() {
		return o("WAWebABProps").getABPropConfigValue("web_whats_new_auto_modal_content_version");
	}
	function C() {
		return y() >= 2;
	}
	function b() {
		return y() >= 3;
	}
	function v(e) {
		var t = e.bizAgentEligible;
		return y() >= 3 ? S(t) : [].concat(u, [r("WAWebEnvironment").isWindows ? d : c]);
	}
	function S(e) {
		var t = o("WAWebVoipGatingUtils").isWhatsNewCallingHighlightEnabled();
		return o("WAWebMobilePlatforms").isSMB() ? L(t, e) : R(t);
	}
	function R(t) {
		return t ? [
			m,
			p,
			_,
			f
		] : [
			p,
			_,
			f,
			e
		];
	}
	function L(t, n) {
		var r = t ? [
			m,
			g,
			h,
			p
		] : [
			g,
			h,
			p,
			f
		];
		return n ? r : [].concat(r.filter(function(e) {
			return e !== g;
		}), [e]);
	}
	l.hasWhatsNewContent = C, l.hasSmbWhatsNewContent = b, l.getWhatsNewFeatures = v;
}), 226);
