__d("MAWDeviceChangeState-resolver", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = 0, l = [], s = {
		getDeviceAlertCount: function() {
			return e;
		},
		subscribe: function(t) {
			return l.push(t), function() {
				l = l.filter(function(e) {
					return e !== t;
				});
			};
		}
	};
	function u(t) {
		e !== t && (e = t, l.forEach(function(e) {
			return e();
		}));
	}
	function c() {
		return {
			read: function() {
				return s.getDeviceAlertCount();
			},
			subscribe: function(t) {
				return s.subscribe(t);
			}
		};
	}
	i.updateDeviceCount = u, i.deviceAlertCount = c;
}), 66);
