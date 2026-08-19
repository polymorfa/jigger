__d("MAWEBCombinedSwitch", [
	"MAWEBEnabledStateManager",
	"MAWEBLSInWorkerSwitch",
	"MAWEBSwitch",
	"MAWODSProxy",
	"WAOdsEnums"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function(e) {
		function t(t, n) {
			var r;
			return r = e.call(this) || this, r.$MAWCombinedStateManager$p_1 = t, r.$MAWCombinedStateManager$p_2 = n, r.$MAWCombinedStateManager$p_3 = null, r.$MAWCombinedStateManager$p_4 = !1, r.$MAWCombinedStateManager$p_1.onSet(function() {
				r.$MAWCombinedStateManager$p_5();
			}), r.$MAWCombinedStateManager$p_2.onSet(function() {
				r.$MAWCombinedStateManager$p_5();
			}), r.$MAWCombinedStateManager$p_5(), r;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.isEnabled = function() {
			var t = e.prototype.isEnabled.call(this);
			return this.$MAWCombinedStateManager$p_6(), t;
		}, n.$MAWCombinedStateManager$p_6 = function() {
			var e = this.$MAWCombinedStateManager$p_1.isEnabled(), t = this.$MAWCombinedStateManager$p_2.isEnabled(), n = e !== t, r = e ? "enabled" : "disabled", a = t ? "enabled" : "disabled", i = n ? "mismatch" : "match";
			if (n && !this.$MAWCombinedStateManager$p_4) this.$MAWCombinedStateManager$p_3 = Date.now(), this.$MAWCombinedStateManager$p_4 = !0;
			else if (this.$MAWCombinedStateManager$p_4 && this.$MAWCombinedStateManager$p_3 != null) {
				var l = this.$MAWCombinedStateManager$p_3, s = Date.now() - l;
				this.$MAWCombinedStateManager$p_4 = n, this.$MAWCombinedStateManager$p_3 = n ? Date.now() : null;
				var u = this.$MAWCombinedStateManager$p_7(s);
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_switch.sync.duration_bucket." + u
				});
				var c = n ? "failed" : "success";
				o("MAWODSProxy").odsBumpEntityKey({
					entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
					key: "eb_switch.sync.result." + c
				});
			}
			o("MAWODSProxy").odsBumpEntityKey({
				entity: o("WAOdsEnums").Entity.EB_SWITCH_STATE,
				key: "eb_switch." + i + "." + r + "." + a
			});
		}, n.$MAWCombinedStateManager$p_7 = function(t) {
			return t < 100 ? "under_100ms" : t < 500 ? "100_to_500ms" : t < 1e3 ? "500ms_to_1s" : t < 5e3 ? "1s_to_5s" : t < 1e4 ? "5s_to_10s" : "over_10s";
		}, n.$MAWCombinedStateManager$p_5 = function() {
			this.set(this.$MAWCombinedStateManager$p_1.isEnabled() && this.$MAWCombinedStateManager$p_2.isEnabled()), this.$MAWCombinedStateManager$p_6();
		}, t;
	})(o("MAWEBEnabledStateManager").MAWEBEnabledStateManager), s = new e(r("MAWEBSwitch"), r("MAWEBLSInWorkerSwitch"));
	l.MAWEBCombinedSwitch = s;
}), 98);
