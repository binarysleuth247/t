import {
    e,
    i as t,
    t as o,
    T as n,
    g as i,
    a as s,
    s as a,
    x as r,
    l as d,
    A as l,
    b as c,
    S as u,
    B as h,
    R as p,
    I as m,
    c as g,
    m as _,
    o as f
} from "./icon-d263f670.js";

function v(e, t, o, n) {
    var i, s = arguments.length,
        a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
    else
        for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, o, a) : i(t, o)) || a);
    return s > 3 && a && Object.defineProperty(t, o, a), a
}

function E(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
        o = t && e[t],
        n = 0;
    if (o) return o.call(e);
    if (e && "number" == typeof e.length) return {
        next: function() {
            return e && n >= e.length && (e = void 0), {
                value: e && e[n++],
                done: !e
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function b(e) {
    return this instanceof b ? (this.v = e, this) : new b(e)
}

function S(e, t, o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n, i = o.apply(e, t || []),
        s = [];
    return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
        return this
    }, n;

    function a(e) {
        i[e] && (n[e] = function(t) {
            return new Promise((function(o, n) {
                s.push([e, t, o, n]) > 1 || r(e, t)
            }))
        })
    }

    function r(e, t) {
        try {
            ! function(e) {
                e.value instanceof b ? Promise.resolve(e.value.v).then(d, l) : c(s[0][2], e)
            }(i[e](t))
        } catch (e) {
            c(s[0][3], e)
        }
    }

    function d(e) {
        r("next", e)
    }

    function l(e) {
        r("throw", e)
    }

    function c(e, t) {
        e(t), s.shift(), s.length && r(s[0][0], s[0][1])
    }
}

function y(e) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t, o = e[Symbol.asyncIterator];
    return o ? o.call(e) : (e = E(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
        return this
    }, t);

    function n(o) {
        t[o] = e[o] && function(t) {
            return new Promise((function(n, i) {
                (function(e, t, o, n) {
                    Promise.resolve(n).then((function(t) {
                        e({
                            value: t,
                            done: o
                        })
                    }), t)
                })(n, i, (t = e[o](t)).done, t.value)
            }))
        }
    }
}

function C(e, t, o, n) {
    if ("a" === o && !n) throw new TypeError("Private accessor was defined without a getter");
    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return "m" === o ? n : "a" === o ? n.call(e) : n ? n.value : t.get(e)
}

function T(e, t, o, n, i) {
    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return i ? i.value = o : t.set(e, o), o
}
const A = e => t => "function" == typeof t ? ((e, t) => (customElements.define(e, t), t))(e, t) : ((e, t) => {
        const {
            kind: o,
            elements: n
        } = t;
        return {
            kind: o,
            elements: n,
            finisher(t) {
                customElements.define(e, t)
            }
        }
    })(e, t),
    I = (e, t) => "method" === t.kind && t.descriptor && !("value" in t.descriptor) ? {
        ...t,
        finisher(o) {
            o.createProperty(t.key, e)
        }
    } : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {},
        originalKey: t.key,
        initializer() {
            "function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
        },
        finisher(o) {
            o.createProperty(t.key, e)
        }
    };

function P(e) {
    return (t, o) => void 0 !== o ? ((e, t, o) => {
        t.constructor.createProperty(o, e)
    })(e, t, o) : I(e, t)
}

function w(e) {
    return P({
        ...e,
        state: !0
    })
}
const R = ({
    finisher: e,
    descriptor: t
}) => (o, n) => {
    var i;
    if (void 0 === n) {
        const n = null !== (i = o.originalKey) && void 0 !== i ? i : o.key,
            s = null != t ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(o.key)
            } : {
                ...o,
                key: n
            };
        return null != e && (s.finisher = function(t) {
            e(t, n)
        }), s
    } {
        const i = o.constructor;
        void 0 !== t && Object.defineProperty(o, n, t(n)), null == e || e(i, n)
    }
};

function O(e, t) {
    return R({
        descriptor: o => {
            const n = {
                get() {
                    var t, o;
                    return null !== (o = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== o ? o : null
                },
                enumerable: !0,
                configurable: !0
            };
            if (t) {
                const t = "symbol" == typeof o ? Symbol() : "__" + o;
                n.get = function() {
                    var o, n;
                    return void 0 === this[t] && (this[t] = null !== (n = null === (o = this.renderRoot) || void 0 === o ? void 0 : o.querySelector(e)) && void 0 !== n ? n : null), this[t]
                }
            }
            return n
        }
    })
}

function N(e) {
    return R({
        descriptor: t => ({
            get() {
                var t, o;
                return null !== (o = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelectorAll(e)) && void 0 !== o ? o : []
            },
            enumerable: !0,
            configurable: !0
        })
    })
}

function M(e) {
    return R({
        descriptor: t => ({
            async get() {
                var t;
                return await this.updateComplete, null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)
            },
            enumerable: !0,
            configurable: !0
        })
    })
}
var D;
const L = null != (null === (D = window.HTMLSlotElement) || void 0 === D ? void 0 : D.prototype.assignedElements) ? (e, t) => e.assignedElements(t) : (e, t) => e.assignedNodes(t).filter((e => e.nodeType === Node.ELEMENT_NODE));

function U(e) {
    const {
        slot: t,
        selector: o
    } = null != e ? e : {};
    return R({
        descriptor: n => ({
            get() {
                var n;
                const i = "slot" + (t ? `[name=${t}]` : ":not([name])"),
                    s = null === (n = this.renderRoot) || void 0 === n ? void 0 : n.querySelector(i),
                    a = null != s ? L(s, e) : [];
                return o ? a.filter((e => e.matches(o))) : a
            },
            enumerable: !0,
            configurable: !0
        })
    })
}

function k(e, t, o) {
    let n, i = e;
    return "object" == typeof e ? (i = e.slot, n = e) : n = {
        flatten: t
    }, o ? U({
        slot: i,
        flatten: t,
        selector: o
    }) : R({
        descriptor: e => ({
            get() {
                var e, t;
                const o = "slot" + (i ? `[name=${i}]` : ":not([name])"),
                    s = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(o);
                return null !== (t = null == s ? void 0 : s.assignedNodes(n)) && void 0 !== t ? t : []
            },
            enumerable: !0,
            configurable: !0
        })
    })
}
class x {
    constructor(e, t) {
        this._events = new Map, this._isConnected = !1, e.addController(this), this._host = e, this._getTarget = t
    }
    _getEventTarget() {
        return this._getTarget ? this._getTarget() : this._host
    }
    hostConnected() {
        const e = this._getEventTarget();
        for (const [t, o] of this._events) Array.isArray(o) ? e.addEventListener(t, o[0], o[1]) : e.addEventListener(t, o);
        this._isConnected = !0
    }
    hostDisconnected() {
        const e = this._getEventTarget();
        for (const [t, o] of this._events) Array.isArray(o) ? e.removeEventListener(t, o[0], o[1]) : e.removeEventListener(t, o);
        this._isConnected = !1
    }
    define(e, t, o) {
        const n = e.toString();
        if (this._events.has(n)) throw new Error(`Event ${n} already defined.`);
        if (o ? this._events.set(n, [t, o]) : this._events.set(n, t), this._isConnected) {
            const e = this._getEventTarget();
            e && e.addEventListener(n, t, o)
        }
        return t
    }
}
let F = e => e;

function B() {
    const e = new WeakMap;
    let t = !1;
    return {
        get isDirty() {
            return t
        },
        register(o, n) {
            const i = e.get(o);
            i && !i.has(n) ? i.add(n) : i || e.set(o, new Set([n])), t = !0
        },
        unregister(o, n) {
            const i = e.get(o);
            i && i.has(n) && (i.delete(n), t = !0)
        },
        getRegisteredElements(o) {
            const n = e.get(o);
            return t = !1, n
        },
        unregisterAll(o) {
            e.delete(o), t = !0
        }
    }
}

function V(e) {
    window.FACEPLATE_CONNECTORS = window.FACEPLATE_CONNECTORS || {}, window.FACEPLATE_CONNECTORS[e] = window.FACEPLATE_CONNECTORS[e] || new Set;
    const t = t => {
        var o, n;
        return !0 === (null === (n = null === (o = window.FACEPLATE_CONNECTORS) || void 0 === o ? void 0 : o[e]) || void 0 === n ? void 0 : n.has(t.constructor))
    };
    return {
        registerAncestorClass(t) {
            var o, n;
            null === (n = null === (o = window.FACEPLATE_CONNECTORS) || void 0 === o ? void 0 : o[e]) || void 0 === n || n.add(t)
        },
        connectToAncestor: e => async function(e, t) {
            let o = e;
            for (; o.parentElement;) {
                if (o = o.parentElement, !o.tagName.includes("-")) continue;
                const e = o.tagName.toLowerCase();
                if (customElements.get(e) || await customElements.whenDefined(e), t(o)) return o
            }
        }(e, t)
    }
}
const G = e(class extends t {
    constructor(e) {
        var t;
        if (super(e), e.type !== o.ATTRIBUTE || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
    }
    render(e) {
        return " " + Object.keys(e).filter((t => e[t])).join(" ") + " "
    }
    update(e, [t]) {
        var o, i;
        if (void 0 === this.it) {
            this.it = new Set, void 0 !== e.strings && (this.nt = new Set(e.strings.join(" ").split(/\s/).filter((e => "" !== e))));
            for (const e in t) t[e] && !(null === (o = this.nt) || void 0 === o ? void 0 : o.has(e)) && this.it.add(e);
            return this.render(t)
        }
        const s = e.element.classList;
        this.it.forEach((e => {
            e in t || (s.remove(e), this.it.delete(e))
        }));
        for (const e in t) {
            const o = !!t[e];
            o === this.it.has(e) || (null === (i = this.nt) || void 0 === i ? void 0 : i.has(e)) || (o ? (s.add(e), this.it.add(e)) : (s.remove(e), this.it.delete(e)))
        }
        return n
    }
});
var W;
! function(e) {
    e.ExtraSmall = "xs", e.Small = "sm", e.Medium = "md", e.Large = "lg"
}(W || (W = {}));
const H = {
        [W.Small]: {
            label: "pl-[var(--rem10)] pr-[var(--rem6)]",
            icon: "pl-[var(--rem10)] pr-[var(--rem6)]",
            iconLabel: "pl-[var(--rem10)] pr-[var(--rem6)]"
        },
        [W.Medium]: {
            label: "pl-[var(--rem14)] pr-[var(--rem10)]",
            icon: "pl-[var(--rem10)] pr-[var(--rem6)]",
            iconLabel: "px-[var(--rem10)]"
        },
        [W.Large]: {
            label: "pl-[var(--rem14)] pr-[var(--rem10)]",
            icon: "px-[var(--rem14)]",
            iconLabel: "pl-[var(--rem14)] pr-[var(--rem10)]"
        }
    },
    q = {
        [W.ExtraSmall]: {
            label: "px-[var(--rem10)]",
            icon: "px-[var(--rem6)]",
            iconLabel: "px-[var(--rem10)]"
        },
        [W.Small]: {
            label: "px-[var(--rem10)]",
            icon: "px-[var(--rem6)]",
            iconLabel: "px-[var(--rem10)]"
        },
        [W.Medium]: {
            label: "px-[var(--rem14)]",
            icon: "px-[var(--rem8)]",
            iconLabel: "pl-[var(--rem10)] pr-[var(--rem14)]"
        },
        [W.Large]: {
            label: "px-[var(--rem14)]",
            icon: "px-[var(--rem12)]",
            iconLabel: "pl-[var(--rem10)] pr-[var(--rem14)]"
        }
    },
    $ = {
        xs: "button-x-small",
        sm: "button-small",
        md: "button-medium",
        lg: "button-large"
    },
    Y = {
        primary: "button-primary",
        secondary: "button-secondary",
        tertiary: "button-tertiary",
        plain: "button-plain",
        bordered: "button-bordered",
        destructive: "button-destructive",
        media: "button-media",
        brand: "button-brand",
        success: "button-success",
        plainInverted: "button-plain-inverted",
        favorite: "button-favorite",
        favoriteToggled: "button-favorite-toggled",
        secondaryToggled: "button-secondary-toggled",
        caution: "button-caution",
        tab: "button-tab"
    },
    j = {
        xs: "text-12",
        sm: "text-16",
        md: "text-20",
        lg: "text-20"
    },
    K = ({
        attributes: e,
        size: t = W.Medium,
        appearance: o,
        shape: n,
        leadingIcon: i,
        trailingIcon: s,
        children: a,
        selected: r
    }) => {
        let d = "label";
        i && a ? d = "iconLabel" : a || (d = "icon");
        const l = s ? H : q;
        return `${e?.className||""}\n${t?`${$[t]} ${l[t]?.[d]}`:""}\n${o?Y[o]:""}\n${r?"button-activated":""}\n${"square"===n?"rounded-[.5rem]":""}\n${"icon"===d?"icon":""}\n${"tab"===o?"flex-col":"items-center justify-center"}\nbutton inline-flex`
    },
    Q = e => {
        const {
            createElement: t
        } = i(), {
            attributes: o,
            selected: n,
            role: s
        } = e, a = o?.href, r = o?.disabled, d = (({
            hideChildrenOverflow: e,
            children: t,
            screenReaderContent: o,
            trailingIcon: n,
            leadingIcon: s,
            dropdown: a,
            appearance: r,
            selected: d,
            size: l
        }) => {
            let c = "flex";
            (t || a) && (c += " mr-xs");
            const {
                html: u
            } = i(), h = u`<span class="flex items-center justify-center${e?" overflow-hidden":""}"> ${s?u`<span class="${c}">${s}</span>`:void 0} ${t?u`<span class="${"flex items-center gap-xs"+(e?" overflow-hidden":"")}">${t}</span>`:void 0} </span> ${n}`;
            return ["tab" === r ? u` <span class="inline-flex items-center justify-center gap-xs">${h}</span> ${d?u` <span class="w-100 ${l===W.Small||l===W.ExtraSmall?"h-[2px] -mt-[2px]":"h-2xs -mt-2xs"} pointer-events-none bg-primary rounded-full"></span>`:""} ` : h, o ? u`<faceplate-screen-reader-content>${o}</faceplate-screen-reader-content>` : ""]
        })({
            ...e
        }), l = null != a;
        return t(l ? "a" : "button", {
            rpl: !0,
            role: s,
            ...o,
            className: `${K(e)} ${r&&l?"anchor-disabled":""}`,
            rplSelected: n
        }, d)
    },
    z = ({
        size: e = W.Medium,
        ...t
    }) => Q({
        ...t,
        size: e
    });

function J(e) {
    const t = [e];
    return t.raw = t, s(t)
}
const X = document.querySelector("#tailwind")?.textContent ?? "";
X || console.warn("Tailwind style tag not found - cannot build constructed stylesheet");
const Z = J(X);

function ee(e, t, o = !0) {
    return new CustomEvent(e, {
        composed: !0,
        bubbles: o,
        cancelable: !0,
        detail: t
    })
}
const te = (e, t) => new CustomEvent(e, t);

function oe(e) {
    return !!e && "object" == typeof e && !Array.isArray(e)
}

function ne(e, t) {
    let o = null;
    try {
        const n = e.dataset[t];
        if (n) {
            const e = JSON.parse(n);
            oe(e) && (o = e)
        }
    } catch (e) {}
    return o
}

function ie(e, t) {
    const o = ee("faceplate-track", t),
        n = se(t);
    o.SAN = n, e.dispatchEvent(o)
}

function se(e) {
    return `${e.source}/${e.action}/${e.noun}`.toLowerCase()
}

function ae(e, t) {
    for (const o in t) {
        if ("source" === o || "action" === o || "noun" === o) continue;
        const n = t[o],
            i = e[o];
        null == i ? e[o] = n : oe(i) && oe(n) && ae(i, n)
    }
}
var re, de, le;
! function(e) {
    e.App = "app", e.Embed = "embed", e.EmbedHeartbeat = "embed-heartbeat", e.Event = "event", e.EventBatch = "event_batch", e.Heartbeat = "heartbeat", e.HighlightMenu = "highlight_menu", e.Screen = "screen", e.SnippetEmbed = "snippet_embed"
}(re || (re = {})),
function(e) {
    e.Global = "global", e.Share = "share"
}(de || (de = {})),
function(e) {
    e.Click = "click", e.Drop = "drop", e.Leave = "leave", e.Load = "load", e.View = "view"
}(le || (le = {}));
const ce = "x-verified-res",
    ue = "join",
    he = "report",
    pe = "shreddit-composer-mode-toggle";
var me, ge;
! function(e) {
    e.RichText = "richText", e.Markdown = "markdown"
}(me || (me = {})),
function(e) {
    e.Small = "small", e.Large = "large", e.XLarge = "xlarge"
}(ge || (ge = {}));
const _e = "input-focus",
    fe = "post-submit-form",
    ve = "submit-post-button",
    Ee = "save-draft-button",
    be = "date-picker-button",
    Se = "save-draft-failed-modal",
    ye = "media-loss-draft-save-modal",
    Ce = "draft-load-failure-modal",
    Te = "submit-operation-errors",
    Ae = "post_composer";
var Ie, Pe;
! function(e) {
    e.Type = "type", e.DraftId = "draft", e.Title = "title", e.CrosspostSourceId = "source_id", e.CrosspostTarget = "crosspost_target", e.Url = "url", e.ScheduledPostId = "scheduled_post_id", e.PostId = "post_id", e.CrosspostExperimentReferral = "crosspost_experiment_referral"
}(Ie || (Ie = {})),
function(e) {
    e.Draft = "draft", e.Schedule = "schedule", e.Submit = "submit", e.UpdateDraft = "updateDraft", e.UpdateScheduledPost = "updateScheduledPost"
}(Pe || (Pe = {}));
const we = "comment_composer",
    Re = "mod-overlay-display";
var Oe, Ne, Me, De;
! function(e) {
    e.Upvote = "upvote", e.Downvote = "downvote", e.Reply = "reply", e.Follow = "follow", e.Awards = "awards", e.Join = "join", e.Report = "report", e.CommunityValue = "community-value", e.Unknown = "unknown", e.RecentCommunitiesCreateAccount = "recent_communities_create_account", e.AuthPrompt = "auth_prompt"
}(Oe || (Oe = {})),
function(e) {
    e.UpvoteComment = "upvote_comment", e.DownvoteComment = "downvote_comment", e.ReplyComment = "reply_comment", e.Report = "report"
}(Ne || (Ne = {})),
function(e) {
    e.Follow = "follow", e.Unfollow = "unfollow", e.Chat = "chat", e.Share = "share", e.Message = "send_message", e.GivePremium = "give_premium", e.BlockUser = "block_user", e.UnblockUser = "unblock_user", e.GetHelp = "get_help", e.Report = "report", e.AddToCustomFeed = "add_to_custom_feed"
}(Me || (Me = {})),
function(e) {
    e.Post = "post", e.Comment = "comment"
}(De || (De = {}));
const Le = "faceplate-track",
    Ue = "track-event",
    ke = "devvit-action",
    xe = {
        upvote: "upvote",
        downvote: "downvote",
        upvoteTry: "upvote_try",
        downvoteTry: "downvote_try",
        reply: "reply",
        [ue]: ue,
        signup: "signup",
        save: "save",
        follow: "follow",
        awards: "awards",
        purchaseProduct: "purchase_product",
        vaultLogin: "vault_login",
        [he]: "report",
        [Le]: Le,
        [Ue]: Ue,
        [ke]: ke
    },
    Fe = ["nav/click/login", "user_drawer/click/login", "reddit_pro_onboarding/click/login", "xpromo/click/auth_header_login"],
    Be = ["premium_marketing/click/price", "community_hovercard/click/join_signup_cta", "community/click/subscribe", "community/click/unsubscribe", `post_detail/click/${Ne.UpvoteComment}`, `post_detail/click/${Ne.DownvoteComment}`, `post_detail/click/${Ne.ReplyComment}`, `${Ae}/click/create_post`, "comment_composer/click/login_to_comment", `user_hovercard/click/${Me.Follow}`, `user_hovercard/click/${Me.Chat}`, "post/click/vote", `post/click/${Oe.Report}`, `post_detail/click/${Oe.Report}`, `profile/click/${Ne.DownvoteComment}`, `comment/click/${Ne.Report}`, "comment/click/reply", `profile/click/${Ne.UpvoteComment}`, `profile/click/${Me.Follow}`, `profile/click/${Me.Chat}`, `profile/click/${Me.Message}`, `profile/click/${Me.GivePremium}`, `profile/click/${Me.BlockUser}`, `profile/click/${Me.GetHelp}`, `profile/click/${Me.Report}`, `profile/click/${Me.AddToCustomFeed}`, "nav/click/recap_logged_out", "subreddit/click/recap_logged_out", "recap/click/recap_logged_out", "xpromo/click/nsfw_blur:login", "reddit_pro_onboarding/click/signup", "new_awards/click/report", ...Fe];

function Ve(e, t) {
    return t in e
}
const Ge = Symbol("mixins/with-tracking");

function We(e) {
    if (Ve(e, Ge)) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.trackEvent = e => {
                const t = ee("track-event", {
                    details: e
                });
                this.dispatchEvent(t)
            }
        }
    }
    return t[Ge] = !0, t
}
var He;
! function(e) {
    e.CardView = "cardView", e.ModQueueCompactView = "modQueueCompactView", e.CompactView = "compactView"
}(He || (He = {}));
const qe = (e = "", t = "") => {
        const o = (e => {
            if (!e) return;
            let t;
            try {
                const {
                    searchParams: o
                } = new URL(e), n = o.get("embed_host_url"), i = n && decodeURIComponent(n);
                if (!i) return;
                t = {
                    url: i,
                    domain: new URL(i).hostname
                }
            } catch (e) {}
            return t
        })(t);
        if (o) return o;
        let n = "";
        try {
            n = e && new URL(e)?.hostname || ""
        } catch (e) {}
        return {
            url: e,
            domain: n
        }
    },
    $e = () => ({}),
    Ye = e => {
        let t = {};
        try {
            t = JSON.parse(document.getElementsByTagName("shreddit-screenview-data")?.[0]?.getAttribute("data") ?? "{}")
        } catch (e) {
            throw new Error("Unable to parse screenview data")
        }
        return e ? t[e] : t
    },
    je = (e, t, o = Ye) => {
        if (t?.[e]) return {};
        const n = o(e);
        return n ? {
            [e]: n
        } : {}
    };

function Ke(e) {
    if (e) switch (e) {
        case He.CompactView:
            return "classic";
        case He.CardView:
            return "card";
        default:
            return
    }
}
const Qe = ({
        source: e,
        action: t,
        noun: o,
        ...n
    }, i = {}) => ({
        ...i,
        source: e,
        action: t,
        noun: o,
        referrer: qe(document.getElementsByTagName("shreddit-app")?.[0]?.getAttribute("referrer") || document.referrer, window.location.href),
        client_timestamp: Date.now(),
        ...je("post", i),
        ...n
    }),
    ze = async e => {
        const t = await fetch("/svc/shreddit/events/validate-schema", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                event: e
            })
        });
        if (t.ok) return t.json()
    };
window._pubsubControllerInstances ?? (window._pubsubControllerInstances = new Set);
const Je = new Map;
class Xe {
    constructor(e) {
        this.handlers = {}, this.host = e, this.host.addController(this)
    }
    hostConnected() {
        window._pubsubControllerInstances.add(this)
    }
    hostDisconnected() {
        window._pubsubControllerInstances.delete(this)
    }
    subscribe(e, t, o = !0, n = !1) {
        this.handlers[e] || (this.handlers[e] = new Set), this.handlers[e].add(t), o && Je.has(e) && (t(Je.get(e)), n && Je.delete(e))
    }
    unsubscribe(e, t) {
        this.handlers[e] && this.handlers[e].delete(t)
    }
    publish(e, t) {
        return Ze(e, t)
    }
}

function Ze(e, t) {
    Je.set(e, t);
    for (const o of window._pubsubControllerInstances)
        if (o.handlers[e]?.size)
            for (const n of o.handlers[e]) n(t)
}
const et = Symbol("mixins/with-pubsub-manager");
const tt = Symbol("mixins/with-pubsub");

function ot(e) {
    if (Ve(e, tt)) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.pubsub = new Xe(this)
        }
        subscribe(e, t, o = !0, n = !1) {
            this.pubsub.subscribe(e, t, o, n)
        }
        unsubscribe(e, t) {
            this.pubsub.unsubscribe(e, t)
        }
        publish(e, t) {
            Ze(e, t)
        }
    }
    return t[tt] = !0, t
}

function nt(e, t) {
    const o = document.createElement(e);
    for (const e in t) o.setAttribute(e, t[e]);
    return o
}

function it(e, t, o = !0) {
    return e ? e instanceof ShadowRoot ? it(e.host, t, o) : e instanceof HTMLElement ? e.matches(t) ? e : o && e.querySelector(t) ? e.querySelector(t) : it(e.parentNode, t, o) : it(e.parentNode, t, o) : null
}
window.ALL_ELEMENTS ?? (window.ALL_ELEMENTS = new Map);
const st = new Set(["faceplate-json", "reddit-debug-panel", "shreddit-debug-ad-display", "shreddit-debug-dev-override", "shreddit-debug-feature-timeline", "shreddit-debug-v2-events", "shreddit-perf-debugger"]);

function at() {
    if (window.renderTimes) return;
    window.renderTimes = {};
    const e = a.prototype.update;
    a.prototype.update = function(...t) {
        const o = this.nodeName.toLowerCase(),
            n = performance.now();
        e.apply(this, t);
        const i = performance.now() - n;
        st.has(o) || (window.renderTimes[o] = (window.renderTimes[o] || 0) + i)
    }, window.printRenderReport = (e = 20) => {
        console.log(Object.entries(window.renderTimes).sort((([, e], [, t]) => t - e)).slice(0, e).map((([e, t]) => `${e} ${t.toFixed(1)}ms`)).join("\n"))
    }
}
let rt = new Set;

function dt() {
    const e = new Set([...window.ALL_ELEMENTS.keys()]),
        t = new Set(lt("*").filter((e => e.tagName.includes("-"))).map((e => e.tagName.toLowerCase())));
    return rt = rt.union?.(t) ?? [], [...e.difference?.(rt) ?? []]
}

function lt(e, t = document.documentElement) {
    return [...t.querySelectorAll(e)].flatMap((t => {
        const o = [t];
        return t.shadowRoot && o.push(...lt(e, t.shadowRoot)), o
    }))
}
const ct = "[data-expected-lcp]";

function ut() {
    return lt("*", document.body).some((e => e.matches(ct)))
}

function ht(e, t = ut) {
    return e ? it(e, ct, !1) ? "true" : t() ? "false" : "unknown" : "unknown"
}
const pt = e(class extends t {
        constructor(e) {
            if (super(e), e.type !== o.CHILD) throw Error("templateContent can only be used in child bindings")
        }
        render(e) {
            return this.vt === e ? n : (this.vt = e, document.importNode(e.content, !0))
        }
    }),
    mt = {
        rootMargin: "200px"
    },
    gt = new Map;

function _t(e, t) {
    return !gt.has(e) && t && gt.set(e, function(e) {
        return new IntersectionObserver((e => {
            for (const t of e) {
                const e = t.target,
                    o = t.isIntersecting ? ee("faceplate-enter", t, !1) : ee("faceplate-leave", t, !1);
                e.dispatchEvent(o)
            }
        }), e)
    }(t)), gt.get(e)
}
class ft {
    constructor(e = mt) {
        this._observer = _t(JSON.stringify(e), e)
    }
    observe(e) {
        this._observer.observe(e)
    }
    unobserve(e) {
        this._observer.unobserve(e)
    }
}
const vt = Symbol("mixins/observer");

function Et(e) {
    if (vt in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this._observer = null, this._handleEnter = e => {
                this.observerIsIntersectingCallback(e.detail)
            }, this._handleLeave = e => {
                this.observerIsNotIntersectingCallback(e.detail)
            }
        }
        get isObserved() {
            return !!this._observer
        }
        enableObserver(e) {
            this._observer || (this._observer = new ft(e), this._observer.observe(this), this.addEventListener("faceplate-enter", this._handleEnter), this.addEventListener("faceplate-leave", this._handleLeave))
        }
        disableObserver() {
            this._observer && (this._observer.unobserve(this), this._observer = null, this.removeEventListener("faceplate-enter", this._handleEnter), this.removeEventListener("faceplate-leave", this._handleLeave))
        }
        observerIsIntersectingCallback(e) {}
        observerIsNotIntersectingCallback(e) {}
    }
    return t[vt] = !0, t
}
var bt, St, yt, Ct, Tt, At, It;
! function(e) {
    e[e.emergency = 0] = "emergency", e[e.alert = 1] = "alert", e[e.critical = 2] = "critical", e[e.error = 3] = "error", e[e.warning = 4] = "warning", e[e.notice = 5] = "notice", e[e.info = 6] = "info", e[e.success = 7] = "success", e[e.debug = 8] = "debug", e[e.none = 9] = "none"
}(bt || (bt = {})),
function(e) {
    e.Programmatic = "programmatic", e.Eager = "eager", e.Action = "action", e.Intent = "intent", e.Lazy = "lazy", e.Preload = "preload"
}(St || (St = {})),
function(e) {
    e.Once = "once", e.Always = "always"
}(yt || (yt = {})),
function(e) {
    e.Get = "get", e.Post = "post", e.Dialog = "dialog", e.Log = "log"
}(Ct || (Ct = {})),
function(e) {
    e.Append = "append", e.Prepend = "prepend", e.After = "after", e.Before = "before", e.Replace = "replace", e.Contents = "contents"
}(Tt || (Tt = {})),
function(e) {
    e.XPromo = "xpromo"
}(At || (At = {}));
const Pt = new Set;
let wt = It = class extends(Et(a)) {
    constructor() {
        super(...arguments), this.content = null, this.slotState = "pending"
    }
    connectedCallback() {
        switch (super.connectedCallback(), this.shouldRenderWithPaintGroup = this.paintGroup && (!this.loading || this.loading === St.Eager), this.loading) {
            case St.Programmatic:
                break;
            case St.Lazy:
                this.enableObserver();
                break;
            case St.Eager:
            default:
                this.load()
        }
    }
    disconnectedCallback() {
        this.disableObserver(), super.disconnectedCallback()
    }
    renderAsSlot() {
        switch (this.slotState) {
            case "pending":
                return r`<slot></slot>`;
            case "ready":
                return r`<slot name="${It.READY_SLOT}"></slot>`;
            case "error":
                return r`<slot name="${It.ERROR_SLOT}"></slot>`
        }
    }
    render() {
        return this.shouldRenderAsSlot ? this.renderAsSlot() : null != this.content ? this.content : r` <slot></slot> <slot name="${It.READY_SLOT}"></slot> <slot name="${It.ERROR_SLOT}"></slot> `
    }
    observerIsIntersectingCallback() {
        this.disableObserver(), this.load()
    }
    async load() {
        try {
            if (!this.bundleName) throw new Error("Unspecified bundle.");
            Pt.add(this);
            const e = It.Loaders;
            if (0 === e.size) return;
            const t = e.get(this.bundleName);
            if (!t) throw new Error(`Invalid bundle: ${this.bundleName}.`);
            if (this.shouldRenderWithPaintGroup && this.paintGroup) {
                const e = It.paintGroupLoaders.get(this.paintGroup);
                e?.push(t())
            } else await t();
            this.handleLoad()
        } catch (e) {
            this.handleLoadError(e)
        }
    }
    async waitForPaintGroup() {
        if (!this.paintGroup || !this.shouldRenderWithPaintGroup) return;
        const e = It.paintGroupLoaders.get(this.paintGroup);
        var t;
        e && await Promise.race([Promise.all(e), (t = 2e3, new Promise((e => {
            window.setTimeout(e, t)
        })))])
    }
    async handleLoad() {
        Pt.delete(this), this.shouldRenderWithPaintGroup && await this.waitForPaintGroup(), this.shouldRenderAsSlot ? this.slotState = "ready" : this.renderTemplate(It.READY_SLOT)
    }
    handleLoadError(e) {
        console.error("Error loading async bundle", e?.stack), this.shouldRenderAsSlot ? this.slotState = "error" : this.renderTemplate(It.ERROR_SLOT), window.Sentry?.withScope((e => {
            e?.setTag?.("bundleName", this.bundleName), window.Sentry?.captureMessage?.("Failed to load async bundle")
        }))
    }
    renderTemplate(e) {
        const t = this.findTemplate(e);
        t && (this.content = pt(t))
    }
    findTemplate(e) {
        const t = this.shadowRoot?.querySelector(`slot[name=${e}]`);
        if (!(t instanceof HTMLSlotElement)) return null;
        const o = t?.assignedElements()[0];
        return o instanceof HTMLTemplateElement ? o : null
    }
};

function Rt(e, t) {
    var o;
    e.removeController(t), null === (o = t.hostDisconnected) || void 0 === o || o.call(t)
}

function Ot(e, t, o, n) {
    const i = new x(e, (() => t));
    return i.define("click", (e => o(e)), n), i.define("mouseup", (e => {
        1 === e.button && o(e)
    }), n), i.define("keydown", (e => {
        "Enter" !== e.code && "Space" !== e.code || o(e)
    }), n), i
}
wt.styles = [Z], wt.Loaders = new Map, wt.addLoaders = e => {
    for (const [t, o] of Object.entries(e)) It.Loaders.set(t, o);
    for (const e of Pt) e.load()
}, wt.paintGroupLoaders = ((e = At) => new Map(Object.values(e).map((e => [e, []]))))(), wt.READY_SLOT = "ready", wt.ERROR_SLOT = "error", v([P({
    type: String
})], wt.prototype, "bundleName", void 0), v([P({
    type: String
})], wt.prototype, "loading", void 0), v([P({
    type: String,
    attribute: "paint-group",
    converter: e => e
})], wt.prototype, "paintGroup", void 0), v([P({
    type: Boolean
})], wt.prototype, "shouldRenderAsSlot", void 0), v([w()], wt.prototype, "content", void 0), v([w()], wt.prototype, "shouldRenderWithPaintGroup", void 0), v([w()], wt.prototype, "slotState", void 0), wt = It = v([A("shreddit-async-loader")], wt);

function Nt(e, t, o, n) {
    const i = new x(e, (() => t));
    let s;
    const a = () => s = s && window.clearTimeout(s),
        r = e => s = a() || window.setTimeout((() => o(e)), 300);
    return i.define("focusin", r, n), i.define("mouseenter", r, n), i.define("touchstart", r, n), i.define("focusout", a, n), i.define("mouseleave", a, n), i.define("touchend", a, n), i.define("touchcancel", a, n), e.addController(i), i
}
class Mt {
    constructor(e) {
        this._isConnected = !1, this._host = e, e.addController(this)
    }
    addController(e) {
        var t, o;
        (null !== (t = this._controllers) && void 0 !== t ? t : this._controllers = []).push(e), this._isConnected && (null === (o = e.hostConnected) || void 0 === o || o.call(e))
    }
    removeController(e) {
        var t;
        null === (t = this._controllers) || void 0 === t || t.splice(this._controllers.indexOf(e) >>> 0, 1)
    }
    requestUpdate() {
        this._host.requestUpdate()
    }
    get updateComplete() {
        return this._host.updateComplete
    }
    hostConnected() {
        var e;
        null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostConnected && e.hostConnected())), this._isConnected = !0
    }
    hostDisconnected() {
        var e;
        this._isConnected = !1, null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostDisconnected && e.hostDisconnected()))
    }
    hostUpdate() {
        var e;
        null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostUpdate && e.hostUpdate()))
    }
    hostUpdated() {
        var e;
        null === (e = this._controllers) || void 0 === e || e.forEach((e => e.hostUpdated && e.hostUpdated()))
    }
}
class Dt {
    constructor(e, t, o) {
        this._target = t;
        let n = o;
        const i = ne(t, "faceplateObserverConfig");
        i && (n = o ? Object.assign(Object.assign({}, o), i) : i), this._observer = new ft(n), e.addController(this)
    }
    hostConnected() {
        this._observer.observe(this._target)
    }
    hostDisconnected() {
        this._observer.unobserve(this._target)
    }
}

function Lt(e, t, o, n) {
    const i = new Mt(e);
    new Dt(i, t, n);
    return new x(i, (() => t)).define("faceplate-enter", (e => o(e))), i
}
class Ut {
    constructor() {
        let e, t;
        this.promise = new Promise(((o, n) => {
            e = o, t = n
        })), this.resolve = e, this.reject = t
    }
}
class kt extends Ut {
    constructor() {
        super();
        const e = this.resolve;
        this.resolve = t => e(this.value = t)
    }
}
const xt = new Map;

function Ft(e) {
    return xt.has(e) || xt.set(e, new Ut), xt.get(e)
}

function Bt(e) {
    return Ft(e).promise
}
const Vt = new Map,
    Gt = () => {
        throw new Error("Class extending LoaderElement not configured!")
    };

function Wt(e, t) {
    Vt.set(e, t)
}
class Ht extends a {
    constructor() {
        super(...arguments), this.readyMark = "", this.setMark = "", this.goMark = "", this.src = "", this.loading = St.Lazy, this._isLoading = !1, this._load = async () => {
            if (!this.isLoading) try {
                this.isLoading = !0, this._ctrl && (this._ctrl = Rt(this, this._ctrl));
                const e = await (Vt.get(this.constructor) || Gt),
                    t = e instanceof Function ? e : e.loader,
                    o = e instanceof Function ? void 0 : e.runner,
                    n = ee("faceplate-load-start");
                let i, s;
                this.dispatchEvent(n), t && (i = await t(this, this.src)), this.setMark && Ft(this.setMark).resolve(), this.goMark && await Bt(this.goMark), o && (s = await o(this, i));
                const a = ee("faceplate-load", {
                    resource: (null == s ? void 0 : s.src) || this.src,
                    src: this.src
                });
                this.dispatchEvent(a)
            } catch (e) {
                const t = ee("faceplate-error", e);
                this.dispatchEvent(t)
            } finally {
                this.isLoading = !1
            }
        }
    }
    get isLoading() {
        return this._isLoading
    }
    set isLoading(e) {
        this._isLoading = !!e
    }
    connectedCallback() {
        super.connectedCallback(), this._loaderInit()
    }
    async _loaderInit() {
        this.readyMark && await Bt(this.readyMark);
        const {
            loading: e
        } = this;
        e === St.Action ? this._ctrl = Ot(this, this, this._load) : e === St.Lazy ? this._ctrl = Lt(this, this, this._load) : e === St.Intent ? this._ctrl = Nt(this, this, this._load) : e !== St.Eager && e !== St.Preload || this._load()
    }
    load() {
        if (this.loading !== St.Programmatic) throw new Error(`Calling load only supported with loading=${St.Programmatic}`);
        return this._load()
    }
}

function qt(e) {
    const t = e.headers.get("content-type");
    return null == t ? void 0 : t.split(";")[0]
}

function $t(e, t) {
    if (t.startsWith("/")) return !0;
    let o;
    try {
        o = new URL(t)
    } catch (e) {
        return !0
    }
    const [n, i] = e.hostname.split(".").reverse(), [s, a] = o.hostname.split(".").reverse();
    return n === s && i === a
}
v([P({
    type: String,
    attribute: "readymark"
})], Ht.prototype, "readyMark", void 0), v([P({
    type: String,
    attribute: "setmark"
})], Ht.prototype, "setMark", void 0), v([P({
    type: String,
    attribute: "gomark"
})], Ht.prototype, "goMark", void 0);
let Yt = () => new URL(window.location.href);
var jt, Kt;
! function(e) {
    e.Omit = "omit", e.SameOrigin = "same-origin", e.Include = "include", e.SameDomain = "same-domain"
}(jt || (jt = {})),
function(e) {
    e.UrlEncoded = "application/x-www-form-urlencoded", e.FormData = "multipart/form-data", e.JSON = "application/json"
}(Kt || (Kt = {}));
let Qt = async (e = 1e4) => {
    if (navigator.onLine) return !0;
    const t = AbortSignal.timeout(e);
    return new Promise((e => {
        window.addEventListener("online", (() => e(!0)), {
            once: !0,
            signal: t
        }), t.addEventListener("abort", (() => e(!1)), {
            once: !0
        })
    }))
};

function zt(e, t, o = {}) {
    var n;
    return S(this, arguments, (function*() {
        const i = null === o.onlineStatusCheck ? null : null !== (n = o.onlineStatusCheck) && void 0 !== n ? n : Qt,
            s = ee("faceplate-request", {
                resource: e,
                request: t
            });
        if (yield yield b(s), s.defaultPrevented) return yield b(void 0);
        const a = t,
            {
                enctype: r
            } = o;
        if (r === Kt.FormData ? delete a.headers["Content-Type"] : r && (a.headers["Content-Type"] = r), r) {
            const e = o.encoders ? o.encoders[r] : void 0;
            if (!e) {
                const e = new Error(`No encoder supplied for enctype ${r}`);
                return yield yield b(ee("faceplate-error", e)), yield b(void 0)
            }
            a.body = yield b(e(t.body))
        }
        a.method === Ct.Get && delete a.body, o.credentials === jt.SameDomain ? $t(Yt(), e) && (a.credentials = jt.Include) : o.credentials && o.credentials !== jt.Include ? a.credentials = o.credentials : delete a.credentials, o.mode && (a.mode = o.mode);
        try {
            i && (yield b(i()));
            const t = yield b(fetch(e, a));
            yield yield b(ee("faceplate-response", {
                response: t
            }))
        } catch (e) {
            const t = e instanceof Error ? e : new Error(null == e ? void 0 : e.toString());
            yield yield b(ee("faceplate-error", t))
        }
    }))
}

function Jt(e) {
    return new Error(`Unsupported type File given for field ${e}. Use encoding type ${Kt.FormData} for file upload.`)
}

function Xt(e) {
    const t = new URLSearchParams;
    for (const o of e) {
        if (o[1] instanceof File) throw Jt(o[0]);
        t.append(o[0], o[1])
    }
    return t
}
const Zt = e => new Promise((t => setTimeout(t, e)));

function eo(e, t) {
    return S(this, arguments, (function*() {
        var o, n, i, s, a, r, d;
        try {
            for (var l, c = !0, u = y(function({
                    attempts: e = 1 / 0,
                    budget: t = 1 / 0,
                    backoff: o = 0,
                    maxSleep: n = 1 / 0,
                    useJitter: i = !1
                }) {
                    return S(this, arguments, (function*() {
                        if (e <= 0) throw new TypeError("retry attempts must be a positive number");
                        if (t <= 0) throw new TypeError("retry budget must be a positive number");
                        if (o < 0) throw new TypeError("retry backoff cannot be a negative number");
                        if (n <= 0) throw new TypeError("retry maxSleep must be a positive number");
                        const s = Date.now();
                        let a = t;
                        yield yield b(a);
                        for (let r = 1; r < e; r++) {
                            if (o) {
                                let e = Math.min(n, o * 2 ** (r - 1));
                                if (i && (e *= Math.random() * e), e > a) return yield b(void 0);
                                yield b(Zt(e))
                            }
                            if (Number.isFinite(a)) {
                                const e = Date.now() - s;
                                if (a = t - e, a <= 0) return yield b(void 0)
                            }
                            yield yield b(a)
                        }
                    }))
                }(t)); !(o = (l = yield b(u.next())).done);) {
                l.value, c = !1;
                try {
                    const t = e();
                    try {
                        for (var h, p = !0, m = (a = void 0, y(t)); !(s = (h = yield b(m.next())).done);) {
                            d = h.value, p = !1;
                            try {
                                const e = d;
                                yield yield b(e)
                            } finally {
                                p = !0
                            }
                        }
                    } catch (e) {
                        a = {
                            error: e
                        }
                    } finally {
                        try {
                            p || s || !(r = m.return) || (yield b(r.call(m)))
                        } finally {
                            if (a) throw a.error
                        }
                    }
                } finally {
                    c = !0
                }
            }
        } catch (e) {
            n = {
                error: e
            }
        } finally {
            try {
                c || o || !(i = u.return) || (yield b(i.call(u)))
            } finally {
                if (n) throw n.error
            }
        }
    }))
}
const to = {
    enctype: Kt.UrlEncoded,
    encoders: {
        [Kt.UrlEncoded]: Xt
    }
};
let oo = () => {},
    no = {
        backoff: 500,
        attempts: 3
    };
const io = {
    credentials: jt.SameDomain,
    mode: "no-cors"
};
class so {
    constructor(e) {
        this.isRequestInProgress = !1, this.host = e
    }
    buildRequest(e) {
        const t = {
            method: e.method || Ct.Get,
            body: e.body || new FormData,
            headers: {}
        };
        return e.loading !== St.Preload && (t.headers.Accept = "text/vnd.reddit.partial+html, text/html;q=0.9"), t.method === Ct.Get || (t.headers["Content-Type"] = Kt.UrlEncoded), t
    }
    validateRequestOptions(e) {
        if (e.method && ![Ct.Get, Ct.Post].includes(e.method)) throw new Error(`Unsupported method ${e.method}`)
    }
    _handleError(e, t = "partial-request-generic-failure") {
        return ee("faceplate-alert", {
            level: bt.error,
            message: "Request failed",
            meta: null == e ? void 0 : e.toString(),
            cause: t,
            sourceElement: this.host.tagName
        })
    }
    _handleNetworkError(e) {
        return ee("faceplate-alert", {
            level: bt.error,
            message: "Request failed",
            meta: e.status,
            alertDetails: {
                kind: "network",
                response: e
            },
            cause: `partial-request-network-error-${e.status}`,
            sourceElement: this.host.tagName
        })
    }
    _dispatchEventIfNotPrevented(e) {
        e.defaultPrevented || this.host.dispatchEvent(e)
    }
    async request(e, t) {
        var o, n, i, s;
        this.isRequestInProgress = !0;
        const a = `${Yt().origin}${"/"===e[0]?"":"/"}${e}`,
            r = t && t.loading === St.Preload ? io : to,
            d = (null == t ? void 0 : t.onError) || oo,
            l = (null == t ? void 0 : t.retryOptions) || no;
        this.validateRequestOptions(t || {});
        const c = eo((() => {
            const e = this.buildRequest(t || {});
            return zt(a, e, r)
        }), l);
        try {
            let e;
            try {
                for (var u, h = !0, p = y(c); !(o = (u = await p.next()).done);) {
                    s = u.value, h = !1;
                    try {
                        const t = s;
                        let o = !1;
                        const n = () => {
                            o = !0
                        };
                        if (e = void 0, "faceplate-error" === t.type) {
                            const i = this._handleError(t.detail, "partial-request-fetch-failure");
                            if (d({
                                    event: i,
                                    href: a,
                                    retry: n
                                }), this._dispatchEventIfNotPrevented(i), o) {
                                e = i.detail;
                                continue
                            }
                            return
                        }
                        if (this.host.dispatchEvent(t), t.defaultPrevented) return;
                        if ("faceplate-response" === t.type) {
                            const i = t.detail.response;
                            if (!i.ok) {
                                const t = this._handleNetworkError(i);
                                if (d({
                                        event: t,
                                        res: i,
                                        href: a,
                                        retry: n
                                    }), this._dispatchEventIfNotPrevented(t), o) {
                                    e = t.detail;
                                    continue
                                }
                                return
                            }
                            const s = qt(i);
                            if ("text/vnd.reddit.partial+html" !== s) throw new Error(`Unsupported content type "${s}" returned from ${a}`);
                            return i
                        }
                    } finally {
                        h = !0
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    h || o || !(i = p.return) || await i.call(p)
                } finally {
                    if (n) throw n.error
                }
            }
            if (e) {
                const t = ee("faceplate-alert", e);
                d({
                    event: t,
                    href: a
                }), this._dispatchEventIfNotPrevented(t)
            }
        } catch (e) {
            const t = this._handleError(e, "partial-request-uncaught-failure");
            d({
                event: t,
                error: e instanceof Error ? e : void 0,
                href: a
            }), this._dispatchEventIfNotPrevented(t)
        } finally {
            this.isRequestInProgress = !1
        }
    }
}
const ao = "function" == typeof document.createRange;
var ro;

function lo(e) {
    const t = e.cloneNode();
    return document.createRange().createContextualFragment(t.outerHTML).children[0]
}

function co(e, t, o) {
    var n, i;
    const s = uo(e),
        a = document.createDocumentFragment();
    for (const e of s) {
        const t = null === (n = e.getAttribute("data-faceplate-swap-oob")) || void 0 === n ? void 0 : n.split(":");
        if (null == t ? void 0 : t.length) {
            const o = t.length > 1 ? t[0] : Tt.Replace;
            e.removeAttribute("data-faceplate-swap-oob");
            const n = null !== (i = t[1]) && void 0 !== i ? i : t[0],
                s = document.querySelectorAll(n);
            if (!s.length) throw new Error(`Unable to find target node for out-of-band render: ${n}`);
            for (const t of s) co(e.outerHTML, t, o)
        } else a.appendChild(e)
    }! function(e, t, o) {
        const n = (new XMLSerializer).serializeToString(e).replace(/xmlns="[^"]*html[^"]*"/g, "");
        switch (o) {
            case Tt.Append:
                return void t.insertAdjacentHTML("beforeend", n);
            case Tt.Prepend:
                return void t.insertAdjacentHTML("afterbegin", n);
            case Tt.After:
                return void t.insertAdjacentHTML("afterend", n);
            case Tt.Before:
                return void t.insertAdjacentHTML("beforebegin", n);
            case Tt.Replace:
                if (!t.parentNode) throw new Error("Attemping to use partial replace mode on target without a parent node!");
                return t.parentNode.insertBefore(e, t), void t.remove();
            case Tt.Contents:
                return t.textContent = "", void t.appendChild(e);
            default:
                throw new Error(`Attempting to use unsupported partial mode '${o}'!`)
        }
    }(a, t, o)
}

function uo(e) {
    const t = document.createElement("template");
    t.innerHTML = e;
    const o = Array.from(t.content.children);
    if (!ao) return o;
    for (let e = 0; e < o.length; e++) {
        const t = o[e];
        if ("FACEPLATE-BATCH" === t.nodeName) {
            const n = lo(t),
                i = customElements.get(t.nodeName.toLowerCase());
            if (!(i && n instanceof i)) continue;
            const s = n.getCurrentTarget(t),
                a = Array.from(s.children);
            if (s.innerHTML = "", s !== t)
                for (const e of Array.from(t.children)) n.appendChild(e);
            if (s !== t && s.nodeName.includes("-")) {
                const e = lo(s);
                s.replaceWith(e)
            }
            n.batchInsert(a), o[e] = n
        }
    }
    return o
}! function(e) {
    e.Append = "append", e.Replace = "replace", e.Contents = "contents"
}(ro || (ro = {}));
const ho = e => {
    var t;
    return null !== (t = null == e ? void 0 : e.toLowerCase()) && void 0 !== t ? t : ""
};

function po(e) {
    throw 1
}
class mo extends Ht {
    constructor() {
        super(...arguments), this.src = "", this.target = "", this.loading = St.Eager, this.renderMode = Tt.Replace, this.method = Ct.Get, this.alwaysShowSlot = !1, this.partialRequest = new so(this)
    }
    get isLoading() {
        return !!this.partialRequest && this.partialRequest.isRequestInProgress
    }
    set isLoading(e) {}
    static get styles() {
        return s`:host{display:block}:host([loading=action]){cursor:pointer}`
    }
    _shouldShowLoadingSlot() {
        var e;
        if (!(null === (e = this.partialRequest) || void 0 === e ? void 0 : e.isRequestInProgress)) return !1;
        switch (this.loading) {
            case St.Action:
            case St.Intent:
            case St.Programmatic:
                return !0;
            case St.Eager:
            case St.Preload:
            case St.Lazy:
                return !1
        }
        return po(this.loading)
    }
    _shouldUsePlaceholder() {
        if (this.alwaysShowSlot || this.renderMode !== Tt.Replace) return !1;
        switch (this.loading) {
            case St.Lazy:
                return !0;
            case St.Action:
            case St.Eager:
            case St.Intent:
            case St.Preload:
            case St.Programmatic:
                return !1
        }
        return po(this.loading)
    }
    updated() {
        if (!this._shouldUsePlaceholder() || this._slotCapture) return;
        const e = this._shouldShowLoadingSlot(),
            t = Array.from(e ? this.querySelectorAll("[slot=loading]") : this.childNodes);
        this._slotCapture = new DocumentFragment, t.forEach((e => {
            var t;
            "INPUT" !== e.nodeName && (null === (t = this._slotCapture) || void 0 === t || t.appendChild(e))
        }));
        const o = document.createElement("div");
        o.style.minHeight = "1px", o.style.minWidth = "1px", o.style.marginBottom = "-1px", e && o.setAttribute("slot", "loading"), this.appendChild(o)
    }
    render() {
        var e;
        const t = this.loading === St.Action && !(null === (e = this.partialRequest) || void 0 === e ? void 0 : e.isRequestInProgress),
            o = this._shouldShowLoadingSlot();
        return r` <div tabindex="${d(t?0:void 0)}"> <slot name="${d(o?"loading":void 0)}"></slot> </div> `
    }
    loadContent() {
        return this._load()
    }
    async _loadContent() {
        var e, t, o;
        if (!this.src) throw new Error("No src attribute specified on faceplate-partial element.");
        if (null === (e = this.partialRequest) || void 0 === e ? void 0 : e.isRequestInProgress) throw new Error("Request already in progress on faceplate-partial element.");
        let n;
        if (this.method === Ct.Post && (n = new FormData, this.method === Ct.Post)) {
            const e = this.querySelectorAll("input[type=hidden]");
            for (let t = 0; t < e.length; t++) {
                const o = e[t];
                !o.disabled && o.name && n.append(o.name, o.value)
            }
        }
        this._slotCapture && (this._shouldShowLoadingSlot() ? null === (t = this.querySelector("[slot=loading]")) || void 0 === t || t.remove() : this.innerHTML = "", this.appendChild(this._slotCapture));
        const i = null === (o = this.partialRequest) || void 0 === o ? void 0 : o.request(this.src, {
            body: n,
            method: this.method,
            loading: this.loading
        });
        this.loading === St.Action && this.requestUpdate();
        const s = await i;
        return s || this.loading !== St.Action || this.requestUpdate(), null == s ? void 0 : s.text()
    }
    _renderContent(e) {
        let t = null;
        const o = this.target ? document.querySelectorAll(this.target) : [this];
        (null == o ? void 0 : o.length) || console.warn("No target element found for faceplate-partial element.", this);
        for (const n of o) {
            const o = this.renderMode === Tt.Replace,
                i = n.previousSibling;
            if (i || (t = n.parentNode), e && this.parentElement && (co(e, n, this.renderMode), o)) {
                const e = i ? i.nextSibling : t ? t.firstElementChild : null;
                if (e) {
                    const t = ee("faceplate-load", {
                        resource: this.src,
                        src: this.src
                    });
                    e.dispatchEvent(t)
                }
            }
        }
    }
}
v([P({
    type: String
})], mo.prototype, "src", void 0), v([P({
    type: String
})], mo.prototype, "target", void 0), v([P({
    type: String
})], mo.prototype, "loading", void 0), v([P({
    type: String,
    attribute: "render-mode"
})], mo.prototype, "renderMode", void 0), v([P({
    converter: ho
})], mo.prototype, "method", void 0), v([P({
    type: Boolean,
    attribute: "always-show-slot"
})], mo.prototype, "alwaysShowSlot", void 0), Wt(mo, {
    loader: e => e._loadContent(),
    runner: (e, t) => e._renderContent(t)
});
!!window.customElements.get("faceplate-partial") || window.customElements.define("faceplate-partial", mo);
const go = {
        fromAttribute: e => e.trim().split(/ +/),
        toAttribute: e => e.join(" ")
    },
    _o = {
        fromAttribute: e => e.trim().split(","),
        toAttribute: e => e.join(",")
    },
    fo = {
        rootMargin: "0px"
    };
let vo = class extends a {
    constructor() {
        super(...arguments), this.source = "", this.action = "", this.noun = "", this.loadingModifier = [], this._fireMode = yt.Always, this._trackEvent = () => {
            this._ctrl && this._fireMode === yt.Once && (this._ctrl = Rt(this, this._ctrl));
            const {
                source: e,
                action: t,
                noun: o
            } = this;
            e && t && o && ie(this, {
                source: e,
                action: t,
                noun: o
            })
        }
    }
    get loading() {
        return "click" === this.action ? St.Action : "view" === this.action ? St.Lazy : St.Programmatic
    }
    createRenderRoot() {
        return this
    }
    connectedCallback() {
        super.connectedCallback();
        const {
            loading: e
        } = this;
        e === St.Action ? this._ctrl = Ot(this, this, this._trackEvent) : e === St.Lazy && (this._ctrl = Lt(this, this, this._trackEvent, fo), this._fireMode = yt.Once);
        for (const e of this.loadingModifier) switch (e) {
            case yt.Once:
            case yt.Always:
                this._fireMode = e
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._ctrl && (this._ctrl = Rt(this, this._ctrl))
    }
    trackEvent() {
        if (this.loading !== St.Programmatic) throw new Error(`Calling trackEvent only supported with loading=${St.Programmatic}`);
        return this._trackEvent()
    }
};
v([P({
    type: String
})], vo.prototype, "source", void 0), v([P({
    type: String
})], vo.prototype, "action", void 0), v([P({
    type: String
})], vo.prototype, "noun", void 0), v([P({
    converter: go,
    attribute: "loading-modifier"
})], vo.prototype, "loadingModifier", void 0), vo = v([A("faceplate-tracker")], vo);
let Eo = class extends Event {
    constructor(e, t, o) {
        super("context-request", {
            bubbles: !0,
            composed: !0
        }), this.context = e, this.callback = t, this.subscribe = o
    }
};

function bo(e) {
    return e
}
let So = class {
        constructor(e, t, o, n) {
            var i;
            if (this.subscribe = !1, this.provided = !1, this.value = void 0, this.t = (e, t) => {
                    this.unsubscribe && (this.unsubscribe !== t && (this.provided = !1, this.unsubscribe()), this.subscribe || this.unsubscribe()), this.value = e, this.host.requestUpdate(), this.provided && !this.subscribe || (this.provided = !0, this.callback && this.callback(e, t)), this.unsubscribe = t
                }, this.host = e, void 0 !== t.context) {
                const e = t;
                this.context = e.context, this.callback = e.callback, this.subscribe = null !== (i = e.subscribe) && void 0 !== i && i
            } else this.context = t, this.callback = o, this.subscribe = null != n && n;
            this.host.addController(this)
        }
        hostConnected() {
            this.dispatchRequest()
        }
        hostDisconnected() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = void 0)
        }
        dispatchRequest() {
            this.host.dispatchEvent(new Eo(this.context, this.t, this.subscribe))
        }
    },
    yo = class {
        constructor(e) {
            this.disposers = new Map, this.updateObservers = () => {
                for (const [e, t] of this.disposers) e(this.o, t)
            }, void 0 !== e && (this.value = e)
        }
        get value() {
            return this.o
        }
        set value(e) {
            this.setValue(e)
        }
        setValue(e, t = !1) {
            const o = t || !Object.is(e, this.o);
            this.o = e, o && this.updateObservers()
        }
        addCallback(e, t) {
            if (t) {
                this.disposers.has(e) || this.disposers.set(e, (() => {
                    this.disposers.delete(e)
                }));
                const t = this.disposers.get(e);
                e(this.value, t)
            } else e(this.value)
        }
        clearCallbacks() {
            this.disposers.clear()
        }
    },
    Co = class extends Event {
        constructor(e) {
            super("context-provider", {
                bubbles: !0,
                composed: !0
            }), this.context = e
        }
    },
    To = class extends yo {
        constructor(e, t, o) {
            super(void 0 !== t.context ? t.initialValue : o), this.onContextRequest = e => {
                e.context === this.context && e.composedPath()[0] !== this.host && (e.stopPropagation(), this.addCallback(e.callback, e.subscribe))
            }, this.host = e, void 0 !== t.context ? this.context = t.context : this.context = t, this.attachListeners(), this.host.addController(this)
        }
        attachListeners() {
            this.host.addEventListener("context-request", this.onContextRequest)
        }
        hostConnected() {
            this.host.dispatchEvent(new Co(this.context))
        }
    };

function Ao({
    context: e
}) {
    return R({
        finisher: (t, o) => {
            const n = new WeakMap;
            t.addInitializer((t => {
                n.set(t, new To(t, {
                    context: e
                }))
            }));
            const i = Object.getOwnPropertyDescriptor(t.prototype, o),
                s = null == i ? void 0 : i.set,
                a = {
                    ...i,
                    set: function(e) {
                        var t;
                        null === (t = n.get(this)) || void 0 === t || t.setValue(e), s && s.call(this, e)
                    }
                };
            Object.defineProperty(t.prototype, o, a)
        }
    })
}

function Io({
    context: e,
    subscribe: t
}) {
    return R({
        finisher: (o, n) => {
            o.addInitializer((o => {
                new So(o, {
                    context: e,
                    callback: e => {
                        o[n] = e
                    },
                    subscribe: t
                })
            }))
        }
    })
}
var Po, wo = {},
    Ro = {
        get exports() {
            return wo
        },
        set exports(e) {
            wo = e
        }
    };
Po = function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) t[n] = o[n]
        }
        return t
    }

    function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function o(n) {
        function i() {}

        function s(t, o, s) {
            if ("undefined" != typeof document) {
                "number" == typeof(s = e({
                    path: "/"
                }, i.defaults, s)).expires && (s.expires = new Date(1 * new Date + 864e5 * s.expires)), s.expires = s.expires ? s.expires.toUTCString() : "";
                try {
                    var a = JSON.stringify(o);
                    /^[\{\[]/.test(a) && (o = a)
                } catch (e) {}
                o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var r = "";
                for (var d in s) s[d] && (r += "; " + d, !0 !== s[d] && (r += "=" + s[d].split(";")[0]));
                return document.cookie = t + "=" + o + r
            }
        }

        function a(e, o) {
            if ("undefined" != typeof document) {
                for (var i = {}, s = document.cookie ? document.cookie.split("; ") : [], a = 0; a < s.length; a++) {
                    var r = s[a].split("="),
                        d = r.slice(1).join("=");
                    o || '"' !== d.charAt(0) || (d = d.slice(1, -1));
                    try {
                        var l = t(r[0]);
                        if (d = (n.read || n)(d, l) || t(d), o) try {
                            d = JSON.parse(d)
                        } catch (e) {}
                        if (i[l] = d, e === l) break
                    } catch (e) {}
                }
                return e ? i[e] : i
            }
        }
        return i.set = s, i.get = function(e) {
            return a(e, !1)
        }, i.getJSON = function(e) {
            return a(e, !0)
        }, i.remove = function(t, o) {
            s(t, "", e(o, {
                expires: -1
            }))
        }, i.defaults = {}, i.withConverter = o, i
    }((function() {}))
}, Ro.exports = Po();
class Oo extends Mt {
    constructor(e, t) {
        super(e), this._events = new x(this, (() => this._host)), this.trackEvent = t, this._events.define("faceplate-track", (e => {
            const t = e.detail,
                o = e.SAN || se(t),
                n = e.composedPath();
            for (const e of n)
                if (e instanceof HTMLElement) {
                    const o = ne(e, "faceplateTrackingContext");
                    o && ae(t, o)
                } this.trackEvent(t, o)
        }))
    }
}
const No = B(),
    Mo = V("AlertReportingElement"),
    Do = Mo.registerAncestorClass,
    Lo = Mo.connectToAncestor,
    Uo = {
        fromAttribute(e) {
            if (e in bt) return bt[e]
        },
        toAttribute(e) {
            if (e in bt) return bt[e]
        }
    };

function ko(e, t, o, n) {
    return {
        level: e,
        message: t,
        meta: o[0] && "string" == typeof o[0] ? o.join("\n") : void 0,
        count: n
    }
}

function xo(e, t = ko) {
    const o = [];
    if (!e.length) return o;
    e.sort(((e, t) => (void 0 === e.level ? bt.none : e.level) - (void 0 === t.level ? bt.none : t.level)));
    let n = {},
        i = e[0].level,
        s = 0;

    function a() {
        for (const e in n) {
            const s = n[e];
            if (1 === s.length) o.push(s[0]);
            else {
                const n = [];
                let a = 0;
                for (const e of s) e.meta && n.push(e.meta), a += void 0 === e.count ? 1 : e.count;
                o.push(t(i, e, n, a))
            }
        }
    }
    for (const t of e) {
        t.level !== i && (a(), n = {}, i = t.level, s = 0);
        const e = t.message || "";
        Object.prototype.hasOwnProperty.call(n, e) ? n[e].push(t) : n[e] = [t], s += t.count || 1
    }
    return s > 0 && a(), o
}
class Fo {
    constructor(e) {
        this._handleAlertEvent = e => {
            const t = e.detail;
            this.report(t) && e.stopImmediatePropagation()
        }, e.addController(this), Do(e.constructor), this.host = e
    }
    hostConnected() {
        this.host.addEventListener("faceplate-alert", this._handleAlertEvent)
    }
    hostDisconnected() {
        this.host.removeEventListener("faceplate-alert", this._handleAlertEvent)
    }
    report(e) {
        const t = No.getRegisteredElements(this.host);
        if (t)
            for (const o of t)
                if (o.shouldDisplayAlert(e)) return o.displayAlert(e), !0;
        return !1
    }
}
var Bo, Vo, Go;
! function(e) {
    e.MOBILE = "mobile", e.TABLET = "tablet", e.DESKTOP = "desktop"
}(Bo || (Bo = {})),
function(e) {
    e.Seo = "seo", e.Reddit = "reddit", e.RedditSearch = "reddit_search", e.Other = "other", e.Invalid = "invalid"
}(Vo || (Vo = {})),
function(e) {
    e.All = "all", e.AllChats = "all_chats", e.AllChatsSpoke = "all_chats_spoke", e.AchievementsMain = "achievements_main", e.AchievementDetail = "achievement_detail", e.AchievementsCategory = "achievement_category", e.AchievementsCategoryPreview = "achievements_category_preview", e.AchievementPreview = "achievement_preview", e.AnnouncementDetailPage = "announcement_detail_page", e.ArenaFeed = "arena", e.Community = "community", e.CommunityGold = "community_gold", e.ClubAwardsModFeed = "club_awards_mod_feed", e.CommunityOverflow = "community_overflow", e.CommunityWiki = "community_wiki", e.CommunityManagement = "community_management", e.ContributorProgramMarketingPage = "contributor_program_marketing_page", e.CustomFeed = "custom_feed", e.DataRequest = "data_request", e.Home = "home", e.Inbox = "inbox", e.InventoryDetail = "inventory_detail", e.Multireddit = "multireddit", e.Popular = "popular", e.PostCreation = "post_submit", e.PostDetail = "post_detail", e.PrivateMessages = "messages", e.PostStats = "post_stats", e.ProfileAccountStats = "profile_account_stats", e.ProfileComments = "profile_comments", e.ProfileCommunityFinder = "profile_community_finder", e.ProfileDashboard = "profile_dashboard", e.ProfileDashboardPerformanceOverview = "profile_dashboard_performance_overview", e.ProfileDashboardTrendingConvos = "profile_dashboard_trending_convos", e.ProfileDownvoted = "profile_downvoted", e.ProfileHidden = "profile_hidden", e.ProfileOverview = "profile_overview", e.ProfilePerformance = "profile_performance", e.ProfilePosts = "profile_posts", e.ProfileRelatedKeywords = "profile_related_keywords", e.ProfileSaved = "profile_saved", e.ProfileSubmitted = "profile_submitted", e.ProfileTrendsLanding = "profile_trends_landing", e.ProfileTrendingConvos = "profile_trending_convos", e.ProfileTrendingConvoDetails = "profile_trending_convo_details", e.ProfileTrends = "profile_trends", e.ProfileUpvoted = "profile_upvoted", e.ProfileTrendMonitoring = "profile_trend_monitoring", e.ProfileModeration = "profile_moderation", e.EmailVerificationError = "email_verification_error", e.BrandMention = "brand_mention", e.SeoCommunityDirectory = "seo_community_directory", e.SingleCommentThread = "single_comment_thread", e.Unknown = "unknown", e.UserManagementMute = "moderation_pages_muted", e.UserManagementBan = "moderation_pages_banned", e.UserPosts = "user_posts", e.AdsRblSurvey = "ads_rbl_survey_iframe", e.Policies = "policies", e.MiniInbox = "mini_inbox", e.ModAchievements = "achievement_mod_tools", e.ModChatChannels = "mod_chat_channels", e.ModInsightsGrowth = "mod_insights_growth", e.ModInsightsReportsAndRemovals = "reports_and_removals_page", e.ModInsightsTeamHealth = "mod_insights_team_health", e.ModAutomations = "moderation_pages_postguidance", e.ModPostAndCommentSettings = "moderation_pages_edit", e.ModLog = "moderation_pages_log", e.ModQueue = "moderation_pages_modqueue", e.ModQueueAll = "moderation_pages_modqueue_all", e.ModQueuePdp = "moderation_pages_modqueue_pdp", e.ModRules = "moderation_pages_rules", e.ModCommunityGuide = "moderation_pages_communityguide", e.ModSettingsGeneral = "moderation_pages_settings_general", e.ModSettingsPrivacy = "moderation_pages_settings_privacy", e.ModSettingsNotifications = "moderation_pages_settings_notifications", e.ModScheduledPosts = "scheduled_posts", e.ModWiki = "moderation_pages_wiki", e.TemporaryEvents = "temporary_events", e.TemporaryEventsCreate = "temporary_events_create", e.TemporaryEventsEditTemplate = "temporary_events_edit_config", e.TemporaryEventsView = "temporary_events_view_run", e.RedditProOnboardingPage = "reddit_pro_onboarding", e.Recommends = "recommends", e.RecommendsLeaderboard = "recommends-leaderboard", e.SearchDropdown = "search_dropdown", e.SearchResults = "search_results", e.SearchResultsTrending = "search_results_trending", e.SocialPreviewPage = "social_preview", e.TopicPage = "topic", e.ExplorePage = "explore", e.ExploreTopicPage = "explore-topic", e.Embed = "embed", e.Vault = "vault", e.CDNMediaPage = "cdn_media_page", e.MFeed = "mfeed", e.SafetySubredditSettings = "safety_subreddit_settings", e.Avatar = "avatar", e.AvatarTabs = "avatar_tabs", e.DisplayCollectibles = "display_collectibles", e.UserRecap = "user_recap", e.SubredditRecap = "subreddit_recap", e.PremiumHub = "premium_hub", e.PremiumMarketing = "premium_marketing", e.ProductDetailPage = "product_detail_page", e.GoldPage = "gold_page", e.EarnedGoldPage = "earned_gold_page", e.Login = "login", e.Register = "register", e.Report = "report", e.Password = "password", e.PasswordRecovery = "passwordrecovery", e.Username = "username", e.Klp = "klp", e.Trend = "trend", e.FlairsModal = "flairs_modal", e.FlairsList = "flairs_list", e.SettingsAccount = "settings_account", e.SettingsPrivacy = "settings_privacy", e.SettingsPreferences = "settings_preferences", e.SettingsProfile = "settings_profile", e.SettingsEmails = "settings_emails", e.SettingsRedirect = "settings_redirect", e.SettingsChatPrivacy = "settings_chat_privacy", e.SettingsChatAllowlist = "settings_chat_allowlist", e.ChatRequestSettings = "chat_request_settings", e.PmRequestSettings = "pm_request_settings", e.Guides = "gen_guides", e.GuidesConversation = "gen_guides_conversation", e.SettingsNotifications = "settings_notifications", e.SettingsDisabledAdminNotifications = "settings_disabled_admin_notifications", e.UserFlairSettings = "moderation_pages_userflair", e.UserFlairSettingsPrompt = "user_flair_picker", e.PostFlairSettings = "moderation_pages_postflair", e.LookAndFeelSettings = "moderation_pages_lookandfeel", e.EmojiSettings = "moderation_pages_emojis", e.NewPhoneOTPAuth = "new_phone_auth_otp", e.CurrentPhoneOTPAuth = "current_phone_auth_otp", e.Moderators = "moderation_pages_moderators", e.InvitedModerators = "moderation_pages_invites", e.ApprovedUsers = "moderation_pages_approved_users", e.ComposeMessage = "compose_message", e.UserHovercard = "user_hovercard", e.Profile = "profile", e.Announcement = "announcement_page", e.Appeal = "appeal", e.OnboardingGenderSelection = "onboarding_gender_collection", e.OnboardingInterest = "onboarding_interest", e.OnboardingEmailPermission = "onboarding_email_permission", e.OnboardingComplete = "onboarding_complete_spinner"
}(Go || (Go = {}));
var Wo, Ho, qo, $o;
! function(e) {
    e.Link = "link", e.Text = "text", e.Image = "image", e.Gif = "gif", e.Video = "video", e.Crosspost = "crosspost", e.MultiMedia = "multi_media", e.RTJSON = "rtjson", e.Poll = "poll", e.LiveAudio = "liveaudio", e.RPAN = "rpan", e.Gallery = "gallery", e.Tournament = "tournament"
}(Wo || (Wo = {})),
function(e) {
    e.FEED = "feed", e.FULL_BLEED_VIDEO_FEED = "full_bleed_video_feed", e.COMMENTS_PAGE = "comments_page", e.COMMENT_TREES = "comment_trees", e.SIDEBARS = "sidebars", e.TRENDING_DISCOVERY = "trending_discovery", e.TRENDING_SEARCH_RESULT = "trending_search_result", e.BLANK_ONLY = "blank_only"
}(Ho || (Ho = {})),
function(e) {
    e.GoodVisit = "good_visit", e.GoodVisitFeed = "good_visit_feed", e.GoodVisitSearch = "good_visit_search", e.GoodVisitPostStats = "good_visit_post_stats", e.GoodVisitGuides = "good_visit_guides", e.GuidesRealtimeResponse = "guides_realtime_response", e.GuidesSSRResponse = "guides_ssr_response", e.GuidesRealtimeQuestion = "guides_realtime_question", e.GoodVisitInbox = "good_visit_inbox", e.Background = "background", e.GoodVisitCommunityWiki = "good_visit_community_wiki"
}(qo || (qo = {})),
function(e) {
    e.Initial = "initial", e.NavigationControllerRestore = "navigation_controller_restore", e.BFCache = "bf_cache", e.ForegroundingAction = "foregrounding_action", e.Unknown = "unknown"
}($o || ($o = {}));
const Yo = "/assets/pix/ads/1.png",
    jo = "https://ad-delivery.net/px.gif?ch=2",
    Ko = "promotedlink",
    Qo = "jag8CityBio212023",
    zo = "adblock_detection_complete",
    Jo = "adblock-element",
    Xo = "adblock-eyeo-element";

function Zo(e) {
    if (!document.body.contains(e)) {
        document.body.prepend(e);
        const o = t(e);
        return e.remove(), o
    }
    return t(e);

    function t(e) {
        if (["BODY", "HTML"].includes(e.tagName)) return !1;
        if (e.hidden || !document.body.contains(e)) return !0;
        const o = window.getComputedStyle(e);
        return "none" === o.display || "hidden" === o.visibility || !!e.parentElement && t(e.parentElement)
    }
}
async function en(e) {
    return new Promise((t => {
        const o = new Image;
        o.onerror = () => {
            t(!0)
        }, o.onload = () => {
            t(!1)
        }, o.src = e
    }))
}

function tn(e) {
    "enabled" === new URLSearchParams(window.location.search).get("adblock_detection_debug_mode") && console.debug("[adblock-detection] ", e)
}

function on() {
    const e = document.createElement("div");
    return e.style.width = "1px", e.style.position = "absolute", e.style.top = "0", e.style.left = "-1000px", e.style.display = "block", e
}
let nn, sn;
async function an() {
    return sn || async function() {
        return sn = async function() {
            await new Promise((e => requestAnimationFrame(e)));
            const e = performance.now(),
                t = () => {
                    tn(`The detection logic ran in ${(performance.now()-e).toFixed(3)}ms`)
                },
                o = Zo(function() {
                    const e = on();
                    return e.id = Xo, e.classList.add(Qo), e
                }());
            tn(o ? "❌ Eyeo bait element was blocked" : "✅ Eyeo bait element was not blocked");
            const n = async () => {
                const e = await en(jo);
                return tn(e ? "❌ Eyeo bait asset was blocked" : "✅ Eyeo bait asset was not blocked"), e
            };
            if (o || await n()) {
                const e = Zo(function() {
                    const e = on();
                    return e.className = Ko, e
                }());
                tn(e ? "❌ Eyeo acceptable ads element was blocked" : "✅ Eyeo acceptable ads element was not blocked"), t();
                const o = {
                    isAdblockEnabled: !0,
                    isAcceptableAdsEnabled: !e
                };
                return tn(`ℹ️ Final result: ${JSON.stringify(o)}`), o
            }
            const i = Zo(function() {
                const e = on();
                return e.id = Jo, e.classList.add("promoted"), e.dataset.beforeContent = "advertisement", e
            }());
            tn(i ? "❌ Easylist bait element was blocked" : "✅ Easylist bait element was not blocked");
            const s = async () => {
                const e = await en(function() {
                    const e = new URLSearchParams(window.location.search).get("adblock_bait_asset_domain");
                    if (e) {
                        const t = new URL(e);
                        return t.pathname = Yo, t.toString()
                    }
                    return `https://www.redditstatic.com/shreddit${Yo}`
                }());
                return tn(e ? "❌ Easylist bait asset was blocked" : "✅ Easylist bait asset was not blocked"), e
            }, a = i || await s();
            t();
            const r = {
                isAdblockEnabled: a,
                isAcceptableAdsEnabled: !a && void 0
            };
            return tn(`ℹ️ Final result: ${JSON.stringify(r)}`), r
        }(), nn = await sn, window.dispatchEvent(new Event(zo)), nn
    }()
}
const rn = ({
        noun: e,
        pageType: t
    }) => (e => e === Go.Embed)(t) ? dn(e) : e,
    dn = e => {
        switch (e) {
            case re.Screen:
            case re.App:
                return re.Embed;
            case re.Heartbeat:
                return re.EmbedHeartbeat;
            default:
                return e
        }
    },
    ln = {
        height: window?.screen.height,
        width: window?.screen.width
    },
    cn = ({
        success: e = !0,
        data: t,
        screenviewId: o,
        serverRenderId: n,
        triggerType: i = $o.Initial,
        hostPageType: s
    }) => {
        const {
            isAcceptableAdsEnabled: a,
            isAdblockEnabled: r
        } = nn || {
            isAdblockEnabled: !1,
            isAcceptableAdsEnabled: void 0
        }, d = !!window.matchMedia?.("(display-mode: standalone), (display-mode: minimal-ui)").matches;
        return Qe({
            source: de.Global,
            action: le.View,
            noun: rn({
                noun: re.Screen,
                pageType: s
            })
        }, {
            ...t,
            action_info: {
                ...t.action_info,
                success: e,
                trigger_type: i
            },
            request: {
                ...t.request,
                server_render_id: n
            },
            screenview_id: o,
            screen: ln,
            adblock: {
                enabled: r,
                acceptable_ads: a
            },
            ...d ? {
                pwa: {
                    installed: !0
                }
            } : {}
        })
    },
    un = ({
        reason: e,
        screenViewData: t,
        screenviewId: o,
        hostPageType: n
    }) => Qe({
        source: de.Global,
        action: le.Leave,
        noun: rn({
            noun: re.App,
            pageType: n
        })
    }, {
        ...t,
        action_info: {
            ...t.action_info,
            reason: e
        },
        screenview_id: o
    }),
    hn = (e, t, o) => Qe({
        source: de.Global,
        action: le.Drop,
        noun: re.EventBatch
    }, {
        ...e,
        dropped_data: {
            event_batch_size: o
        },
        action_info: {
            ...e.action_info,
            reason: t.toLowerCase()
        }
    });
var pn, mn;
! function(e) {
    e.Comments = "comments", e.CopyLink = "copy_link", e.HighlightTextComponent = "highlight_text_component", e.Replies = "replies", e.ProfileName = "profile_name", e.ProfileIcon = "profile_icon", e.PostTitle = "post_title", e.ReadMore = "read_more", e.RedditLogo = "reddit_logo", e.SubredditIcon = "subreddit_icon", e.SubredditName = "subreddit_name", e.Upvote = "upvote", e.ViewMore = "view_more", e.Whitespace = "whitespace", e.Members = "members_count", e.Online = "online_count", e.Media = "media", e.JoinCommunity = "join_community", e.ViewMoreMedia = "view_more_media", e.FullscreenMedia = "fullscreen_media"
}(pn || (pn = {})),
function(e) {
    e.Post = "Post", e.Comment = "Comment", e.Feed = "Feed", e.Snippet_Post = "Snippet_Post", e.Snippet_Comment = "Snippet_Comment"
}(mn || (mn = {}));
const gn = "embed-container",
    _n = "-embed-wrapper",
    fn = "blurred-overlay",
    vn = "embed-feed-post-",
    En = "embed-read-mode-overlay",
    bn = "embed-read-mode-overlay-hover";
var Sn;
! function(e) {
    e.Mobile = "mweb3x", e.Desktop = "web3x"
}(Sn || (Sn = {}));
const yn = Sn.Mobile,
    Cn = Object.values(Sn);
let Tn, An;
const In = () => {
        if (void 0 !== Tn) return Tn;
        const e = document.querySelector("shreddit-app");
        var t;
        return void 0 !== (t = e?.getAttribute("app-name") ?? void 0) && Cn.includes(t) ? Tn = t : (Tn = yn, window.Sentry?.captureMessage?.("`app-name`: Default app_name value was used")), Tn
    },
    Pn = () => {
        return void 0 !== An || (e = document.querySelector("shreddit-app")?.microAppName ?? void 0, An = void 0 !== e ? e : "unknown"), An;
        var e
    };
var wn, Rn = new Uint8Array(16);

function On() {
    if (!wn && !(wn = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return wn(Rn)
}
var Nn = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
for (var Mn, Dn = [], Ln = 0; Ln < 256; ++Ln) Dn.push((Ln + 256).toString(16).substr(1));

function Un(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        o = (Dn[e[t + 0]] + Dn[e[t + 1]] + Dn[e[t + 2]] + Dn[e[t + 3]] + "-" + Dn[e[t + 4]] + Dn[e[t + 5]] + "-" + Dn[e[t + 6]] + Dn[e[t + 7]] + "-" + Dn[e[t + 8]] + Dn[e[t + 9]] + "-" + Dn[e[t + 10]] + Dn[e[t + 11]] + Dn[e[t + 12]] + Dn[e[t + 13]] + Dn[e[t + 14]] + Dn[e[t + 15]]).toLowerCase();
    if (! function(e) {
            return "string" == typeof e && Nn.test(e)
        }(o)) throw TypeError("Stringified UUID is invalid");
    return o
}

function kn(e, t, o) {
    var n = (e = e || {}).random || (e.rng || On)();
    return n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, Un(n)
}! function(e) {
    e[e.TIER_ZERO = 0] = "TIER_ZERO", e[e.TIER_ONE = 1] = "TIER_ONE", e[e.DEFAULT = 2] = "DEFAULT"
}(Mn || (Mn = {}));
const xn = {
        source: "global",
        action: "view",
        noun: "screen"
    },
    Fn = e => {
        return o = xn, (t = e).source === o.source && t.action === o.action && t.noun === o.noun;
        var t, o
    },
    Bn = [{
        field: "source",
        validatePresence: !1
    }, {
        field: "action",
        validatePresence: !1
    }, {
        field: "noun",
        validatePresence: !1
    }, {
        field: "action_info",
        validatePresence: !1
    }, {
        field: "page_type",
        validatePresence: !0
    }, {
        field: "success",
        validatePresence: !1
    }, {
        field: "client_timestamp",
        validatePresence: !0
    }, {
        field: "referrer",
        validatePresence: !0
    }, {
        field: "url",
        validatePresence: !1
    }, {
        field: "domain",
        validatePresence: !1
    }, {
        field: "server_render_id",
        validatePresence: !0
    }, {
        field: "canonical_url",
        validatePresence: !1
    }, {
        field: "screenview_id",
        validatePresence: !0
    }, {
        field: "adblock",
        validatePresence: !0
    }, {
        field: "enabled",
        validatePresence: !0
    }],
    Vn = (e, t = Bn) => {
        if (e.includes(`"source":"${xn.source}"`) && e.includes(`"action":"${xn.action}"`) && e.includes(`"noun":"${xn.noun}"`)) {
            for (let o = 0; o < t.length; o++)
                if (!e.includes(t[o].field) || t[o].validatePresence && e.includes(`"${t[o].field}":""`)) return !1;
            return !0
        }
        return null
    },
    Gn = (e = "") => {
        let t = "",
            o = "";
        const n = e.split(".");
        if (n.length >= 3) {
            t = `t2_${n[0].replace(/\b0+/g,"")}`, o = n[2]
        }
        return {
            id: t,
            cookie_created_timestamp: parseInt(o, 10)
        }
    };

function Wn(e, t) {
    const o = function(e, t) {
            const o = Hn(e),
                n = $n(e);
            return o || n || (delete t.user_preferences?.language, delete t.platform?.language_list, delete t.platform?.primary_language, delete t.platform?.browser_name, delete t.platform?.browser_version, qn(e) || delete t.request?.edgebucket), t
        }(e, structuredClone(t)),
        n = {
            ...e,
            app: {
                ...o.app
            },
            user_preferences: {
                ...e.user_preferences,
                ...o.user_preferences
            },
            user: {
                ...e.user,
                ...o.user
            },
            request: {
                ...e.request,
                ...o.request
            },
            platform: {
                ...e.platform,
                ...o.platform
            },
            session: {
                ...e.session,
                ...o.session
            },
            uuid: kn()
        };
    return n.user_preferences && !Object.keys(n.user_preferences).length && (n.user_preferences = {}), n.platform && !Object.keys(n.platform).length && (n.platform = {}), Hn(e) && e.pwa?.installed && (n.platform.browser_name = "pwa"), n
}
const Hn = e => "global" === e?.source && "view" === e.action && "screen" === e.noun,
    qn = e => "experiment" === e?.source && "expose" === e.action,
    $n = (e = {}) => {
        const {
            source: t = "",
            action: o = "",
            noun: n = ""
        } = e;
        return "browser" === t && "observe" === o && "performance" === n || "client" === t && "record" === o && ["ttfb_fcp", "lcp", "inp", "cls", "total_page_load"].includes(n)
    },
    Yn = [Go.Embed];

function jn(e, t) {
    const o = Kn();
    return (jn = function(e, t) {
        return o[e -= 218]
    })(e, t)
}

function Kn() {
    const e = ["boolean", "119920xYjxDe", "null", "function", "prototype", "length", "19433860XyZCZD", "2OcqhWP", "6465375RkciUy", "join", "5159098yfrXyc", "lastIndex", "toJSON", "number", "push", "call", "hasOwnProperty", "15888XJmyQN", "2564076EfaRCc", "[object Array]", "0000", "319972ofQrhT", "object", "8vKIKRm", "stringify", "toString", "apply", "test", "608sJCtou"];
    return (Kn = function() {
        return e
    })()
}! function() {
    const e = jn,
        t = Kn();
    for (;;) try {
        if (448353 === parseInt(e(242)) / 1 * (-parseInt(e(227)) / 2) + parseInt(e(223)) / 3 * (parseInt(e(234)) / 4) + parseInt(e(236)) / 5 + parseInt(e(224)) / 6 + parseInt(e(245)) / 7 + -parseInt(e(229)) / 8 * (-parseInt(e(243)) / 9) + -parseInt(e(241)) / 10) break;
        t.push(t.shift())
    } catch (e) {
        t.push(t.shift())
    }
}();

function Qn() {
    const e = document.querySelector("shreddit-app")?.pageType;
    return e || void 0
}
const zn = ri;

function Jn() {
    const e = ["50528HPRqoB", "117Qfpune", "get", "v2-events-sent", "/svc/shreddit/", "csrf_token", "map", "token_csrf", "1798256HlrvQr", "same-origin", "getAttribute", "Invalid len argument supplied. Must be greater than ", "no-resolve", "info", "post", "ctn", '"page_type":"', "force-refresh", "other_error", "basic", "1476004yDgRGN", "type", "hasAttribute", "headers", "development", "1112394RoDpWM", "dispatchEvent", "2920632NImQPR", "An error: ", "some", "floor", "slice", "13920gYHbnJ", "function", "shreddit-app", "push", "underCachingExperiment", "2385400MqtCgH", "production", "includes", "length", "text/PLAIN", "has", "stringify", "random", "105ijFBmO", "shouldNotRetryIfFail", "parse", "querySelector", "boolean", "resolvePendingRequests", "disable-send-beacon", "nowSendingDropEvent", "find", "sendBeacon", "1074aCuAwP", "join"];
    return (Jn = function() {
        return e
    })()
}! function() {
    const e = ri,
        t = Jn();
    for (;;) try {
        if (576080 === parseInt(e(228)) / 1 + parseInt(e(223)) / 2 + parseInt(e(230)) / 3 + parseInt(e(211)) / 4 + parseInt(e(235)) / 5 * (parseInt(e(201)) / 6) + parseInt(e(191)) / 7 * (-parseInt(e(203)) / 8) + -parseInt(e(204)) / 9 * (parseInt(e(240)) / 10)) break;
        t.push(t.shift())
    } catch (e) {
        t.push(t.shift())
    }
}();
const Xn = (() => {
    const e = jn,
        t = {},
        o = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    let n, i, s, a;

    function r(e) {
        const t = jn;
        return o[t(246)] = 0, o[t(233)](e) ? '"' + e.replace(o, (function(e) {
            const o = t,
                n = s[e];
            return "string" == typeof n ? n : "\\u" + (o(226) + e.charCodeAt(0)[o(231)](16)).slice(-4)
        })) + '"' : '"' + e + '"'
    }

    function d(e, t) {
        const o = jn;
        let s, l, c, u;
        const h = n;
        let p, m = t[e];
        switch (m && typeof m === o(228) && typeof m[o(218)] === o(238) && (m = m[o(218)](e)), typeof a === o(238) && (m = a[o(221)](t, e, m)), typeof m) {
            case "string":
                return r(m);
            case o(219):
                return isFinite(m) ? String(m) : o(237);
            case o(235):
            case o(237):
                return String(m);
            case o(228):
                if (!m) return o(237);
                if (n += i, p = [], Object.prototype[o(231)][o(232)](m) === o(225)) {
                    for (u = m.length, s = 0; s < u; s += 1) p[s] = d(s, m) || o(237);
                    return c = 0 === p[o(240)] ? "[]" : n ? "[\n" + n + p[o(244)](",\n" + n) + "\n" + h + "]" : "[" + p.join(",") + "]", n = h, c
                }
                if (a && typeof a === o(228))
                    for (u = a.length, s = 0; s < u; s += 1) "string" == typeof a[s] && (l = a[s], c = d(l, m), c && p[o(220)](r(l) + (n ? ": " : ":") + c));
                else
                    for (l in m) Object[o(239)][o(222)][o(221)](m, l) && (c = d(l, m), c && p[o(220)](r(l) + (n ? ": " : ":") + c));
                return c = 0 === p[o(240)] ? "{}" : n ? "{\n" + n + p[o(244)](",\n" + n) + "\n" + h + "}" : "{" + p.join(",") + "}", n = h, c
        }
    }
    return typeof t[e(230)] !== e(238) && (s = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    }, t[e(230)] = function(t, o, s) {
        const r = e;
        let l;
        if (n = "", i = "", typeof s === r(219))
            for (l = 0; l < s; l += 1) i += " ";
        else "string" == typeof s && (i = s);
        if (a = o, o && typeof o !== r(238) && (typeof o !== r(228) || typeof o[r(240)] !== r(219))) throw new Error("GSON.stringify");
        return d("", {
            "": t
        })
    }), t
})();
let Zn = [];
let ei;
const ti = () => {
        const e = ri;
        return !ei && (ei = document[e(194)](e(237))), ei
    },
    oi = async ({
        eventsBuffer: e,
        errorText: t,
        v2EventsRoute: o
    }) => {
        const n = ri;
        if (!e[n(243)]) return !0;
        const i = {
                v2EventsRoute: o,
                options: {
                    nowSendingDropEvent: !0,
                    shouldNotRetryIfFail: !0
                }
            },
            s = t ?? n(221);
        return 1 === e.length ? await mi({
            ...i,
            eventsBuffer: [(a = e[0], r = s, Qe({
                source: de.Global,
                action: le.Drop,
                noun: re.Event
            }, {
                ...a,
                dropped_data: {
                    event_source: a.source,
                    event_action: a.action,
                    event_noun: a.noun,
                    event_batch_size: 1
                },
                action_info: {
                    ...a.action_info,
                    reason: r.toLowerCase()
                }
            }))]
        }) : await mi({
            ...i,
            eventsBuffer: [hn(e[0], s, e[n(243)])]
        });
        var a, r
    }, ni = async ({
        url: e,
        eventsBuffer: t
    }) => {
        const o = ri,
            n = document.querySelector("shreddit-app")?.[o(213)](o(218)) ?? o(210),
            i = wo[o(205)](o(208)) ?? "",
            s = {
                [n]: i,
                info: t
            },
            a = Xn[o(189)](s);
        return navigator[o(200)](e, a), !0
    }, ii = async ({
        url: e,
        eventsBuffer: t,
        microapp: o,
        options: n
    }) => {
        const i = ri,
            s = document.querySelector("shreddit-app")?.getAttribute("ctn") ?? i(210),
            a = wo.get("csrf_token") ?? "",
            r = {
                [s]: a,
                info: t
            },
            d = Xn[i(189)](r);
        let l;
        try {
            l = await fetch(e, {
                body: d,
                headers: {
                    "Content-Type": i(187),
                    "x-sh-microapp-route": o || "monolith"
                },
                keepalive: !0,
                method: i(217),
                credentials: i(212)
            })
        } catch (o) {
            return !n?.[i(239)] && (n?.[i(192)] ? !n?.[i(198)] && await oi({
                eventsBuffer: t,
                errorText: i(231) + o,
                v2EventsRoute: e
            }) : await mi({
                eventsBuffer: t,
                v2EventsRoute: e,
                options: {
                    shouldNotRetryIfFail: !0
                }
            }), !0)
        }
        if (l?.ok) {
            const e = (e => {
                const t = ri,
                    o = JSON[t(193)](e),
                    n = o?.[t(216)],
                    i = n[t(199)](Fn);
                if (!i) return !1;
                const s = Xn.stringify(i);
                return !!Zn[t(232)]((e => Xn[t(189)](e) === s)) || (Zn.length > 100 ? Zn = [] : Zn[t(238)](i), !1)
            })(d);
            l[i(224)] === i(222) && l[i(226)][i(188)](ce) && Vn(d) && (e => {
                const t = ri;
                return e[t(242)](t(219) + Qn() + '"')
            })(d) && !e ? (ti()?.[i(196)](), window[i(229)](new CustomEvent(i(220)))) : i(241) === i(227) && null !== Vn(d) && window.dispatchEvent(new CustomEvent(i(215), {
                detail: {
                    correctResponseType: l[i(224)] === i(222),
                    correctHeaders: l.headers[i(188)](ce),
                    correctStringifiedEvents: Vn(d),
                    hasSeenIdentiticalGVSEvent: e
                }
            })), e && (ti()?.pauseIncomingRequests(), "development" === i(241) && window[i(229)](new CustomEvent("no-resolve", {
                detail: {
                    hasSeenIdentiticalGVSEvent: e
                }
            })));
            const t = l.headers[i(205)]("x-set-loid") || void 0,
                o = l.headers[i(205)]("x-set-session") || void 0;
            window[i(229)](new CustomEvent(i(206), {
                detail: {
                    loid: t,
                    session_tracker: o
                }
            }))
        } else if (!n?.[i(198)]) return await oi({
            eventsBuffer: t,
            errorText: "HTTP Response Code: " + l?.status,
            v2EventsRoute: e
        });
        return !0
    };
let si;
const ai = () => {
    const e = ri;
    return typeof si === e(195) || (t = document[e(194)]("shreddit-app")?.[e(225)](e(197)) ?? !1, si = t), si;
    var t
};

function ri(e, t) {
    const o = Jn();
    return (ri = function(e, t) {
        return o[e -= 187]
    })(e, t)
}
const di = (e, t) => Math[zn(233)](Math[zn(190)]() * (t - e) + e),
    li = (e, t, o) => "" + e[zn(234)](0, o) + t + e[zn(234)](o),
    ci = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    ui = "/!",
    hi = () => ci[Math[zn(233)](62 * Math[zn(190)]())],
    pi = zn(207) + (e => {
        const t = zn;
        if (e <= ui[t(243)]) throw new Error(t(214) + ui[t(243)]);
        let o = [...Array(e - ui[t(243)])][t(209)](hi)[t(202)]("");
        return o = li(o, ui[0], Math[t(233)](o[t(243)] / 2)), o = li(o, ui[1], di(0, o[t(243)] - 1)), o
    })(di(15, 25)),
    mi = async ({
        eventsBuffer: e,
        v2EventsRoute: t,
        options: o
    }) => {
        const n = (() => {
            const e = ri;
            return "function" != typeof navigator[e(200)] || ai() ? typeof fetch === e(236) ? ii : void 0 : ni
        })();
        return void 0 === n || await n({
            url: t || pi,
            eventsBuffer: e,
            microapp: Pn(),
            options: o
        })
    };
var gi;
! function(e) {
    e.AdRefocusStart = "time-before-unfocus", e.LastClickedAdId = "last-clicked-ad-id", e.ImpressionId = "last-clicked-impression-id", e.RecentPages = "recent-subreddits-store", e.RecentCommunities = "recent-communities-store", e.FeatureTestLocalStorageKey = "🤘shreddit_local_storage_feature_test🤘", e.DisclaimerStore = "disclaimer_store", e.AmaPostCreationModalDismissed = "ama-post-creation-modal-dismissed", e.AmaReminderTooltipShown = "ama-reminder-tooltip-shown", e.GoodVisit = "good-visit-status", e.GoodVisitFS = "good-visit-feeds-search", e.GoodVisitKLP = "good-visit-klp", e.GoodVisitGuides = "good-visit-guides", e.GoodVisitInbox = "good-visit-inbox", e.ModalBlocking = "modal-blocking-status", e.XpromoEducationalDeeplinkPrompt = "xpromo-educational-deeplink-prompt", e.AdEvents = "ad-events", e.AdUserTargeting = "ad-user-targeting", e.Follow = "follow_store", e.RecentSearches = "recent-searches-store", e.NsfwTypeaheadExpanded = "nsfw_typeahead_expanded", e.SearchTypeaheadExpanded = "search-typeahead-expanded", e.EventsBuffer = "events-buffer", e.LoginTime = "login-time", e.ModQueuePreferencesExpandReports = "mod-queue-preferences-expand-reports", e.AchievementsStore = "achievements-store", e.AchievementsUpdatesEnabled = "achievements-updates-enabled", e.ModActivityCardsCollapseState = "activity-cards-collapse-state", e.ModInsightsCardCollapseState = "insights-card-collapse-state", e.TeamFlairSelectionIsShown = "team-flair-selection-is-shown", e.ModNavState = "mod-nav-state", e.ModActivityPanelState = "mod-activity-panel-state", e.ModUserSummaryFeedback = "mod-user-summary-feedback", e.ModQueueTutorial = "mod-queue-tutorial", e.I18nPostTranslationBanner = "i18n-post-translation-banner", e.I18nTranslationInterventionShown = "i18n-translation-intervention-shown", e.AwardAnonymously = "award-anonymously", e.TranslationInitialized = "translation_initialized", e.RemovalReasonDontNotifyDismissed = "removal-reason-dont-notify-dismissed", e.ModQueueSafetyBannerState = "mod-queue-safety-banner-state-ban-evasion-modmail", e.MomentsShownXpromos = "moments-shown-xpromos", e.AdPlacement = "AdPlacement", e.ForceRefresh = "force-refresh", e.PostStatsCoachMarkSeen = "post-stats-coachmark", e.CommunitySubscriptionFtue = "community-subscription-ftue", e.WikiEditWelcomeMessage = "wiki-edit-welcome-message", e.ProfileSSREducation = "profile-ssr-education", e.ProfileSSRMiddleStateSeenCount = "profile-ssr-middle-state-seen-count", e.ProfileSSRMiddleStateLastSeenDate = "profile-ssr-middle-state-last-seen-date", e.DraftsCoachMarkSeen = "drafts-page-coachmark", e.CrosspostingUpsellExperiment = "crossposting-upsell-experiment", e.RedditProDesktopNudge = "reddit-pro-desktop-nudge"
}(gi || (gi = {}));
const _i = new class {
    getStorage() {
        try {
            return window.localStorage
        } catch (e) {
            return
        }
    }
    clear() {
        this.getStorage()?.clear()
    }
    getItem(e) {
        return this.getStorage()?.getItem(e) || null
    }
    removeItem(e) {
        this.getStorage()?.removeItem(e)
    }
    setItem(e, t) {
        this.getStorage()?.setItem(e, t)
    }
    isAvailable() {
        try {
            this.setItem(gi.FeatureTestLocalStorageKey, "yes");
            const e = "yes" === this.getItem(gi.FeatureTestLocalStorageKey);
            return this.removeItem(gi.FeatureTestLocalStorageKey), e
        } catch {
            return !1
        }
    }
};
class fi {
    constructor(e) {
        let t;
        this.key = e;
        const o = _i.getItem(e);
        if (null == o) t = [];
        else try {
            t = function(e) {
                if (!Array.isArray(e)) throw new Error;
                const t = e;
                return t.forEach((e => {
                    if ("string" != typeof e) throw new Error
                })), t
            }(JSON.parse(o))
        } catch (e) {
            t = []
        }
        this.valuesSet = new Set(t)
    }
    hasValue(e) {
        return this.valuesSet.has(e)
    }
    setValue(e) {
        if (this.valuesSet.size >= fi.MAX_SET_SIZE) return !1;
        return !this.valuesSet.has(e) && (this.valuesSet.add(e), this._persist(), !0)
    }
    removeValue(e) {
        const t = this.valuesSet.delete(e);
        return t && this._persist(), t
    }
    _persist() {
        const e = JSON.stringify([...this.valuesSet]);
        _i.setItem(this.key, e)
    }
}
fi.MAX_SET_SIZE = 50;
let vi, Ei, bi = [];
const Si = new Set(["global__view__screen", "global__view__embed", "global__leave__app", "post_detail__click__comments", "post_detail__click__post", "global__view__heartbeat", "post__view__comments", "post__consume__comments"]);

function yi(e, t) {
    if (bi.push(e), (e => {
            if (!e) return !1;
            const {
                source: t,
                action: o,
                noun: n
            } = e, i = `${t}__${o}__${n}`;
            return Si.has(i)
        })(e)) {
        const e = bi.slice();
        bi = [], Ci(e, t)
    } else if (bi.length >= 40) {
        const e = bi.slice();
        bi = [], Ci(e, t)
    } else vi || (vi = setTimeout((() => {
        const e = bi.slice();
        bi = [], Ci(e, t)
    }), 3e3))
}

function Ci(e, t) {
    ! function() {
        vi && clearTimeout(vi);
        vi = void 0
    }(), Pi() ? async function(e, t) {
        const o = await mi({
            eventsBuffer: e,
            v2EventsRoute: t,
            options: {
                underCachingExperiment: !0
            }
        });
        if (!_i.isAvailable()) return;
        const n = JSON.parse(_i.getItem(gi.EventsBuffer) ?? "[]");
        if (o) n.length && Ai(t);
        else {
            n.push(e);
            try {
                _i.setItem(gi.EventsBuffer, JSON.stringify(n))
            } catch (e) {
                return
            }
            Ai(t)
        }
    }(e, t): mi({
        eventsBuffer: e,
        v2EventsRoute: t
    })
}

function Ti(e) {
    const t = bi.slice();
    bi = [], t.length > 0 && Ci(t, e)
}

function Ai(e) {
    Ei || (Ei = setTimeout((() => {
        !async function(e) {
            if (function() {
                    Ei && clearTimeout(Ei);
                    Ei = void 0
                }(), !_i.isAvailable()) return;
            const t = JSON.parse(_i.getItem(gi.EventsBuffer) ?? "[]");
            for (; t.length > 0;) {
                if (!await mi({
                        eventsBuffer: t[0],
                        v2EventsRoute: e,
                        options: {
                            underCachingExperiment: !0
                        }
                    })) return void Ai(e);
                t.shift();
                try {
                    _i.setItem(gi.EventsBuffer, JSON.stringify(t))
                } catch (e) {
                    continue
                }
            }
        }(e)
    }), 3e3))
}
let Ii;
const Pi = () => {
        return "boolean" == typeof Ii || (e = document.querySelector("shreddit-app")?.hasAttribute("use-local-storage-events-caching") ?? !1, Ii = e), Ii;
        var e
    },
    wi = "nav",
    Ri = e => () => Qe({
        source: wi,
        action: "click",
        noun: e
    }),
    Oi = (e, t) => () => Qe({
        source: wi,
        action: "click",
        noun: e,
        subreddit: t ? {
            name: t
        } : void 0
    }),
    Ni = Ri("wordmark"),
    Mi = Ri("user"),
    Di = Ri("search_opened"),
    Li = Ri("search_closed"),
    Ui = "hamburger_menu",
    ki = () => Qe({
        source: wi,
        action: "open",
        noun: Ui
    }),
    xi = () => Qe({
        source: wi,
        action: "close",
        noun: Ui
    }),
    Fi = "user_drawer",
    Bi = () => Qe({
        source: wi,
        action: "open",
        noun: Fi
    }),
    Vi = () => Qe({
        source: wi,
        action: "close",
        noun: Fi
    }),
    Gi = e => Oi("recent_page_name_menu", e)();
class Wi extends Mt {
    constructor(e, t) {
        super(e), this.events = new x(this, (() => window)), this.getCommonLabels = t, this.events.define("w3-report", (e => {
            this.sendReport(e.detail)
        })), this.events.define("track-event", (e => {
            this.handleEvent(e.detail.details)
        })), this.events.define("faceplate-track", (e => {
            this.handleEvent(e.detail)
        }))
    }
    async getW3ReportSender() {
        return (await Promise.resolve().then((function() {
            return Xa
        }))).w3Report
    }
    async sendReport(e) {
        (await this.getW3ReportSender())({
            ...e,
            labels: {
                ...this.getCommonLabels?.(),
                ...e.labels
            }
        })
    }
    async getV2EventConverter() {
        return (await import("./w3-report-from-v2-event-d69c31fe.js")).getW3ReportsFromV2Event
    }
    async handleEvent(e) {
        const t = (await this.getV2EventConverter())(e);
        t && t.forEach((e => this.sendReport(e)))
    }
}
var Hi, qi;
! function(e) {
    e.Standard = "hidden", e.Webkit = "webkitHidden"
}(Hi || (Hi = {})),
function(e) {
    e.hidden = "visibilitychange", e.webkitHidden = "webkitvisibilitychange", e.mozHidden = "mozvisibilitychange", e.msHidden = "msvisibilitychange"
}(qi || (qi = {}));
const $i = Object.keys(qi),
    Yi = {
        initialized: !1,
        visibilityCallbacks: new Array
    },
    ji = () => {},
    Ki = $i.find((e => void 0 !== document[e]));
var Qi = (e = ji, t = {
    immediate: !1
}) => {
    const o = Yi.visibilityCallbacks.length;
    return Yi.visibilityCallbacks.includes(e) || (t.shouldBeCalledFirst ? Yi.visibilityCallbacks.unshift(e) : Yi.visibilityCallbacks.push(e)), !Yi.initialized && Ki && (Yi.initialized = !0, document.addEventListener(qi[Ki], (() => {
        const e = !document[Ki];
        Yi.visibilityCallbacks.forEach((t => t(e)))
    })), t.immediate && e(!document[Ki])), t.resetInit && (Yi.initialized = !1), o < Yi.visibilityCallbacks.length
};
const zi = e => {
    const t = Yi.visibilityCallbacks.length,
        o = Yi.visibilityCallbacks.indexOf(e);
    return -1 !== o && Yi.visibilityCallbacks.splice(o, 1), t > Yi.visibilityCallbacks.length
};
let Ji = !1;
const Xi = e => {
        const t = _i.getItem(gi.AdRefocusStart),
            o = _i.getItem(gi.LastClickedAdId),
            n = _i.getItem(gi.ImpressionId),
            i = _i.getItem(gi.AdPlacement);
        if (t && o && n) {
            e(((e, t, o, n) => Qe({
                source: "post",
                action: "refocus",
                noun: "ad"
            }, {
                post: e,
                ad_click: {
                    landing_page_duration: Math.min(t, 2 ** 31 - 1)
                },
                ad_metadata: {
                    impression_id: o,
                    placement: n
                }
            }))({
                id: o
            }, Math.round(performance.now() - parseFloat(t)), n, i))
        }(t || o || n) && (_i.removeItem(gi.AdRefocusStart), _i.removeItem(gi.LastClickedAdId), _i.removeItem(gi.ImpressionId), _i.removeItem(gi.AdPlacement))
    },
    Zi = () => document.querySelector("shreddit-app")?.serverRenderId;

function es(e) {
    return e?.toLowerCase() || ""
}

function ts(e, t) {
    return function(e, t) {
        return /(iPad)/i.test(es(e)) || /(Mac)/i.test(es(e)) && t && t > 1
    }(e, t) || /(iPhone|iPod)/i.test(es(e))
}

function os(e) {
    return ! function(e) {
        return (e = es(e)).includes("chrome") || e.includes("crios")
    }(e) && ! function(e) {
        return es(e).includes("edg")
    }(e) && ! function(e) {
        return (e = es(e)).includes("firefox") || e.includes("fxios")
    }(e) && (es(e).includes("safari") || ts(e))
}

function ns(e, t) {
    return ts(e, t) || os(e)
}
const is = "correlationId",
    ss = "feedCorrelationId",
    as = "store-correlation-id",
    rs = "store-feed-correlation-id";
let ds = window.location;
const ls = e => new Date(e).getTime() || void 0,
    cs = () => window.navigator && window.navigator.userAgent.toLowerCase() || "";

function us(e) {
    return e instanceof PointerEvent || e instanceof MouseEvent || "Enter" === e.key || "Space" === e.key
}

function hs(e) {
    e.preventDefault(), e.stopPropagation()
}

function ps() {
    const e = document.querySelector("shreddit-app");
    e?.dispatchEvent(new CustomEvent(as))
}
let ms = !1;
const gs = [],
    _s = [],
    fs = ts(cs(), window.navigator?.maxTouchPoints) ? "pagehide" : "beforeunload",
    vs = (e, t) => {
        const o = e.length,
            n = e.indexOf(t);
        return -1 !== n && e.splice(n, 1), o > e.length
    },
    Es = {
        unsubscribe(e) {
            const t = vs(gs, e),
                o = vs(_s, e);
            return t || o
        },
        subscribe(e = () => {}, t = {}) {
            const o = gs.length,
                n = _s.length,
                i = t.shouldBeCalledFirst ? "unshift" : "push";
            return gs.includes(e) || gs[i](e), t.unloadOnly || _s.includes(e) || _s[i](e), ms || (ms = !0, window.addEventListener(fs, (() => {
                gs.forEach((e => e()))
            })), window.addEventListener("beforeRoute", (() => {
                _s.forEach((e => e()))
            }))), o < gs.length || n < _s.length
        },
        eventType: fs
    },
    bs = "over18",
    Ss = "search_over18",
    ys = "pref_gated_sr_optin",
    Cs = "pref_quarantine_optin",
    Ts = "theme",
    As = "mod_queue_compact",
    Is = {
        expires: 365,
        httpOnly: !1
    },
    Ps = "eu_cookie",
    ws = {
        expires: 730,
        httpOnly: !1
    },
    Rs = "compact",
    Os = "mod_mode_enabled",
    Ns = e => `${e}_recentclicks3`,
    Ms = "reddit_translation_status",
    Ds = "reddit_chat_view",
    Ls = "reddit_chat_path",
    Us = "reddit_chat_right_rail_upsell",
    ks = "reddit_chat_subreddit_feed_upsell",
    xs = "reddit_chat_dimension",
    Fs = "prefers_reduced_motion",
    Bs = "is_video_autoplay_disabled",
    Vs = "prefers_reduced_motion_sync";

function Gs(e, t) {
    const [o, n] = e.split("?"), i = new URLSearchParams(n);
    return i.delete(t), i.toString() ? o + "?" + i.toString() : o
}

function Ws(e, t, o) {
    if (!t || !o) return e;
    const [n, i] = e.split("?"), s = new URLSearchParams(i);
    return s.set(t, o), n + "?" + s.toString()
}
const Hs = {
        shouldDisplayCoachmark: !0,
        shouldDisplayFeedbackCoachmark: !1,
        coachmarkDisplayCount: 0,
        showCommentTranslationModal: !0,
        showPostTranslationModal: !0
    },
    qs = ["kn-IN", "ml-IN", "mr-IN", "ta-IN", "te-IN"],
    $s = ["cs-CZ", "da-DK", "el-GR", "fi-FI", "hu-HU", "id-ID", "nb-NO", "ru-RU", "sr-RS", "ta-IN", "tr-TR", "uk-UA", "zh-CN", "zh-TW"],
    Ys = ["bn-IN", "de-DE", "en-US", "es-ES", "es-MX", "fil-PH", "fr-FR", "hi-IN", "it-IT", "ms-MY", "nl-NL", "pseudo", "pl-PL", "pt-BR", "pt-PT", "sv-SE", "ro-RO", "th-TH", "vi-VN", ...$s, ...qs, ...Object.keys({
        "kn-IN-test-i18n": "kn-IN",
        "ml-IN-test-i18n": "ml-IN",
        "mr-IN-test-i18n": "mr-IN",
        "ta-IN-test-i18n": "ta-IN",
        "te-IN-test-i18n": "te-IN"
    })];
Object.fromEntries(qs.map((e => [e, e]))), Object.fromEntries($s.map((e => [e, e])));
const js = Object.fromEntries(Ys.map((e => [e, e]))),
    Ks = "i18n-translation-error",
    Qs = "i18n-translation-empty";
var zs, Js, Xs, Zs;
! function(e) {
    e.ENABLED = "enabled", e.DISABLED = "disabled"
}(zs || (zs = {})),
function(e) {
    e.GetOriginal = "get-original", e.GetTranslation = "get-translation"
}(Js || (Js = {})),
function(e) {
    e.Title = "title", e.TitleBody = "title-body"
}(Xs || (Xs = {})),
function(e) {
    e[e.Posts = 0] = "Posts", e[e.Comments = 1] = "Comments", e[e.Communities = 2] = "Communities"
}(Zs || (Zs = {}));
const ea = {
        DATA_MT_TYPE: "data-mt-type",
        IMG: "img",
        INNER_HTML: "innerHTML",
        TEXT_CONTENT: "textContent"
    },
    ta = "i18n-post-media-img",
    oa = "i18n-give-post-feedback",
    na = "i18n-give-comment-feedback",
    ia = "i18n-component-ready",
    sa = {
        ID: {
            FEEDBACK_MODAL: "feedback-modal",
            FEED_POST_FEEDBACK_MODAL: "feed-post-translator-feedback-modal",
            PDP_POST_FEEDBACK_MODAL: "pdp-post-translator-feedback-modal",
            PDP_COMMENT_FEEDBACK_MODAL: "pdp-comment-feedback-modal"
        },
        CLASS: {}
    },
    aa = "translated-post-changed",
    ra = "translated-comments-changed",
    da = "translated-posts-changed";
var la, ca, ua;
! function(e) {
    e.Translated = "translated", e.Untranslated = "untranslated", e.None = ""
}(la || (la = {})),
function(e) {
    e.PageLoad = "page_load", e.ToggleChange = "toggle_change", e.Pagination = "pagination", e.LoadMore = "load_more"
}(ca || (ca = {})),
function(e) {
    e.MtSeoBot = "mt_seo_crawler", e.MtSeoUser = "mt_seo", e.UserNav = "user_navigation"
}(ua || (ua = {}));
const ha = "off",
    pa = "on",
    ma = {
        CONTROL: "control",
        NO_INDICATORS: "no_indicators",
        ALL_AUTOMATIC_BANNER: "all_automatic_banner",
        ALL_MANUAL_BANNER: "all_manual_banner",
        ALL_MANUAL_BANNER_INTERVENTION: "all_manual_banner_intervention"
    },
    ga = "show",
    _a = "original";

function fa(e, t, o) {
    const [n, i] = e ? e.split("?") : "", s = new URLSearchParams(i);
    return t ? (s.set("translated", "1"), o && s.set("pretranslation_language", o)) : (s.delete("translated"), o && s.delete("pretranslation_language")), s.toString() ? n + "?" + decodeURIComponent(s.toString()) : n
}

function va(e, t) {
    const o = document.querySelector("faceplate-partial#top-level-more-comments-partial"),
        n = o?.getAttribute("src");
    if (o && n) {
        const i = fa(n, e, t);
        o.setAttribute("src", i)
    }
    const i = document.querySelectorAll('faceplate-partial[src*="more-comments"]');
    i?.forEach((o => {
        const n = o.getAttribute("src");
        if (n) {
            const i = fa(n, e, t);
            o.setAttribute("src", i)
        }
    }))
}

function Ea(e) {
    const t = document.querySelectorAll('faceplate-partial[src*="edit-comment"]');
    t?.forEach((t => {
        let o = t.getAttribute("src");
        o && (o = e ? Ws(o, "isTranslated", "true") : Gs(o, "isTranslated"), t.setAttribute("src", o))
    }))
}

function ba(e) {
    try {
        const t = JSON.parse(decodeURIComponent(e));
        if ((e => {
                const t = e;
                return !(!t || "object" != typeof t || void 0 !== t.isTranslationActive && "boolean" != typeof t.isTranslationActive || "boolean" != typeof t.shouldDisplayCoachmark || "number" != typeof t.coachmarkDisplayCount || void 0 !== t.isSearchTranslationsEnabled && "boolean" != typeof t.isSearchTranslationsEnabled || void 0 !== t.showCommentTranslationModal && "boolean" != typeof t.showCommentTranslationModal || void 0 !== t.showPostTranslationModal && "boolean" != typeof t.showPostTranslationModal)
            })(t)) return t
    } catch (e) {}
    return null
}

function Sa(e) {
    return `${e}-post-rtjson-content`
}
const ya = (e, t, o, n) => {
        t = t.trim();
        const i = "" === (o = o.trim()),
            s = "" === t,
            a = t !== o,
            r = s && i,
            d = t === o && !i;
        return e ? !1 === n ? la.Untranslated : !0 !== n || i ? d ? la.Untranslated : !i && s ? la.Translated : i && !s ? la.Untranslated : a || r ? la.Translated : la.None : la.Translated : la.Untranslated
    },
    Ca = {
        withPosts: new Set([Go.Community, Go.Home, Go.Popular, Go.All]),
        withPost: new Set([Go.PostDetail]),
        withComments: new Set([Go.PostDetail])
    },
    Ta = e => {
        const t = {
            totalPostsInPage: e.length,
            postsWithTranslatedTitle: 0,
            postsWithUntranslatedTitle: 0,
            postsWithTranslatedBody: 0,
            postsWithUntranslatedBody: 0,
            translatablePosts: 0,
            allPostTitlesUntranslated: !1,
            allPostTitlesTranslated: !1,
            allPostBodiesUntranslated: !1,
            allPostBodiesTranslated: !1,
            translatableIds: [],
            translatedIds: [],
            untranslatedIds: [],
            translatedImages: 0,
            untranslatedImages: 0
        };
        return e.forEach((e => {
            if (!e || !e.id) return;
            const o = e?.titleState === la.Translated,
                n = e?.bodyState === la.Translated,
                i = e?.titleState === la.Untranslated,
                s = e?.bodyState === la.Untranslated,
                a = !e?.hasBody || n;
            e.isTranslatable && (void 0 !== t.translatablePosts && t.translatablePosts++, t.translatableIds && t.translatableIds.push(e.id)), o && void 0 !== t.postsWithTranslatedTitle && t.postsWithTranslatedTitle++, i && void 0 !== t.postsWithUntranslatedTitle && t.postsWithUntranslatedTitle++, n && void 0 !== t.postsWithTranslatedBody && t.postsWithTranslatedBody++, s && void 0 !== t.postsWithUntranslatedBody && t.postsWithUntranslatedBody++, o && a ? t.translatedIds && t.translatedIds.push(e.id) : t.untranslatedIds && t.untranslatedIds.push(e.id)
        })), t.allPostTitlesTranslated = !!t.translatablePosts && t.postsWithTranslatedTitle === t.translatablePosts, t.allPostBodiesTranslated = !!t.translatablePosts && t.postsWithTranslatedBody === t.translatablePosts, t.allPostTitlesUntranslated = t.postsWithUntranslatedTitle === e.length, t.allPostBodiesUntranslated = t.postsWithUntranslatedBody === e.length, t
    },
    Aa = e => {
        const t = ya(e.translationSetting, e.originalTitle, e.translatedTitle, e.isTitleTranslated),
            o = ya(e.translationSetting, e.originalBody, e.translatedBody, e.isBodyTranslated);
        return {
            id: e.postId,
            hasBody: "" !== e.originalBody || "" !== e.translatedBody,
            postType: e.postType,
            titleState: t,
            bodyState: o,
            isTranslatable: e.isTranslatable,
            translatedImages: 0,
            untranslatedImages: 0
        }
    },
    Ia = (e, t) => {
        let o = 0,
            n = 0,
            i = 0;
        const s = [],
            a = [],
            r = [];
        return t.length && Array.from(t).filter((t => {
            const {
                id: d,
                originalBody: l,
                translatedBody: c,
                isTranslated: u,
                isTranslatable: h
            } = t, p = ya(e, l, c, u);
            p === la.Untranslated && (o++, r.push(d)), p === la.Translated && (n++, a.push(d)), h && (i++, s.push(d))
        })), {
            totalCommentsInPage: t.length,
            translatedComments: n,
            untranslatedComments: o,
            translatableComments: i,
            translatedIds: a,
            untranslatedIds: r,
            translatableIds: s,
            allCommentsTranslated: n === i && i > 0,
            allCommentsUntranslated: o === t.length
        }
    },
    Pa = e => ({
        load_type: e.loadType,
        scenario: e.scenario,
        translation_setting_state: e.translationSettingState,
        target_language: e.targetLanguage,
        post: e.post ? {
            id: e.post.id,
            has_body: e.post.hasBody,
            post_type: e.post.postType,
            title_state: e.post.titleState,
            body_state: e.post.bodyState,
            is_translatable: e.post.isTranslatable,
            translated_images: e.post.translatedImages,
            untranslated_images: e.post.untranslatedImages
        } : void 0,
        comments: e.comments ? {
            total_comments_in_page: e.comments.totalCommentsInPage,
            translated_comments: e.comments.translatedComments,
            untranslated_comments: e.comments.untranslatedComments,
            translatable_comments: e.comments.translatableComments,
            all_comments_translated: e.comments.allCommentsTranslated,
            all_comments_untranslated: e.comments.allCommentsUntranslated,
            translatable_ids: e.comments.translatableIds,
            translated_ids: e.comments.translatedIds,
            untranslated_ids: e.comments.untranslatedIds
        } : void 0,
        posts: e.posts ? {
            total_posts_in_page: e.posts.totalPostsInPage,
            posts_with_translated_title: e.posts.postsWithTranslatedTitle,
            posts_with_untranslated_title: e.posts.postsWithUntranslatedTitle,
            posts_with_translated_body: e.posts.postsWithTranslatedBody,
            posts_with_untranslated_body: e.posts.postsWithUntranslatedBody,
            translatable_posts: e.posts.translatablePosts,
            all_post_titles_untranslated: e.posts.allPostTitlesUntranslated,
            all_post_titles_translated: e.posts.allPostTitlesTranslated,
            all_post_bodies_untranslated: e.posts.allPostBodiesUntranslated,
            all_post_bodies_translated: e.posts.allPostBodiesTranslated,
            translatable_ids: e.posts.translatableIds,
            translated_ids: e.posts.translatedIds,
            untranslated_ids: e.posts.untranslatedIds,
            translated_images: e.posts.translatedImages,
            untranslated_images: e.posts.untranslatedImages
        } : void 0
    }),
    wa = (e, t) => e.isNavigationControllerRestore ? $o.NavigationControllerRestore : e.isBfCacheRestore ? $o.BFCache : t ? $o.ForegroundingAction : $o.Initial,
    Ra = async ({
        pageType: e,
        triggerType: t,
        serverRenderId: o = "",
        shouldUpdateRecaptcha: n = !1
    }) => {
        if (!n || Yn.includes(e)) return;
        const i = window.btoa(`${e}|${t}|${o}`).replace(/=/g, "");
        return fetch(`/svc/shreddit/update-recaptcha?k=${i}`)
    };
class Oa {
    constructor(e) {
        this.hasSentScreenview = !1, this._pageUnloaded = !1, this._visibilityHandlerAdded = !1, this._initialVisibilityChangeToVisibleHappened = !1, this._visibilityChangeGVSEventWasFired = !1, this._screenviewId = "", this.onBeforeUnloadCallback = () => {
            this._pageUnloaded = !0, this._host.trackEvent(un({
                screenviewId: this._screenviewId,
                screenViewData: this._host.screenViewData,
                hostPageType: this._host.pageType
            }))
        }, this.sendScreenview = () => {
            const e = wa(this._host);
            this._screenviewId = kn();
            const t = this.enrichScreenViewWithTranslation();
            this._host.trackEvent(cn({
                success: this._host.success,
                data: {
                    ...t,
                    action_info: {
                        ...this._host.screenViewData.action_info,
                        page_request_id: this._host.serverRenderId
                    }
                },
                screenviewId: this._screenviewId,
                serverRenderId: this._host.serverRenderId,
                triggerType: wa(this._host),
                hostPageType: this._host.pageType
            })), Ra({
                pageType: this._host.pageType,
                triggerType: e,
                serverRenderId: this._host.serverRenderId,
                shouldUpdateRecaptcha: this._host.shouldUpdateRecaptcha
            })
        }, this._host = e, this._host.addController(this)
    }
    trackScreenview() {
        const e = this.hasSentScreenview ? "" : this._host.serverRenderId;
        if (!this._visibilityChangeGVSEventWasFired) {
            const t = wa(this._host);
            this._screenviewId = kn();
            const o = this.enrichScreenViewWithTranslation(),
                n = ee("track-event", {
                    details: cn({
                        success: this._host.success,
                        data: {
                            ...o,
                            action_info: {
                                ...this._host.screenViewData.action_info,
                                page_request_id: this._host.serverRenderId
                            }
                        },
                        screenviewId: this._screenviewId,
                        serverRenderId: e,
                        triggerType: t,
                        hostPageType: this._host.pageType
                    })
                });
            this._host.dispatchEvent(n), Ra({
                pageType: this._host.pageType,
                triggerType: t,
                serverRenderId: e,
                shouldUpdateRecaptcha: this._host.shouldUpdateRecaptcha
            }), this.hasSentScreenview = !0, this._pageUnloaded = !1
        }
    }
    _bindShredditVisibilityChange() {
        this._visibilityHandlerAdded || (this._visibilityHandlerAdded = !0, Qi((e => {
            if (e) {
                if (this._initialVisibilityChangeToVisibleHappened) {
                    const e = wa(this._host, !0);
                    this._screenviewId = kn();
                    const t = this.enrichScreenViewWithTranslation();
                    this._host.trackEvent(cn({
                        success: this._host.success,
                        data: {
                            ...t,
                            action_info: {
                                ...this._host.screenViewData.action_info,
                                page_request_id: this._host.serverRenderId
                            }
                        },
                        screenviewId: this._screenviewId,
                        serverRenderId: this._host.serverRenderId,
                        triggerType: e,
                        hostPageType: this._host.pageType
                    })), Ra({
                        pageType: this._host.pageType,
                        triggerType: e,
                        serverRenderId: this._host.serverRenderId,
                        shouldUpdateRecaptcha: this._host.shouldUpdateRecaptcha
                    }), this._visibilityChangeGVSEventWasFired = !0, this._pageUnloaded = !1
                }
                this._initialVisibilityChangeToVisibleHappened = !0
            } else this._pageUnloaded || this._host.trackEvent(un({
                reason: "tab_backgrounded",
                screenviewId: this._screenviewId,
                screenViewData: this._host.screenViewData,
                hostPageType: this._host.pageType
            }))
        }), {
            immediate: !0
        }))
    }
    enrichScreenViewWithTranslation() {
        const e = ba(wo.get(Ms) ?? ""),
            t = e?.isTranslationActive;
        return {
            ...this._host.screenViewData,
            ...e ? {
                translation_metrics: {
                    translation_setting_state: t ? "on" : "off",
                    target_language: this._host.userLanguage
                }
            } : {}
        }
    }
    hostConnected() {
        Es.subscribe(this.onBeforeUnloadCallback, {
            unloadOnly: !0
        }), this._bindShredditVisibilityChange(), (e => {
            Ji || !_i.isAvailable() || (Ji = !0, Qi((t => {
                try {
                    t ? Xi(e) : _i.setItem(gi.AdRefocusStart, String(performance.now()))
                } catch (e) {
                    return
                }
            }), {
                immediate: !0
            }))
        })(this._host.trackEvent), window.addEventListener("afterRoute", this.sendScreenview)
    }
    hostDisconnected() {
        Es.unsubscribe(this.onBeforeUnloadCallback), window.removeEventListener("afterRoute", this.sendScreenview)
    }
}
var Na;
! function(e) {
    e.Control1 = "control_1", e.Control2 = "control_2"
}(Na || (Na = {}));
const Ma = e => !!(e => {
    if (e !== Na.Control1 && e !== Na.Control2) return e || void 0
})(e);

function Da(e) {
    if (window?.CLIENT_EXPERIMENTS) return window?.CLIENT_EXPERIMENTS?.[e]
}

function La(e) {
    const t = Da(e);
    return Ma(t)
}
var Ua;

function ka(e) {
    return {
        ...e,
        createdAt: Date.now(),
        attempt: 0,
        statusCodes: []
    }
}

function xa(e, t) {
    const {
        name: o,
        value: n,
        type: i,
        labels: s,
        createdAt: a
    } = e;
    return {
        age: Date.now() - a,
        type: "reddit-w3reporting",
        url: "",
        user_agent: navigator.userAgent,
        body: {
            sampling_fraction: Fa(e, t),
            type: i,
            name: o,
            value: n,
            labels: s ?? {}
        }
    }
}

function Fa(e, t) {
    return e.isFailure ? t.sampling.failureFraction : t.sampling.successFraction
}

function Ba(e, t) {
    e.attempt = Math.min(t, e.attempt + 1)
}

function Va({
    batch: e,
    reportQueue: t,
    maxReportAge: o,
    lastStatusCode: n
}) {
    for (const t of e) t.attempt += 1, t.statusCodes.push(n);
    const {
        maxReportAttempts: i
    } = Ga(o);
    t.unshift(...e.filter((e => e.attempt < i)))
}

function Ga(e) {
    const t = Math.floor(Math.log(e / 1e3));
    return {
        maxAttempts: t,
        maxReportAttempts: Math.min(3, t)
    }
}
async function Wa({
    config: e,
    batch: t,
    maxReportAge: o,
    isTimeSensitive: n,
    reportQueue: i,
    onError: s
}) {
    const a = function(e) {
        return e.urlIndex = (e.urlIndex + 1) % e.reportingUrls.length, e.reportingUrls[e.urlIndex]
    }(e);
    if (!a) return;
    const r = t.map((t => xa(t, e))).filter((e => e.age < o));
    if (0 === r.length) return;
    !async function({
        batch: e,
        reportQueue: t,
        resp: o,
        isTimeSensitive: n,
        config: i,
        maxReportAge: s,
        onError: a
    }) {
        const {
            maxAttempts: r
        } = Ga(s);
        switch (o.status) {
            case 200:
                n || function(e) {
                        e.attempt = 0
                    }(i),
                    function(e) {
                        e.batchSizeMultiplier = 1
                    }(i);
                break;
            case 207:
            case 400:
                await a(e, o);
                break;
            case 413:
                Va({
                        batch: e,
                        reportQueue: t,
                        maxReportAge: s,
                        lastStatusCode: o.status
                    }),
                    function(e) {
                        e.batchSizeMultiplier = e.batchSizeMultiplier / 2
                    }(i);
                break;
            default:
                Va({
                    batch: e,
                    reportQueue: t,
                    maxReportAge: s,
                    lastStatusCode: o.status
                }), n || Ba(i, r)
        }
    }({
        batch: t,
        resp: await fetch(a, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify(r),
            keepalive: !0
        }),
        isTimeSensitive: n,
        maxReportAge: o,
        config: e,
        reportQueue: i,
        onError: s
    })
}

function Ha({
    disabled: e,
    qItem: t,
    config: o
}) {
    return !e && function(e, t) {
        const o = Fa(e, t);
        return Math.random() < o
    }(t, o)
}! function(e) {
    e.Counter = "counter", e.Gauge = "gauge", e.Histogram = "histogram"
}(Ua || (Ua = {}));

function qa({
    policyUrl: e,
    onError: t,
    disabled: o,
    maxReportAge: n = 3e5,
    flushInterval: i = 3e3
}) {
    const s = {
            w3IncludeSubdomains: !1,
            reportingUrls: [],
            policyUrl: e ?? "https://w3-reporting.reddit.com/policy",
            sampling: {
                successFraction: 1,
                failureFraction: 1
            },
            attempt: 0,
            batchSizeMultiplier: 1,
            urlIndex: -1
        },
        a = Boolean(o);
    let r = null;
    async function d() {
        return r || (r = async function(e) {
            try {
                const t = await fetch(e.policyUrl, {
                        method: "GET"
                    }),
                    o = t.headers.get("report-to");
                if (o) {
                    const t = JSON.parse(`[${o}]`),
                        n = t?.find((({
                            group: e
                        }) => "w3-reporting" === e));
                    e.w3IncludeSubdomains = Boolean(n?.include_subdomains);
                    const i = n?.endpoints?.map?.((e => e.url)) || [];
                    i.length > 0 && (e.reportingUrls = i)
                }
                const n = t.headers.get("x-reddit-w3reporting");
                if (n) {
                    const t = JSON.parse(n);
                    "number" == typeof t.success_fraction && (e.sampling.successFraction = t.success_fraction), "number" == typeof t.failure_fraction && (e.sampling.failureFraction = t.failure_fraction)
                }
            } catch (e) {
                window.Sentry?.captureException?.(e)
            }
        }(s)), r
    }
    let l = [];
    const {
        maxAttempts: c
    } = Ga(n);
    async function u() {
        if (0 === l.length) return;
        const e = Math.max(1, Math.floor(l.length * s.batchSizeMultiplier)),
            o = l.slice(0, e);
        l = l.slice(e);
        try {
            await Wa({
                batch: o,
                isTimeSensitive: !1,
                config: s,
                maxReportAge: n,
                reportQueue: l,
                onError: t
            })
        } catch (e) {
            window.Sentry?.captureException?.(e), Ba(s, c), Va({
                batch: o,
                reportQueue: l,
                maxReportAge: n,
                lastStatusCode: 666
            })
        }
    }
    let h = [];
    async function p() {
        if (0 === h.length) return;
        const e = [...h];
        h = [];
        try {
            await Wa({
                batch: e,
                isTimeSensitive: !0,
                config: s,
                maxReportAge: n,
                reportQueue: l,
                onError: t
            })
        } catch (t) {
            window.Sentry?.captureException?.(t), Ba(s, c), Va({
                batch: e,
                reportQueue: l,
                lastStatusCode: 420,
                maxReportAge: n
            })
        }
    }
    return window.setTimeout((async function e() {
        await u(), window.setTimeout(e, i * Math.exp(s.attempt))
    }), i), document.addEventListener("visibilitychange", (() => {
        "hidden" === document.visibilityState && u()
    })), {
        w3Report: async function(e) {
            await d();
            const t = ka(e);
            Ha({
                qItem: t,
                config: s,
                disabled: a
            }) && l.push(t)
        },
        w3ReportNow: async function(e) {
            await d();
            const t = ka(e);
            Ha({
                qItem: t,
                config: s,
                disabled: a
            }) && (0 === h.length && setTimeout(p, 0), h.push(t))
        },
        printReportQueue: function(e = !1) {
            const t = e ? h : l;
            return JSON.stringify(t.map((e => xa(e, s))), null, 2)
        }
    }
}
async function $a(e, t) {
    const o = (await t.json())?.invalid.map(function(e, t) {
        return o => {
            const n = "number" == typeof o ? e[o] : o,
                {
                    labels: i = {}
                } = n,
                s = {};
            for (const e in i) s[e.replace(/auth/, "a_u_t_h")] = i[e];
            const a = t ? n.statusCodes.concat(t) : n.statusCodes;
            return {
                name: n.name,
                labels: s,
                attempt: n.attempt,
                statusCodes: a
            }
        }
    }(e, t.status));
    window.Sentry?.withScope((e => {
        e.setExtra("statusCode", t.status), e.setExtra("reports", JSON.stringify(o)), window.Sentry?.captureMessage("Failed to send W3 reports")
    }))
}
const Ya = (e, t) => {
    "function" == typeof navigator.sendBeacon ? navigator.sendBeacon(e, t) : ((e, t) => {
        fetch(e, {
            body: t,
            headers: {
                "Content-Type": "text/plain"
            },
            keepalive: !0,
            method: "POST"
        })
    })(e, t)
};
async function ja(e) {
    try {
        const o = Ka();
        if (t = o, !Boolean("string" == typeof t && t?.length)) return;
        const n = function(e) {
            const {
                name: t,
                value: o,
                type: n,
                labels: i
            } = e, s = {
                age: 1,
                type: "reddit-w3reporting",
                url: "",
                user_agent: navigator.userAgent,
                body: {
                    sampling_fraction: .99,
                    type: n,
                    name: t,
                    value: o,
                    labels: i ?? {}
                }
            };
            return JSON.stringify([s])
        }(e);
        Ya(o, n)
    } catch (t) {
        ! function(e, t) {
            if (!(e instanceof Error)) return;
            window.Sentry?.withScope((o => {
                o?.setTag("w3", "reportWebVital"), o?.setTag("w3Url", Ka()), o?.setTag("w3Params", JSON.stringify([t])), o?.setTag("errorMessage", e.message?.slice?.(0, 200)), o?.setTag("errorName", e.name?.slice?.(0, 200)), o?.setTag("errorStack", e.stack?.slice?.(0, 200)?.replaceAll?.("\n", "")), window.Sentry?.captureMessage?.("Failed to report w3 web vital")
            }))
        }(t, e)
    }
    var t
}

function Ka() {
    return window.CLIENT_CONFIG.W3_REPORTING_WEB_VITAL_REPORTS_URL
}
const {
    w3Report: Qa,
    w3ReportNow: za,
    printReportQueue: Ja
} = qa({
    onError: $a,
    disabled: Boolean(CLIENT_CONFIG.DISABLE_W3_REPORTING)
});
var Xa = Object.freeze({
    __proto__: null,
    get W3ReportType() {
        return Ua
    },
    defaultOnError: $a,
    printReportQueue: Ja,
    w3Report: Qa,
    w3ReportNow: za,
    w3ReportWebVital: ja,
    w3Reporting: qa
});
const Za = e => {
        try {
            return new URL(e).hostname.endsWith("reddit.com")
        } catch (e) {
            return !1
        }
    },
    er = e => e.startsWith("https://alb.reddit.com/cr");
var tr, or, nr, ir, sr;
! function(e) {
    e[e.IMPRESSION = 1] = "IMPRESSION", e[e.CLICK = 2] = "CLICK", e[e.COMMENTS_VIEW = 3] = "COMMENTS_VIEW", e[e.UPVOTE = 4] = "UPVOTE", e[e.DOWNVOTE = 5] = "DOWNVOTE", e[e.COMMENT = 6] = "COMMENT", e[e.VIEWABLE_IMPRESSION = 7] = "VIEWABLE_IMPRESSION", e[e.COMMENT_UPVOTE = 8] = "COMMENT_UPVOTE", e[e.COMMENT_DOWNVOTE = 9] = "COMMENT_DOWNVOTE", e[e.VENDOR_FULLY_IN_VIEW = 10] = "VENDOR_FULLY_IN_VIEW", e[e.VENDOR_FULLY_IN_VIEW_5_SECS = 11] = "VENDOR_FULLY_IN_VIEW_5_SECS", e[e.VENDOR_FULLY_IN_VIEW_15_SECS = 12] = "VENDOR_FULLY_IN_VIEW_15_SECS", e[e.GROUP_M_VIEWABLE = 13] = "GROUP_M_VIEWABLE", e[e.UNLOAD = 14] = "UNLOAD", e[e.LEAD_GENERATION = 200] = "LEAD_GENERATION"
}(tr || (tr = {})),
function(e) {
    e[e.GALLERY_ITEM_IMPRESSION = 15] = "GALLERY_ITEM_IMPRESSION"
}(or || (or = {})),
function(e) {
    e[e.VIDEO_VIEWABLE_IMPRESSION = 100] = "VIDEO_VIEWABLE_IMPRESSION", e[e.VIDEO_FULLY_VIEWABLE_IMPRESSION = 101] = "VIDEO_FULLY_VIEWABLE_IMPRESSION", e[e.VIDEO_PLAYED_WITH_SOUND = 102] = "VIDEO_PLAYED_WITH_SOUND", e[e.VIDEO_PLAYED_EXPANDED = 103] = "VIDEO_PLAYED_EXPANDED", e[e.VIDEO_WATCHED_25 = 104] = "VIDEO_WATCHED_25", e[e.VIDEO_WATCHED_50 = 105] = "VIDEO_WATCHED_50", e[e.VIDEO_WATCHED_75 = 106] = "VIDEO_WATCHED_75", e[e.VIDEO_WATCHED_95 = 107] = "VIDEO_WATCHED_95", e[e.VIDEO_WATCHED_100 = 108] = "VIDEO_WATCHED_100", e[e.VIDEO_STARTED = 109] = "VIDEO_STARTED", e[e.VIDEO_WATCHED_3_SECS = 110] = "VIDEO_WATCHED_3_SECS", e[e.VIDEO_WATCHED_5_SECS = 111] = "VIDEO_WATCHED_5_SECS", e[e.VIDEO_WATCHED_10_SECS = 112] = "VIDEO_WATCHED_10_SECS", e[e.VIDEO_GROUP_M_VIEWABLE = 113] = "VIDEO_GROUP_M_VIEWABLE", e[e.VIDEO_VENDOR_FULLY_VIEWABLE_50 = 114] = "VIDEO_VENDOR_FULLY_VIEWABLE_50", e[e.MRC_VIDEO_VIEWABLE_IMPRESSION = 115] = "MRC_VIDEO_VIEWABLE_IMPRESSION"
}(nr || (nr = {})),
function(e) {
    e[e.IMPRESSION = 1] = "IMPRESSION", e[e.CLICK = 2] = "CLICK", e[e.COMMENTS_VIEW = 3] = "COMMENTS_VIEW", e[e.UPVOTE = 4] = "UPVOTE", e[e.DOWNVOTE = 5] = "DOWNVOTE", e[e.COMMENT = 6] = "COMMENT", e[e.VIEWABLE_IMPRESSION = 7] = "VIEWABLE_IMPRESSION", e[e.COMMENT_UPVOTE = 8] = "COMMENT_UPVOTE", e[e.COMMENT_DOWNVOTE = 9] = "COMMENT_DOWNVOTE", e[e.VENDOR_FULLY_IN_VIEW = 10] = "VENDOR_FULLY_IN_VIEW", e[e.VENDOR_FULLY_IN_VIEW_5_SECS = 11] = "VENDOR_FULLY_IN_VIEW_5_SECS", e[e.VENDOR_FULLY_IN_VIEW_15_SECS = 12] = "VENDOR_FULLY_IN_VIEW_15_SECS", e[e.GROUP_M_VIEWABLE = 13] = "GROUP_M_VIEWABLE", e[e.UNLOAD = 14] = "UNLOAD", e[e.GALLERY_ITEM_IMPRESSION = 15] = "GALLERY_ITEM_IMPRESSION", e[e.VIDEO_VIEWABLE_IMPRESSION = 100] = "VIDEO_VIEWABLE_IMPRESSION", e[e.VIDEO_FULLY_VIEWABLE_IMPRESSION = 101] = "VIDEO_FULLY_VIEWABLE_IMPRESSION", e[e.VIDEO_PLAYED_WITH_SOUND = 102] = "VIDEO_PLAYED_WITH_SOUND", e[e.VIDEO_PLAYED_EXPANDED = 103] = "VIDEO_PLAYED_EXPANDED", e[e.VIDEO_WATCHED_25 = 104] = "VIDEO_WATCHED_25", e[e.VIDEO_WATCHED_50 = 105] = "VIDEO_WATCHED_50", e[e.VIDEO_WATCHED_75 = 106] = "VIDEO_WATCHED_75", e[e.VIDEO_WATCHED_95 = 107] = "VIDEO_WATCHED_95", e[e.VIDEO_WATCHED_100 = 108] = "VIDEO_WATCHED_100", e[e.VIDEO_STARTED = 109] = "VIDEO_STARTED", e[e.VIDEO_WATCHED_3_SECS = 110] = "VIDEO_WATCHED_3_SECS", e[e.VIDEO_WATCHED_5_SECS = 111] = "VIDEO_WATCHED_5_SECS", e[e.VIDEO_WATCHED_10_SECS = 112] = "VIDEO_WATCHED_10_SECS", e[e.VIDEO_GROUP_M_VIEWABLE = 113] = "VIDEO_GROUP_M_VIEWABLE", e[e.VIDEO_VENDOR_FULLY_VIEWABLE_50 = 114] = "VIDEO_VENDOR_FULLY_VIEWABLE_50", e[e.MRC_VIDEO_VIEWABLE_IMPRESSION = 115] = "MRC_VIDEO_VIEWABLE_IMPRESSION", e[e.LEAD_GENERATION = 200] = "LEAD_GENERATION", e[e.PRODUCT_CLICK = 300] = "PRODUCT_CLICK", e[e.PRODUCT_IMPRESSION = 301] = "PRODUCT_IMPRESSION"
}(ir || (ir = {})),
function(e) {
    e[e.IMPRESSION_THRESHOLD = 0] = "IMPRESSION_THRESHOLD", e[e.LARGE_AD_FULL_VIEW_THRESHOLD = .3] = "LARGE_AD_FULL_VIEW_THRESHOLD", e[e.VIEWABILITY_THRESHOLD = .5] = "VIEWABILITY_THRESHOLD", e[e.EIGHTY_VIEWABILITY_THRESHOLD = .8] = "EIGHTY_VIEWABILITY_THRESHOLD", e[e.FULL_VIEWABILITY_THRESHOLD = .999] = "FULL_VIEWABILITY_THRESHOLD", e[e.VISIBILITY_THRESHOLD = .01] = "VISIBILITY_THRESHOLD"
}(sr || (sr = {}));
const ar = [sr.IMPRESSION_THRESHOLD, sr.LARGE_AD_FULL_VIEW_THRESHOLD, sr.VIEWABILITY_THRESHOLD, sr.EIGHTY_VIEWABILITY_THRESHOLD, sr.FULL_VIEWABILITY_THRESHOLD];
var rr, dr, lr;
! function(e) {
    e.IN_FEED_AD_VIDEO = "in-feed-ad-video", e.COMMENT_PAGE_AD_VIDEO = "comment-page-ad-video"
}(rr || (rr = {})),
function(e) {
    e[e.IMPRESSION_TIME = 0] = "IMPRESSION_TIME", e[e.VIEWABILITY_TIME = 1e3] = "VIEWABILITY_TIME", e[e.VENDOR_VIEWABILITY_TIME = 100] = "VENDOR_VIEWABILITY_TIME", e[e.VIDEO_VIEWABILITY_TIME = 2e3] = "VIDEO_VIEWABILITY_TIME", e[e.VIDEO_FULL_VIEWABILITY_TIME = 3e3] = "VIDEO_FULL_VIEWABILITY_TIME", e[e.VENDOR_VIEWABILITY_TIME_5 = 5e3] = "VENDOR_VIEWABILITY_TIME_5", e[e.VENDOR_VIEWABILITY_TIME_15 = 15e3] = "VENDOR_VIEWABILITY_TIME_15"
}(dr || (dr = {})),
function(e) {
    e[e.VIDEO_WATCHED_SECONDS_3 = 3e3] = "VIDEO_WATCHED_SECONDS_3", e[e.VIDEO_WATCHED_SECONDS_5 = 5e3] = "VIDEO_WATCHED_SECONDS_5", e[e.VIDEO_WATCHED_SECONDS_10 = 1e4] = "VIDEO_WATCHED_SECONDS_10"
}(lr || (lr = {}));
const cr = [{
    pixelEvent: ir.VIDEO_VIEWABLE_IMPRESSION,
    threshold: sr.VIEWABILITY_THRESHOLD,
    time: dr.VIDEO_VIEWABILITY_TIME
}, {
    pixelEvent: ir.VIDEO_FULLY_VIEWABLE_IMPRESSION,
    threshold: sr.FULL_VIEWABILITY_THRESHOLD,
    time: dr.VIDEO_FULL_VIEWABILITY_TIME
}];
var ur;

function hr(e) {
    return void 0 !== e.pixelEvent
}! function(e) {
    e.VIDEO_STATE_Q0 = "VIDEO_STATE_Q0", e.VIDEO_STATE_Q1 = "VIDEO_STATE_Q1", e.VIDEO_STATE_Q2 = "VIDEO_STATE_Q2", e.VIDEO_STATE_Q3 = "VIDEO_STATE_Q3", e.VIDEO_STATE_Q4 = "VIDEO_STATE_Q4"
}(ur || (ur = {}));
const pr = [{
        timePercent: 0,
        quartileKey: ur.VIDEO_STATE_Q0
    }, {
        pixelEvent: ir.VIDEO_WATCHED_25,
        timePercent: .25,
        quartileKey: ur.VIDEO_STATE_Q1
    }, {
        pixelEvent: ir.VIDEO_WATCHED_50,
        timePercent: .5,
        quartileKey: ur.VIDEO_STATE_Q2
    }, {
        pixelEvent: ir.VIDEO_WATCHED_75,
        timePercent: .75,
        quartileKey: ur.VIDEO_STATE_Q3
    }, {
        pixelEvent: ir.VIDEO_WATCHED_95,
        timePercent: .95
    }, {
        pixelEvent: ir.VIDEO_WATCHED_100,
        timePercent: 1,
        quartileKey: ur.VIDEO_STATE_Q4
    }],
    mr = [{
        pixelEvent: ir.VIDEO_WATCHED_3_SECS,
        time: lr.VIDEO_WATCHED_SECONDS_3,
        timePercent: .95
    }, {
        pixelEvent: ir.VIDEO_WATCHED_5_SECS,
        time: lr.VIDEO_WATCHED_SECONDS_5,
        timePercent: .95
    }, {
        pixelEvent: ir.VIDEO_WATCHED_10_SECS,
        time: lr.VIDEO_WATCHED_SECONDS_10,
        timePercent: .95
    }];
var gr, _r;
! function(e) {
    e.DISPLAY = "display", e.VIDEO = "video"
}(gr || (gr = {})),
function(e) {
    e[e.NO_EVENT = 0] = "NO_EVENT", e[e.NOT_VISIBLE_NOT_AUDIBLE = 1] = "NOT_VISIBLE_NOT_AUDIBLE", e[e.VISIBLE_NOT_AUDIBLE = 2] = "VISIBLE_NOT_AUDIBLE", e[e.AUDIBLE_NOT_VISIBLE = 3] = "AUDIBLE_NOT_VISIBLE", e[e.VISIBLE_AND_AUDIBLE = 4] = "VISIBLE_AND_AUDIBLE"
}(_r || (_r = {}));
const fr = 6e5;
var vr, Er, br, Sr, yr;
! function(e) {
    e.ANY_TOTAL_VIEW_TIME = "a", e.FIFTY_TOTAL_VIEW_TIME = "b", e.EIGHTY_TOTAL_VIEW_TIME = "be", e.FULL_TOTAL_VIEW_TIME = "c", e.ANY_CONTINUOUS_VIEW_TIME = "d", e.FIFTY_CONTINUOUS_VIEW_TIME = "e", e.THIRTY_CONTINUOUS_VIEW_TIME = "ea", e.EIGHTY_CONTINUOUS_VIEW_TIME = "eb", e.FULL_CONTINUOUS_VIEW_TIME = "f", e.GLOBAL_COUNT = "r", e.GROUP_M_VIEWABLE = "g", e.AD_LOAD_TIME = "i", e.TIMESTAMP = "t", e.WAS_EVER_VIEWABLE = "o", e.PRODUCT_ID = "p", e.LARGE_AD_FULL_VIEW = "q", e.HEIGHT = "h", e.WIDTH = "w", e.SCREEN_HEIGHT = "sh", e.SCREEN_WIDTH = "sw", e.TEST_ID = "ti"
}(vr || (vr = {})),
function(e) {
    e.IMAGE = "image", e.VIDEO = "video", e.GALLERY = "gallery", e.TEXT = "text", e.BLANK = "blank", e.SHOPPING_SINGLE_PRODUCT = "shopping_single_product", e.SHOPPING_MULTI_PRODUCT = "shopping_multi_product", e.PROMOTED_COMMUNITY_POST = "promoted_community_post", e.PROMOTED_USER_POST = "promoted_user_post", e.RBL_SURVEY = "rbl_survey", e.UNSUPPORTED = "unsupported"
}(Er || (Er = {})),
function(e) {
    e[e.IMAGE = 0] = "IMAGE", e[e.TEXT = 1] = "TEXT", e[e.VIDEO = 2] = "VIDEO", e[e.PRODUCT = 3] = "PRODUCT", e[e.ORGANIC_CONTENT = 4] = "ORGANIC_CONTENT"
}(br || (br = {})),
function(e) {
    e.LEAD_GEN = "lead-gen", e.STANDARD = "standard"
}(Sr || (Sr = {})),
function(e) {
    e.UNKNOWN = "unknown", e.TITLE = "title", e.USERNAME = "username", e.MEDIA = "media", e.TEXT_BODY = "text_body", e.BACKGROUND = "background", e.CTA_DESTINATION_URL = "cta_destination_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.VIDEO_CTA = "video_cta", e.PRODUCT_NAME = "product_name", e.PRODUCT_INFO = "product_info", e.PRODUCT_INFO_STRIKETHROUGH = "product_info_strikethrough", e.PROMOTED_ITEM_1 = "promoted_item_1", e.FLOATING_CTA_DESTINATION_URL = "floating_cta_destination_url", e.FLOATING_CTA_BUTTON = "floating_cta_button", e.FLOATING_CTA_WHITESPACE = "floating_cta_whitespace", e.PROMOTED_LABEL = "promoted_label", e.ACTION_BAR_WHITESPACE = "action_bar_whitespace", e.CREDIT_BAR_WHITESPACE = "credit_bar_whitespace"
}(yr || (yr = {}));
const Cr = "lead-gen-dialog",
    Tr = "promote-post-modal",
    Ar = "/svc/shreddit/promote-post-modal-estimated-views",
    Ir = "/svc/shreddit/promote-post-modal-preview",
    Pr = "/svc/shreddit/promote-post-payment-authorization",
    wr = "";
var Rr;
! function(e) {
    e.IS_VIDEO_AD = "va", e.TOTAL_MRC_VIEWABLE_TIME = "vb", e.VIDEO_AD_DURATION = "vc", e.TOTAL_PLAY_TIME = "vd", e.VOLUME = "ve", e.IS_VISIBLE = "vg", e.VIDEO_HEIGHT = "vh", e.TOTAL_AUDIBLE_TIME = "vi", e.VIDEO_WIDTH = "vw", e.WAS_FULL_SCREEN = "vq", e.HALF_DURATION_80_IN_VIEW_AUDIBLE = "vr", e.VIDEO_STATE_Q0 = "vs", e.VIDEO_STATE_Q1 = "vt", e.VIDEO_STATE_Q2 = "vu", e.VIDEO_STATE_Q3 = "vv", e.VIDEO_STATE_Q4 = "vx", e.FULL_IN_VIEW_AUDIBLE_TIME = "vy", e.FULL_IN_VIEW_TIME = "vz", e.WAS_FULL_IN_VIEW_1SEC = "xa", e.ANY_CONTINUOUS_VIDEO_VIEW_TIME = "xf", e.FIFTY_CONTINUOUS_VIDEO_VIEW_TIME = "xb", e.FULL_CONTINUOUS_VIDEO_VIEW_TIME = "vf", e.EIGHTY_TOTAL_VIDEO_VIEW_TIME = "xe", e.HAS_SEEKED = "xc"
}(Rr || (Rr = {}));
const Or = "shreddit_client_pixel_scaling",
    Nr = "shreddit_query_suggestions",
    Mr = "shreddit_recaptcha_comment_create",
    Dr = "shreddit_rpl_action_bar_update",
    Lr = "shreddit_video_ad_observer_fix",
    Ur = e => e.reduce(((e, t) => (e[t] = {
        maxContinuousTime: 0,
        currentContinuousTime: 0,
        totalTime: 0
    }, e)), {}),
    kr = [{
        key: "TOTAL_MRC_VIEWABLE_TIME",
        playing: !0,
        threshold: sr.VIEWABILITY_THRESHOLD
    }, {
        key: "TOTAL_AUDIBLE_TIME",
        playing: !0,
        threshold: 0,
        withSound: !0
    }, {
        key: "HALF_DURATION_80_IN_VIEW_AUDIBLE",
        playing: !0,
        withSound: !0,
        threshold: sr.EIGHTY_VIEWABILITY_THRESHOLD
    }, {
        key: "FULL_IN_VIEW_AUDIBLE_TIME",
        playing: !0,
        threshold: sr.FULL_VIEWABILITY_THRESHOLD,
        withSound: !0
    }, {
        key: "FULL_IN_VIEW_TIME",
        playing: !0,
        threshold: sr.FULL_VIEWABILITY_THRESHOLD
    }, {
        key: "ANY_IN_VIEW_TIME",
        playing: !0,
        threshold: sr.VISIBILITY_THRESHOLD
    }, {
        key: "FIFTY_IN_VIEW_TIME",
        playing: !0,
        threshold: sr.VIEWABILITY_THRESHOLD
    }, {
        key: "EIGHTY_IN_VIEW_TIME",
        playing: !0,
        threshold: sr.EIGHTY_VIEWABILITY_THRESHOLD
    }];

function xr(e, t) {
    const o = new URL(e);
    return Object.entries(t).forEach((([e, t]) => {
        o.searchParams.set(e, String(t))
    })), o.toString()
}
const Fr = kr.map((e => e.key));

function Br(e) {
    const t = new Map;
    return e.forEach((e => {
        const o = t.get(e.type) || [];
        o.push(e), t.set(e.type, o)
    })), t
}
class Vr {
    constructor() {
        this.postUnloadQueue = [], this.postUnloadQueueData = new Map, this.deviceType = Bo.MOBILE, this.removeFromUnloadQueue = (e, t) => {
            const o = t || this.postUnloadQueueData.get(e);
            clearTimeout(o?.timer), this.postUnloadQueueData.delete(e);
            this.postUnloadQueue.indexOf(e) > -1 && this.postUnloadQueue.splice(this.postUnloadQueue.indexOf(e), 1)
        }, this.queuePostForUnload = (e, t, o, n) => {
            if (!this.postUnloadQueue.some((e => e === t)) && this.postEvents.get(t)?.get(ir.UNLOAD) && (this.postUnloadQueueData.set(t, {
                    postId: e,
                    impressionId: t,
                    getMetadata: o,
                    getPixelScalingFields: n,
                    timer: setTimeout((() => {
                        this.firePixel({
                            postId: e,
                            impressionId: t,
                            pixelEventType: ir.UNLOAD,
                            metadata: o(),
                            pixelRequestBody: n ? n() : void 0
                        }), this.removeFromUnloadQueue(t)
                    }), fr)
                }), this.postUnloadQueue.push(t), this.postUnloadQueue.length > 5)) {
                const e = this.postUnloadQueue.shift();
                if (e) {
                    const t = this.postUnloadQueueData.get(e);
                    this.firePixel({
                        postId: t?.postId || "",
                        impressionId: e,
                        pixelEventType: ir.UNLOAD,
                        metadata: t?.getMetadata(),
                        pixelRequestBody: t?.getPixelScalingFields ? t.getPixelScalingFields() : void 0
                    }), this.removeFromUnloadQueue(e, t)
                }
            }
        }, this.postPixels = new Map, this.firedPixels = new Set, this.postEvents = new Map, this.galleryData = new Map
    }
    _resetFiredPixels() {
        this.firedPixels = new Set, this.postPixels = new Map, this.postUnloadQueue = []
    }
    get postEventsMap() {
        return this.postEvents
    }
    _resetPostEvents() {
        this.postEvents = new Map, this.galleryData = new Map
    }
    updateEvents({
        postId: e,
        impressionId: t,
        events: o,
        galleryItems: n
    }) {
        this.postEvents.set(t, Br(o)), n && this.galleryData.set(t, n.map((e => Br(e.adEvents))))
    }
    generatePixelHash(e, t) {
        return e.encryptedTrackingId + t.additionalEventMetadata
    }
    observeImpressionTracker() {
        const e = this.deviceType === Bo.DESKTOP ? "shreddit_desktop" : "shreddit_mobile";
        Qa({
            type: Ua.Counter,
            name: "ads_third_party_impression_tracker_total",
            value: 1,
            labels: {
                client_platform: e
            }
        })
    }
    isOptimizedPixelEvent(e) {
        return !!e.encryptedTrackingId
    }
    getGalleryUrls(e, t, o) {
        const n = void 0 === o && t === ir.IMPRESSION,
            i = n ? 0 : o;
        if (void 0 === i) return [];
        const s = n ? ir.GALLERY_ITEM_IMPRESSION : t,
            a = this.galleryData.get(e) || [];
        return a[i] && a[i].get(s) || []
    }
    mapMetadataToStrings(e) {
        return Object.entries(e).reduce(((e, [t, o]) => (e[t] = o.toString(), e)), {})
    }
    firePixelWithPOST({
        pixelEvent: e,
        postId: t,
        impressionId: o,
        pixelRequestBody: n,
        metadata: i
    }) {
        if (!e.encryptedTrackingId) return;
        const s = this.generatePixelHash(e, n);
        if (this.firedPixels.has(s)) return;
        this.firedPixels.add(s), this.postPixels.set(o, {
            ...this.postPixels.get(o) || {},
            [e.encryptedTrackingId]: {
                pixelType: ir[e.type],
                metadata: i
            }
        });
        const a = i ? this.mapMetadataToStrings(i) : {};
        return fetch("https://alb.reddit.com/track", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify({
                encryptedTrackingId: e.encryptedTrackingId,
                encryptedTrackingPayload: n.encryptedTrackingPayload,
                additionalEventMetadata: n.additionalEventMetadata,
                clientImpressionID: n.impressionId,
                ...a
            })
        }).then((t => {
            if (!t.ok) {
                const t = "Sentry" in window ? window.Sentry : void 0;
                t?.captureException && t.captureException(new Error(`Error in POST response from pixel server for pixel of type ${e.type}`))
            }
        })), this.fireDebugPixel({
            pixel: s,
            pixelEvent: {
                encryptedTrackingId: e.encryptedTrackingId,
                type: e.type,
                metadata: i
            },
            encryptedTrackingPayload: n?.encryptedTrackingPayload,
            additionalEventMetadata: n?.additionalEventMetadata,
            impressionId: o,
            postId: t
        }), e.encryptedTrackingId
    }
    firePixelWithGET(e, t, o, n) {
        if (!e.url || this.firedPixels.has(e.url)) return;
        const i = !Za(e.url);
        this.firedPixels.add(e.url), i || this.postPixels.set(o, {
            ...this.postPixels.get(o) || {},
            [e.url]: {
                pixelType: ir[e.type],
                metadata: n
            }
        });
        const s = new Image;
        let a = e.url;
        return n && !i && (a = xr(a, n)), s.src = a, this.fireDebugPixel({
            pixel: a,
            pixelEvent: {
                url: e.url,
                type: e.type,
                metadata: i ? void 0 : n
            },
            impressionId: o,
            postId: t
        }), i && e.type === ir.IMPRESSION && this.observeImpressionTracker(), a
    }
    firePixelsFromEvents({
        pixelEvents: e,
        postId: t,
        impressionId: o,
        metadata: n,
        pixelRequestBody: i
    }) {
        const s = [];
        return e.forEach((e => {
            let a;
            this.isOptimizedPixelEvent(e) ? i && (a = this.firePixelWithPOST({
                pixelEvent: e,
                postId: t,
                impressionId: o,
                pixelRequestBody: i,
                metadata: n
            })) : a = this.firePixelWithGET(e, t, o, n), a && s.push(a)
        })), s
    }
    fireDebugPixel(e) {
        const t = ee("pixelFired", e);
        window.dispatchEvent(t)
    }
    firePixel({
        pixelEventType: e,
        postId: t = "",
        impressionId: o,
        galleryIndex: n,
        metadata: i,
        pixelRequestBody: s
    }) {
        const a = this.postEvents.get(o)?.get(e) || [];
        if (this.galleryData.has(o)) {
            const t = this.getGalleryUrls(o, e, n) || [];
            a.push(...t)
        }
        return this.firePixelsFromEvents({
            pixelEvents: a,
            postId: t,
            impressionId: o,
            metadata: i,
            pixelRequestBody: s
        })
    }
    fireQueuedUnloadPixels() {
        this.postUnloadQueue.forEach((e => {
            const t = this.postUnloadQueueData.get(e);
            this.firePixel({
                postId: t?.postId || "",
                impressionId: e,
                pixelEventType: ir.UNLOAD,
                metadata: t?.getMetadata(),
                pixelRequestBody: t?.getPixelScalingFields ? t.getPixelScalingFields() : void 0
            }), this.removeFromUnloadQueue(e, t)
        }))
    }
}

function Gr(e) {
    const t = new Map;
    return e.forEach((e => {
        const o = t.get(e.type) || [];
        o.push(e.url), t.set(e.type, o)
    })), t
}
new Vr;
let Wr = "enabled" === Da(Or) ? new Vr : new class {
    constructor() {
        this.postUnloadQueue = [], this.postUnloadQueueData = new Map, this.deviceType = Bo.MOBILE, this.removeFromUnloadQueue = (e, t) => {
            const o = t || this.postUnloadQueueData.get(e);
            clearTimeout(o?.timer), this.postUnloadQueueData.delete(e);
            this.postUnloadQueue.indexOf(e) > -1 && this.postUnloadQueue.splice(this.postUnloadQueue.indexOf(e), 1)
        }, this.queuePostForUnload = (e, t, o, n) => {
            if (!this.postUnloadQueue.some((t => t === e)) && this.postEvents.get(e)?.get(ir.UNLOAD) && (this.postUnloadQueueData.set(e, {
                    postId: e,
                    impressionId: t,
                    getMetadata: o,
                    timer: setTimeout((() => {
                        this.firePixel({
                            postId: e,
                            impressionId: t,
                            pixelEventType: ir.UNLOAD,
                            metadata: o()
                        }), this.removeFromUnloadQueue(e)
                    }), fr)
                }), this.postUnloadQueue.push(e), this.postUnloadQueue.length > 5)) {
                const e = this.postUnloadQueue.shift();
                if (e) {
                    const t = this.postUnloadQueueData.get(e);
                    this.firePixel({
                        postId: e,
                        impressionId: t?.impressionId || "",
                        pixelEventType: ir.UNLOAD,
                        metadata: t?.getMetadata()
                    }), this.removeFromUnloadQueue(e, t)
                }
            }
        }, this.postPixels = new Map, this.firedPixels = new Set, this.postEvents = new Map, this.galleryData = new Map
    }
    _resetFiredPixels() {
        this.firedPixels = new Set, this.postPixels = new Map, this.postUnloadQueue = []
    }
    updateEvents({
        postId: e,
        impressionId: t,
        events: o,
        galleryItems: n
    }) {
        this.postEvents.set(e, Gr(o)), n && this.galleryData.set(e, n.map((e => Gr(e.adEvents))))
    }
    observeImpressionTracker() {
        const e = this.deviceType === Bo.DESKTOP ? "shreddit_desktop" : "shreddit_mobile";
        Qa({
            type: Ua.Counter,
            name: "ads_third_party_impression_tracker_total",
            value: 1,
            labels: {
                client_platform: e
            }
        })
    }
    getGalleryUrls(e, t, o) {
        const n = void 0 === o && t === ir.IMPRESSION,
            i = n ? 0 : o;
        if (void 0 === i) return;
        const s = n ? ir.GALLERY_ITEM_IMPRESSION : t,
            a = this.galleryData.get(e) || [];
        return a[i] && a[i].get(s)?.map((e => ({
            url: e,
            type: s
        }))) || []
    }
    firePixelsFromEvents({
        pixelEvents: e,
        postId: t,
        impressionId: o,
        metadata: n
    }) {
        const i = [];
        return e.forEach((e => {
            const {
                url: s,
                type: a
            } = e;
            if (!s || this.firedPixels.has(s)) return;
            const r = !Za(s);
            this.firedPixels.add(s), r || this.postPixels.set(t, {
                ...this.postPixels.get(t) || {},
                [s]: {
                    pixelType: ir[a],
                    metadata: n
                }
            });
            const d = new Image;
            let l = s;
            n && !r && (l = xr(l, n)), d.src = l, i.push(l), this.fireDebugPixel({
                pixel: l,
                pixelEvent: {
                    url: s,
                    type: a,
                    metadata: r ? void 0 : n
                },
                postId: t,
                impressionId: o
            }), r && a === ir.IMPRESSION && this.observeImpressionTracker()
        })), i
    }
    fireDebugPixel(e) {
        const t = ee("pixelFired", e);
        window.dispatchEvent(t)
    }
    firePixel({
        postId: e,
        impressionId: t,
        pixelEventType: o,
        metadata: n,
        galleryIndex: i,
        pixelRequestBody: s
    }) {
        const a = this.postEvents.get(e)?.get(o)?.map((e => ({
            url: e,
            type: o
        }))) || [];
        if (this.galleryData.has(e)) {
            const t = this.getGalleryUrls(e, o, i) || [];
            a.push(...t)
        }
        return this.firePixelsFromEvents({
            pixelEvents: a,
            postId: e,
            impressionId: t,
            metadata: n
        })
    }
    fireQueuedUnloadPixels() {
        this.postUnloadQueue.forEach((e => {
            const t = this.postUnloadQueueData.get(e);
            this.firePixel({
                postId: e,
                impressionId: t?.impressionId || "",
                pixelEventType: ir.UNLOAD,
                metadata: t?.getMetadata()
            }), this.removeFromUnloadQueue(e, t)
        }))
    }
};
class Hr {
    constructor(e) {
        this.sendPageVisitEvent = async () => {
            const {
                isAcceptableAdsEnabled: e,
                isAdblockEnabled: t
            } = await an(), o = this.getQueryParamVal(t, e);
            fetch(`/svc/shreddit/styling-overrides/${`?context=${o}`}`)
        }, this.host = e, this.host.addController(this), requestAnimationFrame(this.sendPageVisitEvent)
    }
    getQueryParamVal(e, t) {
        return e && t ? "scoped" : e && !t ? "local" : "namespaced"
    }
    hostConnected() {
        window.addEventListener("afterRoute", this.sendPageVisitEvent)
    }
    hostDisconnected() {
        window.removeEventListener("afterRoute", this.sendPageVisitEvent)
    }
}
class qr {
    constructor(e) {
        this._opts = e, this._frames = []
    }
    get top() {
        return this._frames[this._frames.length - 1]
    }
    add(e) {
        const t = this.top;
        this._frames.push(e), t ? this._opts.framePaused && this._opts.framePaused(t) : this._opts.stackEntered && this._opts.stackEntered(e), this._opts.frameAdded && this._opts.frameAdded(e)
    }
    _pop() {
        const e = this._frames.pop();
        if (!e) return;
        const t = this.top;
        this._opts.frameRemoved && this._opts.frameRemoved(e), t ? this._opts.frameResumed && this._opts.frameResumed(t) : this._opts.stackExited && this._opts.stackExited(e)
    }
    remove(e) {
        const t = this._frames.indexOf(e);
        t < 0 || (t === this._frames.length - 1 ? this._pop() : (this._frames.splice(t, 1), this._opts.frameRemoved && this._opts.frameRemoved(e)))
    }
}
let $r, Yr, jr, Kr = !1,
    Qr = Promise.resolve();

function zr(e) {
    let t = e;
    for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
    return t
}

function Jr() {
    const e = document.activeElement;
    return e ? zr(e) : null
}

function Xr() {
    const e = Jr();
    return e instanceof HTMLElement ? e : null
}

function Zr() {
    return Qr
}

function ed(e) {
    const t = e.hasAttribute("tabindex");
    e.blur(), t || e.setAttribute("tabindex", "0"), e.focus(), t || e.removeAttribute("tabindex")
}

function td(e) {
    Kr || (Kr = !0, ed(e), Qr = new Promise((t => {
        setTimeout((() => {
            const o = Jr();
            e !== o && ed(e), Kr = !1, t()
        }))
    })))
}
const od = new qr({
        stackEntered() {
            document.body.style.pointerEvents && ($r = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", document.body.style.overflow && (Yr = document.body.style.overflow), document.body.style.overflow = "hidden"
        },
        stackExited() {
            $r ? document.body.style.pointerEvents = $r : document.body.style.removeProperty("pointer-events"), Yr ? document.body.style.overflow = Yr : document.body.style.removeProperty("overflow")
        }
    }),
    nd = new qr({
        stackEntered() {
            jr = Xr(), window.addEventListener("keydown", id), window.addEventListener("focusin", sd)
        },
        stackExited(e) {
            jr ? td(jr) : e.blur(), window.removeEventListener("keydown", id), window.removeEventListener("focusin", sd)
        },
        frameAdded(e) {
            e.inFocusTrap = !0, e.focusManager.refresh(), e.focusManager.focus()
        },
        frameRemoved(e) {
            e.inFocusTrap = !1
        },
        framePaused(e) {
            e.focusManager.saveFocus()
        },
        frameResumed(e) {
            e.focusManager.restoreFocus()
        }
    });

function id(e) {
    const t = nd.top;
    t && ("Escape" === e.key ? t.blocking || (e.stopPropagation(), t.close()) : function(e, t) {
        if ("Tab" !== e.key) return;
        if (t.focusManager.size < 1) return e.preventDefault();
        const o = Xr();
        if (!o) return;
        if (1 === t.focusManager.size && o === t.focusManager.first) return e.preventDefault();
        if (e.shiftKey) {
            if (o === t.focusManager.first) t.focusManager.focusLast(), e.preventDefault()
        } else if (o === t.focusManager.last) t.focusManager.focusFirst(), e.preventDefault()
    }(e, t))
}

function sd(e) {
    const t = nd.top;
    t && function(e, t) {
        const o = Xr();
        if (!o || o === t) return;
        if (t.focusManager.has(o)) return;
        t.focusManager.focusFirst() && e.preventDefault()
    }(e, t)
}
const ad = ["enabled", "control_1", "control_2"],
    rd = (e, t) => {
        const o = new URL(e),
            n = new URLSearchParams(o.search),
            i = t.filter((([e]) => !n.has(e)));
        if (i.length) return i.forEach((e => n.set(...e))), o.search = n.toString(), o.href
    };
let dd = window.fetch;
const ld = 864e5;
let cd = null,
    ud = [],
    hd = new Map;
const pd = ld,
    md = Date.now() + ld,
    gd = "time-to-first-byte",
    _d = "first-contentful-paint";

function fd() {
    const e = Date.now();
    for (const [t, o] of hd.entries()) e - o.lastAccessed > pd && hd.delete(t);
    if (hd.size <= 25) return;
    const t = [...hd.entries()].sort(((e, t) => e[1].lastAccessed - t[1].lastAccessed));
    hd.delete(t[0][0])
}
let vd;
const Ed = [/^\/api\/v1\/.+/, /^\/svc\/shreddit\/oauth-grant.*/, /^\/(login|register|password|username|passwordreset|passwordrecovery)\/?/, /^\/avatar\/(claim|shop)/, /^\/partner\/(persona|stripe)\/.+/, /insights/, /^\/settings\/premium/, /^\/topics\/[a-z0]-\d+/],
    bd = [/^\/user\/(?<username>[^/]+)\/display-collectibles\//];
let Sd;
class yd {
    constructor(e) {
        var t;
        this.overrideQueryParams = null, this.navigationIndicator = document.querySelector("navigation-indicator"), this.ignoreNavigations = !1, this._hybridNavigationCount = 0, this.handleNavigate = e => {
            const {
                url: t
            } = e.destination, o = new URL(t), n = Sd.currentEntry?.key ? hd.get(Sd.currentEntry.key) : void 0;
            let i = !1;
            if (this.ignoreNavigations) return void(this.currentUrl = t);
            if (md < Date.now()) return;
            if (!e.canIntercept) return;
            if ("reload" === e.navigationType) return;
            if (["push", "traverse"].includes(e.navigationType) && n?.callbackNavigations) {
                const o = Sd.currentEntry.index,
                    i = Sd.entries().find((t => t.key === e.destination.key)),
                    s = i ? Sd.entries().indexOf(i) : -1,
                    a = -1 !== s,
                    r = a && s === o - 1,
                    d = a && s === o + 1,
                    {
                        onForwardNav: l,
                        onBackNav: c
                    } = n.callbackNavigations;
                if (d && l) return l(), void(this.currentUrl = t);
                if (r && c) return c(), void(this.currentUrl = t)
            }
            if ("replace" === e.navigationType) {
                if (t === this.pendingUrl) return void e.intercept();
                if (t !== this.currentUrl || o.hash || t.endsWith("#")) {
                    if (this._getLocation() === this.currentUrl || this._getLocation() !== t) return void(this.currentUrl = t);
                    i = !0
                } else i = !0
            }
            if (bd.some((e => e.test(o.pathname)))) return void e.intercept();
            if (!this.isRoutable(t)) return;
            if (e.hashChange) return;
            const s = function(e) {
                const t = e.originalEvent?.composedPath() || [];
                for (const e of t)
                    if ("A" === e.nodeName) return e;
                return
            }(e);
            if ("_blank" === s?.target) return;
            const a = new URL(this.currentUrl || ""),
                r = new URL(t);
            if (a.hash = "", r.hash = "", !i && r.toString() === a.toString()) return void e.intercept();
            if (!Sd.currentEntry) throw new Error("navigation.currentEntry is null");
            const d = this.lastCompletedNavigationKey || Sd.currentEntry.key;
            Sd.updateCurrentEntry({
                state: {
                    scrollOffset: window.scrollY
                }
            }), e.intercept({
                handler: async () => {
                    let o;
                    window.dispatchEvent(new Event("beforeRoute"));
                    try {
                        o = await this.hybridNavigate(e, d)
                    } catch (e) {
                        console.log(e?.stack)
                    }
                    o && (this._hybridNavigationCount++, window.dispatchEvent(new Event("afterRoute")), this.lastCompletedNavigationKey = Sd.currentEntry?.key, this.currentUrl = t)
                }
            })
        }, this._processActionQueue = () => {
            for (const e of ud) {
                const [t, ...o] = e;
                this[t](...o)
            }
            ud = []
        }, this._host = e, this._host.addController(this), vd = document.querySelector("script[nonce]")?.nonce ?? "", this.overrideQueryParams = (t = new URL(this._getLocation()).search, Array.from(new URLSearchParams(t).entries()).filter((([e, t]) => ad.includes(t)))), this.currentUrl = this._getLocation()
    }
    replace(e) {
        this.ignoreNavigations = !0, this._replaceState(null, e), this.ignoreNavigations = !1
    }
    push(e, t = {}) {
        const {
            onBackNav: o,
            onForwardNav: n
        } = t;
        if (Sd.currentEntry?.key) {
            const e = hd.get(Sd.currentEntry.key);
            hd.set(Sd.currentEntry.key, {
                scrollOffsets: Od(),
                lastAccessed: Date.now(),
                callbackNavigations: {
                    ...e?.callbackNavigations,
                    onForwardNav: n
                }
            })
        }
        if (n?.(), this.ignoreNavigations = !0, this._pushState(null, e), this.ignoreNavigations = !1, Sd.currentEntry?.key) {
            const e = hd.get(Sd.currentEntry.key);
            hd.set(Sd.currentEntry.key, {
                scrollOffsets: Od(),
                lastAccessed: Date.now(),
                callbackNavigations: {
                    ...e?.callbackNavigations,
                    onBackNav: o
                }
            })
        }
    }
    async enableHybridNavigation() {
        await async function() {
            Cd || (Cd = async function() {
                if (Sd = window.navigation, !Sd) {
                    console.log("Navigation API not supported, loading polyfill");
                    try {
                        const {
                            applyPolyfill: e
                        } = await import("./apply-polyfill-1c410a4f.js");
                        Sd = e()
                    } catch {
                        console.log("Navigation polyfill failed to initialize.")
                    }
                }
            }());
            return Cd
        }(), Sd && (Sd.addEventListener("navigate", this.handleNavigate), console.log("Navigation listeners online"), this.lastCompletedNavigationKey = Sd.currentEntry?.key)
    }
    disableHybridNavigation() {
        window.navigation && (Sd = window.navigation, Sd.removeEventListener("navigate", this.handleNavigate), console.log("Navigation listeners offline"))
    }
    isRoutable(e) {
        const t = new URL(e);
        if (t.host !== window.location.host) return !1;
        if (Ed.some((e => e.test(t.pathname)))) return !1;
        return !new RegExp("#main-content$").test(e)
    }
    async hybridNavigate(e, t) {
        let o, n, {
            url: i
        } = e.destination;
        const s = performance.now();
        if (i === this.pendingUrl) return;
        this.overrideQueryParams && (i = rd(i, this.overrideQueryParams) ?? i);
        const a = this.pendingUrl = i;
        let r;
        for (; r = nd.top;) nd.remove(r);
        const d = e.destination.key,
            l = hd.get(d);
        if (l) {
            if (!l.fragment) return console.log("No DOM for history entry, performing full navigation"), this.pendingUrl = void 0, void this.fullNavigateTo(i);
            o = performance.now() - s;
            const e = Od(),
                a = this.replaceDOM(l.fragment, !0),
                r = hd.get(t) || {};
            return hd.set(t, {
                ...r,
                fragment: a,
                scrollOffsets: e,
                lastAccessed: Date.now()
            }), fd(), Md(l.scrollOffsets), n = performance.now() - s, this.pendingUrl = void 0, this._host.handleWebVitalW3Reporting({
                [gd]: o || 1,
                [_d]: n
            }, {
                hybrid: !0
            }), !0
        }
        let c;
        this.navigationIndicator?.show?.();
        try {
            c = await this.performRequest(e, s)
        } catch (e) {
            console.error(e), "AbortError" !== e?.name && this.navigationIndicator?.hide?.()
        }
        if (e.signal.aborted) return this.pendingUrl = void 0, this.navigationIndicator?.hide?.(), !1;
        if (!c) return this.pendingUrl = void 0, !1;
        if (a !== this.pendingUrl) return !1;
        this.pendingUrl = void 0, this.navigationIndicator?.hide?.();
        const u = document.createRange().createContextualFragment(c),
            h = Od();
        window.scroll({
            behavior: "instant",
            top: 0
        });
        const p = this.replaceDOM(u);
        return hd.set(t, {
            fragment: p,
            scrollOffsets: h,
            lastAccessed: Date.now()
        }), fd(), n = performance.now() - s, this._host.handleWebVitalW3Reporting({
            [_d]: n
        }, {
            hybrid: !0
        }), !0
    }
    async performRequest(e, t) {
        let {
            url: o
        } = e.destination;
        this.overrideQueryParams && (o = rd(o, this.overrideQueryParams) ?? o);
        const n = new AbortController;
        this.currentAbort && this.currentAbort.abort(), this.currentAbort = n;
        const i = () => n.abort();
        e.signal.addEventListener("abort", i, {
            once: !0
        });
        const s = new URL(o),
            a = setTimeout((() => {
                this.pendingUrl === o && n.abort()
            }), 3e4),
            r = {
                headers: {
                    nonce: vd,
                    clienthash: this._host.clientHash,
                    accept: "text/vnd.reddit.hybrid+html, text/html;q=0.9"
                },
                signal: n.signal
            };
        e.formData && (r.method = "POST", r.body = e.formData);
        const d = await dd(s, r);
        if (d.url !== o && window.addEventListener("afterRoute", (() => {
                if (this.pendingUrl = d.url, s.hash) {
                    const e = new URL(d.url);
                    e.hash = s.hash, history.replaceState({}, "", e)
                } else history.replaceState({}, "", d.url);
                this.pendingUrl = void 0
            }), {
                once: !0
            }), !d.headers?.has("hybrid-route")) return console.log("Not a hybrid response, performing full navigation"), this.fullNavigateTo(o), clearTimeout(a), void this.currentAbort.abort();
        const l = performance.now() - t;
        this._host.handleWebVitalW3Reporting({
            [gd]: l
        }, {
            hybrid: !0
        }), this.currentAbort = void 0;
        const c = await d.text();
        return clearTimeout(a), e.signal.removeEventListener("abort", i), c
    }
    replaceDOM(e, t = !1) {
        const o = new DocumentFragment;
        let n, i;
        const s = this.findPersistentElements(this._host),
            a = this.findPersistentElements(e),
            r = new Map([...s.entries()].filter((([e]) => a.has(e)))),
            d = Nd(Dd(this._host, r));
        this.extractPersistentElements(r), this.insertPersistentElements(e, r);
        const l = [];
        if (this._host.childNodes.forEach((e => {
                Rd(e) && " routable page start " === e.data ? n = e : Rd(e) && " routable page end " === e.data ? i = e : i || n && l.push(e)
            })), !n || !i) throw new Error("Missing boundary comments for DOM replacement");
        for (const e of l) e.remove(), o.appendChild(e);
        return this._host.screenViewData = {}, this._host.isNavigationControllerRestore = t, this._host.insertBefore(e, i), Md(d), o
    }
    findPersistentElements(e) {
        const t = Array.from(e.querySelectorAll("[id][data-persistent], meta[id][data-persistent-placeholder]")),
            o = new Map;
        for (const e of t) o.set(e.id, e);
        return o
    }
    extractPersistentElements(e) {
        e.forEach((e => {
            const t = document.createElement("meta");
            t.id = e.id, t.setAttribute("data-persistent-placeholder", ""), e.replaceWith(t)
        }))
    }
    insertPersistentElements(e, t) {
        const o = this.findPersistentElements(e);
        t.forEach((e => {
            const t = o.get(e.id);
            t ? t.replaceWith(e) : console.error(`Placeholder or target element missing for <${e.nodeName.toLowerCase()} id="${e.id} data-persistent>`)
        })), t.clear()
    }
    navigateTo(e) {
        const t = document.createElement("a");
        t.setAttribute("href", e), t.style.display = "none", document.body.appendChild(t), t.click(), t.remove()
    }
    fullNavigateTo(e) {
        let t = e.startsWith("/") ? `${new URL(window.location.href).origin}${e}` : e;
        ! function() {
            const e = document.querySelector("shreddit-app");
            e?.dispatchEvent(new CustomEvent(rs))
        }(), this.disableHybridNavigation(), this._hybridNavigationCount = 0, window.addEventListener("pageshow", this.enableHybridNavigation), t = rd(t, this.overrideQueryParams ?? []) ?? t, this._assignLocation(t)
    }
    _getLocation() {
        return window.location.toString()
    }
    _assignLocation(e) {
        return window.location.assign(e)
    }
    _replaceState(e, t) {
        return history.replaceState(e, "", t)
    }
    _pushState(e, t) {
        return history.pushState(e, "", t)
    }
    _getCurrentURL() {
        return this.currentUrl
    }
    _getHistoryStateMap() {
        return hd
    }
    hostConnected() {
        if (cd) throw new Error("Only one NavigationController may be active at a time.");
        cd = this, this.enableHybridNavigation().then(this._processActionQueue)
    }
    hostDisconnected() {
        cd = null, this.disableHybridNavigation()
    }
    get hybridNavigationCount() {
        return this._hybridNavigationCount
    }
}
let Cd = null;

function Td(e) {
    if (cd) return cd.replace(e);
    ud.push(["replace", e])
}

function Ad() {
    return cd?.hybridNavigationCount ?? 0
}

function Id(e, t = {}) {
    if (cd) return cd.push(e, t);
    ud.push(["push", e, t])
}

function Pd(e) {
    if (cd) return cd.fullNavigateTo(e);
    ud.push(["fullNavigateTo", e])
}

function wd(e) {
    if (cd) return cd.navigateTo(e);
    ud.push(["navigateTo", e])
}

function Rd(e) {
    return e.nodeType === Node.COMMENT_NODE
}

function Od() {
    const e = Nd(Dd());
    return e.set(window, {
        top: window.scrollY,
        left: window.scrollX
    }), e
}

function Nd(e) {
    const t = new Map;
    for (const o of e) t.set(o, {
        top: o.scrollTop,
        left: o.scrollLeft
    });
    return t
}

function Md(e) {
    for (const [t, o] of e) t.scrollTo({
        behavior: "instant",
        ...o
    })
}

function Dd(e = document, t = new Map) {
    const o = Array.from(t.values()),
        n = Array.from(e.querySelectorAll("[data-scroll-restore]"));
    return [...new Set([...o, ...n])]
}
class Ld {
    constructor(e) {
        this.handleObservation = e => {
            const t = () => {
                e.getEntries().forEach((e => {
                    const t = e;
                    if (!t?.scripts?.length) return;
                    const o = Qe({
                        ...this.buildCommon(),
                        ...this.buildLongAnimationFrame(t)
                    });
                    this._host._handleEvent(o)
                }))
            };
            this.callbackId = "requestIdleCallback" in window ? requestIdleCallback(t) : setTimeout(t)
        }, this._host = e, this._host.addController(this)
    }
    hostConnected() {
        if (this._host.shouldObservePerformance) {
            if (Ld.activeInstance) throw new Error("Only one PerformanceObserverController may be active at a time.");
            Ld.activeInstance = this, this.initObservers()
        }
    }
    hostDisconnected() {
        this._host.shouldObservePerformance && (this.performanceObserver?.disconnect(), window.clearTimeout(this.callbackId), Ld.activeInstance = void 0)
    }
    initObservers() {
        this.performanceObserver = new window.PerformanceObserver(this.handleObservation), this.performanceObserver.observe({
            type: "long-animation-frame",
            buffered: !0
        })
    }
    buildLongAnimationFrame(e) {
        return {
            long_animation_frame: {
                blocking_duration: Math.round(e.blockingDuration),
                duration: Math.round(e.duration),
                first_ui_event_start: Math.round(e.firstUIEventTimestamp),
                render_start: Math.round(e.renderStart),
                scripts_json: this.safeParseJsonString(e.scripts),
                start_time: Math.round(e.startTime),
                style_and_layout_start: Math.round(e.styleAndLayoutStart)
            }
        }
    }
    buildCommon() {
        return {
            source: "browser",
            action: "observe",
            noun: "performance",
            screenview_id: this._host._visibilityChange._screenviewId,
            browser_context: {
                hybrid_navigation_count: Ad(),
                release: this._host.release,
                time_origin: Math.round(performance.timeOrigin)
            },
            action_info: {
                page_type: this._host.pageType,
                route_name: this._host.routeName
            },
            request: {
                canonical_url: this._host.canonicalUrl
            }
        }
    }
    safeParseJsonString(e) {
        let t;
        try {
            t = JSON.stringify(e)
        } catch {}
        return t || "[]"
    }
}

function Ud(e) {
    return e.hasAttribute("hidden") || e.hasAttribute("aria-hidden") && "false" !== e.getAttribute("aria-hidden") || "none" === e.style.display || "0" === e.style.opacity || "hidden" === e.style.visibility || "collapse" === e.style.visibility
}

function kd(e) {
    return "-1" !== e.getAttribute("tabindex") && !Ud(e) && ! function(e) {
        return e.hasAttribute("disabled") || e.hasAttribute("aria-disabled") && "false" !== e.getAttribute("aria-disabled")
    }(e) && (e.hasAttribute("tabindex") || (e instanceof HTMLAnchorElement || e instanceof HTMLAreaElement) && e.hasAttribute("href") || e instanceof HTMLButtonElement || e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement || e instanceof HTMLIFrameElement)
}
class xd {
    constructor(e) {
        this._focusableElements = null, this._firstFocusable = null, this._lastFocusable = null, this._savedFocusable = null, this._target = e
    }
    get size() {
        var e;
        return (null === (e = this._focusableElements) || void 0 === e ? void 0 : e.size) || 0
    }
    get first() {
        return this._firstFocusable
    }
    get last() {
        return this._lastFocusable
    }
    _focusTarget(e) {
        var t;
        return e ? (td(e), !0) : (null === (t = Xr()) || void 0 === t || t.blur(), !1)
    }
    _getActiveInternalElement() {
        if (!this._focusableElements) return null;
        const e = Xr();
        return e && this._focusableElements.has(e) ? e : null
    }
    has(e) {
        var t;
        return (null === (t = this._focusableElements) || void 0 === t ? void 0 : t.has(e)) || !1
    }
    refresh() {
        const e = Bd({
            root: this._target,
            skipNode: Ud,
            isMatch: kd
        });
        this._firstFocusable = e[0], this._lastFocusable = e[e.length - 1], this._focusableElements = new Set(e)
    }
    focus() {
        if (this._focusableElements)
            for (const e of this._focusableElements)
                if (e.autofocus) return this._focusTarget(e);
        return this._focusTarget(this._firstFocusable)
    }
    blur() {
        var e;
        null === (e = this._savedFocusable) || void 0 === e || e.blur()
    }
    focusFirst() {
        return this._focusTarget(this._firstFocusable)
    }
    focusLast() {
        return this._focusTarget(this._lastFocusable)
    }
    saveFocus() {
        this._savedFocusable = this._getActiveInternalElement()
    }
    restoreFocus() {
        this._focusTarget(this._savedFocusable)
    }
}
class Fd extends xd {
    constructor(e, t) {
        super(t), e.addController(this)
    }
    hostConnected() {
        this.refresh()
    }
}

function Bd({
    root: e,
    skipNode: t,
    isMatch: o,
    maxDepth: n = 20,
    depth: i = 0
}) {
    const s = [];
    if (i >= n) return s;
    const a = e => {
            const s = e.assignedNodes().filter((e => 1 === e.nodeType));
            if (s.length > 0) {
                return Bd({
                    root: s[0].parentElement,
                    skipNode: t,
                    isMatch: o,
                    maxDepth: n,
                    depth: i + 1
                })
            }
            return []
        },
        r = Array.from(e.children || []);
    for (const e of r) t(e) || (o(e) && s.push(e), null != e.shadowRoot ? s.push(...Bd({
        root: e.shadowRoot,
        skipNode: t,
        isMatch: o,
        maxDepth: n,
        depth: i + 1
    })) : "SLOT" === e.tagName ? s.push(...a(e)) : s.push(...Bd({
        root: e,
        skipNode: t,
        isMatch: o,
        maxDepth: n,
        depth: i + 1
    })));
    return s
}
let Vd = class extends t {
    constructor(e) {
        if (super(e), this.et = l, e.type !== o.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
    }
    render(e) {
        if (e === l || null == e) return this.ft = void 0, this.et = e;
        if (e === n) return e;
        if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (e === this.et) return this.ft;
        this.et = e;
        const t = [e];
        return t.raw = t, this.ft = {
            _$litType$: this.constructor.resultType,
            strings: t,
            values: []
        }
    }
};
Vd.directiveName = "unsafeHTML", Vd.resultType = 1;
const Gd = e(Vd);
let Wd = class extends a {
    constructor() {
        super(...arguments), this.focusManager = new Fd(this, this), this.open = !1, this.blocking = !1, this.returnValue = "", this.modal = !1, this._inFocusTrap = !1
    }
    get inFocusTrap() {
        return this._inFocusTrap
    }
    set inFocusTrap(e) {
        if (this._inFocusTrap !== e)
            if (this._inFocusTrap = e, e) {
                const e = window.getComputedStyle(this).boxShadow;
                e && (this.dataset.faceplateDialogPreviousShadow = e, this.style.boxShadow = `${e}, 0 0 0 max(100vw, 100vh) var(--color-scrim)`)
            } else this.dataset.faceplateDialogPreviousShadow ? this.style.boxShadow = this.dataset.faceplateDialogPreviousShadow : this.style.removeProperty("boxShadow")
    }
    get isFocusEnabled() {
        return this === nd.top
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.modal && nd.remove(this)
    }
    close(e) {
        void 0 !== e && (this.returnValue = e);
        const t = ee("faceplate-close");
        this.dispatchEvent(t), t.defaultPrevented || (this.open = !1, this.modal && nd.remove(this))
    }
    show() {
        this.modal = !1, this.open = !0, this.focusManager.focus()
    }
    showModal() {
        if (this.open) throw new Error('The element already has an "open" attribute, and therefore cannot be opened modally');
        this.modal = !0, this.open = !0, nd.add(this)
    }
    static get styles() {
        return s`:host{display:none;left:0;right:0;width:-moz-fit-content;width:fit-content;background:var(--color-ui-modalbackground);border-radius:4px;margin:auto;padding:1rem;box-shadow:var(--boxshadow-modal);pointer-events:all;max-width:95vw;max-height:95vh;overflow:auto}:host([open]){display:block;z-index:1}.backdrop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1}`
    }
    render() {
        return r` ${Gd(this.modal?"\n  <style>\n    :host {\n      top: 50%;\n      transform: translateY(-50%);\n      position: fixed;\n    }\n  </style>\n":"\n  <style>\n    :host {\n      position: absolute;\n    }\n  </style>\n")} <div class="${this.modal?"backdrop":""}" role="${d(this.open?"dialog":void 0)}" aria-modal="${d(this.open&&this.modal?"true":void 0)}"></div> <slot></slot> `
    }
};
v([P({
    type: Boolean,
    reflect: !0
})], Wd.prototype, "open", void 0), v([P({
    type: Boolean
})], Wd.prototype, "blocking", void 0), v([P({
    type: Boolean,
    attribute: !1
})], Wd.prototype, "modal", void 0), v([w()], Wd.prototype, "inFocusTrap", null), Wd = v([A("faceplate-dialog")], Wd);
let Hd = class extends a {
    static get styles() {
        return s`:host{clip:rect(1px,1px,1px,1px);clip-path:inset(50%);height:1px;width:1px;margin:-1px;overflow:hidden;padding:0;position:absolute}`
    }
    render() {
        return r` <slot></slot> `
    }
};
Hd = v([A("faceplate-screen-reader-content")], Hd);
const qd = "first-comment-updated",
    $d = "on-load-embed",
    Yd = "on-embed-clicked",
    jd = "on-embed-entrypoint-clicked",
    Kd = "on-embed-entrypoint-viewed",
    Qd = "resize.embed";

function zd(e, t = 0, o = {
    leading: !1,
    trailing: !0
}) {
    let n, i = !1;
    return function(...s) {
        n && clearTimeout(n), o.leading && !n ? (e.apply(this, s), i = !0) : i = !1, n = setTimeout((() => {
            o.trailing && !i && e.apply(this, s), n = null
        }), t)
    }
}
const Jd = Symbol.for("mixins/with-viewport-height");
const Xd = "logged-in",
    Zd = "translation-context";
class el {
    constructor(e, t = {}) {
        this.pageType = void 0, this.settings = {}, this.registeredEvents = 0, this.eventsListened = 0, this.trackEvent = ie, this.translationMetricsEventData = {
            scenario: "",
            translationSettingState: ha
        }, this.getSettings = () => this.settings, this.getPageType = () => this.pageType, this.handleMutationObserverChanges = e => {
            for (const t of e) "attributes" === t.type && "routename" === t.attributeName && this.updateSettingsHybridNav()
        }, this.registerTranslationChangesEvents = e => {
            this.pageType && (this.initListeners(), this.initListenersCounters(e))
        }, this.initListeners = () => {
            this.host.addEventListener(aa, this.onTranslatedPostChanged), this.host.addEventListener(ra, this.onTranslatedCommentsChanged), this.host.addEventListener(da, this.onTranslatedPostsChanged)
        }, this.initListenersCounters = e => {
            e.withPost && this.registeredEvents++, e.withComments && this.registeredEvents++, e.withPosts && this.registeredEvents++
        }, this.unregisterTranslationChangesEvents = () => {
            this.host.removeEventListener(aa, this.onTranslatedPostChanged), this.host.removeEventListener(ra, this.onTranslatedCommentsChanged), this.host.removeEventListener(da, this.onTranslatedPostsChanged)
        }, this.handleTranslationEvent = (e, t) => {
            const o = t.detail?.[e];
            o && (this.translationMetricsEventData.scenario = t.detail?.scenario ?? "", this.translationMetricsEventData.targetLanguage = t.detail?.targetLanguage ?? this.translationMetricsEventData.targetLanguage, this.translationMetricsEventData[e] = o, this.eventsListened++, this.submitPartialTranslationMetrics())
        }, this.onTranslatedPostChanged = e => {
            this.handleTranslationEvent("post", e)
        }, this.onTranslatedCommentsChanged = e => {
            this.handleTranslationEvent("comments", e)
        }, this.onTranslatedPostsChanged = e => {
            this.handleTranslationEvent("posts", e)
        }, this.submitPartialTranslationMetrics = () => {
            if (!this.pageType) return;
            if (this.eventsListened < this.registeredEvents) return;
            const e = this.host.translationContextValue?.isTranslationActive,
                t = this.translationMetricsEventData.scenario === ca.ToggleChange;
            (e || !e && t) && this.trackEvent(this.host, ((e, t, o) => {
                const n = Qe({
                    source: "machine_translations",
                    action: "request",
                    noun: "content"
                });
                return e.translationSettingState = t ? pa : ha, e.loadType = ua.UserNav, {
                    ...n,
                    action_info: {
                        ...n.action_info,
                        page_type: o,
                        reason: t ? pa : ha
                    },
                    translation_metrics: Pa(e)
                }
            })(this.translationMetricsEventData, this.host.translationContextValue?.isTranslationActive || !1, this.pageType)), this.resetTranslationMetricsData()
        }, this.resetTranslationMetricsData = () => {
            this.eventsListened = 0, this.translationMetricsEventData = {
                scenario: "",
                translationSettingState: ha
            }
        }, this.updateSettingsPageload = () => {
            var e;
            this.pageType = this.host.pageType, this.settings = {
                ...this.settings,
                ...(e = this.pageType, e ? {
                    withPosts: Ca.withPosts.has(e),
                    withPost: Ca.withPost.has(e),
                    withComments: Ca.withComments.has(e)
                } : {
                    withPosts: !1,
                    withPost: !1,
                    withComments: !1
                })
            }, this.resetTranslationMetricsData(), this.registerTranslationChangesEvents(this.settings)
        }, this.updateSettingsHybridNav = () => {
            this.registeredEvents = 0, this.updateSettingsPageload()
        }, this.host = e, this.host.addController(this), this.settings = t, this.pageType = this.host.pageType
    }
    hostConnected() {
        this.initListeners(), this.updateSettingsPageload(), this.connectObservers()
    }
    hostDisconnected() {
        this.unregisterTranslationChangesEvents(), this.disconnectObservers()
    }
    connectObservers() {
        this._mutationObserver || (this._mutationObserver = new MutationObserver(this.handleMutationObserverChanges)), this._mutationObserver.observe(this.host, {
            attributes: !0,
            attributeFilter: ["routename"]
        })
    }
    disconnectObservers() {
        this._mutationObserver?.disconnect?.()
    }
}
const tl = Symbol("mixins/with-patched-fetch");

function ol() {
    return !!document.querySelector(".theme-dark") || !document.querySelector(".theme-light") && matchMedia("(prefers-color-scheme: dark)").matches
}
var nl;
! function(e) {
    e.TIME_TO_FIRST_BYTE = "time-to-first-byte", e.FIRST_CONTENTFUL_PAINT = "first-contentful-paint", e.LARGEST_CONTENTFUL_PAINT = "largest-contentful-paint", e.CUMULATIVE_LAYOUT_SHIFT = "cumulative-layout-shift", e.INTERACTION_TO_NEXT_PAINT = "interaction-to-next-paint", e.FIRST_POST_MEANINGFUL_PAINT = "first-post-meaningful-paint", e.FIRST_COMMENT_MEANINGFUL_PAINT = "first-comment-meaningful-paint", e.TOTAL_PAGE_LOAD = "total-page-load"
}(nl || (nl = {}));
const il = [nl.FIRST_POST_MEANINGFUL_PAINT, nl.FIRST_COMMENT_MEANINGFUL_PAINT],
    sl = "screen-reader-only-alert";
var al;
! function(e) {
    e.polite = "polite", e.assertive = "assertive"
}(al || (al = {}));
const rl = (e, t) => {
        e.dispatchEvent(new CustomEvent(sl, {
            detail: {
                ...t
            },
            bubbles: !0
        }))
    },
    dl = "screen-reader-alert-outlet";
class ll extends Mt {
    constructor(e) {
        super(e), this.alertOutletElement = null, this.events = new x(this, (() => window)), this._handleEvent = async e => {
            e.stopPropagation();
            const t = this._getAlertOutletElement();
            if (!t) throw Error("No screen-reader-alert-outlet element found.");
            await window.customElements.whenDefined(dl), t.announce(e.detail)
        }, e.addController(this), this.events.define(sl, this._handleEvent)
    }
    _getAlertOutletElement() {
        return this.alertOutletElement || (this.alertOutletElement = document.querySelector(dl)), this.alertOutletElement
    }
}
var cl;
async function ul(e = window) {
    const t = new URLSearchParams(e.location.search).get("app_installed");
    if (Object.values(cl).includes(t)) return t;
    if (void 0 === e.navigator || "function" != typeof e.navigator.getInstalledRelatedApps || e !== e.top) return cl.Unsupported;
    return void 0 !== (await e.navigator.getInstalledRelatedApps()).find((e => "com.reddit.frontpage" === e.id)) ? cl.Installed : cl.NotInstalled
}! function(e) {
    e.Installed = "installed", e.NotInstalled = "not_installed", e.Unsupported = "unsupported"
}(cl || (cl = {}));
const hl = new Set([Ps, Rs, As, "loid", bs, Ss, "fastly-request-id", "pwa", Ms, "subreddit_sort", "csrf_token", "session_tracker", ...["_options", "correlation_id"]]),
    pl = new Set(["AT", "BE", "BG", "BL", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GF", "GG", "GI", "GP", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MF", "MQ", "MT", "NL", "NO", "PL", "PM", "PT", "RE", "RO", "SE", "SI", "SK", "UK", "YT"]),
    ml = e => pl.has(e),
    gl = ({
        country: e,
        name: t,
        options: o,
        value: n
    }) => {
        _l({
            country: e,
            name: t
        }) && wo.set(t, n, o)
    },
    _l = ({
        country: e,
        name: t
    }) => {
        return o = t, hl.has(o) || !ml(e) || vl();
        var o
    },
    fl = ({
        name: e,
        options: t
    }) => {
        wo.remove(e, t)
    },
    vl = () => {
        const e = El();
        return !!e?.nonessential
    },
    El = () => {
        const e = wo.get(Ps);
        return void 0 !== e ? (e => {
            try {
                const o = JSON.parse(decodeURIComponent(e));
                return !0 === (t = o).opted && "boolean" == typeof t.nonessential ? o : void 0
            } catch {
                return
            }
            var t
        })(e) : void 0
    },
    bl = e => {
        wo.set(Ps, JSON.stringify(e), ws)
    };
const Sl = new Intl.PluralRules("fr-FR"),
    yl = new Intl.PluralRules("pl-PL"),
    Cl = new Intl.PluralRules("en-US"),
    Tl = {
        "fr-FR": Sl,
        fr: Sl,
        "pl-PL": yl,
        pl: yl,
        "en-US": Cl
    };

function Al(e) {
    const t = function() {
        try {
            return "undefined" != typeof window && window?.document?.documentElement.lang || "en-US"
        } catch {
            return "en-US"
        }
    }();
    return e[(Tl[t] || Cl).select(e.count)]
}

function Il(e) {
    switch (e.status) {
        case 429:
            return (t = e.headers.get("X-ratelimit-reset")) ? Al({
                count: parseInt(t) || 0,
                one: `Your request has been rate limited, please take a break for ${t} second and try again.`,
                few: `Your request has been rate limited, please take a break for ${t} seconds and try again.`,
                many: `Your request has been rate limited, please take a break for ${t} seconds and try again.`,
                other: `Your request has been rate limited, please take a break for ${t} seconds and try again.`
            }) : "Your request has been rate limited, please take a break for a couple minutes and try again.";
        case 403:
            return "\n      Your request has been blocked by network security.  Please try to login with your Reddit account.\n    ";
        default:
            return "We have encountered an error. Please try again later."
    }
    var t
}
var Pl;
! function(e) {
    e.AcceptAutomationRecommendation = "AcceptAutomationRecommendation", e.AcceptModeratorInvite = "AcceptModeratorInvite", e.AchievementCategoryById = "AchievementCategoryById", e.AchievementCategoryByIdIdentity = "AchievementCategoryByIdIdentity", e.AchievementsOnboarding = "AchievementsOnboarding", e.AchievementTrophyById = "AchievementTrophyById", e.AchievementUnlockedNotifications = "AchievementUnlockedNotifications", e.AdAccounts = "AdAccounts", e.AddBrandAnalyticsSearchQueryKeyword = "AddBrandAnalyticsSearchQueryKeyword", e.AddSubredditWidget = "AddSubredditWidget", e.AddWikiContributor = "AddWikiContributor", e.AddWikiPageEditor = "AddWikiPageEditor", e.All = "All", e.AllChatsPageCustomRecommendations = "AllChatsPageCustomRecommendations", e.AllChatsPageNavigation = "AllChatsPageNavigation", e.AllChatsPageRecommendations = "AllChatsPageRecommendations", e.AllFeedRightRail = "AllFeedRightRail", e.AllowlistedRedditorInfo = "AllowlistedRedditorInfo", e.ApplyRemovalReason = "ApplyRemovalReason", e.ApproveRedditor = "ApproveRedditor", e.ArenaEvents = "ArenaEvents", e.ArenaFeed = "ArenaFeed", e.ArenaPage = "ArenaPage", e.ArtistDetails = "ArtistDetails", e.AssignFlairUserTypeahead = "AssignFlairUserTypeahead", e.AssignUserFlairModal = "AssignUserFlairModal", e.AudioRoomById = "AudioRoomById", e.AvatarCatalog = "AvatarCatalog", e.AvatarPastLooks = "AvatarPastLooks", e.AwardDialogFromComment = "AwardDialogFromComment", e.AwardDialogFromPost = "AwardDialogFromPost", e.AwardGoldPurchaseFromComment = "AwardGoldPurchaseFromComment", e.AwardGoldPurchaseFromPost = "AwardGoldPurchaseFromPost", e.AwardLeaderboardComment = "AwardLeaderboardComment", e.AwardLeaderboardPost = "AwardLeaderboardPost", e.AwardOnContentModerationInfo = "AwardOnContentModerationInfo", e.AwardSelectionSheetFromComment = "AwardSelectionSheetFromComment", e.AwardSelectionSheetFromPost = "AwardSelectionSheetFromPost", e.BackupVault = "BackupVault", e.BanEvasionSubredditSettings = "BanEvasionSubredditSettings", e.BannedUserIdentity = "BannedUserIdentity", e.BanSubredditUser = "BanSubredditUser", e.BlockedAccounts = "BlockedAccounts", e.BoostedPostAdInsights = "BoostedPostAdInsights", e.BrandAnalyticsMentionsChart = "BrandAnalyticsMentionsChart", e.BrandAnalyticsSearchKeyword = "BrandAnalyticsSearchKeyword", e.BrandLiftSurveyConfig = "BrandLiftSurveyConfig", e.CancelEconRecurringPayment = "CancelEconRecurringPayment", e.CancelPaySubscription = "CancelPaySubscription", e.CancelTemporaryEventRun = "CancelTemporaryEventRun", e.ChangePaymentMethod = "ChangePaymentMethod", e.ChangeStripePaymentMethod = "ChangeStripePaymentMethod", e.ChatBadgeIndicator = "ChatBadgeIndicator", e.ChatBanChatChannelUser = "ChatBanChatChannelUser", e.ChatBannedUsers = "ChatBannedUsers", e.ChatBanSubredditUser = "ChatBanSubredditUser", e.ChatBlockedRedditors = "ChatBlockedRedditors", e.ChatChannelRecommendations = "ChatChannelRecommendations", e.ChatChannelsByIds = "ChatChannelsByIds", e.ChatContentControlSettings = "ChatContentControlSettings", e.ChatCreateShareUrl = "ChatCreateShareUrl", e.ChatCreateSubredditChannel = "ChatCreateSubredditChannel", e.ChatCreateUccChatChannel = "ChatCreateUccChatChannel", e.ChatCrowdControlSettings = "ChatCrowdControlSettings", e.ChatCurrentUserContext = "ChatCurrentUserContext", e.ChatDeleteChannel = "ChatDeleteChannel", e.ChatGetChatChannelBannedUsers = "ChatGetChatChannelBannedUsers", e.ChatGetUccChannelTaggingInfo = "ChatGetUccChannelTaggingInfo", e.ChatGetUserMessageRequestSetting = "ChatGetUserMessageRequestSetting", e.ChatIsUserBannedFromChatChannel = "ChatIsUserBannedFromChatChannel", e.ChatModApprove = "ChatModApprove", e.ChatModRemove = "ChatModRemove", e.ChatPinMessagesToSubredditChannel = "ChatPinMessagesToSubredditChannel", e.ChatQueryTagSubreddits = "ChatQueryTagSubreddits", e.ChatRedditors = "ChatRedditors", e.ChatRedditorsByName = "ChatRedditorsByName", e.ChatReportForm = "ChatReportForm", e.ChatRetractChatChannelUserRoleInvitation = "ChatRetractChatChannelUserRoleInvitation", e.ChatSearchChatMessageReactionIcons = "ChatSearchChatMessageReactionIcons", e.ChatShareUrl = "ChatShareUrl", e.ChatSubreddit = "ChatSubreddit", e.ChatUnbanChatChannelUser = "ChatUnbanChatChannelUser", e.ChatUnbanSubredditUser = "ChatUnbanSubredditUser", e.ChatUpdateAccountPreferences = "ChatUpdateAccountPreferences", e.ChatUpdateChannel = "ChatUpdateChannel", e.ChatUpdateChannelModerationSettings = "ChatUpdateChannelModerationSettings", e.ChatUpdateChatChannelUserRolePromotion = "ChatUpdateChatChannelUserRolePromotion", e.ChatUpdateChatChannelUsersRoles = "ChatUpdateChatChannelUsersRoles", e.ChatUpdateCrowdControlLevel = "ChatUpdateCrowdControlLevel", e.ChatUpdateRedditorBlockState = "ChatUpdateRedditorBlockState", e.Checkout = "Checkout", e.CheckoutDevvitProducts = "CheckoutDevvitProducts", e.ClaimFreeNft = "ClaimFreeNft", e.ClearPostFlair = "ClearPostFlair", e.ClearUserFlair = "ClearUserFlair", e.ClubAwardConfirmationFromComment = "ClubAwardConfirmationFromComment", e.ClubAwardConfirmationFromPost = "ClubAwardConfirmationFromPost", e.ClubAwards = "ClubAwards", e.Comment = "Comment", e.CommentForEdit = "CommentForEdit", e.CommentForSocialPreview = "CommentForSocialPreview", e.CommentModerationInfo = "CommentModerationInfo", e.CommentPermalink = "CommentPermalink", e.Comments = "Comments", e.CommentTreeAds = "CommentTreeAds", e.CommunityClubUserPermissions = "CommunityClubUserPermissions", e.CommunityGuide = "CommunityGuide", e.CommunityManagementPage = "CommunityManagementPage", e.CommunityManagementPageTypeahead = "CommunityManagementPageTypeahead", e.CommunityName = "CommunityName", e.CommunitySearch = "CommunitySearch", e.CommunityStatus = "CommunityStatus", e.CommunityStatusForEdit = "CommunityStatusForEdit", e.CommunitySubscriptionFtue = "CommunitySubscriptionFtue", e.CommunitySubscriptionPurchaseDialog = "CommunitySubscriptionPurchaseDialog", e.CommunitySuggestions = "CommunitySuggestions", e.ComposeMessage = "ComposeMessage", e.ContextualSignupPrompt = "ContextualSignupPrompt", e.ContributorProgramMarketingPage = "ContributorProgramMarketingPage", e.ContributorProgramProfilePage = "ContributorProgramProfilePage", e.ContributorProgramVerificationModal = "ContributorProgramVerificationModal", e.ConvertMarkdownToRTJSON = "ConvertMarkdownToRTJSON", e.ConvertRTJSONToMarkdown = "ConvertRTJSONToMarkdown", e.CreateAdAccount = "CreateAdAccount", e.CreateAutomation = "CreateAutomation", e.CreateAvatar = "CreateAvatar", e.CreateAvatarPage = "CreateAvatarPage", e.CreateAwardOrder = "CreateAwardOrder", e.CreateBrandToolsRequest = "CreateBrandToolsRequest", e.CreateCaptchaToken = "CreateCaptchaToken", e.CreateComment = "CreateComment", e.CreateCustomPostSnapshot = "CreateCustomPostSnapshot", e.CreateDraft = "CreateDraft", e.CreateEconOrder = "CreateEconOrder", e.CreateMediaUploadLease = "CreateMediaUploadLease", e.CreateModUserNote = "CreateModUserNote", e.CreatePaymentIntent = "CreatePaymentIntent", e.CreatePayoutAccountOnboardingUrl = "CreatePayoutAccountOnboardingUrl", e.CreatePost = "CreatePost", e.CreateProfilePost = "CreateProfilePost", e.CreateProfileStructuredStylesUploadLease = "CreateProfileStructuredStylesUploadLease", e.CreateSavedResponse = "CreateSavedResponse", e.CreateScheduledPost = "CreateScheduledPost", e.CreateStorefrontOrder = "CreateStorefrontOrder", e.CreateSubreddit = "CreateSubreddit", e.CreateSubredditRule = "CreateSubredditRule", e.CreateSubredditStructuredStylesUploadLease = "CreateSubredditStructuredStylesUploadLease", e.CreateTemporaryEventConfig = "CreateTemporaryEventConfig", e.CreateUserFlair = "CreateUserFlair", e.CrowdControlSubredditSettings = "CrowdControlSubredditSettings", e.CustomFeed = "CustomFeed", e.CustomFeedAddSubreddits = "CustomFeedAddSubreddits", e.CustomFeedCommunities = "CustomFeedCommunities", e.CustomFeedCreate = "CustomFeedCreate", e.CustomFeedCurator = "CustomFeedCurator", e.CustomFeedDelete = "CustomFeedDelete", e.CustomFeedDescription = "CustomFeedDescription", e.CustomFeedDetailsForm = "CustomFeedDetailsForm", e.CustomFeedPosts = "CustomFeedPosts", e.CustomFeedRecommendations = "CustomFeedRecommendations", e.CustomFeedRemoveSubreddits = "CustomFeedRemoveSubreddits", e.CustomFeedsForUser = "CustomFeedsForUser", e.CustomFeedUpdateDetails = "CustomFeedUpdateDetails", e.CustomFeedUpdateSubscriptionState = "CustomFeedUpdateSubscriptionState", e.DeclineModeratorInvite = "DeclineModeratorInvite", e.DeleteAchievementNotifications = "DeleteAchievementNotifications", e.DeleteAutomation = "DeleteAutomation", e.DeleteComment = "DeleteComment", e.DeleteInboxNotifications = "DeleteInboxNotifications", e.DeleteModUserNote = "DeleteModUserNote", e.DeletePost = "DeletePost", e.DeletePostDraft = "DeletePostDraft", e.DeleteProfileSocialLinks = "DeleteProfileSocialLinks", e.DeleteSavedResponse = "DeleteSavedResponse", e.DeleteScheduledPost = "DeleteScheduledPost", e.DeleteSubredditChatChannel = "DeleteSubredditChatChannel", e.DeleteSubredditEmoji = "DeleteSubredditEmoji", e.DeleteSubredditFlairTemplate = "DeleteSubredditFlairTemplate", e.DeleteSubredditMuteSettings = "DeleteSubredditMuteSettings", e.DeleteSubredditRule = "DeleteSubredditRule", e.DeleteSubredditWidget = "DeleteSubredditWidget", e.DisapproveRedditor = "DisapproveRedditor", e.DismissAutomationRecommendation = "DismissAutomationRecommendation", e.DisplayCollectiblesForModal = "DisplayCollectiblesForModal", e.DraftAndScheduled = "DraftAndScheduled", e.EconUiUnit = "EconUiUnit", e.EditAvatar = "EditAvatar", e.EligibleCommunitiesPage = "EligibleCommunitiesPage", e.Embed = "Embed", e.EmbedComment = "EmbedComment", e.EmbedFeed = "EmbedFeed", e.EmojiSettings = "EmojiSettings", e.EndPostEvent = "EndPostEvent", e.EnrollInStreaks = "EnrollInStreaks", e.EstimatedViews = "EstimatedViews", e.EvaluateCommentAutomationsByPostId = "EvaluateCommentAutomationsByPostId", e.EvaluatePostAutomations = "EvaluatePostAutomations", e.Experiences = "Experiences", e.ExploreFeed = "ExploreFeed", e.ExploreTopicFeed = "ExploreTopicFeed", e.ExposeVariant = "ExposeVariant", e.FeedPost = "FeedPost", e.FetchTitle = "FetchTitle", e.FlairedRedditorByName = "FlairedRedditorByName", e.FlairedRedditors = "FlairedRedditors", e.Frontpage = "Frontpage", e.GeneralSearch = "GeneralSearch", e.GeneratedProfileDescriptions = "GeneratedProfileDescriptions", e.GeneratedUsernames = "GeneratedUsernames", e.GenerateSubredditEmojiUploadLease = "GenerateSubredditEmojiUploadLease", e.GetAccessoriesBySection = "GetAccessoriesBySection", e.GetActiveVaultDetails = "GetActiveVaultDetails", e.GetAdBusinessNameById = "GetAdBusinessNameById", e.GetAnswersDynamicConfig = "GetAnswersDynamicConfig", e.GetApprovedUsers = "GetApprovedUsers", e.GetArtistNameById = "GetArtistNameById", e.GetDevvitProducts = "GetDevvitProducts", e.GetFreeNftClaimDrops = "GetFreeNftClaimDrops", e.GetFundingInstrumentsByAdAccountId = "GetFundingInstrumentsByAdAccountId", e.GetFundingInstrumentSecret = "GetFundingInstrumentSecret", e.GetIsCommentGuidanceAvailableFromPostId = "GetIsCommentGuidanceAvailableFromPostId", e.GetLastAuthorModNoteByCommentId = "GetLastAuthorModNoteByCommentId", e.GetLastAuthorModNoteByPostId = "GetLastAuthorModNoteByPostId", e.GetListingById = "GetListingById", e.GetMessageRecipientSubredditInfo = "GetMessageRecipientSubredditInfo", e.GetNftDetails = "GetNftDetails", e.GetPreviousActions = "GetPreviousActions", e.GetRelatedCommunityRecommendations = "GetRelatedCommunityRecommendations", e.GetSharedModPageFragment = "GetSharedModPageFragment", e.GetSingleDynamicConfig = "GetSingleDynamicConfig", e.GetVaultRegistrationChallenge = "GetVaultRegistrationChallenge", e.GiftedClubAccessDialog = "GiftedClubAccessDialog", e.GoldPackages = "GoldPackages", e.GuidesCitationCommentDetails = "GuidesCitationCommentDetails", e.GuidesCitationPostDetails = "GuidesCitationPostDetails", e.GuidesPageConversationDetails = "GuidesPageConversationDetails", e.GuidesPageDetails = "GuidesPageDetails", e.GuidesRecommendedPosts = "GuidesRecommendedPosts", e.HarassmentSubredditSettings = "HarassmentSubredditSettings", e.HideInboxAnnouncements = "HideInboxAnnouncements", e.HighlightedPosts = "HighlightedPosts", e.HomeFeedRightRail = "HomeFeedRightRail", e.HorizontalExperiences = "HorizontalExperiences", e.Identity = "Identity", e.IdentityAppealEligibility = "IdentityAppealEligibility", e.IdentityImmersiveTranslationSetting = "IdentityImmersiveTranslationSetting", e.IdentityModeratorCheck = "IdentityModeratorCheck", e.IdentityUserDataExportEligibility = "IdentityUserDataExportEligibility", e.IdentityUserEmail = "IdentityUserEmail", e.IdentityUserIcon = "IdentityUserIcon", e.IdentityUserName = "IdentityUserName", e.IdentityUserPreferences = "IdentityUserPreferences", e.IgnoreReports = "IgnoreReports", e.InboxAnnouncementsByIds = "InboxAnnouncementsByIds", e.InboxBadgeIndicator = "InboxBadgeIndicator", e.InterestTopics = "InterestTopics", e.InvitedPage = "InvitedPage", e.IsEmailValidForRegistration = "IsEmailValidForRegistration", e.IsUsernameValidForRegistration = "IsUsernameValidForRegistration", e.KeywordLandingPage = "KeywordLandingPage", e.LastModeratedSubreddit = "LastModeratedSubreddit", e.LeftNavBusinessToolsSection = "LeftNavBusinessToolsSection", e.LeftNavCommunitiesSection = "LeftNavCommunitiesSection", e.LeftNavModerationSection = "LeftNavModerationSection", e.LeftNavMultiredditsSection = "LeftNavMultiredditsSection", e.ManageSubscriptionDetailDialog = "ManageSubscriptionDetailDialog", e.ManageSubscriptionsListDialog = "ManageSubscriptionsListDialog", e.MarkInboxAnnouncementsRead = "MarkInboxAnnouncementsRead", e.MarkNotificationRead = "MarkNotificationRead", e.MarkPrivateMessageAsRead = "MarkPrivateMessageAsRead", e.MediaAuthInfo = "MediaAuthInfo", e.MediaLinks = "MediaLinks", e.ModAchievementsPage = "ModAchievementsPage", e.ModActivityPanel = "ModActivityPanel", e.ModActivityPreview = "ModActivityPreview", e.ModActivityPreviewHovercard = "ModActivityPreviewHovercard", e.ModAllSubredditPermissions = "ModAllSubredditPermissions", e.ModAuthorFlair = "ModAuthorFlair", e.ModAutomationRecommendation = "ModAutomationRecommendation", e.ModAutomationRules = "ModAutomationRules", e.ModAutomationsPage = "ModAutomationsPage", e.ModBanInfoForUser = "ModBanInfoForUser", e.ModBulkApprove = "ModBulkApprove", e.ModBulkIgnore = "ModBulkIgnore", e.ModBulkLock = "ModBulkLock", e.ModBulkMarkNSFW = "ModBulkMarkNSFW", e.ModBulkMarkSpoiler = "ModBulkMarkSpoiler", e.ModBulkRemove = "ModBulkRemove", e.ModBulkUnignore = "ModBulkUnignore", e.ModBulkUnlock = "ModBulkUnlock", e.ModBulkUnmarkNSFW = "ModBulkUnmarkNSFW", e.ModBulkUnmarkSpoiler = "ModBulkUnmarkSpoiler", e.ModBulkUpdatePostFlair = "ModBulkUpdatePostFlair", e.ModCommunityChatContentControlPage = "ModCommunityChatContentControlPage", e.ModCommunityChatRequirementsPage = "ModCommunityChatRequirementsPage", e.ModCommunityGold = "ModCommunityGold", e.ModeratorEvaluateCommentAutomations = "ModeratorEvaluateCommentAutomations", e.ModeratorEvaluatePostAutomations = "ModeratorEvaluatePostAutomations", e.ModeratorsPage = "ModeratorsPage", e.ModGetBannedData = "ModGetBannedData", e.ModGetMutedData = "ModGetMutedData", e.ModGetUserManagementData = "ModGetUserManagementData", e.ModGetUserRedditorInfoByName = "ModGetUserRedditorInfoByName", e.ModGrowthInsightsPage = "ModGrowthInsightsPage", e.ModHierarchyPage = "ModHierarchyPage", e.ModInsightsModQueueEntrypoint = "ModInsightsModQueueEntrypoint", e.ModInsightsWidgetData = "ModInsightsWidgetData", e.ModLogInsightsSummary = "ModLogInsightsSummary", e.ModLogItems = "ModLogItems", e.ModLogPage = "ModLogPage", e.ModMuteInfoForUser = "ModMuteInfoForUser", e.ModNav = "ModNav", e.ModNotesModActions = "ModNotesModActions", e.ModNotesOverview = "ModNotesOverview", e.ModNotesRail = "ModNotesRail", e.ModNotesRailUserContent = "ModNotesRailUserContent", e.ModPermissions = "ModPermissions", e.ModPermissionsRightRail = "ModPermissionsRightRail", e.ModPostAndCommentSettings = "ModPostAndCommentSettings", e.ModQueue = "ModQueue", e.ModQueueItems = "ModQueueItems", e.ModRemovalReasons = "ModRemovalReasons", e.ModReportsAndRemovalsInsightsPage = "ModReportsAndRemovalsInsightsPage", e.ModRulesItems = "ModRulesItems", e.ModSafetySmartEscalations = "ModSafetySmartEscalations", e.ModSafetySubredditSettings = "ModSafetySubredditSettings", e.ModSavedResponseOptions = "ModSavedResponseOptions", e.ModSavedResponses = "ModSavedResponses", e.ModSavedResponsesPage = "ModSavedResponsesPage", e.ModScheduledPostsPage = "ModScheduledPostsPage", e.ModSettingsGeneralPage = "ModSettingsGeneralPage", e.ModSettingsNotificationsPage = "ModSettingsNotificationsPage", e.ModSettingsPrivacyPage = "ModSettingsPrivacyPage", e.ModSubredditAutomationRecommendationsIds = "ModSubredditAutomationRecommendationsIds", e.ModSubredditLookAndFeelSettings = "ModSubredditLookAndFeelSettings", e.ModTeamHealthInsightsPage = "ModTeamHealthInsightsPage", e.ModToolsSetYearInReviewAvailability = "ModToolsSetYearInReviewAvailability", e.ModUserNotes = "ModUserNotes", e.ModUserTypeahead = "ModUserTypeahead", e.MultiContentReportingSearch = "MultiContentReportingSearch", e.MutedSubreddits = "MutedSubreddits", e.MuteMember = "MuteMember", e.MyModeratedSubreddits = "MyModeratedSubreddits", e.NamedEntityFeed = "NamedEntityFeed", e.NotificationInboxFeed = "NotificationInboxFeed", e.NsfwSubreddits = "NsfwSubreddits", e.OptInToGatedSubreddit = "OptInToGatedSubreddit", e.PDPRightRailRelatedPosts = "PDPRightRailRelatedPosts", e.PDPRightRailTopicPosts = "PDPRightRailTopicPosts", e.PersonalizedYearInReview = "PersonalizedYearInReview", e.Popular = "Popular", e.PopularCommunities = "PopularCommunities", e.PopularFeedRightRail = "PopularFeedRightRail", e.Post = "Post", e.PostCollaborators = "PostCollaborators", e.PostCreationPage = "PostCreationPage", e.PostDirectoriesAvailable = "PostDirectoriesAvailable", e.PostDirectoryPage = "PostDirectoryPage", e.PostDraftCount = "PostDraftCount", e.PostFlair = "PostFlair", e.PostFlairSettings = "PostFlairSettings", e.PostForEdit = "PostForEdit", e.PostForHighlights = "PostForHighlights", e.PostForInstagramStories = "PostForInstagramStories", e.PostForSocialPreview = "PostForSocialPreview", e.PostForWatermarking = "PostForWatermarking", e.PostGuidanceValidation = "PostGuidanceValidation", e.PostLevelCrowdControlSettings = "PostLevelCrowdControlSettings", e.PostModerationInfo = "PostModerationInfo", e.PostStatsPage = "PostStatsPage", e.PostWithoutSubreddit = "PostWithoutSubreddit", e.PremiumMarketingPage = "PremiumMarketingPage", e.PreviewCommentAutomation = "PreviewCommentAutomation", e.PreviewPostAutomation = "PreviewPostAutomation", e.ProfileAccountPerformance = "ProfileAccountPerformance", e.ProfileActiveSubreddits = "ProfileActiveSubreddits", e.ProfileBrandMentions = "ProfileBrandMentions", e.ProfileBusinessToolsPage = "ProfileBusinessToolsPage", e.ProfileCommunityFinderPage = "ProfileCommunityFinderPage", e.ProfileContributions = "ProfileContributions", e.ProfileCreationPage = "ProfileCreationPage", e.ProfileDashboardOverview = "ProfileDashboardOverview", e.ProfileDashboardPage = "ProfileDashboardPage", e.ProfileDashboardTrendingConvos = "ProfileDashboardTrendingConvos", e.ProfileFollowers = "ProfileFollowers", e.ProfileForSocialPreview = "ProfileForSocialPreview", e.ProfileHeader = "ProfileHeader", e.ProfileKeywords = "ProfileKeywords", e.ProfileLeftNav = "ProfileLeftNav", e.ProfileModeratedSubreddits = "ProfileModeratedSubreddits", e.ProfilePerformance = "ProfilePerformance", e.ProfilePostStatsDownload = "ProfilePostStatsDownload", e.ProfileRelatedKeywords = "ProfileRelatedKeywords", e.ProfileSettings = "ProfileSettings", e.ProfileTrendingConvoDetails = "ProfileTrendingConvoDetails", e.ProfileTrendingConvoMentions = "ProfileTrendingConvoMentions", e.ProfileTrendingConvos = "ProfileTrendingConvos", e.ProfileTrendMonitoringPage = "ProfileTrendMonitoringPage", e.ProfileTrendsCommunityAffinityTable = "ProfileTrendsCommunityAffinityTable", e.ProfileTrendsMentionsChart = "ProfileTrendsMentionsChart", e.ProfileTrendsOverviewChart = "ProfileTrendsOverviewChart", e.ProfileTrendsSentimentChart = "ProfileTrendsSentimentChart", e.ProfileTypeahead = "ProfileTypeahead", e.PromotedFloatingCTA = "PromotedFloatingCTA", e.PromotePost = "PromotePost", e.PublishSubmissionGroups = "PublishSubmissionGroups", e.RecentPosts = "RecentPosts", e.RecommendedMediaFeed = "RecommendedMediaFeed", e.RecommendsFeed = "RecommendsFeed", e.RecommendsLeaderboard = "RecommendsLeaderboard", e.RecommendsPage = "RecommendsPage", e.RecoverUsername = "RecoverUsername", e.RedditChat = "RedditChat", e.RedditorByName = "RedditorByName", e.RedditorIdByName = "RedditorIdByName", e.RedditProBrandCategories = "RedditProBrandCategories", e.RedditProOnboardingPage = "RedditProOnboardingPage", e.RegisterPushToken = "RegisterPushToken", e.RegisterVaultAddress = "RegisterVaultAddress", e.RemoveHighlightedPost = "RemoveHighlightedPost", e.RemoveWikiContributor = "RemoveWikiContributor", e.RemoveWikiContributorBan = "RemoveWikiContributorBan", e.RemoveWikiPageEditor = "RemoveWikiPageEditor", e.RenderSavedResponseTemplate = "RenderSavedResponseTemplate", e.RenderSavedResponseTemplateBySubredditId = "RenderSavedResponseTemplateBySubredditId", e.ReorderFlairs = "ReorderFlairs", e.ReorderHighlightedPosts = "ReorderHighlightedPosts", e.ReorderSavedResponses = "ReorderSavedResponses", e.ReorderSubredditRules = "ReorderSubredditRules", e.ReorderSubredditWidgets = "ReorderSubredditWidgets", e.ReportAward = "ReportAward", e.ReportComment = "ReportComment", e.ReportForm = "ReportForm", e.ReportFormData = "ReportFormData", e.ReportPost = "ReportPost", e.ReportPrivateMessage = "ReportPrivateMessage", e.ReportRedditor = "ReportRedditor", e.ReportUserDetails = "ReportUserDetails", e.ReputationSubredditSettings = "ReputationSubredditSettings", e.RequestAppeal = "RequestAppeal", e.RequestCommunitySettingsChange = "RequestCommunitySettingsChange", e.RequestPasswordReset = "RequestPasswordReset", e.RequestUserDataExport = "RequestUserDataExport", e.RestoreWikiPageRevision = "RestoreWikiPageRevision", e.SafetyFilterEvaluationsAsModerator = "SafetyFilterEvaluationsAsModerator", e.SafetyFiltersModInsightsChart = "SafetyFiltersModInsightsChart", e.SafetyFiltersOverview = "SafetyFiltersOverview", e.SaveSubredditEmoji = "SaveSubredditEmoji", e.SaveWikiPageSettings = "SaveWikiPageSettings", e.ScheduleTemporaryEventRun = "ScheduleTemporaryEventRun", e.SearchDynamicComponents = "SearchDynamicComponents", e.SearchDynamicTypeahead = "SearchDynamicTypeahead", e.SearchTypeahead = "SearchTypeahead", e.SendDirectChatToRedditor = "SendDirectChatToRedditor", e.SendMessageToSubreddit = "SendMessageToSubreddit", e.SetBrandAnalyticsKeywords = "SetBrandAnalyticsKeywords", e.SetProfileSocialLinks = "SetProfileSocialLinks", e.SetSubredditEmojisEnabled = "SetSubredditEmojisEnabled", e.SetSuggestedSort = "SetSuggestedSort", e.SettingsAccountPage = "SettingsAccountPage", e.SettingsEmailPage = "SettingsEmailPage", e.SettingsModNotificationModal = "SettingsModNotificationModal", e.SettingsNotificationsCommunities = "SettingsNotificationsCommunities", e.SettingsNotificationsPage = "SettingsNotificationsPage", e.SettingsPreferencesPage = "SettingsPreferencesPage", e.SettingsPrivacyPage = "SettingsPrivacyPage", e.SettingsProfilePage = "SettingsProfilePage", e.ShareMenu = "ShareMenu", e.ShopArtistsData = "ShopArtistsData", e.ShopGalleryData = "ShopGalleryData", e.ShopGallerySetup = "ShopGallerySetup", e.SimilarSubreddits = "SimilarSubreddits", e.StorefrontLayout = "StorefrontLayout", e.StorefrontLayoutData = "StorefrontLayoutData", e.StoreUxtargetingAction = "StoreUxtargetingAction", e.SubmitMedia = "SubmitMedia", e.SubmitScheduledPostNow = "SubmitScheduledPostNow", e.SubmitUserContactForAd = "SubmitUserContactForAd", e.Subreddit = "Subreddit", e.SubredditByName = "SubredditByName", e.SubredditChatChannelModerationSettings = "SubredditChatChannelModerationSettings", e.SubredditChatChannels = "SubredditChatChannels", e.SubredditDirectoryPage = "SubredditDirectoryPage", e.SubredditEmojis = "SubredditEmojis", e.SubredditEmojiTemplates = "SubredditEmojiTemplates", e.SubredditEmotes = "SubredditEmotes", e.SubredditFeed = "SubredditFeed", e.SubredditPostFlairTemplates = "SubredditPostFlairTemplates", e.SubredditPostingEligibility = "SubredditPostingEligibility", e.SubredditPostingEligibilityCriteria = "SubredditPostingEligibilityCriteria", e.SubredditRightRail = "SubredditRightRail", e.SubredditScheduledPosts = "SubredditScheduledPosts", e.SubredditStyles = "SubredditStyles", e.SubredditToManageHighlights = "SubredditToManageHighlights", e.SubredditTypeahead = "SubredditTypeahead", e.SubredditWidgets = "SubredditWidgets", e.SubredditYearInReview = "SubredditYearInReview", e.TaxonomyTopicsInfo = "TaxonomyTopicsInfo", e.TemporaryEventConfigs = "TemporaryEventConfigs", e.TemporaryEventRuns = "TemporaryEventRuns", e.TemporaryEventsPage = "TemporaryEventsPage", e.TemporaryEventsPresets = "TemporaryEventsPresets", e.TemporaryEventsView = "TemporaryEventsView", e.TestAndroidModqueue = "TestAndroidModqueue", e.TestIOSModqueue = "TestIOSModqueue", e.TestModQueueItemsNoAwards = "TestModQueueItemsNoAwards", e.TestSizeModQueueItems = "TestSizeModQueueItems", e.ToggleHideWikiPageRevision = "ToggleHideWikiPageRevision", e.TopicBySlug = "TopicBySlug", e.TopicFeedBySlug = "TopicFeedBySlug", e.TranslatedComment = "TranslatedComment", e.TranslatedPost = "TranslatedPost", e.TranslatedPosts = "TranslatedPosts", e.TranslatedStrings = "TranslatedStrings", e.TrendingCarousel = "TrendingCarousel", e.TrendingPosts = "TrendingPosts", e.TrendingSearches = "TrendingSearches", e.TrendPage = "TrendPage", e.TrophyCategories = "TrophyCategories", e.TrophyCategoriesIdentity = "TrophyCategoriesIdentity", e.UnbanSubredditUser = "UnbanSubredditUser", e.UnignoreReports = "UnignoreReports", e.UnlockedCommunitiesPage = "UnlockedCommunitiesPage", e.UnmuteMember = "UnmuteMember", e.UpdateAccountGender = "UpdateAccountGender", e.UpdateAccountPreferences = "UpdateAccountPreferences", e.UpdateAchievementTrophyIsNew = "UpdateAchievementTrophyIsNew", e.UpdateAchievementTrophyIsPinned = "UpdateAchievementTrophyIsPinned", e.UpdateAdHideState = "UpdateAdHideState", e.UpdateAdsPaymentMethod = "UpdateAdsPaymentMethod", e.UpdateAutomation = "UpdateAutomation", e.UpdateAutomationRank = "UpdateAutomationRank", e.UpdateBrandOnboarding = "UpdateBrandOnboarding", e.UpdateChatMessagesAsRead = "UpdateChatMessagesAsRead", e.UpdateCollectibleOutfitSubmission = "UpdateCollectibleOutfitSubmission", e.UpdateComment = "UpdateComment", e.UpdateCommentDistinguishedState = "UpdateCommentDistinguishedState", e.UpdateCommentFollowState = "UpdateCommentFollowState", e.UpdateCommentLockedState = "UpdateCommentLockedState", e.UpdateCommentSaveState = "UpdateCommentSaveState", e.UpdateCommentSendRepliesState = "UpdateCommentSendRepliesState", e.UpdateCommentStickyState = "UpdateCommentStickyState", e.UpdateCommentVoteState = "UpdateCommentVoteState", e.UpdateCommercialCommunicationState = "UpdateCommercialCommunicationState", e.UpdateCommunityStatus = "UpdateCommunityStatus", e.UpdateContributorRequestTimestamp = "UpdateContributorRequestTimestamp", e.UpdateDraft = "UpdateDraft", e.UpdateEventTime = "UpdateEventTime", e.UpdateHatefulContentFilters = "UpdateHatefulContentFilters", e.UpdateHighlightedPost = "UpdateHighlightedPost", e.UpdateInboxActivitySeenState = "UpdateInboxActivitySeenState", e.UpdateInboxAnnouncementOptOuts = "UpdateInboxAnnouncementOptOuts", e.UpdateInboxNotificationPreferences = "UpdateInboxNotificationPreferences", e.UpdateMessageDistinguishedState = "UpdateMessageDistinguishedState", e.UpdateModeratorHierarchy = "UpdateModeratorHierarchy", e.UpdateModPnSettingStatus = "UpdateModPnSettingStatus", e.UpdateModPnSettingThreshold = "UpdateModPnSettingThreshold", e.UpdateModPreferences = "UpdateModPreferences", e.UpdateMultiredditFavoriteState = "UpdateMultiredditFavoriteState", e.UpdateNotificationPreferences = "UpdateNotificationPreferences", e.UpdatePaidSubscriberBadgeVisibilityDialog = "UpdatePaidSubscriberBadgeVisibilityDialog", e.UpdatePaidSubscriberStatusVisibility = "UpdatePaidSubscriberStatusVisibility", e.UpdatePost = "UpdatePost", e.UpdatePostCollaborators = "UpdatePostCollaborators", e.UpdatePostDistinguishedState = "UpdatePostDistinguishedState", e.UpdatePostFlair = "UpdatePostFlair", e.UpdatePostFollowState = "UpdatePostFollowState", e.UpdatePostHideState = "UpdatePostHideState", e.UpdatePostLevelCrowdControlSettings = "UpdatePostLevelCrowdControlSettings", e.UpdatePostLockedState = "UpdatePostLockedState", e.UpdatePostNsfwState = "UpdatePostNsfwState", e.UpdatePostPollVoteState = "UpdatePostPollVoteState", e.UpdatePostReminderState = "UpdatePostReminderState", e.UpdatePostRequirements = "UpdatePostRequirements", e.UpdatePostSaveState = "UpdatePostSaveState", e.UpdatePostSendRepliesState = "UpdatePostSendRepliesState", e.UpdatePostSpoilerState = "UpdatePostSpoilerState", e.UpdatePostStickyState = "UpdatePostStickyState", e.UpdatePostVoteState = "UpdatePostVoteState", e.UpdateProfileFollowState = "UpdateProfileFollowState", e.UpdateProfilePrivacyPreferences = "UpdateProfilePrivacyPreferences", e.UpdateProfileSettings = "UpdateProfileSettings", e.UpdateProfileSocialLinks = "UpdateProfileSocialLinks", e.UpdateProfileStyles = "UpdateProfileStyles", e.UpdateRecommendationPreferences = "UpdateRecommendationPreferences", e.UpdateRedditorAllowlistState = "UpdateRedditorAllowlistState", e.UpdateRedditorBlockState = "UpdateRedditorBlockState", e.UpdateReportState = "UpdateReportState", e.UpdateSavedResponse = "UpdateSavedResponse", e.UpdateScheduledPost = "UpdateScheduledPost", e.UpdateSearchPreferences = "UpdateSearchPreferences", e.UpdateSensitiveAdsPreferences = "UpdateSensitiveAdsPreferences", e.UpdateSpokenLanguagesPreference = "UpdateSpokenLanguagesPreference", e.UpdateStorefrontListings = "UpdateStorefrontListings", e.UpdateSubredditAchievementsSettings = "UpdateSubredditAchievementsSettings", e.UpdateSubredditBanner = "UpdateSubredditBanner", e.UpdateSubredditChannelsSettings = "UpdateSubredditChannelsSettings", e.UpdateSubredditChatChannel = "UpdateSubredditChatChannel", e.UpdateSubredditColors = "UpdateSubredditColors", e.UpdateSubredditEmojiPermissions = "UpdateSubredditEmojiPermissions", e.UpdateSubredditFavoriteState = "UpdateSubredditFavoriteState", e.UpdateSubredditFlair = "UpdateSubredditFlair", e.UpdateSubredditFlairPromptSettings = "UpdateSubredditFlairPromptSettings", e.UpdateSubredditIcon = "UpdateSubredditIcon", e.UpdateSubredditModeratorState = "UpdateSubredditModeratorState", e.UpdateSubredditMuteAndNotificationLevelSettings = "UpdateSubredditMuteAndNotificationLevelSettings", e.UpdateSubredditMuteSettings = "UpdateSubredditMuteSettings", e.UpdateSubredditNotificationSettings = "UpdateSubredditNotificationSettings", e.UpdateSubredditPostFlairSettings = "UpdateSubredditPostFlairSettings", e.UpdateSubredditQuarantineOptInState = "UpdateSubredditQuarantineOptInState", e.UpdateSubredditRule = "UpdateSubredditRule", e.UpdateSubredditSettings = "UpdateSubredditSettings", e.UpdateSubredditSubscriptions = "UpdateSubredditSubscriptions", e.UpdateSubredditUserFlairSettings = "UpdateSubredditUserFlairSettings", e.UpdateSubredditWidget = "UpdateSubredditWidget", e.UpdateTemporaryEventConfig = "UpdateTemporaryEventConfig", e.UpdateTopicPreferences = "UpdateTopicPreferences", e.UpdateUserFlair = "UpdateUserFlair", e.UpdateUserFlairAndEnabledStatus = "UpdateUserFlairAndEnabledStatus", e.UpdateWelcomePageContent = "UpdateWelcomePageContent", e.UpdateWelcomePageState = "UpdateWelcomePageState", e.UpsertBanEvasionSubredditSettings = "UpsertBanEvasionSubredditSettings", e.UpsertModSafetySubredditSettings = "UpsertModSafetySubredditSettings", e.UpsertWikiContributorBan = "UpsertWikiContributorBan", e.UpsertWikiPage = "UpsertWikiPage", e.UserAvatarBackgrounds = "UserAvatarBackgrounds", e.UserAvatarOutfits = "UserAvatarOutfits", e.UserCollectibleSubmissions = "UserCollectibleSubmissions", e.UserCommunityAchievements = "UserCommunityAchievements", e.UserDrawer = "UserDrawer", e.UserFlairSettings = "UserFlairSettings", e.UserFlairTemplates = "UserFlairTemplates", e.UserHoverCard = "UserHoverCard", e.UserNameById = "UserNameById", e.UserProfile = "UserProfile", e.ValidateCreatePostInput = "ValidateCreatePostInput", e.ValidateCreateSubredditInput = "ValidateCreateSubredditInput", e.ValidateSavedResponseTemplate = "ValidateSavedResponseTemplate", e.VerifyUserIdentity = "VerifyUserIdentity", e.WhereToCrosspostNewModSuggestions = "WhereToCrosspostNewModSuggestions", e.WhereToPost = "WhereToPost", e.WikiApprovedContributors = "WikiApprovedContributors", e.WikiBannedContributors = "WikiBannedContributors", e.WikiComparisonDiff = "WikiComparisonDiff", e.WikiGeneralSettings = "WikiGeneralSettings", e.WikiPage = "WikiPage", e.WikiPageContributors = "WikiPageContributors", e.WikiPageRevisions = "WikiPageRevisions", e.WikiPageSettings = "WikiPageSettings", e.WikiPageTree = "WikiPageTree", e.WikiRecentRevisions = "WikiRecentRevisions", e.WikiRevisionByCursor = "WikiRevisionByCursor", e.WikiTemplates = "WikiTemplates", e.XFeed = "XFeed"
}(Pl || (Pl = {})), Pl.AcceptAutomationRecommendation, Pl.AcceptModeratorInvite, Pl.AddBrandAnalyticsSearchQueryKeyword, Pl.AddSubredditWidget, Pl.AddWikiContributor, Pl.AddWikiPageEditor, Pl.ApproveRedditor, Pl.BackupVault, Pl.BanSubredditUser, Pl.CancelEconRecurringPayment, Pl.CancelPaySubscription, Pl.CancelTemporaryEventRun, Pl.ChangePaymentMethod, Pl.ChangeStripePaymentMethod, Pl.ChatBanChatChannelUser, Pl.ChatBanSubredditUser, Pl.ChatCreateShareUrl, Pl.ChatCreateSubredditChannel, Pl.ChatCreateUccChatChannel, Pl.ChatDeleteChannel, Pl.ChatModApprove, Pl.ChatModRemove, Pl.ChatPinMessagesToSubredditChannel, Pl.ChatRetractChatChannelUserRoleInvitation, Pl.ChatUnbanChatChannelUser, Pl.ChatUnbanSubredditUser, Pl.ChatUpdateAccountPreferences, Pl.ChatUpdateChannel, Pl.ChatUpdateChannelModerationSettings, Pl.ChatUpdateChatChannelUserRolePromotion, Pl.ChatUpdateChatChannelUsersRoles, Pl.ChatUpdateCrowdControlLevel, Pl.ChatUpdateRedditorBlockState, Pl.Checkout, Pl.CheckoutDevvitProducts, Pl.ClaimFreeNft, Pl.ClearPostFlair, Pl.ClearUserFlair, Pl.ComposeMessage, Pl.CreateAdAccount, Pl.CreateAutomation, Pl.CreateAvatar, Pl.CreateAwardOrder, Pl.CreateCaptchaToken, Pl.CreateCustomPostSnapshot, Pl.CreateEconOrder, Pl.CreateMediaUploadLease, Pl.CreateModUserNote, Pl.CreatePaymentIntent, Pl.CreateProfileStructuredStylesUploadLease, Pl.CreateSavedResponse, Pl.CreateStorefrontOrder, Pl.CreateSubreddit, Pl.CreateSubredditRule, Pl.CreateSubredditStructuredStylesUploadLease, Pl.CreateUserFlair, Pl.CustomFeedAddSubreddits, Pl.CustomFeedCreate, Pl.CustomFeedDelete, Pl.CustomFeedRemoveSubreddits, Pl.CustomFeedUpdateSubscriptionState, Pl.DeclineModeratorInvite, Pl.DeleteAchievementNotifications, Pl.DeleteAutomation, Pl.DeleteComment, Pl.DeleteInboxNotifications, Pl.DeleteModUserNote, Pl.DeletePost, Pl.DeletePostDraft, Pl.DeleteProfileSocialLinks, Pl.DeleteSavedResponse, Pl.DeleteScheduledPost, Pl.DeleteSubredditChatChannel, Pl.DeleteSubredditEmoji, Pl.DeleteSubredditFlairTemplate, Pl.DeleteSubredditMuteSettings, Pl.DeleteSubredditRule, Pl.DeleteSubredditWidget, Pl.DisapproveRedditor, Pl.DismissAutomationRecommendation, Pl.EnrollInStreaks, Pl.ExposeVariant, Pl.GenerateSubredditEmojiUploadLease, Pl.HideInboxAnnouncements, Pl.IdentityUserPreferences, Pl.IgnoreReports, Pl.MarkInboxAnnouncementsRead, Pl.MarkNotificationRead, Pl.MarkPrivateMessageAsRead, Pl.ModBulkApprove, Pl.ModBulkIgnore, Pl.ModBulkLock, Pl.ModBulkMarkNSFW, Pl.ModBulkMarkSpoiler, Pl.ModBulkRemove, Pl.ModBulkUnignore, Pl.ModBulkUnlock, Pl.ModBulkUnmarkNSFW, Pl.ModBulkUnmarkSpoiler, Pl.ModBulkUpdatePostFlair, Pl.ModGetUserRedditorInfoByName, Pl.ModToolsSetYearInReviewAvailability, Pl.MuteMember, Pl.OptInToGatedSubreddit, Pl.PostGuidanceValidation, Pl.PromotePost, Pl.PublishSubmissionGroups, Pl.RegisterPushToken, Pl.RegisterVaultAddress, Pl.RemoveHighlightedPost, Pl.RemoveWikiContributor, Pl.RemoveWikiContributorBan, Pl.RemoveWikiPageEditor, Pl.RenderSavedResponseTemplate, Pl.RenderSavedResponseTemplateBySubredditId, Pl.ReorderFlairs, Pl.ReorderHighlightedPosts, Pl.ReorderSavedResponses, Pl.ReorderSubredditRules, Pl.ReorderSubredditWidgets, Pl.ReportAward, Pl.ReportComment, Pl.ReportPost, Pl.ReportPrivateMessage, Pl.ReportRedditor, Pl.ReportUserDetails, Pl.RequestAppeal, Pl.RequestCommunitySettingsChange, Pl.RequestUserDataExport, Pl.RestoreWikiPageRevision, Pl.SaveSubredditEmoji, Pl.SaveWikiPageSettings, Pl.SendDirectChatToRedditor, Pl.SendMessageToSubreddit, Pl.SetBrandAnalyticsKeywords, Pl.SetProfileSocialLinks, Pl.SetSubredditEmojisEnabled, Pl.SetSuggestedSort, Pl.StoreUxtargetingAction, Pl.SubmitMedia, Pl.SubmitScheduledPostNow, Pl.SubredditWidgets, Pl.ToggleHideWikiPageRevision, Pl.UnbanSubredditUser, Pl.UnignoreReports, Pl.UnmuteMember, Pl.UpdateAccountGender, Pl.UpdateAccountPreferences, Pl.UpdateAchievementTrophyIsNew, Pl.UpdateAchievementTrophyIsPinned, Pl.UpdateAdHideState, Pl.UpdateAdsPaymentMethod, Pl.UpdateAutomation, Pl.UpdateAutomationRank, Pl.UpdateBrandOnboarding, Pl.UpdateChatMessagesAsRead, Pl.UpdateCollectibleOutfitSubmission, Pl.UpdateComment, Pl.UpdateCommentDistinguishedState, Pl.UpdateCommentFollowState, Pl.UpdateCommentLockedState, Pl.UpdateCommentSaveState, Pl.UpdateCommentSendRepliesState, Pl.UpdateCommentStickyState, Pl.UpdateCommentVoteState, Pl.UpdateCommercialCommunicationState, Pl.UpdateCommunityStatus, Pl.UpdateContributorRequestTimestamp, Pl.UpdateEventTime, Pl.UpdateHighlightedPost, Pl.UpdateInboxActivitySeenState, Pl.UpdateInboxAnnouncementOptOuts, Pl.UpdateInboxNotificationPreferences, Pl.UpdateMessageDistinguishedState, Pl.UpdateModPnSettingStatus, Pl.UpdateModPnSettingThreshold, Pl.UpdateModPreferences, Pl.UpdateMultiredditFavoriteState, Pl.UpdateNotificationPreferences, Pl.UpdatePaidSubscriberStatusVisibility, Pl.UpdatePostCollaborators, Pl.UpdatePostDistinguishedState, Pl.UpdatePostFlair, Pl.UpdatePostFollowState, Pl.UpdatePostHideState, Pl.UpdatePostLevelCrowdControlSettings, Pl.UpdatePostLockedState, Pl.UpdatePostNsfwState, Pl.UpdatePostPollVoteState, Pl.UpdatePostReminderState, Pl.UpdatePostRequirements, Pl.UpdatePostSaveState, Pl.UpdatePostSendRepliesState, Pl.UpdatePostSpoilerState, Pl.UpdatePostStickyState, Pl.UpdatePostVoteState, Pl.UpdateProfileFollowState, Pl.UpdateProfilePrivacyPreferences, Pl.UpdateProfileSettings, Pl.UpdateProfileSocialLinks, Pl.UpdateProfileStyles, Pl.UpdateRecommendationPreferences, Pl.UpdateRedditorAllowlistState, Pl.UpdateRedditorBlockState, Pl.UpdateReportState, Pl.UpdateSavedResponse, Pl.UpdateScheduledPost, Pl.UpdateSearchPreferences, Pl.UpdateSensitiveAdsPreferences, Pl.UpdateSpokenLanguagesPreference, Pl.UpdateStorefrontListings, Pl.UpdateSubredditAchievementsSettings, Pl.UpdateSubredditBanner, Pl.UpdateSubredditChatChannel, Pl.UpdateSubredditColors, Pl.UpdateSubredditEmojiPermissions, Pl.UpdateSubredditFavoriteState, Pl.UpdateSubredditFlair, Pl.UpdateSubredditFlairPromptSettings, Pl.UpdateSubredditIcon, Pl.UpdateSubredditModeratorState, Pl.UpdateSubredditMuteAndNotificationLevelSettings, Pl.UpdateSubredditMuteSettings, Pl.UpdateSubredditNotificationSettings, Pl.UpdateSubredditPostFlairSettings, Pl.UpdateSubredditQuarantineOptInState, Pl.UpdateSubredditRule, Pl.UpdateSubredditSettings, Pl.UpdateSubredditSubscriptions, Pl.UpdateSubredditUserFlairSettings, Pl.UpdateSubredditWidget, Pl.UpdateUserFlair, Pl.UpdateUserFlairAndEnabledStatus, Pl.UpdateWelcomePageContent, Pl.UpdateWelcomePageState, Pl.UpsertModSafetySubredditSettings, Pl.UpsertWikiContributorBan, Pl.UpsertWikiPage, Pl.AchievementTrophyById, Pl.AchievementUnlockedNotifications, Pl.AddSubredditWidget, Pl.AllowlistedRedditorInfo, Pl.BackupVault, Pl.BlockedAccounts, Pl.BoostedPostAdInsights, Pl.BrandAnalyticsSearchKeyword, Pl.ChatBannedUsers, Pl.ChatBlockedRedditors, Pl.ChatContentControlSettings, Pl.ChatCrowdControlSettings, Pl.ChatCurrentUserContext, Pl.ChatGetChatChannelBannedUsers, Pl.ChatGetUccChannelTaggingInfo, Pl.ChatGetUserMessageRequestSetting, Pl.ChatIsUserBannedFromChatChannel, Pl.ChatQueryTagSubreddits, Pl.ChatRedditors, Pl.ChatRedditorsByName, Pl.ChatReportForm, Pl.ChatSearchChatMessageReactionIcons, Pl.ChatShareUrl, Pl.ChatSubreddit, Pl.ClaimFreeNft, Pl.CommunityName, Pl.CommunitySearch, Pl.CommunitySuggestions, Pl.ConvertMarkdownToRTJSON, Pl.ConvertRTJSONToMarkdown, Pl.CreateAvatar, Pl.CreateCustomPostSnapshot, Pl.CreateTemporaryEventConfig, Pl.DeleteSubredditWidget, Pl.EligibleCommunitiesPage, Pl.EndPostEvent, Pl.EnrollInStreaks, Pl.EvaluateCommentAutomationsByPostId, Pl.EvaluatePostAutomations, Pl.FetchTitle, Pl.GeneratedProfileDescriptions, Pl.GeneratedUsernames, Pl.GetAnswersDynamicConfig, Pl.GetApprovedUsers, Pl.GetFundingInstrumentSecret, Pl.GetIsCommentGuidanceAvailableFromPostId, Pl.GetMessageRecipientSubredditInfo, Pl.GetVaultRegistrationChallenge, Pl.IdentityImmersiveTranslationSetting, Pl.IsEmailValidForRegistration, Pl.IsUsernameValidForRegistration, Pl.MediaAuthInfo, Pl.ModAutomationRules, Pl.ModeratorEvaluateCommentAutomations, Pl.ModeratorEvaluatePostAutomations, Pl.MutedSubreddits, Pl.PreviewCommentAutomation, Pl.PreviewPostAutomation, Pl.ProfileKeywords, Pl.RedditorByName, Pl.RedditorIdByName, Pl.RegisterVaultAddress, Pl.ReorderSubredditWidgets, Pl.ReportUserDetails, Pl.SafetyFilterEvaluationsAsModerator, Pl.ScheduleTemporaryEventRun, Pl.SettingsModNotificationModal, Pl.SettingsNotificationsCommunities, Pl.SubredditByName, Pl.SubredditStyles, Pl.SubredditTypeahead, Pl.SubredditWidgets, Pl.TaxonomyTopicsInfo, Pl.TrophyCategories, Pl.UnlockedCommunitiesPage, Pl.UpdateEventTime, Pl.UpdateSubredditAchievementsSettings, Pl.UpdateSubredditWidget, Pl.UpdateTemporaryEventConfig, Pl.UserCommunityAchievements, Pl.ValidateCreatePostInput, Pl.ValidateCreateSubredditInput, Pl.ValidateSavedResponseTemplate, Pl.WhereToCrosspostNewModSuggestions, Pl.WikiComparisonDiff, Pl.WikiRevisionByCursor;
const wl = ["https://ads.reddit.com", "https://reddit-service-ads-ui"];

function Rl(e) {
    window.Sentry?.captureMessage?.(e)
}
const Ol = [429, 403];
class Nl extends Error {
    constructor(e, t) {
        super(e), this.response = t, this.name = "ClientGQLNetworkError"
    }
}
async function Ml({
    operation: e,
    variables: t = {},
    init: o = {}
}) {
    try {
        const n = await fetch((wl.some((e => ds.origin.startsWith(e))) ? "https://www.reddit.com" : "") + "/svc/shreddit/graphql", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                operation: e,
                variables: t,
                csrf_token: wo.get("csrf_token")
            }),
            ...o
        });
        if (n.ok) return n.json();
        const i = await n.text();
        Rl(`Client GQL Request failed with status ${n.status}: ${i}`);
        const s = Il(n);
        throw s && Ol.includes(n.status) && function(e, t) {
            const o = document.querySelector("shreddit-app");
            o && o.dispatchEvent(ee("faceplate-alert", {
                level: bt.error,
                message: e,
                cause: t
            }))
        }(s, `client-gql-network-error-${n.status}`), new Nl(i)
    } catch (t) {
        throw Rl(`Unable to complete the request for GQL operation "${e}": ${t}`), t
    }
}
async function Dl(e, t, o, n) {
    const i = {
            input: {
                action: e,
                eligibleExperience: {
                    experience: t,
                    uxVariant: o
                },
                source: n
            }
        },
        {
            data: s
        } = await Ml({
            operation: Pl.StoreUxtargetingAction,
            variables: i
        });
    return s.storeUxTargetingAction?.ok || window.Sentry?.captureMessage?.("Uxtargeting action could not be stored"), s.storeUxTargetingAction?.ok
}

function Ll(e) {
    return null === e ? "null" : Array.isArray(e) ? "array" : typeof e
}

function Ul(e) {
    return "object" === Ll(e)
}

function kl(e, t) {
    return e.length < 124 ? e : t
}
var xl, Fl;

function Bl(e) {
    if (!Ul(e)) throw new Error(`Message is expected to be an object, but got ${Ll(e)}`);
    if (!e.type) throw new Error("Message is missing the 'type' property");
    if ("string" != typeof e.type) throw new Error(`Message is expects the 'type' property to be a string, but got ${Ll(e.type)}`);
    switch (e.type) {
        case Fl.ConnectionInit:
        case Fl.ConnectionAck:
        case Fl.Ping:
        case Fl.Pong:
            if (null != e.payload && !Ul(e.payload)) throw new Error(`"${e.type}" message expects the 'payload' property to be an object or nullish or missing, but got "${e.payload}"`);
            break;
        case Fl.Subscribe:
            if ("string" != typeof e.id) throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ll(e.id)}`);
            if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
            if (!Ul(e.payload)) throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ll(e.payload)}`);
            if ("string" != typeof e.payload.query) throw new Error(`"${e.type}" message payload expects the 'query' property to be a string, but got ${Ll(e.payload.query)}`);
            if (null != e.payload.variables && !Ul(e.payload.variables)) throw new Error(`"${e.type}" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ll(e.payload.variables)}`);
            if (null != e.payload.operationName && "string" !== Ll(e.payload.operationName)) throw new Error(`"${e.type}" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ll(e.payload.operationName)}`);
            if (null != e.payload.extensions && !Ul(e.payload.extensions)) throw new Error(`"${e.type}" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ll(e.payload.extensions)}`);
            break;
        case Fl.Next:
            if ("string" != typeof e.id) throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ll(e.id)}`);
            if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
            if (!Ul(e.payload)) throw new Error(`"${e.type}" message expects the 'payload' property to be an object, but got ${Ll(e.payload)}`);
            break;
        case Fl.Error:
            if ("string" != typeof e.id) throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ll(e.id)}`);
            if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
            if (t = e.payload, !(Array.isArray(t) && t.length > 0 && t.every((e => "message" in e)))) throw new Error(`"${e.type}" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(e.payload)}`);
            break;
        case Fl.Complete:
            if ("string" != typeof e.id) throw new Error(`"${e.type}" message expects the 'id' property to be a string, but got ${Ll(e.id)}`);
            if (!e.id) throw new Error(`"${e.type}" message requires a non-empty 'id' property`);
            break;
        default:
            throw new Error(`Invalid message 'type' property "${e.type}"`)
    }
    var t;
    return e
}

function Vl(e, t) {
    return Bl(e), JSON.stringify(e, t)
}

function Gl(e) {
    const {
        url: t,
        connectionParams: o,
        lazy: n = !0,
        onNonLazyError: i = console.error,
        lazyCloseTimeout: s = 0,
        keepAlive: a = 0,
        disablePong: r,
        connectionAckWaitTimeout: d = 0,
        retryAttempts: l = 5,
        retryWait: c = async function(e) {
            let t = 1e3;
            for (let o = 0; o < e; o++) t *= 2;
            await new Promise((e => setTimeout(e, t + Math.floor(2700 * Math.random() + 300))))
        },
        shouldRetry: u = Wl,
        isFatalConnectionProblem: h,
        on: p,
        webSocketImpl: m,
        generateID: g = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
                const t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }))
        },
        jsonMessageReplacer: _,
        jsonMessageReviver: f
    } = e;
    let v;
    if (m) {
        if (!("function" == typeof(E = m) && "constructor" in E && "CLOSED" in E && "CLOSING" in E && "CONNECTING" in E && "OPEN" in E)) throw new Error("Invalid WebSocket implementation provided");
        v = m
    } else "undefined" != typeof WebSocket ? v = WebSocket : "undefined" != typeof global ? v = global.WebSocket || global.MozWebSocket : "undefined" != typeof window && (v = window.WebSocket || window.MozWebSocket);
    var E;
    if (!v) throw new Error("WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`");
    const b = v,
        S = (() => {
            const e = (() => {
                    const e = {};
                    return {
                        on: (t, o) => (e[t] = o, () => {
                            delete e[t]
                        }),
                        emit(t) {
                            var o;
                            "id" in t && (null === (o = e[t.id]) || void 0 === o || o.call(e, t))
                        }
                    }
                })(),
                t = {
                    connecting: (null == p ? void 0 : p.connecting) ? [p.connecting] : [],
                    opened: (null == p ? void 0 : p.opened) ? [p.opened] : [],
                    connected: (null == p ? void 0 : p.connected) ? [p.connected] : [],
                    ping: (null == p ? void 0 : p.ping) ? [p.ping] : [],
                    pong: (null == p ? void 0 : p.pong) ? [p.pong] : [],
                    message: (null == p ? void 0 : p.message) ? [e.emit, p.message] : [e.emit],
                    closed: (null == p ? void 0 : p.closed) ? [p.closed] : [],
                    error: (null == p ? void 0 : p.error) ? [p.error] : []
                };
            return {
                onMessage: e.on,
                on(e, o) {
                    const n = t[e];
                    return n.push(o), () => {
                        n.splice(n.indexOf(o), 1)
                    }
                },
                emit(e, ...o) {
                    for (const n of [...t[e]]) n(...o)
                }
            }
        })();

    function y(e) {
        const t = [S.on("error", (o => {
            t.forEach((e => e())), e(o)
        })), S.on("closed", (o => {
            t.forEach((e => e())), e(o)
        }))]
    }
    let C, T, A = 0,
        I = !1,
        P = 0,
        w = !1;
    async function R() {
        clearTimeout(T);
        const [e, n] = await (null != C ? C : C = new Promise(((e, n) => (async () => {
            if (I) {
                if (await c(P), !A) return C = void 0, n({
                    code: 1e3,
                    reason: "All Subscriptions Gone"
                });
                P++
            }
            S.emit("connecting");
            const i = new b("function" == typeof t ? await t() : t, "graphql-transport-ws");
            let s, l;

            function u() {
                isFinite(a) && a > 0 && (clearTimeout(l), l = setTimeout((() => {
                    i.readyState === b.OPEN && (i.send(Vl({
                        type: Fl.Ping
                    })), S.emit("ping", !1, void 0))
                }), a))
            }
            y((e => {
                C = void 0, clearTimeout(s), clearTimeout(l), n(e), Wl(e) && 4499 === e.code && (i.close(4499, "Terminated"), i.onerror = null, i.onclose = null)
            })), i.onerror = e => S.emit("error", e), i.onclose = e => S.emit("closed", e), i.onopen = async () => {
                try {
                    S.emit("opened", i);
                    const e = "function" == typeof o ? await o() : o;
                    if (i.readyState !== b.OPEN) return;
                    i.send(Vl(e ? {
                        type: Fl.ConnectionInit,
                        payload: e
                    } : {
                        type: Fl.ConnectionInit
                    }, _)), isFinite(d) && d > 0 && (s = setTimeout((() => {
                        i.close(xl.ConnectionAcknowledgementTimeout, "Connection acknowledgement timeout")
                    }), d)), u()
                } catch (e) {
                    S.emit("error", e), i.close(xl.InternalClientError, kl(e instanceof Error ? e.message : new Error(e).message, "Internal client error"))
                }
            };
            let h = !1;
            i.onmessage = ({
                data: t
            }) => {
                try {
                    const o = function(e, t) {
                        return Bl("string" == typeof e ? JSON.parse(e, t) : e)
                    }(t, f);
                    if (S.emit("message", o), "ping" === o.type || "pong" === o.type) return S.emit(o.type, !0, o.payload), void("pong" === o.type ? u() : r || (i.send(Vl(o.payload ? {
                        type: Fl.Pong,
                        payload: o.payload
                    } : {
                        type: Fl.Pong
                    })), S.emit("pong", !1, o.payload)));
                    if (h) return;
                    if (o.type !== Fl.ConnectionAck) throw new Error(`First message cannot be of type ${o.type}`);
                    clearTimeout(s), h = !0, S.emit("connected", i, o.payload), I = !1, P = 0, e([i, new Promise(((e, t) => y(t)))])
                } catch (e) {
                    i.onmessage = null, S.emit("error", e), i.close(xl.BadResponse, kl(e instanceof Error ? e.message : new Error(e).message, "Bad response"))
                }
            }
        })())));
        e.readyState === b.CLOSING && await n;
        let i = () => {};
        const l = new Promise((e => i = e));
        return [e, i, Promise.race([l.then((() => {
            if (!A) {
                const t = () => e.close(1e3, "Normal Closure");
                isFinite(s) && s > 0 ? T = setTimeout((() => {
                    e.readyState === b.OPEN && t()
                }), s) : t()
            }
        })), n])]
    }

    function O(e) {
        if (Wl(e) && (t = e.code, ![1e3, 1001, 1006, 1005, 1012, 1013, 1013].includes(t) && t >= 1e3 && t <= 1999 || [xl.InternalServerError, xl.InternalClientError, xl.BadRequest, xl.BadResponse, xl.Unauthorized, xl.SubprotocolNotAcceptable, xl.SubscriberAlreadyExists, xl.TooManyInitialisationRequests].includes(e.code))) throw e;
        var t;
        if (w) return !1;
        if (Wl(e) && 1e3 === e.code) return A > 0;
        if (!l || P >= l) throw e;
        if (!u(e)) throw e;
        if (null == h ? void 0 : h(e)) throw e;
        return I = !0
    }
    return n || (async () => {
        for (A++;;) try {
            const [, , e] = await R();
            await e
        } catch (e) {
            try {
                if (!O(e)) return
            } catch (e) {
                return null == i ? void 0 : i(e)
            }
        }
    })(), {
        on: S.on,
        subscribe(e, t) {
            const o = g(e);
            let n = !1,
                i = !1,
                s = () => {
                    A--, n = !0
                };
            return (async () => {
                for (A++;;) try {
                    const [a, r, d] = await R();
                    if (n) return r();
                    const l = S.onMessage(o, (e => {
                        switch (e.type) {
                            case Fl.Next:
                                return void t.next(e.payload);
                            case Fl.Error:
                                return i = !0, n = !0, t.error(e.payload), void s();
                            case Fl.Complete:
                                return n = !0, void s()
                        }
                    }));
                    return a.send(Vl({
                        id: o,
                        type: Fl.Subscribe,
                        payload: e
                    }, _)), s = () => {
                        n || a.readyState !== b.OPEN || a.send(Vl({
                            id: o,
                            type: Fl.Complete
                        }, _)), A--, n = !0, r()
                    }, void await d.finally(l)
                } catch (e) {
                    if (!O(e)) return
                }
            })().then((() => {
                i || t.complete()
            })).catch((e => {
                t.error(e)
            })), () => {
                n || s()
            }
        },
        async dispose() {
            if (w = !0, C) {
                const [e] = await C;
                e.close(1e3, "Normal Closure")
            }
        },
        terminate() {
            C && S.emit("closed", {
                code: 4499,
                reason: "Terminated",
                wasClean: !1
            })
        }
    }
}

function Wl(e) {
    return Ul(e) && "code" in e && "reason" in e
}
async function Hl() {
        const e = wo.get("csrf_token") ?? "",
            t = await fetch("/svc/shreddit/token", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    csrf_token: e
                })
            });
        return t.ok ? t.json() : null
    }! function(e) {
        e[e.InternalServerError = 4500] = "InternalServerError", e[e.InternalClientError = 4005] = "InternalClientError", e[e.BadRequest = 4400] = "BadRequest", e[e.BadResponse = 4004] = "BadResponse", e[e.Unauthorized = 4401] = "Unauthorized", e[e.Forbidden = 4403] = "Forbidden", e[e.SubprotocolNotAcceptable = 4406] = "SubprotocolNotAcceptable", e[e.ConnectionInitialisationTimeout = 4408] = "ConnectionInitialisationTimeout", e[e.ConnectionAcknowledgementTimeout = 4504] = "ConnectionAcknowledgementTimeout", e[e.SubscriberAlreadyExists = 4409] = "SubscriberAlreadyExists", e[e.TooManyInitialisationRequests = 4429] = "TooManyInitialisationRequests"
    }(xl || (xl = {})),
    function(e) {
        e.ConnectionInit = "connection_init", e.ConnectionAck = "connection_ack", e.Ping = "ping", e.Pong = "pong", e.Subscribe = "subscribe", e.Next = "next", e.Error = "error", e.Complete = "complete"
    }(Fl || (Fl = {}));
const ql = (() => {
    let e, t = !1,
        o = !1;
    const n = () => {
            t = !0
        },
        i = () => {
            o = !0
        };

    function s({
        reconnectOnClose: s,
        onConnectedCallback: a,
        lazyCloseTimeout: r
    }) {
        return (!e || s && t || o) && (e = function({
            onConnectedCallback: e,
            onCompletedCallback: t,
            onCloseFunction: o,
            lazyCloseTimeout: n = 5e3
        }) {
            let i = !1;
            return Gl({
                url: "wss://gql-realtime.reddit.com/query",
                connectionAckWaitTimeout: 5e3,
                lazyCloseTimeout: n,
                retryAttempts: 1,
                shouldRetry: () => i,
                on: {
                    connecting: () => {
                        i = !1
                    },
                    closed: e => {
                        if (1e3 === e.code) throw o(), new Error("Connection has been terminated.")
                    },
                    message: o => {
                        o.type === Fl.ConnectionAck && (e?.(), i = !0), o.type === Fl.Complete && t?.()
                    }
                },
                lazy: !0,
                connectionParams: async () => {
                    const e = await Hl();
                    return e ? {
                        Authorization: `Bearer ${e.token}`
                    } : {}
                }
            })
        }({
            onCloseFunction: n,
            onConnectedCallback: a,
            onCompletedCallback: i,
            lazyCloseTimeout: r
        })), e
    }
    return ({
        query: e,
        onData: t,
        onClose: o,
        onConnectedCallback: n,
        reconnectOnClose: i = !1,
        lazyCloseTimeout: a
    }) => s({
        reconnectOnClose: i,
        onConnectedCallback: n,
        lazyCloseTimeout: a
    }).subscribe(e, {
        next: t,
        error: e => o?.(e),
        complete: () => o?.()
    })
})();
class $l {
    constructor(e) {
        this.unsubscribeFn = null, this.lastSubscribeParams = null, this.unsubscribe = () => {
            this.unsubscribeFn?.(), this.unsubscribeFn = null, this.lastSubscribeParams = null, window.removeEventListener("pageshow", this.onPageShow), window.removeEventListener("pagehide", this.onPageHide)
        }, this.subscribe = e => {
            this.unsubscribe(), this.unsubscribeFn = ql(e), this.lastSubscribeParams = e, window.addEventListener("pageshow", this.onPageShow), window.addEventListener("pagehide", this.onPageHide)
        }, this.onPageShow = e => {
            e.persisted && this.lastSubscribeParams && this.subscribe(this.lastSubscribeParams)
        }, this.onPageHide = e => {
            e.persisted && this.suspend()
        }, e.addController(this)
    }
    suspend() {
        this.unsubscribeFn?.(), this.unsubscribeFn = null
    }
    hostDisconnected() {
        this.unsubscribe()
    }
}
const Yl = {
        _rplIsReducedMotion: !1,
        get mediaQuery() {
            return window.matchMedia("(prefers-reduced-motion: reduce)").matches
        },
        get rplIsReducedMotion() {
            return "function" == typeof this._rplIsReducedMotion ? this._rplIsReducedMotion() : this._rplIsReducedMotion
        },
        get isReducedMotion() {
            return this.rplIsReducedMotion || this.mediaQuery
        }
    },
    jl = {
        keyframes: [],
        options: {
            duration: 0
        }
    },
    Kl = new Map,
    Ql = new WeakMap;

function zl(e) {
    return e ?? jl
}

function Jl(e, t) {
    Kl.set(e, zl(t))
}

function Xl(e, t, o) {
    Ql.set(e, {
        ...Ql.get(e),
        [t]: zl(o)
    })
}

function Zl(e, t) {
    const o = Ql.get(e);
    if (o?.[t]) return e?.noAnimate ? nc(o[t]) : o[t];
    const n = Kl.get(t);
    return n ? e?.noAnimate ? nc(n) : n : jl
}

function ec(e, t, o) {
    return new Promise((n => {
        if (o?.duration === 1 / 0) throw new Error("Promise-based animations must be finite.");
        const i = function(e, t) {
                return Yl.isReducedMotion ? nc({
                    keyframes: e,
                    options: t
                }) : {
                    keyframes: e,
                    options: t
                }
            }(t, o),
            s = e.animate(i.keyframes, i.options);
        s.addEventListener("cancel", n, {
            once: !0
        }), s.addEventListener("finish", n, {
            once: !0
        })
    }))
}

function tc(e) {
    return Promise.all(e.getAnimations().map((e => new Promise((t => {
        const o = () => requestAnimationFrame(t);
        e.addEventListener("cancel", o, {
            once: !0
        }), e.addEventListener("finish", o, {
            once: !0
        }), e.cancel()
    })))))
}
const oc = e => {
        const t = e.toString().toLowerCase();
        return t.indexOf("ms") > -1 ? parseFloat(t) : t.indexOf("s") > -1 ? 1e3 * parseFloat(t) : parseFloat(t)
    },
    nc = ({
        keyframes: e,
        options: t
    }) => ({
        keyframes: e,
        options: {
            ...t,
            duration: 0
        }
    }),
    ic = (e, t) => {
        var o, n;
        const i = e._$AN;
        if (void 0 === i) return !1;
        for (const e of i) null === (n = (o = e)._$AO) || void 0 === n || n.call(o, t, !1), ic(e, t);
        return !0
    },
    sc = e => {
        let t, o;
        do {
            if (void 0 === (t = e._$AM)) break;
            o = t._$AN, o.delete(e), e = t
        } while (0 === (null == o ? void 0 : o.size))
    },
    ac = e => {
        for (let t; t = e._$AM; e = t) {
            let o = t._$AN;
            if (void 0 === o) t._$AN = o = new Set;
            else if (o.has(e)) break;
            o.add(e), lc(t)
        }
    };

function rc(e) {
    void 0 !== this._$AN ? (sc(this), this._$AM = e, ac(this)) : this._$AM = e
}

function dc(e, t = !1, o = 0) {
    const n = this._$AH,
        i = this._$AN;
    if (void 0 !== i && 0 !== i.size)
        if (t)
            if (Array.isArray(n))
                for (let e = o; e < n.length; e++) ic(n[e], !1), sc(n[e]);
            else null != n && (ic(n, !1), sc(n));
    else ic(this, e)
}
const lc = e => {
    var t, n, i, s;
    e.type == o.CHILD && (null !== (t = (i = e)._$AP) && void 0 !== t || (i._$AP = dc), null !== (n = (s = e)._$AQ) && void 0 !== n || (s._$AQ = rc))
};
let cc = class extends t {
    constructor() {
        super(...arguments), this._$AN = void 0
    }
    _$AT(e, t, o) {
        super._$AT(e, t, o), ac(this), this.isConnected = e._$AU
    }
    _$AO(e, t = !0) {
        var o, n;
        e !== this.isConnected && (this.isConnected = e, e ? null === (o = this.reconnected) || void 0 === o || o.call(this) : null === (n = this.disconnected) || void 0 === n || n.call(this)), t && (ic(this, e), sc(this))
    }
    setValue(e) {
        if (c(this._$Ct)) this._$Ct._$AI(e, this);
        else {
            const t = [...this._$Ct._$AH];
            t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
        }
    }
    disconnected() {}
    reconnected() {}
};
const uc = () => new hc;
let hc = class {};
const pc = new WeakMap,
    mc = e(class extends cc {
        render(e) {
            return l
        }
        update(e, [t]) {
            var o;
            const n = t !== this.G;
            return n && void 0 !== this.G && this.ot(void 0), (n || this.rt !== this.lt) && (this.G = t, this.ct = null === (o = e.options) || void 0 === o ? void 0 : o.host, this.ot(this.lt = e.element)), l
        }
        ot(e) {
            var t;
            if ("function" == typeof this.G) {
                const o = null !== (t = this.ct) && void 0 !== t ? t : globalThis;
                let n = pc.get(o);
                void 0 === n && (n = new WeakMap, pc.set(o, n)), void 0 !== n.get(this.G) && this.G.call(this.ct, void 0), n.set(this.G, e), void 0 !== e && this.G.call(this.ct, e)
            } else this.G.value = e
        }
        get rt() {
            var e, t, o;
            return "function" == typeof this.G ? null === (t = pc.get(null !== (e = this.ct) && void 0 !== e ? e : globalThis)) || void 0 === t ? void 0 : t.get(this.G) : null === (o = this.G) || void 0 === o ? void 0 : o.value
        }
        disconnected() {
            this.rt === this.lt && this.ot(void 0)
        }
        reconnected() {
            this.ot(this.lt)
        }
    }),
    gc = () => {
        let e = document.activeElement;
        for (; e?.shadowRoot?.activeElement;) e = e.shadowRoot.activeElement;
        return e
    };

function _c(e, t) {
    return new Promise((o => {
        e.addEventListener(t, (function n(i) {
            i.target === e && (e.removeEventListener(t, n), o())
        }))
    }))
}

function fc(e, t, {
    maximumMatches: o = 1 / 0
} = {
    maximumMatches: 1 / 0
}) {
    const n = [];
    return function i(s) {
        if (!(n.length >= o)) {
            if (s instanceof Element) {
                !n.includes(s) && e(s) && n.push(s);
                s instanceof HTMLSlotElement && (e => e.getRootNode({
                    composed: !0
                })?.host !== t)(s) && s.assignedElements({
                    flatten: !0
                }).forEach(i), null !== s.shadowRoot && "open" === s.shadowRoot.mode && i(s.shadowRoot)
            }
            Array.from(s.children).forEach(i)
        }
    }(t), n
}
const vc = new Set(["button", "input", "select", "textarea", "audio", "video", "summary"]);

function Ec(e) {
    const t = e.tagName.toLowerCase();
    return !e.hasAttribute("inert") && ("-1" !== e.getAttribute("tabindex") && (!e.hasAttribute("disabled") && (!("input" === t && "radio" === e.getAttribute("type") && !e.hasAttribute("checked")) && (o = e, !!Boolean(o.offsetParent || o.offsetWidth || o.offsetHeight || o.getClientRects().length) && ("hidden" !== window.getComputedStyle(e).visibility && (!("audio" !== t && "video" !== t || !e.hasAttribute("controls")) || (!!e.hasAttribute("tabindex") || (!(!e.hasAttribute("contenteditable") || "false" === e.getAttribute("contenteditable")) || (!("a" !== t || !e.hasAttribute("href")) || vc.has(t))))))))));
    var o
}

function bc(e) {
    return fc(Ec, e)
}

function Sc(e) {
    return fc(Ec, e, {
        maximumMatches: 1
    })[0] ?? null
}
let yc = [];
class Cc {
    constructor(e) {
        this.currentFocus = null, this.tabDirection = "forward", this.disableFocusTrap = !1, this.checkFocusRaf = null, this.handleFocusIn = e => {
            this.isActive() && this.checkFocus()
        }, this.handleKeyDown = e => {
            if ("Tab" !== e.key || this.disableFocusTrap || !this.isActive()) return;
            e.shiftKey ? this.tabDirection = "backward" : this.tabDirection = "forward", e.preventDefault();
            const t = gc(),
                o = bc(this.element);
            let n = o.findIndex((e => e === t));
            if (-1 === n) return this.currentFocus = o[0], void this.currentFocus?.focus({
                preventScroll: !0
            });
            const i = "forward" === this.tabDirection ? 1 : -1;
            n + i >= o.length ? n = 0 : n + i < 0 ? n = o.length - 1 : n += i, this.currentFocus = o[n], this.currentFocus?.focus({
                preventScroll: !0
            }), setTimeout((() => this.checkFocus()))
        }, this.handleKeyUp = () => {
            this.tabDirection = "forward"
        }, this.element = e
    }
    activate() {
        yc.push(this.element), document.addEventListener("focusin", this.handleFocusIn), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("keyup", this.handleKeyUp)
    }
    deactivate() {
        yc = yc.filter((e => e !== this.element)), this.currentFocus = null, document.removeEventListener("focusin", this.handleFocusIn), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("keyup", this.handleKeyUp)
    }
    isActive() {
        return yc[yc.length - 1] === this.element
    }
    disableFocusTrapping() {
        this.disableFocusTrap = !0
    }
    enableFocusTrapping() {
        this.disableFocusTrap = !1
    }
    checkFocus() {
        this.isActive() && !this.disableFocusTrap && (this.checkFocusRaf && cancelAnimationFrame(this.checkFocusRaf), this.checkFocusRaf = requestAnimationFrame((() => {
            const e = bc(this.element);
            if (!this.element.matches(":focus-within")) {
                const t = e[0],
                    o = e[e.length - 1],
                    n = "forward" === this.tabDirection ? t : o;
                "function" == typeof n?.focus && (this.currentFocus = n, this.currentFocus?.focus())
            }
        })))
    }
}

function Tc(e, t) {
    return t in e
}
const Ac = Symbol("mixins/with-event-dispatcher");
class Ic {
    constructor(e) {
        this.host = e
    }
    get namespace() {
        return null !== this.host.eventNamespaceOverride ? this.host.eventNamespaceOverride : this.host.tagName.toLowerCase()
    }
    eventId(e) {
        return "" === e && (e = "generic"), this.namespace + ":" + e
    }
    dispatch(e, t = {
        bubbles: !0,
        cancelable: !0,
        composed: !0
    }) {
        return this.host.dispatchEvent(new CustomEvent(this.eventId(e), t))
    }
}
class Pc extends(function(e) {
    if (Tc(e, Ac)) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.eventNamespaceOverride = null, this.emitter = new Ic(this)
        }
    }
    return t[Ac] = !0, t
}(a)) {}
const wc = e => {
        const t = document.createElement("style");
        return t.textContent = e.cssText, document.head.appendChild(t), {
            remove: () => {
                document.head.removeChild(t)
            },
            update: e => {
                t.textContent = e.cssText
            }
        }
    },
    Rc = s`:host{box-sizing:border-box}:host *,:host ::after,:host ::before{box-sizing:inherit}[hidden]{display:none!important}`,
    Oc = s`.styled-scrollbar{--_scrollbar-color:var(--scrollbar-color, var(--color-neutral-border));--_scrollbar-background:var(--scrollbar-background, var(--color-neutral-background));scrollbar-color:transparent transparent;scrollbar-width:thin}.styled-scrollbar::-webkit-scrollbar{width:16px;height:16px}.styled-scrollbar::-webkit-scrollbar-track{background:var(--_scrollbar-background)}.styled-scrollbar:hover{scrollbar-color:var(--_scrollbar-color) transparent}.styled-scrollbar:hover::-webkit-scrollbar-thumb{background:var(--_scrollbar-color);border:6px solid var(--_scrollbar-background);border-radius:8px}`;
wc(s`.rpl-scroll-lock{overflow:hidden!important}`);
const Nc = new Set;

function Mc(e) {
    Nc.add(e), document.body.classList.contains("rpl-scroll-lock") || document.body.classList.add("rpl-scroll-lock")
}

function Dc(e) {
    Nc.delete(e), 0 === Nc.size && document.body.classList.remove("rpl-scroll-lock")
}

function Lc(e) {
    return e.scrollHeight !== e.clientHeight
}

function Uc(e) {
    return 0 === Math.floor(e.scrollTop)
}

function kc(e) {
    return Math.ceil(e.scrollTop) >= e.scrollHeight - e.offsetHeight
}
const xc = {
        Show: "show",
        Hide: "hide"
    },
    Fc = Symbol("mixins/with-portal"),
    Bc = {
        _root: document.body,
        set portalRoot(e) {
            this._root = e
        },
        get portalRoot() {
            return Vc(this._root)
        }
    },
    Vc = e => "function" == typeof e ? e() : e;

function Gc(e) {
    if (Tc(e, Fc)) return e;
    class t extends e {
        get portalRoot() {
            return Vc(this._portalRoot ?? Bc.portalRoot)
        }
        set portalRoot(e) {
            this._portalRoot = e
        }
        connectedCallback() {
            super.connectedCallback(), this.style.display = "none"
        }
        attachPortal() {
            this.portalRoot.appendChild(this.portalContainer)
        }
        removePortal() {
            this.portalContainer.parentElement && this.portalContainer.parentElement.removeChild(this.portalContainer)
        }
        createRenderRoot() {
            return this.portalContainer = document.createElement("div"), this.portalShadowRoot = this.portalContainer.attachShadow(this.constructor.shadowRootOptions), u(this.portalShadowRoot, this.constructor.elementStyles), this.portalShadowRoot
        }
    }
    return t[Fc] = !0, t
}
const Wc = Symbol("mixins/with-dialog-child"),
    Hc = Symbol("dialog-child");
const qc = e => !!e && (Hc in e && e instanceof HTMLElement),
    $c = Symbol("mixins/with-template-child");

function Yc(e) {
    if (Tc(e, $c)) return e;
    class t extends e {
        constructor() {
            super(...arguments), this.contentAppended = !1
        }
        appendTemplateContentTo(e, t = {
            cache: !0
        }) {
            if (t.cache && this.contentAppended) return;
            let o = this.firstElementChild;
            for (;
                "slot" === o?.tagName.toLowerCase();) {
                const e = o.assignedElements()[0];
                if (!e) break;
                o = e
            }
            if ("template" !== o?.tagName.toLowerCase()) return;
            const n = o.content.cloneNode(!0);
            e.innerHTML = "", e.appendChild(n), this.contentAppended = !0
        }
    }
    return t[$c] = !0, t
}
const jc = Symbol.for("rpl-menu"),
    Kc = e => jc in e;
class Qc extends(Yc(Gc(Pc))) {
    constructor() {
        super(...arguments), this.styledDialogChildren = new Set, this.originalTrigger = null, this.triggerElement = null, this.dialogRef = uc(), this.panelRef = uc(), this.overlayRef = uc(), this.open = !1, this.overlayBlur = !1, this.dialogId = "", this.dialogClassName = "", this.label = "", this.blocking = !1, this.noAnimate = !1, this.disableCacheContents = !1, this.handleCloseButtonClicked = e => {
            e.stopPropagation(), this.requestClose("close-button")
        }, this.handleMenuClose = e => {
            this.requestClose("menu-closed")
        }, this.handleTriggerElementEvent = e => {
            const t = e.detail;
            if (t.dialogId === this.dialogId) return t.action === xc.Hide ? this.hide() : this.handleTriggerShowAction(t)
        }, this.handleDocumentKeyDown = e => {
            "Escape" === e.key && this.modal.isActive() && this.open && (e.stopPropagation(), this.requestClose("keyboard"))
        }
    }
    connectedCallback() {
        super.connectedCallback(), this.portalContainer.id = this.dialogId, this.portalContainer.classList.add(this.tagName.toLowerCase()), this.dialogClassName && this.portalContainer.classList.add(this.dialogClassName), this.modal = new Cc(this.portalContainer), document.addEventListener("rpl-dialog-trigger:trigger-clicked", this.handleTriggerElementEvent)
    }
    willUpdate(e) {
        e.has("open") && this.hasUpdated && this.handleOpenChange(), e.has("litTemplateChildren") && this.handleLitTemplateChildrenChange(), super.willUpdate(e);
        const t = Array.from(e.entries()).map((([e, t]) => ({
            key: e,
            changed: t !== this[e],
            newValue: this[e]
        })));
        this.emitter.dispatch("internal-sync", {
            detail: t
        })
    }
    async firstUpdated() {
        this.dialogRef.value && (this.dialogRef.value.hidden = !this.open), this.open && (this.attachPortal(), this.litTemplateChildren || this.appendTemplateContentTo(this.portalContainer, {
            cache: !this.disableCacheContents
        }), this.addOpenListeners(), this.modal.activate(), this.handleOpenFocus(), Mc(this))
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.modal.deactivate(), this.removePortal(), this.removeAttribute("open"), Dc(this), document.removeEventListener("rpl-dialog-trigger:trigger-clicked", this.handleTriggerElementEvent)
    }
    async requestClose(e) {
        if (this.blocking) return;
        if (this.emitter.dispatch("request-close", {
                cancelable: !0,
                detail: {
                    source: e
                }
            }) || !this.panelRef.value) return this.hide();
        {
            const e = Zl(this, this.animationNames.denyClose);
            ec(this.panelRef.value, e.keyframes, e.options)
        }
    }
    addOpenListeners() {
        document.addEventListener("keydown", this.handleDocumentKeyDown), this.portalContainer.addEventListener("rpl-modal-card:close-button-clicked", this.handleCloseButtonClicked), this.portalContainer.addEventListener("rpl:menu-close", this.handleMenuClose)
    }
    removeOpenListeners() {
        document.removeEventListener("keydown", this.handleDocumentKeyDown), this.portalContainer.removeEventListener("rpl-modal-card:close-button-clicked", this.handleCloseButtonClicked), this.portalContainer.removeEventListener("rpl:menu-close", this.handleMenuClose)
    }
    handleTriggerShowAction(e) {
        if (!this.open && !this.triggerElement) return this.triggerElement = e.triggerElement, e.noModal ? this.show() : this.showModal()
    }
    handleSlotChange(e) {}
    handleDialogChildConnected(e) {}
    handleDialogChildDisconnected(e) {}
    internalHandleDialogChildConnected(e) {
        const t = e.composedPath()[0];
        qc(t) && !this.styledDialogChildren.has(t) && (this.styledDialogChildren.add(t), this.handleDialogChildConnected(t))
    }
    internalHandleDialogChildDisconnected(e) {
        const t = e.composedPath()[0];
        qc(t) && this.styledDialogChildren.has(t) && (this.styledDialogChildren.delete(t), this.handleDialogChildDisconnected(t))
    }
    async handleLitTemplateChildrenChange() {
        await this.updateComplete, h(this.litTemplateChildren, this.portalContainer)
    }
    async handleOpenFocus(e) {
        this.originalTrigger = gc();
        const t = this.portalContainer.querySelector("[autofocus]");
        t && t.removeAttribute("autofocus"), e && await e, requestAnimationFrame((() => {
            if (!!this.emitter.dispatch("initial-focus", {
                    cancelable: !0
                }))
                if (t) t.focus({
                    preventScroll: !0
                });
                else {
                    const e = fc(Kc, this.portalContainer, {
                            maximumMatches: 1
                        }),
                        t = e?.[0];
                    t ? t.focusOnOpen() : this.modal.checkFocus()
                } t && t.setAttribute("autofocus", "")
        }))
    }
    async handleOpenChange() {
        if (this.open) {
            if (this.attachPortal(), this.appendTemplateContentTo(this.portalContainer, {
                    cache: !this.disableCacheContents
                }), this.emitter.dispatch("show"), this.addOpenListeners(), this.modal.activate(), this.triggerElement && this.triggerElement.addOpenAttributes(), Mc(this), !this.dialogRef.value || !this.overlayRef.value || !this.panelRef.value) return this.emitter.dispatch("after-show");
            await this.handleOpenFocus(Promise.all([tc(this.dialogRef.value), tc(this.overlayRef.value)])), this.dialogRef.value.hidden = !1;
            const e = Zl(this, this.animationNames.show),
                t = Zl(this, this.animationNames.overlayShow);
            return await Promise.all([ec(this.panelRef.value, e.keyframes, e.options), ec(this.overlayRef.value, t.keyframes, t.options)]), this.emitter.dispatch("after-show")
        } {
            if (this.emitter.dispatch("hide"), this.removeOpenListeners(), this.modal.deactivate(), this.dialogRef.value && this.overlayRef.value && this.panelRef.value) {
                await Promise.all([tc(this.dialogRef.value), tc(this.overlayRef.value)]);
                const e = Zl(this, this.animationNames.hide),
                    t = Zl(this, this.animationNames.overlayHide);
                if (!this.overlayRef.value) return;
                await Promise.all([ec(this.overlayRef.value, t.keyframes, t.options).then((() => {
                    this.overlayRef.value && (this.overlayRef.value.hidden = !0)
                })), ec(this.panelRef.value, e.keyframes, e.options).then((() => {
                    this.panelRef.value && (this.panelRef.value.hidden = !0)
                }))])
            }
            this.dialogRef.value && (this.dialogRef.value.hidden = !0), this.overlayRef.value && (this.overlayRef.value.hidden = !1), this.panelRef.value && (this.panelRef.value.hidden = !1), Dc(this), this.removePortal(), this.triggerElement && (this.triggerElement.removeOpenAttributes(), this.triggerElement = null);
            const e = this.originalTrigger;
            return "function" == typeof e?.focus ? new Promise((t => setTimeout((() => {
                e.focus({
                    preventScroll: !0
                }), t(this.emitter.dispatch("after-hide"))
            })))) : this.emitter.dispatch("after-hide")
        }
    }
    async showModal() {
        if (!this.open) return this.modal.enableFocusTrapping(), this.open = !0, _c(this, this.emitter.eventId("after-show"))
    }
    checkFocus() {
        this.modal.checkFocus()
    }
    async show() {
        if (!this.open) return this.modal.disableFocusTrapping(), this.open = !0, _c(this, this.emitter.eventId("after-show"))
    }
    async hide() {
        if (this.open) return this.open = !1, _c(this, this.emitter.eventId("after-hide"))
    }
    renderTopOfDialog() {
        return l
    }
    render() {
        return r` <div part="base" class="${G({dialog:!0,"dialog-open":this.open,...this.renderDialogBaseClasses()})}" ${mc(this.dialogRef)}> <div part="overlay" class="${G({"dialog-overlay":!0,"dialog-overlay-blur":this.overlayBlur,"dialog-overlay-no-modal":this.modal.disableFocusTrap})}" @click="${()=>this.requestClose("overlay")}" tabindex="-1" ${mc(this.overlayRef)}></div> <div part="panel" class="dialog-panel" role="dialog" aria-modal="${!this.modal.disableFocusTrap}" aria-hidden="${this.open?"false":"true"}" aria-label="${this.label}" tabindex="-1" ${mc(this.panelRef)}> ${this.renderTopOfDialog()} <slot @slotchange="${this.handleSlotChange}" @rpl-dialog-child-connected="${this.internalHandleDialogChildConnected}" @rpl-dialog-child-disconnected="${this.internalHandleDialogChildDisconnected}"></slot> </div> </div> `
    }
}
v([P({
    attribute: !1
})], Qc.prototype, "dialogRef", void 0), v([P({
    attribute: !1
})], Qc.prototype, "panelRef", void 0), v([P({
    attribute: !1
})], Qc.prototype, "overlayRef", void 0), v([P({
    type: Boolean,
    reflect: !0
})], Qc.prototype, "open", void 0), v([P({
    type: Boolean,
    reflect: !0,
    attribute: "overlay-blur"
})], Qc.prototype, "overlayBlur", void 0), v([P({
    reflect: !0,
    attribute: "dialog-id"
})], Qc.prototype, "dialogId", void 0), v([P({
    reflect: !0,
    attribute: "dialog-classname"
})], Qc.prototype, "dialogClassName", void 0), v([P({
    reflect: !0
})], Qc.prototype, "label", void 0), v([P({
    type: Boolean
})], Qc.prototype, "blocking", void 0), v([P({
    type: Boolean,
    attribute: "no-animate"
})], Qc.prototype, "noAnimate", void 0), v([P({
    type: Boolean,
    reflect: !0,
    attribute: "disable-cache-contents"
})], Qc.prototype, "disableCacheContents", void 0), v([w()], Qc.prototype, "litTemplateChildren", void 0);
var zc = s`${Rc}:host{--transition-duration:250ms;display:contents}.dialog{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;bottom:0;left:0;z-index:var(--z-index-dialog,1000);user-select:none;pointer-events:none}.dialog-panel{display:flex;flex-direction:column;z-index:2;width:fit-content;max-width:calc(100% - var(--spacer-2xl));max-height:calc(100% - var(--spacer-2xl));background-color:var(--color-ui-modalbackground);border-radius:var(--radius-md);box-shadow:var(--boxshadow-modal)}.dialog-variant-plain .dialog-panel{max-width:100%;max-height:100%;background-color:transparent;border-radius:initial;box-shadow:initial}.dialog-panel:focus{outline:0}.dialog-open{user-select:auto}.dialog-open .dialog-overlay,.dialog-open .dialog-panel{pointer-events:auto}.dialog-open .dialog-panel{display:flex;opacity:1}.dialog-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.dialog-overlay-blur{backdrop-filter:blur(var(--dialog-backdrop-blur, 4px))}.dialog-overlay-no-modal{display:none!important}`;
let Jc = class extends Qc {
    constructor() {
        super(...arguments), this.animationNames = {
            show: "dialog.show",
            hide: "dialog.hide",
            denyClose: "dialog.denyClose",
            overlayShow: "dialog.overlay.show",
            overlayHide: "dialog.overlay.hide"
        }, this.variant = "default"
    }
    handleDialogChildConnected(e) {
        e.appearance = "modal", "plain" !== this.variant && this.styledDialogChildren.size > 0 && (this.variant = "plain")
    }
    renderDialogBaseClasses() {
        return {
            [`dialog-variant-${this.variant}`]: !0
        }
    }
};
Jc.styles = zc, v([P({
    type: String,
    reflect: !0
})], Jc.prototype, "variant", void 0), Jc = v([A("rpl-dialog")], Jc), Jl("dialog.show", {
    keyframes: [{
        opacity: 0,
        scale: .8
    }, {
        opacity: 1,
        scale: 1
    }],
    options: {
        duration: 250,
        easing: "ease"
    }
}), Jl("dialog.hide", {
    keyframes: [{
        opacity: 1,
        scale: 1
    }, {
        opacity: 0,
        scale: .8
    }],
    options: {
        duration: 250,
        easing: "ease"
    }
}), Jl("dialog.denyClose", {
    keyframes: [{
        scale: 1
    }, {
        scale: 1.02
    }, {
        scale: 1
    }],
    options: {
        duration: 250
    }
}), Jl("dialog.overlay.show", {
    keyframes: [{
        opacity: 0
    }, {
        opacity: 1
    }],
    options: {
        duration: 250
    }
}), Jl("dialog.overlay.hide", {
    keyframes: [{
        opacity: 1
    }, {
        opacity: 0
    }],
    options: {
        duration: 250
    }
});
const Xc = async e => {
    const t = () => new Promise((e => setTimeout(e, 0)));
    return e.hasUpdated || await e.updateComplete, t()
};
class Zc {
    constructor(e, t) {
        this.host = e, this.config = t, this.rafId = null, this._connectedElements = new Map, this._wasObserving = [], e.addController(this)
    }
    async hostConnected() {
        const e = this.host.hasUpdated;
        if (this.resizeObserver ?? (this.resizeObserver = new ResizeObserver(((e, t) => {
                this.rafId && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame((() => (this.rafId = null, this.config.callback.call(this.host).call(this.host, e, t))))
            }))), e) {
            for (const e of this._wasObserving) this.connectElement(e);
            this._wasObserving = []
        }!e && this.config.observeAllOnFirstUpdate && (await Xc(this.host), this.observeAllElements())
    }
    hostDisconnected() {
        this._wasObserving = this.connectedElements, this.unobserveAllElements()
    }
    fetchElement(e) {
        return this.config.elements[e]?.call(this.host) ?? null
    }
    get connectedElements() {
        return Array.from(this._connectedElements.keys())
    }
    get unconnectedElements() {
        return Object.keys(this.config.elements).filter((e => !this._connectedElements.has(e)))
    }
    connectElement(e) {
        const t = this.fetchElement(e);
        return t && (this._connectedElements.has(e) && this.resizeObserver.unobserve(this._connectedElements.get(e)), this.resizeObserver.observe(t, {
            box: "border-box"
        }), this._connectedElements.set(e, t)), !!t
    }
    observeAllElements() {
        for (const e of this.unconnectedElements) this.connectElement(e)
    }
    unobserveAllElements() {
        this.resizeObserver.disconnect(), this._connectedElements.clear()
    }
    replaceObservedElement(e) {
        return this.connectElement(e)
    }
}
var eu = s`${Rc}${Oc}:host{--background-color:var(--color-ui-modalbackground);--_overlay-height:var(--scrollbox-overlay-height, 2.5em);--_overlay-margin:calc(var(--_overlay-height) * -1);--_overlay-z-index:var(--overlay-z-index, 1)}@media (prefers-color-scheme:dark){:host{--background-color-transparent:rgba(0, 0, 0, 0)}}@media (prefers-color-scheme:light){:host{--background-color-transparent:rgba(255, 255, 255, 0)}}:host{display:flex;flex-direction:column;min-height:0;flex-shrink:1;flex-grow:0;overflow:auto;padding:0 4px;margin:0 -4px}:host{-ms-overflow-style:none;scrollbar-width:none}:host::-webkit-scrollbar{display:none;width:0!important}.visibility-ref-bottom,.visibility-ref-top{pointer-events:none}.visibility-ref-bottom{position:relative;bottom:1px}.bottom-overlay,.top-overlay{position:sticky;height:var(--_overlay-height);min-height:var(--_overlay-height);margin-top:var(--_overlay-margin);opacity:1;transition:opacity .2s;pointer-events:none;z-index:var(--_overlay-z-index)}.overlay--hidden{opacity:0}.top-overlay{top:-1px;background:linear-gradient(to bottom,var(--background-color) 20%,var(--background-color-transparent))}.bottom-overlay{bottom:-1px;background:linear-gradient(to top,var(--background-color) 20%,var(--background-color-transparent))}`;
class tu extends Pc {
    constructor() {
        super(...arguments), this.visibilityEls = {}, this.showTopOverlay = !1, this.showBottomOverlay = !1, this.disableOverlay = !1, this.updateOverlayVisibility = e => {
            for (const t of e) {
                if (!(t.target instanceof HTMLElement)) continue;
                const {
                    position: e
                } = t.target.dataset, o = !t.isIntersecting;
                "bottom" === e && (this.showBottomOverlay = o), "top" === e && (this.showTopOverlay = o)
            }
            this.emitter.dispatch("visibility-change")
        }, this.createVisibilityRef = e => {
            if (!(e instanceof HTMLElement)) return;
            const t = e.dataset.position;
            this.visibilityEls[t] && this.intersectionObserver.unobserve(this.visibilityEls[t]), this.intersectionObserver.observe(e), this.visibilityEls[t] = e
        }
    }
    connectedCallback() {
        super.connectedCallback(), this.intersectionObserver = new IntersectionObserver(this.updateOverlayVisibility, {
            root: this,
            threshold: [0, 1]
        })
    }
    render() {
        return r` <div class="${G({"top-overlay":!0,"overlay--hidden":!this.showTopOverlay||this.disableOverlay})}"></div> <div class="visibility-ref-top" ${mc(this.createVisibilityRef)} data-position="top"></div> <slot></slot> <div class="visibility-ref-bottom" ${mc(this.createVisibilityRef)} data-position="bottom"></div> <div class="${G({"bottom-overlay":!0,"overlay--hidden":!this.showBottomOverlay||this.disableOverlay})}"></div> `
    }
}
v([w()], tu.prototype, "showTopOverlay", void 0), v([w()], tu.prototype, "showBottomOverlay", void 0), v([w()], tu.prototype, "disableOverlay", void 0);
let ou = class extends tu {};
ou.styles = eu, ou = v([A("rpl-scrollbox")], ou);
class nu extends(function(e) {
    var t;
    if (Tc(e, Wc)) return e;
    class o extends e {
        constructor() {
            super(...arguments), this[t] = !0, this.dockable = !1, this.docked = !1, this.appearance = void 0
        }
        async connectedCallback() {
            super.connectedCallback(), this.hasUpdated || await this.updateComplete, this.dispatchEvent(new CustomEvent("rpl-dialog-child-connected", {
                bubbles: !0,
                composed: !0
            }))
        }
        disconnectedCallback() {
            this.dispatchEvent(new CustomEvent("rpl-dialog-child-disconnected", {
                bubbles: !0,
                composed: !0
            }))
        }
    }
    return t = Hc, o[Wc] = !0, v([w()], o.prototype, "dockable", void 0), v([w()], o.prototype, "docked", void 0), v([P({
        type: String,
        reflect: !0,
        attribute: "appearance"
    })], o.prototype, "appearance", void 0), o
}(Pc)) {
    constructor() {
        super(...arguments), this.resizeController = new Zc(this, {
            observeAllOnFirstUpdate: !0,
            callback: () => this.handleResize,
            elements: {
                content: () => this.contentRef
            }
        }), this.isFooterEmpty = !0, this.shouldContentScroll = !1, this.scrollableContent = !1, this.autoClose = !1, this.autoDock = !1, this.contentRef = void 0, this.headerRef = uc(), this.footerRef = uc(), this.emitCloseButtonClickEvent = () => {
            this.emitter.dispatch("close-button-clicked", {
                bubbles: !0,
                composed: !0,
                detail: {}
            })
        }, this.emitDockButtonClickEvent = () => {
            this.emitter.dispatch("dock-button-clicked", {
                bubbles: !0,
                composed: !0,
                detail: {}
            })
        }, this.handleCloseButtonClick = e => {
            this.autoClose && this.emitCloseButtonClickEvent()
        }, this.handleCloseButtonKeydown = e => {
            this.autoClose && "Enter" === e.key && this.emitCloseButtonClickEvent()
        }, this.handleDockButtonClick = e => {
            this.autoDock && this.emitDockButtonClickEvent()
        }, this.handleDockButtonKeydown = e => {
            this.autoDock && "Enter" === e.key && this.emitDockButtonClickEvent()
        }, this.handleResize = () => {
            this.updateShouldContentScroll(), this.emitter.dispatch("resize")
        }, this.updateShouldContentScroll = async () => {
            this.shouldContentScroll = !!this.contentRef && Lc(this.contentRef), this.style.setProperty("--modal-card-scrollbar-width", this.contentRef?.offsetWidth - this.contentRef?.clientWidth + "px")
        }
    }
    willUpdate(e) {
        if (e.has("docked")) {
            const e = this.shadowRoot?.querySelector("rpl-scrollbox");
            if (!e) return;
            this.docked ? (e.style.scrollBehavior = "auto", e.scrollTo({
                top: 0,
                behavior: "auto"
            }), e.style.scrollBehavior = "", e.style.overflow = "hidden") : e.style.overflow = ""
        }
    }
    setContentRef(e) {
        if (!e) return;
        const t = e;
        this.contentRef = t, this.resizeController.replaceObservedElement("content")
    }
    get headerHeight() {
        return this.headerRef.value?.clientHeight
    }
    handleSlotChange(e) {
        this.isFooterEmpty = !(this.footerSlot?.length || this.primaryButtonSlot?.length || this.secondaryButtonSlot?.length || this.tertiaryButtonSlot?.length)
    }
    render() {
        const e = this.dockable && "bottom-sheet" === this.appearance,
            t = r` <div class="${G({"header-action-container":!0,"header-action-container-floating":this.shouldContentScroll})}" part="header-action-container"> ${e?r`<slot name="dock-button" part="dock-button" class="${G({"dock-button-docked":this.docked})}" @click="${this.handleDockButtonClick}" @keydown="${this.handleDockButtonKeydown}"></slot>`:l} <slot name="close-button" part="close-button" @click="${this.handleCloseButtonClick}" @keydown="${this.handleCloseButtonKeydown}"></slot> </div>`,
            o = r` <div class="modal-card-header-container" part="header-container"> <div part="header" class="${G({"modal-card-header":!0,"modal-card-header-with-icon":this.titleGraphic.length>0,"modal-card-header-with-collapse":e})}" ${mc(this.headerRef)}> <slot name="title-graphic"></slot> <slot name="title"></slot> </div> ${this.scrollableContent?r`<rpl-scrollbox .disableOverlay="${this.docked}"><slot></slot></rpl-scrollbox>`:r`<slot></slot>`} </div>`;
        return r` ${this.shouldContentScroll?t:l} <div class="${G({"modal-card-content":!0,"styled-scrollbar":!0,"modal-card-content-docked":this.docked})}" part="content"> <rpl-scrollbox ${mc(this.setContentRef)} .disableOverlay="${this.docked}"> ${[this.shouldContentScroll?l:t,o]} </rpl-scrollbox> </div> <div part="footer" class="${G({"modal-card-footer":!0,"modal-card-footer-sticky":this.shouldContentScroll,"modal-card-footer-empty":this.isFooterEmpty})}" ?hidden="${e&&this.docked}" ${mc(this.footerRef)}> <slot name="tertiary-button" @slotchange="${this.handleSlotChange}"></slot> <div class="primary-secondary-button-container"> <slot name="secondary-button" @slotchange="${this.handleSlotChange}"></slot> <slot name="primary-button" @slotchange="${this.handleSlotChange}"></slot> </div> <slot name="footer" @slotchange="${this.handleSlotChange}"></slot> </div> `
    }
}
v([w()], nu.prototype, "isFooterEmpty", void 0), v([w()], nu.prototype, "shouldContentScroll", void 0), v([P({
    type: Boolean,
    reflect: !0,
    attribute: "scrollable-content"
})], nu.prototype, "scrollableContent", void 0), v([P({
    type: Boolean,
    reflect: !0,
    attribute: "auto-close"
})], nu.prototype, "autoClose", void 0), v([P({
    type: Boolean,
    reflect: !0,
    attribute: "auto-dock"
})], nu.prototype, "autoDock", void 0), v([U({
    slot: "title-graphic"
})], nu.prototype, "titleGraphic", void 0), v([U({
    slot: "footer",
    flatten: !0
})], nu.prototype, "footerSlot", void 0), v([U({
    slot: "primary-button",
    flatten: !0
})], nu.prototype, "primaryButtonSlot", void 0), v([U({
    slot: "secondary-button",
    flatten: !0
})], nu.prototype, "secondaryButtonSlot", void 0), v([U({
    slot: "tertiary-button",
    flatten: !0
})], nu.prototype, "tertiaryButtonSlot", void 0);
var iu = s`${Rc}:host{--scrollbar-background:var(--color-ui-modalbackground);display:flex;flex-direction:column;align-items:center;height:100%;position:relative;font-size:16px;box-sizing:border-box;max-height:inherit;min-height:inherit;overflow:auto;padding:0;background-color:var(--color-ui-modalbackground)}:host([appearance=modal]){border-radius:var(--rem16);box-shadow:var(--boxshadow-modal)}:host([appearance=bottom-sheet]){border-top-left-radius:var(--radius-md);border-top-right-radius:var(--radius-md);width:100%;max-height:calc(var(--bottom-sheet-expanded-height) - 1rem)}.modal-card-content{box-sizing:border-box;padding:var(--content-padding,var(--spacer-md));width:100%;display:flex;flex-direction:column;flex:1 1;overflow:auto}:host([appearance=bottom-sheet]) .modal-card-content{padding:0 var(--content-padding,var(--spacer-md)) var(--content-padding,var(--spacer-md))}:host([appearance=bottom-sheet]) .modal-card-content-docked{padding:0 var(--content-padding,var(--spacer-md)) 0}.header-action-container{display:inline-flex;position:absolute;top:0;right:0;margin:var(--content-padding,var(--spacer-md));z-index:2;gap:var(--spacer-xs)}:host([appearance=bottom-sheet]) .header-action-container{margin:0 var(--content-padding,var(--spacer-md)) var(--content-padding,var(--spacer-md))}.header-action-container.header-action-container-floating{margin:var(--content-padding,var(--spacer-md)) calc(var(--content-padding,var(--spacer-md)) + var(--modal-card-scrollbar-width)) var(--content-padding,var(--spacer-md))}:host([appearance=bottom-sheet]) .header-action-container.header-action-container-floating{margin:0 calc(var(--content-padding,var(--spacer-md)) + var(--modal-card-scrollbar-width)) var(--content-padding,var(--spacer-md))}slot:not([name]){padding:var(--spacer-xs) 0;font-size:var(--rem14);display:flex;flex-direction:column}:host([scrollable-content]) slot:not([name]){display:contents}:host([scrollable-content]) slot:not([name])::slotted(.rpl-modal-card-scrollable){min-height:0;flex-shrink:1;overflow:auto}slot[name=title]{font-size:var(--rem18);font-weight:700;text-align:left}slot[name=tertiary-button]{font-size:14px;text-align:center}slot[name=close-button],slot[name=dock-button]{display:inline-flex;transition:transform .2s;transform-origin:center}slot[name=dock-button].dock-button-docked{transform:rotate(180deg)}.modal-card-close-button-floating slot[name=close-button],.modal-card-close-button-floating slot[name=dock-button]{box-shadow:var(--elevation-sm);border-radius:999px}.modal-card-header{display:flex;gap:var(--spacer-sm);width:100%;max-width:calc(100% - var(--spacer-3xl));box-sizing:border-box;text-align:left}:host([appearance=bottom-sheet]) .modal-card-header{padding-bottom:var(--rem8)}.modal-card-header,.modal-card-header-with-icon{flex-direction:row;padding:0 var(--spacer-2xl) 0 0}.modal-card-header-with-collapse{padding:0 5rem 0 0}.modal-card-footer{display:flex;flex-direction:column;width:100%;background:var(--color-ui-modalbackground);padding:var(--spacer-md);box-sizing:border-box;gap:var(--spacer-sm)}.modal-card-footer-empty{display:none}.modal-card-footer-sticky{box-shadow:var(--elevation-md)}.primary-secondary-button-container{gap:var(--spacer-sm);display:flex;flex-direction:column}@media (min-width:640px){:host([appearance=bottom-sheet]) slot[name=tertiary-button],:host([appearance=modal]) slot[name=tertiary-button]{align-items:center}:host([appearance=bottom-sheet]) .modal-card-footer,:host([appearance=modal]) .modal-card-footer{flex-direction:row;align-items:center;justify-content:space-between}:host([appearance=bottom-sheet]) .primary-secondary-button-container,:host([appearance=modal]) .primary-secondary-button-container{flex-direction:row;margin-left:auto}}`;
let su = class extends nu {};
su.styles = iu, su = v([A("rpl-modal-card")], su);
let au = 0;
const ru = "push-token-last-refresh-ms";
var du;
! function(e) {
    e.Enabled = "Enabled", e.Pending = "Pending", e.NoServiceWorker = "NoServiceWorker", e.NoPushManager = "NoPushManager", e.NoSubscription = "NoSubscription", e.NoNotificationAPI = "NoNotificationAPI", e.Blocked = "Blocked", e.Error = "Error"
}(du || (du = {}));
const lu = e => Qe({
    source: "notification_system_settings",
    action: e,
    noun: "push_notifications"
});
let cu = !1;

function uu(...e) {
    document.querySelector("shreddit-app")?.trackEvent(Qe(...e))
}
async function hu(e = !1, t = navigator.serviceWorker) {
    const o = await (t?.getRegistration());
    if (!o) return !1;
    let n = await o.pushManager.getSubscription();
    if (n && !e) return !0;
    const i = {
        userVisibleOnly: !0,
        applicationServerKey: "BJ2nJR9HeBwCWe4s7bKfKgWZkx2Q8Q59yBdSVLxWIhPaWuzHDUxQ2YJnhLvbAVujWBZYuQv60V6a6oipSw09FT0"
    };
    cu = !0;
    try {
        return uu({
            source: "notification",
            action: "request",
            noun: "pushToken"
        }), n = await o.pushManager.subscribe(i), n ? (await async function(e) {
            const t = await Ml({
                operation: Pl.RegisterPushToken,
                variables: {
                    pushToken: e,
                    language: document.documentElement.lang || js["en-US"],
                    timezoneName: Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Los_Angeles",
                    timestamp: (new Date).toISOString()
                }
            });
            if (!t.data.registerWebPushToken?.ok) throw new Error("Error registering push token");
            _i.setItem(ru, Date.now().toString())
        }(JSON.stringify(n)), uu({
            source: "notification",
            action: "register",
            noun: "pushToken"
        }), !0) : !1
    } catch {
        return uu({
            source: "notification",
            action: "bail",
            noun: "pushToken"
        }), !1
    } finally {
        cu = !1
    }
}
const pu = () => "Notification" in globalThis && void 0 !== globalThis.Notification ? Notification : null;
async function mu(e = navigator.serviceWorker) {
    const t = await e.getRegistration(),
        o = await (t?.pushManager.getSubscription()),
        n = o?.unsubscribe();
    return n && uu(lu("disable")), n
}
async function gu(e = navigator.serviceWorker, t = pu()) {
    if (!t) return du.NoNotificationAPI;
    try {
        await Eu.promise;
        const o = await (e?.getRegistration());
        if (!o) return du.NoServiceWorker;
        if (!o.pushManager) return du.NoPushManager;
        if ("denied" === t.permission) return du.Blocked;
        if ("default" === t.permission) return du.Pending;
        return await o.pushManager.getSubscription() ? du.Enabled : cu ? du.Pending : du.NoSubscription
    } catch {
        return du.Error
    }
}
async function _u(e = navigator.serviceWorker, t = pu()) {
    if ("denied" === t.permission) return await fu(), !1;
    const o = await t.requestPermission();
    if ("granted" === o) {
        const t = await hu(!1, e);
        return t && uu(lu("enable")), t
    }
    return "denied" === o && (await fu(), !1)
}

function fu() {
    return async function(e) {
        let t = null;
        const o = `alert-dialog-${au}`,
            n = e.closeText || "Close dialog",
            i = e.okText || "Ok",
            s = e => {
                e.stopPropagation(), t?.hide()
            },
            a = r`<rpl-modal-card> ${e.title?r`<h2 slot="title" class="text-16 font-semibold">${e.title}</h2>`:l} <p>${e.text}</p> <div slot="primary-button"> ${z({children:i,appearance:"primary",attributes:{"aria-label":i,onclick:s}})} </div> <div slot="close-button"> ${z({appearance:"secondary",shape:"pill",leadingIcon:p({size:m.Small}),size:W.Small,attributes:{"aria-label":n,onclick:s}})} </div> </rpl-modal-card>`,
            d = document.createDocumentFragment();
        h(r`<rpl-dialog open id="${o}" dialog-id="${o}" label="${e.title}" .litTemplateChildren="${a}"></rpl-dialog>`, d), au++, document.body.appendChild(d), t = document.querySelector(`rpl-dialog#${o}`), t.showModal(), await new Promise((e => {
            t?.addEventListener("rpl-dialog:after-hide", (() => e()), {
                once: !0
            })
        })), t.remove()
    }({
        title: "Notifications Disabled",
        text: "Use your browser settings menu to allow notifications for this site."
    })
}
let vu = !1;
const Eu = new Ut,
    bu = (e = navigator.serviceWorker) => {
        if (!e) return;
        const t = document.getElementsByTagName("shreddit-app")?.[0],
            o = {
                action_info: {
                    page_type: Qn()
                },
                screen: {
                    height: window?.screen.height,
                    width: window?.screen.width
                },
                referrer: qe(t?.getAttribute("referrer") || document.referrer, window.location.href)
            };
        e.controller?.postMessage({
            command: "registerClient",
            v2EventBoilerPlate: o,
            disablePNs: "true" === t?.getAttribute("disable-pns")
        })
    },
    Su = (e = navigator.serviceWorker) => {
        e?.addEventListener("message", (t => {
            const {
                data: o
            } = t;
            if ("registerWithServiceWorker" === (o.command || o.type)) return bu(e)
        }))
    },
    yu = new Ut;
window.addEventListener("beforeinstallprompt", (e => {
    e.preventDefault(), yu.resolve(e)
})), window.addEventListener("appinstalled", (() => {
    const e = Qe({
            source: "mweb",
            action: "install",
            noun: "pwa"
        }),
        t = document.querySelector("shreddit-app");
    t?.trackEvent(e)
}));
const Cu = (e = window) => !!e.matchMedia?.("(display-mode: standalone), (display-mode: minimal-ui), (display: window-controls-overlay)").matches,
    Tu = "join",
    Au = "report";
var Iu;
! function(e) {
    e.AchievementsModalShowById = "achievements-modal-show-by-id", e.AchievementsProgressToast = "achievements-progress-toast", e.AddRemovalReasonClose = "add_removal_reason_close", e.AdUpdated = "ad_updated", e.AMAEnded = "ama_ended", e.AMAOpenExamplesModal = "ama_open_examples_modal", e.AMAOpenSelfieTooltip = "ama_open_selfie_tooltip", e.AMAPostRsvpSubscribe = "ama_post_rsvp_subscribe", e.AMAPostRsvpUnsubscribe = "ama_post_rsvp_unsubscribe", e.AMAStarted = "ama_started", e.AMATryEnd = "ama_try_end", e.AMATryStartEarly = "ama_try_start_early", e.AvatarStateUpdated = "avatar_state_updated", e.AvatarUpdated = "avatar_updated", e.AwardContent = "award_content", e.AwardDialogClose = "award_dialog_close", e.AwardDialogClubAwardConfirmation = "award_dialog_club_award_confirmation", e.AwardDialogClubAwardRequest = "award_dialog_club_award_request", e.AwardDialogGoldTopUpRequest = "award_dialog_gold_top_up_request", e.AwardDialogNavigateTo = "award_dialog_navigate_to", e.AwardOnContentUpdated = "award_on_content_updated", e.BlockPdpAdClick = "block_pdp_ad_click", e.CancelCommunitySubscription = "cancel_community_subscription", e.CommentComposerBlurred = "comment_composer_blurred", e.CommentComposerFocused = "comment_composer_focused", e.CommentCreated = "comment_created", e.CommentDeleted = "comment_deleted", e.CommentFilterUpdated = "comment_filter_updated", e.CommentSort = "comment_sort", e.CommentTreeAdsLoaded = "comment_tree_ads_loaded", e.CommentUpdated = "comment_updated", e.CommunityAuthorFlairUpdated = "community_author_flair_updated", e.CommunityGuideUpdated = "community_guide_updated", e.CommunityOnboardingUpdated = "community_onboarding_updated", e.CommunitySubscriptionPurchaseNavigateTo = "community_subscription_purchase_navigate_to", e.CTLReportInit = "ctl_report_init", e.CustomFeedCreated = "custom_feed_created", e.CustomFeedDeleted = "custom_feed_deleted", e.CustomFeedSourcesUpdated = "custom_feed_sources_updated", e.CustomFeedUpdated = "custom_feed_updated", e.DsaTransparencyModal = "dsa_transparency_modal", e.EntityFilterView = "entity_filter_view", e.ExplainerClosed = "explainer_closed", e.FeatureActivated = "feature_activated", e.GoldPurchased = "gold_purchased", e.GuidesCitationMismatch = "guides_citation_mismatch", e.GuidesDeactivateLink = "guides_deactivate_link", e.GuidesEntrypointTooltipOpen = "guides_entrypoint_tooltip_open", e.GuidesRenderNewQuestionContainer = "guides_render_new_question_container", e.GuidesRenderNewQuestionContainerStarted = "guides_render_new_question_container_started", e.GuidesRenderSplitScreenPostsView = "guides_render_split_screen_posts_view", e.GuidesRenderSplitScreenView = "guides_render_split_screen_view", e.GuidesResponseContainerSsrRendered = "guides_response_container_ssr_rendered", e.GuidesRetryRequested = "guides_retry_requested", e.GuidesStartGoodVisitTimer = "guides_start_good_visit_timer", e.GuidesStopGoodVisitTimer = "guides_stop_good_visit_timer", e.GuidesStoreGoodVisit = "guides_store_good_visit", e.GuidesSubscriptionConnected = "guides_subscription_connected", e.GuidesSubscriptionDisconnected = "guides_subscription_disconnected", e.GuidesSubscriptionResponded = "guides_subscription_responded", e.GuidesSuggestionLoadingStarted = "guides_suggestion_loading_started", e.GuidesUnavailableQueryClicked = "guides_unavailable_query_clicked", e.I18nCommentTranslationOverride = "i18n_comment_translation_override", e.I18nMoreCommentsPostMetrics = "i18n_more_comments_post_metrics", e.I18nPostTranslationOverride = "i18n_post_translation_override", e.InboxCountChanged = "inbox_count_changed", e.InboxReadAllEvent = "notification_inbox_notification_read_all_event", e.LightboxClose = "lightbox_close", e.LightboxClosed = "lightbox_closed", e.LightboxOpen = "lightbox_open", e.LightboxOpened = "lightbox_opened", e.LoidLoaded = "loid_loaded", e.MediaAutoplayAttempt = "media_autoplay_attempt", e.MediaSyncPlayback = "media_sync_playback", e.MediaSyncVolume = "media_sync_volume", e.ModActivityPanelForceClose = "mod_activity_panel_force_close", e.ModChatChannelsChannelDetailsClosed = "mod_chat_channels_channel_details_closed", e.ModChatChannelsDeleteAction = "mod_chat_channels_delete_action", e.ModChatChannelsDeleteCancelled = "mod_chat_channels_delete_cancelled", e.ModChatChannelsSaveAction = "mod_chat_channels_save_action", e.ModChatChannelsSaveCancelled = "mod_chat_channels_save_cancelled", e.ModChatChannelsSettingsDialogData = "mod_chat_channels_settings_dialog_data", e.ModChatChannelsSettingsDialogOptimisticSave = "mod_chat_channels_settings_dialog_optimistic_save", e.ModChatChannelsSettingsDialogSaveError = "mod_chat_channels_settings_dialog_save_error", e.ModChatChannelsSettingsDialogSaveSuccess = "mod_chat_channels_settings_dialog_save_success", e.ModChatChannelsSettingsDialogSaving = "mod_chat_channels_settings_dialog_saving", e.ModNotesCreated = "mod_notes_created", e.ModNotesDeleted = "mod_notes_deleted", e.ModNotesLogFilter = "mod_notes_log_filter", e.ModNotesOpenLog = "mod_notes_open_log", e.ModNotesOpenLogFocus = "mod_notes_open_log_focus", e.ModNotesOpenUserFlairEdditor = "mod_notes_open_user_flair_editor", e.ModNotesRailClose = "mod_notes_rail_close", e.ModNotesRailForceClose = "mod_notes_rail_force_close", e.ModNotesRailOpen = "mod_notes_rail_open", e.ModQueueActivityPanelClosed = "mod_queue_activity_panel_closed", e.ModQueueActivityPanelOpened = "mod_queue_activity_panel_opened", e.ModQueueBulkSelection = "mod_queue_bulk_selection", e.ModQueueKeyboardShortcuts = "modqueue_keyboard_shortcuts", e.ModQueuePdpLinkClick = "mod_queue_pdp_link_click", e.ModQueuePdpPanelClosed = "mod_queue_pdp_panel_closed", e.ModQueuePdpPanelOpened = "mod_queue_pdp_panel_opened", e.ModQueueThingSelected = "mod_queue_thing_selected", e.ModQueueTutorialOpen = "mod_queue_tutorial_open", e.ModRealtimeUpdate = "mod_realtime_update", e.ModReportsToggle = "mod_reports_toggle", e.ModRulesCloseRuleDetails = "mod_rules_close_rule_details", e.ModRulesConfirmRuleEditRejection = "mod_rules_confirm_rule_edit_rejection", e.ModRulesCreateRule = "mod_rules_create_rule", e.ModRulesOpenRuleDetails = "mod_rules_open_rule_details", e.ModRulesRuleDeleted = "mod_rules_rule_deleted", e.ModRulesRuleDetailsClosed = "mod_rules_rule_details_closed", e.ModRulesSaveRuleDetails = "mod_rules_save_rule_details", e.ModRulesShowCloseConfirmModal = "mod_rules_show_close_confirm_modal", e.ModRulesShowRuleDeleteModal = "mod_rules_show_rule_delete_modal", e.ModRulesShowRuleReasonModal = "mod_rules_show_rule_reason_modal", e.ModToolsEmojiReloadTable = "mod_tools_emoji_reload_table", e.MultiredditFavoriteStatusChange = "multireddit_favorite_status_change", e.NotificationInboxNotificationHideEvent = "notification_inbox_notification_hide_event", e.PageDataLoaded = "page_data_loaded", e.PageDataRequested = "page_data_requested", e.PostFlairUpdated = "post_flair_updated", e.PostUpdated = "post_updated", e.PremiumPurchased = "premium_purchased", e.PromotePostSuccess = "promote_post_success", e.PurchaseCheckout = "purchase_checkout", e.PurchaseCheckoutMetadata = "purchase_checkout_metadata", e.PurchaseDialogClose = "purchase_dialog_close", e.PurchaseDialogGoldTopUpRequest = "purchase_dialog_gold_top_up_request", e.PurchaseDialogNavigateTo = "purchase_dialog_navigate_to", e.RedoAvatarAction = "redo_avatar_action", e.ReloadHighlights = "reload_highlights", e.RemovalReasonStatus = "removal_reason_status", e.ReportFlowClose = "report_flow_close", e.ReportFlowInit = "report_flow_init", e.ReportPageSummaryUpdate = "report_page_summary_update", e.RequestAvatarState = "request_avatar_state", e.ResizeEmbed = "resize_embed", e.ScreenViewDataLoaded = "screenview_data_loaded", e.SmartEscalationsClose = "smart_escalations_close", e.SmartEscalationsInit = "smart_escalations_init", e.SmartEscalationsOpen = "smart_escalations_open", e.SmartEscalationsStatus = "smart_escalations_status", e.SubredditCommunityClubGiftedAccessDialogClose = "subreddit_community_club_gifted_access_dialog_close", e.SubredditCommunityClubMembershipChange = "subreddit_community_club_membership_change", e.SubredditFavoriteStatusChange = "subreddit_favorite_status_change", e.SubredditMuteStatusChange = "subreddit_mute_status_change", e.SubredditSubscriptionChange = "subreddit_subscription_change", e.ThemeCookieSetByUser = "theme_cookie_set_by_user", e.ThemeCookieSyncedFromUserPreference = "theme_cookie_synced_from_user_preference", e.TopicPageSeeAllClicked = "topic_page_see_all_clicked", e.TopicPageTabChanged = "topic_page_tab_changed", e.TranslationToggled = "translation_toggled", e.TriggerAmaRemindMeModal = "trigger_ama_remind_me_modal", e.TriggerCommentBlockingAuth = "trigger_comment_blocking_auth", e.TriggerCommunityAppearanceMenu = "trigger_community_appearance_menu", e.TriggerEducationalDeeplinkPrompt = "trigger_educational_deeplink_prompt", e.TriggerFeedErrorBanner = "trigger_feed_error_banner", e.TriggerLightboxOpen = "trigger_lightbox_open", e.UndoAvatarAction = "undo_avatar_action", e.UpdateAvatarState = "update_avatar_state", e.UpdateCommunitySubscriptionStripePaymentMethod = "update_community_subscription_stripe_payment_method", e.UserModActionsBan = "user_mod_actions_ban", e.UserModActionsBanCancel = "user_mod_actions_ban_cancel", e.UserModActionsBanFailure = "user_mod_actions_ban_failure", e.UserModActionsMute = "user_mod_actions_mute", e.UserModActionsMuteCancel = "user_mod_actions_mute_cancel", e.UserModActionsMuteFailure = "user_mod_actions_mute_failure", e.UserModActionsUnban = "user_mod_actions_unban", e.UserModActionsUnmute = "user_mod_actions_unmute", e.WikiVersionSelected = "wiki-version-selected"
}(Iu || (Iu = {}));
let Pu = null,
    wu = class extends a {
        constructor() {
            super(...arguments), this._activatedFeatures = new Set, this.pubSubController = new Xe(this), this._onFeatureActivated = e => {
                this.registerFeatureActivation(e.name)
            }
        }
        connectedCallback() {
            super.connectedCallback(), Pu = this;
            const e = this.dataset.activatedFeatures?.split("|").filter((e => e)) ?? [];
            this._activatedFeatures = new Set(e), this.pubSubController.subscribe(Iu.FeatureActivated, this._onFeatureActivated, !1)
        }
        _refreshDataset() {
            this.dataset.activatedFeatures = Array.from(this._activatedFeatures).join("|")
        }
        registerFeatureActivation(e) {
            this._activatedFeatures.add(e), this._refreshDataset()
        }
        hasFeatureBeenActivated(e) {
            return this._activatedFeatures.has(e)
        }
    };
wu = v([A("shreddit-activated-feature-meta")], wu);
const Ru = e => !!Pu && Pu.hasFeatureBeenActivated(e),
    Ou = new Set;
window.addEventListener("beforeRoute", (() => {
    Ou.clear()
}));
const Nu = async ({
    name: e,
    queryParams: t,
    routeParams: o,
    bodyParams: n,
    renderMode: i,
    root: s = document
}) => {
    const a = s.querySelector(`faceplate-loader[name=${e}]`),
        r = s.querySelector(`faceplate-iframe[name=${e}], faceplate-partial[name=${e}]`),
        d = r instanceof mo,
        l = d && i && i !== Tt.Replace;
    if ((Ou.has(e) || Ru(e)) && !l) return;
    if (!r) throw new Error(`${e} not found`);
    if (a && r && a.nextElementSibling !== r) throw new Error(`Both loader and loader element for ${e} was found, but they are not siblings`);
    if (a && a?.loading !== St.Programmatic || r?.loading !== St.Programmatic) throw new Error(`${e} cannot be activated`);
    const c = r.src,
        u = d ? r.renderMode : void 0,
        h = new URLSearchParams(t).toString();
    if (h) {
        const e = r.src.includes("?");
        r.src = `${r.src}${e?"&":"?"}${h}`
    }
    if (o)
        for (const e in o) {
            const t = o[e];
            r.src = r.src.replace(`/:${e}`, t ? `/${t}` : "")
        }
    const p = r.getAttribute("method");
    n && (r.setAttribute("method", Ct.Post), Object.entries(n).forEach((([e, t]) => {
        const o = document.createElement("input");
        o.setAttribute("type", "hidden"), o.setAttribute("name", e), o.setAttribute("value", t), r.appendChild(o)
    }))), i && d && (r.renderMode = i), l || Ou.add(e);
    const m = await Promise.allSettled([a?.load(), r.load()]);
    return l && (r.src = c, u && (r.renderMode = u), p ? r.setAttribute("method", p) : null === p && r.removeAttribute("method")), Ze(Iu.FeatureActivated, {
        name: e
    }), Ze(`activate-${e}`), m
};
var Mu, Du;
! function(e) {
    e[e.UserAccountCreated = 200] = "UserAccountCreated"
}(Mu || (Mu = {})),
function(e) {
    e.Email = "register_email", e.EmailVerification = "register_email_verification", e.UsernameAndPassword = "register_username_and_password", e.Username = "register_username", e.Password = "register_password"
}(Du || (Du = {})), Du.Email, Du.EmailVerification, Du.UsernameAndPassword, Du.Email, Du.EmailVerification, Du.Username, Du.Password;
const Lu = "recaptcha",
    Uu = "recaptcha-script";
var ku, xu;
! function(e) {
    e[e.UserLoggedIn = 200] = "UserLoggedIn", e[e.TwoFARequired = 202] = "TwoFARequired", e[e.InvalidInput = 400] = "InvalidInput", e[e.RecaptchaFailed = 401] = "RecaptchaFailed"
}(ku || (ku = {})),
function(e) {
    e.ConfirmOTPApp = "login_otp_app", e.ConfirmOTPBackup = "login_otp_backup", e.UsernameAndPassword = "login_username_and_password"
}(xu || (xu = {}));
const Fu = "googleid-signin",
    Bu = `${Fu}-script`,
    Vu = "https://accounts.google.com",
    Gu = "appleid-signin",
    Wu = `${Gu}-script`,
    Hu = "https://appleid.apple.com";
var qu, $u, Yu, ju, Ku;
! function(e) {
    e.ConfirmOTPApp = "link_account_otp_app", e.ConfirmOTPBackup = "link_account_otp_backup", e.ConfirmPassword = "link_account_password", e.SelectAccount = "link_account_select_account"
}(qu || (qu = {})),
function(e) {
    e[e.UserLoggedIn = 200] = "UserLoggedIn", e[e.UserAccountCreated = 201] = "UserAccountCreated", e[e.MultipleAccountsFound = 202] = "MultipleAccountsFound", e[e.GoogleCredentialMismatch = 203] = "GoogleCredentialMismatch"
}($u || ($u = {})),
function(e) {
    e.AddPhone = "add-phone", e.UpdatePhone = "update-phone", e.AddEmailWithPhone = "add-email"
}(Yu || (Yu = {})),
function(e) {
    e.EnterPhone = "phone_auth_enter_phone", e.OTP = "new_phone_auth_otp"
}(ju || (ju = {})),
function(e) {
    e.AddPhone = "add_phone", e.UpdatePhone = "update_phone", e.RemovePhone = "remove_phone", e.AddEmail = "add_email", e.DeactivateAccount = "deactivate_account", e.Onboarding = "onboarding"
}(Ku || (Ku = {}));
const Qu = 3e3,
    zu = 31,
    Ju = 200,
    Xu = 3e4,
    Zu = "Validation error on hidden input",
    eh = "TWO_FA_REQUIRED",
    th = /^\/(login|register|username|password|passwordrecovery|onboarding)\/$/,
    oh = () => "Something went wrong";
var nh, ih, sh;
! function(e) {
    e.Login = "login", e.Password = "password", e.PasswordRecovery = "passwordrecovery", e.Register = "register", e.RegisterEmailOnly = "register-email-only", e.RegisterPrompt = "register-prompt", e.Onboarding = "onboarding", e.PhoneAuth = "phone_auth", e.HighFlyerRegister = "high_flyer_register", e.AnswersRegister = "answers_register", e.LoggedInAction = "logged_in_action", e.CommunityValueRegister = "community_value_register"
}(nh || (nh = {})),
function(e) {
    e.Login = "login-standalone", e.Password = "password-standalone", e.PasswordRecovery = "passwordrecovery-standalone", e.Register = "register-standalone"
}(ih || (ih = {})),
function(e) {
    e.GoogleOneTapPrompt = "googleOneTapPrompt", e.SignupDrawerPrompt = "signupDrawerPrompt", e.InlineAuthLandingExperienceXpromo = "inlineAuthLandingExperienceXpromo"
}(sh || (sh = {}));
const ah = {
    ...sh,
    ...nh
};
var rh, dh, lh, ch, uh, hh, ph, mh, gh, _h;
! function(e) {
    e.IncorrectUsernamePassword = "INCORRECT_USERNAME_PASSWORD", e.InvalidClient = "INVALID_CLIENT", e.InvalidScope = "INVALID_SCOPE", e.NotFound = "NOT_FOUND", e.RateLimit = "RATELIMIT", e.TwoFARequired = "TWO_FA_REQUIRED", e.WrongOTP = "WRONG_OTP"
}(rh || (rh = {})),
function(e) {
    e.Apple = "apple", e.Google = "google", e.Reddit = "reddit"
}(dh || (dh = {})),
function(e) {
    e.Login = "login", e.OneTap = "one_tap", e.Register = "register", e.RegisterEmailOnly = "register-email-only", e.SignupDrawer = "signup_drawer", e.Username = "username", e.Password = "password", e.PasswordRecovery = "passwordrecovery", e.PhoneAuth = "phone_auth", e.XpromoLogin = "xpromo_login", e.InlineUpsell = "upsell_unit", e.Onboarding = "onboarding", e.AccountSettings = "account_settings", e.SSOLinking = "sso_linking", e.DesktopAuthPrompt = "desktop_auth_prompt", e.HighFlyerRegister = "high_flyer_register", e.AnswersRegister = "answers_register", e.LoggedInAction = "logged_in_action", e.CommunityValueRegister = "community_value_register", e.Unknown = "unknown", e.NsfwBlockAuth = "nsfw_block_auth"
}(lh || (lh = {})),
function(e) {
    e.Open = "auth-flow-modal-open"
}(ch || (ch = {})),
function(e) {
    e.App = "app", e.Backup = "backup"
}(uh || (uh = {})),
function(e) {
    e.DeleteBirthdate = "/svc/shreddit/account/delete-birthdate", e.DeactivateAccount = "/svc/shreddit/account/deactivate_account", e.DeactivateAccountWithPhoneToken = "/svc/shreddit/account/deactivate_account_with_phone_token", e.IdentityProviderCreate = "/svc/shreddit/account/identity_provider_create", e.IdentityProviderLink = "/svc/shreddit/account/identity_provider_link", e.IdentityProviderSignin = "/svc/shreddit/account/identity_provider_signin", e.LinkExternalIdentity = "/svc/shreddit/account/link-external-identity", e.Login = "/svc/shreddit/account/login", e.LoginOTP = "/svc/shreddit/account/login/otp", e.Logout = "/svc/shreddit/account/logout", e.PasswordResetInitialize = "/svc/shreddit/account/password_reset_initialize", e.PasswordResetAccounts = "/svc/shreddit/account/password_reset_accounts", e.PasswordReset = "/svc/shreddit/account/password_reset", e.EmailVerifyInitialize = "/svc/shreddit/account/email_verify_initialize", e.EmailVerifyConfirm = "/verification/:token", e.UpdateEmail = "/svc/shreddit/account/update-email", e.UnlinkExternalIdentity = "/svc/shreddit/account/unlink-external-identity", e.UpdatePassword = "/svc/shreddit/account/update-password", e.UpdatePhoneNumberWithPassword = "/svc/shreddit/account/update-phone-with-password", e.UpdatePhoneNumberWithCurrentPhoneNumber = "/svc/shreddit/account/update-phone-with-phone", e.UpdateEmailWithPhoneNumber = "/svc/shreddit/account/update-email-with-phone", e.UpdateBirthdate = "/svc/shreddit/account/update-birthdate", e.RemovePhoneWithPhone = "/svc/shreddit/account/remove-phone-with-phone", e.VerifyPhoneByAccountInitialize = "/svc/shreddit/account/verify-phone-by-account-initialize", e.VerifyPhoneByAccount = "/svc/shreddit/account/verify-phone-by-account", e.VerifyPhoneByCodeInitialize = "/svc/shreddit/account/verify_phone_by_code_initialize", e.VerifyPhoneByCode = "/svc/shreddit/account/verify_phone_by_code", e.LoginWithPhoneNumber = "/svc/shreddit/account/login_with_phone_number", e.RegisterPhone = "/svc/shreddit/account/register_phone", e.RegisterEmail = "/svc/shreddit/account/register_email", e.RegisterEmailVerifyInitialize = "/svc/shreddit/account/register_email_verify_initialize", e.RegisterEmailVerifyCheck = "/svc/shreddit/account/register_email_verify_check"
}(hh || (hh = {})),
function(e) {
    e.RecoverUsername = "recover_username", e.CheckInbox = "recover_username_check_inbox"
}(ph || (ph = {})),
function(e) {
    e.ResetPassword = "forgot_password", e.CheckInbox = "reset_password_check_inbox"
}(mh || (mh = {})),
function(e) {
    e.PasswordRecovery = "reset_password", e.CheckInbox = "check_inbox"
}(gh || (gh = {})),
function(e) {
    e.AccountSelection = "account_selector", e.ResetPassword = "enter_new_password"
}(_h || (_h = {}));
const fh = "token_v2",
    vh = "reddit_session";
Object.values(nh).join("|");
const Eh = [qu.SelectAccount, qu.ConfirmPassword, qu.ConfirmOTPApp, qu.ConfirmOTPBackup, xu.UsernameAndPassword, xu.ConfirmOTPApp, xu.ConfirmOTPBackup, Du.Email, Du.UsernameAndPassword, Du.Username, Du.Password, mh.ResetPassword, mh.CheckInbox, ph.RecoverUsername, ph.CheckInbox];
var bh;
! function(e) {
    e.login = "login_with_password", e.sso = "login_with_external_identity", e.register = "register_email", e.verifyPhone = "verify_phone", e.loginWithPhone = "login_with_phone", e.registerPhone = "register_phone"
}(bh || (bh = {}));
const Sh = {
        [hh.LoginWithPhoneNumber]: bh.loginWithPhone,
        [hh.VerifyPhoneByCodeInitialize]: bh.verifyPhone,
        [hh.RegisterPhone]: bh.registerPhone
    },
    yh = new Set([xu.UsernameAndPassword, Du.Email, ...Object.values(mh), ...Object.values(gh), ...Object.values(_h), ...Object.values(ph)]),
    Ch = "AchievementsModal_W1BJpN",
    Th = "AchievementsProgressToast_6M6xx1",
    Ah = "AddAmaCollaboratorsModal_BvmjY3",
    Ih = "AwardDialog_GzBkf2",
    Ph = "AwardGoldPurchase_2vyXH0",
    wh = "ClubAwardConfirmation_fsfTBP",
    Rh = "CommentDeletionModal_NHxzSQ",
    Oh = "CommentShareMenu_G1sJ5P",
    Nh = "CommunityAppearanceMenuContent_cX3DcT",
    Mh = "CommunityCreationFlow_qKTVdG",
    Dh = "CommunityHighlightEditModal_mWj1xn",
    Lh = "CommunityHighlightManageModal_X8NVJB",
    Uh = "CommunityListModal_cWH9Dd",
    kh = "CommunitySubscriptionFtue_zXPv2j",
    xh = "CommunitySubscriptionPurchaseDialog_pFCmLZ",
    Fh = "CommunityWidgetEditModal_GxQLgk",
    Bh = "CtlReporting_Nn03Ds",
    Vh = "CustomFeedAddModal_GPgCvP",
    Gh = "CustomFeedEditDetailsModal_1tH02m",
    Wh = "DevvitPrivacyModal_n98hrb",
    Hh = "ExplainerDialog_Psng26",
    qh = "FlairReorderModal_BhtyTj",
    $h = "GiftedClubAccessDialog_R4Kmbc",
    Yh = "GuidesConfirmationModal_6mWYhL",
    jh = "KlpShareMenu_L4BQCJ",
    Kh = "LeadGenDialog_4ym4rB",
    Qh = "ManageSubscriptionDetailDialog_xppCr7",
    zh = "ManageSubscriptionsListDialog_fGNPSg",
    Jh = "ModActionsSummary_clnskQ",
    Xh = "ModActivityPreviewHovercard_QsHM7h",
    Zh = "ModLogTakedownPreview_sL20RW",
    ep = "ModQueueActivityPanel_wWhGwy",
    tp = "ModQueuePdp_JyX3BC",
    op = "ModRulesItems_pvKs2G",
    np = "ModSmartEscalations_zlhxrB",
    ip = "ModUserNotes_V4JnwL",
    sp = "ModUserOverview_qJnHZL",
    ap = "ModUserPosts_hP2nPl",
    rp = "ModUserProfileComments_QC2gD0",
    dp = "ModUserSingleNote_V4JnwO",
    lp = "PostDeletionModal_dTjGQh",
    cp = "PostLevelCrowdControlFormContent_Vy24nw",
    up = "PremiumModal_r1FXhv",
    hp = "PromotePostInsightsPanel_MnMmHF",
    pp = "PromotePostModal_kKSj67",
    mp = "PurchaseDialog_Ytnr5G",
    gp = "PurchaseGold_tMQ0Qf",
    _p = "RecommendedMediaOverlay_tt3d9y",
    fp = "RecommendsFeed_4gxGS0",
    vp = "RedditChat_0nn1mJ",
    Ep = "RelatedCommunityRecommendations_qmZmnB",
    bp = "ReportFlow_sBPX0C",
    Sp = "ReportForm_N0yZlW",
    yp = "SavedResponsesReorderModal_TkNsVJ",
    Cp = "ShareMenu_tv6gfD",
    Tp = "SubredditMuteModal_VT4PHZ",
    Ap = "SubredditPostingEligibilityModalActivatable_v3LpNz",
    Ip = "TemporaryEventsPresets_BVPM81",
    Pp = "UpdatePostFlairModal_0lB6xr",
    wp = "UserFlairAssignModal_bRnWkC",
    Rp = "UserManagementRightPanel_CKVp5T",
    Op = "WhereToPost_rYDLdr";

function Np(e, t, o) {
    return e.some((e => {
        const [n, i] = e.split(":");
        return t === n && (!i || o === i)
    }))
}
let Mp = Nu;
const Dp = Symbol("mixins/with-overlays");
let Lp = window.location;
const Up = /^(\w*Error:)/,
    kp = e => Up.exec(e)?.[1]?.toLocaleLowerCase().replace(":", "") || "unknown",
    xp = e => {
        const t = e.detail;
        let o = t.sourceElement,
            n = t.cause;
        const i = e.target instanceof Element;
        if (!o && i && (o = e.target.tagName), !i || "FACEPLATE-ALERT" !== o && Fp(e.target)) "FACEPLATE-PARTIAL" === o && i && (o = `${o}[name=${e.target.getAttribute("name")}]`);
        else {
            const t = Bp(e.target);
            t && (o = `${o}__${t.tagName}`)
        }
        if ("partial-request-fetch-failure" === t.cause) {
            const e = "string" == typeof t.meta ? t.meta : "";
            if (e.includes("Connection has been terminated")) n = "partial-request-fetch-failure__connection-terminated";
            else {
                n = `partial-request-fetch-failure__${kp(e)}`
            }
        }
        return ee("faceplate-alert", {
            ...t,
            sourceElement: o,
            cause: n,
            _shredditEnriched: !0
        })
    };

function Fp(e) {
    return e.tagName.includes("-")
}

function Bp(e) {
    return null === e.parentElement || Fp(e.parentElement) ? e.parentElement : Bp(e.parentElement)
}
const Vp = {
        FetchFailure: "fetch-failure",
        FetchBadResponse: "fetch-bad-response",
        QueryBadResponse: "query-bad-response",
        UserInteractionFailed: "user-interaction-failed",
        UncaughtError: "uncaught-error",
        UserWentOffline: "user-went-offline"
    },
    Gp = e => {
        if (!(e instanceof Error)) return Vp.UncaughtError;
        if ("ClientGQLNetworkError" === e.name) return Vp.FetchBadResponse;
        const t = kp(e.toString());
        return "error" === t ? Vp.UncaughtError : `${Vp.UncaughtError}__${t}`
    };
class Wp extends Fo {
    report(e) {
        if ("network" === e.alertDetails?.kind) {
            const t = Il(e.alertDetails.response);
            return super.report({
                ...e,
                message: t
            })
        }
        return super.report(e)
    }
}
const Hp = function(e) {
        if (Ve(e, tl)) return e;
        class t extends e {
            constructor(...e) {
                super(...e), this.canLoadRequests = !1, this._canLoadRequests = !1, this.resolvePendingRequests = () => {
                    this._canLoadRequests = !0, this._pendingRequestsResolver?.()
                }, this.pauseIncomingRequests = () => {
                    this._canLoadRequests = !1
                };
                const t = [];
                new Promise((e => {
                    this._pendingRequestsResolver = e
                })).then((() => {
                    t.forEach((([e, t]) => {
                        e(t)
                    }))
                })), window.fetch = new Proxy(window.fetch, {
                    apply: (e, o, [n, i]) => {
                        const s = i?.headers?.Accept?.includes("text/vnd.reddit.partial+html") || "string" == typeof n && n.includes("render-mode=partial") || n instanceof URL && n.search.includes("render-mode=partial");
                        return this._canLoadRequests || !s ? e(n, i) : new Promise((o => {
                            t.push([o, e(n, i)])
                        }))
                    }
                }), window.Response = new Proxy(window.Response, {
                    construct(e, [t, o]) {
                        const n = Reflect.construct(e, [t, o]);
                        return (o?.headers instanceof Headers && o?.headers?.has(ce) || o?.headers?.[ce]) && n.headers.delete(ce), n
                    }
                }), window.Headers.prototype.set = new Proxy(window.Headers.prototype.set, {
                    apply(e, t, [o, n]) {
                        if (o !== ce) return Reflect.apply(e, t, [o, n])
                    }
                })
            }
            connectedCallback() {
                super.connectedCallback(), this._canLoadRequests = this.canLoadRequests
            }
        }
        return t[tl] = !0, v([P({
            type: Boolean,
            attribute: "can-load-requests"
        })], t.prototype, "canLoadRequests", void 0), t
    }(function(e) {
        var t;
        return Jd in e ? e : (t = class extends e {
            constructor() {
                super(...arguments), this.supportsDvh = !1, this._cleanupDvhPolyfill = () => {}, this._updateHeight = () => {
                    this._setDynamicViewportUnit((document.documentElement.clientHeight / 100).toFixed(1) + "px")
                }, this._updateHeightDebounced = zd(this._updateHeight, 50)
            }
            connectedCallback() {
                super.connectedCallback(), this.supportsDvh = CSS.supports("height: 100dvh"), this._polyfillDvh()
            }
            disconnectedCallback() {
                super.disconnectedCallback(), this._cleanupDvhPolyfill()
            }
            _polyfillDvh() {
                if (this.supportsDvh) this._setDynamicViewportUnit("1dvh");
                else {
                    const e = window.matchMedia?.("(orientation: landscape)");
                    e?.addEventListener?.("change", this._updateHeightDebounced), window.addEventListener("resize", this._updateHeightDebounced), this._updateHeight(), this._cleanupDvhPolyfill = () => {
                        window.removeEventListener("resize", this._updateHeightDebounced), e?.removeEventListener?.("change", this._updateHeightDebounced)
                    }
                }
            }
            _setDynamicViewportUnit(e) {
                document.documentElement.style?.setProperty?.("--dvh-unit", e), document.documentElement.style?.setProperty?.("--viewport-height", "calc(calc(var(--dvh-unit) * 100))")
            }
        }, t[Jd] = !0, t)
    }(function(e) {
        if (Ve(e, et)) return e;
        class t extends e {
            constructor() {
                super(...arguments), this._windowEvents = new x(this, (() => window)), this._cache = new Map, this.subscribers = new Map, this.registerSubscriber = this._windowEvents.define("pubsub-subscribe", (e => {
                    const {
                        topic: t,
                        subscriber: o,
                        readCache: n,
                        readCacheOnce: i
                    } = e.detail, s = this.getOrCreateTopicSubs(t);
                    s?.add(o), n && this._cache.has(t) && (o(this._cache.get(t)), i && this._cache.delete(t))
                })), this.unregisterSubscriber = this._windowEvents.define("pubsub-unsubscribe", (e => {
                    const {
                        topic: t,
                        subscriber: o
                    } = e.detail, n = this.getOrCreateTopicSubs(t);
                    n?.delete(o)
                })), this.publish = this._windowEvents.define("pubsub-publish", (e => {
                    const {
                        topic: t,
                        data: o
                    } = e.detail;
                    this.getOrCreateTopicSubs(t).forEach((e => e(o))), this._cache.set(t, o)
                }))
            }
            getOrCreateTopicSubs(e) {
                return this.subscribers.has(e) || this.subscribers.set(e, new Set), this.subscribers.get(e)
            }
        }
        return t[et] = !0, t
    }(We(function(e) {
        if (Ve(e, Dp)) return e;
        class t extends e {
            goToMweb() {
                Lp.href = `${CLIENT_CONFIG.ORIGIN}/register/`
            }
            getAuthFlowManager() {
                return document.querySelector("auth-flow-manager")
            }
            constructor(...e) {
                super(...e), this.isUserLoggedIn = !1, this._overlayEvents = new x(this), this.displays = [], this.handleLoggedInAction = async (e, t) => {
                    if (!this.isUserLoggedIn)
                        if (window.navigator.onLine) {
                            await this.displayAuthFlow({
                                ...e.detail,
                                ...t
                            }) || this.goToMweb()
                        } else this.showBrowserOfflineToast()
                }, this.onLoggedInAction = (e, t) => {
                    const o = this.getActionSourceFromEvent(e),
                        n = e.detail?.thingType,
                        i = e.detail?.username,
                        s = e.detail?.subreddit_name;
                    this.handleLoggedInAction(e, {
                        ...t,
                        ...n ? {
                            thingType: n
                        } : {},
                        ...i ? {
                            username: i
                        } : {},
                        ...s ? {
                            subredditName: s
                        } : {},
                        actionSource: o
                    })
                }, this.handleFaceplateTrack = (e, t) => {
                    const o = se(e.detail);
                    Np(Be, o) && this.handleLoggedInAction(e, {
                        ...t,
                        actionSource: this.getActionSource(e.detail?.action, e.detail?.noun),
                        san: o
                    })
                }, this.handleEventTrack = e => {
                    const t = se(e.detail.details),
                        o = e.detail.details?.popup?.button_text;
                    Np(Be, t, o) && this.handleLoggedInAction(e, {
                        actionSource: this.getActionSource(e.detail?.details?.action, e.detail?.details?.noun),
                        san: t
                    })
                }, this.registerDisplay = this._overlayEvents.define("register-overlay-display", (e => {
                    const t = e.detail.display; - 1 === this.displays.indexOf(t) && this.displays.push(t)
                })), this.unregisterDisplay = this._overlayEvents.define("unregister-overlay-display", (e => {
                    const t = e.detail.display,
                        o = this.displays.indexOf(t); - 1 !== o && this.displays.splice(o, 1)
                })), this.dismissOverlay = this._overlayEvents.define("dismiss-overlay", (() => {
                    for (const e of this.displays) e.dismissOverlay()
                })), this._overlayEvents.define(xe.upvote, this.onLoggedInAction), this._overlayEvents.define(xe.upvoteTry, this.onLoggedInAction), this._overlayEvents.define(xe.downvote, this.onLoggedInAction), this._overlayEvents.define(xe.downvoteTry, this.onLoggedInAction), this._overlayEvents.define(xe.reply, this.onLoggedInAction), this._overlayEvents.define(xe[Tu], this.onLoggedInAction), this._overlayEvents.define(xe.signup, this.onLoggedInAction), this._overlayEvents.define(xe.save, this.onLoggedInAction), this._overlayEvents.define(xe.follow, this.onLoggedInAction), this._overlayEvents.define(xe.awards, this.onLoggedInAction), this._overlayEvents.define(xe.purchaseProduct, this.onLoggedInAction), this._overlayEvents.define(xe.vaultLogin, this.onLoggedInAction), this._overlayEvents.define(xe.report, this.onLoggedInAction), this._overlayEvents.define(xe[ke], this.onLoggedInAction), this._overlayEvents.define(xe[Le], this.handleFaceplateTrack), this._overlayEvents.define(xe[Ue], this.handleEventTrack)
            }
            displayOverlay(e, t) {
                let o = !1;
                for (const n of this.displays) n.displayOverlay(e, t), o = !0;
                return o
            }
            async displayAuthFlow(e = {}) {
                const t = this.getAuthFlowManager();
                if (Fe.includes(e.san ?? "")) return t.show(nh.Login);
                try {
                    if (t.hasStep(nh.LoggedInAction)) return t.show(nh.LoggedInAction, {
                        queryParams: e
                    });
                    {
                        const t = new URLSearchParams(window.location.search).get("token") ?? void 0;
                        return await Mp({
                            name: "SignupDrawer_LcD4fG",
                            renderMode: Tt.Contents,
                            queryParams: {
                                ...e,
                                ...t && {
                                    token: t
                                }
                            }
                        }), !0
                    }
                } catch (o) {
                    return t.show(nh.Register, {
                        queryParams: {
                            thingId: e.thingId,
                            actionSource: e.actionSource
                        }
                    })
                }
            }
            showBrowserOfflineToast() {
                const e = ee("faceplate-alert", {
                    level: bt.warning,
                    message: "No internet connection. Please try again."
                });
                this.dispatchEvent(e)
            }
            getActionSource(e, t) {
                if ("click" === e) switch (t) {
                    case Ne.UpvoteComment:
                        return Oe.Upvote;
                    case Ne.DownvoteComment:
                        return Oe.Downvote;
                    case Ne.ReplyComment:
                        return Oe.Reply;
                    case Ne.Report:
                        return Oe.Report
                }
            }
            getActionSourceFromEvent(e) {
                return e.type === xe.upvoteTry ? Oe.Upvote : e.type === xe.downvoteTry ? Oe.Downvote : e.type
            }
        }
        return t[Dp] = !0, t
    }(a))))),
    qp = () => {},
    $p = [nl.FIRST_CONTENTFUL_PAINT, ...il];
let Yp = class extends Hp {
    get csrfProviderToken() {
        return wo.get("csrf_token") ?? ""
    }
    constructor() {
        super(), this.isUserLoggedIn = !1, this.isBfCacheRestore = !1, this.isNavigationControllerRestore = !1, this.isFlexNavigation = !1, this.translationContextValue = Hs, this.prefetch = !1, this.debug = !1, this.isBlank = !1, this.routeName = "", this.actionInfoHydration = {}, this.serverRenderId = "", this.correlationId = "", this.feedCorrelationId = "", this.loid = "", this.canonicalUrl = "", this.deviceType = Bo.MOBILE, this.referrer = document.referrer, this.referrerType = Vo.Reddit, this.country = "US", this.browser = "unknown", this.isCanary = !1, this.shouldDisableSendBeacon = !1, this.shouldUpdateRecaptcha = !1, this.useLocalStorageEventsCaching = !1, this.shouldTrackAppInstalled = !1, this.appName = yn, this.shouldObservePerformance = !1, this.release = "unknown", this.moreCommentsRoute = "", this._moreCommentsRoute = "", this.microAppName = "unknown", this.microAppPool = "unknown", this.microAppDeployment = "unknown", this.clientHash = "", this.commentsPartialSSR = "", this.disablePNs = !1, this.reportTranslationMetrics = !1, this.hasNonImmersiveTranslations = !1, this.userLanguage = "", this._alertControllerElement = null, this.perfMetrics = {}, this.ttfb_fcp_sent = !1, this.lcp_sent = !1, this.cls_sent = !1, this.inp_sent = !1, this.tpl_sent = !1, this.success = !0, this.screenViewData = {}, this._events = new x(this), this._v2Events = new Oo(this, (() => {})), this._alertReporter = new Wp(this), this._screenReaderAlertReceiver = new ll(this), this._w3Reporter = new Wi(this, (() => ({
            auth_state: this.isUserLoggedIn ? "logged_in" : "logged_out",
            browser: this.browser,
            deployment_type: this.isCanary ? "canary" : "main",
            device_type: this.deviceType,
            page_type: (this.pageType ?? "").toLowerCase(),
            referrer_type: this.referrerType
        }))), this._visibilityChange = new Oa(this), this._navigationController = new yd(this), this._alertsBuffer = [], this._connectBufferTimeMs = 2500, this._isAlertBuffering = !0, this.updateTranslationContextCookie = () => {
            gl({
                country: this.country,
                name: Ms,
                value: JSON.stringify(this.translationContextValue),
                options: Is
            })
        }, this.clearActiveToasts = () => {
            if (!(this._alertControllerElement && this._alertControllerElement.parentElement || (this._alertControllerElement = document.querySelector("alert-controller"), null !== this._alertControllerElement))) return;
            const {
                toaster: e
            } = this._alertControllerElement;
            Array.from(e?.querySelectorAll("faceplate-toast") || []).forEach((e => e.remove()))
        }, this.closeOfflineBannersIfOnline = () => {
            navigator.onLine && this.clearActiveToasts()
        }, this.handleOnline = () => {
            window.removeEventListener("faceplate-alert", qp), this.closeOfflineBannersIfOnline()
        }, this.handleOffline = () => {
            this.clearActiveToasts(), this._alertReporter.report({
                level: bt.warning,
                message: "You seem to be offline.",
                meta: {
                    disableAutoDismiss: !0
                },
                namedContent: {
                    icon: g({
                        size: m.Large
                    })
                },
                sourceElement: this.tagName,
                cause: Vp.UserWentOffline
            }), window.addEventListener("faceplate-alert", qp)
        }, this.handleFaceplateTrack = e => {
            const t = e.detail,
                o = {
                    ...Qe(t),
                    action_info: {
                        ...t.action_info,
                        page_type: t.action_info?.page_type || this._getPageType()
                    }
                };
            this._handleEvent(o), this._logIfMissingCorrelationId(o, "faceplate-track")
        }, this.handleUpdateTranslationContext = e => {
            if (this.hasNonImmersiveTranslations) return;
            const t = e?.detail;
            t && "object" == typeof t && (this.translationContextValue = {
                ...this.translationContextValue,
                ...t
            }, this.updateTranslationContextCookie())
        }, this.toggleSidebar = this._events.define("logo-click", (() => {
            this.classList.toggle("sidebar-open")
        })), this.onPageHide = () => {
            Ti(this._moreCommentsRoute)
        }, this.onPageShow = async e => {
            const t = performance.getEntriesByType("navigation").some((e => "back_forward" === e.type)) || performance.navigation.type === PerformanceNavigation.TYPE_BACK_FORWARD,
                o = e.persisted,
                n = await this._w3Reporter.getW3ReportSender();
            t && (this.isBfCacheRestore = o, n({
                name: "shreddit_page_shows_total",
                type: Ua.Counter,
                value: 1,
                labels: {
                    browser: this.browser,
                    cached: `${o}`,
                    auth_state: this.isUserLoggedIn ? "logged_in" : "logged_out",
                    page_type: this._getPageType()
                }
            })), this.closeOfflineBannersIfOnline()
        }, this.updateCorrelationIdsFromStorage = () => {
            let e = {};
            try {
                e = JSON.parse(this.dataset.faceplateTrackingContext || "{}")
            } catch (e) {
                window.Sentry?.captureException?.(e)
            }
            try {
                const t = window.sessionStorage.getItem(is),
                    o = window.sessionStorage.getItem(ss);
                t && (this.correlationId = t, window.sessionStorage.removeItem(is)), o && (this.feedCorrelationId = this.feedCorrelationId || o, window.sessionStorage.removeItem(ss));
                const n = {
                    correlation_id: this.correlationId,
                    ...this.feedCorrelationId ? {
                        feed: {
                            correlation_id: this.feedCorrelationId
                        }
                    } : {}
                };
                ae(n, e), this.dataset.faceplateTrackingContext = JSON.stringify(n)
            } catch (e) {
                window.Sentry?.captureException?.(e)
            }
        }, this.isErrorPage = () => !!(document.querySelector("#shreddit-forbidden") || document.querySelector("guard-community-modal") || document.querySelector(".subreddit-content-error")), this.initScreenViewData = () => {
            try {
                const e = this.querySelector("shreddit-screenview-data"),
                    t = e?.getAttribute("data") || "{}";
                this.screenViewData = JSON.parse(t)
            } catch (e) {
                console.error("invalid screenview data")
            }
        }, this.onFaceplateRequest = e => {
            this.addCSRFToken(e);
            const {
                body: t
            } = e.detail.request;
            if (t?.meta && (t.meta.page_not_found = ""), "/svc/shreddit/perfMetrics" === e.detail.resource) {
                t.meta = {
                    ...t.meta,
                    route_name: this.routeName,
                    page_type: this.pageType || "",
                    prefetch: this.prefetch.toString(),
                    microapp_name: this.microAppName,
                    device_type: this.deviceType,
                    is_ssr: this.commentsPartialSSR ? this.commentsPartialSSR : "unknown"
                }, this.success = !this.isErrorPage();
                !!document.querySelector("#shreddit-forbidden-not_found") && (t.meta.page_not_found = 1);
                const o = this.getPerformanceAttribution(t);
                this.handleWebVitalW3Reporting(t.metrics, {
                    hybrid: !1,
                    attribution: o
                }), this.batchPerfV2Event(t.metrics, {
                    attribution: o
                }), Object.keys(t.metrics).every((e => !$p.includes(e))) && e.preventDefault()
            }
        }, this.onPixelFired = e => {
            const t = {
                level: bt.debug,
                name: "pixel",
                meta: e.detail
            };
            !this._alertReporter.report(t) && this._isAlertBuffering && this._alertsBuffer.push(t)
        }, this._enrichScreenView = this._events.define("screenview-data-loaded", (e => {
            this.screenViewData = e.detail
        })), this._updateCanonicalUrl = this._events.define("canonical-url-updated", (e => {
            this.canonicalUrl = e.detail
        })), this._firstCommentUpdate = this._events.define(qd, (() => {
            const e = this.querySelector("faceplate-partial.lb-lazy-preload");
            e && e.classList.remove("hidden")
        })), this._pageviewUnsuccessful = this._events.define("unsuccessful-pageview", (() => {
            this.success = !1
        })), this._handleEvent = e => {
            if (!this.shouldOmitRblGVS(e) && (yi(e, this._moreCommentsRoute), this.debug)) {
                let t, o = {};
                try {
                    o = JSON.parse(document.getElementById("debug-event-data")?.value ?? "{}")
                } catch (e) {
                    return void console.error("Unable to parse JSON from `debug-event-data`.")
                }
                try {
                    t = this._augmentServerSideV2EventsData(e, o)
                } catch (e) {
                    return void console.error("Unable to augment event with server side data.")
                }
                const n = {
                    level: bt.debug,
                    name: "v2event",
                    meta: JSON.stringify(t)
                };
                !this._alertReporter.report(n) && this._isAlertBuffering && this._alertsBuffer.push(n)
            }
        }, this._logIfMissingCorrelationId = (e, t) => {
            try {
                const o = ne(this, "faceplateTrackingContext");
                e.correlation_id || window.Sentry?.captureMessage?.(`${t} missing correlation-id`, {
                    tags: {
                        connected: this.isConnected,
                        updated: this.hasUpdated,
                        event: `${e.source}|${e.action}|${e.noun}`,
                        correlationId: !!this.correlationId,
                        faceplateTrackingCorrelationId: !(!o || !o.correlation_id)
                    }
                }), this.feedCorrelationId && !e.feed?.correlation_id && window.Sentry?.captureMessage?.(`${t} missing correlation-id`, {
                    tags: {
                        connected: this.isConnected,
                        updated: this.hasUpdated,
                        event: `${e.source}|${e.action}|${e.noun}`,
                        feedCorrelationId: !!this.feedCorrelationId,
                        faceplateTrackingFeedCorrelationId: !(!o || !o.feed?.correlation_id)
                    }
                })
            } catch (e) {
                window.Sentry?.captureMessage?.(`Error reporting on ${t} with missing correlation_id: ${e.message}`)
            }
        }, this._trackEvent = this._events.define("track-event", (async e => {
            const t = this._addEventDetails(e);
            this._handleEvent(t), this._logIfMissingCorrelationId(t, "track-event")
        })), this._getPageType = () => (this.pageType ?? "").toLowerCase(), this._onLoadEmbed = this._events.define($d, (() => {
            var e;
            this.trackEvent((e = this.screenViewData, Qe({
                source: de.Global,
                action: le.Load,
                noun: re.Embed
            }, e)))
        })), this._onEmbedClicked = this._events.define(Yd, (e => {
            this.trackEvent(((e, t) => {
                const o = {
                    ...e,
                    action_info: {
                        ...e?.action_info,
                        type: pn.Whitespace
                    }
                };
                return t?.post && (o.post = t.post), t?.action_info?.position && (o.action_info.position = t.action_info.position), Qe({
                    source: de.Global,
                    action: le.Click,
                    noun: re.Embed
                }, o)
            })(this.screenViewData, e.detail.details))
        })), this._onEmbedEntrypointClicked = this._events.define(jd, (e => {
            this.trackEvent(((e, t) => {
                const o = {
                    ...e
                };
                return t?.comment && (o.comment = t?.comment), Qe({
                    source: de.Share,
                    action: le.Click,
                    noun: re.SnippetEmbed
                }, o)
            })(this.screenViewData, e.detail.details))
        })), this._onEmbedEntrypointViewed = this._events.define(Kd, (e => {
            this.trackEvent(((e, t) => {
                const o = {
                    ...e,
                    action_info: {
                        ...e?.action_info,
                        type: pn.HighlightTextComponent
                    }
                };
                return t?.comment && (o.comment = t?.comment), Qe({
                    source: de.Share,
                    action: le.View,
                    noun: re.HighlightMenu
                }, o)
            })(this.screenViewData, e.detail.details))
        })), this._storeCorrelationId = this._events.define(as, (() => {
            try {
                this.correlationId && window.sessionStorage.setItem(is, this.correlationId)
            } catch (e) {
                window.Sentry?.captureException?.(e)
            }
        })), this._storeFeedCorrelationId = this._events.define(rs, (() => {
            try {
                this.feedCorrelationId && window.sessionStorage.setItem(ss, this.feedCorrelationId)
            } catch (e) {
                window.Sentry?.captureException?.(e)
            }
        })), this._enrichErrorBannerEvents = this._events.define("faceplate-alert", (e => {
            if (e.detail.level !== bt.error || !e.target || (e => {
                    const t = e.detail;
                    return "_shredditEnriched" in t && !0 === t._shredditEnriched
                })(e)) return;
            e.stopImmediatePropagation();
            const t = xp(e);
            e.target.dispatchEvent(t)
        }), {
            capture: !0
        }), this.addEventListener("update-translation-context", this.handleUpdateTranslationContext), this.addEventListener("faceplate-request", this.onFaceplateRequest), window.addEventListener("pixelFired", this.onPixelFired), window.addEventListener("faceplate-track", this.handleFaceplateTrack), window.addEventListener("offline", this.handleOffline), window.addEventListener("online", this.handleOnline), window.addEventListener("beforeRoute", (() => Ti(this._moreCommentsRoute))), this.initScreenViewData();
        const e = this.querySelector("#canonical-url-updater");
        this.canonicalUrl = e?.getAttribute("value") ?? "", this._setTimeoutForAlertBuffer()
    }
    static get styles() {
        return [Z, J(":host {\n  display: block;\n}\n")]
    }
    render() {
        return r` <devvit-effect-wrapper loid="${this.loid}" ?is-desktop-viewport="${this.deviceType===Bo.DESKTOP}"> <slot></slot> </devvit-effect-wrapper> `
    }
    connectedCallback() {
        super.connectedCallback(), new Ld(this), this.updateCorrelationIdsFromStorage(), window.addEventListener("pageshow", this.onPageShow), window.addEventListener("pagehide", this.onPageHide), this.isFlexNavigation = !!document.querySelector("flex-left-nav-container"), this._moreCommentsRoute = this.moreCommentsRoute, this.removeAttribute("more-comments-route"), Wr.deviceType = this.deviceType, this.success = !this.isErrorPage(), this.initScreenViewData(), this._visibilityChange.trackScreenview(), this.styleOverrideController = new Hr(this), ol() && !document.documentElement.classList.contains("theme-dark") && document.documentElement.classList.add("theme-dark"), this.shouldTrackAppInstalled && (async (e = window) => Qe({
            source: "onboarding",
            action: "check",
            noun: "app_install"
        }, {
            action_info: {
                type: await ul(e)
            }
        }))().then((e => this.trackEvent(e))), (async (e, t = window) => {
            if (Cu(t) && (gl({
                    name: "pwa",
                    value: "1",
                    country: e,
                    options: Is
                }), !_i.getItem("pwa-pn-prompt"))) {
                const e = await gu();
                [du.Pending, du.NoSubscription].includes(e) && (_u(), _i.setItem("pwa-pn-prompt", `${Date.now()}`))
            }
        })(this.country), this.pageType !== Go.Embed && (async (e = navigator.serviceWorker) => {
            const t = window.CLIENT_EXPERIMENTS ?? {},
                o = "enabled" === t.shreddit_service_worker_registration;
            if ("enabled" === t.shreddit_service_worker_killswitch) {
                const t = await (e?.getRegistrations());
                for (const e of t) e.unregister()
            } else if (o) {
                try {
                    const t = await (e?.register("/sw.js", {
                        type: "module",
                        updateViaCache: "all"
                    }));
                    Eu.resolve(t)
                } catch (e) {
                    return void Eu.reject(e)
                }
                bu(e), Su(e), vu || (window.addEventListener("afterRoute", (() => bu(e))), vu = !0)
            }
        })().then((() => {
            !async function(e = navigator.serviceWorker, t = pu()) {
                if (await gu(e, t) !== du.Enabled) return !1;
                const o = Number(_i.getItem(ru) ?? "0");
                !(Date.now() - o < 144e5) && hu(!0, e)
            }()
        })), this.reportTranslationMetrics && (this._translationMetricsController = new el(this)), Qi(this.closeOfflineBannersIfOnline)
    }
    willUpdate(e) {
        this.hasUpdated && (e.has("correlationId") || e.has("feedCorrelationId")) && this.updateCorrelationIdsFromStorage()
    }
    disconnectedCallback() {
        super.disconnectedCallback(), window.removeEventListener("pageshow", this.onPageShow), window.removeEventListener("pagehide", this.onPageHide), window.removeEventListener("pixelFired", this.onPixelFired), window.removeEventListener("faceplate-track", this.handleFaceplateTrack), window.removeEventListener("offline", this.handleOffline), window.removeEventListener("online", this.handleOnline), this._alertControllerElement = null
    }
    getPerformanceAttribution(e) {
        return Object.keys(e.metrics).reduce(((t, o) => {
            const n = e.meta[o] ?? {};
            if (o === nl.LARGEST_CONTENTFUL_PAINT && !this.lcp_sent) {
                const {
                    lcpEntry: e,
                    timeToFirstByte: t
                } = n;
                n.expectedLcpElement = ht(e?.element), "number" == typeof t && (n.expectedLcpTtfb = Math.round(t))
            }
            return Object.assign(t, {
                [o]: n
            })
        }), {})
    }
    addCSRFToken(e) {
        const t = e.detail.request.body;
        t && ("function" != typeof t.append ? Object.getPrototypeOf(t) === Object.getPrototypeOf({}) && (t.csrf_token = this.csrfProviderToken) : t.append("csrf_token", this.csrfProviderToken))
    }
    trackClickWordmark() {
        this.trackEvent(Ni())
    }
    buildPerfEvent(e, t) {
        const o = {
            source: "client",
            action: "record",
            noun: e,
            perf_metrics: t,
            request: {
                canonical_url: this.canonicalUrl
            },
            browser_context: {
                hybrid_navigation_count: Ad(),
                release: this.release,
                time_origin: Math.round(performance.timeOrigin)
            },
            action_info: {
                page_type: this.pageType,
                route_name: this.routeName
            }
        };
        return this._visibilityChange._screenviewId && (o.screenview_id = this._visibilityChange._screenviewId), o
    }
    batchPerfV2Event(e, {
        attribution: t
    }) {
        const o = {
            ...this.perfMetrics,
            ...e
        };
        if (this.perfMetrics = o, this.debug && (window.perfMetrics = this.perfMetrics), !this.ttfb_fcp_sent && void 0 !== o["first-contentful-paint"] && void 0 !== o["time-to-first-byte"]) {
            const e = {
                    time_to_first_byte: o["time-to-first-byte"],
                    first_contentful_paint: o["first-contentful-paint"]
                },
                t = this.buildPerfEvent("ttfb_fcp", e);
            this._handleEvent(Qe(t)), this.ttfb_fcp_sent = !0
        }
        if (!this.inp_sent && void 0 !== o[nl.INTERACTION_TO_NEXT_PAINT]) {
            const e = {
                    interaction_to_next_paint: o[nl.INTERACTION_TO_NEXT_PAINT]
                },
                t = this.buildPerfEvent("inp", e);
            this._handleEvent(Qe(t)), this.inp_sent = !0
        }
        if (!this.cls_sent && void 0 !== o[nl.CUMULATIVE_LAYOUT_SHIFT]) {
            const e = {
                    cumulative_layout_shift_float: o[nl.CUMULATIVE_LAYOUT_SHIFT]
                },
                t = this.buildPerfEvent("cls", e);
            this._handleEvent(Qe(t)), this.cls_sent = !0
        }
        if (!this.lcp_sent && void 0 !== o[nl.LARGEST_CONTENTFUL_PAINT]) {
            const e = {
                    largest_contentful_paint: o[nl.LARGEST_CONTENTFUL_PAINT]
                },
                {
                    expectedLcpElement: n,
                    expectedLcpTtfb: i
                } = t?.[nl.LARGEST_CONTENTFUL_PAINT] ?? {};
            e.expected_lcp_element = n, null != i && (e.expected_lcp_ttfb = i);
            const s = this.buildPerfEvent("lcp", e);
            this._handleEvent(Qe(s)), this.lcp_sent = !0
        }
        if (!this.tpl_sent && null != o[nl.TOTAL_PAGE_LOAD]) {
            const e = {
                    total_page_load: o[nl.TOTAL_PAGE_LOAD]
                },
                t = this.buildPerfEvent("total_page_load", e);
            this._handleEvent(Qe(t)), this.tpl_sent = !0
        }
    }
    handleWebVitalW3Reporting(e, {
        hybrid: t,
        attribution: o
    }) {
        Object.entries(e).forEach((([e, n]) => {
            if (!(isFinite(n) && n > 0)) return;
            const i = {
                device_type: this.deviceType,
                is_logged_in: this.isUserLoggedIn ? "true" : "false",
                microapp_deployment: this.microAppDeployment,
                microapp_name: this.microAppName,
                microapp_pool: this.microAppPool,
                page_type: this.pageType || "",
                route_name: this.routeName,
                hybrid_nav: t ? "true" : "false",
                comments_lit_ssr: this.commentsPartialSSR ? this.commentsPartialSSR : "unknown",
                flex_nav_m2: String(this.isFlexNavigation)
            };
            switch (e) {
                case nl.FIRST_CONTENTFUL_PAINT:
                    this._w3ReportWebVital({
                        name: "shreddit_first_contentful_paint_seconds",
                        type: Ua.Histogram,
                        value: n / 1e3,
                        labels: i
                    });
                    break;
                case nl.LARGEST_CONTENTFUL_PAINT: {
                    const {
                        expectedLcpElement: e
                    } = o?.[nl.LARGEST_CONTENTFUL_PAINT] ?? {};
                    i.expected_lcp_element = e, this._w3ReportWebVital({
                        name: "shreddit_largest_contentful_paint_seconds",
                        type: Ua.Histogram,
                        value: n / 1e3,
                        labels: i
                    });
                    break
                }
                case nl.TIME_TO_FIRST_BYTE:
                    this._w3ReportWebVital({
                        name: "shreddit_time_to_first_byte_seconds",
                        type: Ua.Histogram,
                        value: n / 1e3,
                        labels: i
                    });
                    break;
                case nl.CUMULATIVE_LAYOUT_SHIFT:
                    this._w3ReportWebVital({
                        name: "shreddit_cumulative_layout_shift",
                        type: Ua.Histogram,
                        value: n,
                        labels: i
                    });
                    break;
                case nl.INTERACTION_TO_NEXT_PAINT:
                    this._w3ReportWebVital({
                        name: "shreddit_interaction_to_next_paint_seconds",
                        type: Ua.Histogram,
                        value: n / 1e3,
                        labels: i
                    })
            }
        }))
    }
    _w3ReportWebVital(...e) {
        return ja(...e)
    }
    _isScreenview(e) {
        return "global" === e.source && "view" === e.action && "screen" === e.noun
    }
    shouldOmitRblGVS(e) {
        const t = Hn(e),
            o = e.action_info?.page_type === Go.AdsRblSurvey;
        return t && o
    }
    _augmentServerSideV2EventsData(e, t) {
        return Wn(e, t)
    }
    _addEventDetails(e) {
        const t = e.composedPath(),
            o = e.detail.details;
        for (const e of t)
            if (e instanceof HTMLElement) {
                const t = ne(e, "faceplateTrackingContext");
                t && ae(o, t)
            } return ae(o, {
            action_info: {
                page_type: this._getPageType(),
                ...this.actionInfoHydration
            },
            request: {
                canonical_url: this.canonicalUrl
            }
        }), o
    }
    _setTimeoutForAlertBuffer() {
        const e = e => {
                this._isAlertBuffering && (e.stopImmediatePropagation(), this._alertsBuffer.push(e.detail))
            },
            t = () => {
                this._alertsBuffer = this._alertsBuffer.filter((e => !this._alertReporter.report(e)))
            };
        this.addEventListener("faceplate-alert", e);
        const o = setInterval(t, 250);
        setTimeout((() => {
            clearInterval(o), t(), this.removeEventListener("faceplate-alert", e), this._isAlertBuffering = !1, this._alertsBuffer = []
        }), this._connectBufferTimeMs)
    }
};
v([Ao({
    context: Xd
}), P({
    type: Boolean,
    attribute: "user-logged-in"
})], Yp.prototype, "isUserLoggedIn", void 0), v([Ao({
    context: Zd
}), w()], Yp.prototype, "translationContextValue", void 0), v([P({
    type: Boolean
})], Yp.prototype, "prefetch", void 0), v([P({
    type: Boolean
})], Yp.prototype, "debug", void 0), v([P({
    type: Boolean
})], Yp.prototype, "isBlank", void 0), v([P({
    type: String
})], Yp.prototype, "routeName", void 0), v([P({
    type: String
})], Yp.prototype, "pageType", void 0), v([P({
    type: Object
})], Yp.prototype, "actionInfoHydration", void 0), v([P({
    type: String
})], Yp.prototype, "serverRenderId", void 0), v([P({
    type: String,
    attribute: "correlation-id",
    reflect: !0
})], Yp.prototype, "correlationId", void 0), v([P({
    type: String,
    attribute: "feed-correlation-id",
    reflect: !0
})], Yp.prototype, "feedCorrelationId", void 0), v([P({
    type: String
})], Yp.prototype, "loid", void 0), v([P({
    type: String
})], Yp.prototype, "canonicalUrl", void 0), v([P({
    type: String
})], Yp.prototype, "deviceType", void 0), v([P({
    type: String,
    attribute: "referrer"
})], Yp.prototype, "referrer", void 0), v([P({
    type: String,
    attribute: "referrer-type"
})], Yp.prototype, "referrerType", void 0), v([P({
    type: String,
    attribute: "country"
})], Yp.prototype, "country", void 0), v([P({
    type: String,
    attribute: "browser"
})], Yp.prototype, "browser", void 0), v([P({
    type: Boolean,
    attribute: "is-canary"
})], Yp.prototype, "isCanary", void 0), v([P({
    type: Boolean,
    attribute: "disable-send-beacon"
})], Yp.prototype, "shouldDisableSendBeacon", void 0), v([P({
    type: Boolean,
    attribute: "update-recaptcha"
})], Yp.prototype, "shouldUpdateRecaptcha", void 0), v([P({
    type: Boolean,
    attribute: "use-local-storage-events-caching"
})], Yp.prototype, "useLocalStorageEventsCaching", void 0), v([P({
    type: Boolean,
    attribute: "should-track-app-installed"
})], Yp.prototype, "shouldTrackAppInstalled", void 0), v([P({
    type: String,
    attribute: "app-name"
})], Yp.prototype, "appName", void 0), v([P({
    type: Boolean,
    attribute: "should-observe-performance"
})], Yp.prototype, "shouldObservePerformance", void 0), v([P({
    type: String,
    attribute: "release"
})], Yp.prototype, "release", void 0), v([P({
    type: String,
    attribute: "more-comments-route"
})], Yp.prototype, "moreCommentsRoute", void 0), v([P({
    type: String,
    attribute: "microapp-name"
})], Yp.prototype, "microAppName", void 0), v([P({
    type: String,
    attribute: "microapp-pool"
})], Yp.prototype, "microAppPool", void 0), v([P({
    type: String,
    attribute: "microapp-deployment"
})], Yp.prototype, "microAppDeployment", void 0), v([P({
    type: String,
    attribute: "clienthash"
})], Yp.prototype, "clientHash", void 0), v([P({
    type: String,
    attribute: "comments-partial-ssr"
})], Yp.prototype, "commentsPartialSSR", void 0), v([P({
    type: Boolean,
    attribute: "disable-pns"
})], Yp.prototype, "disablePNs", void 0), v([P({
    type: Boolean,
    attribute: "report-translation-metrics"
})], Yp.prototype, "reportTranslationMetrics", void 0), v([P({
    type: Boolean,
    attribute: "has-non-immersive-translations"
})], Yp.prototype, "hasNonImmersiveTranslations", void 0), v([P({
    type: String,
    attribute: "user-language"
})], Yp.prototype, "userLanguage", void 0), v([w()], Yp.prototype, "perfMetrics", void 0), Yp = v([A("shreddit-app")], Yp);
_("shreddit-logo", '<svg xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 216 216"\n    xmlns:xlink="http://www.w3.org/1999/xlink"\n    xml:space="preserve">\n      <defs>\n        <linearGradient id="orangeredGradient" gradientTransform="rotate(90)">\n          <stop offset="0%" stop-color="#FE7B0E"></stop>\n          <stop offset="100%" stop-color="#EF0A22"></stop>\n        </linearGradient>\n      </defs>\n      <defs>\n<style>\n  .snoo-cls-1 {\n    fill: url(#snoo-radial-gragient) white;\n  }\n\n  .snoo-cls-1, .snoo-cls-2, .snoo-cls-3, .snoo-cls-4, .snoo-cls-5, .snoo-cls-6, .snoo-cls-7, .snoo-cls-8, .snoo-cls-9, .snoo-cls-10, .snoo-cls-11 {\n    stroke-width: 0px;\n  }\n\n  .snoo-cls-2 {\n    fill: url(#snoo-radial-gragient-2) white;\n  }\n\n  .snoo-cls-3 {\n    fill: url(#snoo-radial-gragient-3) white;\n  }\n\n  .snoo-cls-4 {\n    fill: url(#snoo-radial-gragient-4) #fc4301;\n  }\n\n  .snoo-cls-5 {\n    fill: url(#snoo-radial-gragient-6) black;\n  }\n\n  .snoo-cls-6 {\n    fill: url(#snoo-radial-gragient-8) black;\n  }\n\n  .snoo-cls-7 {\n    fill: url(#snoo-radial-gragient-5) #fc4301;\n  }\n\n  .snoo-cls-8 {\n    fill: url(#snoo-radial-gragient-7) white;\n  }\n\n  .snoo-cls-9 {\n    fill: #842123;\n  }\n\n  .snoo-cls-10 {\n    fill: #ff4500;\n  }\n\n  .snoo-cls-11 {\n    fill: #ffc49c;\n  }\n</style>\n<radialGradient id="snoo-radial-gragient" cx="169.75" cy="92.19" fx="169.75" fy="92.19" r="50.98" gradientTransform="translate(0 11.64) scale(1 .87)" gradientUnits="userSpaceOnUse">\n  <stop offset="0" stop-color="#feffff"></stop>\n  <stop offset=".4" stop-color="#feffff"></stop>\n  <stop offset=".51" stop-color="#f9fcfc"></stop>\n  <stop offset=".62" stop-color="#edf3f5"></stop>\n  <stop offset=".7" stop-color="#dee9ec"></stop>\n  <stop offset=".72" stop-color="#d8e4e8"></stop>\n  <stop offset=".76" stop-color="#ccd8df"></stop>\n  <stop offset=".8" stop-color="#c8d5dd"></stop>\n  <stop offset=".83" stop-color="#ccd6de"></stop>\n  <stop offset=".85" stop-color="#d8dbe2"></stop>\n  <stop offset=".88" stop-color="#ede3e9"></stop>\n  <stop offset=".9" stop-color="#ffebef"></stop>\n</radialGradient>\n<radialGradient id="snoo-radial-gragient-2" cx="47.31" fx="47.31" r="50.98" xlink:href="#snoo-radial-gragient"></radialGradient>\n<radialGradient id="snoo-radial-gragient-3" cx="109.61" cy="85.59" fx="109.61" fy="85.59" r="153.78" gradientTransform="translate(0 25.56) scale(1 .7)" xlink:href="#snoo-radial-gragient"></radialGradient>\n<radialGradient id="snoo-radial-gragient-4" cx="-6.01" cy="64.68" fx="-6.01" fy="64.68" r="12.85" gradientTransform="translate(81.08 27.26) scale(1.07 1.55)" gradientUnits="userSpaceOnUse">\n  <stop offset="0" stop-color="#f60"></stop>\n  <stop offset=".5" stop-color="#ff4500"></stop>\n  <stop offset=".7" stop-color="#fc4301"></stop>\n  <stop offset=".82" stop-color="#f43f07"></stop>\n  <stop offset=".92" stop-color="#e53812"></stop>\n  <stop offset="1" stop-color="#d4301f"></stop>\n</radialGradient>\n<radialGradient id="snoo-radial-gragient-5" cx="-73.55" cy="64.68" fx="-73.55" fy="64.68" r="12.85" gradientTransform="translate(62.87 27.26) rotate(-180) scale(1.07 -1.55)" xlink:href="#snoo-radial-gragient-4"></radialGradient>\n<radialGradient id="snoo-radial-gragient-6" cx="107.93" cy="166.96" fx="107.93" fy="166.96" r="45.3" gradientTransform="translate(0 57.4) scale(1 .66)" gradientUnits="userSpaceOnUse">\n  <stop offset="0" stop-color="#172e35"></stop>\n  <stop offset=".29" stop-color="#0e1c21"></stop>\n  <stop offset=".73" stop-color="#030708"></stop>\n  <stop offset="1" stop-color="#000"></stop>\n</radialGradient>\n<radialGradient id="snoo-radial-gragient-7" cx="147.88" cy="32.94" fx="147.88" fy="32.94" r="39.77" gradientTransform="translate(0 .54) scale(1 .98)" xlink:href="#snoo-radial-gragient"></radialGradient>\n<radialGradient id="snoo-radial-gragient-8" cx="131.31" cy="73.08" fx="131.31" fy="73.08" r="32.6" gradientUnits="userSpaceOnUse">\n  <stop offset=".48" stop-color="#7a9299"></stop>\n  <stop offset=".67" stop-color="#172e35"></stop>\n  <stop offset=".75" stop-color="#000"></stop>\n  <stop offset=".82" stop-color="#172e35"></stop>\n</radialGradient>\n</defs>\n<path class="snoo-cls-10" d="m108,0h0C48.35,0,0,48.35,0,108h0c0,29.82,12.09,56.82,31.63,76.37l-20.57,20.57c-4.08,4.08-1.19,11.06,4.58,11.06h92.36s0,0,0,0c59.65,0,108-48.35,108-108h0C216,48.35,167.65,0,108,0Z"></path>\n<circle class="snoo-cls-1" cx="169.22" cy="106.98" r="25.22"></circle>\n<circle class="snoo-cls-2" cx="46.78" cy="106.98" r="25.22"></circle>\n<ellipse class="snoo-cls-3" cx="108.06" cy="128.64" rx="72" ry="54"></ellipse>\n<path class="snoo-cls-4" d="m86.78,123.48c-.42,9.08-6.49,12.38-13.56,12.38s-12.46-4.93-12.04-14.01c.42-9.08,6.49-15.02,13.56-15.02s12.46,7.58,12.04,16.66Z"></path>\n<path class="snoo-cls-7" d="m129.35,123.48c.42,9.08,6.49,12.38,13.56,12.38s12.46-4.93,12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46,7.58-12.04,16.66Z"></path>\n<ellipse class="snoo-cls-11" cx="79.63" cy="116.37" rx="2.8" ry="3.05"></ellipse>\n<ellipse class="snoo-cls-11" cx="146.21" cy="116.37" rx="2.8" ry="3.05"></ellipse>\n<path class="snoo-cls-5" d="m108.06,142.92c-8.76,0-17.16.43-24.92,1.22-1.33.13-2.17,1.51-1.65,2.74,4.35,10.39,14.61,17.69,26.57,17.69s22.23-7.3,26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z"></path>\n<circle class="snoo-cls-8" cx="147.49" cy="49.43" r="17.87"></circle>\n<path class="snoo-cls-6" d="m107.8,76.92c-2.14,0-3.87-.89-3.87-2.27,0-16.01,13.03-29.04,29.04-29.04,2.14,0,3.87,1.73,3.87,3.87s-1.73,3.87-3.87,3.87c-11.74,0-21.29,9.55-21.29,21.29,0,1.38-1.73,2.27-3.87,2.27Z"></path>\n<path class="snoo-cls-9" d="m62.82,122.65c.39-8.56,6.08-14.16,12.69-14.16,6.26,0,11.1,6.39,11.28,14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14,6.05-13.56,15.2c-.42,9.15,4.97,13.83,12.04,13.83.17,0,.35,0,.52,0-6.44-.16-11.3-4.79-10.91-13.2Z"></path>\n<path class="snoo-cls-9" d="m153.3,122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26,0-11.1,6.39-11.28,14.33-.17-8.88,5.13-15.99,12.05-15.99,7.07,0,13.14,6.05,13.56,15.2.42,9.15-4.97,13.83-12.04,13.83-.17,0-.35,0-.52,0,6.44-.16,11.3-4.79,10.91-13.2Z"></path>\n    </svg>\n  ');
let jp = class extends a {
    static get styles() {
        return J(":host {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 192px;\n  isolation: isolate;\n}\n:host:before {\n  content: '';\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  background-color: var(--color-global-orangered);\n  opacity: 0.75;\n  border-radius: 100%;\n  animation: scaleout 1.5s infinite ease-in-out;\n}\n:host shreddit-logo {\n  font-size: 64px;\n  height: 64px;\n  width: 64px;\n  z-index: 1;\n}\n@keyframes scaleout {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.5);\n    opacity: 0;\n  }\n}\n")
    }
    render() {
        return r` <shreddit-logo></shreddit-logo> `
    }
};
jp = v([A("shreddit-loading")], jp);
class Kp extends a {
    render() {
        return r` <slot></slot> `
    }
}
Kp.styles = s`:host{display:block}`;
let Qp = class extends Kp {
    constructor() {
        super(...arguments), this.pageTitle = ""
    }
    update(e) {
        super.update(e), this.setPageTitle(this.pageTitle)
    }
    setPageTitle(e) {
        document.title = e, rl(this, {
            message: e,
            options: {
                priority: al.assertive
            }
        })
    }
    connectedCallback() {
        super.connectedCallback(), this.setPageTitle(this.pageTitle)
    }
};
v([P({
    type: String,
    attribute: "title"
})], Qp.prototype, "pageTitle", void 0), Qp = v([A("shreddit-title")], Qp);
let zp = class extends Kp {
    constructor() {
        super(...arguments), this.href = "", this.delay = 0, this._timeout = void 0
    }
    connectedCallback() {
        super.connectedCallback(), this.delay > 0 ? this._timeout = window.setTimeout((() => this.redirect()), this.delay) : this.redirect()
    }
    disconnectedCallback() {
        window.clearTimeout(this._timeout)
    }
    redirect() {
        window.location.href !== this.href && window.location.replace(this.href)
    }
};
v([P({
    type: String,
    attribute: "href"
})], zp.prototype, "href", void 0), v([P({
    type: Number,
    attribute: "delay"
})], zp.prototype, "delay", void 0), zp = v([A("shreddit-redirect")], zp);
const Jp = "serverTimestamps",
    Xp = (() => {
        const e = "test";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (e) {
            return !1
        }
    })(),
    Zp = () => {
        if (window.serverTimestamp && Xp) {
            const {
                serverTimestamp: e
            } = window;
            try {
                const t = sessionStorage.getItem(Jp);
                if (t) {
                    return JSON.parse(t)[`${e}`]
                }
            } catch (e) {}
        }
        const e = window.performance.getEntriesByType("navigation")[0];
        return e && e.responseEnd - e.responseStart < 8
    };
let em = class extends a {
    connectedCallback() {
        super.connectedCallback(), window.serverTimestamp = this.timestamp;
        const e = `${this.timestamp}`;
        if (Xp) {
            const t = sessionStorage.getItem(Jp) || "{}";
            let o = {};
            try {
                o = JSON.parse(t)
            } catch (e) {
                sessionStorage.setItem(Jp, "{}")
            }
            sessionStorage.setItem(Jp, JSON.stringify(Object.assign(Object.assign({}, o), {
                [e]: void 0 !== o[e]
            })))
        }
    }
};
v([P({
    type: Number
})], em.prototype, "timestamp", void 0), em = v([A("faceplate-server-session")], em);
const tm = Symbol("mixins/connect-event");
let om = class extends(function(e) {
    if (tm in e) return e;
    class t extends e {
        connectedCallback() {
            super.connectedCallback && super.connectedCallback(), window.queueMicrotask((() => this.dispatchConnectEvent()))
        }
        dispatchConnectEvent() {
            if (!this.isConnected) return;
            const e = this.makeConnectEvent();
            return this.dispatchEvent(e), e
        }
        makeConnectEvent() {
            throw new Error("FaceplateEvent makeConnectEvent() method not implemented!")
        }
    }
    return t[tm] = !0, t
}(HTMLElement)) {
    static get styles() {
        return s`:host{display:none}`
    }
    makeConnectEvent() {
        const e = this.getAttribute("level");
        let t;
        if (e) {
            const o = e.toLowerCase();
            if (!Object.hasOwnProperty.call(bt, o)) return ee("faceplate-error", new Error(`Unknown level value "${e}" specified on <faceplate-alert> element`));
            const n = parseInt(o, 10);
            t = isNaN(n) ? bt[o] : n
        }
        const o = this.getAttribute("message"),
            n = this.getAttribute("name"),
            i = this.getAttribute("meta"),
            s = this.getAttribute("count"),
            a = this.getAttribute("show-when-offline"),
            r = this.getAttribute("cause"),
            d = this.getAttribute("source-element");
        return ee("faceplate-alert", {
            level: t,
            name: n || void 0,
            message: o || void 0,
            meta: i || void 0,
            count: null === s ? 1 : parseInt(s),
            originalAlert: this,
            emitTime: window.performance.now(),
            showWhenOffline: null !== a || void 0,
            cause: r || void 0,
            sourceElement: d || this.tagName
        })
    }
    dispatchConnectEvent() {
        super.dispatchConnectEvent(), this.hasAttribute("auto-remove") && "false" !== this.getAttribute("auto-remove") && this.remove()
    }
};
om = v([A("faceplate-alert")], om);
const nm = Symbol("mixins/user-action");
let im = class extends(function(e) {
    if (nm in e) return e;
    class t extends e {
        constructor() {
            super(...arguments), this._userActionEnabled = !1, this._loadingHandleClick = () => {
                this._userActionEnabled && this.userActionCallback()
            }, this._loadingHandleKeyDown = e => {
                this._userActionEnabled && ("Enter" !== e.code && "Space" !== e.code || (e.preventDefault(), e.stopPropagation(), this.userActionCallback()))
            }
        }
        get isActionable() {
            return this._userActionEnabled
        }
        enableUserActions() {
            this._userActionEnabled || (this._userActionEnabled = !0, this.addEventListener("click", this._loadingHandleClick), this.addEventListener("keydown", this._loadingHandleKeyDown))
        }
        disableUserActions() {
            this._userActionEnabled && (this._userActionEnabled = !1, this.removeEventListener("click", this._loadingHandleClick), this.removeEventListener("keydown", this._loadingHandleKeyDown))
        }
        userActionCallback() {}
    }
    return t[nm] = !0, t
}(Et(a))) {
    constructor() {
        super(...arguments), this.src = "", this.srcset = "", this.sizes = "", this.loading = St.Lazy, this.width = 0, this.height = 0, this.perfmark = "", this.isRequestInProgress = !1
    }
    static get styles() {
        return s`:host{display:inline-block}:host([loading=action]) div.placeholder{cursor:pointer}div{display:flex;align-items:center;justify-content:center;text-align:center;height:inherit;width:inherit;margin:auto;position:relative;overflow:hidden;border-radius:inherit}img{width:100%;height:100%}*{max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;object-fit:inherit}`
    }
    connectedCallback() {
        super.connectedCallback(), this.img || this.executeLoadingStrategy()
    }
    update(e) {
        e.has("src") && (this.img = void 0, this.isRequestInProgress = !1, this.executeLoadingStrategy()), super.update(e)
    }
    executeLoadingStrategy() {
        this.loading === St.Lazy ? this.enableObserver() : this.loading === St.Action ? this.enableUserActions() : this.loading === St.Eager && this.loadContent()
    }
    observerIsIntersectingCallback() {
        this.isObserved && this.disableObserver(), this.isRequestInProgress || this.loadContent()
    }
    userActionCallback() {
        this.isActionable && this.disableUserActions(), this.isRequestInProgress || this.loadContent()
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this.isObserved && this.disableObserver(), this.isActionable && this.disableUserActions()
    }
    async loadContent() {
        const {
            src: e
        } = this, t = new Image;
        t.onload = () => {
            if (t.src !== new URL(this.src, location.origin).href) return;
            this.isRequestInProgress = !1, this.img = t, this.requestUpdate(), this.perfmark && this.updateComplete.then((() => {
                performance.mark(this.perfmark)
            }));
            const e = ee("faceplate-load", {
                resource: t.src,
                src: this.src
            });
            this.dispatchEvent(e)
        }, t.onerror = () => {
            const e = ee("faceplate-error", new Error("Image failed to load"));
            this.dispatchEvent(e)
        }, this.isRequestInProgress = !0, t.src = e
    }
    render() {
        const e = this.isRequestInProgress && this.loading === St.Action;
        let t = r` <slot name="${d(e?"loading":void 0)}"></slot> `;
        return this.img && (t = r` <img src="${this.img.src}" srcset="${d(this.srcset)}" sizes="${d(this.sizes)}" alt="${d(this.alt)}"> `), r` <div class="${this.img?"loaded":"placeholder"}" style="${f({width:this.width?this.width+"px":"inherit",height:this.height?this.height+"px":"inherit"})}" tabindex="${d(this.isActionable?0:void 0)}"> ${t} </div> `
    }
};
v([P({
    type: String
})], im.prototype, "src", void 0), v([P({
    type: String
})], im.prototype, "srcset", void 0), v([P({
    type: String
})], im.prototype, "sizes", void 0), v([P({
    type: String
})], im.prototype, "loading", void 0), v([P({
    type: Number
})], im.prototype, "width", void 0), v([P({
    type: Number
})], im.prototype, "height", void 0), v([P({
    type: String
})], im.prototype, "perfmark", void 0), v([P({
    type: String
})], im.prototype, "alt", void 0), im = v([A("faceplate-img")], im);
const sm = e => {
    const {
        error: t,
        metadata: o,
        element: n,
        componentName: i
    } = e, s = n.translationContextValue?.isTranslationActive;
    let a;
    try {
        o && (a = JSON.stringify({
            isTranslationActive: s,
            ...o
        }))
    } catch (e) {}
    const r = "string" == typeof t ? t : void 0;
    let d = `[${i}] ${t.message??t?.msg??r??"unknown error"}`;
    a && (d += ` ${a}`),
        function(e, t) {
            const o = Qe({
                source: "translate_button",
                action: "error",
                noun: "app"
            }, {
                action_info: {
                    reason: t
                }
            });
            ie(e, o)
        }(n, d),
        function(e) {
            try {
                const t = "Sentry" in window ? window.Sentry : void 0;
                t?.captureException && t.captureException(e)
            } catch (e) {}
        }(d)
};

function am() {
    const e = window.location?.search ?? "";
    return new URLSearchParams(e).has("tl")
}

function rm() {
    let e = "",
        t = "";
    try {
        const o = ba(wo.get(Ms) ?? ""),
            n = !!o?.isTranslationActive,
            i = document.querySelector("shreddit-app"),
            s = i?.getAttribute("user-language");
        s && (e = n ? "on" : "off", t = s)
    } catch (e) {}
    return {
        translation_setting_state: e,
        target_language: t
    }
}
const dm = "force_seo",
    lm = "p",
    cm = "impressionid",
    um = "campaignId",
    hm = "forceAutoplay",
    pm = "unloadPixelTimeout",
    mm = "ti",
    gm = "debugAdPixels",
    _m = "videoAdLooping";

function fm() {
    return document.querySelector("shreddit-app")?.getAttribute("correlation-id")
}
var vm;
! function(e) {
    e.All = "all", e.Posts = "link", e.Subreddits = "sr", e.Users = "user", e.Comments = "comment", e.Media = "media"
}(vm || (vm = {})), new Set([vm.Posts, vm.Subreddits, vm.Users, vm.Comments, vm.Media]);
const Em = {
    DAY: "day",
    HOUR: "hour",
    WEEK: "week",
    MONTH: "month",
    YEAR: "year",
    ALL: "all"
};
var bm;
new Set(Object.values(Em)),
    function(e) {
        e.Comments = "comments", e.Hot = "hot", e.New = "new", e.Relevance = "relevance", e.Top = "top"
    }(bm || (bm = {}));
const Sm = bm.Relevance;
new Set([bm.Comments, bm.Hot, bm.New, bm.Relevance, bm.Top]), new Set([bm.Hot, bm.New]);
const ym = 5;
var Cm, Tm, Am, Im, Pm, wm, Rm, Om;
! function(e) {
    e.Trending = "trending", e.PromotedTrend = "promoted_trend", e.Recent = "recent", e.TrendingApproval = "trending_approval_tool"
}(Cm || (Cm = {})),
function(e) {
    e.PromotedTrend = "promoted_trend", e.Search = "search", e.SearchBar = "search_bar", e.Trending = "trending"
}(Tm || (Tm = {})),
function(e) {
    e.Spellcheck = "spellcheck"
}(Am || (Am = {})),
function(e) {
    e.PostCommunity = "post_community", e.PostProfile = "post_profile", e.PostTitle = "post_title", e.PostBody = "post", e.PostThumbnail = "post_thumbnail"
}(Im || (Im = {})),
function(e) {
    e.Comment = "comment", e.CommentAuthor = "comment_author", e.CommentSearchBar = "comment_search_bar", e.GoToThreadLink = "go_to_comment_link"
}(Pm || (Pm = {})),
function(e) {
    e.All = "all", e.Posts = "posts", e.Communities = "communities", e.People = "people", e.Comments = "comments", e.Media = "media"
}(wm || (wm = {})),
function(e) {
    e.PdpCommentSearchInput = "pdp-comment-search-input", e.HeaderSmall = "reddit-header-small", e.HeaderLarge = "reddit-header-large"
}(Rm || (Rm = {})),
function(e) {
    e.commentComposerHost = 'shreddit-async-loader[bundleName*="comment_composer"]', e.addCommentButton = "faceplate-tracker[source=shreddit_comment_count_button]", e.pdpCommentsTreeSortContainer = ".pdp-comments-tree-sort-container", e.pdpCommentSearchInput = "pdp-comment-search-input", e.pdpAmaCommentTabWrapper = ".pdp-ama-comment-tab-wrapper", e.shredditCommentsSortDropdown = "shreddit-comments-sort-dropdown"
}(Om || (Om = {})), wm.All, vm.All, wm.Posts, vm.Posts, wm.Communities, vm.Subreddits, wm.People, vm.Users, wm.Comments, vm.Comments, wm.Media, vm.Media;
const Nm = {
    [vm.All]: wm.All,
    [vm.Posts]: wm.Posts,
    [vm.Subreddits]: wm.Communities,
    [vm.Users]: wm.People,
    [vm.Comments]: wm.Comments,
    [vm.Media]: wm.Media
};
var Mm, Dm, Lm, Um;
! function(e) {
    e.Covid = "covid", e.Election = "election", e.NsfwSetting = "nsfw_setting", e.NsfwLoginPrompt = "nsfw_login_prompt"
}(Mm || (Mm = {})),
function(e) {
    e.Serp = "serp", e.Qf = "qf", e.PopularCarousel = "popular_carousel", e.PdpCommentSearch = "pdp_comment_search", e.PdpCommentSearchBar = "pdp_comment_search_bar", e.QueryRecommendation = "query_recommendation"
}(Dm || (Dm = {})),
function(e) {
    e.IsBlank = "data-is-blank", e.IsPromoted = "data-is-promoted"
}(Lm || (Lm = {})),
function(e) {
    e.GLOBAL = "global", e.COMMUNITY = "community", e.PDP = "pdp", e.PROFILE = "profile", e.CUSTOM_FEED = "custom_feed"
}(Um || (Um = {}));
const km = {
        type: Um.GLOBAL,
        path: "/"
    },
    xm = "search-typeahead-expandable-section-",
    Fm = {
        searchSduiPost: "search-sdui-post"
    },
    Bm = "last-dropdown-item",
    Vm = new Set([Go.Home, Go.Popular, Go.Community, Go.MFeed, Go.ArenaFeed]),
    Gm = new Set([Go.SearchResults, Go.SearchDropdown, Go.PostDetail, "search_results_trending", "typeahead", "search_dropdown", "search_authors_tab", "search_comments_tab", "search_communities_tab", "search_posts_tab"]),
    Wm = new Set([...Vm, ...Gm]),
    Hm = new Set([Go.PostDetail, Go.SingleCommentThread, Go.Community, Go.ProfileOverview, Go.MFeed]);

function qm() {
    const e = _i.getItem(gi.GoodVisitFS);
    return e ? JSON.parse(e) : null
}
const $m = new Set([Go.Guides, Go.GuidesConversation]),
    Ym = e => $m.has(e);

function jm(e) {
    let t = !1,
        o = !1,
        n = {};
    Ym(e) && (t = !0);
    const i = function() {
        const e = _i.getItem(gi.GoodVisitGuides);
        if (e) return JSON.parse(e);
        return null
    }();
    if (i) {
        const e = new Date(i.expires) <= new Date,
            t = $m.has(i.source);
        !e && t && (o = !0, n = i.eventPayload)
    }
    return {
        isGuidesSession: t,
        isGuidesLocalStorageSession: o,
        eventPayload: n
    }
}

function Km(e, t) {
    if (!Ym(e)) return;
    const o = JSON.stringify({
        source: e,
        expires: new Date((new Date).getTime() + 5e3),
        eventPayload: t
    });
    _i.setItem(gi.GoodVisitGuides, o)
}
const Qm = Go.Inbox;

function zm(e) {
    let t = !1,
        o = !1;
    e === Qm && (t = !0);
    const n = function() {
        const e = _i.getItem(gi.GoodVisitInbox);
        if (e) return JSON.parse(e);
        return null
    }();
    if (n) {
        const e = new Date(n.expires) <= new Date,
            t = n.source === Qm;
        !e && t && (o = !0)
    }
    return {
        isInboxSession: t,
        isInboxLocalStorageSession: o
    }
}

function Jm(e) {
    let t = !1,
        o = !1;
    e === Go.Klp && (t = !0);
    const n = function() {
        const e = _i.getItem(gi.GoodVisitKLP);
        if (e) return JSON.parse(e);
        return null
    }();
    if (n) {
        const e = new Date(n.expires) <= new Date,
            t = n.source === Go.Klp;
        !e && t && (o = !0)
    }
    return {
        isKLPSession: t,
        isKLPLocalStorageSession: o
    }
}
const Xm = ot(We(a)),
    Zm = 3e4;
let eg = class extends Xm {
    constructor() {
        super(), this.referrerType = Vo.Reddit, this.pageType = Go.Unknown, this.localStorageAvailable = !1, this.timeoutId = null, this.count = null, this.goodVisitQueue = [], this.hasSeoSession = null, this.updatedAt = null, this.initialized = !1, this.screenViewData = {}, this.isFeedSearchSession = null, this.isFeedSearchLocalStorageSession = null, this.isKLPSession = null, this.isKLPLocalStorageSession = null, this.isGuidesSession = null, this.isGuidesLocalStorageSession = null, this.guidesLSEventPayload = null, this.isInboxSession = null, this.isInboxLocalStorageSession = null, this.leaveEventType = "beforeunload", this._windowEvents = new x(this, (() => window)), this.pageHideListener = () => {
            this.clearTimeout(), this.saveState()
        }, this.pageShowListener = () => {
            this.boot()
        }, this.setScreenViewData = e => {
            this.screenViewData = e
        }, this.storePlatformGoodVisit = () => {
            ! function(e, t) {
                let o = e,
                    n = {};
                if (!Wm.has(e)) return;
                if (Gm.has(e)) {
                    if (n = t, !n.search) return;
                    n?.search?.structure_type && [Tm.Trending, Tm.PromotedTrend].includes(n?.search?.structure_type) && (o = Go.SearchResultsTrending)
                }
                Vm.has(e) && (n = {
                    timer: {
                        referrer_correlation_id: fm()
                    }
                });
                const i = JSON.stringify({
                    key: kn(),
                    source: o,
                    expires: new Date((new Date).getTime() + 5e3),
                    eventPayload: n
                });
                _i.setItem(gi.GoodVisitFS, i)
            }(this.pageType, this.screenViewData)
        }, this.storePlatformKLPGoodVisit = () => {
            ! function(e, t) {
                if (e !== Go.Klp) return;
                const o = JSON.stringify({
                    key: kn(),
                    source: Go.Klp,
                    expires: new Date((new Date).getTime() + 5e3),
                    eventPayload: t
                });
                _i.setItem(gi.GoodVisitKLP, o)
            }(this.pageType, this.screenViewData)
        }, this.storePlatformGuidesGoodVisit = () => {
            Km(this.pageType, this.screenViewData)
        }, this.storeGuidesGoodVisit = e => {
            Km(this.pageType, {
                ...this.screenViewData,
                search: e || void 0
            })
        }, this.storePlatformInboxGoodVisit = () => {
            ! function(e, t) {
                if (Qm !== e) return;
                const o = JSON.stringify({
                    source: e,
                    expires: new Date((new Date).getTime() + 5e3),
                    eventPayload: t
                });
                _i.setItem(gi.GoodVisitInbox, o)
            }(this.pageType, this.screenViewData)
        }, this._onPageLeave = () => {
            this.isKLPSession ? this.storePlatformKLPGoodVisit() : this.isGuidesSession ? this.storePlatformGuidesGoodVisit() : this.isInboxSession ? this.storePlatformInboxGoodVisit() : this.storePlatformGoodVisit(), this.screenViewData = {}
        }, this._onPagehide = this._windowEvents.define("pagehide", this.pageHideListener), this._onPageshow = this._windowEvents.define("pageshow", this.pageShowListener), this._onBeforeRoute = this._windowEvents.define("beforeRoute", this._onPageLeave), this.tick = () => {
            null !== this.count && (this.count += 1e3, this.updatedAt = (new Date).getTime(), this.goodVisitQueue.length > 0 && this.count >= this.goodVisitQueue[0] && this.trackGoodVisit(), this.count >= Zm ? this.clearState() : this.timeoutId = window.setTimeout(this.tick, 1e3))
        }, this.isKLPReferredPage = () => this.isPostPage() || this.isTopicPage() || this.isCommunityPage() || this.isReferredKLPPage(), this.isKLPGoodVisitSession = () => this.isKLPSession || this.isKLPLocalStorageSession && this.isKLPReferredPage(), this.isGuidesGoodVisitSession = () => this.isGuidesSession || this.isGuidesLocalStorageSession, this.isInboxGoodVisitSession = () => this.isInboxSession || this.isInboxLocalStorageSession, this.isPostPage = () => this.pageType === Go.PostDetail || this.pageType === Go.SingleCommentThread, this.isTopicPage = () => this.pageType === Go.TopicPage, this.isReferredKLPPage = () => this.pageType === Go.Klp && this.referrerType === Vo.Reddit, this.isCommunityPage = () => this.pageType === Go.Community, this.isCommunityWikiPage = () => this.pageType === Go.CommunityWiki, this.isArenaFeedPage = () => this.pageType === Go.ArenaFeed, this.isPostStatsPage = () => this.pageType === Go.PostStats, this.clearTimeout = () => {
            null !== this.timeoutId && window.clearTimeout(this.timeoutId), this.timeoutId = null
        }, this.trackGoodVisit = () => {
            if (this.goodVisitQueue.length > 0) {
                let e;
                switch (!0) {
                    case this.isKLPGoodVisitSession():
                        e = (({
                            isGoodVisitFeedTimer: e,
                            millis: t,
                            screenViewData: o
                        }) => ({
                            screenViewData: o,
                            timer: {
                                type: e ? qo.GoodVisitFeed : qo.GoodVisit,
                                millis: t
                            }
                        }))({
                            isGoodVisitFeedTimer: this.isKLPReferredPage(),
                            millis: this.goodVisitQueue[0],
                            screenViewData: this.screenViewData
                        });
                        break;
                    case this.isGuidesGoodVisitSession():
                        e = (({
                            isSeo: e,
                            millis: t,
                            screenViewData: o,
                            pageType: n
                        }) => ({
                            screenViewData: o,
                            timer: {
                                type: e ? qo.GoodVisit : qo.GoodVisitGuides,
                                millis: t,
                                referrer: n !== Go.Guides ? "gen_guides_conversation" : void 0
                            }
                        }))({
                            pageType: this.pageType,
                            isSeo: this.isSeoSession,
                            millis: this.goodVisitQueue[0],
                            screenViewData: {
                                ...this.screenViewData,
                                ...this.guidesLSEventPayload ? this.guidesLSEventPayload : {}
                            }
                        });
                        break;
                    case this.isPostStatsPage():
                        e = {
                            screenViewData: this.screenViewData,
                            timer: {
                                type: qo.GoodVisitPostStats,
                                millis: this.goodVisitQueue[0],
                                referrer: this.referrerType
                            }
                        };
                        break;
                    case this.isInboxGoodVisitSession():
                        e = (({
                            millis: e,
                            screenViewData: t
                        }) => ({
                            screenViewData: t,
                            timer: {
                                type: qo.GoodVisitInbox,
                                millis: e
                            }
                        }))({
                            screenViewData: this.screenViewData,
                            millis: this.goodVisitQueue[0]
                        });
                        break;
                    case this.isCommunityWikiPage():
                        e = {
                            screenViewData: this.screenViewData,
                            timer: {
                                type: qo.GoodVisitCommunityWiki,
                                millis: this.goodVisitQueue[0],
                                referrer: this.referrerType
                            }
                        };
                        break;
                    default:
                        e = function({
                            millis: e,
                            screenViewData: t,
                            isFeedSearchSession: o,
                            isFeedSearchLocalStorageSession: n
                        }) {
                            let i, s, a = qo.GoodVisit;
                            if (o)
                                if (n) {
                                    const e = qm();
                                    i = e?.source;
                                    const o = Vm.has(e?.source),
                                        n = Gm.has(e?.source);
                                    if (o) {
                                        const {
                                            timer: t
                                        } = e?.eventPayload || {};
                                        a = qo.GoodVisitFeed, s = t?.referrer_correlation_id
                                    }
                                    if (n) {
                                        a = qo.GoodVisitSearch;
                                        const {
                                            search: o
                                        } = e?.eventPayload || {};
                                        t.search = {
                                            ...t?.search || {},
                                            ...o || {},
                                            conversation_id: o?.conversation_id ?? "",
                                            impression_id: o?.impression_id ?? "",
                                            origin_page_type: o?.origin_page_type ?? "",
                                            query: o?.query ?? "",
                                            query_id: o?.query_id ?? ""
                                        }
                                    }
                                } else a = qo.GoodVisitSearch;
                            return {
                                screenViewData: t,
                                timer: {
                                    type: a,
                                    millis: e,
                                    ...i && {
                                        referrer: i
                                    },
                                    ...s && {
                                        referrer_correlation_id: s
                                    }
                                }
                            }
                        }({
                            millis: this.goodVisitQueue[0],
                            screenViewData: this.screenViewData,
                            isFeedSearchSession: this.isFeedSearchSession,
                            isFeedSearchLocalStorageSession: this.isFeedSearchLocalStorageSession
                        })
                }
                const t = (({
                    screenViewData: e,
                    timer: t,
                    hostPageType: o,
                    translationMetrics: n
                }) => Qe({
                    source: de.Global,
                    action: le.View,
                    noun: rn({
                        noun: re.Heartbeat,
                        pageType: o
                    })
                }, {
                    ...e,
                    timer: t,
                    translation_metrics: n
                }))({
                    ...e,
                    hostPageType: this.pageType,
                    translationMetrics: rm()
                });
                this.trackEvent(t), this.goodVisitQueue.shift()
            }
        }, this.localStorageAvailable = _i.isAvailable(), this.leaveEventType = Es.eventType
    }
    getState() {
        return {
            count: this.count,
            updatedAt: this.updatedAt
        }
    }
    attributeChangedCallback(e, t, o) {
        super.attributeChangedCallback(e, t, o), "pagetype" === e && t !== o && (this.clearTimeout(), this.boot())
    }
    get isSeoSession() {
        return this.referrerType === Vo.Seo || !!this.hasSeoSession
    }
    connectedCallback() {
        if (super.connectedCallback(), !this.initialized) {
            if (this.initialized = !0, this.boot(), window.addEventListener(this.leaveEventType, this._onPageLeave), this.subscribe(Iu.ScreenViewDataLoaded, this.setScreenViewData), window.location.search.includes(dm)) {
                const e = new URL(window.location.href);
                e.searchParams.delete(dm), history.replaceState({}, "", e.toString())
            }
            this.subscribe(Iu.GuidesStoreGoodVisit, this.storeGuidesGoodVisit)
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback(), window.removeEventListener(this.leaveEventType, this._onPageLeave), this.unsubscribe(Iu.ScreenViewDataLoaded, this.setScreenViewData), this.clearTimeout()
    }
    boot() {
        if (this.timeoutId) return;
        const {
            isFeedSearchSession: e,
            isFeedSearchLocalStorageSession: t
        } = function(e, t) {
            let o = !1,
                n = !1;
            if (!Hm.has(e)) return {
                isFeedSearchSession: o,
                isFeedSearchLocalStorageSession: n
            };
            t === Vo.RedditSearch && (o = !0);
            const i = qm();
            if (i) {
                const e = new Date(i.expires) <= new Date,
                    t = Wm.has(i.source);
                !e && t && (o = !0, n = !0)
            }
            return {
                isFeedSearchSession: o,
                isFeedSearchLocalStorageSession: n
            }
        }(this.pageType, this.referrerType);
        this.isFeedSearchSession = e, this.isFeedSearchLocalStorageSession = t;
        const {
            isKLPSession: o,
            isKLPLocalStorageSession: n
        } = Jm(this.pageType);
        this.isKLPSession = o, this.isKLPLocalStorageSession = n;
        const {
            isGuidesSession: i,
            isGuidesLocalStorageSession: s,
            eventPayload: a
        } = jm(this.pageType);
        this.isGuidesSession = i, this.isGuidesLocalStorageSession = s, this.guidesLSEventPayload = a;
        const {
            isInboxSession: r,
            isInboxLocalStorageSession: d
        } = zm(this.pageType);
        this.isInboxSession = r, this.isInboxLocalStorageSession = d, this.referrerType === Vo.Seo || this.isFeedSearchSession || this.isKLPGoodVisitSession() || this.isGuidesGoodVisitSession() || this.isArenaFeedPage() || this.isPostStatsPage() || this.isInboxGoodVisitSession() || this.isCommunityWikiPage() ? this.initState() : this.referrerType === Vo.Other ? this.clearState() : this.loadState(), this.tick()
    }
    initState() {
        this.count = 0, this.updatedAt = (new Date).getTime(), this.referrerType === Vo.Seo || this.isGuidesSession ? this.goodVisitQueue = [Zm] : this.goodVisitQueue = [15e3, Zm]
    }
    clearState() {
        this.hasSeoSession = !1, this.count = null, this.updatedAt = null, this.localStorageAvailable && _i.removeItem(gi.GoodVisit)
    }
    loadState() {
        if (!this.localStorageAvailable) return;
        const e = _i.getItem(gi.GoodVisit);
        var t;
        if (e) try {
            const o = JSON.parse(e),
                n = null !== (t = o) && "number" == typeof t.count && "number" == typeof t.updatedAt && Array.isArray(t.goodVisitQueue) && t.goodVisitQueue.every((e => "number" == typeof e));
            if (!n) throw new Error("Invalid SEO session object");
            this.hasSeoSession = !0, this.count = o.count, this.updatedAt = o.updatedAt, this.goodVisitQueue = o.goodVisitQueue;
            const i = (new Date).getTime();
            i - this.updatedAt > 5e3 && this.clearState()
        } catch (e) {
            this.clearState()
        }
    }
    saveState() {
        if (!this.localStorageAvailable) return;
        if (null === this.count) return;
        const e = JSON.stringify({
            count: this.count,
            updatedAt: this.updatedAt,
            goodVisitQueue: this.goodVisitQueue
        });
        _i.setItem(gi.GoodVisit, e)
    }
};
v([P({
    type: String
})], eg.prototype, "referrerType", void 0), v([P({
    type: String
})], eg.prototype, "pageType", void 0), eg = v([A("shreddit-good-visit-tracker")], eg);
const tg = ot(a);
let og = class extends tg {
        constructor() {
            super(...arguments), this.isNsfwBlocked = !1, this.isEmbed = !1, this.isEmbedFlexible = !1
        }
        static get styles() {
                return s`:host{--default-aspect-ratio:2;--configured-aspect-ratio:var(--aspect-ratio, var(--default-aspect-ratio));--computed-aspect-ratio:calc(100% / var(--configured-aspect-ratio));--default-min-height:150px;--configured-min-height:var(--min-height, var(--default-min-height));--default-max-height:100vh;--configured-max-height:var(--max-height, var(--default-max-height));--aspect-ratio-padding:min(
// This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is'==/an_example/){of_beautifier();}else{var a=b?(c%d):e[f];}
