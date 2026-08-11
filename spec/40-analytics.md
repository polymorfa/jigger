# Analytics (WAM)

WhatsApp Web reports telemetry to the server as WAM events. Each event has a
numeric id, a set of numbered fields, and a channel that decides how urgently it
is flushed. The ids and field numbers are wire format: they are what actually
goes on the socket, so they are stable in a way that module names and function
names are not.

Two things make this section worth reading before the rest of the spec.

First, **instrumentation ships before the feature it measures.** WhatsApp adds
the WAM event in one release and turns the feature on weeks later. So the event
catalogue is the earliest warning available about anything unreleased, earlier
even than the A/B flag registry.

Second, **almost nothing implements it.** The client defines several hundred
events. Of the open-source clients, only Baileys has any WAM implementation at
all, and it covers a small fraction. A client that sends no telemetry, or
telemetry covering a few percent of what the real client sends, does not look
like a real client to anyone examining traffic patterns.

## Citing facts

Anywhere this document names a fact, it writes the fact id in backticks, like
`wam:4750`. That is the whole citation syntax. The id is the wire literal, so
the same string identifies the fact in the ledger, keys the generated constant,
and is what the coverage scanner greps for in a library. There is nothing to
learn and nothing to keep in sync.

Every cited fact must exist in the ledger or the build fails. You cannot write a
sentence in this spec about something the client does not actually do.

By default a claim is `probable`, backed by `bundle-analysis` alone. Upgrading a
claim requires a second independent technique and is declared inline:

> `wam:4750` confirmed via bundle-analysis, websocket-capture

## Addressing mode mismatch

`wam:4750` is emitted when the addressing mode the server used in an IQ response
disagrees with the addressing mode the client had stored locally for that
conversation. This is the telemetry behind the phone-number to LID migration:
the client is watching for cases where its own view of how a chat should be
addressed has drifted from the server's.

It carries five fields. `iqResponse` records what kind of response triggered the
mismatch, `localAddressingMode` and `serverAddressingMode` are the two values
that disagreed, `notificationTag` identifies the stanza that revealed it, and
`mismatchOrigin` says which code path noticed.

For a library implementing LID addressing, this event is a useful check on your
own correctness even if you never send it: if the real client considers this
worth reporting, a library that silently picks the wrong addressing mode has a
bug it currently has no way to detect.

## Message send and receive

`wam:450` and `wam:458` cover the message receive path and push-to-talk. These
are high-volume events on the regular channel, meaning they are batched rather
than flushed immediately.

## Login and app lifecycle

`wam:460` fires on login. `wam:1094` is the app launch event. Both are part of
the session lifecycle telemetry that a real client emits on every connect, and
neither is implemented anywhere.


